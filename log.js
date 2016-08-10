// Generated by CoffeeScript 1.6.3
(function() {
  var debugEnabled, log, util, write,
    __slice = [].slice;

  util = require('util');

  debugEnabled = function() {
    return (typeof window !== "undefined" && window !== null ? window.debug : void 0) || (process.env.DEBUG && process.env.DEBUG.toLowerCase() !== "false");
  };

  write = function(level, message, formatParams) {
    if (process.env.DISABLE_LOGGING) {
      return;
    }
    if (formatParams) {
      formatParams.unshift(message);
      if (process.env.NOLOGPID || (typeof window !== "undefined" && window !== null)) {
        return util.log("[" + level + "] " + (util.format.apply(util.format, formatParams)));
      } else {
        return util.log("[" + process.pid + "] [" + level + "] " + (util.format.apply(util.format, formatParams)));
      }
    } else {
      if (process.env.NOLOGPID || (typeof window !== "undefined" && window !== null)) {
        return util.log("[" + level + "] " + message);
      } else {
        return util.log("[" + process.pid + "] [" + level + "] " + message);
      }
    }
  };

  log = {
    error: function() {
      var message, others;
      message = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return write("ERROR", message, others);
    },
    info: function() {
      var message, others;
      message = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return write("INFO", message, others);
    },
    warn: function() {
      var message, others;
      message = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return write("WARN", message, others);
    },
    debug: function() {
      var message, others;
      message = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (debugEnabled()) {
        return write("DEBUG", message, others);
      }
    },
    event: function() {
      var message, others;
      message = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (debugEnabled()) {
        return write("EVENT", message, others);
      }
    }
  };

  module.exports = log;

}).call(this);
