/*
* Locust Load Test Runner
*/

var shell = require("shelljs");

/**
* Run the load test using Locust
* @param {string} config - the instuction set for the load runner
*/
var runLoadTest = function(configFile) {
  shell.exec("locust -f" + configFile + "--host=" + configFile.target);
  shell.echo(""); // TODO - open browser window for http://127.0.0.1:8089/ (add this to config file)
};

/**
* Get the Locust verison.
*/
var getVersion = function() {
  return shell.exec('locust --version');
};

exports.runLoadTest = runLoadTest;
exports.getVersion = getVersion;
