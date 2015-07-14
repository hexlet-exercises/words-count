/* global module require */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var res = 0;
    var i = 0;
    while(str[i] === " ") {
      i++;
    }
    while(i < str.length){
      res++;
      while(str[i] !== " " && i < str.length) {
        i++;
      }
      while(str[i] === " ") {
        i++;
	}
    }
    return res;
  },

  oop: function(str) { "use strict";
    return l.words(str).length;
  },

  functional: function(str) { "use strict";
    var popWord = function(s) {
      if(s === "") {
        return s;
      } else if(s[0] !== " ") {
        return popWord(s.substring(1));
      } else {
        return s;
      }
    };
    var popSpaces = function(s) {
      if(s === "") {
        return s;
      } else if(s[0] === " ") {
        return popSpaces(s.substring(1));
      } else {
        return s;
      }
    };
    function popWordAndSpaces(s) {
      return popSpaces(popWord(s));
    }

    function countWords(s) {
      if (popSpaces(s) === "") {
        return 0;
      } else {
        return 1 + countWords(popWordAndSpaces(popSpaces(s)));
      }
    }
    return countWords(str);
  }
};
