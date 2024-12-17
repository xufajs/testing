const assert = require('node:assert');
const test = require('node:test');
const expect = require('./expect.js');
const globals = require('./globals.json');

module.exports = {
  assert,
  ...test,
  ...expect,
  globals,
};
