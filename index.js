"use strict";
const request = require("request");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 80;

app.get(`/`, (req, res) => {
    res.end(`<h1>10</h1>`);
});
app.listen(PORT, () => {
    console.log(`Yahoo!`);
});


/* upload puppeteer with all required plugins */
const puppeteer = require (`puppeteer-extra`);

/* upload plugins */
const hidePuppeteer = require (`puppeteer-extra-plugin-stealth`);
const setProxy = require (`puppeteer-extra-plugin-proxy`);
const adblockerPlugin = require (`puppeteer-extra-plugin-adblocker`);

puppeteer.use (hidePuppeteer ());                                       // disguise puppeteer

puppeteer.use (setProxy ({                                              // use proxy
  address: `45.94.228.189`,
  port: 8000,
  credentials: {
    username: `W6EDEd`,
    password: `swbhsW`,
  }
}));

puppeteer.use (adblockerPlugin ({                                       // use adblock plugin
  blockTrackers: true }
));        


const arrayUserAgents = [
  `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36`,
  `Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36`,
  `Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36`,
  `Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko`,
  `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9`,
  `Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko`,
  `Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36`,
];



(async () => {
    try {

        const browser = await puppeteer.launch ({
            headless: true,
            timeout: 0,
            args: ["--no-sandbox"],
            ignoreDefaultArgs: ['--disable-extensions']
          });
          const page = await browser.newPage ();
        
          /* set random UserAgent from array arrayUserAgents */
          await page.setUserAgent (arrayUserAgents[Math.floor ((Math.random () * ((arrayUserAgents.length - 1) - 0 + 1) + 0) * 1) / 1]);
          /* set size browser window */
          await page.setViewport ({
            width: 1024, 
            height: 512
          });


          await page.goto (`https://sociotex.com/login`, {
            waitUntil: `load`,
            timeout: 0
          });
        
          const editLogin = `body > div.page-wrapper > header > div.container.flex-grow-1.d-flex.flex-column.justify-content-start.align-items-center.py-6 > div > form > label.d-flex.flex-column.mb-3 > input`
            , editPassword = `body > div.page-wrapper > header > div.container.flex-grow-1.d-flex.flex-column.justify-content-start.align-items-center.py-6 > div > form > label.d-flex.flex-column.mb-4 > input`
            , buttonSubmit = `body > div.page-wrapper > header > div.container.flex-grow-1.d-flex.flex-column.justify-content-start.align-items-center.py-6 > div > form > div > button`
            , personalArea = `#app > st-panel > div > div.app-content-body.fade-in.app-content-full > st-dashboard > div`
            ;
        
          /* authorization started */
          await page.$eval (editLogin, element => element.value = `andrey1lyapin@gmail.com`);
          await page.$eval (editPassword, element => element.value = `1333171015`);
        
          await page.click (buttonSubmit);

          await page.waitForSelector(personalArea, {
              timeout: 5000
          });
          await browser.close ();

    } catch (e) {
      console.log("Our Error -> ", e)
    }
})();

/*
request.post({
    url: `http://a0505612.xsph.ru/micromodules/receiver.php`,
    form: {
        message: `My message`,
        //key: `3c6e0b8a9c15224a8228b9a98ca1531d`
    },
    followAllRedirects: true
    },
    function(err, response, body) {
    
    });
*/
