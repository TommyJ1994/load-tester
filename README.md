[![Known Vulnerabilities](https://snyk.io/test/github/tommyj1994/load-tester/bf0f91db6e17297b837d5ef22a18c0aa98908eb1/badge.svg)](https://snyk.io/test/github/tommyj1994/load-tester/bf0f91db6e17297b837d5ef22a18c0aa98908eb1)


# POC Load Tester
Tool to run a single load testing instruction set using a number of load testing tools.

Currently Focused on:
* Artillery
* Locust

This will allow someone to write an instruction set for http load testing in json format and have it executed by different load testers. This would be useful for dual-tool load-testing performance verification.

## Install
Install dependencies.
`npm install`

Install Artillary.
`npm install -g artillery`

Install Locust.
`pip install locust`

## Usage
```
Usage: load-tester [-- runner artillery [--script script.json]

Options:
  -r, --runner  The load runner to use. [artillery, locust].            [string]
  -s, --script  The load testing instruction set.                       [string]
  -?, --help    Show help                                              [boolean]

Examples:
  load-tester --runner locust --script load-test.json
```
