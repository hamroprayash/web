
// RSS Feed URLs
const rssFeeds = {
    bbc: { url: "https://feeds.bbci.co.uk/news/rss.xml", name: "BBC News" },
    cnn: { url: "https://rss.cnn.com/rss/edition.rss", name: "CNN News" },
    nyt: { url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", name: "NY Times" }
};

function openNews(source) {
    localStorage.setItem('newsSource', source);
    window.location.href = "news.html"; // Redirect to news page
}

function goBack() {
    window.location.href = "index.html"; // Go back to main page
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

async function fetchFullArticle(url) {
    try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

        let response = await fetch(proxyUrl);
        let data = await response.json();
        let html = data.contents;

        // Parse HTML with DOMParser
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");

        // Load Readability.js dynamically if not available
        if (typeof Readability === "undefined") {
            let script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/readability/0.4.4/Readability.js";
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
        }

        // Extract clean article text
        let article = new Readability(doc).parse();
        const content = article?.content || "Failed to extract content";

        // Display article in news div
        document.getElementById("news").innerHTML = `<h2>${article.title}</h2>${content}<br>
            <button onclick="fetchNews()">🔙 Back to News</button>`;

    } catch (error) {
        console.error("Error fetching article:", error);
        document.getElementById("news").innerHTML = "<p>Failed to load article.</p>";
    }
}

// Load news when news page opens
if (window.location.pathname.endsWith("news.html")) {
    fetchNews();
}
