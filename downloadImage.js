var request = require('request');
var fs = require('fs');

module.exports = function downloadImageByUrl(url, filepath) {
  request.get(url)
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .pipe(fs.createWriteStream(`./Avatars/${filepath}.jpeg`));               // Note 4
}


