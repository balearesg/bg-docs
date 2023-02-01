System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["scheduler","0.23.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// node_modules/scheduler/cjs/scheduler.development.js
var require_scheduler_development = __commonJS({
  "node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";

    if (true) {
      (function () {
        "use strict";

        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var frameYieldMs = 5;
        function push(heap, node) {
          var index = heap.length;
          heap.push(node);
          siftUp(heap, node, index);
        }
        function peek(heap) {
          return heap.length === 0 ? null : heap[0];
        }
        function pop(heap) {
          if (heap.length === 0) {
            return null;
          }
          var first = heap[0];
          var last = heap.pop();
          if (last !== first) {
            heap[0] = last;
            siftDown(heap, last, 0);
          }
          return first;
        }
        function siftUp(heap, node, i) {
          var index = i;
          while (index > 0) {
            var parentIndex = index - 1 >>> 1;
            var parent = heap[parentIndex];
            if (compare(parent, node) > 0) {
              heap[parentIndex] = node;
              heap[index] = parent;
              index = parentIndex;
            } else {
              return;
            }
          }
        }
        function siftDown(heap, node, i) {
          var index = i;
          var length = heap.length;
          var halfLength = length >>> 1;
          while (index < halfLength) {
            var leftIndex = (index + 1) * 2 - 1;
            var left = heap[leftIndex];
            var rightIndex = leftIndex + 1;
            var right = heap[rightIndex];
            if (compare(left, node) < 0) {
              if (rightIndex < length && compare(right, left) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
              } else {
                heap[index] = left;
                heap[leftIndex] = node;
                index = leftIndex;
              }
            } else if (rightIndex < length && compare(right, node) < 0) {
              heap[index] = right;
              heap[rightIndex] = node;
              index = rightIndex;
            } else {
              return;
            }
          }
        }
        function compare(a, b) {
          var diff = a.sortIndex - b.sortIndex;
          return diff !== 0 ? diff : a.id - b.id;
        }
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        function markTaskErrored(task, ms) {}
        var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
        if (hasPerformanceNow) {
          var localPerformance = performance;
          exports.unstable_now = function () {
            return localPerformance.now();
          };
        } else {
          var localDate = Date;
          var initialTime = localDate.now();
          exports.unstable_now = function () {
            return localDate.now() - initialTime;
          };
        }
        var maxSigned31BitInt = 1073741823;
        var IMMEDIATE_PRIORITY_TIMEOUT = -1;
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5e3;
        var LOW_PRIORITY_TIMEOUT = 1e4;
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
        var taskQueue = [];
        var timerQueue = [];
        var taskIdCounter = 1;
        var currentTask = null;
        var currentPriorityLevel = NormalPriority;
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false;
        var localSetTimeout = typeof setTimeout === "function" ? setTimeout : null;
        var localClearTimeout = typeof clearTimeout === "function" ? clearTimeout : null;
        var localSetImmediate = typeof setImmediate !== "undefined" ? setImmediate : null;
        var isInputPending = typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
        function advanceTimers(currentTime) {
          var timer = peek(timerQueue);
          while (timer !== null) {
            if (timer.callback === null) {
              pop(timerQueue);
            } else if (timer.startTime <= currentTime) {
              pop(timerQueue);
              timer.sortIndex = timer.expirationTime;
              push(taskQueue, timer);
            } else {
              return;
            }
            timer = peek(timerQueue);
          }
        }
        function handleTimeout(currentTime) {
          isHostTimeoutScheduled = false;
          advanceTimers(currentTime);
          if (!isHostCallbackScheduled) {
            if (peek(taskQueue) !== null) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            } else {
              var firstTimer = peek(timerQueue);
              if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
              }
            }
          }
        }
        function flushWork(hasTimeRemaining, initialTime2) {
          isHostCallbackScheduled = false;
          if (isHostTimeoutScheduled) {
            isHostTimeoutScheduled = false;
            cancelHostTimeout();
          }
          isPerformingWork = true;
          var previousPriorityLevel = currentPriorityLevel;
          try {
            if (enableProfiling) {
              try {
                return workLoop(hasTimeRemaining, initialTime2);
              } catch (error) {
                if (currentTask !== null) {
                  var currentTime = exports.unstable_now();
                  markTaskErrored(currentTask, currentTime);
                  currentTask.isQueued = false;
                }
                throw error;
              }
            } else {
              return workLoop(hasTimeRemaining, initialTime2);
            }
          } finally {
            currentTask = null;
            currentPriorityLevel = previousPriorityLevel;
            isPerformingWork = false;
          }
        }
        function workLoop(hasTimeRemaining, initialTime2) {
          var currentTime = initialTime2;
          advanceTimers(currentTime);
          currentTask = peek(taskQueue);
          while (currentTask !== null && !enableSchedulerDebugging) {
            if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
              break;
            }
            var callback = currentTask.callback;
            if (typeof callback === "function") {
              currentTask.callback = null;
              currentPriorityLevel = currentTask.priorityLevel;
              var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
              var continuationCallback = callback(didUserCallbackTimeout);
              currentTime = exports.unstable_now();
              if (typeof continuationCallback === "function") {
                currentTask.callback = continuationCallback;
              } else {
                if (currentTask === peek(taskQueue)) {
                  pop(taskQueue);
                }
              }
              advanceTimers(currentTime);
            } else {
              pop(taskQueue);
            }
            currentTask = peek(taskQueue);
          }
          if (currentTask !== null) {
            return true;
          } else {
            var firstTimer = peek(timerQueue);
            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }
            return false;
          }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
          switch (priorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
            case LowPriority:
            case IdlePriority:
              break;
            default:
              priorityLevel = NormalPriority;
          }
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;
          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }
        function unstable_next(eventHandler) {
          var priorityLevel;
          switch (currentPriorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
              priorityLevel = NormalPriority;
              break;
            default:
              priorityLevel = currentPriorityLevel;
              break;
          }
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;
          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }
        function unstable_wrapCallback(callback) {
          var parentPriorityLevel = currentPriorityLevel;
          return function () {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
              return callback.apply(this, arguments);
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          };
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
          var currentTime = exports.unstable_now();
          var startTime2;
          if (typeof options === "object" && options !== null) {
            var delay = options.delay;
            if (typeof delay === "number" && delay > 0) {
              startTime2 = currentTime + delay;
            } else {
              startTime2 = currentTime;
            }
          } else {
            startTime2 = currentTime;
          }
          var timeout;
          switch (priorityLevel) {
            case ImmediatePriority:
              timeout = IMMEDIATE_PRIORITY_TIMEOUT;
              break;
            case UserBlockingPriority:
              timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
              break;
            case IdlePriority:
              timeout = IDLE_PRIORITY_TIMEOUT;
              break;
            case LowPriority:
              timeout = LOW_PRIORITY_TIMEOUT;
              break;
            case NormalPriority:
            default:
              timeout = NORMAL_PRIORITY_TIMEOUT;
              break;
          }
          var expirationTime = startTime2 + timeout;
          var newTask = {
            id: taskIdCounter++,
            callback,
            priorityLevel,
            startTime: startTime2,
            expirationTime,
            sortIndex: -1
          };
          if (startTime2 > currentTime) {
            newTask.sortIndex = startTime2;
            push(timerQueue, newTask);
            if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
              if (isHostTimeoutScheduled) {
                cancelHostTimeout();
              } else {
                isHostTimeoutScheduled = true;
              }
              requestHostTimeout(handleTimeout, startTime2 - currentTime);
            }
          } else {
            newTask.sortIndex = expirationTime;
            push(taskQueue, newTask);
            if (!isHostCallbackScheduled && !isPerformingWork) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            }
          }
          return newTask;
        }
        function unstable_pauseExecution() {}
        function unstable_continueExecution() {
          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }
        function unstable_getFirstCallbackNode() {
          return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
          task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
          return currentPriorityLevel;
        }
        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1;
        var frameInterval = frameYieldMs;
        var startTime = -1;
        function shouldYieldToHost() {
          var timeElapsed = exports.unstable_now() - startTime;
          if (timeElapsed < frameInterval) {
            return false;
          }
          return true;
        }
        function requestPaint() {}
        function forceFrameRate(fps) {
          if (fps < 0 || fps > 125) {
            console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }
          if (fps > 0) {
            frameInterval = Math.floor(1e3 / fps);
          } else {
            frameInterval = frameYieldMs;
          }
        }
        var performWorkUntilDeadline = function () {
          if (scheduledHostCallback !== null) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasTimeRemaining = true;
            var hasMoreWork = true;
            try {
              hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
            } finally {
              if (hasMoreWork) {
                schedulePerformWorkUntilDeadline();
              } else {
                isMessageLoopRunning = false;
                scheduledHostCallback = null;
              }
            }
          } else {
            isMessageLoopRunning = false;
          }
        };
        var schedulePerformWorkUntilDeadline;
        if (typeof localSetImmediate === "function") {
          schedulePerformWorkUntilDeadline = function () {
            localSetImmediate(performWorkUntilDeadline);
          };
        } else if (typeof MessageChannel !== "undefined") {
          var channel = new MessageChannel();
          var port = channel.port2;
          channel.port1.onmessage = performWorkUntilDeadline;
          schedulePerformWorkUntilDeadline = function () {
            port.postMessage(null);
          };
        } else {
          schedulePerformWorkUntilDeadline = function () {
            localSetTimeout(performWorkUntilDeadline, 0);
          };
        }
        function requestHostCallback(callback) {
          scheduledHostCallback = callback;
          if (!isMessageLoopRunning) {
            isMessageLoopRunning = true;
            schedulePerformWorkUntilDeadline();
          }
        }
        function requestHostTimeout(callback, ms) {
          taskTimeoutID = localSetTimeout(function () {
            callback(exports.unstable_now());
          }, ms);
        }
        function cancelHostTimeout() {
          localClearTimeout(taskTimeoutID);
          taskTimeoutID = -1;
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_forceFrameRate = forceFrameRate;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_shouldYield = shouldYieldToHost;
        exports.unstable_wrapCallback = unstable_wrapCallback;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_scheduler_development();
    }
  }
});

// .beyond/uimport/scheduler.0.23.0.js
var scheduler_0_23_0_exports = {};
__export(scheduler_0_23_0_exports, {
  default: () => scheduler_0_23_0_default
});
__reExport(scheduler_0_23_0_exports, __toESM(require_scheduler()));
var import_scheduler = __toESM(require_scheduler());
var scheduler_0_23_0_default = import_scheduler.default;
module.exports = __toCommonJS(scheduler_0_23_0_exports);
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvc2NoZWR1bGVyLjAuMjMuMC5qcyJdLCJuYW1lcyI6WyJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJyZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQiLCJFcnJvciIsImVuYWJsZVNjaGVkdWxlckRlYnVnZ2luZyIsImVuYWJsZVByb2ZpbGluZyIsImZyYW1lWWllbGRNcyIsImhlYXAiLCJub2RlIiwiaW5kZXgiLCJsZW5ndGgiLCJwdXNoIiwic2lmdFVwIiwiZmlyc3QiLCJsYXN0IiwicG9wIiwic2lmdERvd24iLCJpIiwicGFyZW50SW5kZXgiLCJwYXJlbnQiLCJjb21wYXJlIiwiaGFsZkxlbmd0aCIsImxlZnRJbmRleCIsImxlZnQiLCJyaWdodEluZGV4IiwicmlnaHQiLCJhIiwiYiIsImRpZmYiLCJzb3J0SW5kZXgiLCJpZCIsIkltbWVkaWF0ZVByaW9yaXR5IiwiVXNlckJsb2NraW5nUHJpb3JpdHkiLCJOb3JtYWxQcmlvcml0eSIsIkxvd1ByaW9yaXR5IiwiSWRsZVByaW9yaXR5IiwidGFzayIsIm1zIiwiaGFzUGVyZm9ybWFuY2VOb3ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsImxvY2FsUGVyZm9ybWFuY2UiLCJleHBvcnRzIiwidW5zdGFibGVfbm93IiwibG9jYWxEYXRlIiwiRGF0ZSIsImluaXRpYWxUaW1lIiwibWF4U2lnbmVkMzFCaXRJbnQiLCJJTU1FRElBVEVfUFJJT1JJVFlfVElNRU9VVCIsIlVTRVJfQkxPQ0tJTkdfUFJJT1JJVFlfVElNRU9VVCIsIk5PUk1BTF9QUklPUklUWV9USU1FT1VUIiwiTE9XX1BSSU9SSVRZX1RJTUVPVVQiLCJJRExFX1BSSU9SSVRZX1RJTUVPVVQiLCJ0YXNrUXVldWUiLCJ0aW1lclF1ZXVlIiwidGFza0lkQ291bnRlciIsImN1cnJlbnRUYXNrIiwiY3VycmVudFByaW9yaXR5TGV2ZWwiLCJpc1BlcmZvcm1pbmdXb3JrIiwiaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQiLCJpc0hvc3RUaW1lb3V0U2NoZWR1bGVkIiwibG9jYWxTZXRUaW1lb3V0Iiwic2V0VGltZW91dCIsImxvY2FsQ2xlYXJUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibG9jYWxTZXRJbW1lZGlhdGUiLCJzZXRJbW1lZGlhdGUiLCJpc0lucHV0UGVuZGluZyIsIm5hdmlnYXRvciIsInNjaGVkdWxpbmciLCJiaW5kIiwiY3VycmVudFRpbWUiLCJ0aW1lciIsInBlZWsiLCJjYWxsYmFjayIsInN0YXJ0VGltZSIsImV4cGlyYXRpb25UaW1lIiwiYWR2YW5jZVRpbWVycyIsInJlcXVlc3RIb3N0Q2FsbGJhY2siLCJmbHVzaFdvcmsiLCJmaXJzdFRpbWVyIiwicmVxdWVzdEhvc3RUaW1lb3V0IiwiaGFuZGxlVGltZW91dCIsImhhc1RpbWVSZW1haW5pbmciLCJpbml0aWFsVGltZTIiLCJjYW5jZWxIb3N0VGltZW91dCIsInByZXZpb3VzUHJpb3JpdHlMZXZlbCIsIndvcmtMb29wIiwiZXJyb3IiLCJtYXJrVGFza0Vycm9yZWQiLCJpc1F1ZXVlZCIsInNob3VsZFlpZWxkVG9Ib3N0IiwicHJpb3JpdHlMZXZlbCIsImRpZFVzZXJDYWxsYmFja1RpbWVvdXQiLCJjb250aW51YXRpb25DYWxsYmFjayIsImV2ZW50SGFuZGxlciIsInBhcmVudFByaW9yaXR5TGV2ZWwiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9wdGlvbnMiLCJzdGFydFRpbWUyIiwiZGVsYXkiLCJ0aW1lb3V0IiwibmV3VGFzayIsImlzTWVzc2FnZUxvb3BSdW5uaW5nIiwic2NoZWR1bGVkSG9zdENhbGxiYWNrIiwidGFza1RpbWVvdXRJRCIsImZyYW1lSW50ZXJ2YWwiLCJ0aW1lRWxhcHNlZCIsImZwcyIsImNvbnNvbGUiLCJNYXRoIiwiZmxvb3IiLCJwZXJmb3JtV29ya1VudGlsRGVhZGxpbmUiLCJoYXNNb3JlV29yayIsInNjaGVkdWxlUGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lIiwiTWVzc2FnZUNoYW5uZWwiLCJjaGFubmVsIiwicG9ydCIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsInVuc3RhYmxlX3JlcXVlc3RQYWludCIsInJlcXVlc3RQYWludCIsInVuc3RhYmxlX1Byb2ZpbGluZyIsInVuc3RhYmxlX0lkbGVQcmlvcml0eSIsInVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5IiwidW5zdGFibGVfTG93UHJpb3JpdHkiLCJ1bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSIsInVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5IiwidW5zdGFibGVfY2FuY2VsQ2FsbGJhY2siLCJ1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbiIsInVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlIiwiZm9yY2VGcmFtZVJhdGUiLCJ1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCIsInVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlIiwidW5zdGFibGVfbmV4dCIsInVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uIiwidW5zdGFibGVfcnVuV2l0aFByaW9yaXR5IiwidW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayIsInVuc3RhYmxlX3Nob3VsZFlpZWxkIiwidW5zdGFibGVfd3JhcENhbGxiYWNrIiwicmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AiLCJtb2R1bGUyIiwicmVxdWlyZV9zY2hlZHVsZXJfZGV2ZWxvcG1lbnQiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsInNjaGVkdWxlcl8wXzIzXzBfZGVmYXVsdCIsImltcG9ydF9zY2hlZHVsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0VBQUE7SUFBQTs7SUFZQSxJQUFJ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NkI7VUFDM0IwQixrQkFBa0IyQyxhQUFhO1VBQy9CQSxnQkFBZ0I7UUFDbEI7UUFFQSxJQUFJaUIsd0JBQXdCQztRQUM1QixJQUFJQyxxQkFBc0I7UUFFMUJuRixRQUFRb0Ysd0JBQXdCM0Y7UUFDaENPLFFBQVFxRiw2QkFBNkJoRztRQUNyQ1csUUFBUXNGLHVCQUF1QjlGO1FBQy9CUSxRQUFRdUYsMEJBQTBCaEc7UUFDbENTLFFBQVFtRixxQkFBcUJBO1FBQzdCbkYsUUFBUXdGLGdDQUFnQ2xHO1FBQ3hDVSxRQUFReUYsMEJBQTBCQTtRQUNsQ3pGLFFBQVEwRiw2QkFBNkJBO1FBQ3JDMUYsUUFBUTJGLDBCQUEwQkM7UUFDbEM1RixRQUFRNkYsbUNBQW1DQTtRQUMzQzdGLFFBQVE4RixnQ0FBZ0NBO1FBQ3hDOUYsUUFBUStGLGdCQUFnQkE7UUFDeEIvRixRQUFRZ0csMEJBQTBCQTtRQUNsQ2hHLFFBQVFpRix3QkFBd0JBO1FBQ2hDakYsUUFBUWlHLDJCQUEyQkE7UUFDbkNqRyxRQUFRa0csNEJBQTRCQTtRQUNwQ2xHLFFBQVFtRyx1QkFBdUJsRDtRQUMvQmpELFFBQVFvRyx3QkFBd0JBO1FBRWhDLElBQ0UsT0FBTzdJLG1DQUFtQyxlQUMxQyxPQUFPQSwrQkFBK0I4SSwrQkFDcEMsWUFDRjtVQUNBOUksK0JBQStCOEksMkJBQTJCLElBQUk1SSxPQUFPO1FBQ3ZFO01BRUUsSUFBRztJQUNMO0VBQUE7QUFBQTs7O0FDem5CQTtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6QzZJLFFBQU90RyxVQUFVO0lBQ25CLE9BQU87TUFDTHNHLFFBQU90RyxVQUFVdUc7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQTtBQUFBQztFQUFBQztBQUFBO0FBQUFDLHFDQUFjQztBQUVkLHVCQUFxQkE7QUFDckIsSUFBT0MsMkJBQVFDIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHNjaGVkdWxlci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgPSBmYWxzZTtcbnZhciBlbmFibGVQcm9maWxpbmcgPSBmYWxzZTtcbnZhciBmcmFtZVlpZWxkTXMgPSA1O1xuXG5mdW5jdGlvbiBwdXNoKGhlYXAsIG5vZGUpIHtcbiAgdmFyIGluZGV4ID0gaGVhcC5sZW5ndGg7XG4gIGhlYXAucHVzaChub2RlKTtcbiAgc2lmdFVwKGhlYXAsIG5vZGUsIGluZGV4KTtcbn1cbmZ1bmN0aW9uIHBlZWsoaGVhcCkge1xuICByZXR1cm4gaGVhcC5sZW5ndGggPT09IDAgPyBudWxsIDogaGVhcFswXTtcbn1cbmZ1bmN0aW9uIHBvcChoZWFwKSB7XG4gIGlmIChoZWFwLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGZpcnN0ID0gaGVhcFswXTtcbiAgdmFyIGxhc3QgPSBoZWFwLnBvcCgpO1xuXG4gIGlmIChsYXN0ICE9PSBmaXJzdCkge1xuICAgIGhlYXBbMF0gPSBsYXN0O1xuICAgIHNpZnREb3duKGhlYXAsIGxhc3QsIDApO1xuICB9XG5cbiAgcmV0dXJuIGZpcnN0O1xufVxuXG5mdW5jdGlvbiBzaWZ0VXAoaGVhcCwgbm9kZSwgaSkge1xuICB2YXIgaW5kZXggPSBpO1xuXG4gIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICB2YXIgcGFyZW50SW5kZXggPSBpbmRleCAtIDEgPj4+IDE7XG4gICAgdmFyIHBhcmVudCA9IGhlYXBbcGFyZW50SW5kZXhdO1xuXG4gICAgaWYgKGNvbXBhcmUocGFyZW50LCBub2RlKSA+IDApIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgaXMgbGFyZ2VyLiBTd2FwIHBvc2l0aW9ucy5cbiAgICAgIGhlYXBbcGFyZW50SW5kZXhdID0gbm9kZTtcbiAgICAgIGhlYXBbaW5kZXhdID0gcGFyZW50O1xuICAgICAgaW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHBhcmVudCBpcyBzbWFsbGVyLiBFeGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaWZ0RG93bihoZWFwLCBub2RlLCBpKSB7XG4gIHZhciBpbmRleCA9IGk7XG4gIHZhciBsZW5ndGggPSBoZWFwLmxlbmd0aDtcbiAgdmFyIGhhbGZMZW5ndGggPSBsZW5ndGggPj4+IDE7XG5cbiAgd2hpbGUgKGluZGV4IDwgaGFsZkxlbmd0aCkge1xuICAgIHZhciBsZWZ0SW5kZXggPSAoaW5kZXggKyAxKSAqIDIgLSAxO1xuICAgIHZhciBsZWZ0ID0gaGVhcFtsZWZ0SW5kZXhdO1xuICAgIHZhciByaWdodEluZGV4ID0gbGVmdEluZGV4ICsgMTtcbiAgICB2YXIgcmlnaHQgPSBoZWFwW3JpZ2h0SW5kZXhdOyAvLyBJZiB0aGUgbGVmdCBvciByaWdodCBub2RlIGlzIHNtYWxsZXIsIHN3YXAgd2l0aCB0aGUgc21hbGxlciBvZiB0aG9zZS5cblxuICAgIGlmIChjb21wYXJlKGxlZnQsIG5vZGUpIDwgMCkge1xuICAgICAgaWYgKHJpZ2h0SW5kZXggPCBsZW5ndGggJiYgY29tcGFyZShyaWdodCwgbGVmdCkgPCAwKSB7XG4gICAgICAgIGhlYXBbaW5kZXhdID0gcmlnaHQ7XG4gICAgICAgIGhlYXBbcmlnaHRJbmRleF0gPSBub2RlO1xuICAgICAgICBpbmRleCA9IHJpZ2h0SW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFwW2luZGV4XSA9IGxlZnQ7XG4gICAgICAgIGhlYXBbbGVmdEluZGV4XSA9IG5vZGU7XG4gICAgICAgIGluZGV4ID0gbGVmdEluZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmlnaHRJbmRleCA8IGxlbmd0aCAmJiBjb21wYXJlKHJpZ2h0LCBub2RlKSA8IDApIHtcbiAgICAgIGhlYXBbaW5kZXhdID0gcmlnaHQ7XG4gICAgICBoZWFwW3JpZ2h0SW5kZXhdID0gbm9kZTtcbiAgICAgIGluZGV4ID0gcmlnaHRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTmVpdGhlciBjaGlsZCBpcyBzbWFsbGVyLiBFeGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgLy8gQ29tcGFyZSBzb3J0IGluZGV4IGZpcnN0LCB0aGVuIHRhc2sgaWQuXG4gIHZhciBkaWZmID0gYS5zb3J0SW5kZXggLSBiLnNvcnRJbmRleDtcbiAgcmV0dXJuIGRpZmYgIT09IDAgPyBkaWZmIDogYS5pZCAtIGIuaWQ7XG59XG5cbi8vIFRPRE86IFVzZSBzeW1ib2xzP1xudmFyIEltbWVkaWF0ZVByaW9yaXR5ID0gMTtcbnZhciBVc2VyQmxvY2tpbmdQcmlvcml0eSA9IDI7XG52YXIgTm9ybWFsUHJpb3JpdHkgPSAzO1xudmFyIExvd1ByaW9yaXR5ID0gNDtcbnZhciBJZGxlUHJpb3JpdHkgPSA1O1xuXG5mdW5jdGlvbiBtYXJrVGFza0Vycm9yZWQodGFzaywgbXMpIHtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5cbnZhciBoYXNQZXJmb3JtYW5jZU5vdyA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJztcblxuaWYgKGhhc1BlcmZvcm1hbmNlTm93KSB7XG4gIHZhciBsb2NhbFBlcmZvcm1hbmNlID0gcGVyZm9ybWFuY2U7XG5cbiAgZXhwb3J0cy51bnN0YWJsZV9ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxvY2FsUGVyZm9ybWFuY2Uubm93KCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgbG9jYWxEYXRlID0gRGF0ZTtcbiAgdmFyIGluaXRpYWxUaW1lID0gbG9jYWxEYXRlLm5vdygpO1xuXG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NhbERhdGUubm93KCkgLSBpbml0aWFsVGltZTtcbiAgfTtcbn0gLy8gTWF4IDMxIGJpdCBpbnRlZ2VyLiBUaGUgbWF4IGludGVnZXIgc2l6ZSBpbiBWOCBmb3IgMzItYml0IHN5c3RlbXMuXG4vLyBNYXRoLnBvdygyLCAzMCkgLSAxXG4vLyAwYjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuXG5cbnZhciBtYXhTaWduZWQzMUJpdEludCA9IDEwNzM3NDE4MjM7IC8vIFRpbWVzIG91dCBpbW1lZGlhdGVseVxuXG52YXIgSU1NRURJQVRFX1BSSU9SSVRZX1RJTUVPVVQgPSAtMTsgLy8gRXZlbnR1YWxseSB0aW1lcyBvdXRcblxudmFyIFVTRVJfQkxPQ0tJTkdfUFJJT1JJVFlfVElNRU9VVCA9IDI1MDtcbnZhciBOT1JNQUxfUFJJT1JJVFlfVElNRU9VVCA9IDUwMDA7XG52YXIgTE9XX1BSSU9SSVRZX1RJTUVPVVQgPSAxMDAwMDsgLy8gTmV2ZXIgdGltZXMgb3V0XG5cbnZhciBJRExFX1BSSU9SSVRZX1RJTUVPVVQgPSBtYXhTaWduZWQzMUJpdEludDsgLy8gVGFza3MgYXJlIHN0b3JlZCBvbiBhIG1pbiBoZWFwXG5cbnZhciB0YXNrUXVldWUgPSBbXTtcbnZhciB0aW1lclF1ZXVlID0gW107IC8vIEluY3JlbWVudGluZyBpZCBjb3VudGVyLiBVc2VkIHRvIG1haW50YWluIGluc2VydGlvbiBvcmRlci5cblxudmFyIHRhc2tJZENvdW50ZXIgPSAxOyAvLyBQYXVzaW5nIHRoZSBzY2hlZHVsZXIgaXMgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG52YXIgY3VycmVudFRhc2sgPSBudWxsO1xudmFyIGN1cnJlbnRQcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7IC8vIFRoaXMgaXMgc2V0IHdoaWxlIHBlcmZvcm1pbmcgd29yaywgdG8gcHJldmVudCByZS1lbnRyYW5jZS5cblxudmFyIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZTtcbnZhciBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xudmFyIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTsgLy8gQ2FwdHVyZSBsb2NhbCByZWZlcmVuY2VzIHRvIG5hdGl2ZSBBUElzLCBpbiBjYXNlIGEgcG9seWZpbGwgb3ZlcnJpZGVzIHRoZW0uXG5cbnZhciBsb2NhbFNldFRpbWVvdXQgPSB0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJyA/IHNldFRpbWVvdXQgOiBudWxsO1xudmFyIGxvY2FsQ2xlYXJUaW1lb3V0ID0gdHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJyA/IGNsZWFyVGltZW91dCA6IG51bGw7XG52YXIgbG9jYWxTZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyA/IHNldEltbWVkaWF0ZSA6IG51bGw7IC8vIElFIGFuZCBOb2RlLmpzICsganNkb21cblxudmFyIGlzSW5wdXRQZW5kaW5nID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnNjaGVkdWxpbmcgIT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3Iuc2NoZWR1bGluZy5pc0lucHV0UGVuZGluZyAhPT0gdW5kZWZpbmVkID8gbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcuYmluZChuYXZpZ2F0b3Iuc2NoZWR1bGluZykgOiBudWxsO1xuXG5mdW5jdGlvbiBhZHZhbmNlVGltZXJzKGN1cnJlbnRUaW1lKSB7XG4gIC8vIENoZWNrIGZvciB0YXNrcyB0aGF0IGFyZSBubyBsb25nZXIgZGVsYXllZCBhbmQgYWRkIHRoZW0gdG8gdGhlIHF1ZXVlLlxuICB2YXIgdGltZXIgPSBwZWVrKHRpbWVyUXVldWUpO1xuXG4gIHdoaWxlICh0aW1lciAhPT0gbnVsbCkge1xuICAgIGlmICh0aW1lci5jYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgLy8gVGltZXIgd2FzIGNhbmNlbGxlZC5cbiAgICAgIHBvcCh0aW1lclF1ZXVlKTtcbiAgICB9IGVsc2UgaWYgKHRpbWVyLnN0YXJ0VGltZSA8PSBjdXJyZW50VGltZSkge1xuICAgICAgLy8gVGltZXIgZmlyZWQuIFRyYW5zZmVyIHRvIHRoZSB0YXNrIHF1ZXVlLlxuICAgICAgcG9wKHRpbWVyUXVldWUpO1xuICAgICAgdGltZXIuc29ydEluZGV4ID0gdGltZXIuZXhwaXJhdGlvblRpbWU7XG4gICAgICBwdXNoKHRhc2tRdWV1ZSwgdGltZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1haW5pbmcgdGltZXJzIGFyZSBwZW5kaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaW1lb3V0KGN1cnJlbnRUaW1lKSB7XG4gIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTtcbiAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG5cbiAgaWYgKCFpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCkge1xuICAgIGlmIChwZWVrKHRhc2tRdWV1ZSkgIT09IG51bGwpIHtcbiAgICAgIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3RIb3N0Q2FsbGJhY2soZmx1c2hXb3JrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZpcnN0VGltZXIgPSBwZWVrKHRpbWVyUXVldWUpO1xuXG4gICAgICBpZiAoZmlyc3RUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgZmlyc3RUaW1lci5zdGFydFRpbWUgLSBjdXJyZW50VGltZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsdXNoV29yayhoYXNUaW1lUmVtYWluaW5nLCBpbml0aWFsVGltZSkge1xuXG5cbiAgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSBmYWxzZTtcblxuICBpZiAoaXNIb3N0VGltZW91dFNjaGVkdWxlZCkge1xuICAgIC8vIFdlIHNjaGVkdWxlZCBhIHRpbWVvdXQgYnV0IGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZC4gQ2FuY2VsIGl0LlxuICAgIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBjYW5jZWxIb3N0VGltZW91dCgpO1xuICB9XG5cbiAgaXNQZXJmb3JtaW5nV29yayA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB3b3JrTG9vcChoYXNUaW1lUmVtYWluaW5nLCBpbml0aWFsVGltZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoY3VycmVudFRhc2sgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICAgICAgICAgIG1hcmtUYXNrRXJyb3JlZChjdXJyZW50VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgICAgIGN1cnJlbnRUYXNrLmlzUXVldWVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gY2F0Y2ggaW4gcHJvZCBjb2RlIHBhdGguXG4gICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgaXNQZXJmb3JtaW5nV29yayA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdvcmtMb29wKGhhc1RpbWVSZW1haW5pbmcsIGluaXRpYWxUaW1lKSB7XG4gIHZhciBjdXJyZW50VGltZSA9IGluaXRpYWxUaW1lO1xuICBhZHZhbmNlVGltZXJzKGN1cnJlbnRUaW1lKTtcbiAgY3VycmVudFRhc2sgPSBwZWVrKHRhc2tRdWV1ZSk7XG5cbiAgd2hpbGUgKGN1cnJlbnRUYXNrICE9PSBudWxsICYmICEoZW5hYmxlU2NoZWR1bGVyRGVidWdnaW5nICkpIHtcbiAgICBpZiAoY3VycmVudFRhc2suZXhwaXJhdGlvblRpbWUgPiBjdXJyZW50VGltZSAmJiAoIWhhc1RpbWVSZW1haW5pbmcgfHwgc2hvdWxkWWllbGRUb0hvc3QoKSkpIHtcbiAgICAgIC8vIFRoaXMgY3VycmVudFRhc2sgaGFzbid0IGV4cGlyZWQsIGFuZCB3ZSd2ZSByZWFjaGVkIHRoZSBkZWFkbGluZS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFjayA9IGN1cnJlbnRUYXNrLmNhbGxiYWNrO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY3VycmVudFRhc2suY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50VGFzay5wcmlvcml0eUxldmVsO1xuICAgICAgdmFyIGRpZFVzZXJDYWxsYmFja1RpbWVvdXQgPSBjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSA8PSBjdXJyZW50VGltZTtcblxuICAgICAgdmFyIGNvbnRpbnVhdGlvbkNhbGxiYWNrID0gY2FsbGJhY2soZGlkVXNlckNhbGxiYWNrVGltZW91dCk7XG4gICAgICBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGludWF0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3VycmVudFRhc2suY2FsbGJhY2sgPSBjb250aW51YXRpb25DYWxsYmFjaztcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrID09PSBwZWVrKHRhc2tRdWV1ZSkpIHtcbiAgICAgICAgICBwb3AodGFza1F1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZHZhbmNlVGltZXJzKGN1cnJlbnRUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wKHRhc2tRdWV1ZSk7XG4gICAgfVxuXG4gICAgY3VycmVudFRhc2sgPSBwZWVrKHRhc2tRdWV1ZSk7XG4gIH0gLy8gUmV0dXJuIHdoZXRoZXIgdGhlcmUncyBhZGRpdGlvbmFsIHdvcmtcblxuXG4gIGlmIChjdXJyZW50VGFzayAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgIGlmIChmaXJzdFRpbWVyICE9PSBudWxsKSB7XG4gICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgZmlyc3RUaW1lci5zdGFydFRpbWUgLSBjdXJyZW50VGltZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShwcmlvcml0eUxldmVsLCBldmVudEhhbmRsZXIpIHtcbiAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgY2FzZSBMb3dQcmlvcml0eTpcbiAgICBjYXNlIElkbGVQcmlvcml0eTpcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBOb3JtYWxQcmlvcml0eTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmlvcml0eUxldmVsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGV2ZW50SGFuZGxlcigpO1xuICB9IGZpbmFsbHkge1xuICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX25leHQoZXZlbnRIYW5kbGVyKSB7XG4gIHZhciBwcmlvcml0eUxldmVsO1xuXG4gIHN3aXRjaCAoY3VycmVudFByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICAgIC8vIFNoaWZ0IGRvd24gdG8gbm9ybWFsIHByaW9yaXR5XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBbnl0aGluZyBsb3dlciB0aGFuIG5vcm1hbCBwcmlvcml0eSBzaG91bGQgcmVtYWluIGF0IHRoZSBjdXJyZW50IGxldmVsLlxuICAgICAgcHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV93cmFwQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgdmFyIHBhcmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlzIGlzIGEgZm9yayBvZiBydW5XaXRoUHJpb3JpdHksIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlLlxuICAgIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHBhcmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhwcmlvcml0eUxldmVsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICB2YXIgc3RhcnRUaW1lO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucyAhPT0gbnVsbCkge1xuICAgIHZhciBkZWxheSA9IG9wdGlvbnMuZGVsYXk7XG5cbiAgICBpZiAodHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyAmJiBkZWxheSA+IDApIHtcbiAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lICsgZGVsYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgfVxuXG4gIHZhciB0aW1lb3V0O1xuXG4gIHN3aXRjaCAocHJpb3JpdHlMZXZlbCkge1xuICAgIGNhc2UgSW1tZWRpYXRlUHJpb3JpdHk6XG4gICAgICB0aW1lb3V0ID0gSU1NRURJQVRFX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgICB0aW1lb3V0ID0gVVNFUl9CTE9DS0lOR19QUklPUklUWV9USU1FT1VUO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElkbGVQcmlvcml0eTpcbiAgICAgIHRpbWVvdXQgPSBJRExFX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgICB0aW1lb3V0ID0gTE9XX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRpbWVvdXQgPSBOT1JNQUxfUFJJT1JJVFlfVElNRU9VVDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgdGltZW91dDtcbiAgdmFyIG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHRhc2tJZENvdW50ZXIrKyxcbiAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgcHJpb3JpdHlMZXZlbDogcHJpb3JpdHlMZXZlbCxcbiAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICBleHBpcmF0aW9uVGltZTogZXhwaXJhdGlvblRpbWUsXG4gICAgc29ydEluZGV4OiAtMVxuICB9O1xuXG4gIGlmIChzdGFydFRpbWUgPiBjdXJyZW50VGltZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkZWxheWVkIHRhc2suXG4gICAgbmV3VGFzay5zb3J0SW5kZXggPSBzdGFydFRpbWU7XG4gICAgcHVzaCh0aW1lclF1ZXVlLCBuZXdUYXNrKTtcblxuICAgIGlmIChwZWVrKHRhc2tRdWV1ZSkgPT09IG51bGwgJiYgbmV3VGFzayA9PT0gcGVlayh0aW1lclF1ZXVlKSkge1xuICAgICAgLy8gQWxsIHRhc2tzIGFyZSBkZWxheWVkLCBhbmQgdGhpcyBpcyB0aGUgdGFzayB3aXRoIHRoZSBlYXJsaWVzdCBkZWxheS5cbiAgICAgIGlmIChpc0hvc3RUaW1lb3V0U2NoZWR1bGVkKSB7XG4gICAgICAgIC8vIENhbmNlbCBhbiBleGlzdGluZyB0aW1lb3V0LlxuICAgICAgICBjYW5jZWxIb3N0VGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNIb3N0VGltZW91dFNjaGVkdWxlZCA9IHRydWU7XG4gICAgICB9IC8vIFNjaGVkdWxlIGEgdGltZW91dC5cblxuXG4gICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrLnNvcnRJbmRleCA9IGV4cGlyYXRpb25UaW1lO1xuICAgIHB1c2godGFza1F1ZXVlLCBuZXdUYXNrKTtcbiAgICAvLyB3YWl0IHVudGlsIHRoZSBuZXh0IHRpbWUgd2UgeWllbGQuXG5cblxuICAgIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgJiYgIWlzUGVyZm9ybWluZ1dvcmspIHtcbiAgICAgIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3RIb3N0Q2FsbGJhY2soZmx1c2hXb3JrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3VGFzaztcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfcGF1c2VFeGVjdXRpb24oKSB7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uKCkge1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgJiYgIWlzUGVyZm9ybWluZ1dvcmspIHtcbiAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgcmVxdWVzdEhvc3RDYWxsYmFjayhmbHVzaFdvcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlKCkge1xuICByZXR1cm4gcGVlayh0YXNrUXVldWUpO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjayh0YXNrKSB7XG4gIC8vIHJlbW92ZSBmcm9tIHRoZSBxdWV1ZSBiZWNhdXNlIHlvdSBjYW4ndCByZW1vdmUgYXJiaXRyYXJ5IG5vZGVzIGZyb20gYW5cbiAgLy8gYXJyYXkgYmFzZWQgaGVhcCwgb25seSB0aGUgZmlyc3Qgb25lLilcblxuXG4gIHRhc2suY2FsbGJhY2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQcmlvcml0eUxldmVsO1xufVxuXG52YXIgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbnZhciBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xudmFyIHRhc2tUaW1lb3V0SUQgPSAtMTsgLy8gU2NoZWR1bGVyIHBlcmlvZGljYWxseSB5aWVsZHMgaW4gY2FzZSB0aGVyZSBpcyBvdGhlciB3b3JrIG9uIHRoZSBtYWluXG4vLyB0aHJlYWQsIGxpa2UgdXNlciBldmVudHMuIEJ5IGRlZmF1bHQsIGl0IHlpZWxkcyBtdWx0aXBsZSB0aW1lcyBwZXIgZnJhbWUuXG4vLyBJdCBkb2VzIG5vdCBhdHRlbXB0IHRvIGFsaWduIHdpdGggZnJhbWUgYm91bmRhcmllcywgc2luY2UgbW9zdCB0YXNrcyBkb24ndFxuLy8gbmVlZCB0byBiZSBmcmFtZSBhbGlnbmVkOyBmb3IgdGhvc2UgdGhhdCBkbywgdXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cblxudmFyIGZyYW1lSW50ZXJ2YWwgPSBmcmFtZVlpZWxkTXM7XG52YXIgc3RhcnRUaW1lID0gLTE7XG5cbmZ1bmN0aW9uIHNob3VsZFlpZWxkVG9Ib3N0KCkge1xuICB2YXIgdGltZUVsYXBzZWQgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpIC0gc3RhcnRUaW1lO1xuXG4gIGlmICh0aW1lRWxhcHNlZCA8IGZyYW1lSW50ZXJ2YWwpIHtcbiAgICAvLyBUaGUgbWFpbiB0aHJlYWQgaGFzIG9ubHkgYmVlbiBibG9ja2VkIGZvciBhIHJlYWxseSBzaG9ydCBhbW91bnQgb2YgdGltZTtcbiAgICAvLyBzbWFsbGVyIHRoYW4gYSBzaW5nbGUgZnJhbWUuIERvbid0IHlpZWxkIHlldC5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gVGhlIG1haW4gdGhyZWFkIGhhcyBiZWVuIGJsb2NrZWQgZm9yIGEgbm9uLW5lZ2xpZ2libGUgYW1vdW50IG9mIHRpbWUuIFdlXG5cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdFBhaW50KCkge1xuXG59XG5cbmZ1bmN0aW9uIGZvcmNlRnJhbWVSYXRlKGZwcykge1xuICBpZiAoZnBzIDwgMCB8fCBmcHMgPiAxMjUpIHtcbiAgICAvLyBVc2luZyBjb25zb2xlWydlcnJvciddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcbiAgICBjb25zb2xlWydlcnJvciddKCdmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgJyArICdmb3JjaW5nIGZyYW1lIHJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChmcHMgPiAwKSB7XG4gICAgZnJhbWVJbnRlcnZhbCA9IE1hdGguZmxvb3IoMTAwMCAvIGZwcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVzZXQgdGhlIGZyYW1lcmF0ZVxuICAgIGZyYW1lSW50ZXJ2YWwgPSBmcmFtZVlpZWxkTXM7XG4gIH1cbn1cblxudmFyIHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHNjaGVkdWxlZEhvc3RDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIHN0YXJ0IHRpbWUgc28gd2UgY2FuIG1lYXN1cmUgaG93IGxvbmcgdGhlIG1haW4gdGhyZWFkXG4gICAgLy8gaGFzIGJlZW4gYmxvY2tlZC5cblxuICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIHZhciBoYXNUaW1lUmVtYWluaW5nID0gdHJ1ZTsgLy8gSWYgYSBzY2hlZHVsZXIgdGFzayB0aHJvd3MsIGV4aXQgdGhlIGN1cnJlbnQgYnJvd3NlciB0YXNrIHNvIHRoZVxuICAgIC8vIGVycm9yIGNhbiBiZSBvYnNlcnZlZC5cbiAgICAvL1xuICAgIC8vIEludGVudGlvbmFsbHkgbm90IHVzaW5nIGEgdHJ5LWNhdGNoLCBzaW5jZSB0aGF0IG1ha2VzIHNvbWUgZGVidWdnaW5nXG4gICAgLy8gdGVjaG5pcXVlcyBoYXJkZXIuIEluc3RlYWQsIGlmIGBzY2hlZHVsZWRIb3N0Q2FsbGJhY2tgIGVycm9ycywgdGhlblxuICAgIC8vIGBoYXNNb3JlV29ya2Agd2lsbCByZW1haW4gdHJ1ZSwgYW5kIHdlJ2xsIGNvbnRpbnVlIHRoZSB3b3JrIGxvb3AuXG5cbiAgICB2YXIgaGFzTW9yZVdvcmsgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGhhc01vcmVXb3JrID0gc2NoZWR1bGVkSG9zdENhbGxiYWNrKGhhc1RpbWVSZW1haW5pbmcsIGN1cnJlbnRUaW1lKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGhhc01vcmVXb3JrKSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgbW9yZSB3b3JrLCBzY2hlZHVsZSB0aGUgbmV4dCBtZXNzYWdlIGV2ZW50IGF0IHRoZSBlbmRcbiAgICAgICAgLy8gb2YgdGhlIHByZWNlZGluZyBvbmUuXG4gICAgICAgIHNjaGVkdWxlUGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICAgICAgICBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICB9IC8vIFlpZWxkaW5nIHRvIHRoZSBicm93c2VyIHdpbGwgZ2l2ZSBpdCBhIGNoYW5jZSB0byBwYWludCwgc28gd2UgY2FuXG59O1xuXG52YXIgc2NoZWR1bGVQZXJmb3JtV29ya1VudGlsRGVhZGxpbmU7XG5cbmlmICh0eXBlb2YgbG9jYWxTZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gTm9kZS5qcyBhbmQgb2xkIElFLlxuICAvLyBUaGVyZSdzIGEgZmV3IHJlYXNvbnMgZm9yIHdoeSB3ZSBwcmVmZXIgc2V0SW1tZWRpYXRlLlxuICAvL1xuICAvLyBVbmxpa2UgTWVzc2FnZUNoYW5uZWwsIGl0IGRvZXNuJ3QgcHJldmVudCBhIE5vZGUuanMgcHJvY2VzcyBmcm9tIGV4aXRpbmcuXG4gIC8vIChFdmVuIHRob3VnaCB0aGlzIGlzIGEgRE9NIGZvcmsgb2YgdGhlIFNjaGVkdWxlciwgeW91IGNvdWxkIGdldCBoZXJlXG4gIC8vIHdpdGggYSBtaXggb2YgTm9kZS5qcyAxNSssIHdoaWNoIGhhcyBhIE1lc3NhZ2VDaGFubmVsLCBhbmQganNkb20uKVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzIwNzU2XG4gIC8vXG4gIC8vIEJ1dCBhbHNvLCBpdCBydW5zIGVhcmxpZXIgd2hpY2ggaXMgdGhlIHNlbWFudGljIHdlIHdhbnQuXG4gIC8vIElmIG90aGVyIGJyb3dzZXJzIGV2ZXIgaW1wbGVtZW50IGl0LCBpdCdzIGJldHRlciB0byB1c2UgaXQuXG4gIC8vIEFsdGhvdWdoIGJvdGggb2YgdGhlc2Ugd291bGQgYmUgaW5mZXJpb3IgdG8gbmF0aXZlIHNjaGVkdWxpbmcuXG4gIHNjaGVkdWxlUGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lID0gZnVuY3Rpb24gKCkge1xuICAgIGxvY2FsU2V0SW1tZWRpYXRlKHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSk7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gRE9NIGFuZCBXb3JrZXIgZW52aXJvbm1lbnRzLlxuICAvLyBXZSBwcmVmZXIgTWVzc2FnZUNoYW5uZWwgYmVjYXVzZSBvZiB0aGUgNG1zIHNldFRpbWVvdXQgY2xhbXBpbmcuXG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIHZhciBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBwZXJmb3JtV29ya1VudGlsRGVhZGxpbmU7XG5cbiAgc2NoZWR1bGVQZXJmb3JtV29ya1VudGlsRGVhZGxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcG9ydC5wb3N0TWVzc2FnZShudWxsKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIFdlIHNob3VsZCBvbmx5IGZhbGxiYWNrIGhlcmUgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzLlxuICBzY2hlZHVsZVBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhbFNldFRpbWVvdXQocGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEhvc3RDYWxsYmFjayhjYWxsYmFjaykge1xuICBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICBpZiAoIWlzTWVzc2FnZUxvb3BSdW5uaW5nKSB7XG4gICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSB0cnVlO1xuICAgIHNjaGVkdWxlUGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdEhvc3RUaW1lb3V0KGNhbGxiYWNrLCBtcykge1xuICB0YXNrVGltZW91dElEID0gbG9jYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjYWxsYmFjayhleHBvcnRzLnVuc3RhYmxlX25vdygpKTtcbiAgfSwgbXMpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxIb3N0VGltZW91dCgpIHtcbiAgbG9jYWxDbGVhclRpbWVvdXQodGFza1RpbWVvdXRJRCk7XG4gIHRhc2tUaW1lb3V0SUQgPSAtMTtcbn1cblxudmFyIHVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHJlcXVlc3RQYWludDtcbnZhciB1bnN0YWJsZV9Qcm9maWxpbmcgPSAgbnVsbDtcblxuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHkgPSBJZGxlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5ID0gSW1tZWRpYXRlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5ID0gTG93UHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5ID0gTm9ybWFsUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZyA9IHVuc3RhYmxlX1Byb2ZpbGluZztcbmV4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHkgPSBVc2VyQmxvY2tpbmdQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sgPSB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb24gPSB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGUgPSBmb3JjZUZyYW1lUmF0ZTtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwgPSB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbDtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUgPSB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dCA9IHVuc3RhYmxlX25leHQ7XG5leHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uID0gdW5zdGFibGVfcGF1c2VFeGVjdXRpb247XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHVuc3RhYmxlX3JlcXVlc3RQYWludDtcbmV4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5ID0gdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrID0gdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQgPSBzaG91bGRZaWVsZFRvSG9zdDtcbmV4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrID0gdW5zdGFibGVfd3JhcENhbGxiYWNrO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnc2NoZWR1bGVyJztcblxuaW1wb3J0IF9kZWZhdWx0IGZyb20gJ3NjaGVkdWxlcic7XG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6Ii9kb2NzL291dCJ9