/* global module */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README
module.exports = {
  imperative: function(str) { "use strict";

    var wordsCount = 0;
    var isWord = false;
    for (var i = 0; i < str.length; i++) {
      if (/[\s\,\.\!\?]+/.test(str[i])) {
	isWord = false;
      } else {
	if (!isWord) {
          wordsCount++;
          isWord = true;
	}
      }
    }
    return wordsCount;
  },

  oop: function(str) { "use strict";

    function Symbol(sym) {
      this.sym = sym;
      this.amIPartOfWord = function() {
        if (/[a-zA-Z0-9]+/.test(sym)) {
          return true;
        } else {
          return false;
        }
      };
    }

    function Word() {
      this.word = [];
      this.addSymbol = function(sym) {
        this.word.push(sym);
      };
    }

    var symbol = null;
    var words = [];
    var endOfWord = true;
    for (var i = 0; i < str.length; i++) {
      symbol = new Symbol(str[i]);
      if (symbol.amIPartOfWord()) {
        if (endOfWord) {
          words.push(new Word());
          endOfWord = false;
	}
	words[words.length - 1].addSymbol(symbol);
      } else {
        endOfWord = true;
      }
    }

    return words.length;
  },

  functional: function(str) { "use strict";

    function isWord(sym) {
      if (/[a-zA-Z0-9]+/.test(sym)) {
	return true;
      } else {
	return false;
      }
    }

    function countWords(string, i) {

      if (i > string.length - 1) {
	return 0;
      } else if (isWord(string[i])) {
        if (i === 0 || !isWord(string[i - 1])) {
            return 1 + countWords(string, i + 1);
	}
      }

      return countWords(string, i + 1);
    }

    return countWords(str, 0);
  }
};
