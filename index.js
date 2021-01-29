"use strict";

const puppeteer = require("puppeteer");
const request = require("request");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 80;

app.get(`/`, (req, res) => {
    res.end(`<h1>Home page!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Yahoo!`);
});
/*    
(async () => {
    try {

        const browser = await puppeteer.launch();
        console.log ("Successful");
        await browser.close();

    } catch (e) {
      console.log("Our Error -> ", e)
    }
})();
*/
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
