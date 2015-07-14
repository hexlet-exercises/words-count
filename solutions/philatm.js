/* global module require */

// Создайте файл с именем <github nickname>.js и скопируйте туда содержимое этого файла.
// Напишите собственные реализации этих функций в соответствии с README

var l = require("lodash");

module.exports = {
  imperative: function(str) { "use strict";
    var res = 0;
    var i = 0;
    while(str[i] === ' ')
    {
	    i++;
    }
    while( i < str.length) 
    {
	    res++;
	    while(str[i] != ' ' && i < str.length)
	    {
		    i++;
	    }
	    while(str[i] == ' ')
	    {
		i++;
	    }
		
    }
    return res;
  },

  oop: function(str) { "use strict";
    return l.words(str).length;
  },

  functional: function(str) { "use strict";
    var i = 0;
    for(;str[i] == ' '; i++);
    str = str.substring(i);
    var popWord = function(s)
    {
	var k = 0;
	while(s[k] != " " && k < s.length)
	{
	    k++;
	}
	while(s[k] == " ")
	{
	    k++;
	}
	return s.substring(k);
    }
    function countWords(s)
    {
	if (s == "")
	{
	    return 0;
	}
	else
	{
	    return 1 + countWords(popWord(s));
	}
    }
    return countWords(str);
  }
}
