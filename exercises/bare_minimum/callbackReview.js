/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

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
  request(url, (error, res) => {
    if (error) {
      callback(error);
    } else {
      callback(error, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
