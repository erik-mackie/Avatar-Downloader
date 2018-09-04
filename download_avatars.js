const request = require('request');
const secrets = require('./secrets');
const imageByUrl = require('./downloadImage');

const arg1 = process.argv[2];
const arg2 = process.argv[3];


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${secrets.GITHUB_TOKEN}`
    }
  };
  // if missing arguments, return error message
  if (repoOwner === undefined || repoName === undefined) {
    console.log("Missing Repo Owner or Name Argument");
    process.exit();
  }
  // request to pull data from github
  request(options, (err, res, body) => {
    cb(err, body);
  });
}

getRepoContributors(arg1, arg2, (err, results) => {
  console.log("Errors:", err);
  // parse and loop imported string so values are accessable
  JSON.parse(results).forEach(result => {
    imageByUrl(result.avatar_url, result.login);
  });
});




