/*
* Locust Load Test Runner
*/

var shell = require("shelljs");

var runLoadTest = function(configFile) {
  shell.exec("locust -f" + configFile + "--host=" + configFile.host);
  shell.echo(""); // TODO - open browser window for http://127.0.0.1:8089/ (add this to config file)
};

var getVersion = function() {
  return shell.exec('locust --version');
};

exports.runLoadTest = runLoadTest;
exports.getVersion = getVersion;
