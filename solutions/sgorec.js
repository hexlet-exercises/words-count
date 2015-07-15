/* global module */

module.exports = {
  imperative: function(str) { "use strict";
    if (!str || !str.length) {
        return 0;
    }

    var wordSpaceDetector = /\s/;
    var count = 0;
    var wordStart = false;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        var char = str[i];
        if (wordSpaceDetector.test(char)) {
            wordStart = false;
        } else {
            count += wordStart ? 0 : 1;
            wordStart = true;
        }
    }

    return count;
  },

  oop: function(str) { "use strict";
    var CustomString = function (source) {
        var words = NaN;

        return {
            wordsCount: function () {
                if (!source || !source.length) {
                    return 0;
                }

                if (!isNaN(words)) {
                    return words;
                }

                var wordSpaceDetector = /\s/;
                var count = 0;
                var wordStart = false;
                var len = source.length;
                for (var i = 0; i < len; i++) {
                    var char = source[i];
                    if (wordSpaceDetector.test(char)) {
                        wordStart = false;
                    } else {
                        count += wordStart ? 0 : 1;
                        wordStart = true;
                    }
                }

                return (words = count);
            }
        };
    };

    return new CustomString(str).wordsCount();
  },

  functional: function(str) { "use strict";
    function wordsCount(source, count, wordStart) {
        if (!source || !source.length) {
            return (count || 0);
        }

        if (/\s/.test(source[0])) {
            return wordsCount(source.slice(1), (count || 0), false);
        } else {
            return wordsCount(source.slice(1), (count || 0) + (wordStart ? 0 : 1), true);
        }
    }

    return wordsCount(str);
  }
};
