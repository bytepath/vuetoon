/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../bytepath/Animation/Animation.js":
/*!******************************************!*\
  !*** ../bytepath/Animation/Animation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../bytepath/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../bytepath/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../bytepath/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../bytepath/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.math.trunc */ "../bytepath/node_modules/core-js/modules/es.math.trunc.js");
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.max-safe-integer */ "../bytepath/node_modules/core-js/modules/es.number.max-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "../bytepath/node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");













var retval = /*#__PURE__*/function () {
  function AnimationPlayer(name, AnimationData) {
    var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__["default"])(this, AnimationPlayer);

    this.name = name;
    this.animation = AnimationData;
    this.repeat = repeat;
    this.timesRepeated = 0;
    this.previousKeyframe = 0; // If not null will force final animation frame to be this instead of whatever it's supposed to be

    this.forceFinalFrame = null;
    /**
     Determine the direction of playback. Direction can be three states:
     Animation.INITIAL = 0 = Animation has never been played
     Animation.REWIND = -1 = Animation is moving left along timeline toward frame START
     Animation.FASTFORWARD = 1 = Animation is moving right along timeline toward frame END
     Animation.INFINITY = 2 = Animation runs forever
     */

    this.INITIAL = 0;
    this.REWIND = -1;
    this.FASTFORWARD = 1;
    this.INFINITY = 2;
  }
  /**
   * Converts user keyframes (that continue on with increasing numbers forever) to animation keyframes.
   * Returns null if invalid keyframe for this animation
   *
   * @param keyframe
   * @param forceRepeat force this animation frame to be a repeating frame
   * @returns Integer|null
   */


  Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__["default"])(AnimationPlayer, [{
    key: "calculateAnimationKeyframe",
    value: function calculateAnimationKeyframe(keyframe) {
      var forceRepeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // If this animation should repeat then we return the modulo of the end keyframe
      var finalFrame = this.getFinalFrame();

      if (finalFrame) {
        if (this.repeat || forceRepeat || keyframe < finalFrame) {
          return keyframe % finalFrame;
        } // If we aren't set to repeat and we are past the end we have finished our animation


        return null;
      }

      return keyframe;
    }
    /**
     * Runs all valid animations for the provided keyframe
     * @param keyframe
     * @param context
     * @returns {boolean}
     *
     * @optimize We compute and return a list of valid animations then return them and process one by one. Can save some
     * frames here by passing a callback (already supported)
     */

  }, {
    key: "computeFrame",
    value: function computeFrame(keyframe, context) {
      // internal keyframe can vary from "user" keyframe if repeat = true so we need to calculate that
      var computedFrame = this.calculateAnimationKeyframe(keyframe, context.repeat); // If computed frame returns null it means this animation should be completed

      if (computedFrame !== null) {
        var delta = keyframe - this.previousKeyframe;
        if (delta === 0) return;
        this.previousKeyframe = keyframe;

        if (this.hasAnimationRepeated() || context.repeat) {
          this.resetAnimation(context);
        }

        var animationFrame = this.movePlaybackTo(computedFrame, delta);
        this.processAnimationFrame(context, animationFrame);
      } else {
        this.playFinalFrame(context);
      }

      this.currentFrame = keyframe;
    }
    /**
     * Did this animation repeat between now and the last time it was ran
     * @param keyframe
     * @param direction
     * @returns {boolean}
     */

  }, {
    key: "hasAnimationRepeated",
    value: function hasAnimationRepeated(keyframe) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      // We only repeat if we are moving forward
      if (direction >= this.FASTFORWARD) {
        if (this.animation.end && this.repeat) {
          var numRuns = Math.trunc(keyframe / this.animation.end);

          if (numRuns > this.timesRepeated) {
            this.timesRepeated = numRuns;
            return true;
          }
        }
      }

      return false;
    }
    /**
     * Returns the final frame of the animation
     * @TESTME
     */

  }, {
    key: "getFinalFrame",
    value: function getFinalFrame() {
      if (this.forceFinalFrame) {
        if (!this.animation.end) {
          return this.forceFinalFrame;
        }

        return this.forceFinalFrame > this.animation.end ? this.animation.end : this.forceFinalFrame;
      }

      return this.animation.end;
    }
    /**
     * Sets the final frame of this animation. Overrides default end frame (if it exists)
     * @param frame
     */

  }, {
    key: "setFinalFrame",
    value: function setFinalFrame(frame) {
      this.forceFinalFrame = frame;
    }
    /**
     * Play the specified frame
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */

  }, {
    key: "processAnimationFrame",
    value: function processAnimationFrame(context, frame) {
      if (frame.length > 0) {
        frame.map(function (action) {
          action(context);
        });
      }
    }
    /**
     * Returns an array functions that must be ran in order from left to right to ensure animation is in the correct
     * state
     * @param frame INT the frame number we are moving to
     * @param direction the direction we are moving
     *
     * @optimize We currently check ALL previous actions to ensure valid state but we could probably do this a faster way
     */

  }, {
    key: "movePlaybackTo",
    value: function movePlaybackTo(frame) {
      var _this = this;

      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var keyframe = frame;

      if (keyframe < 0) {
        keyframe = 0;
      }

      var actions = this.animation.data.actions;

      if (actions.length == 0) {
        return [];
      }
      /**
       * @optimize replace reverse hack with pointer based iterator
       */


      if (direction < 0) {
        actions = Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(actions).reverse();
      }

      var retval = {
        current: [],
        outdated: []
      };
      actions.map(function (action) {
        // If no start frame is specified we assume it's supposed to be zero
        var start = action.start ? action.start : 0; // If no end frame is specified assume there isn't one

        var end = action.end ? action.end : Number.MAX_SAFE_INTEGER; // Check to ensure the animation playback position is in the correct place
        // Check to ensure we finished the previous action

        if (action.position !== _this.INFINITY) {
          if (direction >= _this.FASTFORWARD) {
            if (action.previousFrame !== action.end) {
              if (keyframe > action.end) {
                return retval.outdated.push(_this.animation.fastForward(action));
              }
            }
          } else {
            // We didnt reach the final frame of this animation
            // so run its last frame to keep state in sync
            if (action.previousFrame !== action.start) {
              if (keyframe < action.start) {
                return retval.outdated.push(_this.animation.rewind(action));
              }
            }
          }
        } // If this action is within its execution range then we keep it


        if (keyframe >= start && keyframe <= end) {
          if (action.handler) {
            return retval.current.push(_this.animation.play(action, keyframe));
          }
        }
      }, this); // Return all actions that need to be ran

      return [].concat(Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(retval.outdated), Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(retval.current));
    }
    /**
     * Moves to and plays the last frame of the animation
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */

  }, {
    key: "playFinalFrame",
    value: function playFinalFrame(context) {
      if (!this.animation.hasFinishedPlaying()) {
        var animationFrame = this.movePlaybackTo(this.animation.end, this.FASTFORWARD);
        this.processAnimationFrame(context, animationFrame);
        this.previousFrame = this.animation.end;
      }
    }
    /**
     * Moves to and plays the first frame of the animation
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */

  }, {
    key: "playStartFrame",
    value: function playStartFrame(context) {
      if (this.previousFrame !== this.animation.start) {
        var animationFrame = this.movePlaybackTo(this.animation.start, this.REWIND);
        this.processAnimationFrame(context, animationFrame);
        this.previousFrame = this.animation.start;
      }
    }
  }, {
    key: "resetAnimation",
    value: function resetAnimation(context) {
      var _this2 = this;

      this.playFinalFrame(context);
      this.playStartFrame(context, true); // Call each reset function if it exists

      var actions = Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__["default"])(this.animation.data.actions).reverse();

      actions.filter(function (action) {
        if (action.reset) {
          console.log("calling reset func");
          action.reset(context);
          action.position = _this2.INITIAL;
        }
      }, this);
      this.previousFrame = 0;
      this.currentFrameRaw = null;
      this.playbackDirection = null;
      this.previousDirection = null;
    }
  }]);

  return AnimationPlayer;
}();

var args = {
  writable: false,
  enumerable: true,
  configurable: false
};
Object.defineProperty(retval, 'INITIAL', Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({
  value: 0
}, args));
Object.defineProperty(retval, 'REWIND', Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({
  value: -1
}, args));
Object.defineProperty(retval, 'FASTFORWARD', Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({
  value: 1
}, args));
Object.defineProperty(retval, 'INFINITY', Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__["default"])({
  value: 2
}, args));
/* harmony default export */ __webpack_exports__["default"] = (retval);

/***/ }),

/***/ "../bytepath/Animation/AnimationData.js":
/*!**********************************************!*\
  !*** ../bytepath/Animation/AnimationData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../bytepath/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../bytepath/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "../bytepath/node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Animation */ "../bytepath/Animation/Animation.js");
/* harmony import */ var _Helpers_Tween__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Tween */ "../bytepath/Helpers/Tween.js");









var retval = /*#__PURE__*/function () {
  function AnimationData(name, data) {
    var _this = this;

    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var repeat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AnimationData);

    // The name of this animation
    this.name = name; // The frame we start playing this animation

    this.start = start; // The last frame of the animation

    this.end = end; // Should this animation repeat

    this.repeat = repeat;
    /**
     * Add playback state to each animation action.
     * An animation has three possible playback states
     * Animation.INITIAL:: value = 0
     * This animation function has not been been ran since the last repeat. This is the default value
     *
     * Animation.REWIND:: value = -1
     * This animation has been played at least once with keyframe value decreasing  (Ex: frame 20 to frame 19)
     *
     * Animation.FASTFORWARD:: value = 1
     * This animation has been played at least once with keyframe value increasing (Ex:  frame 10 to frame 11)
     *
     * Animation.INFINITY:: value = 2
     * This animation plays indefinitely because it doesn't have an end value
     */

    this.data = {
      actions: []
    };
    var i = 0;
    data.actions.map(function (action) {
      var newAction = Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, action), {}, {
        position: _Animation__WEBPACK_IMPORTED_MODULE_6__["default"].INITIAL,
        index: i,
        previousFrame: 0
      }); // Add infinity action if no end


      _this.data.actions.push(newAction);

      i++;
    });
  }
  /**
   * Returns a function that can be used to play this animation by providing a context
   * @param action
   * @param keyframe
   * @returns {function({context: *}): *}
   */


  Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AnimationData, [{
    key: "play",
    value: function play(action) {
      var keyframe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return function (context) {
        if (!action.handler) return;
        action.previousFrame = keyframe;
        return action.handler({
          context: context,
          keyframe: keyframe,
          tween: new _Helpers_Tween__WEBPACK_IMPORTED_MODULE_7__["default"](keyframe, action.start, action.end)
        });
      };
    }
    /**
     * Returns a function that can be used to play this animation by providing a context
     * Forces keyframe to be action end property
     * @param action
     * @param keyframe
     * @returns {function({context: *}): *}
     */

  }, {
    key: "fastForward",
    value: function fastForward(action) {
      return function (context) {
        if (!action.handler) return;
        action.previousFrame = action.end;
        return action.handler({
          context: context,
          keyframe: action.end,
          tween: new _Helpers_Tween__WEBPACK_IMPORTED_MODULE_7__["default"](action.end, action.start, action.end)
        });
      };
    }
    /**
     * Returns a function that can be used to play this animation by providing a context
     * Forces keyframe to be action start property
     * @param action
     * @param keyframe
     * @returns {function({context: *}): *}
     */

  }, {
    key: "rewind",
    value: function rewind(action) {
      return function (context) {
        if (!action.handler) return;
        action.previousFrame = action.start;
        return action.handler({
          context: context,
          keyframe: action.start,
          tween: new _Helpers_Tween__WEBPACK_IMPORTED_MODULE_7__["default"](action.start, action.start, action.end)
        });
      };
    }
    /**
     * Has this animation finished playing
     * @returns {boolean}
     */

  }, {
    key: "hasFinishedPlaying",
    value: function hasFinishedPlaying() {
      for (var i = 0; i < this.data.actions.length; i++) {
        var action = this.data.actions[i];
        var end = action.end ? action.end : null;

        if (action.previousFrame !== end) {
          return false;
        }
      }

      return true;
    }
  }]);

  return AnimationData;
}();

/* harmony default export */ __webpack_exports__["default"] = (retval);

/***/ }),

/***/ "../bytepath/Animation/AnimationDataFactory.js":
/*!*****************************************************!*\
  !*** ../bytepath/Animation/AnimationDataFactory.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../bytepath/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.max-safe-integer */ "../bytepath/node_modules/core-js/modules/es.number.max-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.values */ "../bytepath/node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../bytepath/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AnimationData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationData */ "../bytepath/Animation/AnimationData.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Creates an animation usable by bytepath from the simpler user version passed in via componentAnimations()
   * @param name
   * @param anim
   */
  createFromUserAnimation: function createFromUserAnimation(name, actions) {
    var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    // The start and end frame of this animation
    var start = Number.MAX_SAFE_INTEGER;
    var end = null;
    Object.values(actions).forEach(function (anim) {
      /**
       *  Determine the start frame of this animation.
       */
      if (Object.prototype.hasOwnProperty.call(anim, "start")) {
        if (anim.start < start) {
          start = anim.start;
        }
      }
      /**
       *  Determine the end frame of this animation. Note than an animation does not need an end frame
       */


      if (Object.prototype.hasOwnProperty.call(anim, 'end')) {
        if (!end) {
          end = anim.end;
        }

        if (anim.end > end) {
          end = anim.end;
        }
      }
    });
    return new _AnimationData__WEBPACK_IMPORTED_MODULE_5__["default"](name, {
      actions: actions,
      meta: meta
    }, start, end, false);
  }
});

/***/ }),

/***/ "../bytepath/Factories/CreateAsset.js":
/*!********************************************!*\
  !*** ../bytepath/Factories/CreateAsset.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _vue_Mixins_AnimationEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue/Mixins/AnimationEntity */ "../bytepath/vue/Mixins/AnimationEntity.js");
/* harmony import */ var _vue_Components_SVG_Layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue/Components/SVG/Layer */ "../bytepath/vue/Components/SVG/Layer.vue");
/* harmony import */ var _vue_Components_SVG_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue/Components/SVG/Vector */ "../bytepath/vue/Components/SVG/Vector.vue");
/* harmony import */ var _vue_Components_SVG_Scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vue/Components/SVG/Scene */ "../bytepath/vue/Components/SVG/Scene.vue");
/* harmony import */ var _Helpers_LayerExtractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/LayerExtractor */ "../bytepath/Helpers/LayerExtractor.js");






/**
 *
 * @param src
 * @param useOrComponent
 * @param component
 * @returns {{src: *, use: *}|{components: {Entity: *}, data(): *, render: (function(*): *), props: {camera: {default: null, type: *}}}}
 */

var createAsset = function createAsset() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var src = null;
  var layer = null; // eslint-disable-next-line

  if (data.hasOwnProperty("src")) {
    src = data.src;
  } // eslint-disable-next-line


  if (data.hasOwnProperty("layer")) {
    layer = data.layer;
  }

  var mixin = {
    mixins: [_vue_Mixins_AnimationEntity__WEBPACK_IMPORTED_MODULE_1__["default"]],
    props: {
      /**
       * The file path to the asset we need to load. Optional if you don't need to load an asset
       */
      src: {
        type: String,
        default: null
      },

      /**
       * We will only display the layer specified here, or all layers if null
       */
      layer: {
        type: String,
        default: null
      },
      lookAt: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        layers: null
      };
    },
    mounted: function mounted() {
      if (this.$children[0]) {
        this.$children[0].$on('loaded', this.onLoaded);
      }
    },
    destroyed: function destroyed() {
      this.$children[0].$off();
    },
    computed: {
      filteredLayers: function filteredLayers() {
        return this.layers;
      }
    },
    methods: {
      /**
       * Image resource has finished loading so we should process into usable layers
       * @param loadedAsset the loaded image object
       */
      onLoaded: function onLoaded(loadedAsset) {
        this.layers = Object(_Helpers_LayerExtractor__WEBPACK_IMPORTED_MODULE_5__["default"])(loadedAsset, this.layer);
      }
    },
    components: {
      Vector: _vue_Components_SVG_Vector__WEBPACK_IMPORTED_MODULE_3__["default"],
      Layer: _vue_Components_SVG_Layer__WEBPACK_IMPORTED_MODULE_2__["default"],
      Scene: _vue_Components_SVG_Scene__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    render: function render() {
      var props = {
        position: this.defaultPosition,
        color: this.defaultColor
      };
      return this.$scopedSlots.default(props);
    }
  }; // If we have custom animations then we add them here
  // eslint-disable-next-line

  if (data.hasOwnProperty("animations")) {
    mixin.computed['animations'] = data.animations;
  } // If we have custom color then we want to add it as a prop
  // eslint-disable-next-line


  if (data.hasOwnProperty("color")) {
    var c = {
      type: String,
      default: data.color
    };
    mixin.props['color'] = c;
    delete data.color;
  } // // If we have custom color then we want to add it as a prop
  // // eslint-disable-next-line
  // if (data.hasOwnProperty("viewport")) {
  //     console.log("found a viewport prop", data.viewport);
  //     let c = {
  //         type: Boolean,
  //         default: data.viewport,
  //     };
  //
  //     console.log(c);
  //     mixin.props['show-viewbox'] = c;
  //     delete data.viewport;
  // }
  // If we have a use value replace the prop in the asset to return the name of the layer by default


  if (src) {
    delete mixin.props.src;
    mixin.props.src = {
      type: String,
      default: src
    };
  } // If we have a use value we only want to display these layers on the screen. use can be an array or a string


  if (layer) {
    console.log("has layer prop", layer);
    delete mixin.props.layer;
    mixin.props.layer = {
      type: String,
      default: layer
    };
    delete data.layer;
  }
  /* eslint-disable-next-line */


  if (data.hasOwnProperty("lookAt")) {
    console.log("found a lookat", data.lookAt);
    var _c = {
      type: String,
      default: data.lookAt
    };
    mixin.props['lookAt'] = _c;
    delete data.lookAt;
  }

  var retval = Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data);

  delete retval.src;
  delete retval.layers; // eslint-disable-next-line

  if (retval.hasOwnProperty("mixins")) {
    retval.mixins.push(mixin);
  } else {
    retval.mixins = [mixin];
  }

  return retval;
};

/* harmony default export */ __webpack_exports__["default"] = (createAsset);

/***/ }),

/***/ "../bytepath/Factories/CreateKeyframe.js":
/*!***********************************************!*\
  !*** ../bytepath/Factories/CreateKeyframe.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframe; });
/**
 * Creates a keyframe object so you dont need to do it manually
 * @param start start frame
 * @param Int|Function end either the end frame in integer or the handler function
 * @param [handler] handler function
 * @returns {{handler: *, start: *, end: *}|{handler: *, start: *, end: null}}
 */
function keyframe() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // If we just pass in a handler func
  if (typeof start === "function") {
    return {
      start: 0,
      end: null,
      handler: start
    };
  } // If we pass { start, handler }


  if (typeof end === "function") {
    return {
      start: start,
      end: null,
      handler: end
    };
  } // If we pass { start, end, handler }


  return {
    start: start,
    end: end,
    handler: handler
  };
}

/***/ }),

/***/ "../bytepath/Helpers/IsElementVisible.js":
/*!***********************************************!*\
  !*** ../bytepath/Helpers/IsElementVisible.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isInViewport; });
/* harmony import */ var transformation_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! transformation-matrix */ "../bytepath/node_modules/transformation-matrix/src/index.js");
/* eslint-disable */

function isInViewport(element) {
  var retval = false;
  var viewport = null;
  var rect = element.getBoundingClientRect();

  if (element.farthestViewportElement) {
    viewport = element.farthestViewportElement.getBoundingClientRect();
  } else {
    viewport = document.querySelector("html").getBoundingClientRect();
  }

  var h = document.querySelector("html").getBoundingClientRect();
  var matrix = Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(element.getScreenCTM());
  var bbox = element.getBBox(); // Convert bounding box to screen units then if any of the 4 rect points are inside the viewport
  // we are visible

  var viewportBBox = [Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(matrix, {
    x: bbox.x,
    y: bbox.y
  }), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(matrix, {
    x: bbox.x + bbox.width,
    y: bbox.y
  }), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(matrix, {
    x: bbox.x,
    y: bbox.y + bbox.height
  }), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_0__["applyToPoint"])(matrix, {
    x: bbox.x + bbox.width,
    y: bbox.y + bbox.height
  })];

  for (var i = 0; i < viewportBBox.length; i++) {
    var x = viewportBBox[i].x;
    var y = viewportBBox[i].y;
    var collision = x >= viewport.x && x <= viewport.right && y >= viewport.y && y <= viewport.bottom;
    retval |= collision; // If we found a collision we dont need to check the rest

    if (retval) {
      break;
    }
  }

  return retval == true;
}

/***/ }),

/***/ "../bytepath/Helpers/LayerExtractor.js":
/*!*********************************************!*\
  !*** ../bytepath/Helpers/LayerExtractor.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../bytepath/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../bytepath/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../bytepath/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join */ "../bytepath/node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../bytepath/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "../bytepath/node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../bytepath/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "../bytepath/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../bytepath/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LayeredPosition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayeredPosition */ "../bytepath/Helpers/LayeredPosition.js");










/* eslint-disable */

/**
 * Ensures unique IDs in the imported SVG by appending :asset to EVERY id inside the svg
 * @param {String} html The representing a single element
 * @return {Element}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (asset) {
  var layer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Convert the string into dom elements
  var template = document.createElement('template');
  template.innerHTML = asset.data.outerHTML;
  var rawLayers = [];
  var layers = {}; // Extract only a single layer and its children if provided

  if (layer !== null) {
    var element = template.content.firstElementChild.querySelector("[id=\"".concat(asset.key).concat(layer, "\"]"));
    element.children.forEach(function (el) {
      if (el.id) {
        rawLayers.push(el.id);
      }
    });
  } else {
    template.content.firstElementChild.children.forEach(function (el) {
      if (el.id) {
        rawLayers.push(el.id);
      }
    });
  } // Filter layers we don't want


  rawLayers.filter(function (layer) {
    return layer.charAt(0) !== "_";
  }).map(function (layer) {
    var name = layer.split(asset.key).splice(1).join("");
    layers[name] = new _LayeredPosition__WEBPACK_IMPORTED_MODULE_9__["default"]({}, {
      name: name,
      id: layer
    });
  });
  return layers;
});

/***/ }),

/***/ "../bytepath/Helpers/LayeredPosition.js":
/*!**********************************************!*\
  !*** ../bytepath/Helpers/LayeredPosition.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayeredPosition; });
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Position */ "../bytepath/Helpers/Position.js");





var LayeredPosition = /*#__PURE__*/function (_Position) {
  Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(LayeredPosition, _Position);

  var _super = Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(LayeredPosition);

  /**
   * Theres gotta be a better way to do this?
   */
  function LayeredPosition(position, layer) {
    var _this;

    Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayeredPosition);

    _this = _super.call(this, position);
    _this.layer = layer;
    return _this;
  }

  return LayeredPosition;
}(_Position__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "../bytepath/Helpers/Position.js":
/*!***************************************!*\
  !*** ../bytepath/Helpers/Position.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../bytepath/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var transformation_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! transformation-matrix */ "../bytepath/node_modules/transformation-matrix/src/index.js");




/* eslint-disable */


var Position = /*#__PURE__*/function () {
  /**
   * Theres gotta be a better way to do this?
   */
  function Position() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$angle = _ref.angle,
        angle = _ref$angle === void 0 ? 0 : _ref$angle,
        _ref$scaleX = _ref.scaleX,
        scaleX = _ref$scaleX === void 0 ? 0 : _ref$scaleX,
        _ref$scaleY = _ref.scaleY,
        scaleY = _ref$scaleY === void 0 ? 0 : _ref$scaleY,
        _ref$skewX = _ref.skewX,
        skewX = _ref$skewX === void 0 ? 0 : _ref$skewX,
        _ref$skewY = _ref.skewY,
        skewY = _ref$skewY === void 0 ? 0 : _ref$skewY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? null : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? null : _ref$height,
        _ref$centerX = _ref.centerX,
        centerX = _ref$centerX === void 0 ? null : _ref$centerX,
        _ref$centerY = _ref.centerY,
        centerY = _ref$centerY === void 0 ? null : _ref$centerY;

    Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Position);

    this.x = x;
    this.y = y;
    this.angle = angle;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.skewX = skewX;
    this.skewY = skewY;
    this.width = width;
    this.height = height;
    this.centerX = centerX;
    this.centerY = centerY;
  }
  /**
   * Returns a matrix that represents this position
   * @returns {DOMMatrix}
   */


  Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Position, [{
    key: "multiplyPoint",

    /**
     * Multiplies point (x, y) by the matrix representation of this position
     * @param x
     * @param y
     * @returns {DOMPoint}
     */
    value: function multiplyPoint() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["applyToPoint"])(this.getDefaultTransformMatrix(), {
        x: x,
        y: y
      });
    }
    /**
     * Get the transformation matrix that represents this position
     * @param projection
     * @returns {DOMMatrix}
     */

  }, {
    key: "getDefaultTransformMatrix",
    value: function getDefaultTransformMatrix() {
      var projection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var angle = this.angle % 360;
      var x = this.x;
      var y = this.y; //let skewX = this.skewX;
      //let skewY = this.skewY;

      var cx = this.centerX;
      var cy = this.centerY;
      var scaleX = this.scaleX === 0 ? 1 : this.scaleX;
      var scaleY = this.scaleY === 0 ? 1 : this.scaleY;
      var args = [Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["scale"])(scaleX, scaleY, cx + x, cy + y), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["rotateDEG"])(angle, cx + x, cy + y), Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["translate"])(x, y)]; // Add the projection matrix if one was provided

      if (projection) {
        args.unshift(projection);
      }

      return transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["compose"].apply(null, args);
    }
  }, {
    key: "transformedCenter",
    value: function transformedCenter() {
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["applyToPoint"])(this.getDefaultTransformMatrix(), [this.centerX, this.centerY]);
    }
  }, {
    key: "toViewbox",
    value: function toViewbox() {
      return "".concat(this.x, " ").concat(this.y, " ").concat(this.width, " ").concat(this.height);
    }
  }, {
    key: "toString",
    value: function toString() {
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["toSVG"])(this.getDefaultTransformMatrix());
    }
  }, {
    key: "toSVG",
    value: function toSVG() {
      var projection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["toSVG"])(this.getDefaultTransformMatrix(projection, mutations));
    }
  }, {
    key: "matrix",
    get: function get() {
      return this.getDefaultTransformMatrix();
    }
    /**
     * Returns the inverse of the matrix that represents this position
     * @returns {DOMMatrix}
     */

  }, {
    key: "inverse",
    get: function get() {
      return Object(transformation_matrix__WEBPACK_IMPORTED_MODULE_3__["inverse"])(this.getDefaultTransformMatrix());
    }
  }]);

  return Position;
}();



/***/ }),

/***/ "../bytepath/Helpers/SVGLoader.js":
/*!****************************************!*\
  !*** ../bytepath/Helpers/SVGLoader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../bytepath/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../bytepath/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../bytepath/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../bytepath/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../bytepath/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "../bytepath/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../bytepath/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _vue_Components_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vue/Components/Filters/SanitizedPath */ "../bytepath/vue/Components/Filters/SanitizedPath.js");










/**
 * Entity loader accepts src that is the path to the svg file containing the assets this entity wants.
 *
 * src is checked against a global list of downloaded svg files
 * if src not already downloaded, the entity that first requests it will download it
 * Any assets that ask for this file afterwards will use the version downloaded by the other component
 * There is a global variable called loadedAssets that holds the list of loaded assets
 * loadedAssets has the syntax { src: "id-that-loaded-this-file" } where src is a filename/url
 */
var axios = __webpack_require__(/*! axios */ "../bytepath/node_modules/axios/index.js");

var inst = null;


var loader = /*#__PURE__*/function () {
  function SVGLoader() {
    Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, SVGLoader);

    this.loadedAssets = {};
  }
  /**
   * Check loadedAssets variable to see if someone else has already loaded the requested file. If so, we can
   * use the <use> tag of the SVG spec to clone the tag with id = loadedAssets[this.src]
   */


  Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(SVGLoader, [{
    key: "fileIsLoaded",
    value: function fileIsLoaded(src) {
      var result = Object.prototype.hasOwnProperty.call(this.loadedAssets, Object(_vue_Components_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_9__["default"])(src));
      return result;
    }
    /**
     * Remove asset from suste,
     */

  }, {
    key: "deleteAsset",
    value: function deleteAsset(src) {
      delete this.loadedAssets[Object(_vue_Components_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_9__["default"])(src)];
    }
    /**
     * Load file from URL
     * @param src file url
     * @param asset the ID responsible for drawing this file to the dom
     * @returns { Promise }
     */

  }, {
    key: "load",
    value: function load() {
      var _this = this;

      var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var asset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!src) {
        return Promise.reject({
          'msg': 'src is null'
        });
      }

      var file = Object(_vue_Components_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_9__["default"])(src);

      if (!this.fileIsLoaded(src)) {
        //console.log(file, "not loaded yet");
        var promise = axios.get(src).then(function (response) {
          // Set this :src file as downloaded in the global list
          _this.processLoadedImage(response.data, src, asset);
        }).catch(function (error) {
          return console.log('asset err', error);
        });
        this.loadedAssets[file] = {
          id: asset,
          promise: promise,
          data: null,
          viewBox: null,
          layers: {},
          src: src,
          key: file
        };
      } // If the file was loaded without an asset id it has not been rendered on the screen. Set the ID to this asset


      if (this.loadedAssets[file].id == null && asset !== null) {
        //console.log("found null asset id setting to ", asset, file);
        this.loadedAssets[file].id = asset;
      }

      return this.loadedAssets[file].promise;
    }
    /**
     * Ensures unique IDs in the imported SVG by appending :asset to EVERY id inside the svg
     * @param {String} html The representing a single element
     * @return {Element}
     */

  }, {
    key: "processLoadedImage",
    value: function processLoadedImage(svg, src
    /*, asset*/
    ) {
      // Convert the string into dom elements
      var template = document.createElement('template');
      template.innerHTML = svg; // Remove the viewbox but make a copy of it in the global asset

      var viewBox = template.content.firstElementChild.getAttribute("viewBox");

      if (viewBox !== null) {
        var arr = viewBox.split(/[ ,]+/);
        viewBox = {
          x: arr[0],
          y: arr[1],
          width: arr[2],
          height: arr[3]
        };
      }

      var key = Object(_vue_Components_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_9__["default"])(src);
      var file = this.loadedAssets[key];
      var rawLayers = [];
      var layers = {};
      file.viewBox = viewBox; //template.content.firstElementChild.removeAttribute('viewBox');
      // Find all of the layers in this image

      template.content.firstElementChild.querySelectorAll("[id]").forEach(function (element) {
        rawLayers.push(element.id); // Ensure this ID is unique in the dom by adding the asset tag

        element.setAttribute("id", key + element.id);
      }); // Filter layers we don't want

      rawLayers.filter(function (layer) {
        return layer.charAt(0) !== "_";
      }).map(function (layer) {
        layers[layer] = null;
      }); // Save a copy of the layers we found in this image in the global var

      file.layers = layers; // Save the processed tags in the global variable;

      file.data = template.content.firstElementChild;
    }
  }]);

  return SVGLoader;
}();

if (!inst) {
  inst = new loader();
}

/* harmony default export */ __webpack_exports__["default"] = (inst);

/***/ }),

/***/ "../bytepath/Helpers/Tween.js":
/*!************************************!*\
  !*** ../bytepath/Helpers/Tween.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tween; });
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "../bytepath/node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../bytepath/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "../bytepath/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.math.trunc */ "../bytepath/node_modules/core-js/modules/es.math.trunc.js");
/* harmony import */ var core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../bytepath/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.values */ "../bytepath/node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../bytepath/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../bytepath/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.match */ "../bytepath/node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");












var Tween = /*#__PURE__*/function () {
  function Tween(keyframe) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Tween);

    // The starting frame of the current action
    this.startFrame = start; // The end frame of the current action

    this.endFrame = end; // The current frame

    this.keyframe = keyframe;
  }
  /**
   * Tweens between start and end with whatever numbers come along the way
   * @param start a number
   * @param end a number
   * @returns {number} a number between start and end depending on keyframe location
   */


  Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["default"])(Tween, [{
    key: "number",
    value: function number(start, end) {
      if (start === end) {
        return start;
      }

      if (this.keyframe >= this.endFrame) {
        return end;
      }

      if (this.keyframe <= this.startFrame) {
        return start;
      }
      /**
       * Tweening from one number to another can be achieved using the formula for a line y = mx+b
       */


      var numberDiff = end - start;
      var frameDiff = this.endFrame - this.startFrame; // The amount we need to increase or decrease each frame

      var numbersPerFrame = numberDiff / frameDiff;
      return start + (this.keyframe - this.startFrame) * numbersPerFrame;
    }
    /**
     * Tweens between start and end with only integer values
     * @param start
     * @param end
     * @returns {number} an integer between start and end depending on keyframe location
     */

  }, {
    key: "integer",
    value: function integer(start, end) {
      return Math.trunc(this.number(start, end));
    }
    /**
     * Tweens between the two provided hex values. Useful for colour transitions
     * @param start some hex string Example: #000000
     * @param end   some hex string Example: #FFFFFF
     * @returns {number} an integer between start and end depending on keyframe location
     */

  }, {
    key: "hex",
    value: function hex(start, end) {
      var _this = this;

      var s = start.slice(1).match(/.{1,2}/g).map(function (val) {
        return parseInt(val, 16);
      });
      var e = end.slice(1).match(/.{1,2}/g).map(function (val) {
        return parseInt(val, 16);
      });
      var retval = [];
      Object.values([0, 1, 2]).map(function (i) {
        var value = _this.decimalToHexString(_this.integer(s[i], e[i]));

        if (value.length === 1) {
          value = "0" + value;
        }

        retval.push(value);
      });
      retval = retval = "#" + retval.join("");
      return retval;
    }
  }, {
    key: "decimalToHexString",
    value: function decimalToHexString(number) {
      if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
      }

      return number.toString(16).toUpperCase();
    }
  }]);

  return Tween;
}();



/***/ }),

/***/ "../bytepath/Samples/Animations/Bounce.vue":
/*!*************************************************!*\
  !*** ../bytepath/Samples/Animations/Bounce.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bounce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bounce.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Animations/Bounce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Bounce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Animations/Bounce.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Animations/Bounce.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ../bytepath/Samples/Animations/Bounce.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Bounce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Bounce.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Animations/Bounce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Bounce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Animations/DoABarrelRoll.vue":
/*!********************************************************!*\
  !*** ../bytepath/Samples/Animations/DoABarrelRoll.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoABarrelRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoABarrelRoll.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Animations/DoABarrelRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _DoABarrelRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Animations/DoABarrelRoll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Animations/DoABarrelRoll.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Animations/DoABarrelRoll.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DoABarrelRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./DoABarrelRoll.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Animations/DoABarrelRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DoABarrelRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Animations/Spin.vue":
/*!***********************************************!*\
  !*** ../bytepath/Samples/Animations/Spin.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spin.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Animations/Spin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Spin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Animations/Spin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Animations/Spin.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ../bytepath/Samples/Animations/Spin.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Spin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Spin.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Animations/Spin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Spin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Assets/Animals/Pig.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Assets/Animals/Pig.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pig_vue_vue_type_template_id_768f17b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pig.vue?vue&type=template&id=768f17b4& */ "../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=template&id=768f17b4&");
/* harmony import */ var _Pig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pig.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pig_vue_vue_type_template_id_768f17b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pig_vue_vue_type_template_id_768f17b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Assets/Animals/Pig.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Pig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Pig.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Pig_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=template&id=768f17b4&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=template&id=768f17b4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Pig_vue_vue_type_template_id_768f17b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Pig.vue?vue&type=template&id=768f17b4& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=template&id=768f17b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Pig_vue_vue_type_template_id_768f17b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Pig_vue_vue_type_template_id_768f17b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Assets/Balloon.vue":
/*!**********************************************!*\
  !*** ../bytepath/Samples/Assets/Balloon.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Balloon_vue_vue_type_template_id_4e54d50d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Balloon.vue?vue&type=template&id=4e54d50d&scoped=true& */ "../bytepath/Samples/Assets/Balloon.vue?vue&type=template&id=4e54d50d&scoped=true&");
/* harmony import */ var _Balloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Balloon.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Assets/Balloon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css& */ "../bytepath/Samples/Assets/Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Balloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Balloon_vue_vue_type_template_id_4e54d50d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Balloon_vue_vue_type_template_id_4e54d50d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e54d50d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Assets/Balloon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Assets/Balloon.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../bytepath/Samples/Assets/Balloon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Balloon.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Balloon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Assets/Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ../bytepath/Samples/Assets/Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../bytepath-io/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../bytepath-io/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../bytepath-io/node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_style_index_0_id_4e54d50d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../bytepath/Samples/Assets/Balloon.vue?vue&type=template&id=4e54d50d&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ../bytepath/Samples/Assets/Balloon.vue?vue&type=template&id=4e54d50d&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_template_id_4e54d50d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Balloon.vue?vue&type=template&id=4e54d50d&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Balloon.vue?vue&type=template&id=4e54d50d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_template_id_4e54d50d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Balloon_vue_vue_type_template_id_4e54d50d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Assets/Human/FaceDance.js":
/*!*****************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/FaceDance.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * FirstAnimation.js
 * Side note: this was the first animation that ever worked in Bytepath!
 */
/* harmony default export */ __webpack_exports__["default"] = ([{
  start: 0,
  end: 1000,
  handler: function handler(_ref) {
    var context = _ref.context,
        tween = _ref.tween;
    context.layers.face.y = tween.number(0, 100);
    context.layers.leftarm.angle = tween.number(0, 75);
    context.layers.leftarm.centerX = 75;
    context.layers.leftarm.centerY = 225;
    context.layers.rightarm.angle = 360 - tween.number(0, 75);
    context.layers.rightarm.centerX = 175;
    context.layers.rightarm.centerY = 225;
  }
}, {
  start: 1000,
  end: 2000,
  handler: function handler(_ref2) {
    var context = _ref2.context,
        tween = _ref2.tween;
    context.layers.face.y = tween.number(100, 0);
    context.layers.rightarm.angle = tween.number(285, 360);
    context.layers.rightarm.centerX = 175;
    context.layers.rightarm.centerY = 225;
    context.layers.leftarm.angle = tween.number(75, 0);
    context.layers.leftarm.centerX = 75;
    context.layers.leftarm.centerY = 225;
  }
}]);

/***/ }),

/***/ "../bytepath/Samples/Assets/Human/FirstAnimation.js":
/*!**********************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/FirstAnimation.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * FirstAnimation.js
 * Side note: this was the first animation that ever worked in Bytepath!
 */
/* harmony default export */ __webpack_exports__["default"] = ([{
  start: 0,
  end: 500,
  handler: function handler(_ref) {
    var context = _ref.context,
        tween = _ref.tween;
    context.layers.face.x = tween.number(-50, 50);
    context.layers.rightarm.angle = tween.number(0, 50);
    context.layers.leftarm.y = tween.integer(0, 100);
    context.layers.leftleg.x = tween.number(-75, 0);
    context.layers.rightleg.x = tween.number(75, 0);
  }
}, {
  start: 500,
  end: 1000,
  handler: function handler(_ref2) {
    var context = _ref2.context,
        tween = _ref2.tween;
    context.layers.face.x = tween.number(50, -50);
    context.layers.rightarm.angle = tween.number(50, 0);
    context.layers.leftarm.y = tween.integer(100, 0);
    context.layers.leftleg.x = tween.number(0, -75);
    context.layers.rightleg.x = tween.number(0, 75);
  }
}]);

/***/ }),

/***/ "../bytepath/Samples/Assets/Human/Human.svg":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/Human.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Human.svg";

/***/ }),

/***/ "../bytepath/Samples/Assets/Human/Human.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/Human.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Human_vue_vue_type_template_id_41593189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Human.vue?vue&type=template&id=41593189& */ "../bytepath/Samples/Assets/Human/Human.vue?vue&type=template&id=41593189&");
/* harmony import */ var _Human_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Human.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Assets/Human/Human.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Human_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Human_vue_vue_type_template_id_41593189___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Human_vue_vue_type_template_id_41593189___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Assets/Human/Human.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Assets/Human/Human.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/Human.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Human_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Human.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Human/Human.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Human_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Assets/Human/Human.vue?vue&type=template&id=41593189&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/Human.vue?vue&type=template&id=41593189& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Human_vue_vue_type_template_id_41593189___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Human.vue?vue&type=template&id=41593189& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Human/Human.vue?vue&type=template&id=41593189&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Human_vue_vue_type_template_id_41593189___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Human_vue_vue_type_template_id_41593189___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Assets/Human/Kick.js":
/*!************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/Kick.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Punch.js
 * A simple punch animation for the human asset
 */
/* harmony default export */ __webpack_exports__["default"] = ([{
  start: 0,
  end: 1000,
  handler: function handler(_ref) {
    var context = _ref.context,
        tween = _ref.tween;
    context.layers.rightleg.angle = 360 - tween.number(0, 100);
    context.layers.rightleg.centerX = 125;
    context.layers.rightleg.centerY = 350;
    context.layers.leftarm.angle = 45;
    context.layers.leftarm.centerX = 25;
    context.layers.leftarm.centerY = 200;
    context.layers.rightarm.angle = 300;
    context.layers.rightarm.centerX = 175;
    context.layers.rightarm.centerY = 225;
  }
}]);

/***/ }),

/***/ "../bytepath/Samples/Assets/Human/Punch.js":
/*!*************************************************!*\
  !*** ../bytepath/Samples/Assets/Human/Punch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Punch.js
 * A simple punch animation for the human asset
 */
/* harmony default export */ __webpack_exports__["default"] = ([{
  start: 0,
  end: 1500,
  handler: function handler(_ref) {
    var context = _ref.context,
        tween = _ref.tween;
    context.layers.face.x = tween.number(-50, 50);
    context.layers.rightarm.x = tween.integer(0, 200);
    context.layers.leftarm.angle = tween.number(0, 90);
    context.layers.leftarm.centerX = 75;
    context.layers.leftarm.centerY = 200;
  }
}, {
  start: 1500,
  end: 3000,
  handler: function handler(_ref2) {
    var context = _ref2.context,
        tween = _ref2.tween;
    context.layers.face.x = tween.number(50, -50);
    context.layers.rightarm.x = tween.integer(200, 0);
    context.layers.leftarm.angle = tween.number(90, 0);
    context.layers.leftarm.centerX = 75;
    context.layers.leftarm.centerY = 200;
  }
}]);

/***/ }),

/***/ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue":
/*!**************************************************************!*\
  !*** ../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TinyBalloon_vue_vue_type_template_id_6386cccd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true& */ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true&");
/* harmony import */ var _TinyBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TinyBalloon.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css& */ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TinyBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TinyBalloon_vue_vue_type_template_id_6386cccd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TinyBalloon_vue_vue_type_template_id_6386cccd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6386cccd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./TinyBalloon.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../bytepath-io/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../bytepath-io/node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_style_index_0_id_6386cccd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_template_id_6386cccd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_template_id_6386cccd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_TinyBalloon_vue_vue_type_template_id_6386cccd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Filters/DropShadow.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Filters/DropShadow.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropShadow_vue_vue_type_template_id_6ed7662d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropShadow.vue?vue&type=template&id=6ed7662d& */ "../bytepath/Samples/Filters/DropShadow.vue?vue&type=template&id=6ed7662d&");
/* harmony import */ var _DropShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropShadow.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Filters/DropShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropShadow_vue_vue_type_template_id_6ed7662d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropShadow_vue_vue_type_template_id_6ed7662d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Filters/DropShadow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Filters/DropShadow.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Filters/DropShadow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DropShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./DropShadow.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/DropShadow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DropShadow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Filters/DropShadow.vue?vue&type=template&id=6ed7662d&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Filters/DropShadow.vue?vue&type=template&id=6ed7662d& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DropShadow_vue_vue_type_template_id_6ed7662d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./DropShadow.vue?vue&type=template&id=6ed7662d& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/DropShadow.vue?vue&type=template&id=6ed7662d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DropShadow_vue_vue_type_template_id_6ed7662d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_DropShadow_vue_vue_type_template_id_6ed7662d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Filters/EnterTheMatrix.vue":
/*!******************************************************!*\
  !*** ../bytepath/Samples/Filters/EnterTheMatrix.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnterTheMatrix_vue_vue_type_template_id_a83a2f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnterTheMatrix.vue?vue&type=template&id=a83a2f50& */ "../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=template&id=a83a2f50&");
/* harmony import */ var _EnterTheMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnterTheMatrix.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnterTheMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnterTheMatrix_vue_vue_type_template_id_a83a2f50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnterTheMatrix_vue_vue_type_template_id_a83a2f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Filters/EnterTheMatrix.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterTheMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./EnterTheMatrix.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterTheMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=template&id=a83a2f50&":
/*!*************************************************************************************!*\
  !*** ../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=template&id=a83a2f50& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterTheMatrix_vue_vue_type_template_id_a83a2f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./EnterTheMatrix.vue?vue&type=template&id=a83a2f50& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=template&id=a83a2f50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterTheMatrix_vue_vue_type_template_id_a83a2f50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EnterTheMatrix_vue_vue_type_template_id_a83a2f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Filters/LimeFilter.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Filters/LimeFilter.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LimeFilter_vue_vue_type_template_id_f392342a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LimeFilter.vue?vue&type=template&id=f392342a& */ "../bytepath/Samples/Filters/LimeFilter.vue?vue&type=template&id=f392342a&");
/* harmony import */ var _LimeFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LimeFilter.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Filters/LimeFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LimeFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LimeFilter_vue_vue_type_template_id_f392342a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LimeFilter_vue_vue_type_template_id_f392342a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Filters/LimeFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Filters/LimeFilter.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Filters/LimeFilter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_LimeFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./LimeFilter.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/LimeFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_LimeFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Filters/LimeFilter.vue?vue&type=template&id=f392342a&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Filters/LimeFilter.vue?vue&type=template&id=f392342a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_LimeFilter_vue_vue_type_template_id_f392342a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./LimeFilter.vue?vue&type=template&id=f392342a& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/LimeFilter.vue?vue&type=template&id=f392342a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_LimeFilter_vue_vue_type_template_id_f392342a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_LimeFilter_vue_vue_type_template_id_f392342a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Filters/PeachFilter.vue":
/*!***************************************************!*\
  !*** ../bytepath/Samples/Filters/PeachFilter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PeachFilter_vue_vue_type_template_id_4e7f55fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeachFilter.vue?vue&type=template&id=4e7f55fb& */ "../bytepath/Samples/Filters/PeachFilter.vue?vue&type=template&id=4e7f55fb&");
/* harmony import */ var _PeachFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeachFilter.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Filters/PeachFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PeachFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PeachFilter_vue_vue_type_template_id_4e7f55fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PeachFilter_vue_vue_type_template_id_4e7f55fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Filters/PeachFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Filters/PeachFilter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ../bytepath/Samples/Filters/PeachFilter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PeachFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./PeachFilter.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/PeachFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PeachFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Filters/PeachFilter.vue?vue&type=template&id=4e7f55fb&":
/*!**********************************************************************************!*\
  !*** ../bytepath/Samples/Filters/PeachFilter.vue?vue&type=template&id=4e7f55fb& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PeachFilter_vue_vue_type_template_id_4e7f55fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./PeachFilter.vue?vue&type=template&id=4e7f55fb& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/PeachFilter.vue?vue&type=template&id=4e7f55fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PeachFilter_vue_vue_type_template_id_4e7f55fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PeachFilter_vue_vue_type_template_id_4e7f55fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Filters/UnderwaterFilter.vue":
/*!********************************************************!*\
  !*** ../bytepath/Samples/Filters/UnderwaterFilter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnderwaterFilter_vue_vue_type_template_id_71a06356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnderwaterFilter.vue?vue&type=template&id=71a06356& */ "../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=template&id=71a06356&");
/* harmony import */ var _UnderwaterFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnderwaterFilter.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnderwaterFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnderwaterFilter_vue_vue_type_template_id_71a06356___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnderwaterFilter_vue_vue_type_template_id_71a06356___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Filters/UnderwaterFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_UnderwaterFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../bytepath-io/node_modules/babel-loader/lib!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./UnderwaterFilter.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_UnderwaterFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=template&id=71a06356&":
/*!***************************************************************************************!*\
  !*** ../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=template&id=71a06356& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_UnderwaterFilter_vue_vue_type_template_id_71a06356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./UnderwaterFilter.vue?vue&type=template&id=71a06356& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=template&id=71a06356&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_UnderwaterFilter_vue_vue_type_template_id_71a06356___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_UnderwaterFilter_vue_vue_type_template_id_71a06356___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Coast.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Coast.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Coast_vue_vue_type_template_id_15a5ee7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coast.vue?vue&type=template&id=15a5ee7f& */ "../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=template&id=15a5ee7f&");
/* harmony import */ var _Coast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coast.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Coast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Coast_vue_vue_type_template_id_15a5ee7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Coast_vue_vue_type_template_id_15a5ee7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Coast/Coast.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Coast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Coast.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Coast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=template&id=15a5ee7f&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=template&id=15a5ee7f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Coast_vue_vue_type_template_id_15a5ee7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Coast.vue?vue&type=template&id=15a5ee7f& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=template&id=15a5ee7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Coast_vue_vue_type_template_id_15a5ee7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Coast_vue_vue_type_template_id_15a5ee7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue":
/*!*******************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Lighthouse.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lighthouse_vue_vue_type_template_id_b8edb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true& */ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true&");
/* harmony import */ var _Lighthouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lighthouse.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css& */ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Lighthouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lighthouse_vue_vue_type_template_id_b8edb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Lighthouse_vue_vue_type_template_id_b8edb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8edb09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Coast/Lighthouse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Lighthouse.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../bytepath-io/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../bytepath-io/node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_style_index_0_id_b8edb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_template_id_b8edb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_template_id_b8edb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Lighthouse_vue_vue_type_template_id_b8edb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Rocks.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Rocks.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rocks_vue_vue_type_template_id_21c00997_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rocks.vue?vue&type=template&id=21c00997&scoped=true& */ "../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=template&id=21c00997&scoped=true&");
/* harmony import */ var _Rocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rocks.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css& */ "../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Rocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rocks_vue_vue_type_template_id_21c00997_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Rocks_vue_vue_type_template_id_21c00997_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21c00997",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Coast/Rocks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Rocks.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../bytepath-io/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../bytepath-io/node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_style_index_0_id_21c00997_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=template&id=21c00997&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=template&id=21c00997&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_template_id_21c00997_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Rocks.vue?vue&type=template&id=21c00997&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=template&id=21c00997&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_template_id_21c00997_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Rocks_vue_vue_type_template_id_21c00997_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Barn.vue":
/*!************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Barn.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Barn_vue_vue_type_template_id_152bce54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Barn.vue?vue&type=template&id=152bce54& */ "../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=template&id=152bce54&");
/* harmony import */ var _Barn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Barn.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Barn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Barn_vue_vue_type_template_id_152bce54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Barn_vue_vue_type_template_id_152bce54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Farm/Barn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Barn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Barn.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Barn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=template&id=152bce54&":
/*!*******************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=template&id=152bce54& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Barn_vue_vue_type_template_id_152bce54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Barn.vue?vue&type=template&id=152bce54& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=template&id=152bce54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Barn_vue_vue_type_template_id_152bce54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Barn_vue_vue_type_template_id_152bce54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Cow.vue":
/*!***********************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Cow.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cow_vue_vue_type_template_id_4c9d1540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cow.vue?vue&type=template&id=4c9d1540& */ "../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=template&id=4c9d1540&");
/* harmony import */ var _Cow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cow.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cow_vue_vue_type_template_id_4c9d1540___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cow_vue_vue_type_template_id_4c9d1540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Farm/Cow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Cow.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=template&id=4c9d1540&":
/*!******************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=template&id=4c9d1540& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cow_vue_vue_type_template_id_4c9d1540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Cow.vue?vue&type=template&id=4c9d1540& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=template&id=4c9d1540&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cow_vue_vue_type_template_id_4c9d1540___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cow_vue_vue_type_template_id_4c9d1540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farm.svg":
/*!************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farm.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Farm.svg";

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farm.vue":
/*!************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Farm_vue_vue_type_template_id_d63e965e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Farm.vue?vue&type=template&id=d63e965e& */ "../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=template&id=d63e965e&");
/* harmony import */ var _Farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farm.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Farm_vue_vue_type_template_id_d63e965e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Farm_vue_vue_type_template_id_d63e965e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Farm/Farm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Farm.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=template&id=d63e965e&":
/*!*******************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=template&id=d63e965e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farm_vue_vue_type_template_id_d63e965e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Farm.vue?vue&type=template&id=d63e965e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=template&id=d63e965e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farm_vue_vue_type_template_id_d63e965e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farm_vue_vue_type_template_id_d63e965e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farmer.vue":
/*!**************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farmer.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Farmer_vue_vue_type_template_id_3d08f8be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Farmer.vue?vue&type=template&id=3d08f8be& */ "../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=template&id=3d08f8be&");
/* harmony import */ var _Farmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farmer.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Farmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Farmer_vue_vue_type_template_id_3d08f8be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Farmer_vue_vue_type_template_id_3d08f8be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Farm/Farmer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Farmer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=template&id=3d08f8be&":
/*!*********************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=template&id=3d08f8be& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmer_vue_vue_type_template_id_3d08f8be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Farmer.vue?vue&type=template&id=3d08f8be& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=template&id=3d08f8be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmer_vue_vue_type_template_id_3d08f8be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Farmer_vue_vue_type_template_id_3d08f8be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue":
/*!*******************************************************!*\
  !*** ../bytepath/Samples/Scenes/Ocean/OceanScene.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OceanScene_vue_vue_type_template_id_67bed6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OceanScene.vue?vue&type=template&id=67bed6a6& */ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=template&id=67bed6a6&");
/* harmony import */ var _OceanScene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OceanScene.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OceanScene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OceanScene_vue_vue_type_template_id_67bed6a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OceanScene_vue_vue_type_template_id_67bed6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Ocean/OceanScene.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_OceanScene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./OceanScene.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_OceanScene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=template&id=67bed6a6&":
/*!**************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=template&id=67bed6a6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_OceanScene_vue_vue_type_template_id_67bed6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./OceanScene.vue?vue&type=template&id=67bed6a6& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=template&id=67bed6a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_OceanScene_vue_vue_type_template_id_67bed6a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_OceanScene_vue_vue_type_template_id_67bed6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Partials/PointyBackground.vue":
/*!****************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Partials/PointyBackground.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PointyBackground_vue_vue_type_template_id_f5005794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointyBackground.vue?vue&type=template&id=f5005794& */ "../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=template&id=f5005794&");
/* harmony import */ var _PointyBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointyBackground.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PointyBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PointyBackground_vue_vue_type_template_id_f5005794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PointyBackground_vue_vue_type_template_id_f5005794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Partials/PointyBackground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PointyBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./PointyBackground.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PointyBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=template&id=f5005794&":
/*!***********************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=template&id=f5005794& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PointyBackground_vue_vue_type_template_id_f5005794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./PointyBackground.vue?vue&type=template&id=f5005794& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=template&id=f5005794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PointyBackground_vue_vue_type_template_id_f5005794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_PointyBackground_vue_vue_type_template_id_f5005794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Cloud.vue":
/*!************************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Cloud.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cloud_vue_vue_type_template_id_5e27742e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloud.vue?vue&type=template&id=5e27742e&scoped=true& */ "../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=template&id=5e27742e&scoped=true&");
/* harmony import */ var _Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cloud.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css& */ "../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cloud_vue_vue_type_template_id_5e27742e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cloud_vue_vue_type_template_id_5e27742e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e27742e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Sky/Cloud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../bytepath-io/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../bytepath-io/node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css&");
/* harmony import */ var _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_bytepath_io_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_bytepath_io_node_modules_vue_loader_lib_loaders_stylePostLoader_js_bytepath_io_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_5e27742e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=template&id=5e27742e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=template&id=5e27742e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_template_id_5e27742e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=template&id=5e27742e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=template&id=5e27742e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_template_id_5e27742e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_template_id_5e27742e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Sky.vue":
/*!**********************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Sky.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sky_vue_vue_type_template_id_123005d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sky.vue?vue&type=template&id=123005d5& */ "../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=template&id=123005d5&");
/* harmony import */ var _Sky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sky.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sky_vue_vue_type_template_id_123005d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sky_vue_vue_type_template_id_123005d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Sky/Sky.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Sky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Sky.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Sky_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=template&id=123005d5&":
/*!*****************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=template&id=123005d5& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Sky_vue_vue_type_template_id_123005d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Sky.vue?vue&type=template&id=123005d5& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=template&id=123005d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Sky_vue_vue_type_template_id_123005d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Sky_vue_vue_type_template_id_123005d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Background.vue":
/*!************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Background.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Background_vue_vue_type_template_id_5f300840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Background.vue?vue&type=template&id=5f300840& */ "../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=template&id=5f300840&");
/* harmony import */ var _Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Background_vue_vue_type_template_id_5f300840___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Background_vue_vue_type_template_id_5f300840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Underwater/Background.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Background.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=template&id=5f300840&":
/*!*******************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=template&id=5f300840& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_template_id_5f300840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Background.vue?vue&type=template&id=5f300840& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=template&id=5f300840&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_template_id_5f300840___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Background_vue_vue_type_template_id_5f300840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/BigFish.vue":
/*!*********************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/BigFish.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BigFish_vue_vue_type_template_id_49866d94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BigFish.vue?vue&type=template&id=49866d94& */ "../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=template&id=49866d94&");
/* harmony import */ var _BigFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BigFish.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BigFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BigFish_vue_vue_type_template_id_49866d94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BigFish_vue_vue_type_template_id_49866d94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Underwater/BigFish.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_BigFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./BigFish.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_BigFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=template&id=49866d94&":
/*!****************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=template&id=49866d94& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_BigFish_vue_vue_type_template_id_49866d94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./BigFish.vue?vue&type=template&id=49866d94& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=template&id=49866d94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_BigFish_vue_vue_type_template_id_49866d94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_BigFish_vue_vue_type_template_id_49866d94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Octopus.vue":
/*!*********************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Octopus.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Octopus_vue_vue_type_template_id_51fb5b9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Octopus.vue?vue&type=template&id=51fb5b9d& */ "../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=template&id=51fb5b9d&");
/* harmony import */ var _Octopus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Octopus.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Octopus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Octopus_vue_vue_type_template_id_51fb5b9d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Octopus_vue_vue_type_template_id_51fb5b9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Underwater/Octopus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Octopus.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=template&id=51fb5b9d&":
/*!****************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=template&id=51fb5b9d& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_template_id_51fb5b9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Octopus.vue?vue&type=template&id=51fb5b9d& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=template&id=51fb5b9d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_template_id_51fb5b9d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Octopus_vue_vue_type_template_id_51fb5b9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Underwater.vue":
/*!************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Underwater.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Underwater_vue_vue_type_template_id_a4e8811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Underwater.vue?vue&type=template&id=a4e8811e& */ "../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=template&id=a4e8811e&");
/* harmony import */ var _Underwater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Underwater.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Underwater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Underwater_vue_vue_type_template_id_a4e8811e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Underwater_vue_vue_type_template_id_a4e8811e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Underwater/Underwater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Underwater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Underwater.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Underwater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=template&id=a4e8811e&":
/*!*******************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=template&id=a4e8811e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Underwater_vue_vue_type_template_id_a4e8811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Underwater.vue?vue&type=template&id=a4e8811e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=template&id=a4e8811e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Underwater_vue_vue_type_template_id_a4e8811e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Underwater_vue_vue_type_template_id_a4e8811e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/YellowFish.vue":
/*!************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/YellowFish.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YellowFish_vue_vue_type_template_id_220c0c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YellowFish.vue?vue&type=template&id=220c0c9e& */ "../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=template&id=220c0c9e&");
/* harmony import */ var _YellowFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YellowFish.vue?vue&type=script&lang=js& */ "../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YellowFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YellowFish_vue_vue_type_template_id_220c0c9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YellowFish_vue_vue_type_template_id_220c0c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/Samples/Scenes/Underwater/YellowFish.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_YellowFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./YellowFish.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_YellowFish_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=template&id=220c0c9e&":
/*!*******************************************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=template&id=220c0c9e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_YellowFish_vue_vue_type_template_id_220c0c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./YellowFish.vue?vue&type=template&id=220c0c9e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=template&id=220c0c9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_YellowFish_vue_vue_type_template_id_220c0c9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_YellowFish_vue_vue_type_template_id_220c0c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/underwater.svg":
/*!************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/underwater.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/underwater.svg";

/***/ }),

/***/ "../bytepath/Samples/Scenes/Underwater/underwaterartboard.svg":
/*!********************************************************************!*\
  !*** ../bytepath/Samples/Scenes/Underwater/underwaterartboard.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/underwaterartboard.svg";

/***/ }),

/***/ "../bytepath/vue-bytepath.js":
/*!***********************************!*\
  !*** ../bytepath/vue-bytepath.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_Mixins_CalculatesTransformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue/Mixins/CalculatesTransformation */ "../bytepath/vue/Mixins/CalculatesTransformation.js");
/* harmony import */ var _vue_Mixins_KeyframeAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue/Mixins/KeyframeAnimation */ "../bytepath/vue/Mixins/KeyframeAnimation.js");
/* harmony import */ var _vue_Mixins_AnimationEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/Mixins/AnimationEntity */ "../bytepath/vue/Mixins/AnimationEntity.js");
/* harmony import */ var _vue_Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/Mixins/PlaybackTimer */ "../bytepath/vue/Mixins/PlaybackTimer.js");
/* harmony import */ var _vue_Components_Timers_ClockTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/Components/Timers/ClockTimer */ "../bytepath/vue/Components/Timers/ClockTimer.vue");
/* harmony import */ var _vue_Components_Timers_ScrollTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/Components/Timers/ScrollTimer */ "../bytepath/vue/Components/Timers/ScrollTimer.vue");
/* harmony import */ var _vue_Components_Timers_ResponsiveScrollTimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vue/Components/Timers/ResponsiveScrollTimer */ "../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue");
/* harmony import */ var _vue_Components_Timers_KeyframeDelay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vue/Components/Timers/KeyframeDelay */ "../bytepath/vue/Components/Timers/KeyframeDelay.js");
/* harmony import */ var _vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vue/Components/Timers/KeyframeVisible */ "../bytepath/vue/Components/Timers/KeyframeVisible.js");
/* harmony import */ var _vue_Components_Timers_KeyframeRepeat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vue/Components/Timers/KeyframeRepeat */ "../bytepath/vue/Components/Timers/KeyframeRepeat.js");
/* harmony import */ var _vue_Components_Dom_EntityDiv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vue/Components/Dom/EntityDiv */ "../bytepath/vue/Components/Dom/EntityDiv.vue");
/* harmony import */ var _vue_Components_SVG_Scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vue/Components/SVG/Scene */ "../bytepath/vue/Components/SVG/Scene.vue");
/* harmony import */ var _vue_Components_SVG_Vector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vue/Components/SVG/Vector */ "../bytepath/vue/Components/SVG/Vector.vue");
/* harmony import */ var _Samples_Animations_Bounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Samples/Animations/Bounce */ "../bytepath/Samples/Animations/Bounce.vue");
/* harmony import */ var _Samples_Animations_Spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Samples/Animations/Spin */ "../bytepath/Samples/Animations/Spin.vue");
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Factories_CreateKeyframe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Factories/CreateKeyframe */ "../bytepath/Factories/CreateKeyframe.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Helpers/Position */ "../bytepath/Helpers/Position.js");
/* harmony import */ var _Samples_Assets_Balloon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Samples/Assets/Balloon */ "../bytepath/Samples/Assets/Balloon.vue");
/* harmony import */ var _Samples_Assets_TinyBalloon_TinyBalloon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Samples/Assets/TinyBalloon/TinyBalloon */ "../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue");
/* harmony import */ var _Samples_Assets_Human_Human__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Samples/Assets/Human/Human */ "../bytepath/Samples/Assets/Human/Human.vue");
/* harmony import */ var _Samples_Scenes_Partials_PointyBackground__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Samples/Scenes/Partials/PointyBackground */ "../bytepath/Samples/Scenes/Partials/PointyBackground.vue");
/* harmony import */ var _Samples_Scenes_Underwater_Underwater__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Samples/Scenes/Underwater/Underwater */ "../bytepath/Samples/Scenes/Underwater/Underwater.vue");
/* harmony import */ var _Samples_Animations_DoABarrelRoll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Samples/Animations/DoABarrelRoll */ "../bytepath/Samples/Animations/DoABarrelRoll.vue");
/* harmony import */ var _Samples_Filters_EnterTheMatrix__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Samples/Filters/EnterTheMatrix */ "../bytepath/Samples/Filters/EnterTheMatrix.vue");
/* harmony import */ var _Samples_Filters_LimeFilter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Samples/Filters/LimeFilter */ "../bytepath/Samples/Filters/LimeFilter.vue");
/* harmony import */ var _Samples_Filters_PeachFilter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Samples/Filters/PeachFilter */ "../bytepath/Samples/Filters/PeachFilter.vue");
/* harmony import */ var _Samples_Filters_DropShadow__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Samples/Filters/DropShadow */ "../bytepath/Samples/Filters/DropShadow.vue");
/* harmony import */ var _Samples_Filters_UnderwaterFilter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Samples/Filters/UnderwaterFilter */ "../bytepath/Samples/Filters/UnderwaterFilter.vue");
// Mixins



 // Timers






 // DOM

 // SVG


 // Animations


 // Factories


 // Helpers

 // Sample Assets




 // Sample Scenes

 // Sample Animations

 // Sample Filters






var Bytepath = {
  AnimationEntity: _vue_Mixins_AnimationEntity__WEBPACK_IMPORTED_MODULE_2__["default"],
  CreateAsset: _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_15__["default"],
  CreateEntity: _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_15__["default"],
  CreateKeyframe: _Factories_CreateKeyframe__WEBPACK_IMPORTED_MODULE_16__["default"],
  Position: _Helpers_Position__WEBPACK_IMPORTED_MODULE_17__["default"],
  mixins: {
    playbackTimer: _vue_Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_3__["default"],
    transformer: _vue_Mixins_CalculatesTransformation__WEBPACK_IMPORTED_MODULE_0__["default"],
    keyframer: _vue_Mixins_KeyframeAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  timers: {
    clock: _vue_Components_Timers_ClockTimer__WEBPACK_IMPORTED_MODULE_4__["default"],
    scroll: _vue_Components_Timers_ScrollTimer__WEBPACK_IMPORTED_MODULE_5__["default"],
    responsiveScroll: _vue_Components_Timers_ResponsiveScrollTimer__WEBPACK_IMPORTED_MODULE_6__["default"],
    delay: _vue_Components_Timers_KeyframeDelay__WEBPACK_IMPORTED_MODULE_7__["default"],
    visible: _vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_8__["default"],
    repeat: _vue_Components_Timers_KeyframeRepeat__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  animations: {
    bounce: _Samples_Animations_Bounce__WEBPACK_IMPORTED_MODULE_13__["default"],
    spin: _Samples_Animations_Spin__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  dom: {
    entityDiv: _vue_Components_Dom_EntityDiv__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  graphics: {
    vector: _vue_Components_SVG_Vector__WEBPACK_IMPORTED_MODULE_12__["default"],
    scene: _vue_Components_SVG_Scene__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  samples: {
    animations: {
      doABarrelRoll: _Samples_Animations_DoABarrelRoll__WEBPACK_IMPORTED_MODULE_23__["default"]
    },
    assets: {
      tinyBalloon: {
        tinyBalloon: _Samples_Assets_TinyBalloon_TinyBalloon__WEBPACK_IMPORTED_MODULE_19__["default"]
      },
      balloon: _Samples_Assets_Balloon__WEBPACK_IMPORTED_MODULE_18__["default"],
      human: _Samples_Assets_Human_Human__WEBPACK_IMPORTED_MODULE_20__["default"]
    },
    scenes: {
      underwater: _Samples_Scenes_Underwater_Underwater__WEBPACK_IMPORTED_MODULE_22__["default"],
      partials: {
        pointyBackground: _Samples_Scenes_Partials_PointyBackground__WEBPACK_IMPORTED_MODULE_21__["default"]
      }
    },
    filters: {
      enterTheMatrix: _Samples_Filters_EnterTheMatrix__WEBPACK_IMPORTED_MODULE_24__["default"],
      limeFilter: _Samples_Filters_LimeFilter__WEBPACK_IMPORTED_MODULE_25__["default"],
      peachFilter: _Samples_Filters_PeachFilter__WEBPACK_IMPORTED_MODULE_26__["default"],
      dropShadow: _Samples_Filters_DropShadow__WEBPACK_IMPORTED_MODULE_27__["default"],
      underwater: _Samples_Filters_UnderwaterFilter__WEBPACK_IMPORTED_MODULE_28__["default"]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Bytepath);

/***/ }),

/***/ "../bytepath/vue/Components/Dom/EntityDiv.vue":
/*!****************************************************!*\
  !*** ../bytepath/vue/Components/Dom/EntityDiv.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntityDiv_vue_vue_type_template_id_4fbcbc96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityDiv.vue?vue&type=template&id=4fbcbc96& */ "../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=template&id=4fbcbc96&");
/* harmony import */ var _EntityDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityDiv.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntityDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntityDiv_vue_vue_type_template_id_4fbcbc96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EntityDiv_vue_vue_type_template_id_4fbcbc96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/Dom/EntityDiv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./EntityDiv.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDiv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=template&id=4fbcbc96&":
/*!***********************************************************************************!*\
  !*** ../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=template&id=4fbcbc96& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDiv_vue_vue_type_template_id_4fbcbc96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./EntityDiv.vue?vue&type=template&id=4fbcbc96& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=template&id=4fbcbc96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDiv_vue_vue_type_template_id_4fbcbc96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDiv_vue_vue_type_template_id_4fbcbc96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/vue/Components/Filters/SanitizedPath.js":
/*!***********************************************************!*\
  !*** ../bytepath/vue/Components/Filters/SanitizedPath.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitizedPath; });
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "../bytepath/node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "../bytepath/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../bytepath/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "../bytepath/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Returns the name of a file from a full pathname
 * "/images/underwater.svg?31a008e5511fac550851751860282ee2" Returns "images-underwater-svg"
 * @param file
 * @returns {String}
 */
function sanitizedPath(f) {
  return f.split('\\').join("-").split('/').join("-").split("?").shift().split(".").join("-").split("-").slice(1).join("-");
}

/***/ }),

/***/ "../bytepath/vue/Components/Loaders/AssetLoader.vue":
/*!**********************************************************!*\
  !*** ../bytepath/vue/Components/Loaders/AssetLoader.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssetLoader_vue_vue_type_template_id_0a910730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetLoader.vue?vue&type=template&id=0a910730& */ "../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=template&id=0a910730&");
/* harmony import */ var _AssetLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetLoader.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssetLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetLoader_vue_vue_type_template_id_0a910730___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssetLoader_vue_vue_type_template_id_0a910730___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/Loaders/AssetLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./AssetLoader.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=template&id=0a910730&":
/*!*****************************************************************************************!*\
  !*** ../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=template&id=0a910730& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoader_vue_vue_type_template_id_0a910730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./AssetLoader.vue?vue&type=template&id=0a910730& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=template&id=0a910730&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoader_vue_vue_type_template_id_0a910730___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetLoader_vue_vue_type_template_id_0a910730___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/vue/Components/SVG/Layer.vue":
/*!************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Layer.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer_vue_vue_type_template_id_dc9e940c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer.vue?vue&type=template&id=dc9e940c& */ "../bytepath/vue/Components/SVG/Layer.vue?vue&type=template&id=dc9e940c&");
/* harmony import */ var _Layer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/SVG/Layer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layer_vue_vue_type_template_id_dc9e940c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layer_vue_vue_type_template_id_dc9e940c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/SVG/Layer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/SVG/Layer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Layer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Layer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Layer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/SVG/Layer.vue?vue&type=template&id=dc9e940c&":
/*!*******************************************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Layer.vue?vue&type=template&id=dc9e940c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_template_id_dc9e940c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Layer.vue?vue&type=template&id=dc9e940c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Layer.vue?vue&type=template&id=dc9e940c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_template_id_dc9e940c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Layer_vue_vue_type_template_id_dc9e940c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/vue/Components/SVG/Scene.vue":
/*!************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Scene.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scene_vue_vue_type_template_id_5bf9e3b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.vue?vue&type=template&id=5bf9e3b5& */ "../bytepath/vue/Components/SVG/Scene.vue?vue&type=template&id=5bf9e3b5&");
/* harmony import */ var _Scene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/SVG/Scene.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scene_vue_vue_type_template_id_5bf9e3b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scene_vue_vue_type_template_id_5bf9e3b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/SVG/Scene.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/SVG/Scene.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Scene.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Scene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Scene.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Scene.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Scene_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/SVG/Scene.vue?vue&type=template&id=5bf9e3b5&":
/*!*******************************************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Scene.vue?vue&type=template&id=5bf9e3b5& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Scene_vue_vue_type_template_id_5bf9e3b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Scene.vue?vue&type=template&id=5bf9e3b5& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Scene.vue?vue&type=template&id=5bf9e3b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Scene_vue_vue_type_template_id_5bf9e3b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Scene_vue_vue_type_template_id_5bf9e3b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/vue/Components/SVG/Vector.vue":
/*!*************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Vector.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector_vue_vue_type_template_id_aa0e642c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.vue?vue&type=template&id=aa0e642c& */ "../bytepath/vue/Components/SVG/Vector.vue?vue&type=template&id=aa0e642c&");
/* harmony import */ var _Vector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/SVG/Vector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Vector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vector_vue_vue_type_template_id_aa0e642c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Vector_vue_vue_type_template_id_aa0e642c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/SVG/Vector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/SVG/Vector.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Vector.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Vector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Vector.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Vector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Vector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/SVG/Vector.vue?vue&type=template&id=aa0e642c&":
/*!********************************************************************************!*\
  !*** ../bytepath/vue/Components/SVG/Vector.vue?vue&type=template&id=aa0e642c& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Vector_vue_vue_type_template_id_aa0e642c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../../bytepath-io/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./Vector.vue?vue&type=template&id=aa0e642c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Vector.vue?vue&type=template&id=aa0e642c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Vector_vue_vue_type_template_id_aa0e642c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _bytepath_io_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_bytepath_io_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_Vector_vue_vue_type_template_id_aa0e642c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../bytepath/vue/Components/Timers/ClockTimer.vue":
/*!********************************************************!*\
  !*** ../bytepath/vue/Components/Timers/ClockTimer.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClockTimer.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/Timers/ClockTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/Timers/ClockTimer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/Timers/ClockTimer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ../bytepath/vue/Components/Timers/ClockTimer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_ClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./ClockTimer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Timers/ClockTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_ClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/Timers/KeyframeDelay.js":
/*!**********************************************************!*\
  !*** ../bytepath/vue/Components/Timers/KeyframeDelay.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [],
  props: {
    keyframe: {
      type: Number,
      required: true
    },
    // The location that we start calculating this keyframe
    start: {
      type: Number,
      default: 0
    },
    // The location that that we stop calculating the keyframe. If null we ignore it
    end: {
      type: Number,
      default: null
    }
  },
  computed: {
    /**
     * Determines the "reset" keyframe amount by subtracting the real frame amount from the reset point
     * Will never be < 0
     * @returns {number}
     */
    computedKeyframe: function computedKeyframe() {
      // If end is not null we use it as a maximum value for the computed Keyframe
      if (this.end !== null) {
        if (this.keyframe >= this.end) {
          return this.end;
        }
      } // If we are within the start and end range calculate the keyframe value


      if (this.keyframe >= this.start) {
        var value = this.keyframe - this.start;

        if (value > 0) {
          return value;
        }
      }

      return 0;
    }
  },
  render: function render() {
    return this.$scopedSlots.default({
      keyframe: this.computedKeyframe
    });
  }
});

/***/ }),

/***/ "../bytepath/vue/Components/Timers/KeyframeRepeat.js":
/*!***********************************************************!*\
  !*** ../bytepath/vue/Components/Timers/KeyframeRepeat.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "../bytepath/node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [],
  props: {
    keyframe: {
      type: Number,
      required: true
    },
    // The location that we start calculating this keyframe
    repeat: {
      type: Number,
      required: true
    }
  },
  computed: {
    computedKeyframe: function computedKeyframe() {
      return this.keyframe % this.repeat;
    }
  },
  render: function render() {
    return this.$scopedSlots.default({
      keyframe: this.computedKeyframe
    });
  }
});

/***/ }),

/***/ "../bytepath/vue/Components/Timers/KeyframeVisible.js":
/*!************************************************************!*\
  !*** ../bytepath/vue/Components/Timers/KeyframeVisible.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.max-safe-integer */ "../bytepath/node_modules/core-js/modules/es.number.max-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Mixins_CalculatesVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Mixins/CalculatesVisibility */ "../bytepath/vue/Mixins/CalculatesVisibility.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_CalculatesVisibility__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    keyframe: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      // Child is visible on this frame
      visibleOnKeyframe: null,
      repeatAt: Number.MAX_SAFE_INTEGER
    };
  },
  computed: {
    /**
     * @returns {number}
     */
    computedKeyframe: function computedKeyframe() {
      var currentFrame = this.repeatAt ? this.keyframe % this.repeatAt : this.keyframe;

      if (this.repeatAt === Number.MAX_SAFE_INTEGER) {
        if (this.isVisible()) {
          // If this is the first time this asset has been visible then set whatever the current
          // keyframe is
          if (this.visibleOnKeyframe === null) {
            this.visibleOnKeyframe = currentFrame;
          } // This is not the first time this asset has been visible so we only set keyframe if
          // its greater than the current highest visible frame. Remember we are just trying
          // to figure out which frame we go off screen
          else {
              if (currentFrame > this.visibleOnKeyframe) {
                this.visibleOnKeyframe = currentFrame;
              }
            }

          return currentFrame;
        } // Asset is NOT visible
        else {
            if (this.wasVisible) {
              this.repeatAt = this.visibleOnKeyframe;
              this.visibleOnKeyframe = null;
              this.wasVisible = false;
            }
          }
      }

      return currentFrame;
    }
  },
  render: function render() {
    return this.$scopedSlots.default({
      keyframe: this.computedKeyframe
    });
  }
});

/***/ }),

/***/ "../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue":
/*!*******************************************************************!*\
  !*** ../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponsiveScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveScrollTimer.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ResponsiveScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./ResponsiveScrollTimer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Components/Timers/ScrollTimer.vue":
/*!*********************************************************!*\
  !*** ../bytepath/vue/Components/Timers/ScrollTimer.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTimer.vue?vue&type=script&lang=js& */ "../bytepath/vue/Components/Timers/ScrollTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bytepath-io/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_bytepath_io_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "bytepath/vue/Components/Timers/ScrollTimer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../bytepath/vue/Components/Timers/ScrollTimer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ../bytepath/vue/Components/Timers/ScrollTimer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../bytepath-io/node_modules/babel-loader/lib!../../../../bytepath-io/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../bytepath-io/node_modules/vue-loader/lib??vue-loader-options!./ScrollTimer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Timers/ScrollTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_12_0_bytepath_io_node_modules_babel_loader_lib_index_js_bytepath_io_node_modules_cache_loader_dist_cjs_js_ref_0_0_bytepath_io_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../bytepath/vue/Mixins/AcceptsTransformProps.js":
/*!*******************************************************!*\
  !*** ../bytepath/vue/Mixins/AcceptsTransformProps.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/Position */ "../bytepath/Helpers/Position.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /**
     * If not null we use this instead of the parent's projection matrix
     */
    matrix: {
      type: Object,
      default: null
    },

    /**
     * Pass in all position variables at once to make things easier
     */
    position: {
      type: Object,
      default: function _default() {
        return new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]();
      }
    },

    /**
     * X position
     */
    x: {
      type: Number,
      default: 0
    },

    /**
     * Y Position
     */
    y: {
      type: Number,
      default: 0
    },

    /**
     * Angle
     */
    a: {
      type: Number,
      default: 0
    },

    /**
     * scaleX
     */
    sx: {
      type: Number,
      default: 0
    },

    /**
     * scaleY
     */
    sy: {
      type: Number,
      default: 0
    },

    /**
     * X position of center point
     */
    cx: {
      type: Number,
      default: null
    },

    /**
     * Y position of center point
     */
    cy: {
      type: Number,
      default: null
    },

    /**
     * The width of this asset. Optional if you want to use the size of the loaded asset
     */
    width: {
      default: null
    },

    /**
     * The height of this asset. Optional if you want to use the size of the loaded asset
     */
    height: {
      default: null
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/AcceptsViewportProps.js":
/*!******************************************************!*\
  !*** ../bytepath/vue/Mixins/AcceptsViewportProps.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /**
     * What to do if this entity goes outside it's clip boundaries. Default we just continue drawing it
     */
    overflow: {
      type: String,
      default: "visible"
    },

    /**
     * If false the viewbox attribute will not be added to the generated SVG tag
     */
    showViewbox: {
      type: Boolean,
      default: null
    },

    /**
     *  The alignment strategy for this svg. Corresponds to an option available to the SVG preserveAspectRatio
     *  See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
     *
     *  Note: Meet and Slice are handled by the fit prop
     *  Options:
     *  null:  preserveAspectRatio="none"
     *  top-left: xMinYMin
     *  top: xMidYMin
     *  top-right: xMaxYMin
     *  left: xMinYMid
     *  middle: xMidYMid
     *  right: xMaxYMid
     *  bottom-left: xMinYMax
     *  bottom: xMidYMax
     *  bottom-right: xMaxYMax
     *  @testme
     *
     */
    align: {
      type: String,
      default: null
    },

    /**
     *  Corresponds to meet or slice options of preserveAspectRatio
     *  See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
     *  if false we use Slice,  if true we use meet
     *  Options:
     *  null:  adds none string to preserveAspectRatio computed value
     *  true:   adds 'meet' to preserveAspectRatio computed value
     *  false:  adds 'slice' to preserveAspectRatio computed value
     *  @testme
     *
     */
    fit: {
      type: Boolean,
      default: false
    },

    /**
     * position rect with {x,y,width,height}
     * If provided the camera will be moved to this location
     */
    camera: {
      type: Object,
      default: null
    },

    /**
     * If not null this is the item the camera will focus on when layers load. useful for preventing clipping
     * from moving objects
     */
    lookAt: {
      type: String,
      default: null
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/AnimationEntity.js":
/*!*************************************************!*\
  !*** ../bytepath/vue/Mixins/AnimationEntity.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeyframeAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyframeAnimation */ "../bytepath/vue/Mixins/KeyframeAnimation.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/Position */ "../bytepath/Helpers/Position.js");
/* harmony import */ var _AcceptsTransformProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcceptsTransformProps */ "../bytepath/vue/Mixins/AcceptsTransformProps.js");
/* harmony import */ var _AcceptsViewportProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcceptsViewportProps */ "../bytepath/vue/Mixins/AcceptsViewportProps.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_KeyframeAnimation__WEBPACK_IMPORTED_MODULE_0__["default"], _AcceptsTransformProps__WEBPACK_IMPORTED_MODULE_2__["default"], _AcceptsViewportProps__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    /**
     * Default color of this asset.
     *
     */
    color: {
      type: String,
      default: null
    },

    /**
     * Add a filter to this vector
     */
    filter: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    var positions = {
      default: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
    return {
      defaultColor: this.color ? this.color : "#FC0FC0",
      positions: positions,
      defaultPosition: positions.default,
      defaultCamera: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"](),
      defaultOpacity: 100
    };
  },
  watch: {
    color: function color() {
      this.defaultColor = this.color;
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/CalcCenterUsingViewbox.js":
/*!********************************************************!*\
  !*** ../bytepath/vue/Mixins/CalcCenterUsingViewbox.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Helpers/Position */ "../bytepath/Helpers/Position.js");
/**
 * Returns the position this asset is using as center
 * @returns {{x: number, y: number}}
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getCenterPosition: function getCenterPosition() {
      // Defaults to 0,0
      var retval = {
        x: 0,
        y: 0
      }; // Center X

      if (this.cx !== null) {
        // Use Prop first
        retval.x = this.cx;
      } else if (this.position.centerX !== null) {
        // Then use position
        retval.x = this.position.centerX;
      } else {
        // If no position use half the width
        retval.x = this.viewbox.width / 2 + this.viewbox.x;
      } // Center Y


      if (this.cy !== null) {
        // Use Prop first
        retval.y = this.cy;
      } else if (this.position.centerY !== null) {
        // Then use position
        retval.y = this.position.centerY;
      } else {
        // If no position use half the height
        retval.y = this.viewbox.height / 2 + this.viewbox.y;
      }

      return new _Helpers_Position__WEBPACK_IMPORTED_MODULE_0__["default"](retval);
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/CalculatesTransformation.js":
/*!**********************************************************!*\
  !*** ../bytepath/vue/Mixins/CalculatesTransformation.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../bytepath/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/Position */ "../bytepath/Helpers/Position.js");
/* harmony import */ var _AcceptsTransformProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcceptsTransformProps */ "../bytepath/vue/Mixins/AcceptsTransformProps.js");


/**
 * Code that handles computing transformation matricies goes here
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_AcceptsTransformProps__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      dimensions: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"](),
      animationDirty: true,

      /**
       * The values used to transform this asset
       */
      transform: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  },
  mounted: function mounted() {
    this.animationDirty = true;
    this.computeTransformation();
  },
  watch: {
    /**
     * If we change position either internally or via prop we need to
     * mark as dirty so we re calculate the transform matrix
     */
    dimensions: {
      handler: function handler() {
        this.positionChanged();
      },
      deep: true
    },
    position: {
      handler: function handler() {
        this.positionChanged();
      },
      deep: true
    },
    x: function x() {
      this.positionChanged();
    },
    y: function y() {
      this.positionChanged();
    },
    a: function a() {
      this.positionChanged();
    },
    sx: function sx() {
      this.positionChanged();
    },
    sy: function sy() {
      this.positionChanged();
    },
    matrix: function matrix() {
      this.positionChanged();
    }
  },
  computed: {
    /**
     * Returns the position this asset is using as center
     * @returns {{x: number, y: number}}
     */
    centerPosition: function centerPosition() {
      // These variables are here to force vue to recompute center when these values change
      // eslint-disable-next-line
      var height = this.dimensions.height; // eslint-disable-next-line

      var width = this.dimensions.width; // eslint-disable-next-line

      var cx = this.cx; // eslint-disable-next-line

      var cy = this.cy;
      return this.getCenterPosition();
    },

    /**
     * The width of the asset
     */
    w: function w() {
      if (this.position.width !== null) {
        return this.position.width;
      } else if (this.width !== null) {
        return this.width;
      }

      return this.dimensions.width;
    },

    /**
     * The height of the asset
     */
    h: function h() {
      if (this.position.height !== null) {
        return this.position.height;
      } else if (this.height !== null) {
        return this.height;
      }

      return this.dimensions.height;
    }
  },
  methods: {
    /**
     * Called when the position variable or position props change
     */
    positionChanged: function positionChanged() {
      this.animationDirty = true;
      requestAnimationFrame(this.computeTransformation);
    },

    /**
     * Computes actual position of entity
     * @returns Object
     */
    getPosition: function getPosition() {
      var center = this.centerPosition;
      return new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: this.x + this.position.x,
        y: this.y + this.position.y,
        angle: this.a + this.position.angle,
        scaleX: this.sx + this.position.scaleX,
        scaleY: this.sy + this.position.scaleY,
        skewX: 0,
        skewY: 0,
        centerX: center.x,
        centerY: center.y,
        width: this.w + this.position.width,
        height: this.h + this.position.height
      });
    },

    /**
     * Called by request animation frame. We check for dirty changes before running this as computing matricies is
     * a slow operation that we want to avoid if we can
     */
    computeTransformation: function computeTransformation() {
      if (this.animationDirty) {
        var matrix = this.matrix; // Check if the matrix prop is a matrix or a position

        if (this.matrix) {
          if (matrix.constructor.name == "Position") {
            matrix = matrix.matrix;
          }
        }

        this.transform = this.getPosition().toSVG(matrix, this.mutations);
        this.animationDirty = false;
      }
    },

    /**
     * Returns the position this asset is using as center
     * @returns {{x: number, y: number}}
     */
    getCenterPosition: function getCenterPosition() {
      var file = "CalculatesTransformation.js";
      var msg = "Don't use default getCenterPosition function, instead override with your own functionality";
      console.warn("".concat(file, ": ").concat(msg));
      return new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/CalculatesVisibility.js":
/*!******************************************************!*\
  !*** ../bytepath/vue/Mixins/CalculatesVisibility.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_IsElementVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Helpers/IsElementVisible */ "../bytepath/Helpers/IsElementVisible.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // If true this element has been visible on the screen at least once
      wasVisible: false
    };
  },
  methods: {
    isVisible: function isVisible() {
      var retval = this.keyframe;
      retval = 0;

      if (this.$el) {
        retval = Object(_Helpers_IsElementVisible__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$el);
      } // This is just to keep track of whether this value has been true in the past
      // so I think it's fine assuming it's not set anywhere else

      /* eslint-disable-next-line */


      this.wasVisible |= retval;
      return retval;
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/KeyframeAnimation.js":
/*!***************************************************!*\
  !*** ../bytepath/vue/Mixins/KeyframeAnimation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "../bytepath/node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Animation_AnimationDataFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Animation/AnimationDataFactory */ "../bytepath/Animation/AnimationDataFactory.js");
/* harmony import */ var _Animation_Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Animation/Animation */ "../bytepath/Animation/Animation.js");




 //import IsElementVisible from "../../Helpers/IsElementVisible";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // The current playback frame of the animation
    keyframe: {
      type: Number,
      default: 0
    },
    // The name of the animation we want to run
    anim: {
      type: String | Object,
      default: null
    },
    // Force the animation to continually repeat
    repeat: {
      type: Boolean | String,
      default: false
    }
  },
  data: function data() {
    return {
      // If true this element has been visible on the screen at least once
      wasVisible: false
    };
  },
  mounted: function mounted() {
    this.keyframeChanged(this.keyframe);
  },
  watch: {
    keyframe: function keyframe() {
      this.keyframeChanged(this.keyframe);
    }
  },
  computed: {
    animations: function animations() {
      return null;
    },
    animation: function animation() {
      if (this.anim !== null) {
        /* eslint-disable-next-line */
        if (Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(this.anim) == "object") {
          return this.loadAnimation(this.anim);
        }
      }

      if (this.animations) {
        // Check to see if the animation controls have specified an animation to play
        if (this.anim) {
          // Check to see if this entity has an animation with the name in the controls
          if (Object.prototype.hasOwnProperty.call(this.animations, this.anim)) {
            return this.loadAnimation(this.anim);
          }
        } // Check if there is a default animation


        if (Object.prototype.hasOwnProperty.call(this.animations, 'default')) {
          return this.loadAnimation('default');
        }
      }

      return null;
    }
  },
  methods: {
    shouldCalculateVisibility: function shouldCalculateVisibility() {
      return true;
    },
    loadAnimation: function loadAnimation(anim) {
      if (anim === null) return;

      if (typeof anim === "string" && this.animations) {
        if (this.animations[anim] == null) return null;

        var _actions = _Animation_AnimationDataFactory__WEBPACK_IMPORTED_MODULE_3__["default"].createFromUserAnimation(anim, this.animations[anim]);

        return new _Animation_Animation__WEBPACK_IMPORTED_MODULE_4__["default"](this.anim, _actions, this.repeat);
      } // This is an animation passed to us by a parent component


      var actions = _Animation_AnimationDataFactory__WEBPACK_IMPORTED_MODULE_3__["default"].createFromUserAnimation('renderless', anim);
      return new _Animation_Animation__WEBPACK_IMPORTED_MODULE_4__["default"]('renderless', actions, this.repeat);
    },
    keyframeChanged: function keyframeChanged(keyframe) {
      if (this.animation) {
        // // If this is a repeat on hidden we check if element is visible here
        // if(this.repeat === 'hidden') {
        //     console.log("checking if hidden.... previouslyVisible:", this.wasVisible);
        //     let isVisible = IsElementVisible(this.$el);
        //     this.wasVisible = ((this.wasVisible | isVisible) == true);
        //
        //     // If element is not on screen, but was previously on screen, set the current
        //     // frame as final which will cause the animation to repeat
        //     if((!isVisible) && (this.wasVisible)) {
        //         console.log("should repeat", this.wasVisible );
        //         this.animation.setFinalFrame(keyframe, this);
        //
        //     }
        // }
        this.animation.computeFrame(keyframe, this);
      }
    }
  }
});

/***/ }),

/***/ "../bytepath/vue/Mixins/PlaybackTimer.js":
/*!***********************************************!*\
  !*** ../bytepath/vue/Mixins/PlaybackTimer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // Keyframe of the overall animation
    keyframe: {
      type: Number,
      default: 0
    },
    // We only run the timer when keyframe is >= start and < end
    start: {
      type: Number,
      default: null
    },
    // If null end is ignored
    end: {
      type: Number,
      default: null
    },
    pause: {
      type: Boolean,
      default: false
    },

    /**
     * How many FPS to update this anumation at. default 60
     */
    fps: {
      type: Number,
      default: 60
    }
  },
  data: function data() {
    return {
      timerId: null,
      frame: 0
    };
  },
  mounted: function mounted() {
    this.createTimer();
  },
  computed: {},
  methods: {
    // Determines whether we should start the timer or not
    shouldTick: function shouldTick() {
      if (this.pause) {
        return false;
      } // If start is null we ignore it by setting it to a value below keyframe


      var start = this.start !== null ? this.start : this.keyframe - 1; // If end is null we ignore it by setting it to a value above the keyframe

      var end = this.end !== null ? this.end : this.keyframe + 1;
      return this.keyframe >= start && this.keyframe < end;
    },
    createTimer: function createTimer() {
      // Instantiate your tracking event that will control the animation
      this.timerId = true;
    },
    clearTimer: function clearTimer() {
      // Clear the tracking event and release memory etc
      this.timerId = false;
    },

    /**
     * Update the timers frame number somehow
     * @param timeDiff the difference in milliseconds between this and prev frame
     */
    // eslint-disable-next-line
    running: function running() {// Do something here in your child component/mixin target

      var timeDiff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    },
    timerType: function timerType() {
      return "Animation Control Mixin";
    },
    timeStep: function timeStep(time) {
      if (this.shouldTick()) {
        if (!this.$options.prevFrameTime) {
          this.$options.prevFrameTime = time;
        }

        if (this.fps > 0) {
          var frametime = 1000 / this.fps;
          var timeDiff = time - this.$options.prevFrameTime;

          if (timeDiff >= frametime) {
            this.running(Math.floor(timeDiff));
            this.$options.prevFrameTime = time;
          }
        }
      }

      if (this.timerId !== null) {
        this.createTimer();
      }
    }
  },
  created: function created() {},
  destroyed: function destroyed() {
    this.clearTimer();
  },
  render: function render() {
    return this.$scopedSlots.default({
      keyframe: this.frame,
      type: this.timerType(),
      running: this.timerId !== null
    });
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Animations/Bounce.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Animations/Bounce.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helpers/Position */ "../bytepath/Helpers/Position.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__["default"])({
  props: {
    mx: {
      type: Number,
      default: 0.1
    },
    my: {
      type: Number,
      default: 0.1
    }
  },
  data: function data() {
    return {
      animPosition: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
  },
  animations: function animations() {
    //console.log("loading bounce anim");
    return {
      default: [{
        name: 'bounceyman',
        start: 0,
        handler: function handler(_ref) {
          var context = _ref.context,
              keyframe = _ref.keyframe;
          //console.log("bounceyman");
          var val = Math.sin(keyframe / 1000) * (context.$props.mx * 100);
          context.animPosition.x = val;
        }
      }]
    };
  },
  render: function render() {
    return this.$scopedSlots.default({
      position: this.animPosition
    });
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Animations/DoABarrelRoll.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Animations/DoABarrelRoll.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateKeyframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Factories/CreateKeyframe */ "../bytepath/Factories/CreateKeyframe.js");
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
//


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__["default"])({
  name: "DoABarrelRoll",
  animations: function animations() {
    return {
      default: [// Translate X from 100 to 500
      Object(_Factories_CreateKeyframe__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 1400, function (_ref) {
        var context = _ref.context,
            tween = _ref.tween;
        context.defaultPosition.x = tween.number(100, 800);
        context.defaultPosition.angle = 360 - tween.number(0, 360);
        context.defaultPosition.centerX = 100;
        context.defaultPosition.centerY = 0;
      }), Object(_Factories_CreateKeyframe__WEBPACK_IMPORTED_MODULE_0__["default"])(830, 1400, function (_ref2) {
        var context = _ref2.context,
            tween = _ref2.tween;
        return context.defaultPosition.y = tween.number(0, 740);
      })]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Animations/Spin.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Animations/Spin.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__["default"])({
  props: {
    ma: {
      type: Number,
      default: 0.1
    }
  },
  components: {},
  created: function created() {},
  methods: {
    componentAnimations: function componentAnimations() {
      return {
        default: {
          duration: 36000,
          frames: {
            0: {
              action: [//this.rotateLinear(this.ma)
              ]
            }
          }
        }
      };
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Scenes_Farm_Farm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Scenes/Farm/Farm.svg */ "../bytepath/Samples/Scenes/Farm/Farm.svg");
/* harmony import */ var _Scenes_Farm_Farm_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Scenes_Farm_Farm_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "pig",
  src: _Scenes_Farm_Farm_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  layer: 'pig'
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Balloon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Balloon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/Position */ "../bytepath/Helpers/Position.js");
/**
 * Note to docs readers:
 * The directory structure is a bit different than other examples because its in the bytepath core.
 * Dont think too much about this.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "balloon",
  color: '#FB7272',
  data: function data() {
    return {
      isBalloon: true,
      basket: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]({
        width: 100,
        height: 100,
        x: 1100,
        y: 3550
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Human/Human.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Human/Human.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Human_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Human.svg */ "../bytepath/Samples/Assets/Human/Human.svg");
/* harmony import */ var _Human_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Human_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Kick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Kick */ "../bytepath/Samples/Assets/Human/Kick.js");
/* harmony import */ var _Punch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Punch */ "../bytepath/Samples/Assets/Human/Punch.js");
/* harmony import */ var _FirstAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FirstAnimation */ "../bytepath/Samples/Assets/Human/FirstAnimation.js");
/* harmony import */ var _FaceDance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FaceDance */ "../bytepath/Samples/Assets/Human/FaceDance.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "human",
  src: _Human_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  animations: function animations() {
    return {
      flap: _FaceDance__WEBPACK_IMPORTED_MODULE_5__["default"],
      punch: _Punch__WEBPACK_IMPORTED_MODULE_3__["default"],
      kick: _Kick__WEBPACK_IMPORTED_MODULE_2__["default"],
      dance: _FirstAnimation__WEBPACK_IMPORTED_MODULE_4__["default"],
      default: [{
        start: 0,
        end: 500,
        handler: function handler(_ref) {
          var context = _ref.context,
              tween = _ref.tween;
          context.layers.rightarm.angle = tween.number(0, 50);
          context.layers.leftarm.y = tween.integer(0, 100);
          context.layers.leftleg.x = tween.number(0, 20);
          context.layers.rightleg.x = tween.number(0, 30);
          context.defaultColor = tween.hex("#000000", "#FF0000");
        }
      }, {
        start: 500,
        end: 1000,
        handler: function handler(_ref2) {
          var context = _ref2.context,
              tween = _ref2.tween;
          context.layers.rightarm.angle = tween.number(50, 0);
          context.layers.leftarm.y = tween.integer(100, 0);
          context.layers.leftleg.x = tween.number(20, 0);
          context.layers.rightleg.x = tween.number(30, 0);
          context.defaultColor = tween.hex("#FF0000", "#000000");
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Helpers/Position */ "../bytepath/Helpers/Position.js");
/**
 * Note to docs readers:
 * The directory structure is a bit different than other examples because its in the bytepath core.
 * Dont think too much about this.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "balloon",
  color: '#FB7272',
  data: function data() {
    return {
      isBalloon: true,
      basket: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_1__["default"]({
        width: 100,
        height: 100,
        x: 1100,
        y: 3550
      })
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/DropShadow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/DropShadow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    keyframe: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      offsetX: -20,
      offsetY: -20,
      red: 1,
      green: 1,
      blue: 1,
      alpha: 0.3
    };
  },
  computed: {
    colorMatrix: function colorMatrix() {
      var retval = "";
      retval += "".concat(this.red, " 0 0 0 0 ");
      retval += "0 ".concat(this.green, " 0 0 0 ");
      retval += "0 0 ".concat(this.blue, " 0 0 ");
      retval += "0 0 0 ".concat(this.alpha, " 0 ");
      return retval;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    keyframe: {
      type: Number,
      default: 0
    }
  },
  computed: {
    scale: function scale() {
      return this.keyframe < 1000 ? this.keyframe / 20 : 50;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/LimeFilter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/LimeFilter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/PeachFilter.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/PeachFilter.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    keyframe: {
      type: Number,
      default: 0
    }
  },
  computed: {
    octaves: function octaves() {
      return this.keyframe % 10;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lighthouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lighthouse */ "../bytepath/Samples/Scenes/Coast/Lighthouse.vue");
/* harmony import */ var _Rocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rocks */ "../bytepath/Samples/Scenes/Coast/Rocks.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Lighthouse: _Lighthouse__WEBPACK_IMPORTED_MODULE_0__["default"],
    Rocks: _Rocks__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [],
  props: {},
  data: function data() {
    return {};
  },
  methods: {},
  components: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [],
  props: {},
  data: function data() {
    return {};
  },
  methods: {},
  components: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farm.svg */ "../bytepath/Samples/Scenes/Farm/Farm.svg");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Farm_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "barn",
  src: _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  layer: ['barn']
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farm.svg */ "../bytepath/Samples/Scenes/Farm/Farm.svg");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Farm_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "cow",
  src: _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  layer: 'cow',
  animations: function animations() {
    return {
      default: [{
        start: 0,
        end: 500,
        handler: function handler(_ref) {
          var context = _ref.context,
              tween = _ref.tween;
          context.layers.head2.x = tween.number(-5, 30);
          context.layers.head2.y = tween.number(50, -5);
          context.layers.body1.y = tween.number(20, -5);
        }
      }, {
        start: 500,
        end: 1000,
        handler: function handler(_ref2) {
          var context = _ref2.context,
              tween = _ref2.tween;
          context.layers.head2.x = tween.number(30, -5);
          context.layers.head2.y = tween.number(-5, 20);
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farm.svg */ "../bytepath/Samples/Scenes/Farm/Farm.svg");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Farm_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Farmer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Farmer */ "../bytepath/Samples/Scenes/Farm/Farmer.vue");
/* harmony import */ var _Barn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Barn */ "../bytepath/Samples/Scenes/Farm/Barn.vue");
/* harmony import */ var _Cow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cow */ "../bytepath/Samples/Scenes/Farm/Cow.vue");
/* harmony import */ var _vue_Components_Timers_ClockTimer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../vue/Components/Timers/ClockTimer */ "../bytepath/vue/Components/Timers/ClockTimer.vue");






/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "farm-scene",
  src: _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  components: {
    Farmer: _Farmer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Barn: _Barn__WEBPACK_IMPORTED_MODULE_3__["default"],
    Cow: _Cow__WEBPACK_IMPORTED_MODULE_4__["default"],
    clock: _vue_Components_Timers_ClockTimer__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Farm.svg */ "../bytepath/Samples/Scenes/Farm/Farm.svg");
/* harmony import */ var _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Farm_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "farmer",
  src: _Farm_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  layer: 'farmer',
  animations: function animations() {
    return {
      default: [{
        start: 0,
        end: 500,
        handler: function handler(_ref) {
          var context = _ref.context,
              tween = _ref.tween;
          context.layers.rightarm.angle = tween.number(75, 100);
          context.layers.rightarm.centerX = 853;
          context.layers.rightarm.centerY = 815;
          context.layers.rightshoulder.angle = 67;
          context.layers.rightshoulder.centerX = 830;
          context.layers.rightshoulder.centerY = 810;
          context.layers.leftshoulder.angle = tween.number(0, 181);
          context.layers.leftshoulder.centerX = 805;
          context.layers.leftshoulder.centerY = 810;
          context.layers.leftleg.angle = 360 - tween.number(0, 80);
          context.layers.leftleg.centerX = 810;
          context.layers.leftleg.centerY = 850;
          context.layers.leftcalf.angle = tween.number(25, 90);
          context.layers.leftcalf.centerX = 810;
          context.layers.leftcalf.centerY = 885;
          context.layers.rightleg.angle = tween.number(0, 80);
          context.layers.rightleg.centerX = 815;
          context.layers.rightleg.centerY = 865;
          context.layers.rightcalf.angle = 360 - tween.number(270, 360);
          context.layers.rightcalf.centerX = 825;
          context.layers.rightcalf.centerY = 885;
        }
      }, {
        start: 500,
        end: 1000,
        handler: function handler(_ref2) {
          var context = _ref2.context,
              tween = _ref2.tween;
          context.layers.rightarm.angle = tween.number(100, 75);
          context.layers.rightarm.centerX = 853;
          context.layers.rightarm.centerY = 815;
          context.layers.rightshoulder.angle = 67;
          context.layers.rightshoulder.centerX = 830;
          context.layers.rightshoulder.centerY = 810;
          context.layers.rightleg.angle = tween.number(280, 360);
          context.layers.rightleg.centerX = 815;
          context.layers.rightleg.centerY = 865;
          context.layers.rightcalf.angle = tween.number(0, 40);
          context.layers.rightcalf.centerX = 825;
          context.layers.rightcalf.centerY = 885;
          context.layers.leftleg.angle = 360 - tween.number(280, 360);
          context.layers.leftleg.centerX = 810;
          context.layers.leftleg.centerY = 850;
          context.layers.leftcalf.angle = tween.number(90, 25);
          context.layers.leftcalf.centerX = 810;
          context.layers.leftcalf.centerY = 885;
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _Coast_Coast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Coast/Coast */ "../bytepath/Samples/Scenes/Coast/Coast.vue");
/* harmony import */ var _Underwater_Underwater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Underwater/Underwater */ "../bytepath/Samples/Scenes/Underwater/Underwater.vue");
/* harmony import */ var _Sky_Sky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sky/Sky */ "../bytepath/Samples/Scenes/Sky/Sky.vue");
/* harmony import */ var _Animations_DoABarrelRoll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Animations/DoABarrelRoll */ "../bytepath/Samples/Animations/DoABarrelRoll.vue");
/* harmony import */ var _Assets_Animals_Pig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Assets/Animals/Pig */ "../bytepath/Samples/Assets/Animals/Pig.vue");
/* harmony import */ var _vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../vue/Components/Timers/KeyframeVisible */ "../bytepath/vue/Components/Timers/KeyframeVisible.js");
/* harmony import */ var _Farm_Cow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Farm/Cow */ "../bytepath/Samples/Scenes/Farm/Cow.vue");









/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].CreateAsset({
  name: "ocean-scene",
  layers: [],
  viewport: true,
  props: {
    // Do we show the underwater crabs and plants or no
    crabs: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      pigPos: new bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].Position({}),
      underwaterPosition: new bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].Position()
    };
  },
  components: Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    'delay': bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].timers.delay
  }, bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].samples.assets), {}, {
    Coast: _Coast_Coast__WEBPACK_IMPORTED_MODULE_2__["default"],
    Sky: _Sky_Sky__WEBPACK_IMPORTED_MODULE_4__["default"],
    Underwater: _Underwater_Underwater__WEBPACK_IMPORTED_MODULE_3__["default"],
    DoABarrelRoll: _Animations_DoABarrelRoll__WEBPACK_IMPORTED_MODULE_5__["default"],
    Pig: _Assets_Animals_Pig__WEBPACK_IMPORTED_MODULE_6__["default"],
    Cow: _Farm_Cow__WEBPACK_IMPORTED_MODULE_8__["default"],
    KeyframeVisible: _vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_7__["default"],
    clock: bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].timers.clock
  }),
  animations: function animations() {
    return {
      default: [{
        start: 1400,
        end: 1650,
        // eslint-disable-next-line
        handler: function handler(_ref) {
          var context = _ref.context,
              tween = _ref.tween,
              keyframe = _ref.keyframe;
          context.pigPos.angle = 360 - tween.number(0, 90);
          context.pigPos.y = tween.number(0, 1600);
        }
      }, {
        start: 1406,
        end: 1700,
        // eslint-disable-next-line
        handler: function handler(_ref2) {
          var context = _ref2.context,
              tween = _ref2.tween,
              keyframe = _ref2.keyframe;
          context.pigPos.x = tween.number(0, -1000);
        }
      }, {
        start: 1406,
        end: 2750,
        // eslint-disable-next-line
        handler: function handler(_ref3) {
          var context = _ref3.context,
              tween = _ref3.tween,
              keyframe = _ref3.keyframe;
          context.pigPos.y = tween.number(0, 2550);
        }
      }, {
        start: 1750,
        end: 2000,
        // eslint-disable-next-line
        handler: function handler(_ref4) {
          var context = _ref4.context,
              tween = _ref4.tween,
              keyframe = _ref4.keyframe;
          context.pigPos.angle = 360 - tween.number(90, 145);
        }
      }, {
        start: 1750,
        end: 2200,
        // eslint-disable-next-line
        handler: function handler(_ref5) {
          var context = _ref5.context,
              tween = _ref5.tween,
              keyframe = _ref5.keyframe;
          context.pigPos.x = tween.number(-1000, -600);
        }
      }, {
        start: 2030,
        end: 3280,
        // eslint-disable-next-line
        handler: function handler(_ref6) {
          var context = _ref6.context,
              tween = _ref6.tween,
              keyframe = _ref6.keyframe;
          context.pigPos.angle = 360 - tween.number(145, 90);
        }
      }, {
        start: 2150,
        end: 2500,
        // eslint-disable-next-line
        handler: function handler(_ref7) {
          var context = _ref7.context,
              tween = _ref7.tween,
              keyframe = _ref7.keyframe;
          context.underwaterPosition.scaleX = tween.number(1, 0.0001);
          context.underwaterPosition.scaleY = tween.number(1, 0.0001);
          context.underwaterPosition.x = tween.number(0, 100);
          context.underwaterPosition.angle = tween.number(0, 360);
          context.underwaterPosition.y = tween.number(0, 700);
          context.pigPos.scaleX = tween.number(1, 0.5);
          context.pigPos.scaleY = tween.number(1, 0.5);
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pointy-background',
  props: {
    fps: {
      type: Number,
      default: 15
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: 'Cloud'
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _Cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cloud */ "../bytepath/Samples/Scenes/Sky/Cloud.vue");



/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].CreateAsset({
  name: 'sky',
  props: {
    fps: {
      type: Number,
      default: 15
    }
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].samples.assets.balloon,
    'clock': bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].timers.clock,
    'bounce': bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].animations.bounce,
    'pointy-background': bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].samples.scenes.partials.pointyBackground,
    Cloud: _Cloud__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _underwater_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underwater.svg */ "../bytepath/Samples/Scenes/Underwater/underwater.svg");
/* harmony import */ var _underwater_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_underwater_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "underwater-background",
  src: _underwater_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  layers: []
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underwaterartboard.svg */ "../bytepath/Samples/Scenes/Underwater/underwaterartboard.svg");
/* harmony import */ var _underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  src: _underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: "bigfish",
  components: {}
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _underwater_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underwater.svg */ "../bytepath/Samples/Scenes/Underwater/underwater.svg");
/* harmony import */ var _underwater_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_underwater_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_0__["default"])({
  src: _underwater_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: "octopus"
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ "../bytepath/Samples/Scenes/Underwater/Background.vue");
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");
/* harmony import */ var _vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue/Components/Timers/KeyframeVisible */ "../bytepath/vue/Components/Timers/KeyframeVisible.js");
/* harmony import */ var _vue_Components_Timers_KeyframeDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../vue/Components/Timers/KeyframeDelay */ "../bytepath/vue/Components/Timers/KeyframeDelay.js");
/* harmony import */ var _vue_Components_Timers_KeyframeRepeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../vue/Components/Timers/KeyframeRepeat */ "../bytepath/vue/Components/Timers/KeyframeRepeat.js");
/* harmony import */ var _YellowFish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./YellowFish */ "../bytepath/Samples/Scenes/Underwater/YellowFish.vue");
/* harmony import */ var _BigFish__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BigFish */ "../bytepath/Samples/Scenes/Underwater/BigFish.vue");
/* harmony import */ var _Octopus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Octopus */ "../bytepath/Samples/Scenes/Underwater/Octopus.vue");
/* harmony import */ var _underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./underwaterartboard.svg */ "../bytepath/Samples/Scenes/Underwater/underwaterartboard.svg");
/* harmony import */ var _underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_2__["default"])({
  name: "underwater",
  src: _underwaterartboard_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  layer: 'theart',
  lookAt: 'background',
  props: {
    // Do we show the crabs and plants or no
    octopusKeyframe: {
      type: Number,
      default: 0
    }
  },
  components: {
    Background: _Background__WEBPACK_IMPORTED_MODULE_1__["default"],
    Octopus: _Octopus__WEBPACK_IMPORTED_MODULE_8__["default"],
    BigFish: _BigFish__WEBPACK_IMPORTED_MODULE_7__["default"],
    YellowFish: _YellowFish__WEBPACK_IMPORTED_MODULE_6__["default"],
    KeyframeDelay: _vue_Components_Timers_KeyframeDelay__WEBPACK_IMPORTED_MODULE_4__["default"],
    KeyframeRepeat: _vue_Components_Timers_KeyframeRepeat__WEBPACK_IMPORTED_MODULE_5__["default"],
    KeyframeVisible: _vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underwater_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underwater.svg */ "../bytepath/Samples/Scenes/Underwater/underwater.svg");
/* harmony import */ var _underwater_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_underwater_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Factories/CreateAsset */ "../bytepath/Factories/CreateAsset.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_Factories_CreateAsset__WEBPACK_IMPORTED_MODULE_1__["default"])({
  src: _underwater_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: "yellowfish",
  components: {}
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../bytepath/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../bytepath/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../bytepath/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Mixins_AnimationEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Mixins/AnimationEntity */ "../bytepath/vue/Mixins/AnimationEntity.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_AnimationEntity__WEBPACK_IMPORTED_MODULE_3__["default"]],
  computed: {
    cssTransform: function cssTransform() {
      var p = this.getPosition();
      return {
        transform: this.transform.toString(),
        transformOrigin: "".concat(p.centerX, "px ").concat(p.centerY, "px")
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../bytepath/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Filters/SanitizedPath */ "../bytepath/vue/Components/Filters/SanitizedPath.js");
/* harmony import */ var _Helpers_SVGLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Helpers/SVGLoader */ "../bytepath/Helpers/SVGLoader.js");

//
//
//
//
//
//
//
//
//

/**
 * Entity loader accepts src that is the path to the svg file containing the assets this entity wants.
 *
 * src is checked against a global list of downloaded svg files
 * if src not already downloaded, the entity that first requests it will download it
 * Any assets that ask for this file afterwards will use the version downloaded by the other component
 * There is a global variable called loadedAssets that holds the list of loaded assets
 * loadedAssets has the syntax { src: "id-that-loaded-this-file" } where src is a filename/url
 */

/* eslint-disable-next-line */

var loadedAssets = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /**
     * The file path to the asset we need to load.
     */
    src: {
      type: String,
      default: null
    },

    /**
     * The id of the asset that requested this asset
     */
    owner: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      loader: _Helpers_SVGLoader__WEBPACK_IMPORTED_MODULE_2__["default"],

      /**
       * The loaded asset
       */
      loadedAsset: null,

      /**
       * The layers we found in the SVG
       */
      rawLayers: [],

      /**
       * Was this the component that loaded the file or was it someone else
       */
      loadedTheFile: false
    };
  },

  /**
   * Check loadedAssets variable to see if someone else has already loaded the requested file. If so, we can
   * use the <use> tag of the SVG spec to clone the tag with id = loadedAssets[this.src]
   */
  created: function created() {
    var _this = this;

    this.loader.load(this.src, this.owner).then(function () {
      _this.loadedAsset = _this.loader.loadedAssets[_this.assetKey];

      if (_this.loader.loadedAssets[_this.assetKey].id == _this.owner) {
        _this.loadedTheFile = true;
      } // Emit a loaded event so that parent classes can act on that


      _this.$emit("loaded", _this.loadedAsset); //this.$parent.$emit("loaded", this.loadedAsset);

    }).catch(function () {});
  },

  /**
   * If we remove this component we need to reload any assets it loaded
   */
  destroyed: function destroyed() {
    delete this.loader.deleteAsset[this.src];
  },
  computed: {
    /**
     * Returns true if we have loaded the asset
     */
    loaded: function loaded() {
      return this.loadedAssetId !== null;
    },

    /**
     * The ID of the dom element containing our asset. Not necessarily part of this component
     * someone else may have loaded the data and we just make a copy
     */
    loadedAssetId: function loadedAssetId() {
      return this.loadedAsset ? this.loadedAsset.id : null;
    },

    /**
     * The data attribute of the loaded asset
     */
    assetData: function assetData() {
      if (this.loadedAsset) {
        if (this.loadedTheFile) {
          return this.loadedAsset.data;
        }
      }

      return null;
    },

    /**
     * Returns the list of layers that are valid entities
     */
    layers: function layers() {
      return this.rawLayers.filter(function (layer) {
        return layer.charAt(0) !== "_";
      });
    },

    /**
     * The key we use to find this asset in the global repository
     */
    assetKey: function assetKey() {
      return Object(_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_1__["default"])(this.src);
    },

    /**
     * Returns the asset stringified as valid HTML
     */
    assetString: function assetString() {
      return this.assetData ? this.assetData.outerHTML : "";
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Layer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/SVG/Layer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "../bytepath/vue/Components/SVG/Vector.vue");
/* harmony import */ var _Mixins_CalculatesTransformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Mixins/CalculatesTransformation */ "../bytepath/vue/Mixins/CalculatesTransformation.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Helpers/Position */ "../bytepath/Helpers/Position.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layer',
  mixins: [_Mixins_CalculatesTransformation__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: {
    layer: {
      type: Object,
      required: true
    },
    opacity: {
      type: Number,
      default: 100
    }
  },
  methods: {
    getCenterPosition: function getCenterPosition() {
      // Defaults to 0,0
      var retval = {
        x: 0,
        y: 0
      }; // Center X

      if (this.cx !== null) {
        // Use Prop first
        retval.x = this.cx;
      } else if (this.position.centerX !== null) {
        // Then use position
        retval.x = this.position.centerX;
      } else {// If no position use half the width
        //retval.x = this.getCenterFromParentViewport().x;
      } // Center Y


      if (this.cy !== null) {
        // Use Prop first
        retval.y = this.cy;
      } else if (this.position.centerY !== null) {
        // Then use position
        retval.y = this.position.centerY;
      } else {// If no position use half the height
        // retval.y = this.getCenterFromParentViewport().y;
      } //console.log("layer center", retval, this.layer);


      return new _Helpers_Position__WEBPACK_IMPORTED_MODULE_3__["default"](retval);
    },
    getCenterFromParentViewport: function getCenterFromParentViewport() {
      if (this.$el) {
        var bbox = this.$el.getBBox();
        console.log('layer box', bbox);
      }

      return {
        x: 0,
        y: 0
      };
    }
  },
  components: {
    Vector: _Vector__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Scene.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/SVG/Scene.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "../bytepath/vue/Components/SVG/Vector.vue");
/* harmony import */ var _Mixins_AcceptsViewportProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Mixins/AcceptsViewportProps */ "../bytepath/vue/Mixins/AcceptsViewportProps.js");
//
//
//
//
//
//

/* eslint-disable */


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_AcceptsViewportProps__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    /**
     * What to do if this entity goes outside it's clip boundaries. Default we just continue drawing it
     */
    overflow: {
      type: String,
      default: "hidden"
    },

    /**
     * If false the viewbox attribute will not be added to the generated SVG tag
     */
    showViewbox: {
      type: Boolean,
      default: true
    },
    height: {
      default: null
    },
    width: {
      default: null
    }
  },
  components: {
    Vector: _Vector__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Vector.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/SVG/Vector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../bytepath/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../bytepath/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../bytepath/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var transformation_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! transformation-matrix */ "../bytepath/node_modules/transformation-matrix/src/index.js");
/* harmony import */ var _Loaders_AssetLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loaders/AssetLoader */ "../bytepath/vue/Components/Loaders/AssetLoader.vue");
/* harmony import */ var _Mixins_CalculatesTransformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Mixins/CalculatesTransformation */ "../bytepath/vue/Mixins/CalculatesTransformation.js");
/* harmony import */ var _Mixins_CalcCenterUsingViewbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Mixins/CalcCenterUsingViewbox */ "../bytepath/vue/Mixins/CalcCenterUsingViewbox.js");
/* harmony import */ var _Mixins_AcceptsViewportProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Mixins/AcceptsViewportProps */ "../bytepath/vue/Mixins/AcceptsViewportProps.js");
/* harmony import */ var _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Helpers/Position */ "../bytepath/Helpers/Position.js");
/* harmony import */ var _Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Filters/SanitizedPath */ "../bytepath/vue/Components/Filters/SanitizedPath.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Vector',
  mixins: [_Mixins_AcceptsViewportProps__WEBPACK_IMPORTED_MODULE_9__["default"], _Mixins_CalculatesTransformation__WEBPACK_IMPORTED_MODULE_7__["default"], _Mixins_CalcCenterUsingViewbox__WEBPACK_IMPORTED_MODULE_8__["default"]],
  props: {
    /**
     * The file path to the asset we need to load. Optional if you don't need to load an asset
     */
    src: {
      type: String,
      default: null
    },

    /**
     * Add a filter to this vector
     */
    filter: {
      type: Object,
      default: null
    },

    /**
     * Vector doesn't actually need keyframe this is just a hack to prevent it from getting written to
     * the dom when you pass $props to SVG tag
     */
    keyframe: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      /**
       * A rectangle representing the area of the user coordinate system we want to display
       */
      assetDimensions: null,

      /**
       * The href we can use to find the loaded asset
       */
      href: null,

      /**
      * A position representing the default viewbox [0 0 0 0]
      */
      viewbox: new _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__["default"]({
        width: 0,
        height: 0
      }),

      /**
       * The string represntation of the viewbox
       */
      strViewbox: null
    };
  },
  computed: {
    /**
     * Computes the preserveAspectRatio attribute for this svg
     */
    preserveAspectRatio: function preserveAspectRatio() {
      if (this.camera) {
        return "none";
      }

      if (this.align) {
        // Convert the human friendly alignment options to SVG
        var commands = {
          'none': "none",
          'top-left': 'xMinYMin',
          'topleft': 'xMinYMin',
          'top': 'xMidYMin',
          'top-right': 'xMaxYMin',
          'topright': 'xMaxYMin',
          'left': 'xMinYMid',
          'middle': 'xMidYMid',
          'right': 'xMaxYMid',
          'bottom-left': 'xMinYMax',
          'bottomleft': 'xMinYMax',
          'bottom': 'xMidYMax',
          'bottom-right': 'xMaxYMax',
          'bottomright': 'xMaxYMax'
        };

        if (Object.prototype.hasOwnProperty.call(commands, this.align)) {
          var retval = commands[this.align];

          if (this.fit !== null) {
            retval += this.fit ? ' meet' : ' slice';
          }

          return retval;
        }
      }

      return "none";
    },

    /**
     * The ID that should be used on the loaded svg file, should we be the component responsible for doing that
     * @returns String
     */
    assetID: function assetID() {
      var asset = this.name ? "__".concat(this._uid, "-").concat(this.name) : "__".concat(this._uid);
      return asset;
    },

    /**
     * The ID of the filter attached to this vector
     */
    filterID: function filterID() {
      if (this.filter) {
        return "url(#filter".concat(this.assetID, ")");
      }

      return null;
    }
  },
  mounted: function mounted() {
    this.calculateSelfDimensions();
    this.calculateViewport();
  },
  methods: {
    /**
     * Determines whether this vector should add the viewbox attibute to its tag
     * @returns boolean
     */
    shouldShowViewbox: function shouldShowViewbox() {
      /**
       * We always show the viewbox if showviewbox is true
       */
      if (this.showViewbox !== null) {
        return this.showViewbox;
      }
      /**
       * If this is the top mounted vector element then we show viewbox unless the
       * :show-viewbox prop is set to false
       */


      if (this.$el) {
        if (this.$el.tagName === 'svg') {
          if (this.$el.farthestViewportElement === null) {
            return this.showViewbox !== false;
          }
        }
      } // if (this.viewBox && (this.showViewbox || this.camera)) {
      //
      // }


      return true;
    },

    /**
     * The viewbox is what svg uses to figure out what portion of the coordinate system to draw.
     * We multiply the values against the passed in camera prop to simulate moving the camera around
     * viewbox = [ 0 0 500 100 ]
     * top left    [0,0]    [500, 0]   //Top Right
     * Bottom Left [0,1000] [500,1000] //Bottom right
     */
    calculateViewport: function calculateViewport() {
      if (this.camera) {
        var tempBox = new _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__["default"](Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, this.camera));

        if (this.assetDimensions) {
          tempBox.centerX = this.assetDimensions.width / (2 * this.camera.scaleX);
          tempBox.centerY = this.assetDimensions.height / (2 * this.camera.scaleY);
          tempBox.scaleX = 1 / this.camera.scaleX;
          tempBox.scaleY = 1 / this.camera.scaleY;
          var tl = tempBox.multiplyPoint(this.assetDimensions.x, this.assetDimensions.y);
          var br = tempBox.multiplyPoint(this.assetDimensions.width, this.assetDimensions.height);
          this.dimensions.width = br.x * this.camera.scaleX;
          this.dimensions.height = br.y * this.camera.scaleY;
          this.viewbox = new _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__["default"]({
            x: tl.x,
            y: tl.y,
            width: br.x,
            height: br.y
          });
        }
      } else if (this.assetDimensions) {
        this.viewbox = new _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__["default"]({
          x: this.assetDimensions.x,
          y: this.assetDimensions.y,
          width: this.assetDimensions.width,
          height: this.assetDimensions.height
        });
        this.dimensions.width = this.assetDimensions.width;
        this.dimensions.height = this.assetDimensions.height;
      } else {
        this.viewbox = new _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__["default"]({
          width: 0,
          height: 0
        });
        this.dimensions.width = 0;
        this.dimensions.height = 0;
      } // Set the viewbox string if needed


      this.strViewbox = this.shouldShowViewbox() ? this.viewbox.toViewbox() : null;
    },

    /**
     * Called when asset has been loaded by the asset loader component. Moves whatever we are trying to look at
     * to point {0, 0} so that we are "looking" at it
     */
    assetLoaded: function assetLoaded(asset) {
      var _this = this;

      this.href = "#" + asset.id;

      if (asset.viewBox) {
        this.assetDimensions = Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, asset.viewBox);
      }

      var that = this;
      setTimeout(function () {
        var element;
        var lookAtID;

        if (that.lookAt === null) {
          lookAtID = 'g' + that.assetID;
          element = document.getElementById(lookAtID);
        } else {
          var elid = Object(_Filters_SanitizedPath__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.src) + _this.lookAt;

          element = document.getElementById(elid);
        }

        that.lookAtElement(element);
        that.calculateViewport();
      }, 0);
      this.$emit("loaded", asset);
    },

    /**
     * @refactor This function and lookAtAsset really should be one method
     */
    calculateSelfDimensions: function calculateSelfDimensions() {
      if (this.$el) {
        if (this.$el.getBBox) {
          var bbox = this.$el.getBBox();
          this.assetDimensions = new _Helpers_Position__WEBPACK_IMPORTED_MODULE_10__["default"]({
            x: bbox.x,
            y: bbox.y,
            width: bbox.width,
            height: bbox.height
          }); // Set the width of this entity using the size of its bbox

          this.dimensions.height = bbox.height;
          this.dimensions.width = bbox.width; // Set the center position

          this.dimensions.centerX = (bbox.width + bbox.x) / 2;
          this.dimensions.centerY = (bbox.height + bbox.y) / 2;
        }
      }
    },

    /**
     * Moves the "camera" to look directly at the asset we are puling from a larger scene
     */
    lookAtElement: function lookAtElement(element) {
      if (element) {
        if (typeof element.getBBox == "function") {
          var bbox = element.getBBox(); // Set the width of this entity using the size of its bbox

          this.dimensions.height = bbox.height;
          this.dimensions.width = bbox.width; // Set the center position

          this.dimensions.centerX = (bbox.width + bbox.x) / 2;
          this.dimensions.centerY = (bbox.height + bbox.y) / 2; // Set camera position to the BBox of this element

          this.assetDimensions.x = bbox.x;
          this.assetDimensions.y = bbox.y;
          this.assetDimensions.width = bbox.width;
          this.assetDimensions.height = bbox.height;
        }
      } else {
        console.log("couldnt find an element with ", lookAtID, this);
      }
    }
  },
  components: {
    AssetLoader: _Loaders_AssetLoader__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Timers/ClockTimer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Timers/ClockTimer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Mixins/PlaybackTimer */ "../bytepath/vue/Mixins/PlaybackTimer.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {},
  methods: {
    createTimer: function createTimer() {
      this.timerId = true;
      this.newTimeout();
    },
    running: function running() {
      var timeDiff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      //console.log("running");
      if (this.shouldTick) {
        this.frame += timeDiff;
      }
    },
    timerType: function timerType() {
      return "Clock";
    },
    // Create a new timeout that when finished will run the running function of this control
    newTimeout: function newTimeout() {
      var _this = this;

      if (this.fps > 0) {
        this.timerId = setTimeout(function () {
          return requestAnimationFrame(_this.timeStep);
        }, 1000 / this.fps);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Timers/ResponsiveScrollTimer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Mixins/PlaybackTimer */ "../bytepath/vue/Mixins/PlaybackTimer.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {},
  data: function data() {
    return {
      scroll: 0,
      scale: 1
    };
  },
  computed: {},
  mounted: function mounted() {
    this.updateViewportScale();
    window.addEventListener('resize', this.updateViewportScale);
  },
  methods: {
    // Updates the scale factor for the output keyframe
    updateViewportScale: function updateViewportScale() {
      if (this.$el) {
        var m = this.$el.getScreenCTM();
        console.log("ve");
        this.scale = 1 + (1 - m.d);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Timers/ScrollTimer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Timers/ScrollTimer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "../bytepath/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Mixins/PlaybackTimer */ "../bytepath/vue/Mixins/PlaybackTimer.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_PlaybackTimer__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    // A multiplier for the outputted value to allow you to speed up or slow down the scroll playback speed
    speed: {
      type: Number,
      default: 1
    },
    responsive: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    this.updateViewportScale();
    window.addEventListener('resize', this.updateViewportScale);
  },
  data: function data() {
    return {
      scale: 1
    };
  },
  methods: {
    createTimer: function createTimer() {
      window.addEventListener('scroll', this.windowScrolled);
      this.timerId = true;
    },
    clearTimer: function clearTimer() {
      window.removeEventListener('scroll', this.windowScrolled);
      this.timerId = null;
    },
    windowScrolled: function windowScrolled() {
      // To make the :fps prop work as expected, we pass the current time in milliseconds
      // to the timeStep function
      this.timeStep(Date.now());
    },
    running: function running() {
      this.frame = Math.floor(window.scrollY * this.speed);

      if (this.responsive) {
        this.frame *= this.scale;
      }
    },
    timerType: function timerType() {
      return "Scroll";
    },
    // Updates the scale factor for the output keyframe
    updateViewportScale: function updateViewportScale() {
      if (this.$el) {
        if (this.$el) {
          if (this.$el.getScreenCTM) {
            var m = this.$el.getScreenCTM();
            console.log("ve");
            this.scale = 1 + (1 - m.d);
            console.log("scroll viewport scale", this.scale);
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _examples_Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/Demo */ "./src/examples/Demo.vue");
/* harmony import */ var _examples_KeyframeModifiers_DelayHiddenChain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/KeyframeModifiers/DelayHiddenChain */ "./src/examples/KeyframeModifiers/DelayHiddenChain.vue");
/* harmony import */ var _examples_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/HomePage */ "./src/examples/HomePage.vue");
/* eslint-disable */




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    Demo: _examples_Demo__WEBPACK_IMPORTED_MODULE_1__["default"],
    example: _examples_KeyframeModifiers_DelayHiddenChain__WEBPACK_IMPORTED_MODULE_2__["default"],
    HomePage: _examples_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"],
    vector: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].graphics.vector
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/AnimatedBalloon.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/AnimatedBalloon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position(),
      curFrame: 0
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.tinyBalloon.tinyBalloon
  },
  animations: function animations() {
    return {
      default: [{
        start: 0,
        end: 100,
        handler: function handler(_ref) {
          var context = _ref.context,
              keyframe = _ref.keyframe;

          /**
           * Balloon will scroll on the X axis to the value of the :keyframe prop
           * This effectively means we scroll between X=0 to X=100 depending on keyframe
           */
          context.balloonPos.x = keyframe;
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedAnimation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/ComplicatedAnimation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position(),
      currentFrame: 0
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon
  },
  animations: function animations() {
    return {
      default: [{
        name: "Moves right from 0 to 500",
        start: 0,
        end: 500,
        handler: function handler(_ref) {
          var context = _ref.context,
              keyframe = _ref.keyframe;
          var frame = Math.floor(keyframe / 2);
          context.balloonPos.x = frame;
        }
      }, {
        name: "Moves Down and right while rotating frames 501 to 1000",
        start: 501,
        end: 1000,
        handler: function handler(_ref2) {
          var context = _ref2.context,
              keyframe = _ref2.keyframe;
          var frame = Math.floor(keyframe / 2);
          context.balloonPos.x = frame;
          context.balloonPos.y = frame - 201;
          context.balloonPos.angle = frame % 360;
        }
      },
      /**
       *
       *  NOTE THE GAP BETWEEN PREVIOUS END (1000) and New Start (1500)
       *  THIS MEANS WE DO NOTHING FROM FRAMES 1000 - 1500
       */
      {
        name: "Scale x and y without moving from 1500 to 2500",
        start: 1500,
        end: 2500,
        handler: function handler(_ref3) {
          var context = _ref3.context,
              keyframe = _ref3.keyframe;
          var frame = Math.floor(keyframe / 10);
          var scale = (keyframe - 1000) / 250;
          context.balloonPos.y = 365 - 201 - frame;
          context.balloonPos.scaleX = scale;
          context.balloonPos.scaleY = scale;
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedToTween.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/ComplicatedToTween.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position(),
      currentFrame: 0
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon
  },
  animations: function animations() {
    return {
      default: [{
        name: "Moves right from 0 to 500",
        start: 0,
        end: 500,
        handler: function handler(_ref) {
          var context = _ref.context,
              tween = _ref.tween;
          context.balloonPos.x = tween.number(0, 250);
        }
      }, {
        name: "Moves Down and right while rotating frames 501 to 1000",
        start: 501,
        end: 1000,
        handler: function handler(_ref2) {
          var context = _ref2.context,
              tween = _ref2.tween;
          context.balloonPos.x = tween.number(250, 500);
          context.balloonPos.x = tween.number(300, 280);
          context.balloonPos.angle = tween.number(0, 270);
        }
      },
      /**
       *
       *  NOTE THE GAP BETWEEN PREVIOUS END (1000) and New Start (1500)
       *  THIS MEANS WE DO NOTHING FROM FRAMES 1000 - 1500
       */
      {
        name: "Double the scale of the balloon from 1500 to 2500",
        start: 1500,
        end: 2500,
        handler: function handler(_ref3) {
          var context = _ref3.context,
              tween = _ref3.tween;
          context.balloonPos.scaleX = tween.number(1, 2);
          context.balloonPos.scaleY = tween.number(1, 2);
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/CreateKeyframe.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/CreateKeyframe.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

var _k = bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateKeyframe;
/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position()
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon
  },
  animations: function animations() {
    return {
      default: [_k(0, 100, function (_ref) {
        var context = _ref.context,
            keyframe = _ref.keyframe;
        context.balloonPos.x = keyframe;
      })]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultiAction.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/MultiAction.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

var _k = bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateKeyframe;
/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position()
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon
  },
  animations: function animations() {
    return {
      default: [
      /** From frame 0 to frame 100 scroll on the x axis **/
      _k(0, 100, function (_ref) {
        var context = _ref.context,
            keyframe = _ref.keyframe;
        context.balloonPos.x = keyframe * 3;
      }),
      /** From frame 100 to frame 200 perform a rotation **/
      _k(100, 200, function (_ref2) {
        var context = _ref2.context,
            keyframe = _ref2.keyframe;
        context.balloonPos.angle = 100 - keyframe;
      }),
      /** From frame 200 to frame 300 scroll on the y axis **/
      _k(200, 300, function (_ref3) {
        var context = _ref3.context,
            keyframe = _ref3.keyframe;
        context.balloonPos.y = 200 - keyframe;
      })]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultipleAnimations.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/MultipleAnimations.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
//

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  components: {
    human: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.human
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/PropAnimation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/PropAnimation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

var _k = bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateKeyframe;
/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: "RenderessExample",
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position()
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon
  },
  animations: function animations() {
    return {
      default: [_k(0, 1000, function (_ref) {
        var context = _ref.context,
            tween = _ref.tween;
        context.defaultColor = tween.hex("#FF00FF", "#FFFFFF");
      })]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/RenderlessExample.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/RenderlessExample.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

//

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].CreateAsset({
  props: {
    keyframe: {
      type: Number,
      default: 0
    }
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].samples.assets.balloon,
    human: bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].samples.assets.human,
    doABarrelRoll: bytepath__WEBPACK_IMPORTED_MODULE_1__["default"].samples.animations.doABarrelRoll
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/SeparateAnimationFile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/SeparateAnimationFile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _MyAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyAnimation */ "./src/examples/Animation/MyAnimation.js");


/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  data: function data() {
    return {
      balloonPos: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position(),
      curFrame: 0
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon
  },
  animations: function animations() {
    return {
      default: _MyAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/Import.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/ArtAsset/Import.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepathnpm/Samples/Assets/Human/Human.svg */ "../bytepath/Samples/Assets/Human/Human.svg");
/* harmony import */ var _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: "imported",
  src: _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportLayer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/ArtAsset/ImportLayer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepathnpm/Samples/Assets/Human/Human.svg */ "../bytepath/Samples/Assets/Human/Human.svg");
/* harmony import */ var _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: "single-layer",
  src: _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepathnpm/Samples/Assets/Human/Human.svg */ "../bytepath/Samples/Assets/Human/Human.svg");
/* harmony import */ var _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: "single-layer",
  src: _bytepathnpm_Samples_Assets_Human_Human_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Rotation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/Rotation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      angle: 90
    };
  },
  mounted: function mounted() {
    this.angle = 0;
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.tinyBalloon.tinyBalloon
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Scale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/Scale.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sx: 2,
      sy: 1
    };
  },
  mounted: function mounted() {
    this.$forceUpdate();
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.tinyBalloon.tinyBalloon
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Translation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/Translation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      x: 1,
      y: 1
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.tinyBalloon.tinyBalloon
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/WidthHeight.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/WidthHeight.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vector: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].graphics.vector
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Demo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Demo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KeyframeSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyframeSlider */ "./src/examples/KeyframeSlider.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Demo",
  props: {
    title: {
      type: String,
      default: null
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: null
    },
    src: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      currentFrame: 0,
      theDemo: null
    };
  },
  mounted: function mounted() {
    if (this.src) {
      console.log("demo import demo is", this.src);
      this.theDemo = this.src;
    }
  },
  components: {
    KeyframeSlider: _KeyframeSlider__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/HomePage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/HomePage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _bytepathnpm_Samples_Scenes_Farm_Farm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bytepathnpm/Samples/Scenes/Farm/Farm */ "../bytepath/Samples/Scenes/Farm/Farm.vue");
/* harmony import */ var _bytepathnpm_Samples_Scenes_Ocean_OceanScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bytepathnpm/Samples/Scenes/Ocean/OceanScene */ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  components: {
    OceanScene: _bytepathnpm_Samples_Scenes_Ocean_OceanScene__WEBPACK_IMPORTED_MODULE_2__["default"],
    Farm: _bytepathnpm_Samples_Scenes_Farm_Farm__WEBPACK_IMPORTED_MODULE_1__["default"],
    scroll: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].timers.scroll,
    scene: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].graphics.scene
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/AssetComposition.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/AssetComposition.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      x: 50,
      y: 0,
      angle: 0
    };
  },
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon,
    human: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.human,
    vector: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].graphics.vector
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/BalloonSample.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/BalloonSample.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    balloon: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.tinyBalloon.tinyBalloon
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ "./src/examples/Introduction/Rectangle.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Rectangle: _Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/Rectangle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/Rectangle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  props: {
    color: {
      type: String,
      default: "red"
    }
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeAnimation/Color.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/KeyframeAnimation/Color.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

var Balloon = bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.assets.balloon;
/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  components: {
    Balloon: Balloon
  },
  animations: function animations() {
    return {
      default: [// Frames 0 to 1000: Green to Blue
      {
        start: 0,
        end: 1000,
        handler: function handler(_ref) {
          var context = _ref.context,
              tween = _ref.tween;
          context.defaultColor = tween.hex("#0000FF", "#FF0000");
        }
      }, // Frames 1000 to 2000: Green to Blue
      {
        start: 1000,
        end: 2000,
        handler: function handler(_ref2) {
          var context = _ref2.context,
              tween = _ref2.tween;
          context.defaultColor = tween.hex("#FF0000", "#00FF00");
        }
      }, // Frames 2000 to 3000: Green to Blue
      {
        start: 2000,
        end: 3000,
        handler: function handler(_ref3) {
          var context = _ref3.context,
              tween = _ref3.tween;
          context.defaultColor = tween.hex("#00FF00", "#0000FF");
        }
      }]
    };
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _bytepathnpm_Samples_Scenes_Underwater_Underwater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepathnpm/Samples/Scenes/Underwater/Underwater */ "../bytepath/Samples/Scenes/Underwater/Underwater.vue");
/* harmony import */ var _bytepathnpm_vue_Components_Timers_KeyframeDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bytepathnpm/vue/Components/Timers/KeyframeDelay */ "../bytepath/vue/Components/Timers/KeyframeDelay.js");
/* harmony import */ var _bytepathnpm_vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bytepathnpm/vue/Components/Timers/KeyframeVisible */ "../bytepath/vue/Components/Timers/KeyframeVisible.js");
/* harmony import */ var _bytepathnpm_Samples_Scenes_Underwater_Octopus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bytepathnpm/Samples/Scenes/Underwater/Octopus */ "../bytepath/Samples/Scenes/Underwater/Octopus.vue");





/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: "DelayExample",
  layers: [],
  viewport: true,
  components: {
    Underwater: _bytepathnpm_Samples_Scenes_Underwater_Underwater__WEBPACK_IMPORTED_MODULE_1__["default"],
    Octopus: _bytepathnpm_Samples_Scenes_Underwater_Octopus__WEBPACK_IMPORTED_MODULE_4__["default"],
    KeyframeDelay: _bytepathnpm_vue_Components_Timers_KeyframeDelay__WEBPACK_IMPORTED_MODULE_2__["default"],
    KeyframeVisible: _bytepathnpm_vue_Components_Timers_KeyframeVisible__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeSlider.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/KeyframeSlider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "KeyframeSlider",
  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 1000
    }
  },
  data: function data() {
    return {
      currentFrame: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingClockTimer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Timers/UsingClockTimer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fps: 60
    };
  },
  components: {
    clock: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].timers.clock
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingScrollTimer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Timers/UsingScrollTimer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    scroll: bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].timers.scroll
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/UsingFilters/FilterExample.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/UsingFilters/FilterExample.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/* harmony import */ var _bytepathnpm_Samples_Scenes_Ocean_OceanScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bytepathnpm/Samples/Scenes/Ocean/OceanScene */ "../bytepath/Samples/Scenes/Ocean/OceanScene.vue");
// FilterExample.vue

 // All of these filters can also be used in your own projects

var Filters = bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].samples.filters;
var Matrix = Filters.enterTheMatrix;
var Underwater = Filters.underwater;
var Lime = Filters.limeFilter;
var Peach = Filters.peachFilter;
var Shadow = Filters.dropShadow;
/* harmony default export */ __webpack_exports__["default"] = (bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateAsset({
  name: "FilterExample",
  data: function data() {
    return {
      index: 1,
      curFrame: 0,
      cam: new bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].Position({
        width: 1380,
        height: 2000
      })
    };
  },
  computed: {
    useFilter: function useFilter() {
      return [null, Matrix, Lime, Underwater, Shadow, Peach][this.index];
    }
  },
  components: {
    OceanScene: _bytepathnpm_Samples_Scenes_Ocean_OceanScene__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=template&id=768f17b4&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Animals/Pig.vue?vue&type=template&id=768f17b4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return _vm._l(_vm.filteredLayers, function(layer, i) {
                return _c("layer", { key: i, attrs: { layer: layer } })
              })
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Balloon.vue?vue&type=template&id=4e54d50d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Balloon.vue?vue&type=template&id=4e54d50d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      { attrs: { id: "balloon" + _vm._uid } },
      "vector",
      _vm.$props,
      false
    ),
    [
      _c("g", [
        _c("g", { attrs: { id: "balloon" } }, [
          _c("path", {
            style: { fill: _vm.defaultColor },
            attrs: {
              stroke: "rgb(74, 85, 104)",
              "stroke-width": "5",
              "stroke-linecap": "round",
              d:
                "M219.63,311.81q-5.46,14.88-10.9,29.78l-17.62,57,5.09,2.18a510.44,510.44,0,0,1,18.89-58.48c14.41-36.9,20.84-55.65,35.23-72.83,9.84-11.75,15.58-14.76,26-30a166.83,166.83,0,0,0,19.8-39.05,161,161,0,0,0,7.27-72.65c-1.52-11.48-9.37-71-58.12-102.8-13.37-8.72-25-12.07-41.05-16.71C148.4-7.8,103.31,4,94.49,6.49c-14.33,4-24.72,6.88-37,14.9C57.44,21.39,15,49,3.05,110c-.66,3.39-1.19,6.91-1.19,6.91A189.68,189.68,0,0,0,0,146c.67,26.57,23.18,90.56,57.36,121.36a103.87,103.87,0,0,1,9.12,9.05c9.49,10.72,22.65,42.23,22.65,42.23,2.28,5.45,3.42,8.17,4.64,11.3,9.1,23.42,18.15,51.26,25.06,73.7l4.09-2.05-15.8-51.76a81.18,81.18,0,0,0-7.22-22.2,28.27,28.27,0,0,1-3.51-11,29.54,29.54,0,0,1,.92-9.45c2.82-10,16.06-21.89,32-21.79,15.51.1,25.29,11.48,26.83,13.35l.69,94.53h4.9l.95-95.21a32.06,32.06,0,0,1,32.56-11.44,26.56,26.56,0,0,1,18.39,9.12A26,26,0,0,1,219.63,311.81Z"
            }
          }),
          _c("path", {
            staticClass: "balloon-7",
            attrs: { d: "M213.41,394.49,103.34,366.84" }
          })
        ]),
        _c(
          "g",
          { attrs: { id: "basket" } },
          [
            _vm._t("default", null, { position: _vm.basket }),
            _c("polygon", {
              staticClass: "balloon-1",
              attrs: {
                id: "wiicker",
                points:
                  "121.46 408.38 159.87 400.48 193.93 407.3 193.25 446.8 158.37 459.47 122.82 454.43 121.46 408.38"
              }
            }),
            _c("polyline", {
              staticClass: "balloon-2",
              attrs: {
                points:
                  "159.33 403.48 159.74 461.65 192.75 453.27 192.75 413.34 179.13 402.07"
              }
            }),
            _c("path", {
              staticClass: "balloon-3",
              attrs: {
                id: "top",
                d:
                  "M116.28,405c2-10,36.94-9.84,43.18-9.81,6.73,0,38.72.17,40.6,9.4.46,2.3-1,4.76-2.59,6.13-7.08,6.12-18.91-7.58-38-7.63-20.08-.05-32.38,15.05-40.18,8.72C117.4,410.26,115.77,407.49,116.28,405Z"
              }
            }),
            _c("polygon", {
              staticClass: "balloon-3",
              attrs: {
                points:
                  "158.16 440.4 194.47 448.16 194.47 453.61 159.46 463.69 121.87 457.56 121.87 450.75 158.16 440.4"
              }
            }),
            _c("polyline", {
              staticClass: "balloon-4",
              attrs: {
                points:
                  "134.13 454.97 159.74 460.01 159.15 453.54 159.06 447.07"
              }
            }),
            _c("path", {
              staticClass: "balloon-5",
              attrs: {
                d:
                  "M124.18,411.93c1.85.46,1,4.71,3.27,5.85,1.67.85,4.31-.39,5.59-2s-.38-3.41.54-6.13c.33-1,.91-2.88,2.45-3.4,1.94-.66,4,1.3,4.23,1.49,1.51,1.46,1,2.56,2.45,4.5.37.49,2.15,2.89,4.49,3,2.77.12,5-2.89,5.86-5.18.57-1.57,0-1.85.41-4.22.31-2,1-6.23,3.68-7.09a4.62,4.62,0,0,1,4.9,1.91c.62,1,.33,1.7.41,3.81s.2,5.35,1.91,7.5c.11.13,2.25,2.79,5,2.58.65,0,2.26-.55,6-7.9,2.6-5.1,3-7.24,4.09-7.22,1.42,0,3,3.78,3.13,7.09.06,2.23-.62,3-.14,5,.18.75.85,3.62,2.87,4.22s4.08-1.09,5.17-2.72c2.25-3.37.43-7.69,1.23-7.9.6-.16,1.92,2.19,2.45,4.49a8.86,8.86,0,0,1,.14,4.22c-.65,2.63-3.17,6.18-7.09,6.13-3.61,0-5.41-6-6.81-5.45-.14.06-.49.26-.68,2.32-.43,4.55,1,6.46-.14,8.58-.57,1.07-1.78,2.17-2.45,1.91-2-.8,1.79-14.29.41-14.71-.57-.18-1.11,2.17-3.68,3.95-.6.42-3.63,2.41-6.94,1.5s-5-4.42-5.32-5c-1.24-2.73-.54-4.55-2.31-9.54-.44-1.23-.86-2.19-1.36-2.18-.65,0-1.23,1.65-1.37,3a9.37,9.37,0,0,0,.55,3.54c.73,3.59-2.5,8.21-6.4,10.08a7,7,0,0,1-4.5.95c-4.49-.87-6.43-7.63-7.08-7.35-.4.17.44,2.65,1,5.17,1.41,7,.36,14.87-1.63,15.26-.75.15-1.5-.78-1.64-.95-1.55-1.92.28-4.52.27-10.08,0-.73,0-3.71-.68-3.82-.49-.07-.76,1.57-2,3a7.3,7.3,0,0,1-6.27,2.18c-4.55-.71-7.6-6.73-6.26-9.13A2.34,2.34,0,0,1,124.18,411.93Z"
              }
            }),
            _c("polyline", {
              staticClass: "balloon-4",
              attrs: {
                points:
                  "185.34 454.43 159.74 459.47 159.15 453.54 159.06 447.07"
              }
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Human/Human.vue?vue&type=template&id=41593189&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Human/Human.vue?vue&type=template&id=41593189& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c(
                  "g",
                  { attrs: { id: "humans" } },
                  _vm._l(_vm.filteredLayers, function(layer, i) {
                    return _c("layer", {
                      key: i,
                      attrs: { position: layer, layer: layer }
                    })
                  }),
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=template&id=6386cccd&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      { attrs: { id: "balloon" + _vm._uid } },
      "vector",
      _vm.$props,
      false
    ),
    [
      _c("g", { attrs: { transform: "scale(0.25 0.25)" } }, [
        _c("g", { attrs: { id: "balloon" } }, [
          _c("path", {
            style: { fill: _vm.defaultColor },
            attrs: {
              stroke: "rgb(74, 85, 104)",
              "stroke-width": "5",
              "stroke-linecap": "round",
              d:
                "M219.63,311.81q-5.46,14.88-10.9,29.78l-17.62,57,5.09,2.18a510.44,510.44,0,0,1,18.89-58.48c14.41-36.9,20.84-55.65,35.23-72.83,9.84-11.75,15.58-14.76,26-30a166.83,166.83,0,0,0,19.8-39.05,161,161,0,0,0,7.27-72.65c-1.52-11.48-9.37-71-58.12-102.8-13.37-8.72-25-12.07-41.05-16.71C148.4-7.8,103.31,4,94.49,6.49c-14.33,4-24.72,6.88-37,14.9C57.44,21.39,15,49,3.05,110c-.66,3.39-1.19,6.91-1.19,6.91A189.68,189.68,0,0,0,0,146c.67,26.57,23.18,90.56,57.36,121.36a103.87,103.87,0,0,1,9.12,9.05c9.49,10.72,22.65,42.23,22.65,42.23,2.28,5.45,3.42,8.17,4.64,11.3,9.1,23.42,18.15,51.26,25.06,73.7l4.09-2.05-15.8-51.76a81.18,81.18,0,0,0-7.22-22.2,28.27,28.27,0,0,1-3.51-11,29.54,29.54,0,0,1,.92-9.45c2.82-10,16.06-21.89,32-21.79,15.51.1,25.29,11.48,26.83,13.35l.69,94.53h4.9l.95-95.21a32.06,32.06,0,0,1,32.56-11.44,26.56,26.56,0,0,1,18.39,9.12A26,26,0,0,1,219.63,311.81Z"
            }
          }),
          _c("path", {
            staticClass: "balloon-7",
            attrs: { d: "M213.41,394.49,103.34,366.84" }
          })
        ]),
        _c(
          "g",
          { attrs: { id: "basket" } },
          [
            _vm._t("default", null, { position: _vm.basket }),
            _c("polygon", {
              staticClass: "balloon-1",
              attrs: {
                id: "wiicker",
                points:
                  "121.46 408.38 159.87 400.48 193.93 407.3 193.25 446.8 158.37 459.47 122.82 454.43 121.46 408.38"
              }
            }),
            _c("polyline", {
              staticClass: "balloon-2",
              attrs: {
                points:
                  "159.33 403.48 159.74 461.65 192.75 453.27 192.75 413.34 179.13 402.07"
              }
            }),
            _c("path", {
              staticClass: "balloon-3",
              attrs: {
                id: "top",
                d:
                  "M116.28,405c2-10,36.94-9.84,43.18-9.81,6.73,0,38.72.17,40.6,9.4.46,2.3-1,4.76-2.59,6.13-7.08,6.12-18.91-7.58-38-7.63-20.08-.05-32.38,15.05-40.18,8.72C117.4,410.26,115.77,407.49,116.28,405Z"
              }
            }),
            _c("polygon", {
              staticClass: "balloon-3",
              attrs: {
                points:
                  "158.16 440.4 194.47 448.16 194.47 453.61 159.46 463.69 121.87 457.56 121.87 450.75 158.16 440.4"
              }
            }),
            _c("polyline", {
              staticClass: "balloon-4",
              attrs: {
                points:
                  "134.13 454.97 159.74 460.01 159.15 453.54 159.06 447.07"
              }
            }),
            _c("path", {
              staticClass: "balloon-5",
              attrs: {
                d:
                  "M124.18,411.93c1.85.46,1,4.71,3.27,5.85,1.67.85,4.31-.39,5.59-2s-.38-3.41.54-6.13c.33-1,.91-2.88,2.45-3.4,1.94-.66,4,1.3,4.23,1.49,1.51,1.46,1,2.56,2.45,4.5.37.49,2.15,2.89,4.49,3,2.77.12,5-2.89,5.86-5.18.57-1.57,0-1.85.41-4.22.31-2,1-6.23,3.68-7.09a4.62,4.62,0,0,1,4.9,1.91c.62,1,.33,1.7.41,3.81s.2,5.35,1.91,7.5c.11.13,2.25,2.79,5,2.58.65,0,2.26-.55,6-7.9,2.6-5.1,3-7.24,4.09-7.22,1.42,0,3,3.78,3.13,7.09.06,2.23-.62,3-.14,5,.18.75.85,3.62,2.87,4.22s4.08-1.09,5.17-2.72c2.25-3.37.43-7.69,1.23-7.9.6-.16,1.92,2.19,2.45,4.49a8.86,8.86,0,0,1,.14,4.22c-.65,2.63-3.17,6.18-7.09,6.13-3.61,0-5.41-6-6.81-5.45-.14.06-.49.26-.68,2.32-.43,4.55,1,6.46-.14,8.58-.57,1.07-1.78,2.17-2.45,1.91-2-.8,1.79-14.29.41-14.71-.57-.18-1.11,2.17-3.68,3.95-.6.42-3.63,2.41-6.94,1.5s-5-4.42-5.32-5c-1.24-2.73-.54-4.55-2.31-9.54-.44-1.23-.86-2.19-1.36-2.18-.65,0-1.23,1.65-1.37,3a9.37,9.37,0,0,0,.55,3.54c.73,3.59-2.5,8.21-6.4,10.08a7,7,0,0,1-4.5.95c-4.49-.87-6.43-7.63-7.08-7.35-.4.17.44,2.65,1,5.17,1.41,7,.36,14.87-1.63,15.26-.75.15-1.5-.78-1.64-.95-1.55-1.92.28-4.52.27-10.08,0-.73,0-3.71-.68-3.82-.49-.07-.76,1.57-2,3a7.3,7.3,0,0,1-6.27,2.18c-4.55-.71-7.6-6.73-6.26-9.13A2.34,2.34,0,0,1,124.18,411.93Z"
              }
            }),
            _c("polyline", {
              staticClass: "balloon-4",
              attrs: {
                points:
                  "185.34 454.43 159.74 459.47 159.15 453.54 159.06 447.07"
              }
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/DropShadow.vue?vue&type=template&id=6ed7662d&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/DropShadow.vue?vue&type=template&id=6ed7662d& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "filter",
    [
      _c("feGaussianBlur", {
        attrs: { in: "SourceAlpha", stdDeviation: "10", result: "DROP" }
      }),
      _c("feOffset", {
        attrs: {
          in: "DROP",
          dx: _vm.offsetX,
          dy: _vm.offsetY,
          result: "DROPSHADOW"
        }
      }),
      _c("feColorMatrix", {
        attrs: {
          type: "matrix",
          in: "DROPSHADOW",
          result: "FINALSHADOW",
          values: _vm.colorMatrix
        }
      }),
      _c(
        "feMerge",
        [
          _c("feMergeNode", { attrs: { in: "FINALSHADOW" } }),
          _c("feMergeNode", { attrs: { in: "SourceGraphic" } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=template&id=a83a2f50&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/EnterTheMatrix.vue?vue&type=template&id=a83a2f50& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "filter",
    [
      _c("feTurbulence", {
        attrs: {
          baseFrequency: "0.02 0.03",
          result: "NOISE",
          numOctaves: 10,
          id: "turbulence"
        }
      }),
      _c("feDisplacementMap", {
        attrs: { in: "SourceGraphic", in2: "NOISE", scale: _vm.scale }
      }),
      _vm.keyframe > 0
        ? _c("feColorMatrix", {
            attrs: {
              type: "matrix",
              result: "GREEN",
              values: "0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/LimeFilter.vue?vue&type=template&id=f392342a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/LimeFilter.vue?vue&type=template&id=f392342a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "filter",
    [
      _c("feColorMatrix", {
        attrs: {
          type: "matrix",
          values: "1 0 0 0 0 0 2 0 0 0 0 0 0 .5 0 0 0 0 1 0"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/PeachFilter.vue?vue&type=template&id=4e7f55fb&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/PeachFilter.vue?vue&type=template&id=4e7f55fb& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "filter",
    [
      _c("feColorMatrix", {
        attrs: {
          type: "matrix",
          values: "1 0 0 0 0 0 .5 0 0 0 0 0 0 .5 0 0 0 0 1 0"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=template&id=71a06356&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Filters/UnderwaterFilter.vue?vue&type=template&id=71a06356& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "filter",
    { attrs: { width: "100%", height: "100%" } },
    [
      _c("feTurbulence", {
        attrs: {
          baseFrequency: "0.02 0.03",
          result: "NOISE",
          numOctaves: _vm.octaves,
          id: "turbulence"
        }
      }),
      _c("feDisplacementMap", {
        attrs: { in: "SourceGraphic", in2: "NOISE", scale: "20" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=template&id=15a5ee7f&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Coast.vue?vue&type=template&id=15a5ee7f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    { attrs: { id: "ocean" + _vm._uid } },
    [
      _c("rocks"),
      _c(
        "g",
        { attrs: { transform: "translate(900 -75)" } },
        [_c("lighthouse")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=template&id=b8edb09e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    { attrs: { id: "lighthouse-" + _vm._uid } },
    [
      _c(
        "linearGradient",
        {
          attrs: {
            id: "lighthouse-gradient",
            x1: "32.42",
            y1: "61.42",
            x2: "48.95",
            y2: "61.42",
            gradientUnits: "userSpaceOnUse"
          }
        },
        [
          _c("stop", { attrs: { offset: "0", "stop-color": "#d5ced4" } }),
          _c("stop", { attrs: { offset: "0.28", "stop-color": "#b3b7c2" } }),
          _c("stop", { attrs: { offset: "0.57", "stop-color": "#95a4b3" } }),
          _c("stop", { attrs: { offset: "0.82", "stop-color": "#8398a9" } }),
          _c("stop", { attrs: { offset: "1", "stop-color": "#7d94a6" } })
        ],
        1
      ),
      _c("linearGradient", {
        attrs: {
          id: "lighthouse-gradient-2",
          x1: "52.31",
          y1: "60.47",
          x2: "87.32",
          y2: "60.47",
          "xlink:href": "#lighthouse-gradient"
        }
      }),
      _c("linearGradient", {
        attrs: {
          id: "lighthouse-gradient-3",
          x1: "90.59",
          y1: "59.83",
          x2: "107.61",
          y2: "59.83",
          "xlink:href": "#lighthouse-gradient"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-1",
        attrs: {
          points:
            "31.51 105.19 29.33 42.35 25.06 40.08 62.52 16.78 60.62 6.98 67.02 0.98 72.92 6.38 72.06 16.38 112.24 37.9 108.43 40.35 111.02 104.1"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-2",
        attrs: {
          points:
            "71.11 17.19 63.48 17.19 47.95 40.08 52.85 104.37 90.99 104.37 89.91 38.72"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-3",
        attrs: {
          points:
            "70.83 17.87 92.08 38.72 24.93 39.94 29.02 41.58 87.45 40.89 90.45 104.1 110.88 104.1 108.43 40.48 112.65 38.03 71.65 16.38"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-4",
        attrs: { points: "32.42 78.85 48.95 78.85 47.49 43.98 32.42 44.71" }
      }),
      _c("polyline", {
        staticClass: "lighthouse-5",
        attrs: { points: "52.31 43.98 85.82 43.07 87.32 76.86 53.67 77.87" }
      }),
      _c("polyline", {
        staticClass: "lighthouse-6",
        attrs: { points: "90.59 43.07 106.25 43.07 107.61 76.58 92.22 76.58" }
      }),
      _c("polyline", {
        staticClass: "lighthouse-7",
        attrs: {
          points:
            "0 421.74 0 407.87 9.43 401.38 22.89 129.16 17.16 117.72 5.04 112 2.81 106.28 31.88 104.46 44.59 112.09 43.14 420.94"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-8",
        attrs: {
          points:
            "42.42 421.34 107.07 420.14 107.07 408.9 101.26 404.18 81.64 128.11 84.55 117.94 92.9 112.13 107.07 110.67 107.07 104.86 31.15 104.86 43.86 112.49"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-9",
        attrs: {
          points:
            "106.7 420.14 173.18 418.49 170.64 407.41 163.74 403.06 126.68 120.81 132.86 112.45 143.39 109.91 142.67 104.46 106.7 104.86 106.7 110.67 92.54 112.13 84.18 117.94 81.28 128.11 91.45 271.27 94.72 320.96 100.89 404.18 106.7 408.9"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-10",
        attrs: {
          points:
            "62.39 361.28 79.82 361.28 77.28 331.13 71.11 326.41 62.39 331.86"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-10",
        attrs: {
          points:
            "59.85 273.01 74.74 273.01 74.74 245.4 67.29 241.04 59.85 244.68"
        }
      }),
      _c("polyline", {
        staticClass: "lighthouse-11",
        attrs: {
          points:
            "58.03 190.19 71.11 190.19 71.11 168.76 64.57 164.04 58.03 167.67"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=template&id=21c00997&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=template&id=21c00997&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    { attrs: { id: "rocks" + _vm._uid } },
    [
      _c(
        "linearGradient",
        {
          attrs: {
            id: "rocks-gradient",
            x1: "179.85",
            y1: "464.44",
            x2: "1009.42",
            y2: "464.44",
            gradientUnits: "userSpaceOnUse"
          }
        },
        [
          _c("stop", { attrs: { offset: "0", "stop-color": "#948d9d" } }),
          _c("stop", { attrs: { offset: "0.2", "stop-color": "#8e8797" } }),
          _c("stop", { attrs: { offset: "0.49", "stop-color": "#7e7784" } }),
          _c("stop", { attrs: { offset: "0.82", "stop-color": "#645d67" } }),
          _c("stop", { attrs: { offset: "1", "stop-color": "#544c54" } })
        ],
        1
      ),
      _c(
        "linearGradient",
        {
          attrs: {
            id: "rocks-gradient-2",
            x1: "506",
            y1: "434.61",
            x2: "1366",
            y2: "434.61",
            gradientUnits: "userSpaceOnUse"
          }
        },
        [
          _c("stop", { attrs: { offset: "0", "stop-color": "#958c9d" } }),
          _c("stop", { attrs: { offset: "0.41", "stop-color": "#938a9b" } }),
          _c("stop", { attrs: { offset: "0.59", "stop-color": "#8d8494" } }),
          _c("stop", { attrs: { offset: "0.73", "stop-color": "#817987" } }),
          _c("stop", { attrs: { offset: "0.84", "stop-color": "#716975" } }),
          _c("stop", { attrs: { offset: "0.94", "stop-color": "#5c555e" } }),
          _c("stop", { attrs: { offset: "1", "stop-color": "#4c454c" } })
        ],
        1
      ),
      _c(
        "linearGradient",
        {
          attrs: {
            id: "rocks-gradient-3",
            x1: "271.41",
            y1: "465.26",
            x2: "1074.28",
            y2: "465.26",
            gradientUnits: "userSpaceOnUse"
          }
        },
        [
          _c("stop", { attrs: { offset: "0", "stop-color": "#938c9c" } }),
          _c("stop", { attrs: { offset: "0.37", "stop-color": "#918a9a" } }),
          _c("stop", { attrs: { offset: "0.57", "stop-color": "#8a8392" } }),
          _c("stop", { attrs: { offset: "0.73", "stop-color": "#7e7784" } }),
          _c("stop", { attrs: { offset: "0.86", "stop-color": "#6d6671" } }),
          _c("stop", { attrs: { offset: "0.98", "stop-color": "#585058" } }),
          _c("stop", { attrs: { offset: "1", "stop-color": "#544c54" } })
        ],
        1
      ),
      _c(
        "linearGradient",
        {
          attrs: {
            id: "rocks-gradient-4",
            x1: "682.54",
            y1: "465.75",
            x2: "1366",
            y2: "465.75",
            gradientUnits: "userSpaceOnUse"
          }
        },
        [
          _c("stop", { attrs: { offset: "0", "stop-color": "#958c9d" } }),
          _c("stop", { attrs: { offset: "0.4", "stop-color": "#938a9b" } }),
          _c("stop", { attrs: { offset: "0.58", "stop-color": "#8c8493" } }),
          _c("stop", { attrs: { offset: "0.72", "stop-color": "#817887" } }),
          _c("stop", { attrs: { offset: "0.84", "stop-color": "#706874" } }),
          _c("stop", { attrs: { offset: "0.94", "stop-color": "#5b545d" } }),
          _c("stop", { attrs: { offset: "1", "stop-color": "#4c454c" } })
        ],
        1
      ),
      _c(
        "linearGradient",
        {
          attrs: {
            id: "rocks-gradient-5",
            x1: "670.26",
            y1: "505.12",
            x2: "699.62",
            y2: "759.6",
            gradientUnits: "userSpaceOnUse"
          }
        },
        [
          _c("stop", { attrs: { offset: "0", "stop-color": "#7d96ae" } }),
          _c("stop", { attrs: { offset: "0.22", "stop-color": "#668096" } }),
          _c("stop", { attrs: { offset: "0.53", "stop-color": "#496678" } }),
          _c("stop", { attrs: { offset: "0.8", "stop-color": "#385666" } }),
          _c("stop", { attrs: { offset: "1", "stop-color": "#325060" } })
        ],
        1
      ),
      _c("path", {
        staticClass: "rocks-1",
        attrs: {
          d:
            "M807.59,359.42h73.56s60.48,24.64,69.47,24.58,106.25,111.91,106.25,111.91l4.09,16.35-526.35,18.8-219,38.41L231.39,558,300,500,313.93,460l134.86-22.07,33.51-2.45,27-36L553.41,384l110.33-14.77"
        }
      }),
      _c("polyline", {
        staticClass: "rocks-2",
        attrs: {
          points:
            "1366 348.8 1096.1 348.8 1074.04 340.62 852.54 344.71 823.94 359.42 792.06 374.13 747.11 413.36 651.49 443.6 608.17 494.28 506 528.6 1366 518.53"
        }
      }),
      _c("polyline", {
        staticClass: "rocks-3",
        attrs: {
          points:
            "971 414.66 908.12 406.01 850.91 399.47 776.53 407.06 731.58 414.66 604.9 451.78 525.62 491.82 321.29 531.06 1124.16 524.52 1124.16 426.44 971 414.66"
        }
      }),
      _c("polyline", {
        staticClass: "rocks-4",
        attrs: {
          points:
            "1366 400.44 1013.55 403.56 957.16 418.27 891.77 450.96 814.13 486.1 682.54 531.06 1366 518.53"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=template&id=152bce54&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Barn.vue?vue&type=template&id=152bce54& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { "show-viewbox": true },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c(
                  "g",
                  _vm._l(_vm.filteredLayers, function(layer, i) {
                    return _c("layer", { key: i, attrs: { layer: layer } })
                  }),
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=template&id=4c9d1540&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Cow.vue?vue&type=template&id=4c9d1540& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { width: "200", height: "200", "show-viewbox": true },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c(
                  "g",
                  _vm._l(_vm.filteredLayers, function(layer, i) {
                    return _c("layer", {
                      key: i,
                      attrs: { position: layer, layer: layer }
                    })
                  }),
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=template&id=d63e965e&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Farm.vue?vue&type=template&id=d63e965e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { id: "farm__" + _vm._uid, "show-viewbox": false },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c("clock", {
                  attrs: { fps: 60 },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(clock) {
                          return [
                            _vm.layers
                              ? _c(
                                  "g",
                                  [
                                    _c("rect", {
                                      attrs: {
                                        fill: "#E3DAA6",
                                        y: "-900",
                                        width: "1384",
                                        height: "905"
                                      }
                                    }),
                                    _c(
                                      "foreignObject",
                                      {
                                        attrs: {
                                          x: "0",
                                          y: "0",
                                          width: "100%",
                                          height: "900"
                                        }
                                      },
                                      [
                                        _c("html", [
                                          _c(
                                            "body",
                                            {
                                              style: [
                                                {
                                                  "background-color":
                                                    _vm.defaultColor
                                                },
                                                { height: "900px" }
                                              ]
                                            },
                                            [_vm._t("default")],
                                            2
                                          )
                                        ])
                                      ]
                                    ),
                                    _c("layer", {
                                      attrs: {
                                        id: "bbbb",
                                        position: _vm.layers["background"],
                                        layer: _vm.layers["background"]
                                      }
                                    }),
                                    _c("layer", {
                                      attrs: {
                                        position: _vm.layers["barn"],
                                        layer: _vm.layers["barn"]
                                      }
                                    }),
                                    _c("cow", {
                                      attrs: {
                                        keyframe: clock.keyframe,
                                        repeat: true,
                                        align: "topleft",
                                        fit: true,
                                        x: 100,
                                        y: 650,
                                        width: "300",
                                        height: "300"
                                      }
                                    }),
                                    _c("cow", {
                                      attrs: {
                                        keyframe: clock.keyframe,
                                        repeat: true,
                                        align: "topleft",
                                        fit: true,
                                        x: 600,
                                        y: 650,
                                        width: "300",
                                        height: "300"
                                      }
                                    }),
                                    _c("farmer", {
                                      attrs: {
                                        keyframe: clock.keyframe,
                                        repeat: true,
                                        x: -200 + (clock.keyframe % 6000) / 4,
                                        y: 800
                                      }
                                    }),
                                    _c("cow", {
                                      attrs: {
                                        keyframe: clock.keyframe,
                                        repeat: true,
                                        align: "topleft",
                                        fit: true,
                                        x: 350,
                                        y: 650,
                                        width: "300",
                                        height: "300"
                                      }
                                    }),
                                    _c("cow", {
                                      attrs: {
                                        keyframe: clock.keyframe,
                                        repeat: true,
                                        align: "topleft",
                                        fit: true,
                                        x: 850,
                                        y: 650,
                                        width: "300",
                                        height: "300"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ]
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=template&id=3d08f8be&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Farm/Farmer.vue?vue&type=template&id=3d08f8be& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { "show-viewbox": true },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _vm.layers
                  ? _c(
                      "g",
                      [
                        _c("layer", {
                          attrs: {
                            position: _vm.layers["head3"],
                            layer: _vm.layers["head3"]
                          }
                        }),
                        _c("layer", {
                          attrs: {
                            position: _vm.layers["body2"],
                            layer: _vm.layers["body2"]
                          }
                        }),
                        _c(
                          "layer",
                          {
                            attrs: {
                              position: _vm.layers["rightshoulder"],
                              layer: _vm.layers["rightshoulder"]
                            }
                          },
                          [
                            _c("layer", {
                              attrs: {
                                position: _vm.layers["rightarm"],
                                layer: _vm.layers["rightarm"]
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "layer",
                          {
                            attrs: {
                              position: _vm.layers["leftshoulder"],
                              layer: _vm.layers["leftshoulder"]
                            }
                          },
                          [
                            _c("layer", {
                              attrs: {
                                position: _vm.layers["leftarm"],
                                layer: _vm.layers["leftarm"]
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "layer",
                          {
                            attrs: {
                              position: _vm.layers["leftleg"],
                              layer: _vm.layers["leftleg"]
                            }
                          },
                          [
                            _c("layer", {
                              attrs: {
                                position: _vm.layers["leftcalf"],
                                layer: _vm.layers["leftcalf"]
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "layer",
                          {
                            attrs: {
                              position: _vm.layers["rightleg"],
                              layer: _vm.layers["rightleg"]
                            }
                          },
                          [
                            _c("layer", {
                              attrs: {
                                position: _vm.layers["rightcalf"],
                                layer: _vm.layers["rightcalf"]
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=template&id=67bed6a6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Ocean/OceanScene.vue?vue&type=template&id=67bed6a6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        attrs: {
          "show-viewbox": false,
          id: "dogsocean-scene" + _vm._uid,
          overflow: "visible"
        }
      },
      "vector",
      _vm.$props,
      false
    ),
    [
      _c("clock", {
        attrs: { fps: 15, keyframe: _vm.keyframe, start: 0, end: 3275 },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(clock) {
              return [
                _c(
                  "g",
                  [
                    _c("delay", {
                      attrs: { keyframe: _vm.keyframe, start: 0 },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(reset) {
                              return [
                                _c(
                                  "sky",
                                  { attrs: { keyframe: reset.keyframe } },
                                  [
                                    _c(
                                      "g",
                                      [
                                        _c("delay", {
                                          attrs: {
                                            keyframe: _vm.keyframe,
                                            start: 1100
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(reset) {
                                                  return [
                                                    _c("coast", {
                                                      attrs: {
                                                        keyframe:
                                                          reset.keyframe,
                                                        transform:
                                                          "translate(0 1105)"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._t("default")
                                  ],
                                  2
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    }),
                    _c("delay", {
                      attrs: { keyframe: _vm.keyframe, start: 1100 },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(octopus) {
                              return [
                                _c(
                                  "g",
                                  [
                                    _c(
                                      "underwater",
                                      {
                                        attrs: {
                                          "show-viewbox": false,
                                          y: 1595,
                                          color: "#42A7B0",
                                          align: "topleft",
                                          position: _vm.underwaterPosition,
                                          "octopus-keyframe": octopus.keyframe,
                                          keyframe: clock.keyframe
                                        }
                                      },
                                      [_vm._t("default")],
                                      2
                                    ),
                                    _c("rect", {
                                      attrs: {
                                        x: "0",
                                        y: "3250",
                                        width: "1384",
                                        height: "550",
                                        fill: "#015191"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    }),
                    _c("do-a-barrel-roll", {
                      attrs: { keyframe: _vm.keyframe },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(barrel) {
                              return [
                                _c(
                                  "balloon",
                                  _vm._b(
                                    {
                                      attrs: {
                                        x: -225,
                                        y: 500,
                                        sx: 0.5,
                                        sy: 0.5
                                      }
                                    },
                                    "balloon",
                                    barrel,
                                    false
                                  ),
                                  [
                                    _vm.keyframe < 2267
                                      ? _c("pig", {
                                          attrs: {
                                            width: "90",
                                            height: "80",
                                            align: "topleft",
                                            fit: false,
                                            x: 75,
                                            y: 450,
                                            position: _vm.pigPos
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=template&id=f5005794&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Partials/PointyBackground.vue?vue&type=template&id=f5005794& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { height: "1600" } },
    [
      _c("polygon", {
        staticClass: "fill-current",
        attrs: {
          points:
            "1367.28 2500 1.43 2500 1.43 331.86 1367.28 191.8 1367.28 2500"
        }
      }),
      _c("path", {
        staticClass: "fill-current",
        attrs: {
          d:
            "M0,278.42,1.05,493l1366.23-245.9L1367,72.46,1195.64,0,864.1,133.89,682,63.41S344.08,190,341.46,189.82s-161.61-61.33-161.61-61.33Z"
        }
      }),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=template&id=5e27742e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=template&id=5e27742e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vector", _vm._b({}, "vector", _vm.$props, false), [
    _c("g", { attrs: { opacity: "0.5" } }, [
      _c("path", {
        staticClass: "clouds-1",
        attrs: {
          d:
            "M-.46,274.18C7.66,242,33.69,263.7,52.39,251.3c5.4-4.27,2.3-7.44,9.2-14.42,8.11-8.22,18.71-10.9,23.74-11.77,12.77-2.21,16.39,2.62,21.55-1.06,7.14-5.09,1.11-16,8.17-28.33,11.89-18.78,41.66-34.88,72.47-22.89,9.49,4.62,12.74,10.89,18,9.27,6.64-2.06,4.14-12.93,12.54-23.43,18.58-19.21,44.53-17.24,66.47-13.08,5-1.16,55.47,19.17,65.39,9.81,1.91-53.79,89.48-107,147.66-81.73,7.06,2.9,12.76,6.54,19.61,4.35C544,59.31,517.51,18,594,.11V272"
        }
      }),
      _c("path", {
        staticClass: "clouds-1",
        attrs: {
          d:
            "M1188.46,274.18c-8.12-32.18-34.15-10.48-52.85-22.88-5.4-4.27-2.3-7.44-9.2-14.42-8.11-8.22-18.71-10.9-23.74-11.77-12.77-2.21-16.39,2.62-21.55-1.06-7.14-5.09-1.11-16-8.17-28.33-11.89-18.78-41.66-34.88-72.47-22.89-9.49,4.62-12.74,10.89-18,9.27-6.64-2.06-4.14-12.93-12.54-23.43-18.58-19.21-44.53-17.24-66.47-13.08-5-1.16-55.47,19.17-65.39,9.81-1.91-53.79-89.48-107-147.66-81.73-7.06,2.9-12.76,6.54-19.61,4.35C644,59.31,670.49,18,594,.11V272"
        }
      }),
      _c("path", {
        staticClass: "clouds-1",
        attrs: {
          d:
            "M-.08,440.17c0-9.89,11.5-19.17,19.31-19.07,11.16-.59,15.3,3.81,19.56-7.08,4.57-7.34,13.89-12.93,22.52-13.44,7.5-.44,10.21,3.21,14.53.73s2.75-6.48,7.26-10.54c6.22-5.59,15.91-4.13,16.71-4,8.75,1.44,10.11,7.41,16.71,6.9,4.47-.35,4.87-3.17,12.35-7.27a46.41,46.41,0,0,1,18.89-5.81c4.09-.3,13-.94,21.23,4,5.5,3.28,6.56,6.57,10.74,6.57,3.86,0,4.09-2.79,11.53-5a63.91,63.91,0,0,1,9.54-1.9c9.74.29,11.76-5.17,15.62-9.8,6.23-4.79,15.11-11.61,26.42-15.11,16.92-5.25,21.81,2.35,37.15-1.6,14.13-3.65,13.17-10.92,27.6-18.53,28.06-14.8,62.77-.12,83.9-4.52A65.45,65.45,0,0,1,403.85,333c8.66-.3,9.46,1.48,13.44.36,6.33-1.78,10.47-6.81,15.62-13.44,5.62-7.23,4.25-8.32,8-11.26,0,0,3.74-2.52,22.36-2.51q.25,62.82.52,125.65Z"
        }
      }),
      _c("path", {
        staticClass: "clouds-1",
        attrs: {
          d:
            "M927.79,440.17c0-9.89-11.51-19.17-19.32-19.07-11.15-.59-15.29,3.81-19.55-7.08-4.57-7.34-13.89-12.93-22.52-13.44-7.51-.44-10.22,3.21-14.53.73s-2.76-6.48-7.27-10.54c-6.22-5.59-15.91-4.13-16.71-4-8.75,1.44-10.11,7.41-16.71,6.9-4.47-.35-4.87-3.17-12.35-7.27a46.41,46.41,0,0,0-18.89-5.81c-4.08-.3-13-.94-21.22,4-5.51,3.28-6.57,6.57-10.74,6.57-3.87,0-4.09-2.79-11.54-5a64.07,64.07,0,0,0-9.53-1.9c-9.75.29-11.76-5.17-15.62-9.8-6.23-4.79-15.12-11.61-26.42-15.11-16.93-5.25-21.81,2.35-37.15-1.6-14.13-3.65-13.18-10.92-27.61-18.53-28.06-14.8-62.76-.12-83.9-4.52A65.18,65.18,0,0,0,523.85,333c-8.66-.3-9.45,1.48-13.44.36-6.33-1.78-10.46-6.81-15.62-13.44-5.62-7.23-4.24-8.32-8-11.26,0,0-3.74-2.52-22.37-2.51h0l-.51,125.65Z"
        }
      }),
      _c("path", {
        staticClass: "clouds-1",
        attrs: {
          d:
            "M163.79,43.9C162,40,158.91,34.81,153.44,32.73c-5.14-1.95-6.68.73-11.17-1.36-6.06-2.82-5.93-8.79-13.89-12.53-.38-.18-.74-.34-1.09-.47a23.89,23.89,0,0,0-2.73-.89c-11.38-3-16.62-2.46-16.62-2.46-5.09.5-9.91,2.42-11,.69-.14-.23-.21-.46-.63-1.37a19.36,19.36,0,0,0-1.72-2.86c-3-4.26-6-8.55-10.73-10.26-5.74-2.06-13,0-17.6,3.18-2.63,1.85-3.69,3.63-6,3.54-3.26-.13-4-4.26-7.63-5.18C47.18,1.4,41.9,5,40.38,6c-9.19,6.27-6.84,14.65-15.26,18.53a64,64,0,0,0-8.44,3.81,36.26,36.26,0,0,0-6,4.09C5.94,36.72,4.39,42.94,3.87,47.17Z"
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=template&id=123005d5&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Sky/Sky.vue?vue&type=template&id=123005d5& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b({}, "vector", _vm.$props, false),
    [
      _c(
        "pointy-background",
        [
          _c("cloud", {
            attrs: { x: (_vm.keyframe / 100) * (_vm.keyframe % 1610), y: 400 }
          }),
          _c("cloud", {
            attrs: {
              x: -1000 + (_vm.keyframe >> 8) * (_vm.keyframe % 1610),
              y: 900
            }
          }),
          _vm._t("default"),
          _c("cloud", { attrs: { x: -450 + (_vm.keyframe % 1060), y: 150 } }),
          _c("cloud", { attrs: { x: -900 + (_vm.keyframe % 1440), y: 700 } })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=template&id=5f300840&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/Background.vue?vue&type=template&id=5f300840& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { "show-viewbox": false },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _vm.layers
                  ? [
                      _c("layer", {
                        attrs: { layer: _vm.layers["background"] }
                      })
                    ]
                  : _vm._e()
              ]
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=template&id=49866d94&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/BigFish.vue?vue&type=template&id=49866d94& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b({ style: { fill: _vm.color } }, "vector", _vm.$props, false)
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=template&id=51fb5b9d&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/Octopus.vue?vue&type=template&id=51fb5b9d& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b({ style: { fill: _vm.color } }, "vector", _vm.$props, false),
    _vm._l(_vm.filteredLayers, function(layer, i) {
      return _c("layer", { key: i, attrs: { layer: layer } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=template&id=a4e8811e&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/Underwater.vue?vue&type=template&id=a4e8811e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        attrs: { id: "underwater-" + _vm._uid },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function() {
                return [
                  _vm.layers
                    ? [
                        _c("rect", {
                          attrs: {
                            x: "0",
                            y: "0",
                            width: "1384",
                            height: "1500",
                            fill: _vm.defaultColor
                          }
                        }),
                        _c("layer", {
                          attrs: { layer: _vm.layers["background"] }
                        }),
                        _c(
                          "foreignObject",
                          {
                            attrs: {
                              x: "550",
                              y: "0",
                              width: "810",
                              height: "1450"
                            }
                          },
                          [
                            _c("html", [
                              _c(
                                "body",
                                {
                                  style: [
                                    { "background-color": "#0B5262" },
                                    { height: "1500px" }
                                  ]
                                },
                                [_vm._t("default")],
                                2
                              )
                            ])
                          ]
                        ),
                        _c("repeat", {
                          attrs: { repeat: 7000, keyframe: _vm.keyframe },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(visible) {
                                  return [
                                    _c("layer", {
                                      attrs: {
                                        layer: _vm.layers["yellowfish"],
                                        x: -700 + visible.keyframe / 4,
                                        my: 0.4,
                                        mx: 1,
                                        y: 100
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            3658538016
                          )
                        }),
                        _c("delay", {
                          attrs: { start: 300, keyframe: _vm.octopusKeyframe },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(visible) {
                                  return [
                                    _c("layer", {
                                      attrs: {
                                        layer: _vm.layers["octopus"],
                                        y: -1200 + visible.keyframe / 2,
                                        color: "blue",
                                        x: -300 + visible.keyframe / 2
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            2890288702
                          )
                        }),
                        _c("repeat", {
                          attrs: { repeat: 7000, keyframe: _vm.keyframe },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(visible) {
                                  return [
                                    _c("layer", {
                                      attrs: {
                                        layer: _vm.layers["bigfish"],
                                        x: 700 - visible.keyframe / 4,
                                        my: 0.5,
                                        y: 125
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            2947004375
                          )
                        }),
                        _c("repeat", {
                          attrs: { repeat: 8000, keyframe: _vm.keyframe },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(visible) {
                                  return [
                                    _c("layer", {
                                      attrs: {
                                        layer: _vm.layers["yellowfish"],
                                        x: -900 + visible.keyframe / 4,
                                        my: 0.2,
                                        mx: 1.8,
                                        y: 0
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            3159388607
                          )
                        }),
                        _c("repeat", {
                          attrs: { repeat: 8000, keyframe: _vm.keyframe },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(visible) {
                                  return [
                                    _c("layer", {
                                      attrs: {
                                        layer: _vm.layers["bigfish"],
                                        x: 1900 - visible.keyframe,
                                        y: 400,
                                        my: 0,
                                        mx: 1.5
                                      }
                                    })
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            2323911938
                          )
                        }),
                        _c("layer", {
                          attrs: { layer: _vm.layers["foreground"] }
                        })
                      ]
                    : _vm._e()
                ]
              },
              proxy: true
            }
          ],
          null,
          true
        )
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=template&id=220c0c9e&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Underwater/YellowFish.vue?vue&type=template&id=220c0c9e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.color },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return _vm._l(_vm.filteredLayers, function(layer, i) {
                return _c("layer", { key: i, attrs: { layer: layer } })
              })
            },
            proxy: true
          }
        ])
      },
      "vector",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=template&id=4fbcbc96&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Dom/EntityDiv.vue?vue&type=template&id=4fbcbc96& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.cssTransform }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=template&id=0a910730&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/Loaders/AssetLoader.vue?vue&type=template&id=0a910730& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    [
      _c("defs", [
        _vm.assetData
          ? _c("symbol", {
              attrs: { id: _vm.owner },
              domProps: { innerHTML: _vm._s(_vm.assetString) }
            })
          : _vm._e()
      ]),
      _vm._t("default", null, {
        loaded: _vm.loaded,
        asset: _vm.loadedAsset,
        href: "#" + _vm.loadedAssetId
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Layer.vue?vue&type=template&id=dc9e940c&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/SVG/Layer.vue?vue&type=template&id=dc9e940c& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    { attrs: { transform: _vm.transform, opacity: _vm.opacity } },
    [
      _c("use", { attrs: { href: "#" + _vm.layer.layer.id } }),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Scene.vue?vue&type=template&id=5bf9e3b5&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/SVG/Scene.vue?vue&type=template&id=5bf9e3b5& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      { attrs: { height: "auto", width: "auto" } },
      "vector",
      _vm.$props,
      false
    ),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/vue/Components/SVG/Vector.vue?vue&type=template&id=aa0e642c&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/vue/Components/SVG/Vector.vue?vue&type=template&id=aa0e642c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        id: "svg" + _vm.assetID,
        width: _vm.w,
        height: _vm.h,
        viewBox: _vm.strViewbox,
        preserveAspectRatio: _vm.preserveAspectRatio,
        overflow: _vm.overflow,
        filter: _vm.filterID
      }
    },
    [
      _c("asset-loader", {
        attrs: { src: _vm.src, owner: _vm.assetID },
        on: { loaded: _vm.assetLoaded }
      }),
      _vm.filter
        ? _c(
            "defs",
            [
              _vm.filter
                ? _c(_vm.filter, {
                    tag: "component",
                    attrs: {
                      id: "filter" + _vm.assetID,
                      keyframe: _vm.keyframe
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _c(
        "g",
        { attrs: { id: "g" + _vm.assetID, transform: _vm.transform } },
        [_vm._t("default", null, { position: _vm.position, href: _vm.href })],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { fill: "#90CDF4" }, attrs: { id: "app" } },
    [_c("home-page")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/AnimatedBalloon.vue?vue&type=template&id=4291e614&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/AnimatedBalloon.vue?vue&type=template&id=4291e614& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("balloon", {
    attrs: { color: _vm.color, position: _vm.balloonPos }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedAnimation.vue?vue&type=template&id=b55902fa&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/ComplicatedAnimation.vue?vue&type=template&id=b55902fa& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("balloon", { attrs: { anim: "dog", position: _vm.balloonPos } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedToTween.vue?vue&type=template&id=03df776f&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/ComplicatedToTween.vue?vue&type=template&id=03df776f& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("balloon", { attrs: { color: "blue", position: _vm.balloonPos } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/CreateKeyframe.vue?vue&type=template&id=37c47a9c&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/CreateKeyframe.vue?vue&type=template&id=37c47a9c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("balloon", { attrs: { color: "orange", position: _vm.balloonPos } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultiAction.vue?vue&type=template&id=7ffb6057&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/MultiAction.vue?vue&type=template&id=7ffb6057& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("balloon", { attrs: { position: _vm.balloonPos } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultipleAnimations.vue?vue&type=template&id=61711772&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/MultipleAnimations.vue?vue&type=template&id=61711772& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: { width: "100", viewBox: "-160 177 917 1024", overflow: "visible" }
    },
    [
      _c("human", {
        attrs: {
          anim: "flap",
          color: "red",
          keyframe: _vm.keyframe,
          repeat: true
        }
      }),
      _c("human", {
        attrs: {
          anim: "dance",
          color: "aqua",
          keyframe: _vm.keyframe,
          repeat: true,
          x: 1500
        }
      }),
      _c("human", {
        attrs: {
          anim: "punch",
          color: "blue",
          keyframe: _vm.keyframe,
          repeat: true,
          x: 3000
        }
      }),
      _c("human", {
        attrs: {
          anim: "kick",
          color: "plum",
          keyframe: _vm.keyframe,
          repeat: true,
          x: 4500
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/PropAnimation.vue?vue&type=template&id=1b7f1c2e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/PropAnimation.vue?vue&type=template&id=1b7f1c2e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("balloon", {
    attrs: {
      keyframe: _vm.keyframe,
      repeat: true,
      anim: _vm.animations.default
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/RenderlessExample.vue?vue&type=template&id=65f1c3c3&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/RenderlessExample.vue?vue&type=template&id=65f1c3c3& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b({}, "vector", _vm.$props, false),
    [
      _c(
        "human",
        _vm._b(
          {
            attrs: {
              keyframe: _vm.keyframe,
              sx: 0.1,
              sy: 0.1,
              x: -350,
              y: -290
            }
          },
          "human",
          _vm.barrelroll,
          false
        )
      ),
      _c("balloon", _vm._b({}, "balloon", _vm.barrelroll, false)),
      _c("do-a-barrel-roll", {
        attrs: { keyframe: _vm.keyframe },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(barrelroll) {
              return [
                _c(
                  "balloon",
                  _vm._b(
                    { attrs: { color: "green" } },
                    "balloon",
                    barrelroll,
                    false
                  )
                )
              ]
            }
          }
        ])
      }),
      _c("do-a-barrel-roll", {
        attrs: { keyframe: _vm.keyframe },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(barrelroll) {
              return [
                _c(
                  "human",
                  _vm._b(
                    {
                      attrs: {
                        keyframe: _vm.keyframe,
                        sx: 0.1,
                        sy: 0.1,
                        x: -100,
                        y: 170,
                        color: "orange"
                      }
                    },
                    "human",
                    barrelroll,
                    false
                  )
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/SeparateAnimationFile.vue?vue&type=template&id=0a7f0576&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Animation/SeparateAnimationFile.vue?vue&type=template&id=0a7f0576& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.curFrame,
            expression: "curFrame",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "500" },
        domProps: { value: _vm.curFrame },
        on: {
          __r: function($event) {
            _vm.curFrame = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("Keyframe = " + _vm._s(_vm.curFrame)),
      _c("br"),
      _c("balloon", { attrs: { position: _vm.balloonPos } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/Import.vue?vue&type=template&id=0004963a&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/ArtAsset/Import.vue?vue&type=template&id=0004963a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { "show-viewbox": true, height: "100", width: "100" }
      },
      "vector",
      _vm.$props,
      false
    ),
    _vm._l(_vm.filteredLayers, function(layer, i) {
      return _c("layer", { key: i, attrs: { layer: layer } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportLayer.vue?vue&type=template&id=70e4a8e7&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/ArtAsset/ImportLayer.vue?vue&type=template&id=70e4a8e7& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { "show-viewbox": true, height: "100", width: "100" }
      },
      "vector",
      _vm.$props,
      false
    ),
    [
      _vm.layers
        ? _c(
            "g",
            [
              _c("layer", {
                attrs: {
                  position: _vm.layers["leftleg"],
                  layer: _vm.layers["leftleg"]
                }
              })
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=template&id=a546c11c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=template&id=a546c11c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vector",
    _vm._b(
      {
        style: { fill: _vm.defaultColor },
        attrs: { "show-viewbox": true, height: "100", width: "100" }
      },
      "vector",
      _vm.$props,
      false
    ),
    [
      _vm.layers
        ? _c(
            "g",
            [
              _c("layer", {
                attrs: {
                  position: _vm.layers["leftleg"],
                  layer: _vm.layers["leftleg"]
                }
              }),
              _c("layer", {
                attrs: {
                  position: _vm.layers["face"],
                  layer: _vm.layers["face"]
                }
              })
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Rotation.vue?vue&type=template&id=0fabc7f8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/Rotation.vue?vue&type=template&id=0fabc7f8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.angle,
          expression: "angle",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "range", min: "0", max: "360" },
      domProps: { value: _vm.angle },
      on: {
        __r: function($event) {
          _vm.angle = _vm._n($event.target.value)
        },
        blur: function($event) {
          return _vm.$forceUpdate()
        }
      }
    }),
    _vm._v("Angle = " + _vm._s(_vm.angle) + " "),
    _c(
      "svg",
      { attrs: { width: "100%", height: "100%" } },
      [
        _c("balloon", { attrs: { a: _vm.angle % 360 } }),
        _c("balloon", {
          attrs: { color: "blue", a: (45 + _vm.angle) % 360, x: 125 }
        }),
        _c("balloon", {
          attrs: { color: "green", a: (90 + _vm.angle) % 360, x: 225 }
        }),
        _c("balloon", {
          attrs: { color: "orange", a: (200 + _vm.angle) % 360, x: 325 }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Scale.vue?vue&type=template&id=6cde14b4&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/Scale.vue?vue&type=template&id=6cde14b4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.sx,
            expression: "sx",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "4" },
        domProps: { value: _vm.sx },
        on: {
          __r: function($event) {
            _vm.sx = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("Scale X = " + _vm._s(_vm.sx)),
      _c("br"),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.sy,
            expression: "sy",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "4" },
        domProps: { value: _vm.sy },
        on: {
          __r: function($event) {
            _vm.sy = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("Scale Y = " + _vm._s(_vm.sy)),
      _c("br"),
      _c("balloon", { attrs: { sx: _vm.sx, sy: _vm.sy } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Translation.vue?vue&type=template&id=13da65ca&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/Translation.vue?vue&type=template&id=13da65ca& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.x,
            expression: "x",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "100" },
        domProps: { value: _vm.x },
        on: {
          __r: function($event) {
            _vm.x = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("X = " + _vm._s(_vm.x)),
      _c("br"),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.y,
            expression: "y",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "100" },
        domProps: { value: _vm.y },
        on: {
          __r: function($event) {
            _vm.y = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("Y = " + _vm._s(_vm.y)),
      _c("br"),
      _c("balloon", { attrs: { x: _vm.x, y: _vm.y } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/WidthHeight.vue?vue&type=template&id=9d416a12&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/BasicTransformations/WidthHeight.vue?vue&type=template&id=9d416a12& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { width: "500", height: "100" } },
    [
      _c("vector", { attrs: { width: 10, height: 10 } }, [
        _c("rect", { attrs: { width: "100", height: "50", fill: "red" } })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Demo.vue?vue&type=template&id=7d7fa700&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Demo.vue?vue&type=template&id=7d7fa700& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("KeyframeSlider", {
        attrs: { start: _vm.start, end: _vm.end },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var keyframe = ref.keyframe
              return [
                _vm.theDemo
                  ? _c(_vm.theDemo, {
                      tag: "component",
                      attrs: { keyframe: keyframe }
                    })
                  : _vm._e()
              ]
            }
          }
        ])
      }),
      _c("br"),
      _c("br")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/HomePage.vue?vue&type=template&id=16971aab&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/HomePage.vue?vue&type=template&id=16971aab& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "svg",
      { attrs: { viewBox: "0 0 1380 3800" } },
      [
        _c("scroll", {
          attrs: { speed: 1.5, responsive: true, "auto-play": "" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var keyframe = ref.keyframe
                return [
                  _c(
                    "g",
                    [
                      _c(
                        "farm",
                        {
                          attrs: {
                            color: "rgb(227,218,166)",
                            keyframe: keyframe,
                            y: 2500
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "flex justify-around content-around"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "content-around text-red-400 h-screen w-full w-screen",
                                  staticStyle: {
                                    "background-color": "rgb(226,221,191)"
                                  }
                                },
                                [
                                  _c("h1", { staticClass: "text-lg" }, [
                                    _vm._v("What Is Lorem Ipsum")
                                  ]),
                                  _c("p", [
                                    _vm._v(
                                      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "
                                    )
                                  ]),
                                  _c("br"),
                                  _c("h3", [_vm._v("INSERT YOUR HTML HERE")])
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _c(
                        "ocean-scene",
                        {
                          staticStyle: { fill: "#90CDF4" },
                          attrs: { "show-viewbox": false, keyframe: keyframe }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "flex justify-around content-around"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "content-around text-red-400 h-screen w-full w-screen",
                                  staticStyle: { "background-color": "#587076" }
                                },
                                [
                                  _c("h1", { staticClass: "text-lg" }, [
                                    _vm._v("What Is Lorem Ipsum")
                                  ]),
                                  _c("p", [
                                    _vm._v(
                                      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "
                                    )
                                  ]),
                                  _c("br"),
                                  _c("h3", [_vm._v("INSERT YOUR HTML HERE")])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/AssetComposition.vue?vue&type=template&id=35d6197c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/AssetComposition.vue?vue&type=template&id=35d6197c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.x,
            expression: "x",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "100" },
        domProps: { value: _vm.x },
        on: {
          __r: function($event) {
            _vm.x = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("X = " + _vm._s(_vm.x)),
      _c("br"),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.y,
            expression: "y",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "50" },
        domProps: { value: _vm.y },
        on: {
          __r: function($event) {
            _vm.y = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("Y = " + _vm._s(_vm.y)),
      _c("br"),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.angle,
            expression: "angle",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: "0", max: "360" },
        domProps: { value: _vm.angle },
        on: {
          __r: function($event) {
            _vm.angle = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v("Angle = " + _vm._s(_vm.angle)),
      _c("br"),
      _c(
        "vector",
        { attrs: { "show-viewport": true } },
        [
          _c("human", {
            attrs: {
              x: 100,
              y: 900,
              width: "100",
              height: "100",
              align: "topleft"
            }
          }),
          _c("balloon", {
            attrs: { x: 200, width: "300", height: "200", align: "topleft" }
          }),
          _c(
            "balloon",
            {
              attrs: {
                color: "blue",
                x: 500 + _vm.x,
                y: _vm.y,
                width: "300",
                height: "200",
                align: "topleft",
                a: _vm.angle
              }
            },
            [
              _c("human", {
                attrs: {
                  align: "topleft",
                  x: 1200,
                  y: 3500,
                  width: "100",
                  height: "100",
                  "align-strategy": "meet"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/BalloonSample.vue?vue&type=template&id=128f1c7e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/BalloonSample.vue?vue&type=template&id=128f1c7e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("balloon", { attrs: { color: "red" } }),
      _c("balloon", { attrs: { color: "blue" } }),
      _c("balloon", { attrs: { color: "green" } }),
      _c("balloon", { attrs: { color: "orange" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=template&id=77a701fe&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=template&id=77a701fe& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("rectangle", { attrs: { color: "red" } }),
      _c("rectangle", { attrs: { color: "blue" } }),
      _c("rectangle", { attrs: { color: "green" } }),
      _c("rectangle", { attrs: { color: "orange" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/Rectangle.vue?vue&type=template&id=7e87d512&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Introduction/Rectangle.vue?vue&type=template&id=7e87d512& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vector", _vm._b({}, "vector", _vm.$props, false), [
    _c("rect", { attrs: { width: "50", height: "50", fill: _vm.color } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeAnimation/Color.vue?vue&type=template&id=26b1f49d&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/KeyframeAnimation/Color.vue?vue&type=template&id=26b1f49d& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("balloon", { attrs: { color: _vm.defaultColor } })], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=template&id=3aa61a1c&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=template&id=3aa61a1c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { width: "auto", height: "500", viewBox: "0 0 1384 1000" } },
    [
      _c(
        "underwater",
        _vm._b(
          { attrs: { "show-viewbox": true, overflow: "hidden" } },
          "underwater",
          _vm.$props,
          false
        ),
        [
          _c(
            "g",
            [
              _c("keyframe-delay", {
                attrs: { keyframe: _vm.keyframe },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(delay) {
                      return [
                        _c(
                          "keyframe-visible",
                          _vm._b(
                            {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(visible) {
                                      return [
                                        _c("octopus", {
                                          attrs: {
                                            color: "blue",
                                            y: -300,
                                            x: visible.keyframe
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            "keyframe-visible",
                            delay,
                            false
                          )
                        )
                      ]
                    }
                  }
                ])
              }),
              _c("keyframe-delay", {
                attrs: { start: 1000, keyframe: _vm.keyframe },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(delay) {
                      return [
                        _c(
                          "keyframe-visible",
                          _vm._b(
                            {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(visible) {
                                      return [
                                        _c("octopus", {
                                          attrs: {
                                            color: "blue",
                                            y: -50,
                                            x: visible.keyframe
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            "keyframe-visible",
                            delay,
                            false
                          )
                        )
                      ]
                    }
                  }
                ])
              }),
              _c("keyframe-delay", {
                attrs: { start: 2000, keyframe: _vm.keyframe },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(delay) {
                      return [
                        _c(
                          "keyframe-visible",
                          _vm._b(
                            {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(visible) {
                                      return [
                                        _c("octopus", {
                                          attrs: {
                                            color: "blue",
                                            y: 200,
                                            x: visible.keyframe
                                          }
                                        })
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            "keyframe-visible",
                            delay,
                            false
                          )
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeSlider.vue?vue&type=template&id=b4882168&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/KeyframeSlider.vue?vue&type=template&id=b4882168& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.currentFrame,
            expression: "currentFrame",
            modifiers: { number: true }
          }
        ],
        attrs: { type: "range", min: _vm.start, max: _vm.end },
        domProps: { value: _vm.currentFrame },
        on: {
          __r: function($event) {
            _vm.currentFrame = _vm._n($event.target.value)
          },
          blur: function($event) {
            return _vm.$forceUpdate()
          }
        }
      }),
      _vm._v(" Current Frame = " + _vm._s(_vm.currentFrame) + " "),
      _c("br"),
      _vm._t("default", null, { keyframe: _vm.currentFrame })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingClockTimer.vue?vue&type=template&id=6fac74f7&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Timers/UsingClockTimer.vue?vue&type=template&id=6fac74f7& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("clock", {
    attrs: { fps: _vm.fps },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var keyframe = ref.keyframe
          return [
            _c("div", [
              _vm._v(" Current Keyframe: " + _vm._s(keyframe)),
              _c("br"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.fps,
                    expression: "fps",
                    modifiers: { number: true }
                  }
                ],
                attrs: { type: "range", min: "0", max: "60" },
                domProps: { value: _vm.fps },
                on: {
                  __r: function($event) {
                    _vm.fps = _vm._n($event.target.value)
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              }),
              _vm._v(" " + _vm._s(_vm.fps) + " FPS ")
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingScrollTimer.vue?vue&type=template&id=bc2123f0&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/Timers/UsingScrollTimer.vue?vue&type=template&id=bc2123f0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("scroll", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var keyframe = ref.keyframe
              return [_vm._v(" Current Keyframe: " + _vm._s(keyframe) + " ")]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/UsingFilters/FilterExample.vue?vue&type=template&id=1d73ba52&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/examples/UsingFilters/FilterExample.vue?vue&type=template&id=1d73ba52& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.curFrame,
          expression: "curFrame",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "range", min: "0", max: "2500" },
      domProps: { value: _vm.curFrame },
      on: {
        __r: function($event) {
          _vm.curFrame = _vm._n($event.target.value)
        },
        blur: function($event) {
          return _vm.$forceUpdate()
        }
      }
    }),
    _vm._v("Keyframe = " + _vm._s(_vm.curFrame)),
    _c("br"),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.index,
          expression: "index",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "radio", id: "matrix", value: "1" },
      domProps: { checked: _vm._q(_vm.index, _vm._n("1")) },
      on: {
        change: function($event) {
          _vm.index = _vm._n("1")
        }
      }
    }),
    _vm._v("Enter The Matrix"),
    _c("br"),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.index,
          expression: "index",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "radio", id: "lime", value: "2" },
      domProps: { checked: _vm._q(_vm.index, _vm._n("2")) },
      on: {
        change: function($event) {
          _vm.index = _vm._n("2")
        }
      }
    }),
    _vm._v("Lime Gram"),
    _c("br"),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.index,
          expression: "index",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "radio", id: "under", value: "3" },
      domProps: { checked: _vm._q(_vm.index, _vm._n("3")) },
      on: {
        change: function($event) {
          _vm.index = _vm._n("3")
        }
      }
    }),
    _vm._v("Underwater"),
    _c("br"),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.index,
          expression: "index",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "radio", id: "shadow", value: "4" },
      domProps: { checked: _vm._q(_vm.index, _vm._n("4")) },
      on: {
        change: function($event) {
          _vm.index = _vm._n("4")
        }
      }
    }),
    _vm._v("Drop Shadow"),
    _c("br"),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.index,
          expression: "index",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "radio", id: "peach", value: "5" },
      domProps: { checked: _vm._q(_vm.index, _vm._n("5")) },
      on: {
        change: function($event) {
          _vm.index = _vm._n("5")
        }
      }
    }),
    _vm._v("Peach Gram"),
    _c("br"),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.number",
          value: _vm.index,
          expression: "index",
          modifiers: { number: true }
        }
      ],
      attrs: { type: "radio", id: "nofilter", value: "0" },
      domProps: { checked: _vm._q(_vm.index, _vm._n("0")) },
      on: {
        change: function($event) {
          _vm.index = _vm._n("0")
        }
      }
    }),
    _vm._v("None"),
    _c("br"),
    _c(
      "svg",
      { attrs: { viewBox: "0 0 1380 2000" } },
      [
        _c("ocean-scene", {
          attrs: {
            width: 300,
            height: 500,
            "show-viewbox": true,
            align: "topleft",
            filter: _vm.useFilter,
            keyframe: _vm.curFrame
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/Balloon.vue?vue&type=style&index=0&id=4e54d50d&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Assets/TinyBalloon/TinyBalloon.vue?vue&type=style&index=0&id=6386cccd&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Lighthouse.vue?vue&type=style&index=0&id=b8edb09e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Coast/Rocks.vue?vue&type=style&index=0&id=21c00997&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../bytepath/Samples/Scenes/Sky/Cloud.vue?vue&type=style&index=0&id=5e27742e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "./src/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/AnimatedBalloon.vue":
/*!****************************************************!*\
  !*** ./src/examples/Animation/AnimatedBalloon.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimatedBalloon_vue_vue_type_template_id_4291e614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimatedBalloon.vue?vue&type=template&id=4291e614& */ "./src/examples/Animation/AnimatedBalloon.vue?vue&type=template&id=4291e614&");
/* harmony import */ var _AnimatedBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedBalloon.vue?vue&type=script&lang=js& */ "./src/examples/Animation/AnimatedBalloon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnimatedBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnimatedBalloon_vue_vue_type_template_id_4291e614___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnimatedBalloon_vue_vue_type_template_id_4291e614___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/AnimatedBalloon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/AnimatedBalloon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/examples/Animation/AnimatedBalloon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AnimatedBalloon.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/AnimatedBalloon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedBalloon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/AnimatedBalloon.vue?vue&type=template&id=4291e614&":
/*!***********************************************************************************!*\
  !*** ./src/examples/Animation/AnimatedBalloon.vue?vue&type=template&id=4291e614& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedBalloon_vue_vue_type_template_id_4291e614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AnimatedBalloon.vue?vue&type=template&id=4291e614& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/AnimatedBalloon.vue?vue&type=template&id=4291e614&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedBalloon_vue_vue_type_template_id_4291e614___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedBalloon_vue_vue_type_template_id_4291e614___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/ComplicatedAnimation.vue":
/*!*********************************************************!*\
  !*** ./src/examples/Animation/ComplicatedAnimation.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComplicatedAnimation_vue_vue_type_template_id_b55902fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComplicatedAnimation.vue?vue&type=template&id=b55902fa& */ "./src/examples/Animation/ComplicatedAnimation.vue?vue&type=template&id=b55902fa&");
/* harmony import */ var _ComplicatedAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComplicatedAnimation.vue?vue&type=script&lang=js& */ "./src/examples/Animation/ComplicatedAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComplicatedAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComplicatedAnimation_vue_vue_type_template_id_b55902fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComplicatedAnimation_vue_vue_type_template_id_b55902fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/ComplicatedAnimation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/ComplicatedAnimation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/examples/Animation/ComplicatedAnimation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComplicatedAnimation.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/ComplicatedAnimation.vue?vue&type=template&id=b55902fa&":
/*!****************************************************************************************!*\
  !*** ./src/examples/Animation/ComplicatedAnimation.vue?vue&type=template&id=b55902fa& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedAnimation_vue_vue_type_template_id_b55902fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComplicatedAnimation.vue?vue&type=template&id=b55902fa& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedAnimation.vue?vue&type=template&id=b55902fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedAnimation_vue_vue_type_template_id_b55902fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedAnimation_vue_vue_type_template_id_b55902fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/ComplicatedToTween.vue":
/*!*******************************************************!*\
  !*** ./src/examples/Animation/ComplicatedToTween.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComplicatedToTween_vue_vue_type_template_id_03df776f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComplicatedToTween.vue?vue&type=template&id=03df776f& */ "./src/examples/Animation/ComplicatedToTween.vue?vue&type=template&id=03df776f&");
/* harmony import */ var _ComplicatedToTween_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComplicatedToTween.vue?vue&type=script&lang=js& */ "./src/examples/Animation/ComplicatedToTween.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComplicatedToTween_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComplicatedToTween_vue_vue_type_template_id_03df776f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComplicatedToTween_vue_vue_type_template_id_03df776f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/ComplicatedToTween.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/ComplicatedToTween.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/examples/Animation/ComplicatedToTween.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedToTween_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComplicatedToTween.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedToTween.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedToTween_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/ComplicatedToTween.vue?vue&type=template&id=03df776f&":
/*!**************************************************************************************!*\
  !*** ./src/examples/Animation/ComplicatedToTween.vue?vue&type=template&id=03df776f& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedToTween_vue_vue_type_template_id_03df776f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComplicatedToTween.vue?vue&type=template&id=03df776f& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/ComplicatedToTween.vue?vue&type=template&id=03df776f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedToTween_vue_vue_type_template_id_03df776f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplicatedToTween_vue_vue_type_template_id_03df776f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/CreateKeyframe.vue":
/*!***************************************************!*\
  !*** ./src/examples/Animation/CreateKeyframe.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateKeyframe_vue_vue_type_template_id_37c47a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateKeyframe.vue?vue&type=template&id=37c47a9c& */ "./src/examples/Animation/CreateKeyframe.vue?vue&type=template&id=37c47a9c&");
/* harmony import */ var _CreateKeyframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateKeyframe.vue?vue&type=script&lang=js& */ "./src/examples/Animation/CreateKeyframe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateKeyframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateKeyframe_vue_vue_type_template_id_37c47a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateKeyframe_vue_vue_type_template_id_37c47a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/CreateKeyframe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/CreateKeyframe.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/examples/Animation/CreateKeyframe.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateKeyframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateKeyframe.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/CreateKeyframe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateKeyframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/CreateKeyframe.vue?vue&type=template&id=37c47a9c&":
/*!**********************************************************************************!*\
  !*** ./src/examples/Animation/CreateKeyframe.vue?vue&type=template&id=37c47a9c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateKeyframe_vue_vue_type_template_id_37c47a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateKeyframe.vue?vue&type=template&id=37c47a9c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/CreateKeyframe.vue?vue&type=template&id=37c47a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateKeyframe_vue_vue_type_template_id_37c47a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateKeyframe_vue_vue_type_template_id_37c47a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/MultiAction.vue":
/*!************************************************!*\
  !*** ./src/examples/Animation/MultiAction.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiAction_vue_vue_type_template_id_7ffb6057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiAction.vue?vue&type=template&id=7ffb6057& */ "./src/examples/Animation/MultiAction.vue?vue&type=template&id=7ffb6057&");
/* harmony import */ var _MultiAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiAction.vue?vue&type=script&lang=js& */ "./src/examples/Animation/MultiAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultiAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiAction_vue_vue_type_template_id_7ffb6057___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiAction_vue_vue_type_template_id_7ffb6057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/MultiAction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/MultiAction.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/examples/Animation/MultiAction.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MultiAction.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultiAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/MultiAction.vue?vue&type=template&id=7ffb6057&":
/*!*******************************************************************************!*\
  !*** ./src/examples/Animation/MultiAction.vue?vue&type=template&id=7ffb6057& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiAction_vue_vue_type_template_id_7ffb6057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MultiAction.vue?vue&type=template&id=7ffb6057& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultiAction.vue?vue&type=template&id=7ffb6057&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiAction_vue_vue_type_template_id_7ffb6057___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiAction_vue_vue_type_template_id_7ffb6057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/MultipleAnimations.vue":
/*!*******************************************************!*\
  !*** ./src/examples/Animation/MultipleAnimations.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleAnimations_vue_vue_type_template_id_61711772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleAnimations.vue?vue&type=template&id=61711772& */ "./src/examples/Animation/MultipleAnimations.vue?vue&type=template&id=61711772&");
/* harmony import */ var _MultipleAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleAnimations.vue?vue&type=script&lang=js& */ "./src/examples/Animation/MultipleAnimations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultipleAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleAnimations_vue_vue_type_template_id_61711772___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleAnimations_vue_vue_type_template_id_61711772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/MultipleAnimations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/MultipleAnimations.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/examples/Animation/MultipleAnimations.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleAnimations.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultipleAnimations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAnimations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/MultipleAnimations.vue?vue&type=template&id=61711772&":
/*!**************************************************************************************!*\
  !*** ./src/examples/Animation/MultipleAnimations.vue?vue&type=template&id=61711772& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAnimations_vue_vue_type_template_id_61711772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleAnimations.vue?vue&type=template&id=61711772& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/MultipleAnimations.vue?vue&type=template&id=61711772&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAnimations_vue_vue_type_template_id_61711772___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAnimations_vue_vue_type_template_id_61711772___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/MyAnimation.js":
/*!***********************************************!*\
  !*** ./src/examples/Animation/MyAnimation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytepath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytepath */ "../bytepath/vue-bytepath.js");
/**
 * MyAnimation.js
 * The animation from the previous example, now stored in its own file to keep things tidy
 */

var _k = bytepath__WEBPACK_IMPORTED_MODULE_0__["default"].CreateKeyframe;
/* harmony default export */ __webpack_exports__["default"] = ([_k(0, 100, function (_ref) {
  var context = _ref.context,
      keyframe = _ref.keyframe;
  context.balloonPos.x = keyframe * 3;
}), _k(100, 200, function (_ref2) {
  var context = _ref2.context,
      keyframe = _ref2.keyframe;
  context.balloonPos.angle = 100 - keyframe;
}),
/**
 * You can also just write manual objects here, if that's what you prefer.
 */
{
  start: 200,
  end: 300,
  handler: function handler(_ref3) {
    var context = _ref3.context,
        keyframe = _ref3.keyframe;
    context.balloonPos.y = 200 - keyframe;
  }
}]);

/***/ }),

/***/ "./src/examples/Animation/PropAnimation.vue":
/*!**************************************************!*\
  !*** ./src/examples/Animation/PropAnimation.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropAnimation_vue_vue_type_template_id_1b7f1c2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropAnimation.vue?vue&type=template&id=1b7f1c2e& */ "./src/examples/Animation/PropAnimation.vue?vue&type=template&id=1b7f1c2e&");
/* harmony import */ var _PropAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropAnimation.vue?vue&type=script&lang=js& */ "./src/examples/Animation/PropAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PropAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropAnimation_vue_vue_type_template_id_1b7f1c2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropAnimation_vue_vue_type_template_id_1b7f1c2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/PropAnimation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/PropAnimation.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/examples/Animation/PropAnimation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PropAnimation.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/PropAnimation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropAnimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/PropAnimation.vue?vue&type=template&id=1b7f1c2e&":
/*!*********************************************************************************!*\
  !*** ./src/examples/Animation/PropAnimation.vue?vue&type=template&id=1b7f1c2e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropAnimation_vue_vue_type_template_id_1b7f1c2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PropAnimation.vue?vue&type=template&id=1b7f1c2e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/PropAnimation.vue?vue&type=template&id=1b7f1c2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropAnimation_vue_vue_type_template_id_1b7f1c2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropAnimation_vue_vue_type_template_id_1b7f1c2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/RenderlessExample.vue":
/*!******************************************************!*\
  !*** ./src/examples/Animation/RenderlessExample.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderlessExample_vue_vue_type_template_id_65f1c3c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderlessExample.vue?vue&type=template&id=65f1c3c3& */ "./src/examples/Animation/RenderlessExample.vue?vue&type=template&id=65f1c3c3&");
/* harmony import */ var _RenderlessExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderlessExample.vue?vue&type=script&lang=js& */ "./src/examples/Animation/RenderlessExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RenderlessExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RenderlessExample_vue_vue_type_template_id_65f1c3c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RenderlessExample_vue_vue_type_template_id_65f1c3c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/RenderlessExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/RenderlessExample.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/examples/Animation/RenderlessExample.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderlessExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RenderlessExample.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/RenderlessExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderlessExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/RenderlessExample.vue?vue&type=template&id=65f1c3c3&":
/*!*************************************************************************************!*\
  !*** ./src/examples/Animation/RenderlessExample.vue?vue&type=template&id=65f1c3c3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderlessExample_vue_vue_type_template_id_65f1c3c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RenderlessExample.vue?vue&type=template&id=65f1c3c3& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/RenderlessExample.vue?vue&type=template&id=65f1c3c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderlessExample_vue_vue_type_template_id_65f1c3c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderlessExample_vue_vue_type_template_id_65f1c3c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Animation/SeparateAnimationFile.vue":
/*!**********************************************************!*\
  !*** ./src/examples/Animation/SeparateAnimationFile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SeparateAnimationFile_vue_vue_type_template_id_0a7f0576___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeparateAnimationFile.vue?vue&type=template&id=0a7f0576& */ "./src/examples/Animation/SeparateAnimationFile.vue?vue&type=template&id=0a7f0576&");
/* harmony import */ var _SeparateAnimationFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeparateAnimationFile.vue?vue&type=script&lang=js& */ "./src/examples/Animation/SeparateAnimationFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SeparateAnimationFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SeparateAnimationFile_vue_vue_type_template_id_0a7f0576___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SeparateAnimationFile_vue_vue_type_template_id_0a7f0576___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Animation/SeparateAnimationFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Animation/SeparateAnimationFile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/examples/Animation/SeparateAnimationFile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparateAnimationFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SeparateAnimationFile.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/SeparateAnimationFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparateAnimationFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Animation/SeparateAnimationFile.vue?vue&type=template&id=0a7f0576&":
/*!*****************************************************************************************!*\
  !*** ./src/examples/Animation/SeparateAnimationFile.vue?vue&type=template&id=0a7f0576& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparateAnimationFile_vue_vue_type_template_id_0a7f0576___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SeparateAnimationFile.vue?vue&type=template&id=0a7f0576& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Animation/SeparateAnimationFile.vue?vue&type=template&id=0a7f0576&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparateAnimationFile_vue_vue_type_template_id_0a7f0576___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeparateAnimationFile_vue_vue_type_template_id_0a7f0576___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/ArtAsset/Import.vue":
/*!******************************************!*\
  !*** ./src/examples/ArtAsset/Import.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Import_vue_vue_type_template_id_0004963a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Import.vue?vue&type=template&id=0004963a& */ "./src/examples/ArtAsset/Import.vue?vue&type=template&id=0004963a&");
/* harmony import */ var _Import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Import.vue?vue&type=script&lang=js& */ "./src/examples/ArtAsset/Import.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Import_vue_vue_type_template_id_0004963a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Import_vue_vue_type_template_id_0004963a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/ArtAsset/Import.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/ArtAsset/Import.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/examples/ArtAsset/Import.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Import.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/Import.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/ArtAsset/Import.vue?vue&type=template&id=0004963a&":
/*!*************************************************************************!*\
  !*** ./src/examples/ArtAsset/Import.vue?vue&type=template&id=0004963a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Import_vue_vue_type_template_id_0004963a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Import.vue?vue&type=template&id=0004963a& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/Import.vue?vue&type=template&id=0004963a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Import_vue_vue_type_template_id_0004963a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Import_vue_vue_type_template_id_0004963a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/ArtAsset/ImportLayer.vue":
/*!***********************************************!*\
  !*** ./src/examples/ArtAsset/ImportLayer.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImportLayer_vue_vue_type_template_id_70e4a8e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportLayer.vue?vue&type=template&id=70e4a8e7& */ "./src/examples/ArtAsset/ImportLayer.vue?vue&type=template&id=70e4a8e7&");
/* harmony import */ var _ImportLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportLayer.vue?vue&type=script&lang=js& */ "./src/examples/ArtAsset/ImportLayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportLayer_vue_vue_type_template_id_70e4a8e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImportLayer_vue_vue_type_template_id_70e4a8e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/ArtAsset/ImportLayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/ArtAsset/ImportLayer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/examples/ArtAsset/ImportLayer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportLayer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportLayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/ArtAsset/ImportLayer.vue?vue&type=template&id=70e4a8e7&":
/*!******************************************************************************!*\
  !*** ./src/examples/ArtAsset/ImportLayer.vue?vue&type=template&id=70e4a8e7& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportLayer_vue_vue_type_template_id_70e4a8e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportLayer.vue?vue&type=template&id=70e4a8e7& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportLayer.vue?vue&type=template&id=70e4a8e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportLayer_vue_vue_type_template_id_70e4a8e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportLayer_vue_vue_type_template_id_70e4a8e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/ArtAsset/ImportMultiLayer.vue":
/*!****************************************************!*\
  !*** ./src/examples/ArtAsset/ImportMultiLayer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImportMultiLayer_vue_vue_type_template_id_a546c11c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportMultiLayer.vue?vue&type=template&id=a546c11c& */ "./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=template&id=a546c11c&");
/* harmony import */ var _ImportMultiLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportMultiLayer.vue?vue&type=script&lang=js& */ "./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportMultiLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportMultiLayer_vue_vue_type_template_id_a546c11c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImportMultiLayer_vue_vue_type_template_id_a546c11c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/ArtAsset/ImportMultiLayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportMultiLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportMultiLayer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportMultiLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=template&id=a546c11c&":
/*!***********************************************************************************!*\
  !*** ./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=template&id=a546c11c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportMultiLayer_vue_vue_type_template_id_a546c11c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImportMultiLayer.vue?vue&type=template&id=a546c11c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/ArtAsset/ImportMultiLayer.vue?vue&type=template&id=a546c11c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportMultiLayer_vue_vue_type_template_id_a546c11c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportMultiLayer_vue_vue_type_template_id_a546c11c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/BasicTransformations/Rotation.vue":
/*!********************************************************!*\
  !*** ./src/examples/BasicTransformations/Rotation.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rotation_vue_vue_type_template_id_0fabc7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rotation.vue?vue&type=template&id=0fabc7f8& */ "./src/examples/BasicTransformations/Rotation.vue?vue&type=template&id=0fabc7f8&");
/* harmony import */ var _Rotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rotation.vue?vue&type=script&lang=js& */ "./src/examples/BasicTransformations/Rotation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rotation_vue_vue_type_template_id_0fabc7f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Rotation_vue_vue_type_template_id_0fabc7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/BasicTransformations/Rotation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/BasicTransformations/Rotation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/examples/BasicTransformations/Rotation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Rotation.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Rotation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/BasicTransformations/Rotation.vue?vue&type=template&id=0fabc7f8&":
/*!***************************************************************************************!*\
  !*** ./src/examples/BasicTransformations/Rotation.vue?vue&type=template&id=0fabc7f8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rotation_vue_vue_type_template_id_0fabc7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Rotation.vue?vue&type=template&id=0fabc7f8& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Rotation.vue?vue&type=template&id=0fabc7f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rotation_vue_vue_type_template_id_0fabc7f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rotation_vue_vue_type_template_id_0fabc7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/BasicTransformations/Scale.vue":
/*!*****************************************************!*\
  !*** ./src/examples/BasicTransformations/Scale.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scale_vue_vue_type_template_id_6cde14b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scale.vue?vue&type=template&id=6cde14b4& */ "./src/examples/BasicTransformations/Scale.vue?vue&type=template&id=6cde14b4&");
/* harmony import */ var _Scale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scale.vue?vue&type=script&lang=js& */ "./src/examples/BasicTransformations/Scale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scale_vue_vue_type_template_id_6cde14b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scale_vue_vue_type_template_id_6cde14b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/BasicTransformations/Scale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/BasicTransformations/Scale.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/examples/BasicTransformations/Scale.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Scale.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Scale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/BasicTransformations/Scale.vue?vue&type=template&id=6cde14b4&":
/*!************************************************************************************!*\
  !*** ./src/examples/BasicTransformations/Scale.vue?vue&type=template&id=6cde14b4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scale_vue_vue_type_template_id_6cde14b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Scale.vue?vue&type=template&id=6cde14b4& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Scale.vue?vue&type=template&id=6cde14b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scale_vue_vue_type_template_id_6cde14b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scale_vue_vue_type_template_id_6cde14b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/BasicTransformations/Translation.vue":
/*!***********************************************************!*\
  !*** ./src/examples/BasicTransformations/Translation.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Translation_vue_vue_type_template_id_13da65ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation.vue?vue&type=template&id=13da65ca& */ "./src/examples/BasicTransformations/Translation.vue?vue&type=template&id=13da65ca&");
/* harmony import */ var _Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translation.vue?vue&type=script&lang=js& */ "./src/examples/BasicTransformations/Translation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Translation_vue_vue_type_template_id_13da65ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Translation_vue_vue_type_template_id_13da65ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/BasicTransformations/Translation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/BasicTransformations/Translation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/examples/BasicTransformations/Translation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Translation.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Translation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/BasicTransformations/Translation.vue?vue&type=template&id=13da65ca&":
/*!******************************************************************************************!*\
  !*** ./src/examples/BasicTransformations/Translation.vue?vue&type=template&id=13da65ca& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translation_vue_vue_type_template_id_13da65ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Translation.vue?vue&type=template&id=13da65ca& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/Translation.vue?vue&type=template&id=13da65ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translation_vue_vue_type_template_id_13da65ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translation_vue_vue_type_template_id_13da65ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/BasicTransformations/WidthHeight.vue":
/*!***********************************************************!*\
  !*** ./src/examples/BasicTransformations/WidthHeight.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WidthHeight_vue_vue_type_template_id_9d416a12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidthHeight.vue?vue&type=template&id=9d416a12& */ "./src/examples/BasicTransformations/WidthHeight.vue?vue&type=template&id=9d416a12&");
/* harmony import */ var _WidthHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidthHeight.vue?vue&type=script&lang=js& */ "./src/examples/BasicTransformations/WidthHeight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WidthHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WidthHeight_vue_vue_type_template_id_9d416a12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WidthHeight_vue_vue_type_template_id_9d416a12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/BasicTransformations/WidthHeight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/BasicTransformations/WidthHeight.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/examples/BasicTransformations/WidthHeight.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidthHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WidthHeight.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/WidthHeight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidthHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/BasicTransformations/WidthHeight.vue?vue&type=template&id=9d416a12&":
/*!******************************************************************************************!*\
  !*** ./src/examples/BasicTransformations/WidthHeight.vue?vue&type=template&id=9d416a12& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidthHeight_vue_vue_type_template_id_9d416a12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WidthHeight.vue?vue&type=template&id=9d416a12& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/BasicTransformations/WidthHeight.vue?vue&type=template&id=9d416a12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidthHeight_vue_vue_type_template_id_9d416a12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidthHeight_vue_vue_type_template_id_9d416a12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Demo.vue":
/*!*******************************!*\
  !*** ./src/examples/Demo.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Demo_vue_vue_type_template_id_7d7fa700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=7d7fa700& */ "./src/examples/Demo.vue?vue&type=template&id=7d7fa700&");
/* harmony import */ var _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&lang=js& */ "./src/examples/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Demo_vue_vue_type_template_id_7d7fa700___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Demo_vue_vue_type_template_id_7d7fa700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Demo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Demo.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/examples/Demo.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Demo.vue?vue&type=template&id=7d7fa700&":
/*!**************************************************************!*\
  !*** ./src/examples/Demo.vue?vue&type=template&id=7d7fa700& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_7d7fa700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=template&id=7d7fa700& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Demo.vue?vue&type=template&id=7d7fa700&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_7d7fa700___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_7d7fa700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/HomePage.vue":
/*!***********************************!*\
  !*** ./src/examples/HomePage.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_16971aab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=16971aab& */ "./src/examples/HomePage.vue?vue&type=template&id=16971aab&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./src/examples/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_16971aab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_16971aab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/HomePage.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/examples/HomePage.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/HomePage.vue?vue&type=template&id=16971aab&":
/*!******************************************************************!*\
  !*** ./src/examples/HomePage.vue?vue&type=template&id=16971aab& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_16971aab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=16971aab& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/HomePage.vue?vue&type=template&id=16971aab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_16971aab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_16971aab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Introduction/AssetComposition.vue":
/*!********************************************************!*\
  !*** ./src/examples/Introduction/AssetComposition.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssetComposition_vue_vue_type_template_id_35d6197c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetComposition.vue?vue&type=template&id=35d6197c& */ "./src/examples/Introduction/AssetComposition.vue?vue&type=template&id=35d6197c&");
/* harmony import */ var _AssetComposition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetComposition.vue?vue&type=script&lang=js& */ "./src/examples/Introduction/AssetComposition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssetComposition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetComposition_vue_vue_type_template_id_35d6197c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssetComposition_vue_vue_type_template_id_35d6197c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Introduction/AssetComposition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Introduction/AssetComposition.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/examples/Introduction/AssetComposition.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetComposition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AssetComposition.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/AssetComposition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetComposition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Introduction/AssetComposition.vue?vue&type=template&id=35d6197c&":
/*!***************************************************************************************!*\
  !*** ./src/examples/Introduction/AssetComposition.vue?vue&type=template&id=35d6197c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetComposition_vue_vue_type_template_id_35d6197c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AssetComposition.vue?vue&type=template&id=35d6197c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/AssetComposition.vue?vue&type=template&id=35d6197c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetComposition_vue_vue_type_template_id_35d6197c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetComposition_vue_vue_type_template_id_35d6197c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Introduction/BalloonSample.vue":
/*!*****************************************************!*\
  !*** ./src/examples/Introduction/BalloonSample.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BalloonSample_vue_vue_type_template_id_128f1c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BalloonSample.vue?vue&type=template&id=128f1c7e& */ "./src/examples/Introduction/BalloonSample.vue?vue&type=template&id=128f1c7e&");
/* harmony import */ var _BalloonSample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BalloonSample.vue?vue&type=script&lang=js& */ "./src/examples/Introduction/BalloonSample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BalloonSample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BalloonSample_vue_vue_type_template_id_128f1c7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BalloonSample_vue_vue_type_template_id_128f1c7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Introduction/BalloonSample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Introduction/BalloonSample.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/examples/Introduction/BalloonSample.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalloonSample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BalloonSample.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/BalloonSample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalloonSample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Introduction/BalloonSample.vue?vue&type=template&id=128f1c7e&":
/*!************************************************************************************!*\
  !*** ./src/examples/Introduction/BalloonSample.vue?vue&type=template&id=128f1c7e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalloonSample_vue_vue_type_template_id_128f1c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BalloonSample.vue?vue&type=template&id=128f1c7e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/BalloonSample.vue?vue&type=template&id=128f1c7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalloonSample_vue_vue_type_template_id_128f1c7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalloonSample_vue_vue_type_template_id_128f1c7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Introduction/ComponentBasedAssets.vue":
/*!************************************************************!*\
  !*** ./src/examples/Introduction/ComponentBasedAssets.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentBasedAssets_vue_vue_type_template_id_77a701fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentBasedAssets.vue?vue&type=template&id=77a701fe& */ "./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=template&id=77a701fe&");
/* harmony import */ var _ComponentBasedAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentBasedAssets.vue?vue&type=script&lang=js& */ "./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentBasedAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentBasedAssets_vue_vue_type_template_id_77a701fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentBasedAssets_vue_vue_type_template_id_77a701fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Introduction/ComponentBasedAssets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentBasedAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComponentBasedAssets.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentBasedAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=template&id=77a701fe&":
/*!*******************************************************************************************!*\
  !*** ./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=template&id=77a701fe& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentBasedAssets_vue_vue_type_template_id_77a701fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComponentBasedAssets.vue?vue&type=template&id=77a701fe& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/ComponentBasedAssets.vue?vue&type=template&id=77a701fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentBasedAssets_vue_vue_type_template_id_77a701fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentBasedAssets_vue_vue_type_template_id_77a701fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Introduction/Rectangle.vue":
/*!*************************************************!*\
  !*** ./src/examples/Introduction/Rectangle.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rectangle_vue_vue_type_template_id_7e87d512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle.vue?vue&type=template&id=7e87d512& */ "./src/examples/Introduction/Rectangle.vue?vue&type=template&id=7e87d512&");
/* harmony import */ var _Rectangle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle.vue?vue&type=script&lang=js& */ "./src/examples/Introduction/Rectangle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rectangle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rectangle_vue_vue_type_template_id_7e87d512___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Rectangle_vue_vue_type_template_id_7e87d512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Introduction/Rectangle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Introduction/Rectangle.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/examples/Introduction/Rectangle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rectangle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Rectangle.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/Rectangle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rectangle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Introduction/Rectangle.vue?vue&type=template&id=7e87d512&":
/*!********************************************************************************!*\
  !*** ./src/examples/Introduction/Rectangle.vue?vue&type=template&id=7e87d512& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rectangle_vue_vue_type_template_id_7e87d512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Rectangle.vue?vue&type=template&id=7e87d512& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Introduction/Rectangle.vue?vue&type=template&id=7e87d512&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rectangle_vue_vue_type_template_id_7e87d512___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rectangle_vue_vue_type_template_id_7e87d512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/KeyframeAnimation/Color.vue":
/*!**************************************************!*\
  !*** ./src/examples/KeyframeAnimation/Color.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_vue_vue_type_template_id_26b1f49d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.vue?vue&type=template&id=26b1f49d& */ "./src/examples/KeyframeAnimation/Color.vue?vue&type=template&id=26b1f49d&");
/* harmony import */ var _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color.vue?vue&type=script&lang=js& */ "./src/examples/KeyframeAnimation/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Color_vue_vue_type_template_id_26b1f49d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Color_vue_vue_type_template_id_26b1f49d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/KeyframeAnimation/Color.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/KeyframeAnimation/Color.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/examples/KeyframeAnimation/Color.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeAnimation/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/KeyframeAnimation/Color.vue?vue&type=template&id=26b1f49d&":
/*!*********************************************************************************!*\
  !*** ./src/examples/KeyframeAnimation/Color.vue?vue&type=template&id=26b1f49d& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_26b1f49d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=template&id=26b1f49d& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeAnimation/Color.vue?vue&type=template&id=26b1f49d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_26b1f49d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_26b1f49d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/KeyframeModifiers/DelayHiddenChain.vue":
/*!*************************************************************!*\
  !*** ./src/examples/KeyframeModifiers/DelayHiddenChain.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DelayHiddenChain_vue_vue_type_template_id_3aa61a1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DelayHiddenChain.vue?vue&type=template&id=3aa61a1c& */ "./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=template&id=3aa61a1c&");
/* harmony import */ var _DelayHiddenChain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DelayHiddenChain.vue?vue&type=script&lang=js& */ "./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DelayHiddenChain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DelayHiddenChain_vue_vue_type_template_id_3aa61a1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DelayHiddenChain_vue_vue_type_template_id_3aa61a1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/KeyframeModifiers/DelayHiddenChain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DelayHiddenChain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DelayHiddenChain.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DelayHiddenChain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=template&id=3aa61a1c&":
/*!********************************************************************************************!*\
  !*** ./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=template&id=3aa61a1c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DelayHiddenChain_vue_vue_type_template_id_3aa61a1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DelayHiddenChain.vue?vue&type=template&id=3aa61a1c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeModifiers/DelayHiddenChain.vue?vue&type=template&id=3aa61a1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DelayHiddenChain_vue_vue_type_template_id_3aa61a1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DelayHiddenChain_vue_vue_type_template_id_3aa61a1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/KeyframeSlider.vue":
/*!*****************************************!*\
  !*** ./src/examples/KeyframeSlider.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeyframeSlider_vue_vue_type_template_id_b4882168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyframeSlider.vue?vue&type=template&id=b4882168& */ "./src/examples/KeyframeSlider.vue?vue&type=template&id=b4882168&");
/* harmony import */ var _KeyframeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyframeSlider.vue?vue&type=script&lang=js& */ "./src/examples/KeyframeSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KeyframeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KeyframeSlider_vue_vue_type_template_id_b4882168___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KeyframeSlider_vue_vue_type_template_id_b4882168___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/KeyframeSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/KeyframeSlider.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/examples/KeyframeSlider.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyframeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./KeyframeSlider.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyframeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/KeyframeSlider.vue?vue&type=template&id=b4882168&":
/*!************************************************************************!*\
  !*** ./src/examples/KeyframeSlider.vue?vue&type=template&id=b4882168& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyframeSlider_vue_vue_type_template_id_b4882168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./KeyframeSlider.vue?vue&type=template&id=b4882168& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/KeyframeSlider.vue?vue&type=template&id=b4882168&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyframeSlider_vue_vue_type_template_id_b4882168___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyframeSlider_vue_vue_type_template_id_b4882168___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Timers/UsingClockTimer.vue":
/*!*************************************************!*\
  !*** ./src/examples/Timers/UsingClockTimer.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsingClockTimer_vue_vue_type_template_id_6fac74f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsingClockTimer.vue?vue&type=template&id=6fac74f7& */ "./src/examples/Timers/UsingClockTimer.vue?vue&type=template&id=6fac74f7&");
/* harmony import */ var _UsingClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsingClockTimer.vue?vue&type=script&lang=js& */ "./src/examples/Timers/UsingClockTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsingClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsingClockTimer_vue_vue_type_template_id_6fac74f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsingClockTimer_vue_vue_type_template_id_6fac74f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Timers/UsingClockTimer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Timers/UsingClockTimer.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/examples/Timers/UsingClockTimer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsingClockTimer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingClockTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingClockTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Timers/UsingClockTimer.vue?vue&type=template&id=6fac74f7&":
/*!********************************************************************************!*\
  !*** ./src/examples/Timers/UsingClockTimer.vue?vue&type=template&id=6fac74f7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingClockTimer_vue_vue_type_template_id_6fac74f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsingClockTimer.vue?vue&type=template&id=6fac74f7& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingClockTimer.vue?vue&type=template&id=6fac74f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingClockTimer_vue_vue_type_template_id_6fac74f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingClockTimer_vue_vue_type_template_id_6fac74f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/Timers/UsingScrollTimer.vue":
/*!**************************************************!*\
  !*** ./src/examples/Timers/UsingScrollTimer.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsingScrollTimer_vue_vue_type_template_id_bc2123f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsingScrollTimer.vue?vue&type=template&id=bc2123f0& */ "./src/examples/Timers/UsingScrollTimer.vue?vue&type=template&id=bc2123f0&");
/* harmony import */ var _UsingScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsingScrollTimer.vue?vue&type=script&lang=js& */ "./src/examples/Timers/UsingScrollTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsingScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsingScrollTimer_vue_vue_type_template_id_bc2123f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsingScrollTimer_vue_vue_type_template_id_bc2123f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/Timers/UsingScrollTimer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/Timers/UsingScrollTimer.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/examples/Timers/UsingScrollTimer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsingScrollTimer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingScrollTimer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingScrollTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/Timers/UsingScrollTimer.vue?vue&type=template&id=bc2123f0&":
/*!*********************************************************************************!*\
  !*** ./src/examples/Timers/UsingScrollTimer.vue?vue&type=template&id=bc2123f0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingScrollTimer_vue_vue_type_template_id_bc2123f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsingScrollTimer.vue?vue&type=template&id=bc2123f0& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/Timers/UsingScrollTimer.vue?vue&type=template&id=bc2123f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingScrollTimer_vue_vue_type_template_id_bc2123f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsingScrollTimer_vue_vue_type_template_id_bc2123f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/examples/UsingFilters/FilterExample.vue":
/*!*****************************************************!*\
  !*** ./src/examples/UsingFilters/FilterExample.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterExample_vue_vue_type_template_id_1d73ba52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterExample.vue?vue&type=template&id=1d73ba52& */ "./src/examples/UsingFilters/FilterExample.vue?vue&type=template&id=1d73ba52&");
/* harmony import */ var _FilterExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterExample.vue?vue&type=script&lang=js& */ "./src/examples/UsingFilters/FilterExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterExample_vue_vue_type_template_id_1d73ba52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterExample_vue_vue_type_template_id_1d73ba52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/examples/UsingFilters/FilterExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/examples/UsingFilters/FilterExample.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/examples/UsingFilters/FilterExample.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterExample.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/UsingFilters/FilterExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/examples/UsingFilters/FilterExample.vue?vue&type=template&id=1d73ba52&":
/*!************************************************************************************!*\
  !*** ./src/examples/UsingFilters/FilterExample.vue?vue&type=template&id=1d73ba52& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterExample_vue_vue_type_template_id_1d73ba52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28a44338-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterExample.vue?vue&type=template&id=1d73ba52& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"28a44338-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/examples/UsingFilters/FilterExample.vue?vue&type=template&id=1d73ba52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterExample_vue_vue_type_template_id_1d73ba52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_28a44338_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterExample_vue_vue_type_template_id_1d73ba52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var _Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Users_andrew_sites_bytepath_io_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App */ "./src/App.vue");
/* harmony import */ var _examples_HomePage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/HomePage */ "./src/examples/HomePage.vue");
/* harmony import */ var _examples_Demo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/Demo */ "./src/examples/Demo.vue");
/* harmony import */ var _examples_Introduction_Rectangle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/Introduction/Rectangle */ "./src/examples/Introduction/Rectangle.vue");
/* harmony import */ var _examples_Introduction_ComponentBasedAssets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/Introduction/ComponentBasedAssets */ "./src/examples/Introduction/ComponentBasedAssets.vue");
/* harmony import */ var _examples_Introduction_BalloonSample__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/Introduction/BalloonSample */ "./src/examples/Introduction/BalloonSample.vue");
/* harmony import */ var _examples_Introduction_AssetComposition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/Introduction/AssetComposition */ "./src/examples/Introduction/AssetComposition.vue");
/* harmony import */ var _examples_BasicTransformations_Translation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/BasicTransformations/Translation */ "./src/examples/BasicTransformations/Translation.vue");
/* harmony import */ var _examples_BasicTransformations_Scale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/BasicTransformations/Scale */ "./src/examples/BasicTransformations/Scale.vue");
/* harmony import */ var _examples_BasicTransformations_Rotation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/BasicTransformations/Rotation */ "./src/examples/BasicTransformations/Rotation.vue");
/* harmony import */ var _examples_BasicTransformations_WidthHeight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/BasicTransformations/WidthHeight */ "./src/examples/BasicTransformations/WidthHeight.vue");
/* harmony import */ var _examples_Timers_UsingScrollTimer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/Timers/UsingScrollTimer */ "./src/examples/Timers/UsingScrollTimer.vue");
/* harmony import */ var _examples_Timers_UsingClockTimer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./examples/Timers/UsingClockTimer */ "./src/examples/Timers/UsingClockTimer.vue");
/* harmony import */ var _examples_ArtAsset_Import__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./examples/ArtAsset/Import */ "./src/examples/ArtAsset/Import.vue");
/* harmony import */ var _examples_ArtAsset_ImportLayer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./examples/ArtAsset/ImportLayer */ "./src/examples/ArtAsset/ImportLayer.vue");
/* harmony import */ var _examples_ArtAsset_ImportMultiLayer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./examples/ArtAsset/ImportMultiLayer */ "./src/examples/ArtAsset/ImportMultiLayer.vue");
/* harmony import */ var _examples_UsingFilters_FilterExample__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./examples/UsingFilters/FilterExample */ "./src/examples/UsingFilters/FilterExample.vue");
/* harmony import */ var _examples_Animation_AnimatedBalloon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./examples/Animation/AnimatedBalloon */ "./src/examples/Animation/AnimatedBalloon.vue");
/* harmony import */ var _examples_Animation_CreateKeyframe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./examples/Animation/CreateKeyframe */ "./src/examples/Animation/CreateKeyframe.vue");
/* harmony import */ var _examples_Animation_MultiAction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./examples/Animation/MultiAction */ "./src/examples/Animation/MultiAction.vue");
/* harmony import */ var _examples_Animation_MultipleAnimations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./examples/Animation/MultipleAnimations */ "./src/examples/Animation/MultipleAnimations.vue");
/* harmony import */ var _examples_Animation_PropAnimation__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./examples/Animation/PropAnimation */ "./src/examples/Animation/PropAnimation.vue");
/* harmony import */ var _examples_Animation_RenderlessExample__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./examples/Animation/RenderlessExample */ "./src/examples/Animation/RenderlessExample.vue");
/* harmony import */ var _examples_Animation_SeparateAnimationFile__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./examples/Animation/SeparateAnimationFile */ "./src/examples/Animation/SeparateAnimationFile.vue");
/* harmony import */ var _examples_Animation_ComplicatedAnimation__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./examples/Animation/ComplicatedAnimation */ "./src/examples/Animation/ComplicatedAnimation.vue");
/* harmony import */ var _examples_Animation_ComplicatedToTween__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./examples/Animation/ComplicatedToTween */ "./src/examples/Animation/ComplicatedToTween.vue");
/* harmony import */ var _examples_KeyframeAnimation_Color__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./examples/KeyframeAnimation/Color */ "./src/examples/KeyframeAnimation/Color.vue");














 // Introduction




 // Basic Transformations




 // Timers


 // Art Import















var components = {
  Demo: _examples_Demo__WEBPACK_IMPORTED_MODULE_14__["default"],
  HomePage: _examples_HomePage__WEBPACK_IMPORTED_MODULE_13__["default"],
  "vector-rect": _examples_Introduction_Rectangle__WEBPACK_IMPORTED_MODULE_15__["default"],
  ComponentBasedAssets: _examples_Introduction_ComponentBasedAssets__WEBPACK_IMPORTED_MODULE_16__["default"],
  BalloonSample: _examples_Introduction_BalloonSample__WEBPACK_IMPORTED_MODULE_17__["default"],
  AssetComposition: _examples_Introduction_AssetComposition__WEBPACK_IMPORTED_MODULE_18__["default"],
  UsingScrollTimer: _examples_Timers_UsingScrollTimer__WEBPACK_IMPORTED_MODULE_23__["default"],
  UsingClockTimer: _examples_Timers_UsingClockTimer__WEBPACK_IMPORTED_MODULE_24__["default"],
  TranslationProp: _examples_BasicTransformations_Translation__WEBPACK_IMPORTED_MODULE_19__["default"],
  ScaleProp: _examples_BasicTransformations_Scale__WEBPACK_IMPORTED_MODULE_20__["default"],
  RotationProp: _examples_BasicTransformations_Rotation__WEBPACK_IMPORTED_MODULE_21__["default"],
  WidthHeight: _examples_BasicTransformations_WidthHeight__WEBPACK_IMPORTED_MODULE_22__["default"],
  'asset-import': _examples_ArtAsset_Import__WEBPACK_IMPORTED_MODULE_25__["default"],
  'asset-import-layer': _examples_ArtAsset_ImportLayer__WEBPACK_IMPORTED_MODULE_26__["default"],
  'asset-import-multi-layer': _examples_ArtAsset_ImportMultiLayer__WEBPACK_IMPORTED_MODULE_27__["default"],
  FilterExample: _examples_UsingFilters_FilterExample__WEBPACK_IMPORTED_MODULE_28__["default"],
  AnimatedBalloon: _examples_Animation_AnimatedBalloon__WEBPACK_IMPORTED_MODULE_29__["default"],
  CreateKeyframe: _examples_Animation_CreateKeyframe__WEBPACK_IMPORTED_MODULE_30__["default"],
  MultiAction: _examples_Animation_MultiAction__WEBPACK_IMPORTED_MODULE_31__["default"],
  MultipleAnimations: _examples_Animation_MultipleAnimations__WEBPACK_IMPORTED_MODULE_32__["default"],
  PropAnimation: _examples_Animation_PropAnimation__WEBPACK_IMPORTED_MODULE_33__["default"],
  RenderlessExample: _examples_Animation_RenderlessExample__WEBPACK_IMPORTED_MODULE_34__["default"],
  SeparateAnimationFile: _examples_Animation_SeparateAnimationFile__WEBPACK_IMPORTED_MODULE_35__["default"],
  ComplicatedAnimation: _examples_Animation_ComplicatedAnimation__WEBPACK_IMPORTED_MODULE_36__["default"],
  ComplicatedToTween: _examples_Animation_ComplicatedToTween__WEBPACK_IMPORTED_MODULE_37__["default"],
  ColorAnimation: _examples_KeyframeAnimation_Color__WEBPACK_IMPORTED_MODULE_38__["default"]
};
Object.entries(components).map(function (item) {
  vue__WEBPACK_IMPORTED_MODULE_11__["default"].component(item[0], item[1]);
});
vue__WEBPACK_IMPORTED_MODULE_11__["default"].config.productionTip = false;

function whenBodyLoaded(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
} // eslint-disable-next-line


if (document.getElementById("catdogapp")) {
  console.log("catdog app detected");
  new vue__WEBPACK_IMPORTED_MODULE_11__["default"]({
    render: function render(h) {
      return h(_App__WEBPACK_IMPORTED_MODULE_12__["default"]);
    }
  }).$mount("#catdogapp");
} else {
  console.log("looking for demo");

  if (document) {
    whenBodyLoaded(function () {
      console.log(Object(_Users_andrew_sites_bytepath_io_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["default"])({}, document), document.querySelectorAll(".demo"));
      document.querySelectorAll(".demo").forEach(function (element) {
        var args = element.getAttribute("component").split(" ");
        /* eslint-disable-next-line */

        var props = {
          src: args[0],
          start: args[1] ? parseInt(args[1]) : 0,
          end: args[2] ? parseInt(args[2]) : 1000
        };
        console.log("found a demo", props, args);
        var app = new vue__WEBPACK_IMPORTED_MODULE_11__["default"]({
          render: function render(h) {
            return h('demo', {
              props: props
            });
          }
        }).$mount(element);
        console.log("app is", app);
      });
    });
  } else {
    console.log("no document");
  }
}

window.vueapp = vue__WEBPACK_IMPORTED_MODULE_11__["default"];

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map