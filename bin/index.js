#!/usr/bin/env node

var shell = require("shelljs");
var artillery = require("../runners/artillery.js");
var locust = require("../runner/locust.js");
var LOAD_RUNNERS = require('../config/runners.json');

var options = require( "yargs" )
    .usage( "Usage: $0 [-- runner artillery [--script script.json]" )
    .option( "r", { alias: "runner", describe: "The load runner to use. [artillery, locust].", type: "string" } )
    .option( "s", { alias: "script", describe: "The locustfile or artillery config containing the load testing instructions.", type: "string" } )
    .help( "?" )
    .alias( "?", "help" )
    .example( "$0 --runner locust --script load-test.json" )
    .epilog( "Load Tester" )
    .argv;

// load runner not specified
if (!options.runner) {
  shell.echo('Error: Runner not Specified. Specify a runner using --runner ');
  shell.exit(1);
}

// Invalid load runner specified
if(options.runner && !checkRunnerExists(options.runner)) {
  shell.echo('Error: Invalid load runner specified: ', options.runner);
  shell.exit(1);
}

// Load test script not specified.
if (options.runner && !options.script) {
  shell.echo('Error: Load testing script not Specified. Specify a script using "--script [script.json]"');
  shell.exit(1);
}

// Runner and Script Specified
if (options.runner && options.script) {
  // check that artillery and locust have been installed on the system
  var runnerInstalled = checkRunnerInstalled(options.runner);
  if(!runnerInstalled) {
    shell.echo('Error: Runner is not installed.');
    shell.echo('Install', options.runner, 'using', ' ', LOAD_RUNNERS.runners[options.runner].installGuide);
    shell.exit(1);
  }
}

/**
* Checks if the specified load test runner exists in the runners config file.
* @param {string} runner - the specified load test runner
*/
function checkRunnerExists(runner) {
  if (!LOAD_RUNNERS.runners.hasOwnProperty(runner)) {
    return false;
  }
  return true;
}

/**
* Checks if the specified load test runner has been installed on the system.
* @param {string} runner - the specified load test runner
*/
function checkRunnerInstalled(runner) {
  if (!shell.which(runner)) {
    return false;
  }
  return true;
}
