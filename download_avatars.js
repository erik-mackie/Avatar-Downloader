var request = require('request');
const TOKEN = require('secrets')
/*var images = require("./pullImage")*/;

var args1 = process.argv[2];
var args2 = process.argv[3];

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request'
    }
  };

  request(url, function(err, res, body) {
    cb(err, body);
  });
}









getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});