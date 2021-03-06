var _ = require('lodash');

var customMatchers = {
  toHaveField: function() {
    return {
      compare: function(actual, expected) {
        actual = actual.validate();
        var result = {};
        result.pass = (actual.fields && actual.fields[expected]);
        if (!result.pass) {
          result.message =  "Expected " + JSON.stringify(actual) + " to have field " + expected;
        } else {
          result.message =  "Expected " + JSON.stringify(actual) + " to not have field " + expected;
        }
        return result;
      }
    };
  },
  toHaveAction: function() {
    return {
      compare: function(actual, expected) {
        actual = actual.validate();
        var result = {};
        result.pass = (actual.actions && actual.actions[expected]);
        if (!result.pass) {
          result.message =  "Expected " + JSON.stringify(actual) + " to have action " + expected;
        } else {
          result.message =  "Expected " + JSON.stringify(actual) + " to not have action " + expected;
        }
        return result;
      }
    };
  },
  toHaveState: function() {
    return {
      compare: function(actual, expected) {
        actual = actual.validate();
        var result = {};
        result.pass = (actual.states && actual.states[expected]);
        if (!result.pass) {
          result.message =  "Expected " + JSON.stringify(actual) + " to have state " + expected;
        } else {
          result.message =  "Expected " + JSON.stringify(actual) + " to not have state " + expected;
        }
        return result;
      }
    };
  },
  toHaveDataField: function() {
    return {
      compare: function(actual, expected) {
        actual = actual.validate();
        var result = {};
        result.pass = (actual.data_fields && actual.data_fields[expected]);
        if (!result.pass) {
          result.message =  "Expected " + JSON.stringify(actual) + " to have data field " + expected;
        } else {
          result.message =  "Expected " + JSON.stringify(actual) + " to not have data field " + expected;
        }
        return result;
      }
    };
  },
  toHaveError: function() {
    return {
      compare: function(actual, expected) {
        var result = {};
        actual = actual.validate();
        function checkErrors() {
          if (!actual.errors) return false;
          if (typeof expected === "undefined" || expected === null) return true;
          return _.some(actual.errors, function(msg) {
            return _.contains(msg, expected);
          });
        }
        result.pass = checkErrors();
        expected = expected ? " '" + expected + "'" : "";
        if (!result.pass) {
          result.message =  "Expected " + JSON.stringify(actual) + " to have error message" + expected;
        } else {
          result.message =  "Expected " + JSON.stringify(actual) + " to not have error message" + expected;
        }
        return result;
      }
    };
  },


  toHaveParameter: function() {
    return {
      compare: function(actual, expected) {
        actual = actual.validate();
        var result = {};
        result.pass = (actual.parameters && actual.parameters[expected]);
        if (!result.pass) {
          result.message =  "Expected " + JSON.stringify(actual) + " to have parameter " + expected;
        } else {
          result.message =  "Expected " + JSON.stringify(actual) + " to not have parameter " + expected;
        }
        return result;
      }
    };
  }
};

module.exports = customMatchers;
