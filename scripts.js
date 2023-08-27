const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data[0].url);
        console.log(data);
    } catch (error) {
        console.error('There was an error!', error);
    }
} 

fetchNews();