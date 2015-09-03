module.exports = {
    imperative: function (str) {
        "use strict";

        function wordsCount(str) {
            var i,
                len = str.length,
                count = 0;

            for (i = 0; i < len; i++) {
                if (str[i] !== ' ') {
                    count++;
                    while ((str[i + 1] !== ' ') && (i + 1 < len)) {
                        i++;
                    }
                }
            }

            return count;
        }

        return wordsCount(str);
    },

    oop: function (str) {
        "use strict";

        function Words() {
            this.wordsCount = function (str) {
                var i,
                    len = str.length,
                    count = 0;

                for (i = 0; i < len; i++) {
                    if (str[i] !== ' ') {
                        count++;
                        while ((str[i + 1] !== ' ') && (i + 1 < len)) {
                            i++;
                        }
                    }
                }

                return count;
            }
        }

        var words = new Words();
        return words.wordsCount(str);
    },

    functional: function (str) {
        "use strict";

        function wordsCount(str) {
            var i,
                len = str.length,
                count = 0;

            for (i = 0; i < len; i++) {
                if (str[i] !== ' ') {
                    count++;
                    while ((str[i + 1] !== ' ') && (i + 1 < len)) {
                        i++;
                    }
                }
            }

            return count;
        }

        return wordsCount(str);
    }
};