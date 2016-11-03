/*
* Artillery Load Test Runner
*/

var shell = require("shelljs");

/**
* Run the load test using Artillary
* @param {string} config - the instuction set for the load runner
*/
var runLoadTest = function(config) {
  shell.echo("Running Artillary!");
  shell.exec("artillery run" + config);
};

/**
* Get the Locust verison.
*/
var getVersion = function() {
  return shell.exec('artillery --version');
};

exports.runLoadTest = runLoadTest;
exports.getVersion = getVersion;
