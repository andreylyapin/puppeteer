"use strict";
const request = require("request");
const express = require(`express`);

//const puppeteer = require(`puppeteer-extra`);

const app = express();

const PORT = process.env.PORT || 8080;

app.get(`/`, (req, res) => {
  res.end(`<h1>Welcome to App</h1>`);
});
app.get(`/about`, (req, res) => {
  res.end(`<h1>About to App!</h1>`);
});
app.listen(PORT, () => {
  console.log(`Successful`);
});
/*
(async() => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.waitForTimeout(100000);
  await browser.close();
})();
*/
request.post({
  url: `http://a0505612.xsph.ru/micromodules/receiver.php`,
  form: { message: `MY MESSAGE` },
  followAllRedirects: true
  },
  (err, response, body) => {  
});
