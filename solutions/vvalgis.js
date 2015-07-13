/* global module */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

// var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var slength = str.length
      , previousChar = null
      , currentChar = null
      , spaceChar = " "
      , counter = 0
      , index = 0;

    for (index = 0; index < slength; index++) {
      currentChar = str.charAt(index);
      if (currentChar !== spaceChar && (previousChar === spaceChar || index === 0)) {
        counter++;
      }
      previousChar = currentChar;
    }

    return counter;
  },

  oop: function(str) { "use strict";

    var Char = function(char, prevChar, first) {
      this.char = char;
      this.prevChar = function() { return prevChar || new Char(""); };
      this.isFirst = function() { return !!first; };
      this.isEmpty = function() { return this.char === ""; };
      this.isSpace = function() { return this.char === " "; };
    };

    var CharSequence = function(string) {
      this.sequence = string;
      this.prevChar = null;
      this.currentChar = null;
      this.currentCharIndex = 0;

      this.next = function() {
        var end = this.currentCharIndex === this.sequence.length
          , toReturn = null
          , isFirst = this.currentCharIndex === 0;

        if (!end) {
          this.prevChar = this.currentChar;
          this.currentCharIndex = ++this.currentCharIndex;
          this.currentChar = new Char(this.sequence.charAt(this.currentCharIndex), this.prevChar, isFirst);
          toReturn = this.currentChar;
        }
        return toReturn;
      };

      this.wordsCount = function() {
        var counter = 0, curChar = null;
        while ((curChar = this.next())) {
          if (!curChar.isSpace() && !curChar.isEmpty() && (curChar.prevChar().isSpace() || curChar.isFirst())) {
            counter++;
          }
        }
        return counter;
      };
    };

    return (new CharSequence(str)).wordsCount();
  },

  functional: function(str) { "use strict";
    var spaceChar = " ";
    function wordCount(string, prevChar, counter, first) {
      var curChar = string.slice(0, 1)
        , lastString = string.slice(1);

      if (string === "") {
        return counter;
      } else {
        if (curChar !== spaceChar && (prevChar === spaceChar || first)) {
          counter++;
        }
        return wordCount(lastString, curChar, counter);
      }
    }

    return wordCount(str, " ", 0, true);
  }
};
