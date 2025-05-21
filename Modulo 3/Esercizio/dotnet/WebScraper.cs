using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BuggyApp
{
    public class WebScraper
    {
        private readonly int timeout;
        private readonly HttpClient httpClient;

        public WebScraper(int timeout = 5000)
        {
            this.timeout = timeout;
            httpClient = new HttpClient();
        }

        public async Task<string> FetchContentAsync(string url)
        {
            // Bug: no URL validation
            // Bug: no timeout implementation
            // Bug: no error handling
            var response = await httpClient.GetAsync(url);
            return await response.Content.ReadAsStringAsync();
        }

        public List<string> ExtractLinks(string html)
        {
            // Bug: very basic regex that misses many cases
            var linkRegex = new Regex(@"href=""([^""]+)""");
            var links = new List<string>();
            var matches = linkRegex.Matches(html);

            foreach (Match match in matches)
            {
                links.Add(match.Groups[1].Value);
            }

            return links;
        }

        public async Task<Dictionary<string, string>> ScrapeMultipleUrlsAsync(List<string> urls)
        {
            var results = new Dictionary<string, string>();
            
            // Bug: no concurrent limiting, could overwhelm server
            foreach (var url in urls)
            {
                try
                {
                    results[url] = await FetchContentAsync(url);
                }
                catch (Exception)
                {
                    // Bug: swallows all errors silently
                    results[url] = "";
                }
            }

            return results;
        }
    }
}