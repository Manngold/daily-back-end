import { puppeteer } from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://movie.naver.com/movie/running/current.nhn");

  const movieTitle = await page.evaluate(() =>
    [...document.querySelectorAll("ul.lst_detail_t1 dt.tit a")].map(
      ele => ele.innerText
    )
  );

  const movieRate = await page.evaluate(() =>
    [...document.querySelectorAll("div.star_t1 a span.num")].map(
      rate => rate.innerText
    )
  );

  const reservationRate = await page.evaluate(() =>
    [...document.querySelectorAll("div.star_t1.b_star span.num")].map(
      rate => rate.innerText
    )
  );

  const movieRank = {};
  for (index = 0; index < movieRate.length; index++) {
    movieRank[index] = {
      title: movieTitle[index],
      Rate: movieRate[index],
      resRate: reservationRate[index]
    };
  }
  console.log(movieRank);
  await browser.close();
})();
