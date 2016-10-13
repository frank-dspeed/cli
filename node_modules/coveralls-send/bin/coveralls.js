#!/usr/bin/env node

var coveralls = require('coveralls');
var concat = require('concat-stream');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.pipe(concat(function(input) {
  coveralls.handleInput(input, function(err) {
    if (err) {
      console.error('Uh-oh, coveralls.io failed:\n', err, '\n');
    }
  });
}));
