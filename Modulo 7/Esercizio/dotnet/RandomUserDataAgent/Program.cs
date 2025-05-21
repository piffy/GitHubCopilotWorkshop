using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Octokit;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var api = app.MapGroup("/api");

api.MapGet("/authCallback", () =>
{
    return Results.Ok($"Authentication successful, now you can close this window");
}).WithOpenApi();

var appName = "RandomUserDataAgentApp";
app.MapPost("/", async ([FromHeader(Name = "X-GitHub-Token")] string githubToken, [FromBody] Payload payload) =>
{
    Console.WriteLine($"Received payload: {System.Text.Json.JsonSerializer.Serialize(payload)}\n\n\n");

    var octokitClient = new GitHubClient(new Octokit.ProductHeaderValue(appName))
    {
        Credentials = new Credentials(githubToken)
    };
    var user = await octokitClient.User.Current();
    Console.WriteLine($"User: {user.Login}\n\n\n");

    payload.Messages.Insert(0, new Message
    {
        Role = "system",
        Content = $"Start every response with the user's name, which is @{user.Login}."
    });
    payload.Messages.Insert(0, new Message
    {
        Role = "system",
        Content = "You are a helpful assistant that replies to user messages as if tou were Blackbeard, the Pirate. Answer in Italian language"
    });
        payload.Messages.Insert(0, new Message
    {
        Role = "system",
        Content = "If the user doesn't explicitly ask you to create a new user, do nothing; otherwise, generate a fake user with first name, last name, email, home address, phone number, nationality, date of birth, and username, responding with a bulleted list and using an informal tone."
    });

    var httpClient = new HttpClient();
    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", githubToken);
    payload.Stream = true;

    Console.WriteLine($"Sending request to GitHub Copilot with payload: {System.Text.Json.JsonSerializer.Serialize(payload)}\n\n\n");

    var copilotResponse = await httpClient.PostAsJsonAsync("https://api.githubcopilot.com/chat/completions", payload);
    var responseStream = await copilotResponse.Content.ReadAsStreamAsync();

    Console.WriteLine($"Response content: {await copilotResponse.Content.ReadAsStringAsync()}\n\n\n");

    return Results.Stream(responseStream, "application/json");
});


app.Run();

class Payload
{
    public bool Stream { get; set; }
    public List<Message> Messages { get; set; } = [];
}

class Message
{
    public required string Role { get; set; }
    public required string Content { get; set; }
}