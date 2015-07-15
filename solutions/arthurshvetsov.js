/* global module require */

require("lodash");

var specialChars = " !\"',.:;?-()";

function countWords(str) { "use strict";
    var count = 0;
    var word = "";

    for (var index = 0; index < str.length; index++) {
        var ch = str.charAt(index);

        if (specialChars.indexOf(ch) === -1) {
            word += ch;

            if (index !== str.length - 1) {
                continue;
            }
        }

        if (word.length > 0) {
            count++;
            word = "";
        }
    }

    return count;
}

module.exports = {
    imperative: function (str) { "use strict";
        return countWords(str);
    },

    oop: function (str) { "use strict";
        function Counter(input) {
            this.input = input;
        }

        Counter.prototype.getWordsCount = function() {
            return countWords(this.input);
        };

        return new Counter(str).getWordsCount();
    },

    functional: function (str) { "use strict";
        function core(currentIndex, letterIndex) {
            if (currentIndex > str.length) {
                return 0;
            }

            var ch = str.charAt(currentIndex);

            if (specialChars.indexOf(ch) === -1) {
                return core(currentIndex + 1, currentIndex);
            }
            else if (letterIndex !== -1) {
                return 1 + core(currentIndex + 1, -1);
            } else {
                return core(currentIndex + 1, -1);
            }
        }

        return core(0, -1);
    }
};
