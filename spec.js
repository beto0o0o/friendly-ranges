'use strict';
var expect = require('chai').expect;

describe('challenge', function() {
  it('should exist', function() {
    var challengeFile = require('./challenge.js');
    expect(challengeFile).to.not.be.undefined;
  })
});
