
// const request = require("request");
// //const cron = require('node-cron');

// //let index = 0;

// //cron.schedule('* */1 * * * *', () => {

//   request.post({
//   url: `http://a0505612.xsph.ru/index.php`,
//   form: { message: `new message` },
//   followAllRedirects: true
//   },
//   (err, response, body) => {  
//   });

// //});
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "141.8.192.93",
  user: "a0505612",
  database: "a0505612_likebuket",
  password: "xuefpuathi"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");      
    }
});

connection.query(`SELECT * FROM orders WHERE status=2`,
  function(err, results) {
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else {
      //console.log(results[0]);
      //name (results[0]);
      moduleOne();
    }
});
connection.end();



/* *********************************************************************************** */
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

/* *********************************************************************************** */

async function moduleOne () {

  try {
  const browser = await puppeteer.launch ({
    timeout: 0,
    args: ["--no-sandbox"],
    ignoreDefaultArgs: ['--disable-extensions'],
    headless: true,
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();

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
    //await page.focus (editLogin);
    //await page.keyboard.type (`andrey1lyapin@gmail.com`);
    //await page.type (editLogin, `andrey1lyapin@gmail.com`);
    await page.$eval(editLogin, element => element.value = `andrey1lyapin@gmail.com`);
  
    //await page.focus (editPassword);
    //await page.keyboard.type (`1333171015`);
    //await page.type (editPassword, `1333171015`);
    await page.$eval(editPassword, element => element.value = `1333171015`);
  
    await page.click (buttonSubmit);
  
    /* wait loaded persoal area */
    await page.waitForSelector (personalArea , {
      visible: true,
      timeout: 0
    });

  await page.waitForTimeout(5000);
  console.log(`finish`);
  await browser.close();

  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
}