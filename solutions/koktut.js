/* global module require */

require("lodash");

var exclSymbs = " ,.;:'\"()-";

function wcount(str) { "use strict";
    var i, wordCount = 0;
    var cFlag = true;
    for (i = 0; i < str.length; i++) {
        if(exclSymbs.indexOf(str[i]) === -1) {
            if(cFlag) {
                wordCount++;
                cFlag = false;
            }
        } else {
            cFlag = true;
        }
    }
    return wordCount;
}

module.exports = {
  imperative: function(str) { "use strict";
	return wcount(str);
  },

  oop: function(str) { "use strict";
    function WordCounter(initStr) {
        this.str = initStr;
    }
    WordCounter.prototype.getCount = function() {
        return wcount(str);
    };
    var wc = new WordCounter(str);
    return wc.getCount();
  },

  functional: function(str) { "use strict";
    function count(str1, wc, flag) {
        if(str1 === "") {
            return wc;
        }
        if(exclSymbs.indexOf(str1[0]) === -1) {
            if(flag) {
                return count(str1.substring(1), wc + 1, false);
            } else {
                return count(str1.substring(1), wc, false);
            }
        } else {
            return count(str1.substring(1), wc, true);
        }
    }
    return count(str, 0, true);
  }
};
