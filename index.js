request = require("request");
var cron = require('node-cron');

let index = 0;

cron.schedule('*/10 * * * * *', () => {

  request.post({
  url: `http://a0505612.xsph.ru/micromodules/receiver.php`,
  form: { message: `${++index}` },
  followAllRedirects: true
  },
  (err, response, body) => {  
  });

});