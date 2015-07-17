/* global module require */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

var l = require("lodash");

module.exports = {
  imperative: function(text) { "use strict";
    var countSymbols = text.length;
    var countWords = 0;
    var currentSpace = true;
    for (var i = 0; i < countSymbols; i++) {
        if (text[i] === " ") {
            currentSpace = true;
        } else{
            if (currentSpace === true) {
                currentSpace = false;
                countWords += 1;
            }
        }
    }
    return countWords;
  },

  oop: function(str) { "use strict";
    return l.words(str).length;
  },

  functional: function(tmp) { "use strict";
    var tmpFunc = function(acc, curElement) {
        if (curElement === " ") {
            return {
                currentSpace: true,
                countWords: acc.countWords
            };
        } else {
            if (acc.currentSpace === true) {
                return {
                    currentSpace: false,
                    countWords: acc.countWords + 1
                };
            }
            else {
                return acc;
            }
        }
    };
    var loop = function(string, callback, currentValue) {
      var firstSym = string[0];
      if (string.length === 0) {
        return currentValue;
      }
      string.shift();
      return loop(string, callback, callback(currentValue, firstSym));
    };


    var result = loop(tmp.split(""), tmpFunc, {currentSpace: true, countWords: 0});
    return result.countWords;
  }
};
