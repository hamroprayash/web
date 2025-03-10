
// RSS Feed URLs for different news sources
const rssFeeds = {
    bbc: { url: "https://feeds.bbci.co.uk/news/rss.xml", name: "BBC News" },
    cnn: { url: "https://rss.cnn.com/rss/edition.rss", name: "CNN News" },
    nyt: { url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", name: "NY Times" }
};

// Open selected news source
function openNews(source) {
    if (!rssFeeds[source]) return;
    localStorage.setItem('newsSource', source);
    window.location.href = "news.html";
}

// Go back to main page
function goBack() {
    window.location.href = "index.html";
}

// Fetch RSS news
async function fetchNews() {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "<p>Loading news...</p>";

    const source = localStorage.getItem('newsSource');
    if (!source || !rssFeeds[source]) {
        newsContainer.innerHTML = "<p>Error: Invalid news source.</p>";
        return;
    }

    const rssUrl = rssFeeds[source].url;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, "text/xml");
        const items = xmlDoc.querySelectorAll("item");

        let newsHtml = "";
        items.forEach((item, index) => {
            if (index < 10) { // Limit to 10 news articles
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                newsHtml += `<div class="news-item">
                    <a href="#" onclick="fetchFullArticle('${link}'); return false;">${title}</a>
                    <button onclick="readNews('${title}')">🔊</button>
                </div>`;
            }
        });

        newsContainer.innerHTML = newsHtml || "<p>No news found.</p>";
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load news.</p>";
    }
}

// Fetch full article content
async function fetchFullArticle(url) {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "<p>Loading full article...</p>";

    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // Check if Readability is available
        if (typeof Readability === "undefined") {
            let script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/readability/0.4.4/Readability.js";
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
        }

        const article = new Readability(doc).parse();
        if (!article || !article.content) throw new Error("Failed to extract article");

        newsContainer.innerHTML = `<h2>${article.title}</h2>${article.content}
            <br><button onclick="fetchNews()">🔙 Back to News</button>`;
    } catch (error) {
        console.error("Error fetching article:", error);
        newsContainer.innerHTML = "<p>⚠️ Failed to load article. Try another source.</p>";
    }
}

// Read news aloud
function readNews(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// Auto-fetch news when news page loads
if (window.location.pathname.endsWith("news.html")) {
    fetchNews();
}
