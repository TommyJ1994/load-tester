/*
* Artillery Load Test Runner
*/

var shell = require("shelljs");

var runLoadTest = function(config) {
  shell.echo("Running Artillary!");
  shell.exec("artillery run" + config);
};

var getVersion = function() {
  return shell.exec('artillery --version');
};

exports.runLoadTest = runLoadTest;
exports.getVersion = getVersion;
