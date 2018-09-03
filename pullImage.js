var request = require('request');
var fs = require('fs');

// pull image from passed git repo place into array and return
module.exports = function pullImages(user, repo) {
  request.get(`https://github.com/${user}/${repo}/graphs/contributors`)
         .on('error', function (err) {
           throw err;
         });
         .on('response', function (response) {
          console.log("test")
           /*console.log('Response Status Code: ', response.statusCode)*/;
         });
         /*.pipe(fs.createWriteStream(`./Avatars/${HOLDERNAME}.png`));*/
}

