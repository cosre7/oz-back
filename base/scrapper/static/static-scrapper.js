// const CRAWL_URL =
//     "https://search.naver.com/search.naver?query=%EC%BB%A4%ED%94%BC";
const CRAWL_URL = "https://www.npmjs.com/package/cheerio";
import axios from "axios";
import * as cheerio from "cheerio";

async function crawl() {
    console.log("crawl");
    const ressponse = await axios.get(CRAWL_URL);
    const $ = cheerio.load(ressponse.data);
    // console.log($("title").text());
    // console.log($("meta[name=description]").attr("content"));
    // console.log($("meta[name=keywords]").attr("content"));
    // console.log($("body").text());
    const packageName = $("h1.heading-element").text();
    const packageDescription = $("h5.heading-element").text();
    console.log(packageName);
    console.log(packageDescription);
}

const StaticScrapper = {
    crawl: crawl,
};

export default StaticScrapper;
