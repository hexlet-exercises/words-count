/* global module*/
// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README



module.exports = {
 imperative: function(str){ "use strict";
    if(toString.call(str) !== "[object String]"){
      return "";
    }
    str = str.trim();
    var res = 0;
    for(var i = 0; i < str.length; ++i){
      if((str[i] === " ") && (str[i + 1] !== " ") ){
        res++;
      }
    }
    return str.length > 0 ? res + 1 : 0;

  },

  oop: function(mainStr) { "use strict"; //two in one (getter-setter)
    function WordsCounter(strr){
      var string = strr;
      var numOfWords = 0;

      //private count function
      function cntr(str) {
        if(toString.call(str) !== "[object String]"){
          return "";
        }
        str = str.trim();
        var res = 0;
        for(var i = 0; i < str.length; ++i){
          if((str[i] === " ") && (str[i + 1] !== " ") ){
            res++;
          }
        }
        return str.length > 0 ? res + 1 : 0;
      }

      //getter
      this.numOfWords = function(value){
        if(!arguments.length){
          return numOfWords;
        }
        return cntr(value);
      };

      //getter-setter
      this.str = function(value){
        if(!arguments.length){
          return string;
        }
        string = value;
        numOfWords = this.numOfWords(value);
      };

      numOfWords = this.numOfWords(strr);
    }
  //Constructor in work
  //counter.str() return current string
  //counter.str('new string') set new string and number of words
  var counter = new WordsCounter(mainStr);
  return counter.numOfWords();
  },

  functional: function(mainStr) { "use strict";
    function numOfWords(str, num){
      if(!str.length){
        return num;
      }
      if((str[0] !== " ") || (str[0] === " " && str[1] === " ")){
        return numOfWords(str.slice(1), num === 0 ? 1 : num);
      } else if(str[0] === " "){
        return numOfWords(str.slice(1), num + 1);
      }
    }

    return numOfWords(mainStr.trim(), 0);
  }
};
