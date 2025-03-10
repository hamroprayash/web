
// RSS Feed URLs for different news sources
const rssFeeds = {
    bbc: { url: "https://feeds.bbci.co.uk/news/rss.xml", name: "BBC News" },
    cnn: { url: "https://rss.cnn.com/rss/edition.rss", name: "CNN News" },
    nyt: { url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", name: "NY Times" }
};

function openNews(source) {
    if (!rssFeeds[source]) return;

    // Save selected news source in localStorage
    localStorage.setItem('newsSource', source);

    // Redirect to the news page
    window.location.href = "news.html";
}

function goBack() {
    window.location.href = "index.html"; // Go back to the main screen
}

function fetchNews() {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "<p>Loading news...</p>";

    const source = localStorage.getItem('newsSource');
    if (!source || !rssFeeds[source]) {
        newsContainer.innerHTML = "<p>Error: Invalid news source.</p>";
        return;
    }

    const rssUrl = rssFeeds[source].url;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            let newsHtml = "";
            items.forEach((item, index) => {
                if (index < 10) { // Limit to 10 news articles
                    const title = item.querySelector("title").textContent;
                    const link = item.querySelector("link").textContent;
                    newsHtml += `<div class="news-item">
                        <a href="#" onclick="fetchFullArticle('${link}')">${title}</a>
                        <button onclick="readNews('${title}')">🔊</button>
                    </div>`;
                }
            });

            newsContainer.innerHTML = newsHtml || "<p>No news found.</p>";
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>Failed to load news.</p>";
        });
}

function readNews(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// Fetch full article text using Mozilla Readability.js
async function fetchFullArticle(url) {
    try {
        let response = await fetch(url);
        let html = await response.text();

        // Parse the HTML using DOMParser
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");

        // Load Readability.js dynamically if not already available
        if (typeof Readability === "undefined") {
            let script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/readability/0.4.4/Readability.js";
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
        }

        // Extract article content
        let article = new Readability(doc).parse();
        const content = article?.content || "Failed to extract content";

        // Display article in a modal or new page
        document.getElementById("news").innerHTML = `<h2>${article.title}</h2>${content}<br>
            <button onclick="fetchNews()">🔙 Back to News</button>`;

    } catch (error) {
        console.error("Error fetching article:", error);
        document.getElementById("news").innerHTML = "<p>Failed to load article.</p>";
    }
}

// Fetch news when the news page loads
if (window.location.pathname.endsWith("news.html")) {
    fetchNews();
}
