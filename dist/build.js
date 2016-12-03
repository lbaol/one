/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stocks = __webpack_require__(3);

	new _vue2.default({
	  el: 'body',
	  data: {
	    stocks: stocks
	  },
	  methods: {
	    sort: function sort(type) {
	      stocks.sort(function (a, b) {
	        console.log();
	        return b[type] - a[type];
	      });
	    }
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
		{
			"code": "603559",
			"涨跌幅度": "19.98",
			"name": "N中通"
		},
		{
			"code": "000672",
			"涨跌幅度": "7.94",
			"name": "上峰水泥"
		},
		{
			"code": "002059",
			"涨跌幅度": "3.45",
			"name": "云南旅游"
		},
		{
			"code": "603660",
			"涨跌幅度": "31.95",
			"name": "苏州科达"
		},
		{
			"code": "000922",
			"涨跌幅度": "-17.58",
			"name": "佳电股份"
		},
		{
			"code": "600493",
			"涨跌幅度": "27.78",
			"name": "凤竹纺织"
		},
		{
			"code": "603319",
			"涨跌幅度": "21.05",
			"name": "湘油泵"
		},
		{
			"code": "002823",
			"涨跌幅度": "105.39",
			"name": "凯中精密"
		},
		{
			"code": "002389",
			"涨跌幅度": "39.69",
			"name": "南洋科技"
		},
		{
			"code": "002820",
			"涨跌幅度": "211.19",
			"name": "桂发祥"
		},
		{
			"code": "300556",
			"涨跌幅度": "708.27",
			"name": "丝路视觉"
		},
		{
			"code": "300562",
			"涨跌幅度": "276.76",
			"name": "乐心医疗"
		},
		{
			"code": "300568",
			"涨跌幅度": "32.02",
			"name": "星源材质"
		},
		{
			"code": "300569",
			"涨跌幅度": "93.3",
			"name": "天能重工"
		},
		{
			"code": "603819",
			"涨跌幅度": "61.05",
			"name": "神力股份"
		},
		{
			"code": "300561",
			"涨跌幅度": "242.52",
			"name": "汇金科技"
		},
		{
			"code": "603060",
			"涨跌幅度": "326.14",
			"name": "国检集团"
		},
		{
			"code": "603977",
			"涨跌幅度": "401.55",
			"name": "国泰集团"
		},
		{
			"code": "002821",
			"涨跌幅度": "211.27",
			"name": "凯莱英"
		},
		{
			"code": "603633",
			"涨跌幅度": "242.22",
			"name": "徕木股份"
		},
		{
			"code": "603336",
			"涨跌幅度": "112.71",
			"name": "宏辉果蔬"
		},
		{
			"code": "603323",
			"涨跌幅度": "59.63",
			"name": "吴江银行"
		},
		{
			"code": "300567",
			"涨跌幅度": "157.28",
			"name": "精测电子"
		},
		{
			"code": "300566",
			"涨跌幅度": "314.11",
			"name": "激智科技"
		},
		{
			"code": "300376",
			"涨跌幅度": "68.64",
			"name": "易事特"
		},
		{
			"code": "002697",
			"涨跌幅度": "-2.64",
			"name": "红旗连锁"
		},
		{
			"code": "603727",
			"涨跌幅度": "114.41",
			"name": "博迈科"
		},
		{
			"code": "300563",
			"涨跌幅度": "355.33",
			"name": "神宇股份"
		},
		{
			"code": "002825",
			"涨跌幅度": "59.67",
			"name": "纳尔股份"
		},
		{
			"code": "002819",
			"涨跌幅度": "401.34",
			"name": "东方中科"
		},
		{
			"code": "603987",
			"涨跌幅度": "182.98",
			"name": "康德莱"
		},
		{
			"code": "603900",
			"涨跌幅度": "94.79",
			"name": "通灵珠宝"
		},
		{
			"code": "600543",
			"涨跌幅度": "67.32",
			"name": "莫高股份"
		},
		{
			"code": "002822",
			"涨跌幅度": "47.81",
			"name": "中装建设"
		},
		{
			"code": "300565",
			"涨跌幅度": "157.02",
			"name": "科信技术"
		},
		{
			"code": "601882",
			"涨跌幅度": "512.04",
			"name": "海天精工"
		},
		{
			"code": "002782",
			"涨跌幅度": "709.92",
			"name": "可立克"
		},
		{
			"code": "601186",
			"涨跌幅度": "",
			"name": "中国铁建"
		},
		{
			"code": "600857",
			"涨跌幅度": "1.21",
			"name": "宁波中百"
		},
		{
			"code": "002554",
			"涨跌幅度": "34.08",
			"name": "惠博普"
		},
		{
			"code": "600649",
			"涨跌幅度": "22.04",
			"name": "城投控股"
		},
		{
			"code": "300506",
			"涨跌幅度": "1193.87",
			"name": "名家汇"
		},
		{
			"code": "002065",
			"涨跌幅度": "16.34",
			"name": "东华软件"
		},
		{
			"code": "601333",
			"涨跌幅度": "11.14",
			"name": "广深铁路"
		},
		{
			"code": "000516",
			"涨跌幅度": "5.33",
			"name": "国际医学"
		},
		{
			"code": "601003",
			"涨跌幅度": "39.34",
			"name": "柳钢股份"
		},
		{
			"code": "300296",
			"涨跌幅度": "64.04",
			"name": "利亚德"
		},
		{
			"code": "300335",
			"涨跌幅度": "19.39",
			"name": "迪森股份"
		},
		{
			"code": "002105",
			"涨跌幅度": "3.49",
			"name": "信隆健康"
		},
		{
			"code": "600425",
			"涨跌幅度": "-8.09",
			"name": "青松建化"
		},
		{
			"code": "600288",
			"涨跌幅度": "-2.04",
			"name": "大恒科技"
		},
		{
			"code": "000526",
			"涨跌幅度": "-43.78",
			"name": "紫光学大"
		},
		{
			"code": "000511",
			"涨跌幅度": "-30.19",
			"name": "*ST烯碳"
		},
		{
			"code": "603667",
			"涨跌幅度": "267.01",
			"name": "五洲新春"
		},
		{
			"code": "600091",
			"涨跌幅度": "-2.09",
			"name": "ST明科"
		},
		{
			"code": "000717",
			"涨跌幅度": "13.84",
			"name": "*ST韶钢"
		},
		{
			"code": "002645",
			"涨跌幅度": "40.11",
			"name": "华宏科技"
		},
		{
			"code": "002199",
			"涨跌幅度": "21.37",
			"name": "*ST东晶"
		},
		{
			"code": "000920",
			"涨跌幅度": "-11.74",
			"name": "南方汇通"
		},
		{
			"code": "300428",
			"涨跌幅度": "42.38",
			"name": "四通新材"
		},
		{
			"code": "600028",
			"涨跌幅度": "14.82",
			"name": "中国石化"
		},
		{
			"code": "002122",
			"涨跌幅度": "61.81",
			"name": "天马股份"
		},
		{
			"code": "002370",
			"涨跌幅度": "-11.04",
			"name": "亚太药业"
		},
		{
			"code": "603322",
			"涨跌幅度": "483.18",
			"name": "超讯通信"
		},
		{
			"code": "300420",
			"涨跌幅度": "11.41",
			"name": "五洋科技"
		},
		{
			"code": "002695",
			"涨跌幅度": "190.59",
			"name": "煌上煌"
		},
		{
			"code": "600012",
			"涨跌幅度": "28.81",
			"name": "皖通高速"
		},
		{
			"code": "300465",
			"涨跌幅度": "-22.39",
			"name": "高伟达"
		},
		{
			"code": "000932",
			"涨跌幅度": "108.05",
			"name": "华菱钢铁"
		},
		{
			"code": "000951",
			"涨跌幅度": "66.6",
			"name": "中国重汽"
		},
		{
			"code": "600084",
			"涨跌幅度": "36.18",
			"name": "中葡股份"
		},
		{
			"code": "300482",
			"涨跌幅度": "6.25",
			"name": "万孚生物"
		},
		{
			"code": "002647",
			"涨跌幅度": "155.03",
			"name": "宏磊股份"
		},
		{
			"code": "002707",
			"涨跌幅度": "-28.87",
			"name": "众信旅游"
		},
		{
			"code": "000488",
			"涨跌幅度": "32.44",
			"name": "晨鸣纸业"
		},
		{
			"code": "300128",
			"涨跌幅度": "-20.99",
			"name": "锦富新材"
		},
		{
			"code": "603010",
			"涨跌幅度": "42.29",
			"name": "万盛股份"
		},
		{
			"code": "002341",
			"涨跌幅度": "58.18",
			"name": "新纶科技"
		},
		{
			"code": "002719",
			"涨跌幅度": "16.74",
			"name": "麦趣尔"
		},
		{
			"code": "300366",
			"涨跌幅度": "-0.43",
			"name": "创意信息"
		},
		{
			"code": "600150",
			"涨跌幅度": "-29.46",
			"name": "中国船舶"
		},
		{
			"code": "000939",
			"涨跌幅度": "-19.68",
			"name": "凯迪生态"
		},
		{
			"code": "601016",
			"涨跌幅度": "-36.99",
			"name": "节能风电"
		},
		{
			"code": "601611",
			"涨跌幅度": "325.96",
			"name": "中国核建"
		},
		{
			"code": "600337",
			"涨跌幅度": "-0.07",
			"name": "美克家居"
		},
		{
			"code": "002081",
			"涨跌幅度": "9.3",
			"name": "金 螳 螂"
		},
		{
			"code": "603159",
			"涨跌幅度": "535.92",
			"name": "上海亚虹"
		},
		{
			"code": "002339",
			"涨跌幅度": "-16.58",
			"name": "积成电子"
		},
		{
			"code": "600545",
			"涨跌幅度": "4.22",
			"name": "新疆城建"
		},
		{
			"code": "002606",
			"涨跌幅度": "151.35",
			"name": "大连电瓷"
		},
		{
			"code": "600764",
			"涨跌幅度": "41.88",
			"name": "中电广通"
		},
		{
			"code": "600283",
			"涨跌幅度": "-31.07",
			"name": "钱江水利"
		},
		{
			"code": "601038",
			"涨跌幅度": "-9.37",
			"name": "一拖股份"
		},
		{
			"code": "000958",
			"涨跌幅度": "-32.9",
			"name": "东方能源"
		},
		{
			"code": "002002",
			"涨跌幅度": "-22.2",
			"name": "鸿达兴业"
		},
		{
			"code": "600247",
			"涨跌幅度": "-12.82",
			"name": "ST成城"
		},
		{
			"code": "300240",
			"涨跌幅度": "-11.78",
			"name": "飞力达"
		},
		{
			"code": "000409",
			"涨跌幅度": "70.79",
			"name": "山东地矿"
		},
		{
			"code": "002713",
			"涨跌幅度": "21.0",
			"name": "东易日盛"
		},
		{
			"code": "603998",
			"涨跌幅度": "5.12",
			"name": "方盛制药"
		},
		{
			"code": "002242",
			"涨跌幅度": "1.69",
			"name": "九阳股份"
		},
		{
			"code": "002283",
			"涨跌幅度": "8.69",
			"name": "天润曲轴"
		},
		{
			"code": "000725",
			"涨跌幅度": "1.37",
			"name": "京东方Ａ"
		},
		{
			"code": "300393",
			"涨跌幅度": "36.77",
			"name": "中来股份"
		},
		{
			"code": "601390",
			"涨跌幅度": "-12.09",
			"name": "中国中铁"
		},
		{
			"code": "600592",
			"涨跌幅度": "17.01",
			"name": "龙溪股份"
		},
		{
			"code": "002803",
			"涨跌幅度": "670.16",
			"name": "吉宏股份"
		},
		{
			"code": "002715",
			"涨跌幅度": "7.14",
			"name": "登云股份"
		},
		{
			"code": "603158",
			"涨跌幅度": "-6.63",
			"name": "腾龙股份"
		},
		{
			"code": "002446",
			"涨跌幅度": "-14.68",
			"name": "盛路通信"
		},
		{
			"code": "300104",
			"涨跌幅度": "-20.36",
			"name": "乐视网"
		},
		{
			"code": "600313",
			"涨跌幅度": "13.57",
			"name": "农发种业"
		},
		{
			"code": "000953",
			"涨跌幅度": "2.67",
			"name": "河池化工"
		},
		{
			"code": "002459",
			"涨跌幅度": "-5.0",
			"name": "天业通联"
		},
		{
			"code": "600234",
			"涨跌幅度": "6.76",
			"name": "*ST山水"
		},
		{
			"code": "300502",
			"涨跌幅度": "511.41",
			"name": "新易盛"
		},
		{
			"code": "002694",
			"涨跌幅度": "154.74",
			"name": "顾地科技"
		},
		{
			"code": "000615",
			"涨跌幅度": "47.62",
			"name": "京汉股份"
		},
		{
			"code": "601155",
			"涨跌幅度": "-30.76",
			"name": "新城控股"
		},
		{
			"code": "002490",
			"涨跌幅度": "8.69",
			"name": "山东墨龙"
		},
		{
			"code": "002786",
			"涨跌幅度": "524.44",
			"name": "银宝山新"
		},
		{
			"code": "002735",
			"涨跌幅度": "38.2",
			"name": "王子新材"
		},
		{
			"code": "601500",
			"涨跌幅度": "343.9",
			"name": "通用股份"
		},
		{
			"code": "600153",
			"涨跌幅度": "-29.63",
			"name": "建发股份"
		},
		{
			"code": "002633",
			"涨跌幅度": "39.72",
			"name": "申科股份"
		},
		{
			"code": "600619",
			"涨跌幅度": "-3.57",
			"name": "海立股份"
		},
		{
			"code": "300319",
			"涨跌幅度": "13.26",
			"name": "麦捷科技"
		},
		{
			"code": "601669",
			"涨跌幅度": "1.11",
			"name": "中国电建"
		},
		{
			"code": "603003",
			"涨跌幅度": "5.58",
			"name": "龙宇燃油"
		},
		{
			"code": "002402",
			"涨跌幅度": "23.97",
			"name": "和而泰"
		},
		{
			"code": "601010",
			"涨跌幅度": "-24.0",
			"name": "文峰股份"
		},
		{
			"code": "002278",
			"涨跌幅度": "-1.46",
			"name": "神开股份"
		},
		{
			"code": "600232",
			"涨跌幅度": "3.63",
			"name": "金鹰股份"
		},
		{
			"code": "002358",
			"涨跌幅度": "34.72",
			"name": "森源电气"
		},
		{
			"code": "002189",
			"涨跌幅度": "-27.27",
			"name": "利达光电"
		},
		{
			"code": "000931",
			"涨跌幅度": "-22.23",
			"name": "中 关 村"
		},
		{
			"code": "002703",
			"涨跌幅度": "10.32",
			"name": "浙江世宝"
		},
		{
			"code": "002012",
			"涨跌幅度": "27.27",
			"name": "凯恩股份"
		},
		{
			"code": "002016",
			"涨跌幅度": "-24.72",
			"name": "世荣兆业"
		},
		{
			"code": "603859",
			"涨跌幅度": "488.73",
			"name": "能科股份"
		},
		{
			"code": "300495",
			"涨跌幅度": "254.64",
			"name": "美尚生态"
		},
		{
			"code": "000639",
			"涨跌幅度": "54.15",
			"name": "西王食品"
		},
		{
			"code": "002063",
			"涨跌幅度": "-39.66",
			"name": "远光软件"
		},
		{
			"code": "300321",
			"涨跌幅度": "-30.62",
			"name": "同大股份"
		},
		{
			"code": "000607",
			"涨跌幅度": "23.61",
			"name": "华媒控股"
		},
		{
			"code": "002064",
			"涨跌幅度": "-23.25",
			"name": "华峰氨纶"
		},
		{
			"code": "600068",
			"涨跌幅度": "28.27",
			"name": "葛洲坝"
		},
		{
			"code": "000812",
			"涨跌幅度": "-14.57",
			"name": "陕西金叶"
		},
		{
			"code": "600795",
			"涨跌幅度": "-14.54",
			"name": "国电电力"
		},
		{
			"code": "000662",
			"涨跌幅度": "-1.83",
			"name": "天夏智慧"
		},
		{
			"code": "601599",
			"涨跌幅度": "-4.28",
			"name": "鹿港文化"
		},
		{
			"code": "002092",
			"涨跌幅度": "19.76",
			"name": "中泰化学"
		},
		{
			"code": "000935",
			"涨跌幅度": "326.47",
			"name": "四川双马"
		},
		{
			"code": "603616",
			"涨跌幅度": "-2.28",
			"name": "韩建河山"
		},
		{
			"code": "601020",
			"涨跌幅度": "346.71",
			"name": "华钰矿业"
		},
		{
			"code": "300338",
			"涨跌幅度": "68.65",
			"name": "开元仪器"
		},
		{
			"code": "600803",
			"涨跌幅度": "-4.29",
			"name": "新奥股份"
		},
		{
			"code": "603822",
			"涨跌幅度": "427.36",
			"name": "嘉澳环保"
		},
		{
			"code": "000553",
			"涨跌幅度": "41.48",
			"name": "沙隆达Ａ"
		},
		{
			"code": "002596",
			"涨跌幅度": "14.11",
			"name": "海南瑞泽"
		},
		{
			"code": "600995",
			"涨跌幅度": "43.17",
			"name": "文山电力"
		},
		{
			"code": "600053",
			"涨跌幅度": "-11.13",
			"name": "九鼎投资"
		},
		{
			"code": "000837",
			"涨跌幅度": "-41.13",
			"name": "秦川机床"
		},
		{
			"code": "002434",
			"涨跌幅度": "35.63",
			"name": "万里扬"
		},
		{
			"code": "000856",
			"涨跌幅度": "18.11",
			"name": "*ST冀装"
		},
		{
			"code": "000677",
			"涨跌幅度": "27.97",
			"name": "恒天海龙"
		},
		{
			"code": "600566",
			"涨跌幅度": "23.83",
			"name": "济川药业"
		},
		{
			"code": "601857",
			"涨跌幅度": "-5.98",
			"name": "中国石油"
		},
		{
			"code": "600688",
			"涨跌幅度": "-0.32",
			"name": "上海石化"
		},
		{
			"code": "601028",
			"涨跌幅度": "28.97",
			"name": "玉龙股份"
		},
		{
			"code": "601169",
			"涨跌幅度": "38.27",
			"name": "北京银行"
		},
		{
			"code": "300317",
			"涨跌幅度": "117.09",
			"name": "珈伟股份"
		},
		{
			"code": "002538",
			"涨跌幅度": "-6.48",
			"name": "司尔特"
		},
		{
			"code": "002149",
			"涨跌幅度": "20.33",
			"name": "西部材料"
		},
		{
			"code": "002556",
			"涨跌幅度": "-30.4",
			"name": "辉隆股份"
		},
		{
			"code": "002163",
			"涨跌幅度": "-19.14",
			"name": "中航三鑫"
		},
		{
			"code": "600871",
			"涨跌幅度": "-50.3",
			"name": "石化油服"
		},
		{
			"code": "000401",
			"涨跌幅度": "11.26",
			"name": "冀东水泥"
		},
		{
			"code": "300252",
			"涨跌幅度": "-1.55",
			"name": "金信诺"
		},
		{
			"code": "600837",
			"涨跌幅度": "15.8",
			"name": "海通证券"
		},
		{
			"code": "600011",
			"涨跌幅度": "-8.49",
			"name": "华能国际"
		},
		{
			"code": "000678",
			"涨跌幅度": "19.76",
			"name": "襄阳轴承"
		},
		{
			"code": "600983",
			"涨跌幅度": "-16.87",
			"name": "惠而浦"
		},
		{
			"code": "002567",
			"涨跌幅度": "4.01",
			"name": "唐人神"
		},
		{
			"code": "601158",
			"涨跌幅度": "-9.71",
			"name": "重庆水务"
		},
		{
			"code": "600685",
			"涨跌幅度": "-21.3",
			"name": "中船防务"
		},
		{
			"code": "300161",
			"涨跌幅度": "-21.92",
			"name": "华中数控"
		},
		{
			"code": "002702",
			"涨跌幅度": "-39.46",
			"name": "海欣食品"
		},
		{
			"code": "300411",
			"涨跌幅度": "18.67",
			"name": "金盾股份"
		},
		{
			"code": "000995",
			"涨跌幅度": "23.52",
			"name": "*ST皇台"
		},
		{
			"code": "002574",
			"涨跌幅度": "-23.07",
			"name": "明牌珠宝"
		},
		{
			"code": "002572",
			"涨跌幅度": "46.61",
			"name": "索菲亚"
		},
		{
			"code": "601939",
			"涨跌幅度": "4.44",
			"name": "建设银行"
		},
		{
			"code": "000898",
			"涨跌幅度": "22.29",
			"name": "鞍钢股份"
		},
		{
			"code": "002138",
			"涨跌幅度": "29.08",
			"name": "顺络电子"
		},
		{
			"code": "000056",
			"涨跌幅度": "-9.85",
			"name": "皇庭国际"
		},
		{
			"code": "600469",
			"涨跌幅度": "3.68",
			"name": "风神股份"
		},
		{
			"code": "000586",
			"涨跌幅度": "14.42",
			"name": "汇源通信"
		},
		{
			"code": "600581",
			"涨跌幅度": "-26.89",
			"name": "*ST八钢"
		},
		{
			"code": "000718",
			"涨跌幅度": "-22.95",
			"name": "苏宁环球"
		},
		{
			"code": "600528",
			"涨跌幅度": "25.71",
			"name": "中铁二局"
		},
		{
			"code": "002756",
			"涨跌幅度": "-10.53",
			"name": "永兴特钢"
		},
		{
			"code": "000525",
			"涨跌幅度": "0.56",
			"name": "红 太 阳"
		},
		{
			"code": "600371",
			"涨跌幅度": "-16.52",
			"name": "万向德农"
		},
		{
			"code": "601107",
			"涨跌幅度": "5.53",
			"name": "四川成渝"
		},
		{
			"code": "601601",
			"涨跌幅度": "17.89",
			"name": "中国太保"
		},
		{
			"code": "600439",
			"涨跌幅度": "19.2",
			"name": "瑞贝卡"
		},
		{
			"code": "000903",
			"涨跌幅度": "5.54",
			"name": "云内动力"
		},
		{
			"code": "600325",
			"涨跌幅度": "-6.0",
			"name": "华发股份"
		},
		{
			"code": "002024",
			"涨跌幅度": "-12.65",
			"name": "苏宁云商"
		},
		{
			"code": "002332",
			"涨跌幅度": "-3.06",
			"name": "仙琚制药"
		},
		{
			"code": "002591",
			"涨跌幅度": "10.73",
			"name": "恒大高新"
		},
		{
			"code": "601069",
			"涨跌幅度": "33.12",
			"name": "西部黄金"
		},
		{
			"code": "000819",
			"涨跌幅度": "-17.99",
			"name": "岳阳兴长"
		},
		{
			"code": "300087",
			"涨跌幅度": "10.81",
			"name": "荃银高科"
		},
		{
			"code": "600265",
			"涨跌幅度": "39.06",
			"name": "*ST景谷"
		},
		{
			"code": "600420",
			"涨跌幅度": "-14.64",
			"name": "现代制药"
		},
		{
			"code": "002442",
			"涨跌幅度": "17.31",
			"name": "龙星化工"
		},
		{
			"code": "002117",
			"涨跌幅度": "-30.21",
			"name": "东港股份"
		},
		{
			"code": "601006",
			"涨跌幅度": "-12.5",
			"name": "大秦铁路"
		},
		{
			"code": "000573",
			"涨跌幅度": "41.86",
			"name": "粤宏远Ａ"
		},
		{
			"code": "000811",
			"涨跌幅度": "-3.47",
			"name": "烟台冰轮"
		},
		{
			"code": "600511",
			"涨跌幅度": "-2.7",
			"name": "国药股份"
		},
		{
			"code": "300197",
			"涨跌幅度": "19.35",
			"name": "铁汉生态"
		},
		{
			"code": "000875",
			"涨跌幅度": "-36.76",
			"name": "吉电股份"
		},
		{
			"code": "300282",
			"涨跌幅度": "-1.01",
			"name": "汇冠股份"
		},
		{
			"code": "600406",
			"涨跌幅度": "2.7",
			"name": "国电南瑞"
		},
		{
			"code": "600988",
			"涨跌幅度": "46.33",
			"name": "赤峰黄金"
		},
		{
			"code": "300052",
			"涨跌幅度": "-0.66",
			"name": "中青宝"
		},
		{
			"code": "600582",
			"涨跌幅度": "-32.26",
			"name": "天地科技"
		},
		{
			"code": "600489",
			"涨跌幅度": "50.4",
			"name": "中金黄金"
		},
		{
			"code": "002450",
			"涨跌幅度": "-0.16",
			"name": "康得新"
		},
		{
			"code": "002202",
			"涨跌幅度": "11.22",
			"name": "金风科技"
		},
		{
			"code": "600056",
			"涨跌幅度": "24.69",
			"name": "中国医药"
		},
		{
			"code": "002733",
			"涨跌幅度": "16.98",
			"name": "雄韬股份"
		},
		{
			"code": "601717",
			"涨跌幅度": "0.15",
			"name": "郑煤机"
		},
		{
			"code": "600146",
			"涨跌幅度": "10.09",
			"name": "商赢环球"
		},
		{
			"code": "002178",
			"涨跌幅度": "-29.97",
			"name": "延华智能"
		},
		{
			"code": "000976",
			"涨跌幅度": "22.87",
			"name": "春晖股份"
		},
		{
			"code": "002569",
			"涨跌幅度": "58.84",
			"name": "步森股份"
		},
		{
			"code": "300090",
			"涨跌幅度": "1.48",
			"name": "盛运环保"
		},
		{
			"code": "002086",
			"涨跌幅度": "-13.04",
			"name": "东方海洋"
		},
		{
			"code": "603766",
			"涨跌幅度": "-5.86",
			"name": "隆鑫通用"
		},
		{
			"code": "600256",
			"涨跌幅度": "-33.87",
			"name": "广汇能源"
		},
		{
			"code": "000752",
			"涨跌幅度": "11.81",
			"name": "西藏发展"
		},
		{
			"code": "600583",
			"涨跌幅度": "-14.24",
			"name": "海油工程"
		},
		{
			"code": "600594",
			"涨跌幅度": "-11.59",
			"name": "益佰制药"
		},
		{
			"code": "600538",
			"涨跌幅度": "3.63",
			"name": "国发股份"
		},
		{
			"code": "601992",
			"涨跌幅度": "-11.32",
			"name": "金隅股份"
		},
		{
			"code": "600131",
			"涨跌幅度": "32.47",
			"name": "岷江水电"
		},
		{
			"code": "600692",
			"涨跌幅度": "16.36",
			"name": "亚通股份"
		},
		{
			"code": "002155",
			"涨跌幅度": "52.25",
			"name": "湖南黄金"
		},
		{
			"code": "300054",
			"涨跌幅度": "-4.39",
			"name": "鼎龙股份"
		},
		{
			"code": "600335",
			"涨跌幅度": "6.3",
			"name": "国机汽车"
		},
		{
			"code": "000338",
			"涨跌幅度": "19.27",
			"name": "潍柴动力"
		},
		{
			"code": "002264",
			"涨跌幅度": "36.37",
			"name": "新 华 都"
		},
		{
			"code": "002347",
			"涨跌幅度": "14.33",
			"name": "泰尔股份"
		},
		{
			"code": "600863",
			"涨跌幅度": "-29.89",
			"name": "内蒙华电"
		},
		{
			"code": "002773",
			"涨跌幅度": "6.23",
			"name": "康弘药业"
		},
		{
			"code": "600173",
			"涨跌幅度": "8.88",
			"name": "卧龙地产"
		},
		{
			"code": "300234",
			"涨跌幅度": "13.04",
			"name": "开尔新材"
		},
		{
			"code": "000617",
			"涨跌幅度": "22.72",
			"name": "*ST济柴"
		},
		{
			"code": "002040",
			"涨跌幅度": "0.66",
			"name": "南 京 港"
		},
		{
			"code": "600518",
			"涨跌幅度": "-5.27",
			"name": "康美药业"
		},
		{
			"code": "002112",
			"涨跌幅度": "10.52",
			"name": "三变科技"
		},
		{
			"code": "600847",
			"涨跌幅度": "-8.46",
			"name": "万里股份"
		},
		{
			"code": "000635",
			"涨跌幅度": "59.26",
			"name": "英 力 特"
		},
		{
			"code": "002340",
			"涨跌幅度": "-7.6",
			"name": "格林美"
		},
		{
			"code": "600316",
			"涨跌幅度": "-17.71",
			"name": "洪都航空"
		},
		{
			"code": "600714",
			"涨跌幅度": "37.08",
			"name": "金瑞矿业"
		},
		{
			"code": "000950",
			"涨跌幅度": "1.56",
			"name": "*ST建峰"
		},
		{
			"code": "600568",
			"涨跌幅度": "17.12",
			"name": "中珠医疗"
		},
		{
			"code": "600674",
			"涨跌幅度": "-10.37",
			"name": "川投能源"
		},
		{
			"code": "000153",
			"涨跌幅度": "27.37",
			"name": "丰原药业"
		},
		{
			"code": "002676",
			"涨跌幅度": "70.42",
			"name": "顺威股份"
		},
		{
			"code": "000809",
			"涨跌幅度": "7.04",
			"name": "铁岭新城"
		},
		{
			"code": "600475",
			"涨跌幅度": "15.71",
			"name": "华光股份"
		},
		{
			"code": "000666",
			"涨跌幅度": "-3.52",
			"name": "经纬纺机"
		},
		{
			"code": "600633",
			"涨跌幅度": "-8.73",
			"name": "浙报传媒"
		},
		{
			"code": "600693",
			"涨跌幅度": "71.4",
			"name": "东百集团"
		},
		{
			"code": "002237",
			"涨跌幅度": "28.82",
			"name": "恒邦股份"
		},
		{
			"code": "300531",
			"涨跌幅度": "799.6",
			"name": "优博讯"
		},
		{
			"code": "600080",
			"涨跌幅度": "8.27",
			"name": "金花股份"
		},
		{
			"code": "002667",
			"涨跌幅度": "-13.87",
			"name": "鞍重股份"
		},
		{
			"code": "600699",
			"涨跌幅度": "10.43",
			"name": "均胜电子"
		},
		{
			"code": "600666",
			"涨跌幅度": "11.14",
			"name": "奥瑞德"
		},
		{
			"code": "000998",
			"涨跌幅度": "2.92",
			"name": "隆平高科"
		},
		{
			"code": "300446",
			"涨跌幅度": "-27.71",
			"name": "乐凯新材"
		},
		{
			"code": "002601",
			"涨跌幅度": "25.02",
			"name": "佰利联"
		},
		{
			"code": "002211",
			"涨跌幅度": "59.89",
			"name": "宏达新材"
		},
		{
			"code": "600609",
			"涨跌幅度": "43.67",
			"name": "金杯汽车"
		},
		{
			"code": "600329",
			"涨跌幅度": "-7.33",
			"name": "中新药业"
		},
		{
			"code": "600998",
			"涨跌幅度": "15.99",
			"name": "九州通"
		},
		{
			"code": "000972",
			"涨跌幅度": "-51.63",
			"name": "中基健康"
		},
		{
			"code": "603555",
			"涨跌幅度": "-15.0",
			"name": "贵人鸟"
		},
		{
			"code": "600779",
			"涨跌幅度": "38.64",
			"name": "水井坊"
		},
		{
			"code": "002052",
			"涨跌幅度": "-1.78",
			"name": "同洲电子"
		},
		{
			"code": "600132",
			"涨跌幅度": "16.66",
			"name": "重庆啤酒"
		},
		{
			"code": "600085",
			"涨跌幅度": "25.05",
			"name": "同仁堂"
		},
		{
			"code": "300136",
			"涨跌幅度": "54.65",
			"name": "信维通信"
		},
		{
			"code": "000806",
			"涨跌幅度": "-32.5",
			"name": "银河生物"
		},
		{
			"code": "300115",
			"涨跌幅度": "25.74",
			"name": "长盈精密"
		},
		{
			"code": "000028",
			"涨跌幅度": "8.88",
			"name": "国药一致"
		},
		{
			"code": "300292",
			"涨跌幅度": "-3.76",
			"name": "吴通控股"
		},
		{
			"code": "002413",
			"涨跌幅度": "-24.62",
			"name": "雷科防务"
		},
		{
			"code": "002468",
			"涨跌幅度": "127.08",
			"name": "艾迪西"
		},
		{
			"code": "000585",
			"涨跌幅度": "7.53",
			"name": "东北电气"
		},
		{
			"code": "300176",
			"涨跌幅度": "12.26",
			"name": "鸿特精密"
		},
		{
			"code": "000791",
			"涨跌幅度": "-17.87",
			"name": "甘肃电投"
		},
		{
			"code": "600276",
			"涨跌幅度": "12.29",
			"name": "恒瑞医药"
		},
		{
			"code": "600426",
			"涨跌幅度": "8.47",
			"name": "华鲁恒升"
		},
		{
			"code": "002613",
			"涨跌幅度": "24.46",
			"name": "北玻股份"
		},
		{
			"code": "002258",
			"涨跌幅度": "3.84",
			"name": "利尔化学"
		},
		{
			"code": "002722",
			"涨跌幅度": "90.83",
			"name": "金轮股份"
		},
		{
			"code": "300368",
			"涨跌幅度": "51.32",
			"name": "汇金股份"
		},
		{
			"code": "600804",
			"涨跌幅度": "4.94",
			"name": "鹏博士"
		},
		{
			"code": "300048",
			"涨跌幅度": "4.17",
			"name": "合康新能"
		},
		{
			"code": "300304",
			"涨跌幅度": "128.49",
			"name": "云意电气"
		},
		{
			"code": "600444",
			"涨跌幅度": "12.86",
			"name": "国机通用"
		},
		{
			"code": "000059",
			"涨跌幅度": "28.65",
			"name": "华锦股份"
		},
		{
			"code": "600352",
			"涨跌幅度": "-22.43",
			"name": "浙江龙盛"
		},
		{
			"code": "000826",
			"涨跌幅度": "-12.88",
			"name": "启迪桑德"
		},
		{
			"code": "002353",
			"涨跌幅度": "-19.33",
			"name": "杰瑞股份"
		},
		{
			"code": "603843",
			"涨跌幅度": "344.87",
			"name": "正平股份"
		},
		{
			"code": "600322",
			"涨跌幅度": "25.05",
			"name": "天房发展"
		},
		{
			"code": "002656",
			"涨跌幅度": "56.17",
			"name": "摩登大道"
		},
		{
			"code": "600148",
			"涨跌幅度": "5.72",
			"name": "长春一东"
		},
		{
			"code": "000786",
			"涨跌幅度": "-9.13",
			"name": "北新建材"
		},
		{
			"code": "300280",
			"涨跌幅度": "41.26",
			"name": "南通锻压"
		},
		{
			"code": "300003",
			"涨跌幅度": "-9.66",
			"name": "乐普医疗"
		},
		{
			"code": "002263",
			"涨跌幅度": "-14.92",
			"name": "大 东 南"
		},
		{
			"code": "002693",
			"涨跌幅度": "-32.65",
			"name": "双成药业"
		},
		{
			"code": "000534",
			"涨跌幅度": "64.26",
			"name": "万泽股份"
		},
		{
			"code": "600720",
			"涨跌幅度": "-9.94",
			"name": "祁连山"
		},
		{
			"code": "002019",
			"涨跌幅度": "42.99",
			"name": "亿帆医药"
		},
		{
			"code": "000608",
			"涨跌幅度": "42.66",
			"name": "阳光股份"
		},
		{
			"code": "600638",
			"涨跌幅度": "23.26",
			"name": "新黄浦"
		},
		{
			"code": "002334",
			"涨跌幅度": "-22.01",
			"name": "英威腾"
		},
		{
			"code": "600519",
			"涨跌幅度": "54.97",
			"name": "贵州茅台"
		},
		{
			"code": "300313",
			"涨跌幅度": "-0.73",
			"name": "天山生物"
		},
		{
			"code": "002603",
			"涨跌幅度": "-2.98",
			"name": "以岭药业"
		},
		{
			"code": "600900",
			"涨跌幅度": "4.38",
			"name": "长江电力"
		},
		{
			"code": "600658",
			"涨跌幅度": "10.4",
			"name": "电子城"
		},
		{
			"code": "000632",
			"涨跌幅度": "-14.27",
			"name": "三木集团"
		},
		{
			"code": "002085",
			"涨跌幅度": "17.27",
			"name": "万丰奥威"
		},
		{
			"code": "000636",
			"涨跌幅度": "0.19",
			"name": "风华高科"
		},
		{
			"code": "000018",
			"涨跌幅度": "20.98",
			"name": "神州长城"
		},
		{
			"code": "002270",
			"涨跌幅度": "-9.53",
			"name": "华明装备"
		},
		{
			"code": "601188",
			"涨跌幅度": "15.67",
			"name": "龙江交通"
		},
		{
			"code": "600547",
			"涨跌幅度": "110.75",
			"name": "山东黄金"
		},
		{
			"code": "000539",
			"涨跌幅度": "-21.59",
			"name": "粤电力Ａ"
		},
		{
			"code": "002210",
			"涨跌幅度": "-2.56",
			"name": "飞马国际"
		},
		{
			"code": "600202",
			"涨跌幅度": "9.27",
			"name": "哈空调"
		},
		{
			"code": "300242",
			"涨跌幅度": "-25.81",
			"name": "明家联合"
		},
		{
			"code": "000852",
			"涨跌幅度": "-23.41",
			"name": "石化机械"
		},
		{
			"code": "600642",
			"涨跌幅度": "-17.18",
			"name": "申能股份"
		},
		{
			"code": "300438",
			"涨跌幅度": "-14.55",
			"name": "鹏辉能源"
		},
		{
			"code": "601900",
			"涨跌幅度": "159.2",
			"name": "南方传媒"
		},
		{
			"code": "000671",
			"涨跌幅度": "-20.3",
			"name": "阳 光 城"
		},
		{
			"code": "600095",
			"涨跌幅度": "16.37",
			"name": "哈高科"
		},
		{
			"code": "002359",
			"涨跌幅度": "-15.54",
			"name": "齐星铁塔"
		},
		{
			"code": "603777",
			"涨跌幅度": "342.43",
			"name": "来伊份"
		},
		{
			"code": "300175",
			"涨跌幅度": "12.67",
			"name": "朗源股份"
		},
		{
			"code": "600739",
			"涨跌幅度": "35.38",
			"name": "辽宁成大"
		},
		{
			"code": "600765",
			"涨跌幅度": "-24.37",
			"name": "中航重机"
		},
		{
			"code": "002061",
			"涨跌幅度": "19.76",
			"name": "*ST江化"
		},
		{
			"code": "000509",
			"涨跌幅度": "-3.75",
			"name": "华塑控股"
		},
		{
			"code": "601088",
			"涨跌幅度": "18.78",
			"name": "中国神华"
		},
		{
			"code": "000623",
			"涨跌幅度": "26.37",
			"name": "吉林敖东"
		},
		{
			"code": "000089",
			"涨跌幅度": "12.67",
			"name": "深圳机场"
		},
		{
			"code": "600060",
			"涨跌幅度": "10.73",
			"name": "海信电器"
		},
		{
			"code": "002068",
			"涨跌幅度": "1.54",
			"name": "黑猫股份"
		},
		{
			"code": "002015",
			"涨跌幅度": "83.53",
			"name": "霞客环保"
		},
		{
			"code": "300072",
			"涨跌幅度": "99.29",
			"name": "三聚环保"
		},
		{
			"code": "002508",
			"涨跌幅度": "44.3",
			"name": "老板电器"
		},
		{
			"code": "600136",
			"涨跌幅度": "-40.95",
			"name": "当代明诚"
		},
		{
			"code": "600614",
			"涨跌幅度": "4.23",
			"name": "鼎立股份"
		},
		{
			"code": "000793",
			"涨跌幅度": "-27.71",
			"name": "华闻传媒"
		},
		{
			"code": "600978",
			"涨跌幅度": "-48.27",
			"name": "宜华生活"
		},
		{
			"code": "002240",
			"涨跌幅度": "-3.07",
			"name": "威华股份"
		},
		{
			"code": "002127",
			"涨跌幅度": "30.5",
			"name": "南极电商"
		},
		{
			"code": "603011",
			"涨跌幅度": "0.57",
			"name": "合锻智能"
		},
		{
			"code": "002730",
			"涨跌幅度": "73.12",
			"name": "电光科技"
		},
		{
			"code": "002254",
			"涨跌幅度": "-16.57",
			"name": "泰和新材"
		},
		{
			"code": "600004",
			"涨跌幅度": "11.64",
			"name": "白云机场"
		},
		{
			"code": "601800",
			"涨跌幅度": "14.24",
			"name": "中国交建"
		},
		{
			"code": "600735",
			"涨跌幅度": "-22.14",
			"name": "新华锦"
		},
		{
			"code": "600363",
			"涨跌幅度": "-4.92",
			"name": "联创光电"
		},
		{
			"code": "300322",
			"涨跌幅度": "3.69",
			"name": "硕贝德"
		},
		{
			"code": "000732",
			"涨跌幅度": "-22.87",
			"name": "泰禾集团"
		},
		{
			"code": "603026",
			"涨跌幅度": "56.37",
			"name": "石大胜华"
		},
		{
			"code": "002294",
			"涨跌幅度": "-3.01",
			"name": "信立泰"
		},
		{
			"code": "300250",
			"涨跌幅度": "-5.76",
			"name": "初灵信息"
		},
		{
			"code": "300238",
			"涨跌幅度": "-26.95",
			"name": "冠昊生物"
		},
		{
			"code": "603986",
			"涨跌幅度": "537.66",
			"name": "兆易创新"
		},
		{
			"code": "603838",
			"涨跌幅度": "-13.23",
			"name": "四通股份"
		},
		{
			"code": "603558",
			"涨跌幅度": "38.69",
			"name": "健盛集团"
		},
		{
			"code": "603518",
			"涨跌幅度": "-9.36",
			"name": "维格娜丝"
		},
		{
			"code": "603399",
			"涨跌幅度": "-24.92",
			"name": "新华龙"
		},
		{
			"code": "603366",
			"涨跌幅度": "5.65",
			"name": "日出东方"
		},
		{
			"code": "603308",
			"涨跌幅度": "-3.52",
			"name": "应流股份"
		},
		{
			"code": "603169",
			"涨跌幅度": "-24.9",
			"name": "兰石重装"
		},
		{
			"code": "601727",
			"涨跌幅度": "-25.02",
			"name": "上海电气"
		},
		{
			"code": "601700",
			"涨跌幅度": "-8.83",
			"name": "风范股份"
		},
		{
			"code": "601558",
			"涨跌幅度": "-30.62",
			"name": "华锐风电"
		},
		{
			"code": "601398",
			"涨跌幅度": "4.63",
			"name": "工商银行"
		},
		{
			"code": "601288",
			"涨跌幅度": "9.15",
			"name": "农业银行"
		},
		{
			"code": "601116",
			"涨跌幅度": "138.54",
			"name": "三江购物"
		},
		{
			"code": "601101",
			"涨跌幅度": "-23.0",
			"name": "昊华能源"
		},
		{
			"code": "601011",
			"涨跌幅度": "-28.37",
			"name": "宝泰隆"
		},
		{
			"code": "601005",
			"涨跌幅度": "-18.71",
			"name": "重庆钢铁"
		},
		{
			"code": "600997",
			"涨跌幅度": "34.31",
			"name": "开滦股份"
		},
		{
			"code": "600990",
			"涨跌幅度": "20.86",
			"name": "四创电子"
		},
		{
			"code": "600979",
			"涨跌幅度": "5.74",
			"name": "广安爱众"
		},
		{
			"code": "600973",
			"涨跌幅度": "-18.36",
			"name": "宝胜股份"
		},
		{
			"code": "600896",
			"涨跌幅度": "-22.25",
			"name": "览海投资"
		},
		{
			"code": "600892",
			"涨跌幅度": "9.07",
			"name": "大晟文化"
		},
		{
			"code": "600890",
			"涨跌幅度": "47.71",
			"name": "中房股份"
		},
		{
			"code": "600876",
			"涨跌幅度": "-23.02",
			"name": "洛阳玻璃"
		},
		{
			"code": "600859",
			"涨跌幅度": "-10.65",
			"name": "王府井"
		},
		{
			"code": "600855",
			"涨跌幅度": "-19.91",
			"name": "航天长峰"
		},
		{
			"code": "600810",
			"涨跌幅度": "-1.17",
			"name": "神马股份"
		},
		{
			"code": "600807",
			"涨跌幅度": "-12.38",
			"name": "天业股份"
		},
		{
			"code": "600797",
			"涨跌幅度": "33.23",
			"name": "浙大网新"
		},
		{
			"code": "600773",
			"涨跌幅度": "-19.39",
			"name": "西藏城投"
		},
		{
			"code": "600768",
			"涨跌幅度": "16.29",
			"name": "宁波富邦"
		},
		{
			"code": "600760",
			"涨跌幅度": "-40.1",
			"name": "*ST黑豹"
		},
		{
			"code": "600747",
			"涨跌幅度": "-13.76",
			"name": "大连控股"
		},
		{
			"code": "600745",
			"涨跌幅度": "-4.22",
			"name": "中茵股份"
		},
		{
			"code": "600734",
			"涨跌幅度": "27.94",
			"name": "实达集团"
		},
		{
			"code": "600733",
			"涨跌幅度": "35.62",
			"name": "S前锋"
		},
		{
			"code": "600725",
			"涨跌幅度": "-25.49",
			"name": "*ST云维"
		},
		{
			"code": "600687",
			"涨跌幅度": "-19.07",
			"name": "刚泰控股"
		},
		{
			"code": "600682",
			"涨跌幅度": "-12.34",
			"name": "南京新百"
		},
		{
			"code": "600675",
			"涨跌幅度": "-37.88",
			"name": "*ST中企"
		},
		{
			"code": "600673",
			"涨跌幅度": "-21.53",
			"name": "东阳光科"
		},
		{
			"code": "600663",
			"涨跌幅度": "-8.81",
			"name": "陆家嘴"
		},
		{
			"code": "600636",
			"涨跌幅度": "-10.0",
			"name": "三爱富"
		},
		{
			"code": "600603",
			"涨跌幅度": "14.94",
			"name": "*ST兴业"
		},
		{
			"code": "600577",
			"涨跌幅度": "-36.95",
			"name": "精达股份"
		},
		{
			"code": "600576",
			"涨跌幅度": "-20.02",
			"name": "万家文化"
		},
		{
			"code": "600575",
			"涨跌幅度": "-16.94",
			"name": "皖江物流"
		},
		{
			"code": "600552",
			"涨跌幅度": "-10.19",
			"name": "凯盛科技"
		},
		{
			"code": "600551",
			"涨跌幅度": "-19.68",
			"name": "时代出版"
		},
		{
			"code": "600539",
			"涨跌幅度": "54.67",
			"name": "ST狮头"
		},
		{
			"code": "600525",
			"涨跌幅度": "-14.09",
			"name": "长园集团"
		},
		{
			"code": "600482",
			"涨跌幅度": "-23.41",
			"name": "中国动力"
		},
		{
			"code": "600480",
			"涨跌幅度": "-14.91",
			"name": "凌云股份"
		},
		{
			"code": "600466",
			"涨跌幅度": "-41.24",
			"name": "蓝光发展"
		},
		{
			"code": "600462",
			"涨跌幅度": "-35.63",
			"name": "九有股份"
		},
		{
			"code": "600460",
			"涨跌幅度": "-23.92",
			"name": "士兰微"
		},
		{
			"code": "600432",
			"涨跌幅度": "-23.35",
			"name": "*ST吉恩"
		},
		{
			"code": "600346",
			"涨跌幅度": "-33.57",
			"name": "恒力股份"
		},
		{
			"code": "600339",
			"涨跌幅度": "-15.47",
			"name": "*ST天利"
		},
		{
			"code": "600331",
			"涨跌幅度": "-14.75",
			"name": "宏达股份"
		},
		{
			"code": "600319",
			"涨跌幅度": "1.99",
			"name": "*ST亚星"
		},
		{
			"code": "600301",
			"涨跌幅度": "-3.3",
			"name": "*ST南化"
		},
		{
			"code": "600255",
			"涨跌幅度": "-20.58",
			"name": "鑫科材料"
		},
		{
			"code": "600246",
			"涨跌幅度": "-1.27",
			"name": "万通地产"
		},
		{
			"code": "600242",
			"涨跌幅度": "117.01",
			"name": "中昌数据"
		},
		{
			"code": "600233",
			"涨跌幅度": "277.66",
			"name": "圆通速递"
		},
		{
			"code": "600228",
			"涨跌幅度": "7.77",
			"name": "昌九生化"
		},
		{
			"code": "600227",
			"涨跌幅度": "33.13",
			"name": "赤天化"
		},
		{
			"code": "600225",
			"涨跌幅度": "-7.0",
			"name": "天津松江"
		},
		{
			"code": "600212",
			"涨跌幅度": "-2.54",
			"name": "*ST江泉"
		},
		{
			"code": "600209",
			"涨跌幅度": "-3.89",
			"name": "罗顿发展"
		},
		{
			"code": "600189",
			"涨跌幅度": "-12.3",
			"name": "吉林森工"
		},
		{
			"code": "600175",
			"涨跌幅度": "-15.36",
			"name": "美都能源"
		},
		{
			"code": "600152",
			"涨跌幅度": "-1.34",
			"name": "维科精华"
		},
		{
			"code": "600151",
			"涨跌幅度": "-10.23",
			"name": "航天机电"
		},
		{
			"code": "600145",
			"涨跌幅度": "9.36",
			"name": "*ST新亿"
		},
		{
			"code": "600122",
			"涨跌幅度": "-28.03",
			"name": "宏图高科"
		},
		{
			"code": "600071",
			"涨跌幅度": "32.62",
			"name": "凤凰光学"
		},
		{
			"code": "600069",
			"涨跌幅度": "114.23",
			"name": "银鸽投资"
		},
		{
			"code": "600036",
			"涨跌幅度": "12.61",
			"name": "招商银行"
		},
		{
			"code": "600021",
			"涨跌幅度": "-22.98",
			"name": "上海电力"
		},
		{
			"code": "600019",
			"涨跌幅度": "17.22",
			"name": "宝钢股份"
		},
		{
			"code": "600016",
			"涨跌幅度": "14.72",
			"name": "民生银行"
		},
		{
			"code": "600005",
			"涨跌幅度": "-0.58",
			"name": "武钢股份"
		},
		{
			"code": "300537",
			"涨跌幅度": "342.34",
			"name": "广信材料"
		},
		{
			"code": "300513",
			"涨跌幅度": "577.27",
			"name": "恒泰实达"
		},
		{
			"code": "300510",
			"涨跌幅度": "404.31",
			"name": "金冠电气"
		},
		{
			"code": "300496",
			"涨跌幅度": "632.21",
			"name": "中科创达"
		},
		{
			"code": "300488",
			"涨跌幅度": "-8.45",
			"name": "恒锋工具"
		},
		{
			"code": "300480",
			"涨跌幅度": "-34.55",
			"name": "光力科技"
		},
		{
			"code": "300477",
			"涨跌幅度": "11.09",
			"name": "合纵科技"
		},
		{
			"code": "300473",
			"涨跌幅度": "-17.11",
			"name": "德尔股份"
		},
		{
			"code": "300466",
			"涨跌幅度": "199.5",
			"name": "赛摩电气"
		},
		{
			"code": "300459",
			"涨跌幅度": "178.93",
			"name": "金科娱乐"
		},
		{
			"code": "300457",
			"涨跌幅度": "-9.4",
			"name": "赢合科技"
		},
		{
			"code": "300450",
			"涨跌幅度": "8.66",
			"name": "先导智能"
		},
		{
			"code": "300449",
			"涨跌幅度": "-24.25",
			"name": "汉邦高科"
		},
		{
			"code": "300427",
			"涨跌幅度": "1.86",
			"name": "红相电力"
		},
		{
			"code": "300398",
			"涨跌幅度": "3.27",
			"name": "飞凯材料"
		},
		{
			"code": "300391",
			"涨跌幅度": "33.54",
			"name": "康跃科技"
		},
		{
			"code": "300374",
			"涨跌幅度": "-9.79",
			"name": "恒通科技"
		},
		{
			"code": "300363",
			"涨跌幅度": "-6.55",
			"name": "博腾股份"
		},
		{
			"code": "300353",
			"涨跌幅度": "-11.6",
			"name": "东土科技"
		},
		{
			"code": "300328",
			"涨跌幅度": "-21.72",
			"name": "宜安科技"
		},
		{
			"code": "300323",
			"涨跌幅度": "3.81",
			"name": "华灿光电"
		},
		{
			"code": "300311",
			"涨跌幅度": "-16.43",
			"name": "任子行"
		},
		{
			"code": "300276",
			"涨跌幅度": "-28.37",
			"name": "三丰智能"
		},
		{
			"code": "300273",
			"涨跌幅度": "-6.37",
			"name": "和佳股份"
		},
		{
			"code": "300268",
			"涨跌幅度": "-27.53",
			"name": "万福生科"
		},
		{
			"code": "300243",
			"涨跌幅度": "-21.67",
			"name": "瑞丰高材"
		},
		{
			"code": "300227",
			"涨跌幅度": "-27.03",
			"name": "光韵达"
		},
		{
			"code": "300223",
			"涨跌幅度": "25.46",
			"name": "北京君正"
		},
		{
			"code": "300219",
			"涨跌幅度": "0.53",
			"name": "鸿利智汇"
		},
		{
			"code": "300213",
			"涨跌幅度": "-24.59",
			"name": "佳讯飞鸿"
		},
		{
			"code": "300212",
			"涨跌幅度": "-28.6",
			"name": "易华录"
		},
		{
			"code": "300200",
			"涨跌幅度": "14.64",
			"name": "高盟新材"
		},
		{
			"code": "300179",
			"涨跌幅度": "-4.35",
			"name": "四方达"
		},
		{
			"code": "300165",
			"涨跌幅度": "0.99",
			"name": "天瑞仪器"
		},
		{
			"code": "300150",
			"涨跌幅度": "-33.84",
			"name": "世纪瑞尔"
		},
		{
			"code": "300143",
			"涨跌幅度": "12.94",
			"name": "星河生物"
		},
		{
			"code": "300123",
			"涨跌幅度": "-17.95",
			"name": "太阳鸟"
		},
		{
			"code": "300120",
			"涨跌幅度": "-25.68",
			"name": "经纬电材"
		},
		{
			"code": "300100",
			"涨跌幅度": "37.6",
			"name": "双林股份"
		},
		{
			"code": "300098",
			"涨跌幅度": "-2.94",
			"name": "高新兴"
		},
		{
			"code": "300095",
			"涨跌幅度": "7.56",
			"name": "华伍股份"
		},
		{
			"code": "300093",
			"涨跌幅度": "-1.86",
			"name": "金刚玻璃"
		},
		{
			"code": "300088",
			"涨跌幅度": "11.74",
			"name": "长信科技"
		},
		{
			"code": "300080",
			"涨跌幅度": "-30.22",
			"name": "易成新能"
		},
		{
			"code": "300076",
			"涨跌幅度": "13.54",
			"name": "GQY视讯"
		},
		{
			"code": "300047",
			"涨跌幅度": "-18.38",
			"name": "天源迪科"
		},
		{
			"code": "300028",
			"涨跌幅度": "-58.91",
			"name": "金亚科技"
		},
		{
			"code": "300027",
			"涨跌幅度": "-34.32",
			"name": "华谊兄弟"
		},
		{
			"code": "300005",
			"涨跌幅度": "-26.61",
			"name": "探路者"
		},
		{
			"code": "002829",
			"涨跌幅度": "",
			"name": "星网宇达"
		},
		{
			"code": "002798",
			"涨跌幅度": "441.2",
			"name": "帝王洁具"
		},
		{
			"code": "002795",
			"涨跌幅度": "414.03",
			"name": "永和智控"
		},
		{
			"code": "002779",
			"涨跌幅度": "280.72",
			"name": "中坚科技"
		},
		{
			"code": "002766",
			"涨跌幅度": "-2.19",
			"name": "索菱股份"
		},
		{
			"code": "002752",
			"涨跌幅度": "-14.51",
			"name": "昇兴股份"
		},
		{
			"code": "002745",
			"涨跌幅度": "-7.08",
			"name": "木林森"
		},
		{
			"code": "002725",
			"涨跌幅度": "0.89",
			"name": "跃岭股份"
		},
		{
			"code": "002721",
			"涨跌幅度": "-31.47",
			"name": "金一文化"
		},
		{
			"code": "002659",
			"涨跌幅度": "-9.25",
			"name": "中泰桥梁"
		},
		{
			"code": "002640",
			"涨跌幅度": "21.46",
			"name": "跨境通"
		},
		{
			"code": "002635",
			"涨跌幅度": "41.3",
			"name": "安洁科技"
		},
		{
			"code": "002629",
			"涨跌幅度": "71.82",
			"name": "仁智股份"
		},
		{
			"code": "002608",
			"涨跌幅度": "22.86",
			"name": "*ST舜船"
		},
		{
			"code": "002584",
			"涨跌幅度": "-20.36",
			"name": "西陇科学"
		},
		{
			"code": "002578",
			"涨跌幅度": "30.23",
			"name": "闽发铝业"
		},
		{
			"code": "002576",
			"涨跌幅度": "-32.58",
			"name": "通达动力"
		},
		{
			"code": "002571",
			"涨跌幅度": "-6.01",
			"name": "德力股份"
		},
		{
			"code": "002562",
			"涨跌幅度": "53.78",
			"name": "兄弟科技"
		},
		{
			"code": "002531",
			"涨跌幅度": "-1.45",
			"name": "天顺风能"
		},
		{
			"code": "002526",
			"涨跌幅度": "-1.75",
			"name": "山东矿机"
		},
		{
			"code": "002510",
			"涨跌幅度": "3.76",
			"name": "天汽模"
		},
		{
			"code": "002509",
			"涨跌幅度": "57.13",
			"name": "天广中茂"
		},
		{
			"code": "002492",
			"涨跌幅度": "-6.64",
			"name": "恒基达鑫"
		},
		{
			"code": "002482",
			"涨跌幅度": "-7.82",
			"name": "广田集团"
		},
		{
			"code": "002478",
			"涨跌幅度": "-1.2",
			"name": "常宝股份"
		},
		{
			"code": "002462",
			"涨跌幅度": "-3.25",
			"name": "嘉事堂"
		},
		{
			"code": "002440",
			"涨跌幅度": "-9.37",
			"name": "闰土股份"
		},
		{
			"code": "002400",
			"涨跌幅度": "-27.99",
			"name": "省广股份"
		},
		{
			"code": "002396",
			"涨跌幅度": "-12.44",
			"name": "星网锐捷"
		},
		{
			"code": "002386",
			"涨跌幅度": "42.68",
			"name": "天原集团"
		},
		{
			"code": "002379",
			"涨跌幅度": "85.25",
			"name": "*ST鲁丰"
		},
		{
			"code": "002377",
			"涨跌幅度": "",
			"name": "国创高新"
		},
		{
			"code": "002376",
			"涨跌幅度": "-13.4",
			"name": "新北洋"
		},
		{
			"code": "002357",
			"涨跌幅度": "15.13",
			"name": "富临运业"
		},
		{
			"code": "002338",
			"涨跌幅度": "-28.68",
			"name": "奥普光电"
		},
		{
			"code": "002316",
			"涨跌幅度": "-33.77",
			"name": "键桥通讯"
		},
		{
			"code": "002297",
			"涨跌幅度": "-19.69",
			"name": "博云新材"
		},
		{
			"code": "002282",
			"涨跌幅度": "-11.25",
			"name": "博深工具"
		},
		{
			"code": "002259",
			"涨跌幅度": "3.4",
			"name": "升达林业"
		},
		{
			"code": "002239",
			"涨跌幅度": "-14.36",
			"name": "奥特佳"
		},
		{
			"code": "002226",
			"涨跌幅度": "-13.9",
			"name": "江南化工"
		},
		{
			"code": "002198",
			"涨跌幅度": "47.93",
			"name": "嘉应制药"
		},
		{
			"code": "002165",
			"涨跌幅度": "12.03",
			"name": "红 宝 丽"
		},
		{
			"code": "002151",
			"涨跌幅度": "-7.56",
			"name": "北斗星通"
		},
		{
			"code": "002129",
			"涨跌幅度": "-36.48",
			"name": "中环股份"
		},
		{
			"code": "002113",
			"涨跌幅度": "106.25",
			"name": "天润数娱"
		},
		{
			"code": "002099",
			"涨跌幅度": "0.94",
			"name": "海翔药业"
		},
		{
			"code": "002098",
			"涨跌幅度": "35.81",
			"name": "浔兴股份"
		},
		{
			"code": "002075",
			"涨跌幅度": "-31.61",
			"name": "沙钢股份"
		},
		{
			"code": "002071",
			"涨跌幅度": "-28.17",
			"name": "长城影视"
		},
		{
			"code": "002048",
			"涨跌幅度": "36.18",
			"name": "宁波华翔"
		},
		{
			"code": "002044",
			"涨跌幅度": "-13.08",
			"name": "美年健康"
		},
		{
			"code": "002034",
			"涨跌幅度": "-13.5",
			"name": "美 欣 达"
		},
		{
			"code": "002025",
			"涨跌幅度": "-3.6",
			"name": "航天电器"
		},
		{
			"code": "000987",
			"涨跌幅度": "-21.42",
			"name": "越秀金控"
		},
		{
			"code": "000982",
			"涨跌幅度": "97.2",
			"name": "中银绒业"
		},
		{
			"code": "000981",
			"涨跌幅度": "47.69",
			"name": "银亿股份"
		},
		{
			"code": "000966",
			"涨跌幅度": "-9.79",
			"name": "长源电力"
		},
		{
			"code": "000961",
			"涨跌幅度": "45.58",
			"name": "中南建设"
		},
		{
			"code": "000916",
			"涨跌幅度": "-11.33",
			"name": "华北高速"
		},
		{
			"code": "000887",
			"涨跌幅度": "14.68",
			"name": "中鼎股份"
		},
		{
			"code": "000829",
			"涨跌幅度": "-7.69",
			"name": "天音控股"
		},
		{
			"code": "000803",
			"涨跌幅度": "-16.35",
			"name": "金宇车城"
		},
		{
			"code": "000748",
			"涨跌幅度": "-41.69",
			"name": "长城信息"
		},
		{
			"code": "000727",
			"涨跌幅度": "-30.23",
			"name": "华东科技"
		},
		{
			"code": "000723",
			"涨跌幅度": "62.55",
			"name": "美锦能源"
		},
		{
			"code": "000719",
			"涨跌幅度": "-29.78",
			"name": "大地传媒"
		},
		{
			"code": "000711",
			"涨跌幅度": "53.42",
			"name": "京蓝科技"
		},
		{
			"code": "000710",
			"涨跌幅度": "-18.38",
			"name": "天兴仪表"
		},
		{
			"code": "000709",
			"涨跌幅度": "6.41",
			"name": "河钢股份"
		},
		{
			"code": "000697",
			"涨跌幅度": "-7.66",
			"name": "炼石有色"
		},
		{
			"code": "000693",
			"涨跌幅度": "-42.74",
			"name": "ST华泽"
		},
		{
			"code": "000682",
			"涨跌幅度": "-20.12",
			"name": "东方电子"
		},
		{
			"code": "000676",
			"涨跌幅度": "-44.47",
			"name": "智度股份"
		},
		{
			"code": "000670",
			"涨跌幅度": "-40.24",
			"name": "*ST盈方"
		},
		{
			"code": "000622",
			"涨跌幅度": "-39.29",
			"name": "*ST恒立"
		},
		{
			"code": "000612",
			"涨跌幅度": "43.73",
			"name": "焦作万方"
		},
		{
			"code": "000611",
			"涨跌幅度": "-16.74",
			"name": "*ST天首"
		},
		{
			"code": "000584",
			"涨跌幅度": "-11.5",
			"name": "友利控股"
		},
		{
			"code": "000576",
			"涨跌幅度": "-14.29",
			"name": "广东甘化"
		},
		{
			"code": "000571",
			"涨跌幅度": "9.33",
			"name": "新大洲Ａ"
		},
		{
			"code": "000563",
			"涨跌幅度": "33.33",
			"name": "陕国投Ａ"
		},
		{
			"code": "000560",
			"涨跌幅度": "-16.73",
			"name": "昆百大Ａ"
		},
		{
			"code": "000558",
			"涨跌幅度": "-34.03",
			"name": "莱茵体育"
		},
		{
			"code": "000547",
			"涨跌幅度": "-25.44",
			"name": "航天发展"
		},
		{
			"code": "000541",
			"涨跌幅度": "-29.2",
			"name": "佛山照明"
		},
		{
			"code": "000540",
			"涨跌幅度": "-33.62",
			"name": "中天城投"
		},
		{
			"code": "000538",
			"涨跌幅度": "2.29",
			"name": "云南白药"
		},
		{
			"code": "000531",
			"涨跌幅度": "11.9",
			"name": "穗恒运Ａ"
		},
		{
			"code": "000530",
			"涨跌幅度": "4.66",
			"name": "大冷股份"
		},
		{
			"code": "000514",
			"涨跌幅度": "3.98",
			"name": "渝 开 发"
		},
		{
			"code": "000425",
			"涨跌幅度": "-18.47",
			"name": "徐工机械"
		},
		{
			"code": "000415",
			"涨跌幅度": "-19.87",
			"name": "渤海金控"
		},
		{
			"code": "000100",
			"涨跌幅度": "-10.24",
			"name": "TCL 集团"
		},
		{
			"code": "000050",
			"涨跌幅度": "-17.96",
			"name": "深天马Ａ"
		},
		{
			"code": "000048",
			"涨跌幅度": "56.31",
			"name": "康达尔"
		},
		{
			"code": "000045",
			"涨跌幅度": "0.23",
			"name": "深纺织Ａ"
		},
		{
			"code": "000042",
			"涨跌幅度": "1.1",
			"name": "中洲控股"
		},
		{
			"code": "000035",
			"涨跌幅度": "0.62",
			"name": "中国天楹"
		},
		{
			"code": "000029",
			"涨跌幅度": "-24.37",
			"name": "深深房Ａ"
		},
		{
			"code": "000581",
			"涨跌幅度": "7.91",
			"name": "威孚高科"
		},
		{
			"code": "002010",
			"涨跌幅度": "-12.71",
			"name": "传化智联"
		},
		{
			"code": "002217",
			"涨跌幅度": "-2.06",
			"name": "合力泰"
		},
		{
			"code": "002125",
			"涨跌幅度": "14.23",
			"name": "湘潭电化"
		},
		{
			"code": "000722",
			"涨跌幅度": "-24.44",
			"name": "湖南发展"
		},
		{
			"code": "000705",
			"涨跌幅度": "3.58",
			"name": "浙江震元"
		},
		{
			"code": "002365",
			"涨跌幅度": "53.5",
			"name": "永安药业"
		},
		{
			"code": "002043",
			"涨跌幅度": "28.21",
			"name": "兔 宝 宝"
		},
		{
			"code": "002466",
			"涨跌幅度": "2.69",
			"name": "天齐锂业"
		},
		{
			"code": "002619",
			"涨跌幅度": "91.58",
			"name": "巨龙管业"
		},
		{
			"code": "300174",
			"涨跌幅度": "136.33",
			"name": "元力股份"
		},
		{
			"code": "000721",
			"涨跌幅度": "16.36",
			"name": "西安饮食"
		},
		{
			"code": "002021",
			"涨跌幅度": "-23.45",
			"name": "中捷资源"
		},
		{
			"code": "002701",
			"涨跌幅度": "-18.33",
			"name": "奥瑞金"
		},
		{
			"code": "000759",
			"涨跌幅度": "9.16",
			"name": "中百集团"
		},
		{
			"code": "300285",
			"涨跌幅度": "8.31",
			"name": "国瓷材料"
		},
		{
			"code": "600062",
			"涨跌幅度": "7.19",
			"name": "华润双鹤"
		},
		{
			"code": "600458",
			"涨跌幅度": "-16.07",
			"name": "时代新材"
		},
		{
			"code": "002425",
			"涨跌幅度": "-4.42",
			"name": "凯撒文化"
		},
		{
			"code": "603111",
			"涨跌幅度": "23.05",
			"name": "康尼机电"
		},
		{
			"code": "600311",
			"涨跌幅度": "11.15",
			"name": "荣华实业"
		},
		{
			"code": "002243",
			"涨跌幅度": "7.35",
			"name": "通产丽星"
		},
		{
			"code": "600565",
			"涨跌幅度": "-30.81",
			"name": "迪马股份"
		},
		{
			"code": "600309",
			"涨跌幅度": "23.01",
			"name": "万华化学"
		},
		{
			"code": "000735",
			"涨跌幅度": "-5.31",
			"name": "罗 牛 山"
		},
		{
			"code": "603898",
			"涨跌幅度": "-2.04",
			"name": "好莱客"
		},
		{
			"code": "600794",
			"涨跌幅度": "-9.67",
			"name": "保税科技"
		},
		{
			"code": "002816",
			"涨跌幅度": "472.91",
			"name": "和科达"
		},
		{
			"code": "600721",
			"涨跌幅度": "8.49",
			"name": "*ST百花"
		},
		{
			"code": "600620",
			"涨跌幅度": "39.55",
			"name": "天宸股份"
		},
		{
			"code": "600293",
			"涨跌幅度": "52.73",
			"name": "三峡新材"
		},
		{
			"code": "300308",
			"涨跌幅度": "40.45",
			"name": "中际装备"
		},
		{
			"code": "002066",
			"涨跌幅度": "-15.1",
			"name": "瑞泰科技"
		},
		{
			"code": "601166",
			"涨跌幅度": "11.8",
			"name": "兴业银行"
		},
		{
			"code": "000949",
			"涨跌幅度": "11.07",
			"name": "新乡化纤"
		},
		{
			"code": "002632",
			"涨跌幅度": "-9.45",
			"name": "道明光学"
		},
		{
			"code": "600891",
			"涨跌幅度": "0.19",
			"name": "秋林集团"
		},
		{
			"code": "000517",
			"涨跌幅度": "-37.01",
			"name": "荣安地产"
		},
		{
			"code": "600535",
			"涨跌幅度": "15.0",
			"name": "天士力"
		},
		{
			"code": "000043",
			"涨跌幅度": "-20.42",
			"name": "中航地产"
		},
		{
			"code": "600079",
			"涨跌幅度": "-0.1",
			"name": "人福医药"
		},
		{
			"code": "600639",
			"涨跌幅度": "-15.11",
			"name": "浦东金桥"
		},
		{
			"code": "002051",
			"涨跌幅度": "26.27",
			"name": "中工国际"
		},
		{
			"code": "601233",
			"涨跌幅度": "-1.98",
			"name": "桐昆股份"
		},
		{
			"code": "600546",
			"涨跌幅度": "1.11",
			"name": "*ST山煤"
		},
		{
			"code": "600377",
			"涨跌幅度": "12.23",
			"name": "宁沪高速"
		},
		{
			"code": "600578",
			"涨跌幅度": "-23.68",
			"name": "京能电力"
		},
		{
			"code": "002343",
			"涨跌幅度": "-27.12",
			"name": "慈文传媒"
		},
		{
			"code": "600856",
			"涨跌幅度": "26.37",
			"name": "中天能源"
		},
		{
			"code": "002653",
			"涨跌幅度": "-18.96",
			"name": "海思科"
		},
		{
			"code": "600297",
			"涨跌幅度": "-26.12",
			"name": "广汇汽车"
		},
		{
			"code": "000400",
			"涨跌幅度": "-11.1",
			"name": "许继电气"
		},
		{
			"code": "300124",
			"涨跌幅度": "-4.44",
			"name": "汇川技术"
		},
		{
			"code": "600817",
			"涨跌幅度": "34.59",
			"name": "*ST宏盛"
		},
		{
			"code": "600419",
			"涨跌幅度": "87.5",
			"name": "天润乳业"
		},
		{
			"code": "000828",
			"涨跌幅度": "4.86",
			"name": "东莞控股"
		},
		{
			"code": "002271",
			"涨跌幅度": "15.45",
			"name": "东方雨虹"
		},
		{
			"code": "002108",
			"涨跌幅度": "28.13",
			"name": "沧州明珠"
		},
		{
			"code": "002209",
			"涨跌幅度": "-4.93",
			"name": "达 意 隆"
		},
		{
			"code": "000661",
			"涨跌幅度": "17.46",
			"name": "长春高新"
		},
		{
			"code": "601988",
			"涨跌幅度": "-8.83",
			"name": "中国银行"
		},
		{
			"code": "002234",
			"涨跌幅度": "48.84",
			"name": "民和股份"
		},
		{
			"code": "002131",
			"涨跌幅度": "15.31",
			"name": "利欧股份"
		},
		{
			"code": "600000",
			"涨跌幅度": "3.64",
			"name": "浦发银行"
		},
		{
			"code": "002409",
			"涨跌幅度": "119.27",
			"name": "雅克科技"
		},
		{
			"code": "000959",
			"涨跌幅度": "92.07",
			"name": "首钢股份"
		},
		{
			"code": "600221",
			"涨跌幅度": "-12.24",
			"name": "海南航空"
		},
		{
			"code": "601998",
			"涨跌幅度": "-2.75",
			"name": "中信银行"
		},
		{
			"code": "601616",
			"涨跌幅度": "1.82",
			"name": "广电电气"
		},
		{
			"code": "000885",
			"涨跌幅度": "8.66",
			"name": "同力水泥"
		},
		{
			"code": "603800",
			"涨跌幅度": "108.23",
			"name": "道森股份"
		},
		{
			"code": "600278",
			"涨跌幅度": "12.59",
			"name": "东方创业"
		},
		{
			"code": "600090",
			"涨跌幅度": "-27.46",
			"name": "同济堂"
		},
		{
			"code": "600808",
			"涨跌幅度": "-7.32",
			"name": "马钢股份"
		},
		{
			"code": "600598",
			"涨跌幅度": "-15.03",
			"name": "北大荒"
		},
		{
			"code": "300258",
			"涨跌幅度": "47.37",
			"name": "精锻科技"
		},
		{
			"code": "000416",
			"涨跌幅度": "15.0",
			"name": "民生控股"
		},
		{
			"code": "601328",
			"涨跌幅度": "-3.47",
			"name": "交通银行"
		},
		{
			"code": "002299",
			"涨跌幅度": "12.21",
			"name": "圣农发展"
		},
		{
			"code": "002305",
			"涨跌幅度": "-5.78",
			"name": "南国置业"
		},
		{
			"code": "600023",
			"涨跌幅度": "-25.13",
			"name": "浙能电力"
		},
		{
			"code": "002660",
			"涨跌幅度": "27.16",
			"name": "茂硕电源"
		},
		{
			"code": "600107",
			"涨跌幅度": "10.23",
			"name": "美尔雅"
		},
		{
			"code": "002485",
			"涨跌幅度": "27.34",
			"name": "希努尔"
		},
		{
			"code": "000543",
			"涨跌幅度": "-4.29",
			"name": "皖能电力"
		},
		{
			"code": "002337",
			"涨跌幅度": "-18.93",
			"name": "赛象科技"
		},
		{
			"code": "603618",
			"涨跌幅度": "17.69",
			"name": "杭电股份"
		},
		{
			"code": "002692",
			"涨跌幅度": "42.93",
			"name": "远程电缆"
		},
		{
			"code": "600125",
			"涨跌幅度": "-13.47",
			"name": "铁龙物流"
		},
		{
			"code": "002050",
			"涨跌幅度": "6.37",
			"name": "三花智控"
		},
		{
			"code": "300343",
			"涨跌幅度": "-19.95",
			"name": "联创互联"
		},
		{
			"code": "002159",
			"涨跌幅度": "-0.13",
			"name": "三特索道"
		},
		{
			"code": "600612",
			"涨跌幅度": "1.71",
			"name": "老凤祥"
		},
		{
			"code": "600165",
			"涨跌幅度": "-53.81",
			"name": "新日恒力"
		},
		{
			"code": "002558",
			"涨跌幅度": "37.42",
			"name": "世纪游轮"
		},
		{
			"code": "300216",
			"涨跌幅度": "-10.48",
			"name": "千山药机"
		},
		{
			"code": "601318",
			"涨跌幅度": "8.04",
			"name": "中国平安"
		},
		{
			"code": "600299",
			"涨跌幅度": "-11.58",
			"name": "安迪苏"
		},
		{
			"code": "000877",
			"涨跌幅度": "-8.85",
			"name": "天山股份"
		},
		{
			"code": "300097",
			"涨跌幅度": "53.93",
			"name": "智云股份"
		},
		{
			"code": "600702",
			"涨跌幅度": "32.91",
			"name": "沱牌舍得"
		},
		{
			"code": "600250",
			"涨跌幅度": "2.97",
			"name": "南纺股份"
		},
		{
			"code": "600115",
			"涨跌幅度": "-8.8",
			"name": "东方航空"
		},
		{
			"code": "000888",
			"涨跌幅度": "8.43",
			"name": "峨眉山Ａ"
		},
		{
			"code": "002424",
			"涨跌幅度": "-22.07",
			"name": "贵州百灵"
		},
		{
			"code": "600048",
			"涨跌幅度": "3.82",
			"name": "保利地产"
		},
		{
			"code": "002639",
			"涨跌幅度": "71.96",
			"name": "雪人股份"
		},
		{
			"code": "000802",
			"涨跌幅度": "-22.44",
			"name": "北京文化"
		},
		{
			"code": "600409",
			"涨跌幅度": "6.12",
			"name": "三友化工"
		},
		{
			"code": "600340",
			"涨跌幅度": "-0.64",
			"name": "华夏幸福"
		},
		{
			"code": "601991",
			"涨跌幅度": "-21.62",
			"name": "大唐发电"
		},
		{
			"code": "002475",
			"涨跌幅度": "-11.79",
			"name": "立讯精密"
		},
		{
			"code": "300011",
			"涨跌幅度": "-18.14",
			"name": "鼎汉技术"
		},
		{
			"code": "600108",
			"涨跌幅度": "-19.95",
			"name": "亚盛集团"
		},
		{
			"code": "600634",
			"涨跌幅度": "-18.15",
			"name": "中技控股"
		},
		{
			"code": "600368",
			"涨跌幅度": "-8.13",
			"name": "五洲交通"
		},
		{
			"code": "300237",
			"涨跌幅度": "37.67",
			"name": "美晨科技"
		},
		{
			"code": "300149",
			"涨跌幅度": "-6.73",
			"name": "量子高科"
		},
		{
			"code": "002588",
			"涨跌幅度": "-28.17",
			"name": "史丹利"
		},
		{
			"code": "000902",
			"涨跌幅度": "-8.54",
			"name": "新洋丰"
		},
		{
			"code": "000001",
			"涨跌幅度": "-1.14",
			"name": "平安银行"
		},
		{
			"code": "002553",
			"涨跌幅度": "8.89",
			"name": "南方轴承"
		},
		{
			"code": "300031",
			"涨跌幅度": "-20.48",
			"name": "宝通科技"
		},
		{
			"code": "300110",
			"涨跌幅度": "-8.98",
			"name": "华仁药业"
		},
		{
			"code": "600777",
			"涨跌幅度": "44.83",
			"name": "新潮能源"
		},
		{
			"code": "600681",
			"涨跌幅度": "16.82",
			"name": "百川能源"
		},
		{
			"code": "600744",
			"涨跌幅度": "-36.8",
			"name": "华银电力"
		},
		{
			"code": "600035",
			"涨跌幅度": "16.74",
			"name": "楚天高速"
		},
		{
			"code": "300062",
			"涨跌幅度": "25.13",
			"name": "中能电气"
		},
		{
			"code": "000021",
			"涨跌幅度": "-21.61",
			"name": "深科技"
		},
		{
			"code": "600009",
			"涨跌幅度": "-6.04",
			"name": "上海机场"
		},
		{
			"code": "300006",
			"涨跌幅度": "4.65",
			"name": "莱美药业"
		},
		{
			"code": "002191",
			"涨跌幅度": "-43.94",
			"name": "劲嘉股份"
		},
		{
			"code": "002077",
			"涨跌幅度": "71.67",
			"name": "大港股份"
		},
		{
			"code": "000880",
			"涨跌幅度": "-1.57",
			"name": "潍柴重机"
		},
		{
			"code": "600298",
			"涨跌幅度": "51.49",
			"name": "安琪酵母"
		},
		{
			"code": "600726",
			"涨跌幅度": "-24.34",
			"name": "华电能源"
		},
		{
			"code": "300207",
			"涨跌幅度": "1.55",
			"name": "欣旺达"
		},
		{
			"code": "600532",
			"涨跌幅度": "15.72",
			"name": "宏达矿业"
		},
		{
			"code": "000532",
			"涨跌幅度": "4.95",
			"name": "力合股份"
		},
		{
			"code": "002579",
			"涨跌幅度": "0.88",
			"name": "中京电子"
		},
		{
			"code": "300061",
			"涨跌幅度": "141.2",
			"name": "康耐特"
		},
		{
			"code": "600850",
			"涨跌幅度": "-31.08",
			"name": "华东电脑"
		},
		{
			"code": "000691",
			"涨跌幅度": "15.55",
			"name": "ST亚太"
		},
		{
			"code": "600158",
			"涨跌幅度": "-1.72",
			"name": "中体产业"
		},
		{
			"code": "600556",
			"涨跌幅度": "-52.47",
			"name": "ST慧球"
		},
		{
			"code": "000883",
			"涨跌幅度": "-20.1",
			"name": "湖北能源"
		},
		{
			"code": "000524",
			"涨跌幅度": "-14.88",
			"name": "岭南控股"
		},
		{
			"code": "600310",
			"涨跌幅度": "6.71",
			"name": "桂东电力"
		},
		{
			"code": "300191",
			"涨跌幅度": "-16.05",
			"name": "潜能恒信"
		},
		{
			"code": "600712",
			"涨跌幅度": "43.6",
			"name": "南宁百货"
		},
		{
			"code": "600970",
			"涨跌幅度": "-1.38",
			"name": "中材国际"
		},
		{
			"code": "000796",
			"涨跌幅度": "-37.22",
			"name": "凯撒旅游"
		},
		{
			"code": "601566",
			"涨跌幅度": "-7.32",
			"name": "九牧王"
		},
		{
			"code": "300012",
			"涨跌幅度": "-5.87",
			"name": "华测检测"
		},
		{
			"code": "002241",
			"涨跌幅度": "-10.21",
			"name": "歌尔股份"
		},
		{
			"code": "600695",
			"涨跌幅度": "-18.31",
			"name": "绿庭投资"
		},
		{
			"code": "600509",
			"涨跌幅度": "-19.62",
			"name": "天富能源"
		},
		{
			"code": "002700",
			"涨跌幅度": "5.81",
			"name": "新疆浩源"
		},
		{
			"code": "002455",
			"涨跌幅度": "1.8",
			"name": "百川股份"
		},
		{
			"code": "601801",
			"涨跌幅度": "9.76",
			"name": "皖新传媒"
		},
		{
			"code": "002731",
			"涨跌幅度": "2.16",
			"name": "萃华珠宝"
		},
		{
			"code": "002532",
			"涨跌幅度": "6.41",
			"name": "新界泵业"
		},
		{
			"code": "002469",
			"涨跌幅度": "-12.79",
			"name": "三维工程"
		},
		{
			"code": "600505",
			"涨跌幅度": "-5.69",
			"name": "西昌电力"
		},
		{
			"code": "002252",
			"涨跌幅度": "-6.94",
			"name": "上海莱士"
		},
		{
			"code": "002053",
			"涨跌幅度": "29.29",
			"name": "云南能投"
		},
		{
			"code": "600851",
			"涨跌幅度": "-4.65",
			"name": "海欣股份"
		},
		{
			"code": "002628",
			"涨跌幅度": "28.39",
			"name": "成都路桥"
		},
		{
			"code": "000411",
			"涨跌幅度": "-8.91",
			"name": "英特集团"
		},
		{
			"code": "002662",
			"涨跌幅度": "4.96",
			"name": "京威股份"
		},
		{
			"code": "002296",
			"涨跌幅度": "-16.32",
			"name": "辉煌科技"
		},
		{
			"code": "600139",
			"涨跌幅度": "-24.78",
			"name": "西部资源"
		},
		{
			"code": "000788",
			"涨跌幅度": "-6.98",
			"name": "北大医药"
		},
		{
			"code": "300091",
			"涨跌幅度": "8.81",
			"name": "金通灵"
		},
		{
			"code": "002535",
			"涨跌幅度": "-19.76",
			"name": "林州重机"
		},
		{
			"code": "002411",
			"涨跌幅度": "57.04",
			"name": "必康股份"
		},
		{
			"code": "600196",
			"涨跌幅度": "-5.1",
			"name": "复星医药"
		},
		{
			"code": "002421",
			"涨跌幅度": "9.4",
			"name": "达实智能"
		},
		{
			"code": "600749",
			"涨跌幅度": "7.62",
			"name": "西藏旅游"
		},
		{
			"code": "600561",
			"涨跌幅度": "-3.5",
			"name": "江西长运"
		},
		{
			"code": "002203",
			"涨跌幅度": "-22.23",
			"name": "海亮股份"
		},
		{
			"code": "000703",
			"涨跌幅度": "32.66",
			"name": "恒逸石化"
		},
		{
			"code": "000590",
			"涨跌幅度": "-10.75",
			"name": "启迪古汉"
		},
		{
			"code": "600398",
			"涨跌幅度": "-24.45",
			"name": "海澜之家"
		},
		{
			"code": "000078",
			"涨跌幅度": "-4.87",
			"name": "海王生物"
		},
		{
			"code": "601818",
			"涨跌幅度": "0.74",
			"name": "光大银行"
		},
		{
			"code": "603223",
			"涨跌幅度": "-4.9",
			"name": "恒通股份"
		},
		{
			"code": "002009",
			"涨跌幅度": "-10.37",
			"name": "天奇股份"
		},
		{
			"code": "000999",
			"涨跌幅度": "2.49",
			"name": "华润三九"
		},
		{
			"code": "600018",
			"涨跌幅度": "-19.18",
			"name": "上港集团"
		},
		{
			"code": "000830",
			"涨跌幅度": "-23.13",
			"name": "鲁西化工"
		},
		{
			"code": "600438",
			"涨跌幅度": "3.73",
			"name": "通威股份"
		},
		{
			"code": "600585",
			"涨跌幅度": "13.18",
			"name": "海螺水泥"
		},
		{
			"code": "600885",
			"涨跌幅度": "6.39",
			"name": "宏发股份"
		},
		{
			"code": "000965",
			"涨跌幅度": "3.92",
			"name": "天保基建"
		},
		{
			"code": "002670",
			"涨跌幅度": "-3.03",
			"name": "国盛金控"
		},
		{
			"code": "000007",
			"涨跌幅度": "20.22",
			"name": "全新好"
		},
		{
			"code": "000619",
			"涨跌幅度": "-16.42",
			"name": "海螺型材"
		},
		{
			"code": "000593",
			"涨跌幅度": "7.3",
			"name": "大通燃气"
		},
		{
			"code": "603658",
			"涨跌幅度": "231.54",
			"name": "安图生物"
		},
		{
			"code": "002327",
			"涨跌幅度": "-13.33",
			"name": "富安娜"
		},
		{
			"code": "600027",
			"涨跌幅度": "-19.57",
			"name": "华电国际"
		},
		{
			"code": "600759",
			"涨跌幅度": "17.11",
			"name": "洲际油气"
		},
		{
			"code": "002671",
			"涨跌幅度": "-27.1",
			"name": "龙泉股份"
		},
		{
			"code": "000767",
			"涨跌幅度": "-35.16",
			"name": "漳泽电力"
		},
		{
			"code": "002480",
			"涨跌幅度": "-19.85",
			"name": "新筑股份"
		},
		{
			"code": "000568",
			"涨跌幅度": "46.15",
			"name": "泸州老窖"
		},
		{
			"code": "002169",
			"涨跌幅度": "-11.1",
			"name": "智光电气"
		},
		{
			"code": "600984",
			"涨跌幅度": "-14.59",
			"name": "建设机械"
		},
		{
			"code": "600573",
			"涨跌幅度": "6.47",
			"name": "惠泉啤酒"
		},
		{
			"code": "600269",
			"涨跌幅度": "-6.09",
			"name": "赣粤高速"
		},
		{
			"code": "000881",
			"涨跌幅度": "83.8",
			"name": "大连国际"
		},
		{
			"code": "002420",
			"涨跌幅度": "3.89",
			"name": "毅昌股份"
		},
		{
			"code": "600754",
			"涨跌幅度": "-39.75",
			"name": "锦江股份"
		},
		{
			"code": "600118",
			"涨跌幅度": "-24.78",
			"name": "中国卫星"
		},
		{
			"code": "600590",
			"涨跌幅度": "27.03",
			"name": "泰豪科技"
		},
		{
			"code": "600452",
			"涨跌幅度": "56.22",
			"name": "涪陵电力"
		},
		{
			"code": "600143",
			"涨跌幅度": "-7.96",
			"name": "金发科技"
		},
		{
			"code": "600643",
			"涨跌幅度": "-25.22",
			"name": "爱建集团"
		},
		{
			"code": "002503",
			"涨跌幅度": "21.63",
			"name": "搜于特"
		},
		{
			"code": "002570",
			"涨跌幅度": "-11.7",
			"name": "贝因美"
		},
		{
			"code": "002223",
			"涨跌幅度": "-14.4",
			"name": "鱼跃医疗"
		},
		{
			"code": "600655",
			"涨跌幅度": "-32.18",
			"name": "豫园商城"
		},
		{
			"code": "601689",
			"涨跌幅度": "28.95",
			"name": "拓普集团"
		},
		{
			"code": "300026",
			"涨跌幅度": "-4.35",
			"name": "红日药业"
		},
		{
			"code": "603818",
			"涨跌幅度": "-14.88",
			"name": "曲美家居"
		},
		{
			"code": "002182",
			"涨跌幅度": "51.4",
			"name": "云海金属"
		},
		{
			"code": "000545",
			"涨跌幅度": "-23.68",
			"name": "金浦钛业"
		},
		{
			"code": "600070",
			"涨跌幅度": "40.4",
			"name": "浙江富润"
		},
		{
			"code": "002447",
			"涨跌幅度": "2.22",
			"name": "壹桥股份"
		},
		{
			"code": "600706",
			"涨跌幅度": "2.14",
			"name": "曲江文旅"
		},
		{
			"code": "002120",
			"涨跌幅度": "102.75",
			"name": "新海股份"
		},
		{
			"code": "000429",
			"涨跌幅度": "14.19",
			"name": "粤高速Ａ"
		},
		{
			"code": "600400",
			"涨跌幅度": "-20.37",
			"name": "红豆股份"
		},
		{
			"code": "000761",
			"涨跌幅度": "18.07",
			"name": "本钢板材"
		},
		{
			"code": "002174",
			"涨跌幅度": "-5.24",
			"name": "游族网络"
		},
		{
			"code": "600886",
			"涨跌幅度": "-17.87",
			"name": "国投电力"
		},
		{
			"code": "002213",
			"涨跌幅度": "41.32",
			"name": "特 尔 佳"
		},
		{
			"code": "300033",
			"涨跌幅度": "-1.34",
			"name": "同花顺"
		},
		{
			"code": "600883",
			"涨跌幅度": "1.56",
			"name": "博闻科技"
		},
		{
			"code": "000570",
			"涨跌幅度": "-9.4",
			"name": "苏常柴Ａ"
		},
		{
			"code": "600567",
			"涨跌幅度": "-7.49",
			"name": "山鹰纸业"
		},
		{
			"code": "000810",
			"涨跌幅度": "28.24",
			"name": "创维数字"
		},
		{
			"code": "002342",
			"涨跌幅度": "-5.39",
			"name": "巨力索具"
		},
		{
			"code": "002454",
			"涨跌幅度": "-15.37",
			"name": "松芝股份"
		},
		{
			"code": "002311",
			"涨跌幅度": "15.47",
			"name": "海大集团"
		},
		{
			"code": "000596",
			"涨跌幅度": "39.82",
			"name": "古井贡酒"
		},
		{
			"code": "300121",
			"涨跌幅度": "66.42",
			"name": "阳谷华泰"
		},
		{
			"code": "600708",
			"涨跌幅度": "-29.47",
			"name": "光明地产"
		},
		{
			"code": "601117",
			"涨跌幅度": "0.15",
			"name": "中国化学"
		},
		{
			"code": "002481",
			"涨跌幅度": "-42.9",
			"name": "双塔食品"
		},
		{
			"code": "300119",
			"涨跌幅度": "-11.27",
			"name": "瑞普生物"
		},
		{
			"code": "600198",
			"涨跌幅度": "-18.83",
			"name": "大唐电信"
		},
		{
			"code": "600163",
			"涨跌幅度": "-15.84",
			"name": "中闽能源"
		},
		{
			"code": "300221",
			"涨跌幅度": "68.22",
			"name": "银禧科技"
		},
		{
			"code": "000895",
			"涨跌幅度": "30.57",
			"name": "双汇发展"
		},
		{
			"code": "603869",
			"涨跌幅度": "22.29",
			"name": "北部湾旅"
		},
		{
			"code": "000150",
			"涨跌幅度": "0.49",
			"name": "宜华健康"
		},
		{
			"code": "300022",
			"涨跌幅度": "-11.17",
			"name": "吉峰农机"
		},
		{
			"code": "600870",
			"涨跌幅度": "28.99",
			"name": "厦华电子"
		},
		{
			"code": "600375",
			"涨跌幅度": "-13.84",
			"name": "*ST星马"
		},
		{
			"code": "600824",
			"涨跌幅度": "-18.6",
			"name": "益民集团"
		},
		{
			"code": "300157",
			"涨跌幅度": "-21.64",
			"name": "恒泰艾普"
		},
		{
			"code": "000008",
			"涨跌幅度": "-14.74",
			"name": "神州高铁"
		},
		{
			"code": "002533",
			"涨跌幅度": "25.03",
			"name": "金杯电工"
		},
		{
			"code": "600166",
			"涨跌幅度": "5.75",
			"name": "福田汽车"
		},
		{
			"code": "002429",
			"涨跌幅度": "-11.55",
			"name": "兆驰股份"
		},
		{
			"code": "600066",
			"涨跌幅度": "6.46",
			"name": "宇通客车"
		},
		{
			"code": "000544",
			"涨跌幅度": "-6.34",
			"name": "中原环保"
		},
		{
			"code": "600086",
			"涨跌幅度": "-17.36",
			"name": "东方金钰"
		},
		{
			"code": "002415",
			"涨跌幅度": "14.15",
			"name": "海康威视"
		},
		{
			"code": "002489",
			"涨跌幅度": "-39.86",
			"name": "浙江永强"
		},
		{
			"code": "002617",
			"涨跌幅度": "12.19",
			"name": "露笑科技"
		},
		{
			"code": "300309",
			"涨跌幅度": "19.62",
			"name": "吉艾科技"
		},
		{
			"code": "002520",
			"涨跌幅度": "-19.65",
			"name": "日发精机"
		},
		{
			"code": "002511",
			"涨跌幅度": "92.4",
			"name": "中顺洁柔"
		},
		{
			"code": "600548",
			"涨跌幅度": "-9.81",
			"name": "深高速"
		},
		{
			"code": "002416",
			"涨跌幅度": "-10.89",
			"name": "爱施德"
		},
		{
			"code": "000963",
			"涨跌幅度": "-3.53",
			"name": "华东医药"
		},
		{
			"code": "002326",
			"涨跌幅度": "-19.87",
			"name": "永太科技"
		},
		{
			"code": "300235",
			"涨跌幅度": "-21.48",
			"name": "方直科技"
		},
		{
			"code": "603699",
			"涨跌幅度": "-12.06",
			"name": "纽威股份"
		},
		{
			"code": "600031",
			"涨跌幅度": "-0.62",
			"name": "三一重工"
		},
		{
			"code": "002426",
			"涨跌幅度": "2.9",
			"name": "胜利精密"
		},
		{
			"code": "002537",
			"涨跌幅度": "92.22",
			"name": "海立美达"
		},
		{
			"code": "000913",
			"涨跌幅度": "50.71",
			"name": "*ST钱江"
		},
		{
			"code": "002141",
			"涨跌幅度": "15.97",
			"name": "蓉胜超微"
		},
		{
			"code": "000566",
			"涨跌幅度": "-27.39",
			"name": "海南海药"
		},
		{
			"code": "600015",
			"涨跌幅度": "6.82",
			"name": "华夏银行"
		},
		{
			"code": "601808",
			"涨跌幅度": "-13.03",
			"name": "中海油服"
		},
		{
			"code": "601628",
			"涨跌幅度": "-4.26",
			"name": "中国人寿"
		},
		{
			"code": "002477",
			"涨跌幅度": "-1.32",
			"name": "雏鹰农牧"
		},
		{
			"code": "600572",
			"涨跌幅度": "-14.35",
			"name": "康恩贝"
		},
		{
			"code": "002206",
			"涨跌幅度": "20.61",
			"name": "海 利 得"
		},
		{
			"code": "603126",
			"涨跌幅度": "-15.99",
			"name": "中材节能"
		},
		{
			"code": "002142",
			"涨跌幅度": "30.4",
			"name": "宁波银行"
		},
		{
			"code": "600820",
			"涨跌幅度": "-4.61",
			"name": "隧道股份"
		},
		{
			"code": "600889",
			"涨跌幅度": "-9.16",
			"name": "南京化纤"
		},
		{
			"code": "600435",
			"涨跌幅度": "-2.89",
			"name": "北方导航"
		},
		{
			"code": "000301",
			"涨跌幅度": "-14.14",
			"name": "东方市场"
		},
		{
			"code": "600763",
			"涨跌幅度": "-40.29",
			"name": "通策医疗"
		},
		{
			"code": "002397",
			"涨跌幅度": "-5.71",
			"name": "梦洁股份"
		},
		{
			"code": "600290",
			"涨跌幅度": "0.56",
			"name": "华仪电气"
		},
		{
			"code": "603315",
			"涨跌幅度": "-4.69",
			"name": "福鞍股份"
		},
		{
			"code": "300406",
			"涨跌幅度": "3.63",
			"name": "九强生物"
		},
		{
			"code": "300096",
			"涨跌幅度": "-26.22",
			"name": "易联众"
		},
		{
			"code": "000068",
			"涨跌幅度": "-16.01",
			"name": "华控赛格"
		},
		{
			"code": "002368",
			"涨跌幅度": "-49.52",
			"name": "太极股份"
		},
		{
			"code": "000413",
			"涨跌幅度": "27.7",
			"name": "东旭光电"
		},
		{
			"code": "600446",
			"涨跌幅度": "-37.52",
			"name": "金证股份"
		},
		{
			"code": "002594",
			"涨跌幅度": "-11.62",
			"name": "比亚迪"
		},
		{
			"code": "000863",
			"涨跌幅度": "-37.17",
			"name": "三湘印象"
		},
		{
			"code": "600623",
			"涨跌幅度": "-19.93",
			"name": "华谊集团"
		},
		{
			"code": "601021",
			"涨跌幅度": "-27.06",
			"name": "春秋航空"
		},
		{
			"code": "002286",
			"涨跌幅度": "9.76",
			"name": "保龄宝"
		},
		{
			"code": "603355",
			"涨跌幅度": "-14.98",
			"name": "莱克电气"
		},
		{
			"code": "300187",
			"涨跌幅度": "-15.99",
			"name": "永清环保"
		},
		{
			"code": "002348",
			"涨跌幅度": "-6.76",
			"name": "高乐股份"
		},
		{
			"code": "600668",
			"涨跌幅度": "18.39",
			"name": "尖峰集团"
		},
		{
			"code": "600418",
			"涨跌幅度": "-14.0",
			"name": "江淮汽车"
		},
		{
			"code": "600373",
			"涨跌幅度": "-15.34",
			"name": "中文传媒"
		},
		{
			"code": "002330",
			"涨跌幅度": "-25.84",
			"name": "得利斯"
		},
		{
			"code": "601880",
			"涨跌幅度": "5.43",
			"name": "大连港"
		},
		{
			"code": "600605",
			"涨跌幅度": "9.04",
			"name": "汇通能源"
		},
		{
			"code": "002484",
			"涨跌幅度": "0.63",
			"name": "江海股份"
		},
		{
			"code": "600236",
			"涨跌幅度": "-6.57",
			"name": "桂冠电力"
		},
		{
			"code": "002094",
			"涨跌幅度": "117.73",
			"name": "青岛金王"
		},
		{
			"code": "002039",
			"涨跌幅度": "-0.92",
			"name": "黔源电力"
		},
		{
			"code": "000797",
			"涨跌幅度": "-14.11",
			"name": "中国武夷"
		},
		{
			"code": "603333",
			"涨跌幅度": "3.61",
			"name": "明星电缆"
		},
		{
			"code": "600393",
			"涨跌幅度": "26.59",
			"name": "粤泰股份"
		},
		{
			"code": "002323",
			"涨跌幅度": "16.32",
			"name": "雅百特"
		},
		{
			"code": "002152",
			"涨跌幅度": "-23.31",
			"name": "广电运通"
		},
		{
			"code": "000729",
			"涨跌幅度": "-2.84",
			"name": "燕京啤酒"
		},
		{
			"code": "002739",
			"涨跌幅度": "-32.68",
			"name": "万达院线"
		},
		{
			"code": "002458",
			"涨跌幅度": "12.79",
			"name": "益生股份"
		},
		{
			"code": "600119",
			"涨跌幅度": "7.94",
			"name": "长江投资"
		},
		{
			"code": "600486",
			"涨跌幅度": "29.92",
			"name": "扬农化工"
		},
		{
			"code": "600020",
			"涨跌幅度": "-21.19",
			"name": "中原高速"
		},
		{
			"code": "300099",
			"涨跌幅度": "-17.48",
			"name": "尤洛卡"
		},
		{
			"code": "000919",
			"涨跌幅度": "-14.68",
			"name": "金陵药业"
		},
		{
			"code": "002248",
			"涨跌幅度": "-16.28",
			"name": "华东数控"
		},
		{
			"code": "600072",
			"涨跌幅度": "-39.57",
			"name": "钢构工程"
		},
		{
			"code": "600490",
			"涨跌幅度": "25.72",
			"name": "鹏欣资源"
		},
		{
			"code": "600550",
			"涨跌幅度": "-18.64",
			"name": "保变电气"
		},
		{
			"code": "300389",
			"涨跌幅度": "8.67",
			"name": "艾比森"
		},
		{
			"code": "300024",
			"涨跌幅度": "-28.92",
			"name": "机器人"
		},
		{
			"code": "300015",
			"涨跌幅度": "4.62",
			"name": "爱尔眼科"
		},
		{
			"code": "600488",
			"涨跌幅度": "-6.7",
			"name": "天药股份"
		},
		{
			"code": "600094",
			"涨跌幅度": "-20.02",
			"name": "大名城"
		},
		{
			"code": "002214",
			"涨跌幅度": "-14.1",
			"name": "大立科技"
		},
		{
			"code": "002261",
			"涨跌幅度": "-28.67",
			"name": "拓维信息"
		},
		{
			"code": "300078",
			"涨跌幅度": "-28.08",
			"name": "思创医惠"
		},
		{
			"code": "600784",
			"涨跌幅度": "13.78",
			"name": "鲁银投资"
		},
		{
			"code": "002542",
			"涨跌幅度": "-5.11",
			"name": "中化岩土"
		},
		{
			"code": "600103",
			"涨跌幅度": "-19.62",
			"name": "青山纸业"
		},
		{
			"code": "002284",
			"涨跌幅度": "24.98",
			"name": "亚太股份"
		},
		{
			"code": "002665",
			"涨跌幅度": "-27.49",
			"name": "首航节能"
		},
		{
			"code": "300032",
			"涨跌幅度": "-38.94",
			"name": "金龙机电"
		},
		{
			"code": "002499",
			"涨跌幅度": "5.2",
			"name": "科林环保"
		},
		{
			"code": "002625",
			"涨跌幅度": "-35.52",
			"name": "龙生股份"
		},
		{
			"code": "000629",
			"涨跌幅度": "-10.93",
			"name": "*ST钒钛"
		},
		{
			"code": "000036",
			"涨跌幅度": "16.25",
			"name": "华联控股"
		},
		{
			"code": "601618",
			"涨跌幅度": "-30.75",
			"name": "中国中冶"
		},
		{
			"code": "002550",
			"涨跌幅度": "-30.45",
			"name": "千红制药"
		},
		{
			"code": "002546",
			"涨跌幅度": "3.81",
			"name": "新联电子"
		},
		{
			"code": "601890",
			"涨跌幅度": "-31.54",
			"name": "亚星锚链"
		},
		{
			"code": "600600",
			"涨跌幅度": "-1.96",
			"name": "青岛啤酒"
		},
		{
			"code": "600172",
			"涨跌幅度": "-16.7",
			"name": "黄河旋风"
		},
		{
			"code": "601898",
			"涨跌幅度": "1.81",
			"name": "中煤能源"
		},
		{
			"code": "600809",
			"涨跌幅度": "37.2",
			"name": "山西汾酒"
		},
		{
			"code": "600512",
			"涨跌幅度": "-3.64",
			"name": "腾达建设"
		},
		{
			"code": "600523",
			"涨跌幅度": "9.51",
			"name": "贵航股份"
		},
		{
			"code": "000993",
			"涨跌幅度": "7.53",
			"name": "闽东电力"
		},
		{
			"code": "002500",
			"涨跌幅度": "-2.56",
			"name": "山西证券"
		},
		{
			"code": "002250",
			"涨跌幅度": "-13.4",
			"name": "联化科技"
		},
		{
			"code": "000004",
			"涨跌幅度": "2.07",
			"name": "国农科技"
		},
		{
			"code": "601515",
			"涨跌幅度": "-16.6",
			"name": "东风股份"
		},
		{
			"code": "601607",
			"涨跌幅度": "9.23",
			"name": "上海医药"
		},
		{
			"code": "600123",
			"涨跌幅度": "4.81",
			"name": "兰花科创"
		},
		{
			"code": "300082",
			"涨跌幅度": "-1.47",
			"name": "奥克股份"
		},
		{
			"code": "002027",
			"涨跌幅度": "-23.28",
			"name": "分众传媒"
		},
		{
			"code": "002090",
			"涨跌幅度": "-25.83",
			"name": "金智科技"
		},
		{
			"code": "600161",
			"涨跌幅度": "40.68",
			"name": "天坛生物"
		},
		{
			"code": "600527",
			"涨跌幅度": "2.96",
			"name": "江南高纤"
		},
		{
			"code": "600758",
			"涨跌幅度": "2.44",
			"name": "红阳能源"
		},
		{
			"code": "002543",
			"涨跌幅度": "13.33",
			"name": "万和电气"
		},
		{
			"code": "002384",
			"涨跌幅度": "-18.14",
			"name": "东山精密"
		},
		{
			"code": "600588",
			"涨跌幅度": "-14.84",
			"name": "用友网络"
		},
		{
			"code": "600226",
			"涨跌幅度": "-3.26",
			"name": "升华拜克"
		},
		{
			"code": "600271",
			"涨跌幅度": "-18.95",
			"name": "航天信息"
		},
		{
			"code": "600796",
			"涨跌幅度": "-4.21",
			"name": "钱江生化"
		},
		{
			"code": "600169",
			"涨跌幅度": "-27.93",
			"name": "太原重工"
		},
		{
			"code": "300070",
			"涨跌幅度": "-10.62",
			"name": "碧水源"
		},
		{
			"code": "603000",
			"涨跌幅度": "-22.23",
			"name": "人民网"
		},
		{
			"code": "601000",
			"涨跌幅度": "-4.44",
			"name": "唐山港"
		},
		{
			"code": "002472",
			"涨跌幅度": "-4.41",
			"name": "双环传动"
		},
		{
			"code": "600506",
			"涨跌幅度": "50.53",
			"name": "香梨股份"
		},
		{
			"code": "002431",
			"涨跌幅度": "6.57",
			"name": "棕榈股份"
		},
		{
			"code": "002563",
			"涨跌幅度": "-10.8",
			"name": "森马服饰"
		},
		{
			"code": "002523",
			"涨跌幅度": "22.26",
			"name": "天桥起重"
		},
		{
			"code": "000858",
			"涨跌幅度": "49.02",
			"name": "五 粮 液"
		},
		{
			"code": "601198",
			"涨跌幅度": "-6.2",
			"name": "东兴证券"
		},
		{
			"code": "002506",
			"涨跌幅度": "-57.04",
			"name": "协鑫集成"
		},
		{
			"code": "002437",
			"涨跌幅度": "-17.8",
			"name": "誉衡药业"
		},
		{
			"code": "600793",
			"涨跌幅度": "47.95",
			"name": "宜宾纸业"
		},
		{
			"code": "600285",
			"涨跌幅度": "6.03",
			"name": "羚锐制药"
		},
		{
			"code": "000825",
			"涨跌幅度": "4.98",
			"name": "太钢不锈"
		},
		{
			"code": "002780",
			"涨跌幅度": "591.0",
			"name": "三夫户外"
		},
		{
			"code": "600703",
			"涨跌幅度": "-18.29",
			"name": "三安光电"
		},
		{
			"code": "600508",
			"涨跌幅度": "8.77",
			"name": "上海能源"
		},
		{
			"code": "000861",
			"涨跌幅度": "-41.9",
			"name": "海印股份"
		},
		{
			"code": "002513",
			"涨跌幅度": "-3.69",
			"name": "*ST蓝丰"
		},
		{
			"code": "601009",
			"涨跌幅度": "27.26",
			"name": "南京银行"
		},
		{
			"code": "002549",
			"涨跌幅度": "-21.97",
			"name": "凯美特气"
		},
		{
			"code": "002390",
			"涨跌幅度": "-22.87",
			"name": "信邦制药"
		},
		{
			"code": "002336",
			"涨跌幅度": "-1.27",
			"name": "*ST人乐"
		},
		{
			"code": "600836",
			"涨跌幅度": "-38.22",
			"name": "界龙实业"
		},
		{
			"code": "002309",
			"涨跌幅度": "-26.11",
			"name": "中利科技"
		},
		{
			"code": "002394",
			"涨跌幅度": "19.45",
			"name": "联发股份"
		},
		{
			"code": "603398",
			"涨跌幅度": "417.9",
			"name": "邦宝益智"
		},
		{
			"code": "600736",
			"涨跌幅度": "11.6",
			"name": "苏州高新"
		},
		{
			"code": "300035",
			"涨跌幅度": "12.71",
			"name": "中科电气"
		},
		{
			"code": "002306",
			"涨跌幅度": "-10.95",
			"name": "中科云网"
		},
		{
			"code": "600098",
			"涨跌幅度": "-17.84",
			"name": "广州发展"
		},
		{
			"code": "600597",
			"涨跌幅度": "-10.44",
			"name": "光明乳业"
		},
		{
			"code": "000601",
			"涨跌幅度": "-6.13",
			"name": "韶能股份"
		},
		{
			"code": "300362",
			"涨跌幅度": "36.74",
			"name": "天翔环境"
		},
		{
			"code": "600648",
			"涨跌幅度": "-21.07",
			"name": "外高桥"
		},
		{
			"code": "600751",
			"涨跌幅度": "9.33",
			"name": "天海投资"
		},
		{
			"code": "000756",
			"涨跌幅度": "16.1",
			"name": "新华制药"
		},
		{
			"code": "000506",
			"涨跌幅度": "-20.98",
			"name": "中润资源"
		},
		{
			"code": "600117",
			"涨跌幅度": "3.1",
			"name": "西宁特钢"
		},
		{
			"code": "600348",
			"涨跌幅度": "9.98",
			"name": "阳泉煤业"
		},
		{
			"code": "603288",
			"涨跌幅度": "-9.28",
			"name": "海天味业"
		},
		{
			"code": "002460",
			"涨跌幅度": "32.18",
			"name": "赣锋锂业"
		},
		{
			"code": "600750",
			"涨跌幅度": "-5.12",
			"name": "江中药业"
		},
		{
			"code": "000739",
			"涨跌幅度": "2.68",
			"name": "普洛药业"
		},
		{
			"code": "600203",
			"涨跌幅度": "-7.79",
			"name": "福日电子"
		},
		{
			"code": "600841",
			"涨跌幅度": "4.11",
			"name": "上柴股份"
		},
		{
			"code": "600401",
			"涨跌幅度": "-19.67",
			"name": "海润光伏"
		},
		{
			"code": "600570",
			"涨跌幅度": "-10.92",
			"name": "恒生电子"
		},
		{
			"code": "002304",
			"涨跌幅度": "10.09",
			"name": "洋河股份"
		},
		{
			"code": "600083",
			"涨跌幅度": "4.51",
			"name": "博信股份"
		},
		{
			"code": "000552",
			"涨跌幅度": "-9.55",
			"name": "靖远煤电"
		},
		{
			"code": "300114",
			"涨跌幅度": "-16.04",
			"name": "中航电测"
		},
		{
			"code": "600748",
			"涨跌幅度": "-18.24",
			"name": "上实发展"
		},
		{
			"code": "600210",
			"涨跌幅度": "-18.95",
			"name": "紫江企业"
		},
		{
			"code": "000559",
			"涨跌幅度": "-33.49",
			"name": "万向钱潮"
		},
		{
			"code": "601928",
			"涨跌幅度": "-29.79",
			"name": "凤凰传媒"
		},
		{
			"code": "601966",
			"涨跌幅度": "93.13",
			"name": "玲珑轮胎"
		},
		{
			"code": "600315",
			"涨跌幅度": "-29.2",
			"name": "上海家化"
		},
		{
			"code": "300286",
			"涨跌幅度": "-11.62",
			"name": "安科瑞"
		},
		{
			"code": "000040",
			"涨跌幅度": "-27.47",
			"name": "东旭蓝天"
		},
		{
			"code": "002595",
			"涨跌幅度": "-6.79",
			"name": "豪迈科技"
		},
		{
			"code": "002664",
			"涨跌幅度": "-3.85",
			"name": "信质电机"
		},
		{
			"code": "600835",
			"涨跌幅度": "-27.08",
			"name": "上海机电"
		},
		{
			"code": "000692",
			"涨跌幅度": "-6.98",
			"name": "惠天热电"
		},
		{
			"code": "000897",
			"涨跌幅度": "-13.31",
			"name": "津滨发展"
		},
		{
			"code": "002236",
			"涨跌幅度": "-6.33",
			"name": "大华股份"
		},
		{
			"code": "002441",
			"涨跌幅度": "-33.05",
			"name": "众业达"
		},
		{
			"code": "600179",
			"涨跌幅度": "-13.36",
			"name": "安通控股"
		},
		{
			"code": "600369",
			"涨跌幅度": "-15.17",
			"name": "西南证券"
		},
		{
			"code": "002727",
			"涨跌幅度": "-28.12",
			"name": "一心堂"
		},
		{
			"code": "002366",
			"涨跌幅度": "-6.26",
			"name": "台海核电"
		},
		{
			"code": "600390",
			"涨跌幅度": "1.02",
			"name": "*ST金瑞"
		},
		{
			"code": "600110",
			"涨跌幅度": "-26.73",
			"name": "诺德股份"
		},
		{
			"code": "600869",
			"涨跌幅度": "-12.18",
			"name": "智慧能源"
		},
		{
			"code": "603899",
			"涨跌幅度": "-3.93",
			"name": "晨光文具"
		},
		{
			"code": "600926",
			"涨跌幅度": "34.11",
			"name": "杭州银行"
		},
		{
			"code": "300188",
			"涨跌幅度": "-36.26",
			"name": "美亚柏科"
		},
		{
			"code": "600713",
			"涨跌幅度": "-16.9",
			"name": "南京医药"
		},
		{
			"code": "002600",
			"涨跌幅度": "4.07",
			"name": "江粉磁材"
		},
		{
			"code": "601199",
			"涨跌幅度": "-11.18",
			"name": "江南水务"
		},
		{
			"code": "600604",
			"涨跌幅度": "-22.84",
			"name": "市北高新"
		},
		{
			"code": "300415",
			"涨跌幅度": "-19.81",
			"name": "伊之密"
		},
		{
			"code": "002181",
			"涨跌幅度": "-48.52",
			"name": "粤 传 媒"
		},
		{
			"code": "000889",
			"涨跌幅度": "0.21",
			"name": "茂业通信"
		},
		{
			"code": "002276",
			"涨跌幅度": "-39.58",
			"name": "万马股份"
		},
		{
			"code": "600010",
			"涨跌幅度": "-19.2",
			"name": "包钢股份"
		},
		{
			"code": "300447",
			"涨跌幅度": "-15.09",
			"name": "全信股份"
		},
		{
			"code": "002498",
			"涨跌幅度": "-42.49",
			"name": "汉缆股份"
		},
		{
			"code": "002350",
			"涨跌幅度": "24.82",
			"name": "北京科锐"
		},
		{
			"code": "002406",
			"涨跌幅度": "-2.69",
			"name": "远东传动"
		},
		{
			"code": "000589",
			"涨跌幅度": "-15.23",
			"name": "黔轮胎Ａ"
		},
		{
			"code": "000625",
			"涨跌幅度": "16.43",
			"name": "长安汽车"
		},
		{
			"code": "600054",
			"涨跌幅度": "17.19",
			"name": "黄山旅游"
		},
		{
			"code": "002626",
			"涨跌幅度": "-8.14",
			"name": "金达威"
		},
		{
			"code": "002414",
			"涨跌幅度": "-14.03",
			"name": "高德红外"
		},
		{
			"code": "002321",
			"涨跌幅度": "-8.08",
			"name": "华英农业"
		},
		{
			"code": "603866",
			"涨跌幅度": "128.97",
			"name": "桃李面包"
		},
		{
			"code": "600723",
			"涨跌幅度": "-5.18",
			"name": "首商股份"
		},
		{
			"code": "603300",
			"涨跌幅度": "-21.28",
			"name": "华铁科技"
		},
		{
			"code": "601128",
			"涨跌幅度": "132.1",
			"name": "常熟银行"
		},
		{
			"code": "300306",
			"涨跌幅度": "36.51",
			"name": "远方光电"
		},
		{
			"code": "000419",
			"涨跌幅度": "-4.43",
			"name": "通程控股"
		},
		{
			"code": "000899",
			"涨跌幅度": "-12.18",
			"name": "赣能股份"
		},
		{
			"code": "002333",
			"涨跌幅度": "44.13",
			"name": "罗普斯金"
		},
		{
			"code": "000546",
			"涨跌幅度": "-11.03",
			"name": "金圆股份"
		},
		{
			"code": "600645",
			"涨跌幅度": "-41.05",
			"name": "中源协和"
		},
		{
			"code": "600397",
			"涨跌幅度": "-8.96",
			"name": "安源煤业"
		},
		{
			"code": "002160",
			"涨跌幅度": "-10.59",
			"name": "常铝股份"
		},
		{
			"code": "600875",
			"涨跌幅度": "-23.56",
			"name": "东方电气"
		},
		{
			"code": "600383",
			"涨跌幅度": "6.12",
			"name": "金地集团"
		},
		{
			"code": "002385",
			"涨跌幅度": "-6.93",
			"name": "大北农"
		},
		{
			"code": "300065",
			"涨跌幅度": "-17.97",
			"name": "海兰信"
		},
		{
			"code": "000700",
			"涨跌幅度": "-25.42",
			"name": "模塑科技"
		},
		{
			"code": "002183",
			"涨跌幅度": "-42.94",
			"name": "怡 亚 通"
		},
		{
			"code": "000025",
			"涨跌幅度": "-24.01",
			"name": "特 力Ａ"
		},
		{
			"code": "600355",
			"涨跌幅度": "28.88",
			"name": "精伦电子"
		},
		{
			"code": "600698",
			"涨跌幅度": "-12.43",
			"name": "湖南天雁"
		},
		{
			"code": "000955",
			"涨跌幅度": "-0.61",
			"name": "欣龙控股"
		},
		{
			"code": "600192",
			"涨跌幅度": "1.17",
			"name": "长城电工"
		},
		{
			"code": "002249",
			"涨跌幅度": "-19.61",
			"name": "大洋电机"
		},
		{
			"code": "002331",
			"涨跌幅度": "-13.68",
			"name": "皖通科技"
		},
		{
			"code": "002391",
			"涨跌幅度": "-0.31",
			"name": "长青股份"
		},
		{
			"code": "300144",
			"涨跌幅度": "-21.64",
			"name": "宋城演艺"
		},
		{
			"code": "603989",
			"涨跌幅度": "-7.5",
			"name": "艾华集团"
		},
		{
			"code": "603369",
			"涨跌幅度": "-7.99",
			"name": "今世缘"
		},
		{
			"code": "600593",
			"涨跌幅度": "4.35",
			"name": "大连圣亚"
		},
		{
			"code": "600307",
			"涨跌幅度": "-26.88",
			"name": "酒钢宏兴"
		},
		{
			"code": "600260",
			"涨跌幅度": "-7.33",
			"name": "凯乐科技"
		},
		{
			"code": "600403",
			"涨跌幅度": "-10.77",
			"name": "大有能源"
		},
		{
			"code": "600106",
			"涨跌幅度": "-30.85",
			"name": "重庆路桥"
		},
		{
			"code": "000027",
			"涨跌幅度": "-29.98",
			"name": "深圳能源"
		},
		{
			"code": "601997",
			"涨跌幅度": "63.3",
			"name": "贵阳银行"
		},
		{
			"code": "603338",
			"涨跌幅度": "0.23",
			"name": "浙江鼎力"
		},
		{
			"code": "600156",
			"涨跌幅度": "-9.21",
			"name": "华升股份"
		},
		{
			"code": "000536",
			"涨跌幅度": "-3.34",
			"name": "华映科技"
		},
		{
			"code": "300436",
			"涨跌幅度": "-30.17",
			"name": "广生堂"
		},
		{
			"code": "002292",
			"涨跌幅度": "-21.96",
			"name": "奥飞娱乐"
		},
		{
			"code": "600868",
			"涨跌幅度": "-6.76",
			"name": "梅雁吉祥"
		},
		{
			"code": "002285",
			"涨跌幅度": "-41.51",
			"name": "世联行"
		},
		{
			"code": "600306",
			"涨跌幅度": "33.47",
			"name": "*ST商城"
		},
		{
			"code": "002453",
			"涨跌幅度": "73.7",
			"name": "天马精化"
		},
		{
			"code": "002661",
			"涨跌幅度": "-8.13",
			"name": "克明面业"
		},
		{
			"code": "600557",
			"涨跌幅度": "-8.37",
			"name": "康缘药业"
		},
		{
			"code": "300433",
			"涨跌幅度": "-6.49",
			"name": "蓝思科技"
		},
		{
			"code": "300293",
			"涨跌幅度": "-20.58",
			"name": "蓝英装备"
		},
		{
			"code": "002073",
			"涨跌幅度": "-33.39",
			"name": "软控股份"
		},
		{
			"code": "600487",
			"涨跌幅度": "56.19",
			"name": "亨通光电"
		},
		{
			"code": "300181",
			"涨跌幅度": "-13.84",
			"name": "佐力药业"
		},
		{
			"code": "601098",
			"涨跌幅度": "-23.62",
			"name": "中南传媒"
		},
		{
			"code": "002399",
			"涨跌幅度": "-1.61",
			"name": "海普瑞"
		},
		{
			"code": "002289",
			"涨跌幅度": "-4.3",
			"name": "*ST宇顺"
		},
		{
			"code": "002672",
			"涨跌幅度": "-6.59",
			"name": "东江环保"
		},
		{
			"code": "000750",
			"涨跌幅度": "-3.88",
			"name": "国海证券"
		},
		{
			"code": "002179",
			"涨跌幅度": "-9.0",
			"name": "中航光电"
		},
		{
			"code": "600677",
			"涨跌幅度": "-21.0",
			"name": "航天通信"
		},
		{
			"code": "600336",
			"涨跌幅度": "-13.72",
			"name": "澳柯玛"
		},
		{
			"code": "002014",
			"涨跌幅度": "-12.23",
			"name": "永新股份"
		},
		{
			"code": "000591",
			"涨跌幅度": "-29.15",
			"name": "太阳能"
		},
		{
			"code": "603012",
			"涨跌幅度": "-3.98",
			"name": "创力集团"
		},
		{
			"code": "600738",
			"涨跌幅度": "-3.56",
			"name": "兰州民百"
		},
		{
			"code": "002677",
			"涨跌幅度": "-7.0",
			"name": "浙江美大"
		},
		{
			"code": "600240",
			"涨跌幅度": "-18.31",
			"name": "华业资本"
		},
		{
			"code": "002681",
			"涨跌幅度": "-31.16",
			"name": "奋达科技"
		},
		{
			"code": "000030",
			"涨跌幅度": "-2.18",
			"name": "富奥股份"
		},
		{
			"code": "000408",
			"涨跌幅度": "-29.19",
			"name": "*ST金源"
		},
		{
			"code": "002307",
			"涨跌幅度": "-17.01",
			"name": "北新路桥"
		},
		{
			"code": "600388",
			"涨跌幅度": "-31.53",
			"name": "龙净环保"
		},
		{
			"code": "601139",
			"涨跌幅度": "7.59",
			"name": "深圳燃气"
		},
		{
			"code": "002367",
			"涨跌幅度": "-15.1",
			"name": "康力电梯"
		},
		{
			"code": "002054",
			"涨跌幅度": "-7.1",
			"name": "德美化工"
		},
		{
			"code": "603198",
			"涨跌幅度": "-19.62",
			"name": "迎驾贡酒"
		},
		{
			"code": "000665",
			"涨跌幅度": "-26.69",
			"name": "湖北广电"
		},
		{
			"code": "002175",
			"涨跌幅度": "-21.19",
			"name": "东方网络"
		},
		{
			"code": "600893",
			"涨跌幅度": "-23.75",
			"name": "中航动力"
		},
		{
			"code": "002646",
			"涨跌幅度": "-10.68",
			"name": "青青稞酒"
		},
		{
			"code": "600006",
			"涨跌幅度": "-15.58",
			"name": "东风汽车"
		},
		{
			"code": "300347",
			"涨跌幅度": "-14.21",
			"name": "泰格医药"
		},
		{
			"code": "600919",
			"涨跌幅度": "42.15",
			"name": "江苏银行"
		},
		{
			"code": "300505",
			"涨跌幅度": "713.82",
			"name": "川金诺"
		},
		{
			"code": "300463",
			"涨跌幅度": "-32.03",
			"name": "迈克生物"
		},
		{
			"code": "601001",
			"涨跌幅度": "19.78",
			"name": "大同煤业"
		},
		{
			"code": "002225",
			"涨跌幅度": "-10.12",
			"name": "濮耐股份"
		},
		{
			"code": "000565",
			"涨跌幅度": "-13.95",
			"name": "渝三峡Ａ"
		},
		{
			"code": "000795",
			"涨跌幅度": "21.67",
			"name": "英洛华"
		},
		{
			"code": "300066",
			"涨跌幅度": "11.3",
			"name": "三川智慧"
		},
		{
			"code": "002143",
			"涨跌幅度": "-27.47",
			"name": "印纪传媒"
		},
		{
			"code": "002361",
			"涨跌幅度": "-13.66",
			"name": "神剑股份"
		},
		{
			"code": "600436",
			"涨跌幅度": "27.58",
			"name": "片仔癀"
		},
		{
			"code": "300202",
			"涨跌幅度": "-22.56",
			"name": "聚龙股份"
		},
		{
			"code": "002465",
			"涨跌幅度": "-30.12",
			"name": "海格通信"
		},
		{
			"code": "600022",
			"涨跌幅度": "-13.49",
			"name": "山东钢铁"
		},
		{
			"code": "000800",
			"涨跌幅度": "-19.92",
			"name": "一汽轿车"
		},
		{
			"code": "002680",
			"涨跌幅度": "-13.91",
			"name": "长生生物"
		},
		{
			"code": "600333",
			"涨跌幅度": "12.42",
			"name": "长春燃气"
		},
		{
			"code": "600580",
			"涨跌幅度": "-31.35",
			"name": "卧龙电气"
		},
		{
			"code": "000957",
			"涨跌幅度": "40.73",
			"name": "中通客车"
		},
		{
			"code": "002190",
			"涨跌幅度": "-7.96",
			"name": "成飞集成"
		},
		{
			"code": "603001",
			"涨跌幅度": "-33.01",
			"name": "奥康国际"
		},
		{
			"code": "300004",
			"涨跌幅度": "-35.93",
			"name": "南风股份"
		},
		{
			"code": "002170",
			"涨跌幅度": "-27.04",
			"name": "芭田股份"
		},
		{
			"code": "603718",
			"涨跌幅度": "-6.31",
			"name": "海利生物"
		},
		{
			"code": "002496",
			"涨跌幅度": "-28.47",
			"name": "辉丰股份"
		},
		{
			"code": "300146",
			"涨跌幅度": "-19.44",
			"name": "汤臣倍健"
		},
		{
			"code": "603008",
			"涨跌幅度": "-1.81",
			"name": "喜临门"
		},
		{
			"code": "600201",
			"涨跌幅度": "12.53",
			"name": "生物股份"
		},
		{
			"code": "002188",
			"涨跌幅度": "-17.77",
			"name": "巴士在线"
		},
		{
			"code": "600867",
			"涨跌幅度": "7.47",
			"name": "通化东宝"
		},
		{
			"code": "300021",
			"涨跌幅度": "21.02",
			"name": "大禹节水"
		},
		{
			"code": "000069",
			"涨跌幅度": "-9.68",
			"name": "华侨城Ａ"
		},
		{
			"code": "300113",
			"涨跌幅度": "-16.85",
			"name": "顺网科技"
		},
		{
			"code": "600305",
			"涨跌幅度": "8.61",
			"name": "恒顺醋业"
		},
		{
			"code": "002245",
			"涨跌幅度": "14.64",
			"name": "澳洋顺昌"
		},
		{
			"code": "600280",
			"涨跌幅度": "-23.56",
			"name": "中央商场"
		},
		{
			"code": "002529",
			"涨跌幅度": "-6.34",
			"name": "海源机械"
		},
		{
			"code": "000520",
			"涨跌幅度": "317.16",
			"name": "长航凤凰"
		},
		{
			"code": "000836",
			"涨跌幅度": "-0.13",
			"name": "鑫茂科技"
		},
		{
			"code": "002618",
			"涨跌幅度": "33.79",
			"name": "丹邦科技"
		},
		{
			"code": "600976",
			"涨跌幅度": "0.93",
			"name": "健民集团"
		},
		{
			"code": "000630",
			"涨跌幅度": "-15.57",
			"name": "铜陵有色"
		},
		{
			"code": "600217",
			"涨跌幅度": "-5.25",
			"name": "中再资环"
		},
		{
			"code": "600261",
			"涨跌幅度": "-1.54",
			"name": "阳光照明"
		},
		{
			"code": "600641",
			"涨跌幅度": "-18.34",
			"name": "万业企业"
		},
		{
			"code": "000009",
			"涨跌幅度": "-28.42",
			"name": "中国宝安"
		},
		{
			"code": "600696",
			"涨跌幅度": "-23.29",
			"name": "匹凸匹"
		},
		{
			"code": "603018",
			"涨跌幅度": "-13.04",
			"name": "中设集团"
		},
		{
			"code": "300118",
			"涨跌幅度": "8.57",
			"name": "东方日升"
		},
		{
			"code": "002438",
			"涨跌幅度": "-8.42",
			"name": "江苏神通"
		},
		{
			"code": "002352",
			"涨跌幅度": "206.7",
			"name": "鼎泰新材"
		},
		{
			"code": "601519",
			"涨跌幅度": "-38.01",
			"name": "大智慧"
		},
		{
			"code": "002736",
			"涨跌幅度": "-2.53",
			"name": "国信证券"
		},
		{
			"code": "300300",
			"涨跌幅度": "-7.01",
			"name": "汉鼎宇佑"
		},
		{
			"code": "600826",
			"涨跌幅度": "-14.58",
			"name": "兰生股份"
		},
		{
			"code": "002128",
			"涨跌幅度": "-11.03",
			"name": "露天煤业"
		},
		{
			"code": "300336",
			"涨跌幅度": "-33.42",
			"name": "新文化"
		},
		{
			"code": "002145",
			"涨跌幅度": "51.08",
			"name": "中核钛白"
		},
		{
			"code": "600057",
			"涨跌幅度": "-5.92",
			"name": "象屿股份"
		},
		{
			"code": "600421",
			"涨跌幅度": "15.29",
			"name": "仰帆控股"
		},
		{
			"code": "002335",
			"涨跌幅度": "35.01",
			"name": "科华恒盛"
		},
		{
			"code": "002657",
			"涨跌幅度": "-41.75",
			"name": "中科金财"
		},
		{
			"code": "603789",
			"涨跌幅度": "-36.33",
			"name": "星光农机"
		},
		{
			"code": "002518",
			"涨跌幅度": "-1.36",
			"name": "科士达"
		},
		{
			"code": "002644",
			"涨跌幅度": "-24.12",
			"name": "佛慈制药"
		},
		{
			"code": "603588",
			"涨跌幅度": "-22.5",
			"name": "高能环境"
		},
		{
			"code": "600478",
			"涨跌幅度": "-26.31",
			"name": "科力远"
		},
		{
			"code": "600888",
			"涨跌幅度": "-3.01",
			"name": "新疆众和"
		},
		{
			"code": "600239",
			"涨跌幅度": "-21.33",
			"name": "云南城投"
		},
		{
			"code": "002221",
			"涨跌幅度": "0.78",
			"name": "东华能源"
		},
		{
			"code": "600661",
			"涨跌幅度": "-17.14",
			"name": "新南洋"
		},
		{
			"code": "000780",
			"涨跌幅度": "11.17",
			"name": "平庄能源"
		},
		{
			"code": "002123",
			"涨跌幅度": "-23.18",
			"name": "梦网荣信"
		},
		{
			"code": "002544",
			"涨跌幅度": "-0.03",
			"name": "杰赛科技"
		},
		{
			"code": "600067",
			"涨跌幅度": "-14.94",
			"name": "冠城大通"
		},
		{
			"code": "002037",
			"涨跌幅度": "-22.95",
			"name": "久联发展"
		},
		{
			"code": "300316",
			"涨跌幅度": "-16.52",
			"name": "晶盛机电"
		},
		{
			"code": "600190",
			"涨跌幅度": "-25.69",
			"name": "锦州港"
		},
		{
			"code": "002031",
			"涨跌幅度": "-24.69",
			"name": "巨轮智能"
		},
		{
			"code": "600664",
			"涨跌幅度": "4.54",
			"name": "哈药股份"
		},
		{
			"code": "002573",
			"涨跌幅度": "-22.09",
			"name": "清新环境"
		},
		{
			"code": "603889",
			"涨跌幅度": "-1.67",
			"name": "新澳股份"
		},
		{
			"code": "000801",
			"涨跌幅度": "-23.33",
			"name": "四川九洲"
		},
		{
			"code": "600267",
			"涨跌幅度": "-3.58",
			"name": "海正药业"
		},
		{
			"code": "002767",
			"涨跌幅度": "27.17",
			"name": "先锋电子"
		},
		{
			"code": "601688",
			"涨跌幅度": "7.05",
			"name": "华泰证券"
		},
		{
			"code": "002638",
			"涨跌幅度": "69.33",
			"name": "勤上光电"
		},
		{
			"code": "002519",
			"涨跌幅度": "-5.19",
			"name": "银河电子"
		},
		{
			"code": "002631",
			"涨跌幅度": "-28.57",
			"name": "德尔未来"
		},
		{
			"code": "600252",
			"涨跌幅度": "-37.6",
			"name": "中恒集团"
		},
		{
			"code": "300365",
			"涨跌幅度": "1.1",
			"name": "恒华科技"
		},
		{
			"code": "002423",
			"涨跌幅度": "-23.36",
			"name": "*ST中特"
		},
		{
			"code": "000564",
			"涨跌幅度": "-28.17",
			"name": "西安民生"
		},
		{
			"code": "600449",
			"涨跌幅度": "-16.75",
			"name": "宁夏建材"
		},
		{
			"code": "603067",
			"涨跌幅度": "298.19",
			"name": "振华股份"
		},
		{
			"code": "600502",
			"涨跌幅度": "20.85",
			"name": "安徽水利"
		},
		{
			"code": "601113",
			"涨跌幅度": "8.1",
			"name": "华鼎股份"
		},
		{
			"code": "601888",
			"涨跌幅度": "-12.36",
			"name": "中国国旅"
		},
		{
			"code": "002684",
			"涨跌幅度": "10.81",
			"name": "猛狮科技"
		},
		{
			"code": "002233",
			"涨跌幅度": "-22.3",
			"name": "塔牌集团"
		},
		{
			"code": "002714",
			"涨跌幅度": "-5.69",
			"name": "牧原股份"
		},
		{
			"code": "300133",
			"涨跌幅度": "-32.34",
			"name": "华策影视"
		},
		{
			"code": "300107",
			"涨跌幅度": "-1.5",
			"name": "建新股份"
		},
		{
			"code": "002648",
			"涨跌幅度": "18.01",
			"name": "卫星石化"
		},
		{
			"code": "002444",
			"涨跌幅度": "8.24",
			"name": "巨星科技"
		},
		{
			"code": "002018",
			"涨跌幅度": "-61.17",
			"name": "华信国际"
		},
		{
			"code": "002192",
			"涨跌幅度": "-7.34",
			"name": "融捷股份"
		},
		{
			"code": "600958",
			"涨跌幅度": "-23.56",
			"name": "东方证券"
		},
		{
			"code": "300122",
			"涨跌幅度": "2.66",
			"name": "智飞生物"
		},
		{
			"code": "601877",
			"涨跌幅度": "-13.87",
			"name": "正泰电器"
		},
		{
			"code": "002505",
			"涨跌幅度": "-0.56",
			"name": "大康农业"
		},
		{
			"code": "002291",
			"涨跌幅度": "-0.89",
			"name": "星期六"
		},
		{
			"code": "000967",
			"涨跌幅度": "-16.09",
			"name": "盈峰环境"
		},
		{
			"code": "300206",
			"涨跌幅度": "-2.41",
			"name": "理邦仪器"
		},
		{
			"code": "000528",
			"涨跌幅度": "-4.57",
			"name": "柳 工"
		},
		{
			"code": "000038",
			"涨跌幅度": "8.86",
			"name": "深大通"
		},
		{
			"code": "600965",
			"涨跌幅度": "-4.23",
			"name": "福成股份"
		},
		{
			"code": "000600",
			"涨跌幅度": "-4.14",
			"name": "建投能源"
		},
		{
			"code": "600096",
			"涨跌幅度": "-37.57",
			"name": "云天化"
		},
		{
			"code": "600078",
			"涨跌幅度": "4.71",
			"name": "澄星股份"
		},
		{
			"code": "002439",
			"涨跌幅度": "-28.07",
			"name": "启明星辰"
		},
		{
			"code": "000407",
			"涨跌幅度": "0.42",
			"name": "胜利股份"
		},
		{
			"code": "300224",
			"涨跌幅度": "-13.09",
			"name": "正海磁材"
		},
		{
			"code": "300249",
			"涨跌幅度": "44.28",
			"name": "依米康"
		},
		{
			"code": "002622",
			"涨跌幅度": "7.44",
			"name": "融钰集团"
		},
		{
			"code": "300086",
			"涨跌幅度": "-8.4",
			"name": "康芝药业"
		},
		{
			"code": "600895",
			"涨跌幅度": "-32.38",
			"name": "张江高科"
		},
		{
			"code": "603885",
			"涨跌幅度": "-26.32",
			"name": "吉祥航空"
		},
		{
			"code": "000869",
			"涨跌幅度": "-8.69",
			"name": "张 裕Ａ"
		},
		{
			"code": "000927",
			"涨跌幅度": "-22.8",
			"name": "一汽夏利"
		},
		{
			"code": "300370",
			"涨跌幅度": "2.35",
			"name": "安控科技"
		},
		{
			"code": "002497",
			"涨跌幅度": "-18.48",
			"name": "雅化集团"
		},
		{
			"code": "600351",
			"涨跌幅度": "-22.32",
			"name": "亚宝药业"
		},
		{
			"code": "600771",
			"涨跌幅度": "6.54",
			"name": "广誉远"
		},
		{
			"code": "002699",
			"涨跌幅度": "-34.37",
			"name": "美盛文化"
		},
		{
			"code": "300251",
			"涨跌幅度": "-24.41",
			"name": "光线传媒"
		},
		{
			"code": "000410",
			"涨跌幅度": "-42.63",
			"name": "沈阳机床"
		},
		{
			"code": "600323",
			"涨跌幅度": "-12.69",
			"name": "瀚蓝环境"
		},
		{
			"code": "000962",
			"涨跌幅度": "-21.33",
			"name": "*ST东钽"
		},
		{
			"code": "002428",
			"涨跌幅度": "-13.64",
			"name": "云南锗业"
		},
		{
			"code": "002187",
			"涨跌幅度": "-6.89",
			"name": "广百股份"
		},
		{
			"code": "600741",
			"涨跌幅度": "11.21",
			"name": "华域汽车"
		},
		{
			"code": "600033",
			"涨跌幅度": "-11.59",
			"name": "福建高速"
		},
		{
			"code": "600292",
			"涨跌幅度": "-45.44",
			"name": "远达环保"
		},
		{
			"code": "000096",
			"涨跌幅度": "-11.42",
			"name": "广聚能源"
		},
		{
			"code": "300324",
			"涨跌幅度": "-12.32",
			"name": "旋极信息"
		},
		{
			"code": "002273",
			"涨跌幅度": "-2.81",
			"name": "水晶光电"
		},
		{
			"code": "002698",
			"涨跌幅度": "-42.87",
			"name": "博实股份"
		},
		{
			"code": "600251",
			"涨跌幅度": "-25.73",
			"name": "冠农股份"
		},
		{
			"code": "002293",
			"涨跌幅度": "-17.28",
			"name": "罗莱生活"
		},
		{
			"code": "601018",
			"涨跌幅度": "-35.4",
			"name": "宁波港"
		},
		{
			"code": "600562",
			"涨跌幅度": "4.01",
			"name": "国睿科技"
		},
		{
			"code": "603968",
			"涨跌幅度": "-10.36",
			"name": "醋化股份"
		},
		{
			"code": "002422",
			"涨跌幅度": "-4.06",
			"name": "科伦药业"
		},
		{
			"code": "000975",
			"涨跌幅度": "31.58",
			"name": "银泰资源"
		},
		{
			"code": "600862",
			"涨跌幅度": "-40.1",
			"name": "中航高科"
		},
		{
			"code": "600073",
			"涨跌幅度": "-7.85",
			"name": "上海梅林"
		},
		{
			"code": "300247",
			"涨跌幅度": "-11.2",
			"name": "乐金健康"
		},
		{
			"code": "002060",
			"涨跌幅度": "-17.44",
			"name": "粤 水 电"
		},
		{
			"code": "002184",
			"涨跌幅度": "-35.37",
			"name": "海得控制"
		},
		{
			"code": "600874",
			"涨跌幅度": "-24.34",
			"name": "创业环保"
		},
		{
			"code": "600992",
			"涨跌幅度": "45.62",
			"name": "贵绳股份"
		},
		{
			"code": "002007",
			"涨跌幅度": "39.9",
			"name": "华兰生物"
		},
		{
			"code": "000792",
			"涨跌幅度": "-9.66",
			"name": "盐湖股份"
		},
		{
			"code": "600273",
			"涨跌幅度": "-3.19",
			"name": "嘉化能源"
		},
		{
			"code": "600971",
			"涨跌幅度": "17.26",
			"name": "恒源煤电"
		},
		{
			"code": "002074",
			"涨跌幅度": "-10.04",
			"name": "国轩高科"
		},
		{
			"code": "600839",
			"涨跌幅度": "-24.71",
			"name": "四川长虹"
		},
		{
			"code": "600422",
			"涨跌幅度": "-14.91",
			"name": "昆药集团"
		},
		{
			"code": "603589",
			"涨跌幅度": "-11.65",
			"name": "口子窖"
		},
		{
			"code": "601718",
			"涨跌幅度": "-29.43",
			"name": "际华集团"
		},
		{
			"code": "002262",
			"涨跌幅度": "-11.87",
			"name": "恩华药业"
		},
		{
			"code": "000166",
			"涨跌幅度": "-9.16",
			"name": "申万宏源"
		},
		{
			"code": "300166",
			"涨跌幅度": "-30.27",
			"name": "东方国信"
		},
		{
			"code": "000668",
			"涨跌幅度": "5.74",
			"name": "荣丰控股"
		},
		{
			"code": "600967",
			"涨跌幅度": "-28.35",
			"name": "北方创业"
		},
		{
			"code": "002581",
			"涨跌幅度": "-35.29",
			"name": "未名医药"
		},
		{
			"code": "000822",
			"涨跌幅度": "-9.94",
			"name": "山东海化"
		},
		{
			"code": "000404",
			"涨跌幅度": "14.3",
			"name": "华意压缩"
		},
		{
			"code": "002020",
			"涨跌幅度": "-15.41",
			"name": "京新药业"
		},
		{
			"code": "601933",
			"涨跌幅度": "-5.62",
			"name": "永辉超市"
		},
		{
			"code": "600827",
			"涨跌幅度": "-26.83",
			"name": "百联股份"
		},
		{
			"code": "002272",
			"涨跌幅度": "7.61",
			"name": "川润股份"
		},
		{
			"code": "600220",
			"涨跌幅度": "-16.91",
			"name": "江苏阳光"
		},
		{
			"code": "002528",
			"涨跌幅度": "-22.98",
			"name": "英飞拓"
		},
		{
			"code": "300312",
			"涨跌幅度": "-16.96",
			"name": "邦讯技术"
		},
		{
			"code": "603077",
			"涨跌幅度": "-29.35",
			"name": "和邦生物"
		},
		{
			"code": "600332",
			"涨跌幅度": "-7.5",
			"name": "白云山"
		},
		{
			"code": "600823",
			"涨跌幅度": "-10.24",
			"name": "世茂股份"
		},
		{
			"code": "300444",
			"涨跌幅度": "-17.9",
			"name": "双杰电气"
		},
		{
			"code": "601012",
			"涨跌幅度": "-3.5",
			"name": "隆基股份"
		},
		{
			"code": "600277",
			"涨跌幅度": "-28.24",
			"name": "亿利洁能"
		},
		{
			"code": "600219",
			"涨跌幅度": "30.5",
			"name": "南山铝业"
		},
		{
			"code": "600969",
			"涨跌幅度": "3.45",
			"name": "郴电国际"
		},
		{
			"code": "000979",
			"涨跌幅度": "-43.35",
			"name": "中弘股份"
		},
		{
			"code": "600691",
			"涨跌幅度": "-6.65",
			"name": "阳煤化工"
		},
		{
			"code": "600353",
			"涨跌幅度": "-3.35",
			"name": "旭光股份"
		},
		{
			"code": "000753",
			"涨跌幅度": "-17.89",
			"name": "漳州发展"
		},
		{
			"code": "000687",
			"涨跌幅度": "-33.33",
			"name": "华讯方舟"
		},
		{
			"code": "601311",
			"涨跌幅度": "-19.31",
			"name": "骆驼股份"
		},
		{
			"code": "600515",
			"涨跌幅度": "-24.49",
			"name": "海航基础"
		},
		{
			"code": "002476",
			"涨跌幅度": "14.55",
			"name": "宝莫股份"
		},
		{
			"code": "002083",
			"涨跌幅度": "-0.41",
			"name": "孚日股份"
		},
		{
			"code": "300291",
			"涨跌幅度": "-37.5",
			"name": "华录百纳"
		},
		{
			"code": "002266",
			"涨跌幅度": "-28.64",
			"name": "浙富控股"
		},
		{
			"code": "600185",
			"涨跌幅度": "-18.83",
			"name": "格力地产"
		},
		{
			"code": "000755",
			"涨跌幅度": "-0.22",
			"name": "山西三维"
		},
		{
			"code": "000971",
			"涨跌幅度": "-0.42",
			"name": "高升控股"
		},
		{
			"code": "600977",
			"涨跌幅度": "154.39",
			"name": "中国电影"
		},
		{
			"code": "300038",
			"涨跌幅度": "6.87",
			"name": "梅泰诺"
		},
		{
			"code": "002690",
			"涨跌幅度": "-32.89",
			"name": "美亚光电"
		},
		{
			"code": "600229",
			"涨跌幅度": "-34.39",
			"name": "城市传媒"
		},
		{
			"code": "002473",
			"涨跌幅度": "-14.55",
			"name": "圣莱达"
		},
		{
			"code": "002369",
			"涨跌幅度": "-26.33",
			"name": "卓翼科技"
		},
		{
			"code": "002107",
			"涨跌幅度": "-38.57",
			"name": "沃华医药"
		},
		{
			"code": "300228",
			"涨跌幅度": "-11.7",
			"name": "富瑞特装"
		},
		{
			"code": "600188",
			"涨跌幅度": "22.54",
			"name": "兖州煤业"
		},
		{
			"code": "000713",
			"涨跌幅度": "-0.34",
			"name": "丰乐种业"
		},
		{
			"code": "002275",
			"涨跌幅度": "-7.35",
			"name": "桂林三金"
		},
		{
			"code": "601007",
			"涨跌幅度": "-15.99",
			"name": "金陵饭店"
		},
		{
			"code": "002290",
			"涨跌幅度": "-37.66",
			"name": "禾盛新材"
		},
		{
			"code": "002398",
			"涨跌幅度": "-16.42",
			"name": "建研集团"
		},
		{
			"code": "000860",
			"涨跌幅度": "11.96",
			"name": "顺鑫农业"
		},
		{
			"code": "000980",
			"涨跌幅度": "157.61",
			"name": "金马股份"
		},
		{
			"code": "600162",
			"涨跌幅度": "-29.98",
			"name": "香江控股"
		},
		{
			"code": "603027",
			"涨跌幅度": "260.93",
			"name": "千禾味业"
		},
		{
			"code": "300462",
			"涨跌幅度": "17.1",
			"name": "华铭智能"
		},
		{
			"code": "002247",
			"涨跌幅度": "70.57",
			"name": "帝龙文化"
		},
		{
			"code": "600180",
			"涨跌幅度": "-47.15",
			"name": "瑞茂通"
		},
		{
			"code": "600177",
			"涨跌幅度": "-2.97",
			"name": "雅戈尔"
		},
		{
			"code": "601225",
			"涨跌幅度": "11.0",
			"name": "陕西煤业"
		},
		{
			"code": "002521",
			"涨跌幅度": "-6.42",
			"name": "齐峰新材"
		},
		{
			"code": "603313",
			"涨跌幅度": "113.38",
			"name": "恒康家居"
		},
		{
			"code": "601588",
			"涨跌幅度": "-17.46",
			"name": "北辰实业"
		},
		{
			"code": "600653",
			"涨跌幅度": "-19.74",
			"name": "申华控股"
		},
		{
			"code": "002536",
			"涨跌幅度": "-40.33",
			"name": "西泵股份"
		},
		{
			"code": "600657",
			"涨跌幅度": "-5.52",
			"name": "信达地产"
		},
		{
			"code": "300034",
			"涨跌幅度": "0.19",
			"name": "钢研高纳"
		},
		{
			"code": "002630",
			"涨跌幅度": "5.6",
			"name": "华西能源"
		},
		{
			"code": "300108",
			"涨跌幅度": "-29.32",
			"name": "双龙股份"
		},
		{
			"code": "603599",
			"涨跌幅度": "-34.95",
			"name": "广信股份"
		},
		{
			"code": "600848",
			"涨跌幅度": "-0.71",
			"name": "上海临港"
		},
		{
			"code": "300337",
			"涨跌幅度": "14.67",
			"name": "银邦股份"
		},
		{
			"code": "601789",
			"涨跌幅度": "22.34",
			"name": "宁波建工"
		},
		{
			"code": "002140",
			"涨跌幅度": "-20.38",
			"name": "东华科技"
		},
		{
			"code": "600137",
			"涨跌幅度": "16.78",
			"name": "浪莎股份"
		},
		{
			"code": "600686",
			"涨跌幅度": "-28.54",
			"name": "金龙汽车"
		},
		{
			"code": "300203",
			"涨跌幅度": "-12.07",
			"name": "聚光科技"
		},
		{
			"code": "600676",
			"涨跌幅度": "-28.88",
			"name": "交运股份"
		},
		{
			"code": "000926",
			"涨跌幅度": "-20.78",
			"name": "福星股份"
		},
		{
			"code": "300278",
			"涨跌幅度": "6.4",
			"name": "华昌达"
		},
		{
			"code": "601567",
			"涨跌幅度": "-15.54",
			"name": "三星医疗"
		},
		{
			"code": "002153",
			"涨跌幅度": "-36.49",
			"name": "石基信息"
		},
		{
			"code": "300172",
			"涨跌幅度": "-10.11",
			"name": "中电环保"
		},
		{
			"code": "600647",
			"涨跌幅度": "68.71",
			"name": "同达创业"
		},
		{
			"code": "002091",
			"涨跌幅度": "-19.18",
			"name": "江苏国泰"
		},
		{
			"code": "600537",
			"涨跌幅度": "-11.08",
			"name": "亿晶光电"
		},
		{
			"code": "002772",
			"涨跌幅度": "-9.67",
			"name": "众兴菌业"
		},
		{
			"code": "603421",
			"涨跌幅度": "184.72",
			"name": "鼎信通讯"
		},
		{
			"code": "002109",
			"涨跌幅度": "-12.88",
			"name": "*ST兴化"
		},
		{
			"code": "300302",
			"涨跌幅度": "-16.85",
			"name": "同有科技"
		},
		{
			"code": "300151",
			"涨跌幅度": "-25.19",
			"name": "昌红科技"
		},
		{
			"code": "300263",
			"涨跌幅度": "-19.84",
			"name": "隆华节能"
		},
		{
			"code": "603997",
			"涨跌幅度": "-23.29",
			"name": "继峰股份"
		},
		{
			"code": "600711",
			"涨跌幅度": "-5.6",
			"name": "盛屯矿业"
		},
		{
			"code": "000928",
			"涨跌幅度": "1.5",
			"name": "中钢国际"
		},
		{
			"code": "600126",
			"涨跌幅度": "15.68",
			"name": "杭钢股份"
		},
		{
			"code": "002156",
			"涨跌幅度": "-19.39",
			"name": "通富微电"
		},
		{
			"code": "002162",
			"涨跌幅度": "-44.06",
			"name": "悦心健康"
		},
		{
			"code": "300182",
			"涨跌幅度": "-30.77",
			"name": "捷成股份"
		},
		{
			"code": "002530",
			"涨跌幅度": "44.85",
			"name": "丰东股份"
		},
		{
			"code": "002527",
			"涨跌幅度": "-33.14",
			"name": "新时达"
		},
		{
			"code": "000901",
			"涨跌幅度": "-36.27",
			"name": "航天科技"
		},
		{
			"code": "002006",
			"涨跌幅度": "-11.48",
			"name": "精功科技"
		},
		{
			"code": "000606",
			"涨跌幅度": "34.65",
			"name": "*ST易桥"
		},
		{
			"code": "600975",
			"涨跌幅度": "9.71",
			"name": "新五丰"
		},
		{
			"code": "000818",
			"涨跌幅度": "65.78",
			"name": "方大化工"
		},
		{
			"code": "600461",
			"涨跌幅度": "-5.29",
			"name": "洪城水业"
		},
		{
			"code": "603567",
			"涨跌幅度": "-21.3",
			"name": "珍宝岛"
		},
		{
			"code": "002561",
			"涨跌幅度": "-5.02",
			"name": "徐家汇"
		},
		{
			"code": "600200",
			"涨跌幅度": "-34.27",
			"name": "江苏吴中"
		},
		{
			"code": "300170",
			"涨跌幅度": "-29.03",
			"name": "汉得信息"
		},
		{
			"code": "600061",
			"涨跌幅度": "-29.34",
			"name": "国投安信"
		},
		{
			"code": "002418",
			"涨跌幅度": "3.77",
			"name": "康盛股份"
		},
		{
			"code": "600811",
			"涨跌幅度": "-12.36",
			"name": "东方集团"
		},
		{
			"code": "002076",
			"涨跌幅度": "-9.03",
			"name": "雪 莱 特"
		},
		{
			"code": "300408",
			"涨跌幅度": "-2.0",
			"name": "三环集团"
		},
		{
			"code": "600354",
			"涨跌幅度": "-12.22",
			"name": "敦煌种业"
		},
		{
			"code": "601388",
			"涨跌幅度": "-32.25",
			"name": "怡球资源"
		},
		{
			"code": "000859",
			"涨跌幅度": "-7.59",
			"name": "国风塑业"
		},
		{
			"code": "002230",
			"涨跌幅度": "-17.09",
			"name": "科大讯飞"
		},
		{
			"code": "000712",
			"涨跌幅度": "-9.93",
			"name": "锦龙股份"
		},
		{
			"code": "300326",
			"涨跌幅度": "7.1",
			"name": "凯利泰"
		},
		{
			"code": "600300",
			"涨跌幅度": "16.53",
			"name": "维维股份"
		},
		{
			"code": "600569",
			"涨跌幅度": "2.3",
			"name": "安阳钢铁"
		},
		{
			"code": "002807",
			"涨跌幅度": "107.35",
			"name": "江阴银行"
		},
		{
			"code": "002375",
			"涨跌幅度": "-27.47",
			"name": "亚厦股份"
		},
		{
			"code": "000698",
			"涨跌幅度": "-1.23",
			"name": "沈阳化工"
		},
		{
			"code": "002167",
			"涨跌幅度": "31.18",
			"name": "东方锆业"
		},
		{
			"code": "600365",
			"涨跌幅度": "-16.41",
			"name": "通葡股份"
		},
		{
			"code": "002121",
			"涨跌幅度": "-15.64",
			"name": "科陆电子"
		},
		{
			"code": "600302",
			"涨跌幅度": "13.67",
			"name": "标准股份"
		},
		{
			"code": "603167",
			"涨跌幅度": "-9.91",
			"name": "渤海轮渡"
		},
		{
			"code": "600814",
			"涨跌幅度": "-11.16",
			"name": "杭州解百"
		},
		{
			"code": "002540",
			"涨跌幅度": "-11.87",
			"name": "亚太科技"
		},
		{
			"code": "300318",
			"涨跌幅度": "-19.64",
			"name": "博晖创新"
		},
		{
			"code": "002610",
			"涨跌幅度": "15.38",
			"name": "爱康科技"
		},
		{
			"code": "002753",
			"涨跌幅度": "2.77",
			"name": "永东股份"
		},
		{
			"code": "002738",
			"涨跌幅度": "7.0",
			"name": "中矿资源"
		},
		{
			"code": "600982",
			"涨跌幅度": "-24.36",
			"name": "宁波热电"
		},
		{
			"code": "002470",
			"涨跌幅度": "-18.0",
			"name": "金正大"
		},
		{
			"code": "000598",
			"涨跌幅度": "-16.64",
			"name": "兴蓉环境"
		},
		{
			"code": "002004",
			"涨跌幅度": "-30.43",
			"name": "华邦健康"
		},
		{
			"code": "600831",
			"涨跌幅度": "-1.46",
			"name": "广电网络"
		},
		{
			"code": "300142",
			"涨跌幅度": "-20.09",
			"name": "沃森生物"
		},
		{
			"code": "300266",
			"涨跌幅度": "0.47",
			"name": "兴源环境"
		},
		{
			"code": "600586",
			"涨跌幅度": "-17.86",
			"name": "金晶科技"
		},
		{
			"code": "600281",
			"涨跌幅度": "-9.84",
			"name": "太化股份"
		},
		{
			"code": "000789",
			"涨跌幅度": "-4.73",
			"name": "万年青"
		},
		{
			"code": "600007",
			"涨跌幅度": "18.54",
			"name": "中国国贸"
		},
		{
			"code": "000816",
			"涨跌幅度": "-19.27",
			"name": "智慧农业"
		},
		{
			"code": "300262",
			"涨跌幅度": "-14.69",
			"name": "巴安水务"
		},
		{
			"code": "002593",
			"涨跌幅度": "-29.16",
			"name": "日上集团"
		},
		{
			"code": "000002",
			"涨跌幅度": "66.77",
			"name": "万 科Ａ"
		},
		{
			"code": "600690",
			"涨跌幅度": "9.99",
			"name": "青岛海尔"
		},
		{
			"code": "002445",
			"涨跌幅度": "-23.25",
			"name": "中南文化"
		},
		{
			"code": "002590",
			"涨跌幅度": "8.23",
			"name": "万安科技"
		},
		{
			"code": "000156",
			"涨跌幅度": "-42.13",
			"name": "华数传媒"
		},
		{
			"code": "600138",
			"涨跌幅度": "15.99",
			"name": "中青旅"
		},
		{
			"code": "002301",
			"涨跌幅度": "1.55",
			"name": "齐心集团"
		},
		{
			"code": "002177",
			"涨跌幅度": "-20.7",
			"name": "御银股份"
		},
		{
			"code": "000831",
			"涨跌幅度": "-43.1",
			"name": "*ST五稀"
		},
		{
			"code": "600448",
			"涨跌幅度": "-16.47",
			"name": "华纺股份"
		},
		{
			"code": "002568",
			"涨跌幅度": "-51.24",
			"name": "百润股份"
		},
		{
			"code": "002605",
			"涨跌幅度": "-37.08",
			"name": "姚记扑克"
		},
		{
			"code": "002095",
			"涨跌幅度": "-40.23",
			"name": "生 意 宝"
		},
		{
			"code": "600039",
			"涨跌幅度": "2.64",
			"name": "四川路桥"
		},
		{
			"code": "300341",
			"涨跌幅度": "-0.98",
			"name": "麦迪电气"
		},
		{
			"code": "600767",
			"涨跌幅度": "22.32",
			"name": "运盛医疗"
		},
		{
			"code": "002597",
			"涨跌幅度": "46.95",
			"name": "金禾实业"
		},
		{
			"code": "300269",
			"涨跌幅度": "-20.66",
			"name": "联建光电"
		},
		{
			"code": "000685",
			"涨跌幅度": "-17.56",
			"name": "中山公用"
		},
		{
			"code": "000519",
			"涨跌幅度": "-29.4",
			"name": "江南红箭"
		},
		{
			"code": "600121",
			"涨跌幅度": "-22.95",
			"name": "郑州煤电"
		},
		{
			"code": "000736",
			"涨跌幅度": "13.19",
			"name": "中房地产"
		},
		{
			"code": "600171",
			"涨跌幅度": "-25.92",
			"name": "上海贝岭"
		},
		{
			"code": "600130",
			"涨跌幅度": "14.65",
			"name": "波导股份"
		},
		{
			"code": "601002",
			"涨跌幅度": "-14.25",
			"name": "晋亿实业"
		},
		{
			"code": "002666",
			"涨跌幅度": "-24.49",
			"name": "德联集团"
		},
		{
			"code": "300068",
			"涨跌幅度": "8.59",
			"name": "南都电源"
		},
		{
			"code": "300239",
			"涨跌幅度": "17.33",
			"name": "东宝生物"
		},
		{
			"code": "300117",
			"涨跌幅度": "34.43",
			"name": "嘉寓股份"
		},
		{
			"code": "000835",
			"涨跌幅度": "-20.14",
			"name": "长城动漫"
		},
		{
			"code": "000599",
			"涨跌幅度": "-0.87",
			"name": "青岛双星"
		},
		{
			"code": "002585",
			"涨跌幅度": "-10.77",
			"name": "双星新材"
		},
		{
			"code": "002427",
			"涨跌幅度": "24.97",
			"name": "尤夫股份"
		},
		{
			"code": "000423",
			"涨跌幅度": "27.94",
			"name": "东阿阿胶"
		},
		{
			"code": "000034",
			"涨跌幅度": "47.69",
			"name": "神州数码"
		},
		{
			"code": "600622",
			"涨跌幅度": "2.04",
			"name": "嘉宝集团"
		},
		{
			"code": "002089",
			"涨跌幅度": "-11.69",
			"name": "新 海 宜"
		},
		{
			"code": "002373",
			"涨跌幅度": "-29.1",
			"name": "千方科技"
		},
		{
			"code": "002582",
			"涨跌幅度": "148.72",
			"name": "好想你"
		},
		{
			"code": "600516",
			"涨跌幅度": "-28.5",
			"name": "方大炭素"
		},
		{
			"code": "600834",
			"涨跌幅度": "-13.12",
			"name": "申通地铁"
		},
		{
			"code": "300303",
			"涨跌幅度": "-16.7",
			"name": "聚飞光电"
		},
		{
			"code": "600470",
			"涨跌幅度": "-9.16",
			"name": "六国化工"
		},
		{
			"code": "000683",
			"涨跌幅度": "-0.34",
			"name": "远兴能源"
		},
		{
			"code": "601339",
			"涨跌幅度": "-23.72",
			"name": "百隆东方"
		},
		{
			"code": "002787",
			"涨跌幅度": "301.01",
			"name": "华源包装"
		},
		{
			"code": "600601",
			"涨跌幅度": "-21.78",
			"name": "方正科技"
		},
		{
			"code": "300156",
			"涨跌幅度": "20.86",
			"name": "神雾环保"
		},
		{
			"code": "601111",
			"涨跌幅度": "-4.61",
			"name": "中国国航"
		},
		{
			"code": "600207",
			"涨跌幅度": "-25.98",
			"name": "安彩高科"
		},
		{
			"code": "000938",
			"涨跌幅度": "-35.54",
			"name": "紫光股份"
		},
		{
			"code": "002038",
			"涨跌幅度": "-13.02",
			"name": "双鹭药业"
		},
		{
			"code": "600624",
			"涨跌幅度": "-31.41",
			"name": "复旦复华"
		},
		{
			"code": "002407",
			"涨跌幅度": "46.56",
			"name": "多氟多"
		},
		{
			"code": "000839",
			"涨跌幅度": "9.77",
			"name": "中信国安"
		},
		{
			"code": "000620",
			"涨跌幅度": "-15.69",
			"name": "新华联"
		},
		{
			"code": "002124",
			"涨跌幅度": "-7.46",
			"name": "天邦股份"
		},
		{
			"code": "600635",
			"涨跌幅度": "-33.61",
			"name": "大众公用"
		},
		{
			"code": "002222",
			"涨跌幅度": "16.01",
			"name": "福晶科技"
		},
		{
			"code": "002028",
			"涨跌幅度": "-1.46",
			"name": "思源电气"
		},
		{
			"code": "002344",
			"涨跌幅度": "-31.69",
			"name": "海宁皮城"
		},
		{
			"code": "601518",
			"涨跌幅度": "-7.02",
			"name": "吉林高速"
		},
		{
			"code": "600637",
			"涨跌幅度": "-29.06",
			"name": "东方明珠"
		},
		{
			"code": "600628",
			"涨跌幅度": "-9.35",
			"name": "新世界"
		},
		{
			"code": "002737",
			"涨跌幅度": "-24.26",
			"name": "葵花药业"
		},
		{
			"code": "000738",
			"涨跌幅度": "-20.99",
			"name": "中航动控"
		},
		{
			"code": "600361",
			"涨跌幅度": "-5.18",
			"name": "华联综超"
		},
		{
			"code": "002516",
			"涨跌幅度": "-4.92",
			"name": "旷达科技"
		},
		{
			"code": "002208",
			"涨跌幅度": "-28.06",
			"name": "合肥城建"
		},
		{
			"code": "600717",
			"涨跌幅度": "-2.39",
			"name": "天津港"
		},
		{
			"code": "300129",
			"涨跌幅度": "-9.89",
			"name": "泰胜风能"
		},
		{
			"code": "300196",
			"涨跌幅度": "18.54",
			"name": "长海股份"
		},
		{
			"code": "300007",
			"涨跌幅度": "-33.37",
			"name": "汉威电子"
		},
		{
			"code": "002583",
			"涨跌幅度": "21.08",
			"name": "海能达"
		},
		{
			"code": "601958",
			"涨跌幅度": "1.61",
			"name": "金钼股份"
		},
		{
			"code": "600644",
			"涨跌幅度": "15.97",
			"name": "乐山电力"
		},
		{
			"code": "300264",
			"涨跌幅度": "14.45",
			"name": "佳创视讯"
		},
		{
			"code": "002106",
			"涨跌幅度": "-6.92",
			"name": "莱宝高科"
		},
		{
			"code": "600756",
			"涨跌幅度": "-16.46",
			"name": "浪潮软件"
		},
		{
			"code": "300307",
			"涨跌幅度": "-22.8",
			"name": "慈星股份"
		},
		{
			"code": "600587",
			"涨跌幅度": "-35.28",
			"name": "新华医疗"
		},
		{
			"code": "601231",
			"涨跌幅度": "-18.09",
			"name": "环旭电子"
		},
		{
			"code": "600858",
			"涨跌幅度": "-1.83",
			"name": "银座股份"
		},
		{
			"code": "600531",
			"涨跌幅度": "106.45",
			"name": "豫光金铅"
		},
		{
			"code": "002130",
			"涨跌幅度": "-31.19",
			"name": "沃尔核材"
		},
		{
			"code": "600109",
			"涨跌幅度": "-8.0",
			"name": "国金证券"
		},
		{
			"code": "600806",
			"涨跌幅度": "-45.81",
			"name": "*ST昆机"
		},
		{
			"code": "601985",
			"涨跌幅度": "-24.58",
			"name": "中国核电"
		},
		{
			"code": "600780",
			"涨跌幅度": "-19.61",
			"name": "通宝能源"
		},
		{
			"code": "600231",
			"涨跌幅度": "-11.96",
			"name": "凌钢股份"
		},
		{
			"code": "002566",
			"涨跌幅度": "-19.14",
			"name": "益盛药业"
		},
		{
			"code": "600114",
			"涨跌幅度": "3.69",
			"name": "东睦股份"
		},
		{
			"code": "600052",
			"涨跌幅度": "-8.31",
			"name": "浙江广厦"
		},
		{
			"code": "002268",
			"涨跌幅度": "-41.93",
			"name": "卫 士 通"
		},
		{
			"code": "000933",
			"涨跌幅度": "29.93",
			"name": "*ST神火"
		},
		{
			"code": "002281",
			"涨跌幅度": "26.45",
			"name": "光迅科技"
		},
		{
			"code": "601100",
			"涨跌幅度": "-0.94",
			"name": "恒立液压"
		},
		{
			"code": "002318",
			"涨跌幅度": "-23.93",
			"name": "久立特材"
		},
		{
			"code": "600282",
			"涨跌幅度": "-11.46",
			"name": "南钢股份"
		},
		{
			"code": "601238",
			"涨跌幅度": "21.83",
			"name": "广汽集团"
		},
		{
			"code": "002195",
			"涨跌幅度": "-30.88",
			"name": "二三四五"
		},
		{
			"code": "000702",
			"涨跌幅度": "9.78",
			"name": "正虹科技"
		},
		{
			"code": "601058",
			"涨跌幅度": "27.38",
			"name": "赛轮金宇"
		},
		{
			"code": "002405",
			"涨跌幅度": "-20.07",
			"name": "四维图新"
		},
		{
			"code": "601258",
			"涨跌幅度": "-28.21",
			"name": "庞大集团"
		},
		{
			"code": "600415",
			"涨跌幅度": "-11.03",
			"name": "小商品城"
		},
		{
			"code": "300261",
			"涨跌幅度": "31.68",
			"name": "雅本化学"
		},
		{
			"code": "002691",
			"涨跌幅度": "29.64",
			"name": "冀凯股份"
		},
		{
			"code": "002741",
			"涨跌幅度": "-52.18",
			"name": "光华科技"
		},
		{
			"code": "002354",
			"涨跌幅度": "-32.74",
			"name": "天神娱乐"
		},
		{
			"code": "600510",
			"涨跌幅度": "-22.48",
			"name": "黑牡丹"
		},
		{
			"code": "600008",
			"涨跌幅度": "-19.77",
			"name": "首创股份"
		},
		{
			"code": "601777",
			"涨跌幅度": "-48.19",
			"name": "力帆股份"
		},
		{
			"code": "002586",
			"涨跌幅度": "15.75",
			"name": "围海股份"
		},
		{
			"code": "600778",
			"涨跌幅度": "-3.25",
			"name": "友好集团"
		},
		{
			"code": "002551",
			"涨跌幅度": "-25.82",
			"name": "尚荣医疗"
		},
		{
			"code": "300230",
			"涨跌幅度": "12.76",
			"name": "永利股份"
		},
		{
			"code": "600727",
			"涨跌幅度": "-5.71",
			"name": "鲁北化工"
		},
		{
			"code": "000090",
			"涨跌幅度": "-27.53",
			"name": "天健集团"
		},
		{
			"code": "000022",
			"涨跌幅度": "10.56",
			"name": "深赤湾Ａ"
		},
		{
			"code": "002219",
			"涨跌幅度": "-14.63",
			"name": "恒康医疗"
		},
		{
			"code": "600897",
			"涨跌幅度": "10.93",
			"name": "厦门空港"
		},
		{
			"code": "001696",
			"涨跌幅度": "-29.7",
			"name": "宗申动力"
		},
		{
			"code": "603090",
			"涨跌幅度": "436.32",
			"name": "宏盛股份"
		},
		{
			"code": "300185",
			"涨跌幅度": "8.25",
			"name": "通裕重工"
		},
		{
			"code": "300284",
			"涨跌幅度": "2.32",
			"name": "苏交科"
		},
		{
			"code": "002036",
			"涨跌幅度": "-32.29",
			"name": "联创电子"
		},
		{
			"code": "300167",
			"涨跌幅度": "-27.82",
			"name": "迪威视讯"
		},
		{
			"code": "000948",
			"涨跌幅度": "-34.6",
			"name": "南天信息"
		},
		{
			"code": "600405",
			"涨跌幅度": "-27.77",
			"name": "动力源"
		},
		{
			"code": "000876",
			"涨跌幅度": "-8.89",
			"name": "新 希 望"
		},
		{
			"code": "002308",
			"涨跌幅度": "-23.53",
			"name": "威创股份"
		},
		{
			"code": "002461",
			"涨跌幅度": "-8.64",
			"name": "珠江啤酒"
		},
		{
			"code": "002017",
			"涨跌幅度": "-10.07",
			"name": "东信和平"
		},
		{
			"code": "002005",
			"涨跌幅度": "-35.67",
			"name": "德豪润达"
		},
		{
			"code": "000039",
			"涨跌幅度": "-18.71",
			"name": "中集集团"
		},
		{
			"code": "300043",
			"涨跌幅度": "-22.64",
			"name": "星辉娱乐"
		},
		{
			"code": "000428",
			"涨跌幅度": "-25.67",
			"name": "华天酒店"
		},
		{
			"code": "603117",
			"涨跌幅度": "-35.25",
			"name": "万林股份"
		},
		{
			"code": "600063",
			"涨跌幅度": "-22.63",
			"name": "皖维高新"
		},
		{
			"code": "002493",
			"涨跌幅度": "5.18",
			"name": "荣盛石化"
		},
		{
			"code": "601336",
			"涨跌幅度": "2.75",
			"name": "新华保险"
		},
		{
			"code": "002388",
			"涨跌幅度": "0.54",
			"name": "新亚制程"
		},
		{
			"code": "000650",
			"涨跌幅度": "-27.65",
			"name": "仁和药业"
		},
		{
			"code": "002008",
			"涨跌幅度": "-4.41",
			"name": "大族激光"
		},
		{
			"code": "600358",
			"涨跌幅度": "-39.91",
			"name": "国旅联合"
		},
		{
			"code": "300049",
			"涨跌幅度": "-26.44",
			"name": "福瑞股份"
		},
		{
			"code": "300271",
			"涨跌幅度": "-2.76",
			"name": "华宇软件"
		},
		{
			"code": "601179",
			"涨跌幅度": "-7.38",
			"name": "中国西电"
		},
		{
			"code": "002654",
			"涨跌幅度": "10.7",
			"name": "万润科技"
		},
		{
			"code": "002220",
			"涨跌幅度": "-1.27",
			"name": "天宝股份"
		},
		{
			"code": "002132",
			"涨跌幅度": "40.13",
			"name": "恒星科技"
		},
		{
			"code": "002185",
			"涨跌幅度": "-7.59",
			"name": "华天科技"
		},
		{
			"code": "000737",
			"涨跌幅度": "5.39",
			"name": "南风化工"
		},
		{
			"code": "603887",
			"涨跌幅度": "348.49",
			"name": "城地股份"
		},
		{
			"code": "601229",
			"涨跌幅度": "20.73",
			"name": "上海银行"
		},
		{
			"code": "300001",
			"涨跌幅度": "-30.71",
			"name": "特锐德"
		},
		{
			"code": "600533",
			"涨跌幅度": "14.37",
			"name": "栖霞建设"
		},
		{
			"code": "000610",
			"涨跌幅度": "2.97",
			"name": "西安旅游"
		},
		{
			"code": "300451",
			"涨跌幅度": "-45.2",
			"name": "创业软件"
		},
		{
			"code": "000032",
			"涨跌幅度": "-24.17",
			"name": "深桑达Ａ"
		},
		{
			"code": "002614",
			"涨跌幅度": "-7.6",
			"name": "蒙发利"
		},
		{
			"code": "002487",
			"涨跌幅度": "-30.51",
			"name": "大金重工"
		},
		{
			"code": "600321",
			"涨跌幅度": "39.96",
			"name": "国栋建设"
		},
		{
			"code": "600391",
			"涨跌幅度": "-24.92",
			"name": "成发科技"
		},
		{
			"code": "600662",
			"涨跌幅度": "-24.2",
			"name": "强生控股"
		},
		{
			"code": "000757",
			"涨跌幅度": "-2.47",
			"name": "浩物股份"
		},
		{
			"code": "600389",
			"涨跌幅度": "25.84",
			"name": "江山股份"
		},
		{
			"code": "002302",
			"涨跌幅度": "-9.44",
			"name": "西部建设"
		},
		{
			"code": "600291",
			"涨跌幅度": "-33.58",
			"name": "西水股份"
		},
		{
			"code": "002507",
			"涨跌幅度": "19.23",
			"name": "涪陵榨菜"
		},
		{
			"code": "002364",
			"涨跌幅度": "-4.41",
			"name": "中恒电气"
		},
		{
			"code": "002201",
			"涨跌幅度": "31.25",
			"name": "九鼎新材"
		},
		{
			"code": "600611",
			"涨跌幅度": "-27.92",
			"name": "大众交通"
		},
		{
			"code": "300246",
			"涨跌幅度": "7.59",
			"name": "宝莱特"
		},
		{
			"code": "000905",
			"涨跌幅度": "-15.22",
			"name": "厦门港务"
		},
		{
			"code": "603678",
			"涨跌幅度": "-10.26",
			"name": "火炬电子"
		},
		{
			"code": "002602",
			"涨跌幅度": "180.44",
			"name": "世纪华通"
		},
		{
			"code": "600088",
			"涨跌幅度": "-12.33",
			"name": "中视传媒"
		},
		{
			"code": "002146",
			"涨跌幅度": "-14.25",
			"name": "荣盛发展"
		},
		{
			"code": "000886",
			"涨跌幅度": "-21.36",
			"name": "海南高速"
		},
		{
			"code": "600055",
			"涨跌幅度": "-24.93",
			"name": "万东医疗"
		},
		{
			"code": "600101",
			"涨跌幅度": "7.26",
			"name": "明星电力"
		},
		{
			"code": "300400",
			"涨跌幅度": "30.79",
			"name": "劲拓股份"
		},
		{
			"code": "300294",
			"涨跌幅度": "55.53",
			"name": "博雅生物"
		},
		{
			"code": "300267",
			"涨跌幅度": "-0.34",
			"name": "尔康制药"
		},
		{
			"code": "002641",
			"涨跌幅度": "-11.36",
			"name": "永高股份"
		},
		{
			"code": "600279",
			"涨跌幅度": "-12.17",
			"name": "重庆港九"
		},
		{
			"code": "002148",
			"涨跌幅度": "-4.33",
			"name": "北纬通信"
		},
		{
			"code": "300106",
			"涨跌幅度": "7.13",
			"name": "西部牧业"
		},
		{
			"code": "601118",
			"涨跌幅度": "-6.12",
			"name": "海南橡胶"
		},
		{
			"code": "002689",
			"涨跌幅度": "-26.44",
			"name": "远大智能"
		},
		{
			"code": "002157",
			"涨跌幅度": "0.98",
			"name": "正邦科技"
		},
		{
			"code": "000010",
			"涨跌幅度": "-16.52",
			"name": "美丽生态"
		},
		{
			"code": "002758",
			"涨跌幅度": "-18.92",
			"name": "华通医药"
		},
		{
			"code": "601633",
			"涨跌幅度": "-10.1",
			"name": "长城汽车"
		},
		{
			"code": "300373",
			"涨跌幅度": "-8.94",
			"name": "扬杰科技"
		},
		{
			"code": "603108",
			"涨跌幅度": "4.03",
			"name": "润达医疗"
		},
		{
			"code": "002072",
			"涨跌幅度": "2.97",
			"name": "凯瑞德"
		},
		{
			"code": "002084",
			"涨跌幅度": "-5.2",
			"name": "海鸥卫浴"
		},
		{
			"code": "000690",
			"涨跌幅度": "-20.52",
			"name": "宝新能源"
		},
		{
			"code": "600287",
			"涨跌幅度": "-5.32",
			"name": "江苏舜天"
		},
		{
			"code": "603128",
			"涨跌幅度": "-6.05",
			"name": "华贸物流"
		},
		{
			"code": "600959",
			"涨跌幅度": "-33.1",
			"name": "江苏有线"
		},
		{
			"code": "300132",
			"涨跌幅度": "23.15",
			"name": "青松股份"
		},
		{
			"code": "601377",
			"涨跌幅度": "-15.03",
			"name": "兴业证券"
		},
		{
			"code": "601899",
			"涨跌幅度": "4.39",
			"name": "紫金矿业"
		},
		{
			"code": "300397",
			"涨跌幅度": "-43.43",
			"name": "天和防务"
		},
		{
			"code": "603609",
			"涨跌幅度": "8.31",
			"name": "禾丰牧业"
		},
		{
			"code": "600960",
			"涨跌幅度": "-14.05",
			"name": "渤海活塞"
		},
		{
			"code": "600037",
			"涨跌幅度": "-28.07",
			"name": "歌华有线"
		},
		{
			"code": "000925",
			"涨跌幅度": "27.71",
			"name": "众合科技"
		},
		{
			"code": "000733",
			"涨跌幅度": "-18.87",
			"name": "振华科技"
		},
		{
			"code": "600499",
			"涨跌幅度": "-17.52",
			"name": "科达洁能"
		},
		{
			"code": "002403",
			"涨跌幅度": "8.06",
			"name": "爱仕达"
		},
		{
			"code": "000779",
			"涨跌幅度": "40.65",
			"name": "三毛派神"
		},
		{
			"code": "002310",
			"涨跌幅度": "-7.13",
			"name": "东方园林"
		},
		{
			"code": "000430",
			"涨跌幅度": "-8.48",
			"name": "张家界"
		},
		{
			"code": "600517",
			"涨跌幅度": "-20.98",
			"name": "置信电气"
		},
		{
			"code": "002797",
			"涨跌幅度": "206.54",
			"name": "第一创业"
		},
		{
			"code": "002706",
			"涨跌幅度": "-6.2",
			"name": "良信电器"
		},
		{
			"code": "600730",
			"涨跌幅度": "-37.2",
			"name": "中国高科"
		},
		{
			"code": "600521",
			"涨跌幅度": "29.94",
			"name": "华海药业"
		},
		{
			"code": "300274",
			"涨跌幅度": "-25.18",
			"name": "阳光电源"
		},
		{
			"code": "000776",
			"涨跌幅度": "13.31",
			"name": "广发证券"
		},
		{
			"code": "002103",
			"涨跌幅度": "47.84",
			"name": "广博股份"
		},
		{
			"code": "600530",
			"涨跌幅度": "-2.0",
			"name": "交大昂立"
		},
		{
			"code": "600195",
			"涨跌幅度": "21.42",
			"name": "中牧股份"
		},
		{
			"code": "002026",
			"涨跌幅度": "13.8",
			"name": "山东威达"
		},
		{
			"code": "300277",
			"涨跌幅度": "5.79",
			"name": "海联讯"
		},
		{
			"code": "002448",
			"涨跌幅度": "1.98",
			"name": "中原内配"
		},
		{
			"code": "601989",
			"涨跌幅度": "-26.77",
			"name": "中国重工"
		},
		{
			"code": "000766",
			"涨跌幅度": "10.8",
			"name": "通化金马"
		},
		{
			"code": "600882",
			"涨跌幅度": "4.51",
			"name": "广泽股份"
		},
		{
			"code": "000681",
			"涨跌幅度": "-36.37",
			"name": "视觉中国"
		},
		{
			"code": "002137",
			"涨跌幅度": "-19.57",
			"name": "麦达数字"
		},
		{
			"code": "600372",
			"涨跌幅度": "-22.95",
			"name": "中航电子"
		},
		{
			"code": "600178",
			"涨跌幅度": "16.68",
			"name": "东安动力"
		},
		{
			"code": "600812",
			"涨跌幅度": "-13.64",
			"name": "华北制药"
		},
		{
			"code": "600629",
			"涨跌幅度": "-25.22",
			"name": "华建集团"
		},
		{
			"code": "600359",
			"涨跌幅度": "-29.93",
			"name": "新农开发"
		},
		{
			"code": "000548",
			"涨跌幅度": "-17.62",
			"name": "湖南投资"
		},
		{
			"code": "600595",
			"涨跌幅度": "18.82",
			"name": "中孚实业"
		},
		{
			"code": "600105",
			"涨跌幅度": "5.05",
			"name": "永鼎股份"
		},
		{
			"code": "300147",
			"涨跌幅度": "-37.52",
			"name": "香雪制药"
		},
		{
			"code": "600503",
			"涨跌幅度": "-37.31",
			"name": "华丽家族"
		},
		{
			"code": "300155",
			"涨跌幅度": "-24.03",
			"name": "安居宝"
		},
		{
			"code": "300346",
			"涨跌幅度": "-7.37",
			"name": "南大光电"
		},
		{
			"code": "002716",
			"涨跌幅度": "128.89",
			"name": "金贵银业"
		},
		{
			"code": "000978",
			"涨跌幅度": "1.48",
			"name": "桂林旅游"
		},
		{
			"code": "002616",
			"涨跌幅度": "-24.47",
			"name": "长青集团"
		},
		{
			"code": "002197",
			"涨跌幅度": "-27.03",
			"name": "证通电子"
		},
		{
			"code": "000799",
			"涨跌幅度": "22.8",
			"name": "酒鬼酒"
		},
		{
			"code": "600222",
			"涨跌幅度": "14.0",
			"name": "太龙药业"
		},
		{
			"code": "300232",
			"涨跌幅度": "-2.15",
			"name": "洲明科技"
		},
		{
			"code": "002324",
			"涨跌幅度": "0.73",
			"name": "普利特"
		},
		{
			"code": "600064",
			"涨跌幅度": "-4.55",
			"name": "南京高科"
		},
		{
			"code": "600715",
			"涨跌幅度": "23.32",
			"name": "文投控股"
		},
		{
			"code": "002158",
			"涨跌幅度": "-11.22",
			"name": "汉钟精机"
		},
		{
			"code": "600485",
			"涨跌幅度": "-26.69",
			"name": "信威集团"
		},
		{
			"code": "000063",
			"涨跌幅度": "-1.72",
			"name": "中兴通讯"
		},
		{
			"code": "601872",
			"涨跌幅度": "-21.55",
			"name": "招商轮船"
		},
		{
			"code": "300442",
			"涨跌幅度": "-33.71",
			"name": "普丽盛"
		},
		{
			"code": "601208",
			"涨跌幅度": "-9.19",
			"name": "东材科技"
		},
		{
			"code": "002419",
			"涨跌幅度": "22.78",
			"name": "天虹商场"
		},
		{
			"code": "600742",
			"涨跌幅度": "18.47",
			"name": "一汽富维"
		},
		{
			"code": "002539",
			"涨跌幅度": "-11.32",
			"name": "云图控股"
		},
		{
			"code": "002078",
			"涨跌幅度": "25.78",
			"name": "太阳纸业"
		},
		{
			"code": "600345",
			"涨跌幅度": "5.44",
			"name": "长江通信"
		},
		{
			"code": "600999",
			"涨跌幅度": "-7.4",
			"name": "招商证券"
		},
		{
			"code": "002030",
			"涨跌幅度": "-32.5",
			"name": "达安基因"
		},
		{
			"code": "600395",
			"涨跌幅度": "25.17",
			"name": "盘江股份"
		},
		{
			"code": "000862",
			"涨跌幅度": "-7.29",
			"name": "银星能源"
		},
		{
			"code": "002417",
			"涨跌幅度": "-23.04",
			"name": "三元达"
		},
		{
			"code": "600429",
			"涨跌幅度": "10.84",
			"name": "三元股份"
		},
		{
			"code": "600463",
			"涨跌幅度": "5.29",
			"name": "空港股份"
		},
		{
			"code": "300416",
			"涨跌幅度": "-18.6",
			"name": "苏试试验"
		},
		{
			"code": "000973",
			"涨跌幅度": "-31.61",
			"name": "佛塑科技"
		},
		{
			"code": "600680",
			"涨跌幅度": "-30.47",
			"name": "上海普天"
		},
		{
			"code": "000557",
			"涨跌幅度": "-26.34",
			"name": "西部创业"
		},
		{
			"code": "300030",
			"涨跌幅度": "-29.23",
			"name": "阳普医疗"
		},
		{
			"code": "000633",
			"涨跌幅度": "-28.5",
			"name": "*ST合金"
		},
		{
			"code": "000157",
			"涨跌幅度": "-7.36",
			"name": "中联重科"
		},
		{
			"code": "601099",
			"涨跌幅度": "21.65",
			"name": "太平洋"
		},
		{
			"code": "002463",
			"涨跌幅度": "-20.63",
			"name": "沪电股份"
		},
		{
			"code": "002080",
			"涨跌幅度": "-24.34",
			"name": "中材科技"
		},
		{
			"code": "000997",
			"涨跌幅度": "-21.08",
			"name": "新 大 陆"
		},
		{
			"code": "601996",
			"涨跌幅度": "2.53",
			"name": "丰林集团"
		},
		{
			"code": "002313",
			"涨跌幅度": "48.65",
			"name": "日海通讯"
		},
		{
			"code": "002611",
			"涨跌幅度": "18.79",
			"name": "东方精工"
		},
		{
			"code": "002552",
			"涨跌幅度": "2.86",
			"name": "宝鼎科技"
		},
		{
			"code": "000628",
			"涨跌幅度": "-3.53",
			"name": "高新发展"
		},
		{
			"code": "600206",
			"涨跌幅度": "-30.47",
			"name": "有研新材"
		},
		{
			"code": "000969",
			"涨跌幅度": "-7.51",
			"name": "安泰科技"
		},
		{
			"code": "300002",
			"涨跌幅度": "-17.67",
			"name": "神州泰岳"
		},
		{
			"code": "600781",
			"涨跌幅度": "-6.61",
			"name": "辅仁药业"
		},
		{
			"code": "600176",
			"涨跌幅度": "4.0",
			"name": "中国巨石"
		},
		{
			"code": "000813",
			"涨跌幅度": "34.49",
			"name": "德展健康"
		},
		{
			"code": "002070",
			"涨跌幅度": "5.0",
			"name": "众和股份"
		},
		{
			"code": "000592",
			"涨跌幅度": "-30.27",
			"name": "平潭发展"
		},
		{
			"code": "300041",
			"涨跌幅度": "3.37",
			"name": "回天新材"
		},
		{
			"code": "002443",
			"涨跌幅度": "-18.19",
			"name": "金洲管道"
		},
		{
			"code": "001896",
			"涨跌幅度": "-38.38",
			"name": "豫能控股"
		},
		{
			"code": "000417",
			"涨跌幅度": "",
			"name": "合肥百货"
		},
		{
			"code": "002067",
			"涨跌幅度": "-27.24",
			"name": "景兴纸业"
		},
		{
			"code": "002742",
			"涨跌幅度": "-8.32",
			"name": "三圣股份"
		},
		{
			"code": "600981",
			"涨跌幅度": "-28.3",
			"name": "汇鸿集团"
		},
		{
			"code": "002673",
			"涨跌幅度": "-29.08",
			"name": "西部证券"
		},
		{
			"code": "600360",
			"涨跌幅度": "-1.13",
			"name": "华微电子"
		},
		{
			"code": "000049",
			"涨跌幅度": "-26.84",
			"name": "德赛电池"
		},
		{
			"code": "000823",
			"涨跌幅度": "2.72",
			"name": "超声电子"
		},
		{
			"code": "002392",
			"涨跌幅度": "-27.22",
			"name": "北京利尔"
		},
		{
			"code": "300345",
			"涨跌幅度": "-19.68",
			"name": "红宇新材"
		},
		{
			"code": "600866",
			"涨跌幅度": "-19.66",
			"name": "*ST星湖"
		},
		{
			"code": "002147",
			"涨跌幅度": "-9.33",
			"name": "新光圆成"
		},
		{
			"code": "600017",
			"涨跌幅度": "-40.91",
			"name": "日照港"
		},
		{
			"code": "600865",
			"涨跌幅度": "-32.58",
			"name": "百大集团"
		},
		{
			"code": "600168",
			"涨跌幅度": "13.31",
			"name": "武汉控股"
		},
		{
			"code": "000838",
			"涨跌幅度": "74.61",
			"name": "财信发展"
		},
		{
			"code": "600879",
			"涨跌幅度": "-11.85",
			"name": "航天电子"
		},
		{
			"code": "600495",
			"涨跌幅度": "-28.17",
			"name": "晋西车轴"
		},
		{
			"code": "600387",
			"涨跌幅度": "-24.74",
			"name": "海越股份"
		},
		{
			"code": "603456",
			"涨跌幅度": "-26.36",
			"name": "九洲药业"
		},
		{
			"code": "600908",
			"涨跌幅度": "131.34",
			"name": "无锡银行"
		},
		{
			"code": "600555",
			"涨跌幅度": "-32.07",
			"name": "海航创新"
		},
		{
			"code": "002244",
			"涨跌幅度": "-12.14",
			"name": "滨江集团"
		},
		{
			"code": "600129",
			"涨跌幅度": "-8.3",
			"name": "太极集团"
		},
		{
			"code": "600479",
			"涨跌幅度": "-12.9",
			"name": "千金药业"
		},
		{
			"code": "600894",
			"涨跌幅度": "-22.65",
			"name": "广日股份"
		},
		{
			"code": "601126",
			"涨跌幅度": "-30.76",
			"name": "四方股份"
		},
		{
			"code": "600111",
			"涨跌幅度": "-8.46",
			"name": "北方稀土"
		},
		{
			"code": "000673",
			"涨跌幅度": "-21.84",
			"name": "当代东方"
		},
		{
			"code": "002101",
			"涨跌幅度": "11.79",
			"name": "广东鸿图"
		},
		{
			"code": "603939",
			"涨跌幅度": "-21.71",
			"name": "益丰药房"
		},
		{
			"code": "002474",
			"涨跌幅度": "-32.17",
			"name": "榕基软件"
		},
		{
			"code": "600843",
			"涨跌幅度": "4.72",
			"name": "上工申贝"
		},
		{
			"code": "002204",
			"涨跌幅度": "-18.3",
			"name": "大连重工"
		},
		{
			"code": "600362",
			"涨跌幅度": "28.41",
			"name": "江西铜业"
		},
		{
			"code": "600366",
			"涨跌幅度": "5.71",
			"name": "宁波韵升"
		},
		{
			"code": "000908",
			"涨跌幅度": "-25.36",
			"name": "景峰医药"
		},
		{
			"code": "002747",
			"涨跌幅度": "2.59",
			"name": "埃斯顿"
		},
		{
			"code": "603636",
			"涨跌幅度": "-2.07",
			"name": "南威软件"
		},
		{
			"code": "002003",
			"涨跌幅度": "-17.04",
			"name": "伟星股份"
		},
		{
			"code": "601106",
			"涨跌幅度": "-27.06",
			"name": "中国一重"
		},
		{
			"code": "601908",
			"涨跌幅度": "-11.57",
			"name": "京运通"
		},
		{
			"code": "600540",
			"涨跌幅度": "-10.93",
			"name": "新赛股份"
		},
		{
			"code": "002432",
			"涨跌幅度": "-37.16",
			"name": "九安医疗"
		},
		{
			"code": "300527",
			"涨跌幅度": "277.52",
			"name": "华舟应急"
		},
		{
			"code": "601636",
			"涨跌幅度": "-30.12",
			"name": "旗滨集团"
		},
		{
			"code": "601965",
			"涨跌幅度": "13.55",
			"name": "中国汽研"
		},
		{
			"code": "600367",
			"涨跌幅度": "23.93",
			"name": "红星发展"
		},
		{
			"code": "300189",
			"涨跌幅度": "-53.57",
			"name": "神农基因"
		},
		{
			"code": "600268",
			"涨跌幅度": "-11.83",
			"name": "国电南自"
		},
		{
			"code": "000720",
			"涨跌幅度": "-35.09",
			"name": "新能泰山"
		},
		{
			"code": "601929",
			"涨跌幅度": "-30.9",
			"name": "吉视传媒"
		},
		{
			"code": "002134",
			"涨跌幅度": "0.62",
			"name": "天津普林"
		},
		{
			"code": "002033",
			"涨跌幅度": "11.54",
			"name": "丽江旅游"
		},
		{
			"code": "600589",
			"涨跌幅度": "-29.43",
			"name": "广东榕泰"
		},
		{
			"code": "300404",
			"涨跌幅度": "-20.03",
			"name": "博济医药"
		},
		{
			"code": "600610",
			"涨跌幅度": "-16.73",
			"name": "中毅达"
		},
		{
			"code": "600884",
			"涨跌幅度": "-12.58",
			"name": "杉杉股份"
		},
		{
			"code": "603696",
			"涨跌幅度": "255.94",
			"name": "安记食品"
		},
		{
			"code": "300145",
			"涨跌幅度": "4.86",
			"name": "中金环境"
		},
		{
			"code": "300407",
			"涨跌幅度": "3.56",
			"name": "凯发电气"
		},
		{
			"code": "000848",
			"涨跌幅度": "14.5",
			"name": "承德露露"
		},
		{
			"code": "603222",
			"涨跌幅度": "-20.44",
			"name": "济民制药"
		},
		{
			"code": "300424",
			"涨跌幅度": "-36.19",
			"name": "航新科技"
		},
		{
			"code": "600235",
			"涨跌幅度": "7.17",
			"name": "民丰特纸"
		},
		{
			"code": "600230",
			"涨跌幅度": "66.67",
			"name": "*ST沧大"
		},
		{
			"code": "300452",
			"涨跌幅度": "-26.86",
			"name": "山河药辅"
		},
		{
			"code": "002433",
			"涨跌幅度": "-25.55",
			"name": "太安堂"
		},
		{
			"code": "002161",
			"涨跌幅度": "-46.29",
			"name": "远 望 谷"
		},
		{
			"code": "300069",
			"涨跌幅度": "52.11",
			"name": "金利华电"
		},
		{
			"code": "300036",
			"涨跌幅度": "-3.13",
			"name": "超图软件"
		},
		{
			"code": "603918",
			"涨跌幅度": "-28.47",
			"name": "金桥信息"
		},
		{
			"code": "300330",
			"涨跌幅度": "1.94",
			"name": "华虹计通"
		},
		{
			"code": "603993",
			"涨跌幅度": "-20.0",
			"name": "洛阳钼业"
		},
		{
			"code": "600317",
			"涨跌幅度": "-26.98",
			"name": "营口港"
		},
		{
			"code": "600089",
			"涨跌幅度": "-16.88",
			"name": "特变电工"
		},
		{
			"code": "300414",
			"涨跌幅度": "-23.19",
			"name": "中光防雷"
		},
		{
			"code": "002643",
			"涨跌幅度": "4.89",
			"name": "万润股份"
		},
		{
			"code": "002087",
			"涨跌幅度": "16.84",
			"name": "新野纺织"
		},
		{
			"code": "600385",
			"涨跌幅度": "0.23",
			"name": "山东金泰"
		},
		{
			"code": "603979",
			"涨跌幅度": "-25.99",
			"name": "金诚信"
		},
		{
			"code": "002565",
			"涨跌幅度": "-30.7",
			"name": "上海绿新"
		},
		{
			"code": "002303",
			"涨跌幅度": "-23.89",
			"name": "美盈森"
		},
		{
			"code": "002683",
			"涨跌幅度": "-31.67",
			"name": "宏大爆破"
		},
		{
			"code": "600962",
			"涨跌幅度": "-9.16",
			"name": "国投中鲁"
		},
		{
			"code": "000667",
			"涨跌幅度": "-21.76",
			"name": "美好置业"
		},
		{
			"code": "002471",
			"涨跌幅度": "-44.62",
			"name": "中超控股"
		},
		{
			"code": "600716",
			"涨跌幅度": "-8.29",
			"name": "凤凰股份"
		},
		{
			"code": "600029",
			"涨跌幅度": "-3.57",
			"name": "南方航空"
		},
		{
			"code": "600193",
			"涨跌幅度": "-17.28",
			"name": "创兴资源"
		},
		{
			"code": "300158",
			"涨跌幅度": "19.31",
			"name": "振东制药"
		},
		{
			"code": "002817",
			"涨跌幅度": "313.09",
			"name": "黄山胶囊"
		},
		{
			"code": "002604",
			"涨跌幅度": "54.25",
			"name": "龙力生物"
		},
		{
			"code": "600082",
			"涨跌幅度": "-2.46",
			"name": "海泰发展"
		},
		{
			"code": "000550",
			"涨跌幅度": "8.81",
			"name": "江铃汽车"
		},
		{
			"code": "002238",
			"涨跌幅度": "-21.78",
			"name": "天威视讯"
		},
		{
			"code": "000798",
			"涨跌幅度": "-4.56",
			"name": "中水渔业"
		},
		{
			"code": "603123",
			"涨跌幅度": "1.04",
			"name": "翠微股份"
		},
		{
			"code": "601369",
			"涨跌幅度": "-16.41",
			"name": "陕鼓动力"
		},
		{
			"code": "002042",
			"涨跌幅度": "-10.06",
			"name": "华孚色纺"
		},
		{
			"code": "601886",
			"涨跌幅度": "-15.68",
			"name": "江河集团"
		},
		{
			"code": "600266",
			"涨跌幅度": "-6.73",
			"name": "北京城建"
		},
		{
			"code": "600075",
			"涨跌幅度": "26.85",
			"name": "新疆天业"
		},
		{
			"code": "603116",
			"涨跌幅度": "-27.55",
			"name": "红蜻蜓"
		},
		{
			"code": "002430",
			"涨跌幅度": "-20.5",
			"name": "杭氧股份"
		},
		{
			"code": "000900",
			"涨跌幅度": "2.6",
			"name": "现代投资"
		},
		{
			"code": "600097",
			"涨跌幅度": "1.51",
			"name": "开创国际"
		},
		{
			"code": "600149",
			"涨跌幅度": "79.93",
			"name": "廊坊发展"
		},
		{
			"code": "002317",
			"涨跌幅度": "4.16",
			"name": "众生药业"
		},
		{
			"code": "002650",
			"涨跌幅度": "2.6",
			"name": "加加食品"
		},
		{
			"code": "600755",
			"涨跌幅度": "2.36",
			"name": "厦门国贸"
		},
		{
			"code": "000420",
			"涨跌幅度": "14.53",
			"name": "吉林化纤"
		},
		{
			"code": "002381",
			"涨跌幅度": "-23.97",
			"name": "双箭股份"
		},
		{
			"code": "600853",
			"涨跌幅度": "-10.2",
			"name": "龙建股份"
		},
		{
			"code": "002806",
			"涨跌幅度": "731.54",
			"name": "华锋股份"
		},
		{
			"code": "002227",
			"涨跌幅度": "-34.12",
			"name": "奥 特 迅"
		},
		{
			"code": "000820",
			"涨跌幅度": "12.2",
			"name": "金城股份"
		},
		{
			"code": "002325",
			"涨跌幅度": "-28.11",
			"name": "洪涛股份"
		},
		{
			"code": "002557",
			"涨跌幅度": "2.74",
			"name": "洽洽食品"
		},
		{
			"code": "002218",
			"涨跌幅度": "-7.92",
			"name": "拓日新能"
		},
		{
			"code": "000031",
			"涨跌幅度": "-36.74",
			"name": "中粮地产"
		},
		{
			"code": "603606",
			"涨跌幅度": "-21.47",
			"name": "东方电缆"
		},
		{
			"code": "603808",
			"涨跌幅度": "-13.53",
			"name": "歌力思"
		},
		{
			"code": "002116",
			"涨跌幅度": "-26.41",
			"name": "中国海诚"
		},
		{
			"code": "603600",
			"涨跌幅度": "-32.24",
			"name": "永艺股份"
		},
		{
			"code": "002791",
			"涨跌幅度": "138.59",
			"name": "坚朗五金"
		},
		{
			"code": "601766",
			"涨跌幅度": "-13.06",
			"name": "中国中车"
		},
		{
			"code": "000019",
			"涨跌幅度": "36.2",
			"name": "深深宝Ａ"
		},
		{
			"code": "002372",
			"涨跌幅度": "25.22",
			"name": "伟星新材"
		},
		{
			"code": "601226",
			"涨跌幅度": "-27.57",
			"name": "华电重工"
		},
		{
			"code": "002119",
			"涨跌幅度": "3.95",
			"name": "康强电子"
		},
		{
			"code": "000701",
			"涨跌幅度": "-24.86",
			"name": "厦门信达"
		},
		{
			"code": "300255",
			"涨跌幅度": "-14.06",
			"name": "常山药业"
		},
		{
			"code": "002172",
			"涨跌幅度": "-28.86",
			"name": "澳洋科技"
		},
		{
			"code": "300265",
			"涨跌幅度": "19.43",
			"name": "通光线缆"
		},
		{
			"code": "600729",
			"涨跌幅度": "-24.98",
			"name": "重庆百货"
		},
		{
			"code": "600800",
			"涨跌幅度": "2.65",
			"name": "天津磁卡"
		},
		{
			"code": "300101",
			"涨跌幅度": "-26.37",
			"name": "振芯科技"
		},
		{
			"code": "600199",
			"涨跌幅度": "5.68",
			"name": "金种子酒"
		},
		{
			"code": "300467",
			"涨跌幅度": "-52.43",
			"name": "迅游科技"
		},
		{
			"code": "600104",
			"涨跌幅度": "37.73",
			"name": "上汽集团"
		},
		{
			"code": "600312",
			"涨跌幅度": "-11.91",
			"name": "平高电气"
		},
		{
			"code": "300259",
			"涨跌幅度": "2.76",
			"name": "新天科技"
		},
		{
			"code": "600549",
			"涨跌幅度": "38.77",
			"name": "厦门钨业"
		},
		{
			"code": "300512",
			"涨跌幅度": "213.07",
			"name": "中亚股份"
		},
		{
			"code": "600584",
			"涨跌幅度": "-19.58",
			"name": "长电科技"
		},
		{
			"code": "300055",
			"涨跌幅度": "-24.46",
			"name": "万邦达"
		},
		{
			"code": "600399",
			"涨跌幅度": "-26.04",
			"name": "抚顺特钢"
		},
		{
			"code": "600248",
			"涨跌幅度": "-14.02",
			"name": "延长化建"
		},
		{
			"code": "002235",
			"涨跌幅度": "-7.01",
			"name": "安妮股份"
		},
		{
			"code": "002269",
			"涨跌幅度": "-25.32",
			"name": "美邦服饰"
		},
		{
			"code": "002246",
			"涨跌幅度": "-13.05",
			"name": "北化股份"
		},
		{
			"code": "603309",
			"涨跌幅度": "-30.07",
			"name": "维力医疗"
		},
		{
			"code": "600186",
			"涨跌幅度": "-31.37",
			"name": "莲花健康"
		},
		{
			"code": "002678",
			"涨跌幅度": "3.04",
			"name": "珠江钢琴"
		},
		{
			"code": "300498",
			"涨跌幅度": "-10.95",
			"name": "温氏股份"
		},
		{
			"code": "300254",
			"涨跌幅度": "-22.86",
			"name": "仟源医药"
		},
		{
			"code": "000421",
			"涨跌幅度": "7.42",
			"name": "南京公用"
		},
		{
			"code": "000529",
			"涨跌幅度": "-21.55",
			"name": "广弘控股"
		},
		{
			"code": "000572",
			"涨跌幅度": "-12.46",
			"name": "海马汽车"
		},
		{
			"code": "300484",
			"涨跌幅度": "727.66",
			"name": "蓝海华腾"
		},
		{
			"code": "600284",
			"涨跌幅度": "-13.01",
			"name": "浦东建设"
		},
		{
			"code": "000785",
			"涨跌幅度": "-4.02",
			"name": "武汉中商"
		},
		{
			"code": "300148",
			"涨跌幅度": "62.93",
			"name": "天舟文化"
		},
		{
			"code": "300094",
			"涨跌幅度": "-40.79",
			"name": "国联水产"
		},
		{
			"code": "000088",
			"涨跌幅度": "-5.59",
			"name": "盐 田 港"
		},
		{
			"code": "603005",
			"涨跌幅度": "-25.08",
			"name": "晶方科技"
		},
		{
			"code": "300440",
			"涨跌幅度": "-30.71",
			"name": "运达科技"
		},
		{
			"code": "002502",
			"涨跌幅度": "7.14",
			"name": "骅威文化"
		},
		{
			"code": "002055",
			"涨跌幅度": "-26.45",
			"name": "得润电子"
		},
		{
			"code": "603020",
			"涨跌幅度": "-27.39",
			"name": "爱普股份"
		},
		{
			"code": "002104",
			"涨跌幅度": "-31.75",
			"name": "恒宝股份"
		},
		{
			"code": "000561",
			"涨跌幅度": "21.19",
			"name": "烽火电子"
		},
		{
			"code": "601555",
			"涨跌幅度": "-1.98",
			"name": "东吴证券"
		},
		{
			"code": "300257",
			"涨跌幅度": "-32.6",
			"name": "开山股份"
		},
		{
			"code": "600829",
			"涨跌幅度": "4.82",
			"name": "人民同泰"
		},
		{
			"code": "300184",
			"涨跌幅度": "-20.98",
			"name": "力源信息"
		},
		{
			"code": "000016",
			"涨跌幅度": "-34.53",
			"name": "深康佳Ａ"
		},
		{
			"code": "000498",
			"涨跌幅度": "14.27",
			"name": "山东路桥"
		},
		{
			"code": "600038",
			"涨跌幅度": "-18.71",
			"name": "中直股份"
		},
		{
			"code": "601579",
			"涨跌幅度": "13.27",
			"name": "会稽山"
		},
		{
			"code": "600815",
			"涨跌幅度": "-36.52",
			"name": "厦工股份"
		},
		{
			"code": "600520",
			"涨跌幅度": "-10.87",
			"name": "*ST中发"
		},
		{
			"code": "300244",
			"涨跌幅度": "-17.65",
			"name": "迪安诊断"
		},
		{
			"code": "600386",
			"涨跌幅度": "-9.09",
			"name": "北巴传媒"
		},
		{
			"code": "002380",
			"涨跌幅度": "-3.56",
			"name": "科远股份"
		},
		{
			"code": "601666",
			"涨跌幅度": "11.02",
			"name": "平煤股份"
		},
		{
			"code": "000778",
			"涨跌幅度": "-23.95",
			"name": "新兴铸管"
		},
		{
			"code": "300418",
			"涨跌幅度": "-54.86",
			"name": "昆仑万维"
		},
		{
			"code": "300163",
			"涨跌幅度": "-3.26",
			"name": "先锋新材"
		},
		{
			"code": "300464",
			"涨跌幅度": "3.83",
			"name": "星徽精密"
		},
		{
			"code": "600654",
			"涨跌幅度": "-40.6",
			"name": "中安消"
		},
		{
			"code": "300214",
			"涨跌幅度": "-7.55",
			"name": "日科化学"
		},
		{
			"code": "002483",
			"涨跌幅度": "6.59",
			"name": "润邦股份"
		},
		{
			"code": "002491",
			"涨跌幅度": "-16.53",
			"name": "通鼎互联"
		},
		{
			"code": "300131",
			"涨跌幅度": "-10.38",
			"name": "英唐智控"
		},
		{
			"code": "603168",
			"涨跌幅度": "-21.58",
			"name": "莎普爱思"
		},
		{
			"code": "002686",
			"涨跌幅度": "-8.13",
			"name": "亿利达"
		},
		{
			"code": "601218",
			"涨跌幅度": "-21.55",
			"name": "吉鑫科技"
		},
		{
			"code": "600844",
			"涨跌幅度": "2.64",
			"name": "丹化科技"
		},
		{
			"code": "002277",
			"涨跌幅度": "3.98",
			"name": "友阿股份"
		},
		{
			"code": "600683",
			"涨跌幅度": "-6.68",
			"name": "京投发展"
		},
		{
			"code": "000985",
			"涨跌幅度": "17.75",
			"name": "大庆华科"
		},
		{
			"code": "600326",
			"涨跌幅度": "-17.38",
			"name": "西藏天路"
		},
		{
			"code": "002504",
			"涨跌幅度": "-20.84",
			"name": "弘高创意"
		},
		{
			"code": "002279",
			"涨跌幅度": "-24.55",
			"name": "久其软件"
		},
		{
			"code": "600030",
			"涨跌幅度": "0.52",
			"name": "中信证券"
		},
		{
			"code": "000631",
			"涨跌幅度": "-23.52",
			"name": "顺发恒业"
		},
		{
			"code": "600640",
			"涨跌幅度": "-5.72",
			"name": "号百控股"
		},
		{
			"code": "300429",
			"涨跌幅度": "-17.79",
			"name": "强力新材"
		},
		{
			"code": "603306",
			"涨跌幅度": "23.28",
			"name": "华懋科技"
		},
		{
			"code": "002345",
			"涨跌幅度": "-23.1",
			"name": "潮宏基"
		},
		{
			"code": "603188",
			"涨跌幅度": "-10.32",
			"name": "亚邦股份"
		},
		{
			"code": "002436",
			"涨跌幅度": "15.05",
			"name": "兴森科技"
		},
		{
			"code": "300525",
			"涨跌幅度": "612.81",
			"name": "博思软件"
		},
		{
			"code": "002726",
			"涨跌幅度": "11.32",
			"name": "龙大肉食"
		},
		{
			"code": "300084",
			"涨跌幅度": "9.3",
			"name": "海默科技"
		},
		{
			"code": "000777",
			"涨跌幅度": "-24.24",
			"name": "中核科技"
		},
		{
			"code": "000708",
			"涨跌幅度": "17.83",
			"name": "大冶特钢"
		},
		{
			"code": "000989",
			"涨跌幅度": "3.75",
			"name": "九 芝 堂"
		},
		{
			"code": "002253",
			"涨跌幅度": "-9.04",
			"name": "川大智胜"
		},
		{
			"code": "002047",
			"涨跌幅度": "18.9",
			"name": "宝鹰股份"
		},
		{
			"code": "600861",
			"涨跌幅度": "-2.3",
			"name": "北京城乡"
		},
		{
			"code": "002133",
			"涨跌幅度": "3.78",
			"name": "广宇集团"
		},
		{
			"code": "600074",
			"涨跌幅度": "-1.06",
			"name": "保千里"
		},
		{
			"code": "002256",
			"涨跌幅度": "12.86",
			"name": "兆新股份"
		},
		{
			"code": "300058",
			"涨跌幅度": "-24.47",
			"name": "蓝色光标"
		},
		{
			"code": "000403",
			"涨跌幅度": "24.63",
			"name": "ST生化"
		},
		{
			"code": "000807",
			"涨跌幅度": "19.48",
			"name": "云铝股份"
		},
		{
			"code": "603799",
			"涨跌幅度": "20.74",
			"name": "华友钴业"
		},
		{
			"code": "600618",
			"涨跌幅度": "13.17",
			"name": "氯碱化工"
		},
		{
			"code": "002488",
			"涨跌幅度": "-33.5",
			"name": "金固股份"
		},
		{
			"code": "300297",
			"涨跌幅度": "-21.39",
			"name": "蓝盾股份"
		},
		{
			"code": "002404",
			"涨跌幅度": "-2.68",
			"name": "嘉欣丝绸"
		},
		{
			"code": "300134",
			"涨跌幅度": "27.02",
			"name": "大富科技"
		},
		{
			"code": "002126",
			"涨跌幅度": "-4.44",
			"name": "银轮股份"
		},
		{
			"code": "000006",
			"涨跌幅度": "-17.6",
			"name": "深振业Ａ"
		},
		{
			"code": "600963",
			"涨跌幅度": "-9.34",
			"name": "岳阳林纸"
		},
		{
			"code": "000910",
			"涨跌幅度": "-3.83",
			"name": "大亚圣象"
		},
		{
			"code": "000988",
			"涨跌幅度": "1.62",
			"name": "华工科技"
		},
		{
			"code": "600270",
			"涨跌幅度": "-26.02",
			"name": "外运发展"
		},
		{
			"code": "600197",
			"涨跌幅度": "7.67",
			"name": "伊力特"
		},
		{
			"code": "600774",
			"涨跌幅度": "4.28",
			"name": "汉商集团"
		},
		{
			"code": "002378",
			"涨跌幅度": "-6.77",
			"name": "章源钨业"
		},
		{
			"code": "000821",
			"涨跌幅度": "11.31",
			"name": "京山轻机"
		},
		{
			"code": "002193",
			"涨跌幅度": "31.7",
			"name": "山东如意"
		},
		{
			"code": "601222",
			"涨跌幅度": "-23.45",
			"name": "林洋能源"
		},
		{
			"code": "600059",
			"涨跌幅度": "0.1",
			"name": "古越龙山"
		},
		{
			"code": "002079",
			"涨跌幅度": "10.9",
			"name": "苏州固锝"
		},
		{
			"code": "603569",
			"涨跌幅度": "156.21",
			"name": "长久物流"
		},
		{
			"code": "600356",
			"涨跌幅度": "7.38",
			"name": "恒丰纸业"
		},
		{
			"code": "600308",
			"涨跌幅度": "-0.55",
			"name": "华泰股份"
		},
		{
			"code": "300177",
			"涨跌幅度": "-25.81",
			"name": "中海达"
		},
		{
			"code": "300083",
			"涨跌幅度": "-23.15",
			"name": "劲胜精密"
		},
		{
			"code": "600986",
			"涨跌幅度": "-17.78",
			"name": "科达股份"
		},
		{
			"code": "600689",
			"涨跌幅度": "5.73",
			"name": "上海三毛"
		},
		{
			"code": "600665",
			"涨跌幅度": "-21.46",
			"name": "天地源"
		},
		{
			"code": "603019",
			"涨跌幅度": "-31.6",
			"name": "中科曙光"
		},
		{
			"code": "600467",
			"涨跌幅度": "19.11",
			"name": "好当家"
		},
		{
			"code": "002555",
			"涨跌幅度": "-29.73",
			"name": "三七互娱"
		},
		{
			"code": "300171",
			"涨跌幅度": "-34.05",
			"name": "东富龙"
		},
		{
			"code": "600651",
			"涨跌幅度": "-10.2",
			"name": "飞乐音响"
		},
		{
			"code": "600816",
			"涨跌幅度": "32.93",
			"name": "安信信托"
		},
		{
			"code": "000058",
			"涨跌幅度": "-3.21",
			"name": "深 赛 格"
		},
		{
			"code": "000909",
			"涨跌幅度": "-8.28",
			"name": "数源科技"
		},
		{
			"code": "000597",
			"涨跌幅度": "20.9",
			"name": "东北制药"
		},
		{
			"code": "300367",
			"涨跌幅度": "-23.35",
			"name": "东方网力"
		},
		{
			"code": "600801",
			"涨跌幅度": "1.55",
			"name": "华新水泥"
		},
		{
			"code": "300349",
			"涨跌幅度": "-8.46",
			"name": "金卡股份"
		},
		{
			"code": "002097",
			"涨跌幅度": "-7.96",
			"name": "山河智能"
		},
		{
			"code": "000707",
			"涨跌幅度": "5.96",
			"name": "双环科技"
		},
		{
			"code": "600559",
			"涨跌幅度": "7.87",
			"name": "老白干酒"
		},
		{
			"code": "000505",
			"涨跌幅度": "11.1",
			"name": "*ST珠江"
		},
		{
			"code": "600382",
			"涨跌幅度": "14.91",
			"name": "广东明珠"
		},
		{
			"code": "002029",
			"涨跌幅度": "-14.4",
			"name": "七 匹 狼"
		},
		{
			"code": "002166",
			"涨跌幅度": "-22.16",
			"name": "莱茵生物"
		},
		{
			"code": "300079",
			"涨跌幅度": "-34.67",
			"name": "数码视讯"
		},
		{
			"code": "002718",
			"涨跌幅度": "39.55",
			"name": "友邦吊顶"
		},
		{
			"code": "600483",
			"涨跌幅度": "-28.01",
			"name": "福能股份"
		},
		{
			"code": "300384",
			"涨跌幅度": "-21.46",
			"name": "三联虹普"
		},
		{
			"code": "300198",
			"涨跌幅度": "10.61",
			"name": "纳川股份"
		},
		{
			"code": "002668",
			"涨跌幅度": "-15.39",
			"name": "奥马电器"
		},
		{
			"code": "300485",
			"涨跌幅度": "-40.8",
			"name": "赛升药业"
		},
		{
			"code": "603816",
			"涨跌幅度": "85.5",
			"name": "顾家家居"
		},
		{
			"code": "002663",
			"涨跌幅度": "-21.27",
			"name": "普邦股份"
		},
		{
			"code": "601798",
			"涨跌幅度": "0.7",
			"name": "蓝科高新"
		},
		{
			"code": "600496",
			"涨跌幅度": "-21.48",
			"name": "精工钢构"
		},
		{
			"code": "002486",
			"涨跌幅度": "59.22",
			"name": "嘉麟杰"
		},
		{
			"code": "002329",
			"涨跌幅度": "-40.53",
			"name": "皇氏集团"
		},
		{
			"code": "000426",
			"涨跌幅度": "38.95",
			"name": "兴业矿业"
		},
		{
			"code": "600770",
			"涨跌幅度": "-28.08",
			"name": "综艺股份"
		},
		{
			"code": "600513",
			"涨跌幅度": "-4.05",
			"name": "联环药业"
		},
		{
			"code": "300431",
			"涨跌幅度": "-37.91",
			"name": "暴风集团"
		},
		{
			"code": "300476",
			"涨跌幅度": "-0.74",
			"name": "胜宏科技"
		},
		{
			"code": "600704",
			"涨跌幅度": "-35.17",
			"name": "物产中大"
		},
		{
			"code": "002759",
			"涨跌幅度": "43.35",
			"name": "天际股份"
		},
		{
			"code": "300205",
			"涨跌幅度": "-29.16",
			"name": "天喻信息"
		},
		{
			"code": "600785",
			"涨跌幅度": "-2.28",
			"name": "新华百货"
		},
		{
			"code": "600707",
			"涨跌幅度": "-25.44",
			"name": "彩虹股份"
		},
		{
			"code": "300401",
			"涨跌幅度": "52.72",
			"name": "花园生物"
		},
		{
			"code": "601678",
			"涨跌幅度": "4.91",
			"name": "滨化股份"
		},
		{
			"code": "002013",
			"涨跌幅度": "20.88",
			"name": "中航机电"
		},
		{
			"code": "601901",
			"涨跌幅度": "-10.11",
			"name": "方正证券"
		},
		{
			"code": "300357",
			"涨跌幅度": "-11.04",
			"name": "我武生物"
		},
		{
			"code": "603861",
			"涨跌幅度": "201.47",
			"name": "白云电器"
		},
		{
			"code": "600819",
			"涨跌幅度": "-5.43",
			"name": "耀皮玻璃"
		},
		{
			"code": "300383",
			"涨跌幅度": "-47.38",
			"name": "光环新网"
		},
		{
			"code": "000868",
			"涨跌幅度": "-25.83",
			"name": "安凯客车"
		},
		{
			"code": "600705",
			"涨跌幅度": "-15.71",
			"name": "中航资本"
		},
		{
			"code": "600081",
			"涨跌幅度": "-11.93",
			"name": "东风科技"
		},
		{
			"code": "600237",
			"涨跌幅度": "45.38",
			"name": "铜峰电子"
		},
		{
			"code": "000652",
			"涨跌幅度": "-6.65",
			"name": "泰达股份"
		},
		{
			"code": "600980",
			"涨跌幅度": "23.52",
			"name": "北矿科技"
		},
		{
			"code": "002467",
			"涨跌幅度": "-21.49",
			"name": "二六三"
		},
		{
			"code": "002001",
			"涨跌幅度": "30.48",
			"name": "新 和 成"
		},
		{
			"code": "601368",
			"涨跌幅度": "-29.75",
			"name": "绿城水务"
		},
		{
			"code": "002200",
			"涨跌幅度": "10.66",
			"name": "云投生态"
		},
		{
			"code": "600026",
			"涨跌幅度": "-33.97",
			"name": "中远海能"
		},
		{
			"code": "600481",
			"涨跌幅度": "-30.3",
			"name": "双良节能"
		},
		{
			"code": "600215",
			"涨跌幅度": "2.76",
			"name": "长春经开"
		},
		{
			"code": "000005",
			"涨跌幅度": "-24.03",
			"name": "世纪星源"
		},
		{
			"code": "600526",
			"涨跌幅度": "-37.59",
			"name": "菲达环保"
		},
		{
			"code": "002314",
			"涨跌幅度": "8.57",
			"name": "南山控股"
		},
		{
			"code": "002229",
			"涨跌幅度": "-25.18",
			"name": "鸿博股份"
		},
		{
			"code": "600133",
			"涨跌幅度": "-24.58",
			"name": "东湖高新"
		},
		{
			"code": "603085",
			"涨跌幅度": "6.86",
			"name": "天成自控"
		},
		{
			"code": "000504",
			"涨跌幅度": "-39.9",
			"name": "*ST生物"
		},
		{
			"code": "002687",
			"涨跌幅度": "-16.39",
			"name": "乔治白"
		},
		{
			"code": "002118",
			"涨跌幅度": "-16.77",
			"name": "紫鑫药业"
		},
		{
			"code": "600522",
			"涨跌幅度": "19.81",
			"name": "中天科技"
		},
		{
			"code": "000613",
			"涨跌幅度": "1.91",
			"name": "大东海A"
		},
		{
			"code": "300395",
			"涨跌幅度": "-1.42",
			"name": "菲利华"
		},
		{
			"code": "601177",
			"涨跌幅度": "-11.94",
			"name": "杭齿前进"
		},
		{
			"code": "000070",
			"涨跌幅度": "2.59",
			"name": "特发信息"
		},
		{
			"code": "002139",
			"涨跌幅度": "-4.46",
			"name": "拓邦股份"
		},
		{
			"code": "000501",
			"涨跌幅度": "14.56",
			"name": "鄂武商Ａ"
		},
		{
			"code": "002449",
			"涨跌幅度": "-1.06",
			"name": "国星光电"
		},
		{
			"code": "600987",
			"涨跌幅度": "1.49",
			"name": "航民股份"
		},
		{
			"code": "002135",
			"涨跌幅度": "-31.8",
			"name": "东南网架"
		},
		{
			"code": "300526",
			"涨跌幅度": "643.29",
			"name": "中潜股份"
		},
		{
			"code": "600845",
			"涨跌幅度": "-35.12",
			"name": "宝信软件"
		},
		{
			"code": "000099",
			"涨跌幅度": "-17.32",
			"name": "中信海直"
		},
		{
			"code": "000521",
			"涨跌幅度": "-3.27",
			"name": "美菱电器"
		},
		{
			"code": "002057",
			"涨跌幅度": "0.4",
			"name": "中钢天源"
		},
		{
			"code": "002387",
			"涨跌幅度": "19.06",
			"name": "黑牛食品"
		},
		{
			"code": "600617",
			"涨跌幅度": "-26.03",
			"name": "国新能源"
		},
		{
			"code": "600621",
			"涨跌幅度": "12.94",
			"name": "华鑫股份"
		},
		{
			"code": "603088",
			"涨跌幅度": "-8.8",
			"name": "宁波精达"
		},
		{
			"code": "600766",
			"涨跌幅度": "7.65",
			"name": "园城黄金"
		},
		{
			"code": "600985",
			"涨跌幅度": "28.41",
			"name": "雷鸣科化"
		},
		{
			"code": "002624",
			"涨跌幅度": "54.95",
			"name": "完美世界"
		},
		{
			"code": "600805",
			"涨跌幅度": "-34.96",
			"name": "悦达投资"
		},
		{
			"code": "002717",
			"涨跌幅度": "4.15",
			"name": "岭南园林"
		},
		{
			"code": "600416",
			"涨跌幅度": "-30.71",
			"name": "湘电股份"
		},
		{
			"code": "601969",
			"涨跌幅度": "-15.65",
			"name": "海南矿业"
		},
		{
			"code": "600077",
			"涨跌幅度": "-32.98",
			"name": "宋都股份"
		},
		{
			"code": "601788",
			"涨跌幅度": "-19.65",
			"name": "光大证券"
		},
		{
			"code": "002408",
			"涨跌幅度": "107.68",
			"name": "齐翔腾达"
		},
		{
			"code": "000762",
			"涨跌幅度": "-22.44",
			"name": "西藏矿业"
		},
		{
			"code": "300190",
			"涨跌幅度": "-28.06",
			"name": "维尔利"
		},
		{
			"code": "600602",
			"涨跌幅度": "10.0",
			"name": "云赛智联"
		},
		{
			"code": "600211",
			"涨跌幅度": "39.81",
			"name": "西藏药业"
		},
		{
			"code": "601866",
			"涨跌幅度": "-49.83",
			"name": "中海集运"
		},
		{
			"code": "601919",
			"涨跌幅度": "-47.89",
			"name": "中国远洋"
		},
		{
			"code": "002224",
			"涨跌幅度": "-1.94",
			"name": "三 力 士"
		},
		{
			"code": "000017",
			"涨跌幅度": "-12.18",
			"name": "深中华A"
		},
		{
			"code": "002267",
			"涨跌幅度": "-16.95",
			"name": "陕天然气"
		},
		{
			"code": "600776",
			"涨跌幅度": "-19.93",
			"name": "东方通信"
		},
		{
			"code": "600872",
			"涨跌幅度": "3.01",
			"name": "中炬高新"
		},
		{
			"code": "002228",
			"涨跌幅度": "-10.35",
			"name": "合兴包装"
		},
		{
			"code": "600880",
			"涨跌幅度": "12.32",
			"name": "博瑞传播"
		},
		{
			"code": "600790",
			"涨跌幅度": "-15.51",
			"name": "轻纺城"
		},
		{
			"code": "002349",
			"涨跌幅度": "1.28",
			"name": "精华制药"
		},
		{
			"code": "002642",
			"涨跌幅度": "-34.28",
			"name": "荣之联"
		},
		{
			"code": "000061",
			"涨跌幅度": "-13.8",
			"name": "农 产 品"
		},
		{
			"code": "002634",
			"涨跌幅度": "2.98",
			"name": "棒杰股份"
		},
		{
			"code": "300483",
			"涨跌幅度": "-11.0",
			"name": "沃施股份"
		},
		{
			"code": "300360",
			"涨跌幅度": "-4.5",
			"name": "炬华科技"
		},
		{
			"code": "002328",
			"涨跌幅度": "-4.3",
			"name": "新朋股份"
		},
		{
			"code": "600498",
			"涨跌幅度": "-0.31",
			"name": "烽火通信"
		},
		{
			"code": "300222",
			"涨跌幅度": "13.2",
			"name": "科大智能"
		},
		{
			"code": "002032",
			"涨跌幅度": "38.18",
			"name": "苏 泊 尔"
		},
		{
			"code": "002589",
			"涨跌幅度": "-7.84",
			"name": "瑞康医药"
		},
		{
			"code": "600630",
			"涨跌幅度": "-39.32",
			"name": "龙头股份"
		},
		{
			"code": "603996",
			"涨跌幅度": "143.95",
			"name": "中新科技"
		},
		{
			"code": "600728",
			"涨跌幅度": "-37.0",
			"name": "佳都科技"
		},
		{
			"code": "000011",
			"涨跌幅度": "10.43",
			"name": "深物业A"
		},
		{
			"code": "600854",
			"涨跌幅度": "-5.67",
			"name": "春兰股份"
		},
		{
			"code": "601015",
			"涨跌幅度": "14.98",
			"name": "陕西黑猫"
		},
		{
			"code": "300208",
			"涨跌幅度": "-25.26",
			"name": "恒顺众昇"
		},
		{
			"code": "000582",
			"涨跌幅度": "-15.56",
			"name": "北部湾港"
		},
		{
			"code": "600615",
			"涨跌幅度": "0.75",
			"name": "丰华股份"
		},
		{
			"code": "002494",
			"涨跌幅度": "-24.37",
			"name": "华斯股份"
		},
		{
			"code": "002056",
			"涨跌幅度": "9.29",
			"name": "横店东磁"
		},
		{
			"code": "002743",
			"涨跌幅度": "0.56",
			"name": "富煌钢构"
		},
		{
			"code": "000726",
			"涨跌幅度": "-2.94",
			"name": "鲁 泰Ａ"
		},
		{
			"code": "300469",
			"涨跌幅度": "-37.68",
			"name": "信息发展"
		},
		{
			"code": "002114",
			"涨跌幅度": "36.66",
			"name": "罗平锌电"
		},
		{
			"code": "300217",
			"涨跌幅度": "-5.93",
			"name": "东方电热"
		},
		{
			"code": "300039",
			"涨跌幅度": "-20.29",
			"name": "上海凯宝"
		},
		{
			"code": "600966",
			"涨跌幅度": "-5.25",
			"name": "博汇纸业"
		},
		{
			"code": "002651",
			"涨跌幅度": "-17.93",
			"name": "利君股份"
		},
		{
			"code": "002615",
			"涨跌幅度": "33.11",
			"name": "哈尔斯"
		},
		{
			"code": "600667",
			"涨跌幅度": "-11.91",
			"name": "太极实业"
		},
		{
			"code": "002115",
			"涨跌幅度": "-19.09",
			"name": "三维通信"
		},
		{
			"code": "600936",
			"涨跌幅度": "153.99",
			"name": "广西广电"
		},
		{
			"code": "600724",
			"涨跌幅度": "-12.43",
			"name": "宁波富达"
		},
		{
			"code": "300355",
			"涨跌幅度": "3.81",
			"name": "蒙草生态"
		},
		{
			"code": "603017",
			"涨跌幅度": "-11.62",
			"name": "中衡设计"
		},
		{
			"code": "600187",
			"涨跌幅度": "6.75",
			"name": "国中水务"
		},
		{
			"code": "002298",
			"涨跌幅度": "-13.65",
			"name": "中电鑫龙"
		},
		{
			"code": "300351",
			"涨跌幅度": "-13.76",
			"name": "永贵电器"
		},
		{
			"code": "000637",
			"涨跌幅度": "5.84",
			"name": "茂化实华"
		},
		{
			"code": "603788",
			"涨跌幅度": "12.25",
			"name": "宁波高发"
		},
		{
			"code": "300396",
			"涨跌幅度": "-10.02",
			"name": "迪瑞医疗"
		},
		{
			"code": "600320",
			"涨跌幅度": "-12.77",
			"name": "振华重工"
		},
		{
			"code": "600830",
			"涨跌幅度": "-7.72",
			"name": "香溢融通"
		},
		{
			"code": "600350",
			"涨跌幅度": "12.19",
			"name": "山东高速"
		},
		{
			"code": "000850",
			"涨跌幅度": "-43.12",
			"name": "华茂股份"
		},
		{
			"code": "600327",
			"涨跌幅度": "-5.15",
			"name": "大东方"
		},
		{
			"code": "002547",
			"涨跌幅度": "-21.95",
			"name": "春兴精工"
		},
		{
			"code": "002041",
			"涨跌幅度": "1.98",
			"name": "登海种业"
		},
		{
			"code": "300283",
			"涨跌幅度": "23.07",
			"name": "温州宏丰"
		},
		{
			"code": "600170",
			"涨跌幅度": "-19.3",
			"name": "上海建工"
		},
		{
			"code": "601168",
			"涨跌幅度": "14.29",
			"name": "西部矿业"
		},
		{
			"code": "000970",
			"涨跌幅度": "8.24",
			"name": "中科三环"
		},
		{
			"code": "002022",
			"涨跌幅度": "-19.52",
			"name": "科华生物"
		},
		{
			"code": "002637",
			"涨跌幅度": "21.37",
			"name": "赞宇科技"
		},
		{
			"code": "002102",
			"涨跌幅度": "55.42",
			"name": "冠福股份"
		},
		{
			"code": "002709",
			"涨跌幅度": "77.0",
			"name": "天赐材料"
		},
		{
			"code": "600701",
			"涨跌幅度": "-44.06",
			"name": "*ST工新"
		},
		{
			"code": "600455",
			"涨跌幅度": "25.92",
			"name": "博通股份"
		},
		{
			"code": "300025",
			"涨跌幅度": "-22.99",
			"name": "华星创业"
		},
		{
			"code": "002577",
			"涨跌幅度": "-34.77",
			"name": "雷柏科技"
		},
		{
			"code": "002100",
			"涨跌幅度": "-3.22",
			"name": "天康生物"
		},
		{
			"code": "600159",
			"涨跌幅度": "-24.38",
			"name": "大龙地产"
		},
		{
			"code": "000751",
			"涨跌幅度": "-3.17",
			"name": "锌业股份"
		},
		{
			"code": "600218",
			"涨跌幅度": "-15.43",
			"name": "全柴动力"
		},
		{
			"code": "300057",
			"涨跌幅度": "-9.81",
			"name": "万顺股份"
		},
		{
			"code": "002260",
			"涨跌幅度": "-40.22",
			"name": "德奥通航"
		},
		{
			"code": "000960",
			"涨跌幅度": "17.89",
			"name": "锡业股份"
		},
		{
			"code": "300435",
			"涨跌幅度": "-9.01",
			"name": "中泰股份"
		},
		{
			"code": "000065",
			"涨跌幅度": "26.35",
			"name": "北方国际"
		},
		{
			"code": "300020",
			"涨跌幅度": "23.64",
			"name": "银江股份"
		},
		{
			"code": "002452",
			"涨跌幅度": "5.84",
			"name": "长高集团"
		},
		{
			"code": "601313",
			"涨跌幅度": "-27.09",
			"name": "江南嘉捷"
		},
		{
			"code": "600396",
			"涨跌幅度": "-22.51",
			"name": "金山股份"
		},
		{
			"code": "600127",
			"涨跌幅度": "-2.61",
			"name": "金健米业"
		},
		{
			"code": "000977",
			"涨跌幅度": "-20.31",
			"name": "浪潮信息"
		},
		{
			"code": "600792",
			"涨跌幅度": "-25.32",
			"name": "云煤能源"
		},
		{
			"code": "000892",
			"涨跌幅度": "-16.94",
			"name": "星美联合"
		},
		{
			"code": "603999",
			"涨跌幅度": "198.71",
			"name": "读者传媒"
		},
		{
			"code": "300125",
			"涨跌幅度": "7.5",
			"name": "易世达"
		},
		{
			"code": "300017",
			"涨跌幅度": "-4.69",
			"name": "网宿科技"
		},
		{
			"code": "000014",
			"涨跌幅度": "-8.26",
			"name": "沙河股份"
		},
		{
			"code": "600993",
			"涨跌幅度": "1.27",
			"name": "马应龙"
		},
		{
			"code": "600846",
			"涨跌幅度": "-16.83",
			"name": "同济科技"
		},
		{
			"code": "603318",
			"涨跌幅度": "14.57",
			"name": "派思股份"
		},
		{
			"code": "603030",
			"涨跌幅度": "-19.83",
			"name": "全筑股份"
		},
		{
			"code": "601799",
			"涨跌幅度": "11.3",
			"name": "星宇股份"
		},
		{
			"code": "600303",
			"涨跌幅度": "-31.95",
			"name": "曙光股份"
		},
		{
			"code": "002658",
			"涨跌幅度": "-41.96",
			"name": "雪迪龙"
		},
		{
			"code": "600740",
			"涨跌幅度": "29.89",
			"name": "山西焦化"
		},
		{
			"code": "000882",
			"涨跌幅度": "-29.86",
			"name": "华联股份"
		},
		{
			"code": "300204",
			"涨跌幅度": "-29.87",
			"name": "舒泰神"
		},
		{
			"code": "000930",
			"涨跌幅度": "-26.22",
			"name": "中粮生化"
		},
		{
			"code": "601008",
			"涨跌幅度": "-24.82",
			"name": "连云港"
		},
		{
			"code": "603029",
			"涨跌幅度": "343.39",
			"name": "天鹅股份"
		},
		{
			"code": "000587",
			"涨跌幅度": "-15.52",
			"name": "金洲慈航"
		},
		{
			"code": "600616",
			"涨跌幅度": "-0.27",
			"name": "金枫酒业"
		},
		{
			"code": "601211",
			"涨跌幅度": "-10.21",
			"name": "国泰君安"
		},
		{
			"code": "002688",
			"涨跌幅度": "23.84",
			"name": "金河生物"
		},
		{
			"code": "601668",
			"涨跌幅度": "66.88",
			"name": "中国建筑"
		},
		{
			"code": "600183",
			"涨跌幅度": "25.5",
			"name": "生益科技"
		},
		{
			"code": "600295",
			"涨跌幅度": "23.58",
			"name": "鄂尔多斯"
		},
		{
			"code": "002768",
			"涨跌幅度": "23.47",
			"name": "国恩股份"
		},
		{
			"code": "002612",
			"涨跌幅度": "-26.55",
			"name": "朗姿股份"
		},
		{
			"code": "002374",
			"涨跌幅度": "2.39",
			"name": "丽鹏股份"
		},
		{
			"code": "603311",
			"涨跌幅度": "-15.95",
			"name": "金海环境"
		},
		{
			"code": "002761",
			"涨跌幅度": "17.77",
			"name": "多喜爱"
		},
		{
			"code": "601137",
			"涨跌幅度": "0.84",
			"name": "博威合金"
		},
		{
			"code": "600330",
			"涨跌幅度": "-13.99",
			"name": "天通股份"
		},
		{
			"code": "300358",
			"涨跌幅度": "-25.74",
			"name": "楚天科技"
		},
		{
			"code": "000833",
			"涨跌幅度": "16.85",
			"name": "贵糖股份"
		},
		{
			"code": "600468",
			"涨跌幅度": "-10.34",
			"name": "百利电气"
		},
		{
			"code": "600650",
			"涨跌幅度": "-36.36",
			"name": "锦江投资"
		},
		{
			"code": "002295",
			"涨跌幅度": "6.0",
			"name": "精艺股份"
		},
		{
			"code": "603686",
			"涨跌幅度": "-14.47",
			"name": "龙马环卫"
		},
		{
			"code": "002456",
			"涨跌幅度": "38.5",
			"name": "欧菲光"
		},
		{
			"code": "600833",
			"涨跌幅度": "6.32",
			"name": "第一医药"
		},
		{
			"code": "603726",
			"涨跌幅度": "240.62",
			"name": "朗迪集团"
		},
		{
			"code": "300392",
			"涨跌幅度": "-48.25",
			"name": "腾信股份"
		},
		{
			"code": "600275",
			"涨跌幅度": "71.63",
			"name": "武昌鱼"
		},
		{
			"code": "300475",
			"涨跌幅度": "-17.16",
			"name": "聚隆科技"
		},
		{
			"code": "600798",
			"涨跌幅度": "-17.73",
			"name": "宁波海运"
		},
		{
			"code": "000921",
			"涨跌幅度": "0.19",
			"name": "海信科龙"
		},
		{
			"code": "300195",
			"涨跌幅度": "-23.01",
			"name": "长荣股份"
		},
		{
			"code": "000923",
			"涨跌幅度": "27.48",
			"name": "河北宣工"
		},
		{
			"code": "300199",
			"涨跌幅度": "-27.29",
			"name": "翰宇药业"
		},
		{
			"code": "300394",
			"涨跌幅度": "-12.58",
			"name": "天孚通信"
		},
		{
			"code": "002111",
			"涨跌幅度": "-24.85",
			"name": "威海广泰"
		},
		{
			"code": "300111",
			"涨跌幅度": "-15.16",
			"name": "向日葵"
		},
		{
			"code": "601918",
			"涨跌幅度": "-54.04",
			"name": "*ST新集"
		},
		{
			"code": "002495",
			"涨跌幅度": "32.81",
			"name": "佳隆股份"
		},
		{
			"code": "300225",
			"涨跌幅度": "19.75",
			"name": "金力泰"
		},
		{
			"code": "002451",
			"涨跌幅度": "11.28",
			"name": "摩恩电气"
		},
		{
			"code": "600501",
			"涨跌幅度": "-21.13",
			"name": "航天晨光"
		},
		{
			"code": "300102",
			"涨跌幅度": "-5.91",
			"name": "乾照光电"
		},
		{
			"code": "002171",
			"涨跌幅度": "-25.44",
			"name": "楚江新材"
		},
		{
			"code": "300059",
			"涨跌幅度": "-32.19",
			"name": "东方财富"
		},
		{
			"code": "002501",
			"涨跌幅度": "-2.7",
			"name": "利源精制"
		},
		{
			"code": "002168",
			"涨跌幅度": "39.07",
			"name": "深圳惠程"
		},
		{
			"code": "000333",
			"涨跌幅度": "68.28",
			"name": "美的集团"
		},
		{
			"code": "600917",
			"涨跌幅度": "2.94",
			"name": "重庆燃气"
		},
		{
			"code": "002265",
			"涨跌幅度": "48.86",
			"name": "西仪股份"
		},
		{
			"code": "600783",
			"涨跌幅度": "-34.92",
			"name": "鲁信创投"
		},
		{
			"code": "600743",
			"涨跌幅度": "-24.61",
			"name": "华远地产"
		},
		{
			"code": "002216",
			"涨跌幅度": "-8.63",
			"name": "三全食品"
		},
		{
			"code": "300253",
			"涨跌幅度": "-26.53",
			"name": "卫宁健康"
		},
		{
			"code": "300344",
			"涨跌幅度": "16.64",
			"name": "太空板业"
		},
		{
			"code": "002548",
			"涨跌幅度": "-10.65",
			"name": "金新农"
		},
		{
			"code": "000551",
			"涨跌幅度": "-16.77",
			"name": "创元科技"
		},
		{
			"code": "000523",
			"涨跌幅度": "-20.99",
			"name": "广州浪奇"
		},
		{
			"code": "603601",
			"涨跌幅度": "-2.26",
			"name": "再升科技"
		},
		{
			"code": "300439",
			"涨跌幅度": "-22.81",
			"name": "美康生物"
		},
		{
			"code": "300516",
			"涨跌幅度": "348.44",
			"name": "久之洋"
		},
		{
			"code": "002069",
			"涨跌幅度": "-21.03",
			"name": "*ST獐岛"
		},
		{
			"code": "000657",
			"涨跌幅度": "-1.75",
			"name": "中钨高新"
		},
		{
			"code": "300013",
			"涨跌幅度": "-27.0",
			"name": "新宁物流"
		},
		{
			"code": "600761",
			"涨跌幅度": "-13.5",
			"name": "安徽合力"
		},
		{
			"code": "300314",
			"涨跌幅度": "-25.05",
			"name": "戴维医疗"
		},
		{
			"code": "000513",
			"涨跌幅度": "17.6",
			"name": "丽珠集团"
		},
		{
			"code": "002300",
			"涨跌幅度": "-4.89",
			"name": "太阳电缆"
		},
		{
			"code": "002023",
			"涨跌幅度": "-21.72",
			"name": "海特高新"
		},
		{
			"code": "600818",
			"涨跌幅度": "-53.43",
			"name": "中路股份"
		},
		{
			"code": "300331",
			"涨跌幅度": "8.1",
			"name": "苏大维格"
		},
		{
			"code": "002517",
			"涨跌幅度": "-34.89",
			"name": "恺英网络"
		},
		{
			"code": "603688",
			"涨跌幅度": "0.46",
			"name": "石英股份"
		},
		{
			"code": "002356",
			"涨跌幅度": "-7.7",
			"name": "赫美集团"
		},
		{
			"code": "002599",
			"涨跌幅度": "-8.79",
			"name": "盛通股份"
		},
		{
			"code": "002312",
			"涨跌幅度": "-46.76",
			"name": "三泰控股"
		},
		{
			"code": "603568",
			"涨跌幅度": "-32.11",
			"name": "伟明环保"
		},
		{
			"code": "603006",
			"涨跌幅度": "12.27",
			"name": "联明股份"
		},
		{
			"code": "002728",
			"涨跌幅度": "-4.34",
			"name": "特一药业"
		},
		{
			"code": "000686",
			"涨跌幅度": "-13.02",
			"name": "东北证券"
		},
		{
			"code": "603556",
			"涨跌幅度": "100.78",
			"name": "海兴电力"
		},
		{
			"code": "300289",
			"涨跌幅度": "-32.57",
			"name": "利德曼"
		},
		{
			"code": "603858",
			"涨跌幅度": "81.76",
			"name": "步长制药"
		},
		{
			"code": "002755",
			"涨跌幅度": "11.05",
			"name": "东方新星"
		},
		{
			"code": "600652",
			"涨跌幅度": "-45.05",
			"name": "游久游戏"
		},
		{
			"code": "600112",
			"涨跌幅度": "-40.67",
			"name": "天成控股"
		},
		{
			"code": "000996",
			"涨跌幅度": "-17.78",
			"name": "中国中期"
		},
		{
			"code": "603806",
			"涨跌幅度": "6.1",
			"name": "福斯特"
		},
		{
			"code": "603002",
			"涨跌幅度": "-13.57",
			"name": "宏昌电子"
		},
		{
			"code": "300542",
			"涨跌幅度": "541.78",
			"name": "新晨科技"
		},
		{
			"code": "600135",
			"涨跌幅度": "-9.6",
			"name": "乐凯胶片"
		},
		{
			"code": "002674",
			"涨跌幅度": "13.76",
			"name": "兴业科技"
		},
		{
			"code": "603958",
			"涨跌幅度": "230.69",
			"name": "哈森股份"
		},
		{
			"code": "002750",
			"涨跌幅度": "-29.79",
			"name": "龙津药业"
		},
		{
			"code": "600184",
			"涨跌幅度": "-23.95",
			"name": "光电股份"
		},
		{
			"code": "600428",
			"涨跌幅度": "-54.07",
			"name": "中远航运"
		},
		{
			"code": "300299",
			"涨跌幅度": "-43.4",
			"name": "富春通信"
		},
		{
			"code": "300471",
			"涨跌幅度": "-45.06",
			"name": "厚普股份"
		},
		{
			"code": "000603",
			"涨跌幅度": "9.2",
			"name": "盛达矿业"
		},
		{
			"code": "603023",
			"涨跌幅度": "13.51",
			"name": "威帝股份"
		},
		{
			"code": "300474",
			"涨跌幅度": "626.67",
			"name": "景嘉微"
		},
		{
			"code": "600860",
			"涨跌幅度": "-22.12",
			"name": "京城股份"
		},
		{
			"code": "603703",
			"涨跌幅度": "-7.94",
			"name": "盛洋科技"
		},
		{
			"code": "000616",
			"涨跌幅度": "-30.22",
			"name": "海航投资"
		},
		{
			"code": "300378",
			"涨跌幅度": "-40.99",
			"name": "鼎捷软件"
		},
		{
			"code": "000418",
			"涨跌幅度": "69.38",
			"name": "小天鹅Ａ"
		},
		{
			"code": "002382",
			"涨跌幅度": "-12.68",
			"name": "蓝帆医疗"
		},
		{
			"code": "600433",
			"涨跌幅度": "-33.41",
			"name": "冠豪高新"
		},
		{
			"code": "300325",
			"涨跌幅度": "-2.75",
			"name": "德威新材"
		},
		{
			"code": "300016",
			"涨跌幅度": "-46.94",
			"name": "北陆药业"
		},
		{
			"code": "000567",
			"涨跌幅度": "25.06",
			"name": "海德股份"
		},
		{
			"code": "002011",
			"涨跌幅度": "-26.9",
			"name": "盾安环境"
		},
		{
			"code": "600100",
			"涨跌幅度": "-12.45",
			"name": "同方股份"
		},
		{
			"code": "300215",
			"涨跌幅度": "-3.64",
			"name": "电科院"
		},
		{
			"code": "600459",
			"涨跌幅度": "21.77",
			"name": "贵研铂业"
		},
		{
			"code": "000507",
			"涨跌幅度": "-10.9",
			"name": "珠海港"
		},
		{
			"code": "002811",
			"涨跌幅度": "143.21",
			"name": "亚泰国际"
		},
		{
			"code": "601163",
			"涨跌幅度": "47.32",
			"name": "三角轮胎"
		},
		{
			"code": "002775",
			"涨跌幅度": "-15.34",
			"name": "文科园林"
		},
		{
			"code": "002150",
			"涨跌幅度": "106.35",
			"name": "通润装备"
		},
		{
			"code": "002776",
			"涨跌幅度": "1.74",
			"name": "柏堡龙"
		},
		{
			"code": "002144",
			"涨跌幅度": "-21.93",
			"name": "宏达高科"
		},
		{
			"code": "600116",
			"涨跌幅度": "60.71",
			"name": "三峡水利"
		},
		{
			"code": "600249",
			"涨跌幅度": "-6.65",
			"name": "两面针"
		},
		{
			"code": "002232",
			"涨跌幅度": "-17.32",
			"name": "启明信息"
		},
		{
			"code": "600898",
			"涨跌幅度": "26.93",
			"name": "三联商社"
		},
		{
			"code": "000663",
			"涨跌幅度": "-14.02",
			"name": "永安林业"
		},
		{
			"code": "603268",
			"涨跌幅度": "-6.86",
			"name": "松发股份"
		},
		{
			"code": "300298",
			"涨跌幅度": "-21.39",
			"name": "三诺生物"
		},
		{
			"code": "600881",
			"涨跌幅度": "-21.82",
			"name": "亚泰集团"
		},
		{
			"code": "000627",
			"涨跌幅度": "-18.28",
			"name": "天茂集团"
		},
		{
			"code": "002524",
			"涨跌幅度": "20.0",
			"name": "光正集团"
		},
		{
			"code": "603227",
			"涨跌幅度": "-34.84",
			"name": "雪峰科技"
		},
		{
			"code": "000760",
			"涨跌幅度": "-29.03",
			"name": "斯太尔"
		},
		{
			"code": "600825",
			"涨跌幅度": "-23.82",
			"name": "新华传媒"
		},
		{
			"code": "300413",
			"涨跌幅度": "-41.85",
			"name": "快乐购"
		},
		{
			"code": "000626",
			"涨跌幅度": "29.51",
			"name": "远大控股"
		},
		{
			"code": "600563",
			"涨跌幅度": "0.64",
			"name": "法拉电子"
		},
		{
			"code": "300067",
			"涨跌幅度": "-20.02",
			"name": "安诺其"
		},
		{
			"code": "300075",
			"涨跌幅度": "-28.24",
			"name": "数字政通"
		},
		{
			"code": "600491",
			"涨跌幅度": "28.4",
			"name": "龙元建设"
		},
		{
			"code": "002515",
			"涨跌幅度": "48.8",
			"name": "金字火腿"
		},
		{
			"code": "600093",
			"涨跌幅度": "-13.51",
			"name": "禾嘉股份"
		},
		{
			"code": "002575",
			"涨跌幅度": "-17.57",
			"name": "群兴玩具"
		},
		{
			"code": "603566",
			"涨跌幅度": "-9.87",
			"name": "普莱柯"
		},
		{
			"code": "300009",
			"涨跌幅度": "-19.32",
			"name": "安科生物"
		},
		{
			"code": "300453",
			"涨跌幅度": "-31.21",
			"name": "三鑫医疗"
		},
		{
			"code": "300248",
			"涨跌幅度": "-29.45",
			"name": "新开普"
		},
		{
			"code": "300071",
			"涨跌幅度": "-12.22",
			"name": "华谊嘉信"
		},
		{
			"code": "600757",
			"涨跌幅度": "-19.36",
			"name": "长江传媒"
		},
		{
			"code": "600289",
			"涨跌幅度": "-24.8",
			"name": "亿阳信通"
		},
		{
			"code": "603100",
			"涨跌幅度": "-17.94",
			"name": "川仪股份"
		},
		{
			"code": "000768",
			"涨跌幅度": "-11.89",
			"name": "中航飞机"
		},
		{
			"code": "000936",
			"涨跌幅度": "-25.26",
			"name": "华西股份"
		},
		{
			"code": "300288",
			"涨跌幅度": "-28.33",
			"name": "朗玛信息"
		},
		{
			"code": "002559",
			"涨跌幅度": "-2.37",
			"name": "亚威股份"
		},
		{
			"code": "603022",
			"涨跌幅度": "4.03",
			"name": "新通联"
		},
		{
			"code": "000055",
			"涨跌幅度": "27.02",
			"name": "方大集团"
		},
		{
			"code": "600157",
			"涨跌幅度": "-11.32",
			"name": "永泰能源"
		},
		{
			"code": "300423",
			"涨跌幅度": "-10.31",
			"name": "鲁亿通"
		},
		{
			"code": "000555",
			"涨跌幅度": "-16.56",
			"name": "神州信息"
		},
		{
			"code": "600155",
			"涨跌幅度": "8.95",
			"name": "宝硕股份"
		},
		{
			"code": "300183",
			"涨跌幅度": "-2.14",
			"name": "东软载波"
		},
		{
			"code": "300178",
			"涨跌幅度": "-18.33",
			"name": "腾邦国际"
		},
		{
			"code": "000731",
			"涨跌幅度": "-1.65",
			"name": "四川美丰"
		},
		{
			"code": "000968",
			"涨跌幅度": "38.98",
			"name": "*ST煤气"
		},
		{
			"code": "000952",
			"涨跌幅度": "-2.75",
			"name": "广济药业"
		},
		{
			"code": "603698",
			"涨跌幅度": "-18.13",
			"name": "航天工程"
		},
		{
			"code": "002652",
			"涨跌幅度": "31.81",
			"name": "扬子新材"
		},
		{
			"code": "000917",
			"涨跌幅度": "-43.2",
			"name": "电广传媒"
		},
		{
			"code": "600257",
			"涨跌幅度": "-11.85",
			"name": "大湖股份"
		},
		{
			"code": "002675",
			"涨跌幅度": "-2.13",
			"name": "东诚药业"
		},
		{
			"code": "002319",
			"涨跌幅度": "-10.33",
			"name": "乐通股份"
		},
		{
			"code": "300008",
			"涨跌幅度": "-4.1",
			"name": "天海防务"
		},
		{
			"code": "002180",
			"涨跌幅度": "22.19",
			"name": "艾派克"
		},
		{
			"code": "601216",
			"涨跌幅度": "-14.36",
			"name": "君正集团"
		},
		{
			"code": "600243",
			"涨跌幅度": "-22.33",
			"name": "青海华鼎"
		},
		{
			"code": "600864",
			"涨跌幅度": "8.35",
			"name": "哈投股份"
		},
		{
			"code": "600560",
			"涨跌幅度": "-8.88",
			"name": "金自天正"
		},
		{
			"code": "300501",
			"涨跌幅度": "357.28",
			"name": "海顺新材"
		},
		{
			"code": "600782",
			"涨跌幅度": "23.33",
			"name": "新钢股份"
		},
		{
			"code": "600216",
			"涨跌幅度": "30.97",
			"name": "浙江医药"
		},
		{
			"code": "000502",
			"涨跌幅度": "-31.48",
			"name": "绿景控股"
		},
		{
			"code": "002607",
			"涨跌幅度": "-14.4",
			"name": "亚夏汽车"
		},
		{
			"code": "300305",
			"涨跌幅度": "-12.79",
			"name": "裕兴股份"
		},
		{
			"code": "601600",
			"涨跌幅度": "-6.18",
			"name": "中国铝业"
		},
		{
			"code": "002173",
			"涨跌幅度": "-26.37",
			"name": "*ST创疗"
		},
		{
			"code": "002196",
			"涨跌幅度": "-4.91",
			"name": "方正电机"
		},
		{
			"code": "000659",
			"涨跌幅度": "0.52",
			"name": "珠海中富"
		},
		{
			"code": "000728",
			"涨跌幅度": "2.01",
			"name": "国元证券"
		},
		{
			"code": "600477",
			"涨跌幅度": "30.34",
			"name": "杭萧钢构"
		},
		{
			"code": "600160",
			"涨跌幅度": "-39.89",
			"name": "巨化股份"
		},
		{
			"code": "002346",
			"涨跌幅度": "32.43",
			"name": "柘中股份"
		},
		{
			"code": "002711",
			"涨跌幅度": "-22.36",
			"name": "欧浦智网"
		},
		{
			"code": "300042",
			"涨跌幅度": "-13.56",
			"name": "朗科科技"
		},
		{
			"code": "300169",
			"涨跌幅度": "51.62",
			"name": "天晟新材"
		},
		{
			"code": "002045",
			"涨跌幅度": "-32.35",
			"name": "国光电器"
		},
		{
			"code": "600410",
			"涨跌幅度": "-23.96",
			"name": "华胜天成"
		},
		{
			"code": "000151",
			"涨跌幅度": "-27.28",
			"name": "中成股份"
		},
		{
			"code": "603598",
			"涨跌幅度": "-30.01",
			"name": "引力传媒"
		},
		{
			"code": "002712",
			"涨跌幅度": "-7.26",
			"name": "思美传媒"
		},
		{
			"code": "000688",
			"涨跌幅度": "-36.03",
			"name": "建新矿业"
		},
		{
			"code": "002205",
			"涨跌幅度": "-1.4",
			"name": "国统股份"
		},
		{
			"code": "600961",
			"涨跌幅度": "-16.0",
			"name": "株冶集团"
		},
		{
			"code": "300089",
			"涨跌幅度": "35.95",
			"name": "文化长城"
		},
		{
			"code": "002514",
			"涨跌幅度": "32.57",
			"name": "宝馨科技"
		},
		{
			"code": "300168",
			"涨跌幅度": "-21.99",
			"name": "万达信息"
		},
		{
			"code": "300130",
			"涨跌幅度": "-14.76",
			"name": "新国都"
		},
		{
			"code": "000159",
			"涨跌幅度": "-1.81",
			"name": "国际实业"
		},
		{
			"code": "002541",
			"涨跌幅度": "6.48",
			"name": "鸿路钢构"
		},
		{
			"code": "000851",
			"涨跌幅度": "-6.37",
			"name": "高鸿股份"
		},
		{
			"code": "300050",
			"涨跌幅度": "-27.84",
			"name": "世纪鼎利"
		},
		{
			"code": "002636",
			"涨跌幅度": "-21.45",
			"name": "金安国纪"
		},
		{
			"code": "600223",
			"涨跌幅度": "-31.86",
			"name": "鲁商置业"
		},
		{
			"code": "300412",
			"涨跌幅度": "-18.65",
			"name": "迦南科技"
		},
		{
			"code": "000158",
			"涨跌幅度": "-25.14",
			"name": "常山股份"
		},
		{
			"code": "603015",
			"涨跌幅度": "-19.72",
			"name": "弘讯科技"
		},
		{
			"code": "600606",
			"涨跌幅度": "-43.79",
			"name": "绿地控股"
		},
		{
			"code": "600718",
			"涨跌幅度": "-20.91",
			"name": "东软集团"
		},
		{
			"code": "300443",
			"涨跌幅度": "-43.65",
			"name": "金雷风电"
		},
		{
			"code": "300051",
			"涨跌幅度": "-11.63",
			"name": "三五互联"
		},
		{
			"code": "300092",
			"涨跌幅度": "-2.97",
			"name": "科新机电"
		},
		{
			"code": "603199",
			"涨跌幅度": "-16.0",
			"name": "九华旅游"
		},
		{
			"code": "300154",
			"涨跌幅度": "-25.78",
			"name": "瑞凌股份"
		},
		{
			"code": "002457",
			"涨跌幅度": "-6.57",
			"name": "青龙管业"
		},
		{
			"code": "600791",
			"涨跌幅度": "-0.92",
			"name": "京能置业"
		},
		{
			"code": "601811",
			"涨跌幅度": "155.9",
			"name": "新华文轩"
		},
		{
			"code": "002362",
			"涨跌幅度": "-17.53",
			"name": "汉王科技"
		},
		{
			"code": "000915",
			"涨跌幅度": "33.43",
			"name": "山大华特"
		},
		{
			"code": "002769",
			"涨跌幅度": "-29.7",
			"name": "普路通"
		},
		{
			"code": "300301",
			"涨跌幅度": "-0.93",
			"name": "长方集团"
		},
		{
			"code": "601608",
			"涨跌幅度": "-18.27",
			"name": "中信重工"
		},
		{
			"code": "600722",
			"涨跌幅度": "26.66",
			"name": "金牛化工"
		},
		{
			"code": "300236",
			"涨跌幅度": "-0.27",
			"name": "上海新阳"
		},
		{
			"code": "603969",
			"涨跌幅度": "-21.38",
			"name": "银龙股份"
		},
		{
			"code": "300256",
			"涨跌幅度": "-2.21",
			"name": "星星科技"
		},
		{
			"code": "002808",
			"涨跌幅度": "441.08",
			"name": "苏州恒久"
		},
		{
			"code": "300173",
			"涨跌幅度": "11.27",
			"name": "智慧松德"
		},
		{
			"code": "000422",
			"涨跌幅度": "0.68",
			"name": "湖北宜化"
		},
		{
			"code": "000046",
			"涨跌幅度": "-9.67",
			"name": "泛海控股"
		},
		{
			"code": "300164",
			"涨跌幅度": "-5.52",
			"name": "通源石油"
		},
		{
			"code": "002255",
			"涨跌幅度": "-14.76",
			"name": "海陆重工"
		},
		{
			"code": "600213",
			"涨跌幅度": "11.52",
			"name": "亚星客车"
		},
		{
			"code": "002564",
			"涨跌幅度": "-5.79",
			"name": "天沃科技"
		},
		{
			"code": "002778",
			"涨跌幅度": "457.31",
			"name": "高科石化"
		},
		{
			"code": "603778",
			"涨跌幅度": "152.71",
			"name": "乾景园林"
		},
		{
			"code": "300359",
			"涨跌幅度": "-30.44",
			"name": "全通教育"
		},
		{
			"code": "603909",
			"涨跌幅度": "272.89",
			"name": "合诚股份"
		},
		{
			"code": "000790",
			"涨跌幅度": "-7.78",
			"name": "泰合健康"
		},
		{
			"code": "002799",
			"涨跌幅度": "458.44",
			"name": "环球印务"
		},
		{
			"code": "002801",
			"涨跌幅度": "654.11",
			"name": "微光股份"
		},
		{
			"code": "300112",
			"涨跌幅度": "-20.53",
			"name": "万讯自控"
		},
		{
			"code": "600787",
			"涨跌幅度": "-18.36",
			"name": "中储股份"
		},
		{
			"code": "000783",
			"涨跌幅度": "5.21",
			"name": "长江证券"
		},
		{
			"code": "300127",
			"涨跌幅度": "22.13",
			"name": "银河磁体"
		},
		{
			"code": "000815",
			"涨跌幅度": "-16.32",
			"name": "美利云"
		},
		{
			"code": "603189",
			"涨跌幅度": "320.57",
			"name": "网达软件"
		},
		{
			"code": "300137",
			"涨跌幅度": "-31.73",
			"name": "先河环保"
		},
		{
			"code": "300040",
			"涨跌幅度": "-4.57",
			"name": "九洲电气"
		},
		{
			"code": "000554",
			"涨跌幅度": "-6.64",
			"name": "泰山石油"
		},
		{
			"code": "600626",
			"涨跌幅度": "-13.46",
			"name": "申达股份"
		},
		{
			"code": "300342",
			"涨跌幅度": "27.5",
			"name": "天银机电"
		},
		{
			"code": "002777",
			"涨跌幅度": "722.64",
			"name": "久远银海"
		},
		{
			"code": "600822",
			"涨跌幅度": "3.28",
			"name": "上海物贸"
		},
		{
			"code": "300029",
			"涨跌幅度": "0.37",
			"name": "天龙光电"
		},
		{
			"code": "000066",
			"涨跌幅度": "-41.27",
			"name": "长城电脑"
		},
		{
			"code": "600167",
			"涨跌幅度": "-31.87",
			"name": "联美控股"
		},
		{
			"code": "002062",
			"涨跌幅度": "6.81",
			"name": "宏润建设"
		},
		{
			"code": "300379",
			"涨跌幅度": "-22.51",
			"name": "东方通"
		},
		{
			"code": "600099",
			"涨跌幅度": "-1.87",
			"name": "林海股份"
		},
		{
			"code": "600380",
			"涨跌幅度": "-24.47",
			"name": "健康元"
		},
		{
			"code": "300315",
			"涨跌幅度": "-24.08",
			"name": "掌趣科技"
		},
		{
			"code": "002410",
			"涨跌幅度": "-19.64",
			"name": "广联达"
		},
		{
			"code": "002088",
			"涨跌幅度": "8.2",
			"name": "鲁阳节能"
		},
		{
			"code": "600613",
			"涨跌幅度": "-22.76",
			"name": "神奇制药"
		},
		{
			"code": "002627",
			"涨跌幅度": "-0.97",
			"name": "宜昌交运"
		},
		{
			"code": "600887",
			"涨跌幅度": "33.84",
			"name": "伊利股份"
		},
		{
			"code": "000060",
			"涨跌幅度": "-1.92",
			"name": "中金岭南"
		},
		{
			"code": "603203",
			"涨跌幅度": "302.37",
			"name": "快克股份"
		},
		{
			"code": "603099",
			"涨跌幅度": "-4.99",
			"name": "长白山"
		},
		{
			"code": "300490",
			"涨跌幅度": "323.73",
			"name": "华自科技"
		},
		{
			"code": "600500",
			"涨跌幅度": "-3.6",
			"name": "中化国际"
		},
		{
			"code": "000680",
			"涨跌幅度": "-6.13",
			"name": "山推股份"
		},
		{
			"code": "603528",
			"涨跌幅度": "495.0",
			"name": "多伦科技"
		},
		{
			"code": "002760",
			"涨跌幅度": "-8.11",
			"name": "凤形股份"
		},
		{
			"code": "002288",
			"涨跌幅度": "-15.21",
			"name": "超华科技"
		},
		{
			"code": "001979",
			"涨跌幅度": "-18.36",
			"name": "招商蛇口"
		},
		{
			"code": "002435",
			"涨跌幅度": "128.05",
			"name": "长江润发"
		},
		{
			"code": "300085",
			"涨跌幅度": "-43.64",
			"name": "银之杰"
		},
		{
			"code": "002049",
			"涨跌幅度": "-42.65",
			"name": "紫光国芯"
		},
		{
			"code": "000990",
			"涨跌幅度": "-37.03",
			"name": "诚志股份"
		},
		{
			"code": "002412",
			"涨跌幅度": "-19.96",
			"name": "汉森制药"
		},
		{
			"code": "300497",
			"涨跌幅度": "477.25",
			"name": "富祥股份"
		},
		{
			"code": "000983",
			"涨跌幅度": "64.61",
			"name": "西山煤电"
		},
		{
			"code": "300152",
			"涨跌幅度": "-44.11",
			"name": "科融环境"
		},
		{
			"code": "002315",
			"涨跌幅度": "-33.8",
			"name": "焦点科技"
		},
		{
			"code": "600476",
			"涨跌幅度": "-16.44",
			"name": "湘邮科技"
		},
		{
			"code": "002734",
			"涨跌幅度": "11.19",
			"name": "利民股份"
		},
		{
			"code": "300245",
			"涨跌幅度": "-22.93",
			"name": "天玑科技"
		},
		{
			"code": "300456",
			"涨跌幅度": "19.32",
			"name": "耐威科技"
		},
		{
			"code": "300053",
			"涨跌幅度": "-10.11",
			"name": "欧比特"
		},
		{
			"code": "002623",
			"涨跌幅度": "1.68",
			"name": "亚玛顿"
		},
		{
			"code": "600343",
			"涨跌幅度": "-7.32",
			"name": "航天动力"
		},
		{
			"code": "600684",
			"涨跌幅度": "-15.56",
			"name": "珠江实业"
		},
		{
			"code": "300399",
			"涨跌幅度": "-43.45",
			"name": "京天利"
		},
		{
			"code": "600258",
			"涨跌幅度": "32.01",
			"name": "首旅酒店"
		},
		{
			"code": "300386",
			"涨跌幅度": "24.1",
			"name": "飞天诚信"
		},
		{
			"code": "000503",
			"涨跌幅度": "68.63",
			"name": "海虹控股"
		},
		{
			"code": "300320",
			"涨跌幅度": "52.3",
			"name": "海达股份"
		},
		{
			"code": "000402",
			"涨跌幅度": "20.77",
			"name": "金 融 街"
		},
		{
			"code": "000638",
			"涨跌幅度": "-26.82",
			"name": "万方发展"
		},
		{
			"code": "300375",
			"涨跌幅度": "13.58",
			"name": "鹏翎股份"
		},
		{
			"code": "002592",
			"涨跌幅度": "-35.38",
			"name": "八菱科技"
		},
		{
			"code": "300275",
			"涨跌幅度": "-23.39",
			"name": "梅安森"
		},
		{
			"code": "002363",
			"涨跌幅度": "-15.79",
			"name": "隆基机械"
		},
		{
			"code": "002215",
			"涨跌幅度": "-36.28",
			"name": "诺 普 信"
		},
		{
			"code": "603919",
			"涨跌幅度": "144.33",
			"name": "金徽酒"
		},
		{
			"code": "300310",
			"涨跌幅度": "-9.47",
			"name": "宜通世纪"
		},
		{
			"code": "300489",
			"涨跌幅度": "-30.26",
			"name": "中飞股份"
		},
		{
			"code": "002186",
			"涨跌幅度": "5.39",
			"name": "全 聚 德"
		},
		{
			"code": "000715",
			"涨跌幅度": "20.86",
			"name": "中兴商业"
		},
		{
			"code": "002176",
			"涨跌幅度": "-10.18",
			"name": "江特电机"
		},
		{
			"code": "300551",
			"涨跌幅度": "414.99",
			"name": "古鳌科技"
		},
		{
			"code": "300287",
			"涨跌幅度": "-31.72",
			"name": "飞利信"
		},
		{
			"code": "600789",
			"涨跌幅度": "-19.28",
			"name": "鲁抗医药"
		},
		{
			"code": "601127",
			"涨跌幅度": "300.43",
			"name": "小康股份"
		},
		{
			"code": "300044",
			"涨跌幅度": "-8.42",
			"name": "赛为智能"
		},
		{
			"code": "002815",
			"涨跌幅度": "162.35",
			"name": "崇达技术"
		},
		{
			"code": "600376",
			"涨跌幅度": "4.97",
			"name": "首开股份"
		},
		{
			"code": "000537",
			"涨跌幅度": "-4.0",
			"name": "广宇发展"
		},
		{
			"code": "000020",
			"涨跌幅度": "-26.11",
			"name": "深华发Ａ"
		},
		{
			"code": "300162",
			"涨跌幅度": "-31.1",
			"name": "雷曼股份"
		},
		{
			"code": "300425",
			"涨跌幅度": "-30.43",
			"name": "环能科技"
		},
		{
			"code": "600828",
			"涨跌幅度": "-1.58",
			"name": "茂业商业"
		},
		{
			"code": "600731",
			"涨跌幅度": "-9.05",
			"name": "湖南海利"
		},
		{
			"code": "000893",
			"涨跌幅度": "-24.11",
			"name": "东凌国际"
		},
		{
			"code": "300519",
			"涨跌幅度": "566.3",
			"name": "新光药业"
		},
		{
			"code": "002093",
			"涨跌幅度": "-16.12",
			"name": "国脉科技"
		},
		{
			"code": "002545",
			"涨跌幅度": "31.18",
			"name": "东方铁塔"
		},
		{
			"code": "300226",
			"涨跌幅度": "-13.7",
			"name": "上海钢联"
		},
		{
			"code": "002274",
			"涨跌幅度": "-24.22",
			"name": "华昌化工"
		},
		{
			"code": "000669",
			"涨跌幅度": "-27.72",
			"name": "金鸿能源"
		},
		{
			"code": "002136",
			"涨跌幅度": "4.7",
			"name": "安 纳 达"
		},
		{
			"code": "600737",
			"涨跌幅度": "-21.13",
			"name": "中粮屯河"
		},
		{
			"code": "600238",
			"涨跌幅度": "-22.66",
			"name": "海南椰岛"
		},
		{
			"code": "002371",
			"涨跌幅度": "57.97",
			"name": "七星电子"
		},
		{
			"code": "603166",
			"涨跌幅度": "-12.62",
			"name": "福达股份"
		},
		{
			"code": "002035",
			"涨跌幅度": "75.98",
			"name": "华帝股份"
		},
		{
			"code": "600838",
			"涨跌幅度": "9.72",
			"name": "上海九百"
		},
		{
			"code": "603328",
			"涨跌幅度": "6.34",
			"name": "依顿电子"
		},
		{
			"code": "600392",
			"涨跌幅度": "4.55",
			"name": "盛和资源"
		},
		{
			"code": "300470",
			"涨跌幅度": "-28.57",
			"name": "日机密封"
		},
		{
			"code": "600262",
			"涨跌幅度": "-34.0",
			"name": "北方股份"
		},
		{
			"code": "603016",
			"涨跌幅度": "290.02",
			"name": "新宏泰"
		},
		{
			"code": "603936",
			"涨跌幅度": "214.62",
			"name": "博敏电子"
		},
		{
			"code": "600497",
			"涨跌幅度": "67.06",
			"name": "驰宏锌锗"
		},
		{
			"code": "300010",
			"涨跌幅度": "-39.96",
			"name": "立思辰"
		},
		{
			"code": "300354",
			"涨跌幅度": "-27.04",
			"name": "东华测试"
		},
		{
			"code": "600873",
			"涨跌幅度": "-21.31",
			"name": "梅花生物"
		},
		{
			"code": "300193",
			"涨跌幅度": "-20.2",
			"name": "佳士科技"
		},
		{
			"code": "300018",
			"涨跌幅度": "-27.22",
			"name": "中元股份"
		},
		{
			"code": "300064",
			"涨跌幅度": "-16.52",
			"name": "豫金刚石"
		},
		{
			"code": "002251",
			"涨跌幅度": "0.43",
			"name": "步 步 高"
		},
		{
			"code": "300382",
			"涨跌幅度": "20.78",
			"name": "斯莱克"
		},
		{
			"code": "300180",
			"涨跌幅度": "41.49",
			"name": "华峰超纤"
		},
		{
			"code": "300260",
			"涨跌幅度": "10.02",
			"name": "新莱应材"
		},
		{
			"code": "300377",
			"涨跌幅度": "-2.54",
			"name": "赢时胜"
		},
		{
			"code": "002708",
			"涨跌幅度": "-18.63",
			"name": "光洋股份"
		},
		{
			"code": "600821",
			"涨跌幅度": "45.25",
			"name": "津劝业"
		},
		{
			"code": "300329",
			"涨跌幅度": "-9.63",
			"name": "海伦钢琴"
		},
		{
			"code": "002682",
			"涨跌幅度": "-7.23",
			"name": "龙洲股份"
		},
		{
			"code": "600058",
			"涨跌幅度": "-45.8",
			"name": "五矿发展"
		},
		{
			"code": "600775",
			"涨跌幅度": "-11.6",
			"name": "南京熊猫"
		},
		{
			"code": "002580",
			"涨跌幅度": "2.21",
			"name": "圣阳股份"
		},
		{
			"code": "600128",
			"涨跌幅度": "5.51",
			"name": "弘业股份"
		},
		{
			"code": "000878",
			"涨跌幅度": "13.6",
			"name": "云南铜业"
		},
		{
			"code": "300546",
			"涨跌幅度": "515.5",
			"name": "雄帝科技"
		},
		{
			"code": "600678",
			"涨跌幅度": "-15.98",
			"name": "四川金顶"
		},
		{
			"code": "300220",
			"涨跌幅度": "-20.9",
			"name": "金运激光"
		},
		{
			"code": "603118",
			"涨跌幅度": "-20.75",
			"name": "共进股份"
		},
		{
			"code": "300014",
			"涨跌幅度": "10.48",
			"name": "亿纬锂能"
		},
		{
			"code": "300390",
			"涨跌幅度": "-29.97",
			"name": "天华超净"
		},
		{
			"code": "600694",
			"涨跌幅度": "8.23",
			"name": "大商股份"
		},
		{
			"code": "300479",
			"涨跌幅度": "-40.89",
			"name": "神思电子"
		},
		{
			"code": "002669",
			"涨跌幅度": "2.23",
			"name": "康达新材"
		},
		{
			"code": "300279",
			"涨跌幅度": "-9.44",
			"name": "和晶科技"
		},
		{
			"code": "300403",
			"涨跌幅度": "14.05",
			"name": "地尔汉宇"
		},
		{
			"code": "603131",
			"涨跌幅度": "345.35",
			"name": "上海沪工"
		},
		{
			"code": "600328",
			"涨跌幅度": "-11.5",
			"name": "兰太实业"
		},
		{
			"code": "600579",
			"涨跌幅度": "-2.47",
			"name": "天华院"
		},
		{
			"code": "002534",
			"涨跌幅度": "22.53",
			"name": "杭锅股份"
		},
		{
			"code": "000758",
			"涨跌幅度": "18.77",
			"name": "中色股份"
		},
		{
			"code": "601999",
			"涨跌幅度": "-1.82",
			"name": "出版传媒"
		},
		{
			"code": "300037",
			"涨跌幅度": "36.21",
			"name": "新宙邦"
		},
		{
			"code": "601595",
			"涨跌幅度": "259.85",
			"name": "上海电影"
		},
		{
			"code": "300281",
			"涨跌幅度": "7.25",
			"name": "金明精机"
		},
		{
			"code": "002154",
			"涨跌幅度": "-25.9",
			"name": "报 喜 鸟"
		},
		{
			"code": "300539",
			"涨跌幅度": "622.48",
			"name": "横河模具"
		},
		{
			"code": "300387",
			"涨跌幅度": "18.15",
			"name": "富邦股份"
		},
		{
			"code": "300270",
			"涨跌幅度": "-10.29",
			"name": "中威电子"
		},
		{
			"code": "002280",
			"涨跌幅度": "-26.21",
			"name": "联络互动"
		},
		{
			"code": "300508",
			"涨跌幅度": "451.46",
			"name": "维宏股份"
		},
		{
			"code": "600259",
			"涨跌幅度": "13.85",
			"name": "广晟有色"
		},
		{
			"code": "300503",
			"涨跌幅度": "885.96",
			"name": "昊志机电"
		},
		{
			"code": "000918",
			"涨跌幅度": "68.86",
			"name": "嘉凯城"
		},
		{
			"code": "002110",
			"涨跌幅度": "50.0",
			"name": "三钢闽光"
		},
		{
			"code": "300233",
			"涨跌幅度": "-21.94",
			"name": "金城医药"
		},
		{
			"code": "000782",
			"涨跌幅度": "-36.16",
			"name": "美达股份"
		},
		{
			"code": "300380",
			"涨跌幅度": "-38.57",
			"name": "安硕信息"
		},
		{
			"code": "000716",
			"涨跌幅度": "",
			"name": "黑芝麻"
		},
		{
			"code": "002046",
			"涨跌幅度": "1.15",
			"name": "轴研科技"
		},
		{
			"code": "300528",
			"涨跌幅度": "339.63",
			"name": "幸福蓝海"
		},
		{
			"code": "300458",
			"涨跌幅度": "-3.09",
			"name": "全志科技"
		},
		{
			"code": "002383",
			"涨跌幅度": "29.32",
			"name": "合众思壮"
		},
		{
			"code": "603828",
			"涨跌幅度": "6.19",
			"name": "柯利达"
		},
		{
			"code": "603520",
			"涨跌幅度": "199.83",
			"name": "司太立"
		},
		{
			"code": "603883",
			"涨跌幅度": "-30.36",
			"name": "老百姓"
		},
		{
			"code": "300229",
			"涨跌幅度": "-39.78",
			"name": "拓尔思"
		},
		{
			"code": "002360",
			"涨跌幅度": "-5.08",
			"name": "同德化工"
		},
		{
			"code": "300402",
			"涨跌幅度": "20.67",
			"name": "宝色股份"
		},
		{
			"code": "300388",
			"涨跌幅度": "-30.5",
			"name": "国祯环保"
		},
		{
			"code": "300492",
			"涨跌幅度": "585.73",
			"name": "山鼎设计"
		},
		{
			"code": "603066",
			"涨跌幅度": "-6.5",
			"name": "音飞储存"
		},
		{
			"code": "002355",
			"涨跌幅度": "1.3",
			"name": "兴民智通"
		},
		{
			"code": "002598",
			"涨跌幅度": "-0.71",
			"name": "山东章鼓"
		},
		{
			"code": "002705",
			"涨跌幅度": "22.62",
			"name": "新宝股份"
		},
		{
			"code": "600456",
			"涨跌幅度": "-8.11",
			"name": "宝钛股份"
		},
		{
			"code": "300348",
			"涨跌幅度": "-16.02",
			"name": "长亮科技"
		},
		{
			"code": "300073",
			"涨跌幅度": "46.34",
			"name": "当升科技"
		},
		{
			"code": "300140",
			"涨跌幅度": "-29.8",
			"name": "启源装备"
		},
		{
			"code": "603611",
			"涨跌幅度": "11.45",
			"name": "诺力股份"
		},
		{
			"code": "300461",
			"涨跌幅度": "16.69",
			"name": "田中精机"
		},
		{
			"code": "300077",
			"涨跌幅度": "-8.29",
			"name": "国民技术"
		},
		{
			"code": "600660",
			"涨跌幅度": "34.39",
			"name": "福耀玻璃"
		},
		{
			"code": "300409",
			"涨跌幅度": "34.51",
			"name": "道氏技术"
		},
		{
			"code": "002194",
			"涨跌幅度": "-1.42",
			"name": "武汉凡谷"
		},
		{
			"code": "300290",
			"涨跌幅度": "-24.68",
			"name": "荣科科技"
		},
		{
			"code": "300056",
			"涨跌幅度": "-13.76",
			"name": "三维丝"
		},
		{
			"code": "000695",
			"涨跌幅度": "-14.47",
			"name": "滨海能源"
		},
		{
			"code": "002771",
			"涨跌幅度": "-34.89",
			"name": "真视通"
		},
		{
			"code": "603729",
			"涨跌幅度": "-31.3",
			"name": "龙韵股份"
		},
		{
			"code": "601699",
			"涨跌幅度": "44.34",
			"name": "潞安环能"
		},
		{
			"code": "000911",
			"涨跌幅度": "12.86",
			"name": "南宁糖业"
		},
		{
			"code": "300045",
			"涨跌幅度": "-28.33",
			"name": "华力创通"
		},
		{
			"code": "300272",
			"涨跌幅度": "-35.34",
			"name": "开能环保"
		},
		{
			"code": "300333",
			"涨跌幅度": "-35.87",
			"name": "兆日科技"
		},
		{
			"code": "600051",
			"涨跌幅度": "4.5",
			"name": "宁波联合"
		},
		{
			"code": "603519",
			"涨跌幅度": "21.21",
			"name": "立霸股份"
		},
		{
			"code": "002649",
			"涨跌幅度": "-27.19",
			"name": "博彦科技"
		},
		{
			"code": "300460",
			"涨跌幅度": "-24.4",
			"name": "惠伦晶体"
		},
		{
			"code": "002685",
			"涨跌幅度": "-6.85",
			"name": "华东重机"
		},
		{
			"code": "300468",
			"涨跌幅度": "-35.26",
			"name": "四方精创"
		},
		{
			"code": "000679",
			"涨跌幅度": "-6.82",
			"name": "大连友谊"
		},
		{
			"code": "603515",
			"涨跌幅度": "138.82",
			"name": "欧普照明"
		},
		{
			"code": "603901",
			"涨跌幅度": "-3.78",
			"name": "永创智能"
		},
		{
			"code": "300417",
			"涨跌幅度": "-15.53",
			"name": "南华仪器"
		},
		{
			"code": "603663",
			"涨跌幅度": "448.42",
			"name": "三祥新材"
		},
		{
			"code": "300507",
			"涨跌幅度": "310.4",
			"name": "苏奥传感"
		},
		{
			"code": "300410",
			"涨跌幅度": "-7.67",
			"name": "正业科技"
		},
		{
			"code": "300369",
			"涨跌幅度": "-14.1",
			"name": "绿盟科技"
		},
		{
			"code": "300046",
			"涨跌幅度": "-1.09",
			"name": "台基股份"
		},
		{
			"code": "002793",
			"涨跌幅度": "485.1",
			"name": "东音股份"
		},
		{
			"code": "300159",
			"涨跌幅度": "3.22",
			"name": "新研股份"
		},
		{
			"code": "603868",
			"涨跌幅度": "92.47",
			"name": "飞科电器"
		},
		{
			"code": "002813",
			"涨跌幅度": "567.26",
			"name": "路畅科技"
		},
		{
			"code": "300074",
			"涨跌幅度": "-27.56",
			"name": "华平股份"
		},
		{
			"code": "002763",
			"涨跌幅度": "-25.28",
			"name": "汇洁股份"
		},
		{
			"code": "600802",
			"涨跌幅度": "12.83",
			"name": "福建水泥"
		},
		{
			"code": "600113",
			"涨跌幅度": "39.02",
			"name": "浙江东日"
		},
		{
			"code": "002322",
			"涨跌幅度": "-7.16",
			"name": "理工环科"
		},
		{
			"code": "300552",
			"涨跌幅度": "385.58",
			"name": "万集科技"
		},
		{
			"code": "300545",
			"涨跌幅度": "476.85",
			"name": "联得装备"
		},
		{
			"code": "300209",
			"涨跌幅度": "29.28",
			"name": "天泽信息"
		},
		{
			"code": "002164",
			"涨跌幅度": "6.1",
			"name": "宁波东力"
		},
		{
			"code": "600769",
			"涨跌幅度": "-6.12",
			"name": "祥龙电业"
		},
		{
			"code": "300332",
			"涨跌幅度": "-18.94",
			"name": "天壕环境"
		},
		{
			"code": "300103",
			"涨跌幅度": "6.12",
			"name": "达刚路机"
		},
		{
			"code": "000605",
			"涨跌幅度": "-11.28",
			"name": "渤海股份"
		},
		{
			"code": "600378",
			"涨跌幅度": "-3.06",
			"name": "天科股份"
		},
		{
			"code": "603031",
			"涨跌幅度": "297.21",
			"name": "安德利"
		},
		{
			"code": "300381",
			"涨跌幅度": "52.81",
			"name": "溢多利"
		},
		{
			"code": "600408",
			"涨跌幅度": "11.55",
			"name": "安泰集团"
		},
		{
			"code": "300141",
			"涨跌幅度": "-5.69",
			"name": "和顺电气"
		},
		{
			"code": "603798",
			"涨跌幅度": "221.17",
			"name": "康普顿"
		},
		{
			"code": "002587",
			"涨跌幅度": "",
			"name": "奥拓电子"
		},
		{
			"code": "603508",
			"涨跌幅度": "76.7",
			"name": "思维列控"
		},
		{
			"code": "300486",
			"涨跌幅度": "-44.35",
			"name": "东杰智能"
		},
		{
			"code": "300543",
			"涨跌幅度": "397.98",
			"name": "朗科智能"
		},
		{
			"code": "300081",
			"涨跌幅度": "-2.62",
			"name": "恒信移动"
		},
		{
			"code": "600529",
			"涨跌幅度": "23.83",
			"name": "山东药玻"
		},
		{
			"code": "603368",
			"涨跌幅度": "-9.54",
			"name": "柳州医药"
		},
		{
			"code": "300153",
			"涨跌幅度": "44.7",
			"name": "科泰电源"
		},
		{
			"code": "002479",
			"涨跌幅度": "-6.71",
			"name": "富春环保"
		},
		{
			"code": "002655",
			"涨跌幅度": "0.58",
			"name": "共达电声"
		},
		{
			"code": "600370",
			"涨跌幅度": "22.05",
			"name": "三房巷"
		},
		{
			"code": "300541",
			"涨跌幅度": "410.92",
			"name": "先进数通"
		},
		{
			"code": "300430",
			"涨跌幅度": "-24.24",
			"name": "诚益通"
		},
		{
			"code": "600208",
			"涨跌幅度": "-15.16",
			"name": "新湖中宝"
		},
		{
			"code": "002522",
			"涨跌幅度": "-7.54",
			"name": "浙江众成"
		},
		{
			"code": "300019",
			"涨跌幅度": "-1.74",
			"name": "硅宝科技"
		},
		{
			"code": "300231",
			"涨跌幅度": "-17.04",
			"name": "银信科技"
		},
		{
			"code": "002800",
			"涨跌幅度": "722.51",
			"name": "天顺股份"
		},
		{
			"code": "600141",
			"涨跌幅度": "18.54",
			"name": "兴发集团"
		},
		{
			"code": "600877",
			"涨跌幅度": "-16.71",
			"name": "中国嘉陵"
		},
		{
			"code": "002729",
			"涨跌幅度": "14.9",
			"name": "好利来"
		},
		{
			"code": "300327",
			"涨跌幅度": "30.32",
			"name": "中颖电子"
		},
		{
			"code": "002393",
			"涨跌幅度": "-9.94",
			"name": "力生制药"
		},
		{
			"code": "300201",
			"涨跌幅度": "9.4",
			"name": "海伦哲"
		},
		{
			"code": "002732",
			"涨跌幅度": "20.45",
			"name": "燕塘乳业"
		},
		{
			"code": "300339",
			"涨跌幅度": "-27.48",
			"name": "润和软件"
		},
		{
			"code": "000012",
			"涨跌幅度": "31.21",
			"name": "南 玻Ａ"
		},
		{
			"code": "002805",
			"涨跌幅度": "739.22",
			"name": "丰元股份"
		},
		{
			"code": "603069",
			"涨跌幅度": "354.8",
			"name": "海汽集团"
		},
		{
			"code": "002082",
			"涨跌幅度": "105.54",
			"name": "栋梁新材"
		},
		{
			"code": "000595",
			"涨跌幅度": "37.0",
			"name": "宝塔实业"
		},
		{
			"code": "002790",
			"涨跌幅度": "150.86",
			"name": "瑞尔特"
		},
		{
			"code": "300515",
			"涨跌幅度": "485.21",
			"name": "三德科技"
		},
		{
			"code": "600507",
			"涨跌幅度": "8.62",
			"name": "方大特钢"
		},
		{
			"code": "603988",
			"涨跌幅度": "41.22",
			"name": "中电电机"
		},
		{
			"code": "002740",
			"涨跌幅度": "-9.56",
			"name": "爱迪尔"
		},
		{
			"code": "002748",
			"涨跌幅度": "6.17",
			"name": "世龙实业"
		},
		{
			"code": "600746",
			"涨跌幅度": "36.73",
			"name": "江苏索普"
		},
		{
			"code": "300385",
			"涨跌幅度": "-16.94",
			"name": "雪浪环境"
		},
		{
			"code": "603393",
			"涨跌幅度": "89.09",
			"name": "新天然气"
		},
		{
			"code": "603669",
			"涨跌幅度": "-6.46",
			"name": "灵康药业"
		},
		{
			"code": "300499",
			"涨跌幅度": "341.44",
			"name": "高澜股份"
		},
		{
			"code": "300550",
			"涨跌幅度": "424.79",
			"name": "和仁科技"
		},
		{
			"code": "300138",
			"涨跌幅度": "12.29",
			"name": "晨光生物"
		},
		{
			"code": "002724",
			"涨跌幅度": "2.05",
			"name": "海洋王"
		},
		{
			"code": "300529",
			"涨跌幅度": "321.3",
			"name": "健帆生物"
		},
		{
			"code": "000912",
			"涨跌幅度": "82.13",
			"name": "泸天化"
		},
		{
			"code": "600191",
			"涨跌幅度": "-24.86",
			"name": "华资实业"
		},
		{
			"code": "000026",
			"涨跌幅度": "1.37",
			"name": "飞亚达Ａ"
		},
		{
			"code": "002770",
			"涨跌幅度": "-5.25",
			"name": "科迪乳业"
		},
		{
			"code": "600182",
			"涨跌幅度": "105.27",
			"name": "S佳通"
		},
		{
			"code": "600120",
			"涨跌幅度": "42.15",
			"name": "浙江东方"
		},
		{
			"code": "600272",
			"涨跌幅度": "9.75",
			"name": "开开实业"
		},
		{
			"code": "002320",
			"涨跌幅度": "-38.87",
			"name": "海峡股份"
		},
		{
			"code": "002231",
			"涨跌幅度": "-8.59",
			"name": "奥维通信"
		},
		{
			"code": "000609",
			"涨跌幅度": "9.1",
			"name": "绵石投资"
		},
		{
			"code": "300105",
			"涨跌幅度": "-21.5",
			"name": "龙源技术"
		},
		{
			"code": "603701",
			"涨跌幅度": "256.21",
			"name": "德宏股份"
		},
		{
			"code": "002762",
			"涨跌幅度": "-7.76",
			"name": "金发拉比"
		},
		{
			"code": "300558",
			"涨跌幅度": "249.94",
			"name": "贝达药业"
		},
		{
			"code": "300295",
			"涨跌幅度": "-40.63",
			"name": "三六五网"
		},
		{
			"code": "002757",
			"涨跌幅度": "-15.71",
			"name": "南兴装备"
		},
		{
			"code": "300536",
			"涨跌幅度": "421.44",
			"name": "农尚环境"
		},
		{
			"code": "300521",
			"涨跌幅度": "432.94",
			"name": "爱司凯"
		},
		{
			"code": "002212",
			"涨跌幅度": "40.23",
			"name": "南洋股份"
		},
		{
			"code": "002351",
			"涨跌幅度": "-1.76",
			"name": "漫步者"
		},
		{
			"code": "002464",
			"涨跌幅度": "-11.48",
			"name": "金利科技"
		},
		{
			"code": "603101",
			"涨跌幅度": "111.27",
			"name": "汇嘉时代"
		},
		{
			"code": "300116",
			"涨跌幅度": "66.64",
			"name": "坚瑞沃能"
		},
		{
			"code": "002792",
			"涨跌幅度": "182.13",
			"name": "通宇通讯"
		},
		{
			"code": "600536",
			"涨跌幅度": "-10.34",
			"name": "中国软件"
		},
		{
			"code": "300364",
			"涨跌幅度": "-53.03",
			"name": "中文在线"
		},
		{
			"code": "300340",
			"涨跌幅度": "99.49",
			"name": "科恒股份"
		},
		{
			"code": "600338",
			"涨跌幅度": "91.37",
			"name": "西藏珠峰"
		},
		{
			"code": "002560",
			"涨跌幅度": "-9.74",
			"name": "通达股份"
		},
		{
			"code": "300494",
			"涨跌幅度": "222.18",
			"name": "盛天网络"
		},
		{
			"code": "000037",
			"涨跌幅度": "-16.58",
			"name": "*ST南电A"
		},
		{
			"code": "300126",
			"涨跌幅度": "-41.91",
			"name": "锐奇股份"
		},
		{
			"code": "300139",
			"涨跌幅度": "-26.8",
			"name": "晓程科技"
		},
		{
			"code": "300481",
			"涨跌幅度": "31.35",
			"name": "濮阳惠成"
		},
		{
			"code": "002696",
			"涨跌幅度": "-4.3",
			"name": "百洋股份"
		},
		{
			"code": "300426",
			"涨跌幅度": "-14.4",
			"name": "唐德影视"
		},
		{
			"code": "000937",
			"涨跌幅度": "50.2",
			"name": "冀中能源"
		},
		{
			"code": "002058",
			"涨跌幅度": "15.36",
			"name": "威 尔 泰"
		},
		{
			"code": "300023",
			"涨跌幅度": "45.12",
			"name": "宝德股份"
		},
		{
			"code": "603028",
			"涨跌幅度": "375.53",
			"name": "赛福天"
		},
		{
			"code": "603959",
			"涨跌幅度": "265.55",
			"name": "百利科技"
		},
		{
			"code": "300448",
			"涨跌幅度": "-38.67",
			"name": "浩云科技"
		},
		{
			"code": "600719",
			"涨跌幅度": "1.88",
			"name": "大连热电"
		},
		{
			"code": "603737",
			"涨跌幅度": "247.1",
			"name": "三棵树"
		},
		{
			"code": "300211",
			"涨跌幅度": "13.88",
			"name": "亿通科技"
		},
		{
			"code": "603888",
			"涨跌幅度": "215.77",
			"name": "新华网"
		},
		{
			"code": "603339",
			"涨跌幅度": "189.43",
			"name": "四方冷链"
		},
		{
			"code": "300533",
			"涨跌幅度": "207.0",
			"name": "冰川网络"
		},
		{
			"code": "603779",
			"涨跌幅度": "381.63",
			"name": "威龙股份"
		},
		{
			"code": "000518",
			"涨跌幅度": "38.51",
			"name": "四环生物"
		},
		{
			"code": "002789",
			"涨跌幅度": "187.89",
			"name": "建艺集团"
		},
		{
			"code": "600318",
			"涨跌幅度": "-15.15",
			"name": "新力金融"
		},
		{
			"code": "300437",
			"涨跌幅度": "-17.47",
			"name": "清水源"
		},
		{
			"code": "300210",
			"涨跌幅度": "19.21",
			"name": "森远股份"
		},
		{
			"code": "300493",
			"涨跌幅度": "550.8",
			"name": "润欣科技"
		},
		{
			"code": "300509",
			"涨跌幅度": "306.94",
			"name": "新美星"
		},
		{
			"code": "300194",
			"涨跌幅度": "42.02",
			"name": "福安药业"
		},
		{
			"code": "300334",
			"涨跌幅度": "-27.98",
			"name": "津膜科技"
		},
		{
			"code": "002096",
			"涨跌幅度": "-33.15",
			"name": "南岭民爆"
		},
		{
			"code": "000929",
			"涨跌幅度": "55.2",
			"name": "兰州黄河"
		},
		{
			"code": "300555",
			"涨跌幅度": "312.23",
			"name": "路通视信"
		},
		{
			"code": "603716",
			"涨跌幅度": "265.01",
			"name": "塞力斯"
		},
		{
			"code": "300419",
			"涨跌幅度": "-40.19",
			"name": "浩丰科技"
		},
		{
			"code": "600241",
			"涨跌幅度": "26.65",
			"name": "时代万恒"
		},
		{
			"code": "300135",
			"涨跌幅度": "-38.29",
			"name": "宝利国际"
		},
		{
			"code": "300356",
			"涨跌幅度": "-2.7",
			"name": "光一科技"
		},
		{
			"code": "000890",
			"涨跌幅度": "-7.1",
			"name": "法 尔 胜"
		},
		{
			"code": "603007",
			"涨跌幅度": "309.58",
			"name": "花王股份"
		},
		{
			"code": "601968",
			"涨跌幅度": "-17.03",
			"name": "宝钢包装"
		},
		{
			"code": "300511",
			"涨跌幅度": "159.09",
			"name": "雪榕生物"
		},
		{
			"code": "600076",
			"涨跌幅度": "4.25",
			"name": "康欣新材"
		},
		{
			"code": "000656",
			"涨跌幅度": "-4.12",
			"name": "金科股份"
		},
		{
			"code": "300557",
			"涨跌幅度": "467.53",
			"name": "理工光科"
		},
		{
			"code": "000655",
			"涨跌幅度": "8.63",
			"name": "金岭矿业"
		},
		{
			"code": "600753",
			"涨跌幅度": "10.19",
			"name": "东方银星"
		},
		{
			"code": "300455",
			"涨跌幅度": "-11.33",
			"name": "康拓红外"
		},
		{
			"code": "300491",
			"涨跌幅度": "682.87",
			"name": "通合科技"
		},
		{
			"code": "300472",
			"涨跌幅度": "-4.1",
			"name": "新元科技"
		},
		{
			"code": "601677",
			"涨跌幅度": "9.76",
			"name": "明泰铝业"
		},
		{
			"code": "300518",
			"涨跌幅度": "379.07",
			"name": "盛讯达"
		},
		{
			"code": "002810",
			"涨跌幅度": "377.54",
			"name": "山东赫达"
		},
		{
			"code": "002765",
			"涨跌幅度": "1.37",
			"name": "蓝黛传动"
		},
		{
			"code": "603299",
			"涨跌幅度": "251.61",
			"name": "井神股份"
		},
		{
			"code": "002609",
			"涨跌幅度": "-17.88",
			"name": "捷顺科技"
		},
		{
			"code": "300405",
			"涨跌幅度": "-1.11",
			"name": "科隆精化"
		},
		{
			"code": "002401",
			"涨跌幅度": "-11.48",
			"name": "中海科技"
		},
		{
			"code": "300522",
			"涨跌幅度": "492.99",
			"name": "世名科技"
		},
		{
			"code": "603009",
			"涨跌幅度": "10.14",
			"name": "北特科技"
		},
		{
			"code": "000062",
			"涨跌幅度": "-21.37",
			"name": "深圳华强"
		},
		{
			"code": "603160",
			"涨跌幅度": "422.36",
			"name": "汇顶科技"
		},
		{
			"code": "002818",
			"涨跌幅度": "136.31",
			"name": "富森美"
		},
		{
			"code": "002783",
			"涨跌幅度": "167.29",
			"name": "凯龙股份"
		},
		{
			"code": "600671",
			"涨跌幅度": "29.43",
			"name": "天目药业"
		},
		{
			"code": "300434",
			"涨跌幅度": "2.92",
			"name": "金石东方"
		},
		{
			"code": "300534",
			"涨跌幅度": "369.11",
			"name": "陇神戎发"
		},
		{
			"code": "603608",
			"涨跌幅度": "119.72",
			"name": "天创时尚"
		},
		{
			"code": "300218",
			"涨跌幅度": "12.84",
			"name": "安利股份"
		},
		{
			"code": "603258",
			"涨跌幅度": "226.55",
			"name": "电魂网络"
		},
		{
			"code": "300160",
			"涨跌幅度": "35.01",
			"name": "秀强股份"
		},
		{
			"code": "300523",
			"涨跌幅度": "399.89",
			"name": "辰安科技"
		},
		{
			"code": "300560",
			"涨跌幅度": "456.5",
			"name": "中富通"
		},
		{
			"code": "002788",
			"涨跌幅度": "199.23",
			"name": "鹭燕医药"
		},
		{
			"code": "300549",
			"涨跌幅度": "326.97",
			"name": "优德精密"
		},
		{
			"code": "300371",
			"涨跌幅度": "19.01",
			"name": "汇中股份"
		},
		{
			"code": "300432",
			"涨跌幅度": "4.41",
			"name": "富临精工"
		},
		{
			"code": "002781",
			"涨跌幅度": "132.07",
			"name": "奇信股份"
		},
		{
			"code": "300192",
			"涨跌幅度": "2.01",
			"name": "科斯伍德"
		},
		{
			"code": "000533",
			"涨跌幅度": "24.64",
			"name": "万 家 乐"
		},
		{
			"code": "000651",
			"涨跌幅度": "63.5",
			"name": "格力电器"
		},
		{
			"code": "002395",
			"涨跌幅度": "-5.51",
			"name": "双象股份"
		},
		{
			"code": "300478",
			"涨跌幅度": "-11.34",
			"name": "杭州高新"
		},
		{
			"code": "300350",
			"涨跌幅度": "-17.88",
			"name": "华鹏飞"
		},
		{
			"code": "603738",
			"涨跌幅度": "335.83",
			"name": "泰晶科技"
		},
		{
			"code": "603025",
			"涨跌幅度": "-2.59",
			"name": "大豪科技"
		},
		{
			"code": "600571",
			"涨跌幅度": "-30.34",
			"name": "信雅达"
		},
		{
			"code": "002796",
			"涨跌幅度": "388.42",
			"name": "世嘉科技"
		},
		{
			"code": "300422",
			"涨跌幅度": "-27.03",
			"name": "博世科"
		},
		{
			"code": "300540",
			"涨跌幅度": "201.59",
			"name": "深冷股份"
		},
		{
			"code": "002802",
			"涨跌幅度": "513.13",
			"name": "洪汇新材"
		},
		{
			"code": "002723",
			"涨跌幅度": "14.79",
			"name": "金莱特"
		},
		{
			"code": "002207",
			"涨跌幅度": "10.87",
			"name": "准油股份"
		},
		{
			"code": "600596",
			"涨跌幅度": "-22.84",
			"name": "新安股份"
		},
		{
			"code": "000023",
			"涨跌幅度": "5.28",
			"name": "深天地Ａ"
		},
		{
			"code": "300109",
			"涨跌幅度": "-27.88",
			"name": "新开源"
		},
		{
			"code": "600679",
			"涨跌幅度": "52.48",
			"name": "上海凤凰"
		},
		{
			"code": "300487",
			"涨跌幅度": "-15.74",
			"name": "蓝晓科技"
		},
		{
			"code": "002620",
			"涨跌幅度": "56.21",
			"name": "瑞和股份"
		},
		{
			"code": "603377",
			"涨跌幅度": "105.31",
			"name": "东方时尚"
		},
		{
			"code": "300421",
			"涨跌幅度": "2.53",
			"name": "力星股份"
		},
		{
			"code": "002749",
			"涨跌幅度": "-12.35",
			"name": "国光股份"
		},
		{
			"code": "600697",
			"涨跌幅度": "17.83",
			"name": "欧亚集团"
		},
		{
			"code": "300532",
			"涨跌幅度": "402.35",
			"name": "今天国际"
		},
		{
			"code": "300241",
			"涨跌幅度": "6.97",
			"name": "瑞丰光电"
		},
		{
			"code": "000510",
			"涨跌幅度": "39.15",
			"name": "金路集团"
		},
		{
			"code": "300538",
			"涨跌幅度": "333.94",
			"name": "同益股份"
		},
		{
			"code": "002287",
			"涨跌幅度": "51.14",
			"name": "奇正藏药"
		},
		{
			"code": "002751",
			"涨跌幅度": "-59.73",
			"name": "易尚展示"
		},
		{
			"code": "600050",
			"涨跌幅度": "11.22",
			"name": "中国联通"
		},
		{
			"code": "600608",
			"涨跌幅度": "73.26",
			"name": "上海科技"
		},
		{
			"code": "600423",
			"涨跌幅度": "23.76",
			"name": "柳化股份"
		},
		{
			"code": "300517",
			"涨跌幅度": "326.7",
			"name": "海波重科"
		},
		{
			"code": "300520",
			"涨跌幅度": "757.38",
			"name": "科大国创"
		},
		{
			"code": "002809",
			"涨跌幅度": "221.63",
			"name": "红墙股份"
		},
		{
			"code": "600379",
			"涨跌幅度": "-1.19",
			"name": "宝光股份"
		},
		{
			"code": "300548",
			"涨跌幅度": "513.77",
			"name": "博创科技"
		},
		{
			"code": "002746",
			"涨跌幅度": "50.16",
			"name": "仙坛股份"
		},
		{
			"code": "603021",
			"涨跌幅度": "3.75",
			"name": "山东华鹏"
		},
		{
			"code": "300553",
			"涨跌幅度": "530.12",
			"name": "集智股份"
		},
		{
			"code": "300352",
			"涨跌幅度": "-18.96",
			"name": "北信源"
		},
		{
			"code": "300559",
			"涨跌幅度": "274.46",
			"name": "佳发安泰"
		},
		{
			"code": "300063",
			"涨跌幅度": "-18.49",
			"name": "天龙集团"
		},
		{
			"code": "300500",
			"涨跌幅度": "286.86",
			"name": "苏州设计"
		},
		{
			"code": "600558",
			"涨跌幅度": "5.73",
			"name": "大西洋"
		},
		{
			"code": "600381",
			"涨跌幅度": "-25.37",
			"name": "青海春天"
		},
		{
			"code": "300535",
			"涨跌幅度": "332.25",
			"name": "达威股份"
		},
		{
			"code": "002512",
			"涨跌幅度": "-16.76",
			"name": "达华智能"
		},
		{
			"code": "300530",
			"涨跌幅度": "403.49",
			"name": "达志科技"
		},
		{
			"code": "300547",
			"涨跌幅度": "268.82",
			"name": "川环科技"
		},
		{
			"code": "000906",
			"涨跌幅度": "-14.43",
			"name": "物产中拓"
		},
		{
			"code": "002785",
			"涨跌幅度": "1185.77",
			"name": "万里石"
		},
		{
			"code": "300441",
			"涨跌幅度": "-12.2",
			"name": "鲍斯股份"
		},
		{
			"code": "002812",
			"涨跌幅度": "164.68",
			"name": "创新股份"
		},
		{
			"code": "300445",
			"涨跌幅度": "7.6",
			"name": "康斯特"
		},
		{
			"code": "600599",
			"涨跌幅度": "0.44",
			"name": "熊猫金控"
		},
		{
			"code": "002621",
			"涨跌幅度": "34.15",
			"name": "三垒股份"
		},
		{
			"code": "002679",
			"涨跌幅度": "91.0",
			"name": "福建金森"
		},
		{
			"code": "300570",
			"涨跌幅度": "",
			"name": "太辰光"
		},
		{
			"code": "300372",
			"涨跌幅度": "-81.96",
			"name": "欣泰电气"
		},
		{
			"code": "002831",
			"涨跌幅度": "",
			"name": "裕同科技"
		},
		{
			"code": "002830",
			"涨跌幅度": "",
			"name": "名雕股份"
		},
		{
			"code": "002828",
			"涨跌幅度": "",
			"name": "贝肯能源"
		},
		{
			"code": "002827",
			"涨跌幅度": "",
			"name": "高争民爆"
		},
		{
			"code": "002826",
			"涨跌幅度": "",
			"name": "易明医药"
		},
		{
			"code": "000155",
			"涨跌幅度": "22.99",
			"name": "*ST川化"
		},
		{
			"code": "000033",
			"涨跌幅度": "",
			"name": "*ST新都"
		},
		{
			"code": "603990",
			"涨跌幅度": "",
			"name": "麦迪科技"
		},
		{
			"code": "603928",
			"涨跌幅度": "",
			"name": "兴业股份"
		},
		{
			"code": "603878",
			"涨跌幅度": "",
			"name": "武进不锈"
		},
		{
			"code": "603823",
			"涨跌幅度": "",
			"name": "百合花"
		},
		{
			"code": "603708",
			"涨跌幅度": "",
			"name": "家家悦"
		},
		{
			"code": "603585",
			"涨跌幅度": "",
			"name": "苏利股份"
		},
		{
			"code": "603416",
			"涨跌幅度": "",
			"name": "信捷电气"
		},
		{
			"code": "603389",
			"涨跌幅度": "",
			"name": "亚振家居"
		},
		{
			"code": "603239",
			"涨跌幅度": "",
			"name": "浙江仙通"
		},
		{
			"code": "603098",
			"涨跌幅度": "",
			"name": "森特股份"
		},
		{
			"code": "603036",
			"涨跌幅度": "",
			"name": "如通股份"
		},
		{
			"code": "603033",
			"涨跌幅度": "",
			"name": "三维股份"
		},
		{
			"code": "600909",
			"涨跌幅度": "",
			"name": "华安证券"
		},
		{
			"code": "600732",
			"涨跌幅度": "-0.52",
			"name": "*ST新梅"
		},
		{
			"code": "600710",
			"涨跌幅度": "72.06",
			"name": "*ST常林"
		},
		{
			"code": "300573",
			"涨跌幅度": "",
			"name": "兴齐眼药"
		},
		{
			"code": "300572",
			"涨跌幅度": "",
			"name": "安车检测"
		},
		{
			"code": "300571",
			"涨跌幅度": "",
			"name": "平治信息"
		}
	];

/***/ }
/******/ ]);