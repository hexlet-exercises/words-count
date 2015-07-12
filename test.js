/* global require process describe it */

var assert = require("assert");

var fs = require("fs");

describe("Word Count", function() { "use strict";
  var files = [];
  if (process.env.SOLUTION) {
    files = [process.env.SOLUTION];
  } else {
    files = fs.readdirSync("./solutions");
  }

  files.forEach(function(file) {
    if (!file.match(/.+\.js$/)) { return; }
    var functions = require("./solutions/" + file);

    describe("from " + file, function() {
      Object.keys(functions).forEach(function(funcName) {
        var func = functions[funcName];

        it("should works using '" + funcName + "' way", function() {
          assert.equal(0, func(""));
          assert.equal(1, func("one"));
          assert.equal(3, func("one, two three"));
          assert.equal(4, func(" one, two three# ehu&, "));
        });
      });
    });

  });
});
