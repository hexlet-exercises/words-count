/* global module require */

var l = require("lodash");

function get_words_count(str) {
  var words_count = 0;
  var letter_met = false;

  for(var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      letter_met = false;
    }
    else if (!letter_met) {
      letter_met = true;
      words_count = words_count + 1;
    }
  }
  return words_count;
}

module.exports = {
  imperative: function(str) { "use strict";
    return get_words_count(str);
  },

  oop: function(str) { "use strict";
    function WordsCounter(str) {
      this.str = str;
      this.words_count = 0;
      this.letter_met = false;
    };

    WordsCounter.prototype.process_char = function(c) {
      if (c === ' ') {
        this.letter_met = false;
      }
      else {
        if (!this.letter_met) {
          this.letter_met = true;
          this.words_count = this.words_count + 1;
        }
      }
    };

    WordsCounter.prototype.get_words_count = function() {
      for(var i = 0; i < this.str.length; i++) {
        this.process_char(this.str[i]);
      }
      return this.words_count;
    };

    return (new WordsCounter(str)).get_words_count();
  },

  functional: function(str) { "use strict";

    function words_count(s, i, letter_met) {
      if (!s[i]) { return 0; }

      if (s[i] === ' ') {
        return words_count(s, i + 1, false);
      }
      else if (!letter_met) {
        return 1 + words_count(s, i + 1, true);
      }
      else {
        return words_count(s, i + 1, true);
      }
    };

    return words_count(str, 0, false);
  }
};
