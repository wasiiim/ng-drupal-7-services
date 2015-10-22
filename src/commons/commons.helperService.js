;(function() {
	'use strict';

	/**
	 * helper Module
	 */
	angular.module('ngDrupal7Services-3_x.commons.helperService', ['ngDrupal7Services-3_x.commons.configurations'])
		   .factory('DrupalHelperService', DrupalHelperService);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	DrupalHelperService.$inject = ['DrupalApiConstant'];
	
	/**
	 * Notification channel for user resource 
	**/
	
	/** @ngInject */
	function DrupalHelperService(DrupalApiConstant) {
	
		//setup and return service            	
        var drupalHelperService = {
        		getApiPath		: getApiPath,
        		getDrupalPath	: getDrupalPath,
        		sprintf 		: sprintf,
        		mergeItems 		: mergeItems,
        		structureField 	: structureField
        };
        
        return drupalHelperService;

        ////////////
        
        //
        
        function getApiPath() {
        	return DrupalApiConstant.drupal_instance +  DrupalApiConstant.api_endpoint;
        }
        
        function getDrupalPath() {
        	return DrupalApiConstant.drupal_instance;
        }
        
        /**
    	 * https://github.com/jbeuckm/drupal-client/blob/master/lib/field.js
    	 * Create the basic field structure for uploading a field.
    	 */
        //@TODO add language support
        function structureField(value, _label, language) {

    	  // record optional label string or default to "value"
    	  var label = _label || "value";
    	  var language_key = (language)? function() {return language}:function() {return BaseResourceConfig.LANGUAGE_NONE};

    	  if (angular.isArray(value)) {

    	    var field_array = [];
    	    for (var i= 0, l=value.length; i<l; i++) {
    	      var item = {};
    	      item[label] = value[i];

    	      field_array.push(item);
    	    }
    	    return {
    	      und: field_array
    	    };
    	  }

    	  if (value instanceof Date) {

    	    var obj = {
    	      value: {
    	        date: (value.getMonth()+1)+'/'+value.getDate()+'/'+value.getFullYear()+' - '+value.getHours()+':'+value.getMinutes()+':'+value.getSeconds()
    	      }
    	    };

    	    return {
    	    	und: [
    	        obj
    	      ]
    	    };
    	    
    	  }
        }
        //
        
      	
    	function mergeItems(newItems, currentItems , type, callback) {
    	
    		callback = (typeof(callback) === "function")?callback:function(obj) {return obj;};
    		
    		if(!type) {
    			var uniqueNodes = [];
    			var isUnique;
     			angular.forEach(newItems, function(newItems) {
     				isUnique = true;
     				angular.forEach(currentItems, function(currentItem, key) {
     					if(newItems.nid == currentItem.nid) { isUnique = false; }
     				}, isUnique);
     				 
     				if(isUnique) {
     						uniqueNodes.push(callback(newItems));
     				}	
     			}, uniqueNodes);
     			
     			currentItems =  uniqueNodes.concat(currentItems);
     			
     			return currentItems;
    		} 
    		else {
    			angular.forEach(newItems, function(newItem) {
    				
    				//@TODO add this to if => || currentItems[newItem[type]].updated > newItem.updated
    				if(!currentItems[newItem[type]] ) {
    					
    						currentItems[parseInt(newItem[type])] = callback(newItem);
    				}
    				
    			});
    			return currentItems;
    		}
    	};
        
        // copied from http://phpjs.org/
        function sprintf() {
        	  //  discuss at: http://phpjs.org/functions/sprintf/
        	  // original by: Ash Searle (http://hexmen.com/blog/)
        	  // improved by: Michael White (http://getsprink.com)
        	  // improved by: Jack
        	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        	  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        	  // improved by: Dj
        	  // improved by: Allidylls
        	  //    input by: Paulo Freitas
        	  //    input by: Brett Zamir (http://brett-zamir.me)
        	  //   example 1: sprintf("%01.2f", 123.1);
        	  //   returns 1: 123.10
        	  //   example 2: sprintf("[%10s]", 'monkey');
        	  //   returns 2: '[    monkey]'
        	  //   example 3: sprintf("[%'#10s]", 'monkey');
        	  //   returns 3: '[####monkey]'
        	  //   example 4: sprintf("%d", 123456789012345);
        	  //   returns 4: '123456789012345'
        	  //   example 5: sprintf('%-03s', 'E');
        	  //   returns 5: 'E00'

        	  var regex = /%%|%(\d+\$)?([\-+\'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
        	  var a = arguments;
        	  var i = 0;
        	  var format = a[i++];

        	  // pad()
        	  var pad = function(str, len, chr, leftJustify) {
        	    if (!chr) {
        	      chr = ' ';
        	    }
        	    var padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0)
        	      .join(chr);
        	    return leftJustify ? str + padding : padding + str;
        	  };

        	  // justify()
        	  var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
        	    var diff = minWidth - value.length;
        	    if (diff > 0) {
        	      if (leftJustify || !zeroPad) {
        	        value = pad(value, minWidth, customPadChar, leftJustify);
        	      } else {
        	        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
        	      }
        	    }
        	    return value;
        	  };

        	  // formatBaseX()
        	  var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        	    // Note: casts negative numbers to positive ones
        	    var number = value >>> 0;
        	    prefix = (prefix && number && {
        	      '2'  : '0b',
        	      '8'  : '0',
        	      '16' : '0x'
        	    }[base]) || '';
        	    value = prefix + pad(number.toString(base), precision || 0, '0', false);
        	    return justify(value, prefix, leftJustify, minWidth, zeroPad);
        	  };

        	  // formatString()
        	  var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
        	    if (precision !== null && precision !== undefined) {
        	      value = value.slice(0, precision);
        	    }
        	    return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
        	  };

        	  // doFormat()
        	  var doFormat = function(substring, valueIndex, flags, minWidth, precision, type) {
        	    var number, prefix, method, textTransform, value;

        	    if (substring === '%%') {
        	      return '%';
        	    }

        	    // parse flags
        	    var leftJustify = false;
        	    var positivePrefix = '';
        	    var zeroPad = false;
        	    var prefixBaseX = false;
        	    var customPadChar = ' ';
        	    var flagsl = flags.length;
        	    var j;
        	    for (j = 0; flags && j < flagsl; j++) {
        	      switch (flags.charAt(j)) {
        	      case ' ':
        	        positivePrefix = ' ';
        	        break;
        	      case '+':
        	        positivePrefix = '+';
        	        break;
        	      case '-':
        	        leftJustify = true;
        	        break;
        	      case "'":
        	        customPadChar = flags.charAt(j + 1);
        	        break;
        	      case '0':
        	        zeroPad = true;
        	        customPadChar = '0';
        	        break;
        	      case '#':
        	        prefixBaseX = true;
        	        break;
        	      }
        	    }

        	    // parameters may be null, undefined, empty-string or real valued
        	    // we want to ignore null, undefined and empty-string values
        	    if (!minWidth) {
        	      minWidth = 0;
        	    } else if (minWidth === '*') {
        	      minWidth = +a[i++];
        	    } else if (minWidth.charAt(0) === '*') {
        	      minWidth = +a[minWidth.slice(1, -1)];
        	    } else {
        	      minWidth = +minWidth;
        	    }

        	    // Note: undocumented perl feature:
        	    if (minWidth < 0) {
        	      minWidth = -minWidth;
        	      leftJustify = true;
        	    }

        	    if (!isFinite(minWidth)) {
        	      throw new Error('sprintf: (minimum-)width must be finite');
        	    }

        	    if (!precision) {
        	      precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
        	    } else if (precision === '*') {
        	      precision = +a[i++];
        	    } else if (precision.charAt(0) === '*') {
        	      precision = +a[precision.slice(1, -1)];
        	    } else {
        	      precision = +precision;
        	    }

        	    // grab value using valueIndex if required?
        	    value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

        	    switch (type) {
        	    case 's':
        	      return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
        	    case 'c':
        	      return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
        	    case 'b':
        	      return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
        	    case 'o':
        	      return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
        	    case 'x':
        	      return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
        	    case 'X':
        	      return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad)
        	        .toUpperCase();
        	    case 'u':
        	      return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
        	    case 'i':
        	    case 'd':
        	      number = +value || 0;
        	      // Plain Math.round doesn't just truncate
        	      number = Math.round(number - number % 1);
        	      prefix = number < 0 ? '-' : positivePrefix;
        	      value = prefix + pad(String(Math.abs(number)), precision, '0', false);
        	      return justify(value, prefix, leftJustify, minWidth, zeroPad);
        	    case 'e':
        	    case 'E':
        	    case 'f': // Should handle locales (as per setlocale)
        	    case 'F':
        	    case 'g':
        	    case 'G':
        	      number = +value;
        	      prefix = number < 0 ? '-' : positivePrefix;
        	      method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
        	      textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
        	      value = prefix + Math.abs(number)[method](precision);
        	      return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
        	    default:
        	      return substring;
        	    }
        	  };

        	  return format.replace(regex, doFormat);
        	};

    	
    	
	};

})();