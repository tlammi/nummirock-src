
const URL = process.env.PUBLIC_URL + "/resources.json";

async function fetchNewsInfo() {
    console.log("fetching news");
    const r = await fetch(URL);
    const t = await r.text();
    const o = JSON.parse(t);
    return o.news;
}

async function fetchBandInfo() {
    console.log("fetching bands");
    const r = await fetch(URL);
    const t = await r.text();
    const o = JSON.parse(t);
    return o.bands;
}


export { fetchBandInfo, fetchNewsInfo };
