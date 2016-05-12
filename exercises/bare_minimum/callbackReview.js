/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, function(err, content) {
    if (err) {
      callback(err);
    } else {
      var firstLine = ('' + content).split('\n')[0];
      callback(err, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  // callback(err, statusCode);

  // var options = {
  //   host: url
  // };
  // var callback = function(response) {
  //   // console.log('response:');
    
  //   // var str = '';
  //   // response.on ('data', function(chunk) {
  //   //   str += chunk;
  //   // });
  //   // response.on('end', function() {
  //   //   // fs.writeFile(exports.paths.archivedSites + '/' + site, str);
  //   //   // console.log('site:', str);
  //   // });
  // };

  https.get(url, (res) => {
    // console.log('res', res);
    callback(null, res.statusCode);
  }).on('error', function(e) {
    // console.log('e', e);
    callback({message: 'Invalid URI'});
  }).end();

  // https.get(url, (res) => {
  //   callback();
  //   // console.log('statusCode:', res.statusCode);
  // }).on('error', function(e) {
  //   console.log('e:', e);
  //   callback(e);
  //   //console.log('error message', e.message);
  // });

  // callback({message:'Invalid URI'});
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
