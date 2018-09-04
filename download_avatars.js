var request = require('request');
const TOKEN = require('./secrets');
var imageByUrl = require('./downloadImage');

var arg1 = process.argv[2];
var arg2 = process.argv[3];


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request'
    }
  };
  // request to pull data from github
  request(options, (err, res, body) => {
    cb(err, body);
  });
}

//call back refactor so loop isnt in here
getRepoContributors(`${arg1}`,`${arg2}`, (err, result) => {
  console.log("Errors:", err);
  // parse and loop imported string so values are accessable
  JSON.parse(result).forEach(val => {
    imageByUrl(val.avatar_url, val.login)
    /*console.log(`Result: ${val.login}`)*/
  });
})


/*node download_avatars.js jquery jquery*/

