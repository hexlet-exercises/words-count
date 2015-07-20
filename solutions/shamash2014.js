/* global module require */

var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var wordCount = function(sent){
        if (sent === ""){
            return 0;
        }else{
            var trailsWstr = sent.replace(/(^\s*)|(\s*$)/gi, "");
            return trailsWstr.split(/[\s]+/).length;
        }
    };

    return wordCount(str);
  },

  oop: function(str) { "use strict";
    

    return l.words(str).length;
  },

  functional: function(str) { "use strict";
        var counter = function(wordsStr){
            return wordsStr.split(/[\s]+/).length;
        };
        var formatter = function(word){
            return word.replace(/(^\s*)|(\s*$)/gi, "").replace(/[\,|\.]/, " " );
        };

        var wordCount = function(word){
            if(word === ""){
                return 0;
            }else {
                return counter(formatter(word));
            }
        };

    return wordCount(str);
    }
};
