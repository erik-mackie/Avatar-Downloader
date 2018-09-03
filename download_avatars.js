var request = require('request');
const TOKEN = require('./secrets')
/*var images = require("./pullImage")*/;

/*var args1 = process.argv[2];
var args2 = process.argv[3];
*/
function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request'
    }
  };
  request(options, (err, res, body) => {
    cb(err, body);

  });
}

getRepoContributors("jquery", "jquery", (err, result) => {
  console.log("Errors:", err);
  JSON.parse(result).forEach(val => {
    console.log(`Result: ${val.avatar_url}`)
  });
})