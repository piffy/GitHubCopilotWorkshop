export class WebScraper {
    private timeout: number;

    constructor(timeout: number = 5000) {
        this.timeout = timeout;
    }

    async fetchContentAsync(url: string): Promise<string> {
        // Bug: no URL validation
        // Bug: no timeout implementation
        // Bug: no error handling
        // Nota: fetch non supporta timeout nativamente senza AbortController
        const response = await fetch(url);
        return await response.text();
    }

    extractLinks(html: string): string[] {
        // Bug: very basic regex that misses many cases
        const linkRegex = /href="([^"]+)"/g;
        const links: string[] = [];
        let match: RegExpExecArray | null;
        while ((match = linkRegex.exec(html)) !== null) {
            links.push(match[1]);
        }
        return links;
    }

    async scrapeMultipleUrlsAsync(urls: string[]): Promise<{ [url: string]: string }> {
        const results: { [url: string]: string } = {};
        // Bug: no concurrent limiting, could overwhelm server
        for (const url of urls) {
            try {
                results[url] = await this.fetchContentAsync(url);
            } catch (e) {
                // Bug: swallows all errors silently
                results[url] = "";
            }
        }
        return results;
    }
}
