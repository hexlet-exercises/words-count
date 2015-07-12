/* global module require */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    return l.words(str).length;
  },

  oop: function(str) { "use strict";
    return l.words(str).length;
  },

  functional: function(str) { "use strict";
    return l.words(str).length;
  }
};
