const request = require("request");
const cron = require('node-cron');

let index = 0;

cron.schedule('* */1 * * * *', () => {

  request.post({
  url: `http://a0505612.xsph.ru/index.php`,
  form: { message: `index: ${++index}` },
  followAllRedirects: true
  },
  (err, response, body) => {  
  });
});