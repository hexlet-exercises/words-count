/* global module */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

// var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var words = 0;
    var previous = null;
    var current = null;
    for (var i = 0; i < str.length; i++){
      current = str.charAt(i);
      if (current !== " " && (previous === " " || previous === null) ){
        ++words;
      }
      previous = str.charAt(i);
    }
    return words;
  },

  oop: function(str) { "use strict";
    var Words = function(strRep){
      this.strRep = strRep;
    };

    Words.prototype.length = function(){
      return this.strRep.split(" ")
                .filter(function(e){return e; })
                .length;
    };

    var words = new Words(str);
    return words.length();
  },

  functional: function(str) { "use strict";
    return str.split(" ")
              .filter(function(e){return e; })
              .length;
  }
};
