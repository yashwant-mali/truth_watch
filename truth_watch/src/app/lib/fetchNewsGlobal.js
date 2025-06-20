export async function fetchNewsGlobal() {
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
        console.error("Missing GNEWS_API_KEY");
        return [];
    }

    const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&country=us`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        console.error("Error fetching news:", res.statusText);
        return [];
    }

    const data = await res.json();
    return data.articles;
}
