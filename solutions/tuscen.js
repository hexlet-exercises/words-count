/* global module require */

require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var separators = " ,.!?:;()`'\"",
        words = 0,
        prevChar = "",
        currentChar = "";

    function notSeparator(char) {
      return separators.indexOf(char) === -1;
    }

    for(var i = 0, length = str.length; i < length; i++) {
      currentChar = str.charAt(i);
      if (!notSeparator(prevChar) && notSeparator(currentChar)) {
        words++;
      }
      prevChar = currentChar;
    }

    return words;
  },

  oop: function(str) { "use strict";
    function Counter(string, separators) {
      this.string = string;
      this.separators = separators;
    }

    Counter.prototype.notSeparator = function(char) {
      return this.separators.indexOf(char) === -1;
    };

    Counter.prototype.countWords = function() {
      var words = 0,
          prevChar = "",
          currentChar = "";

      for(var i = 0, length = this.string.length; i < length; i++) {
        currentChar = this.string.charAt(i);
        if (!this.notSeparator(prevChar) && this.notSeparator(currentChar)) {
            words++;
        }
        prevChar = currentChar;
      }

      return words;
    };

    var counter = new Counter(str, " ,.!?:;()`'\"");

    return counter.countWords();
  },

  functional: function(str) { "use strict";
    var separators = " ,.!?:;()`'\"";

    function notSeparator(char) {
      return separators.indexOf(char) === -1;
    }

    function count(string, index, prevChar, words) {
      var currentChar = string.charAt(index);

      if (currentChar === "") {
        return words;
      }

      if (!notSeparator(prevChar) && notSeparator(currentChar)) {
        return count(string, index + 1, currentChar, words + 1);
      } else {
        return count(string, index + 1, currentChar, words);
      }
    }

    return count(str, 0, "", 0);
  }
};
