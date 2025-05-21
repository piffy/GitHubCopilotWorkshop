using System.Globalization;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

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
    Console.WriteLine("Authentication callback received.");
    return Results.Ok($"Authentication successful, now you can close this window");
}).WithOpenApi();

string RandomCity() => new[] { "Roma", "Milano", "Napoli", "Torino", "Firenze" }[Random.Shared.Next(5)];
string RandomStreet() => new[] { "Garibaldi", "dei Mille", "della Conciliazione", "Toledo", "Vittorio Emanuele II" }[Random.Shared.Next(5)];
string RandomDomain() => new[] { "gmail.com", "outlook.com", "live.com"}[Random.Shared.Next(3)];
api.MapPost("/generateRandomUser", ([FromBody] Request request) =>
{
    Console.WriteLine("Generating random user...");
    Console.WriteLine($"Request received: {JsonSerializer.Serialize(request)}");
    
    string[] nationalities = ["Italian", "German", "Spanish", "French", "Dutch"];
    string gender = Random.Shared.Next(0, 2) == 0 ? "Male" : "Female";

    if(request == null || string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Surname))
    {
        return Results.BadRequest("Name and Surname are required.");
    }

    string name = request.Name;
    string surname = request.Surname;

    var randomUser = new
    {
        Name = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(name),
        Surname = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(surname),
        Email = $"{name.ToLower()}.{surname.ToLower()}{Random.Shared.Next(1, 100)}@{RandomDomain()}",
        Address = $"Via {RandomStreet()} {Random.Shared.Next(1, 200)}, {RandomCity()}",
        PhoneNumber = $"+39 3{Random.Shared.Next(10, 99)} {Random.Shared.Next(1000000, 9999999)}",
        Gender = gender,
        Nationality = nationalities[Random.Shared.Next(nationalities.Length)],
        BirthDate = DateTime.Now.AddYears(-Random.Shared.Next(18, 80))
                              .AddDays(Random.Shared.Next(0, 365))
                              .ToString("yyyy-MM-dd"),
        Username = $"{name.ToLower()[0]}{surname.ToLower()}{Random.Shared.Next(100, 999)}"
    };

    Console.WriteLine($"Generated user: {JsonSerializer.Serialize(randomUser)}");

    return Results.Ok(randomUser);
}).WithOpenApi();

app.Run();

class Request
{
    public string? Name { get; set; }
    public string? Surname { get; set; }
}