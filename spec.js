'use strict';
var expect = require('chai').expect;
var challenge = require('./challenge.js');

describe('challenge', function() {
  it('should exist', function() {
    var challengeFile = require('./challenge.js');
    expect(challengeFile).to.not.be.undefined;
  })
});

describe('#makeFriendlyDates', function(){
  it('should return an array', function() {
    var input = ['2016-07-01', '2016-07-04'];
    var actual = challenge.makeFriendlyDates(input);
    expect(actual).to.be.a('array');
  })
});

describe('#makeFriendlyDates', function(){
  it(' should return an array', function() {
    var input = ['2016-07-01', '2016-07-04'];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ["July 1st","4th"];
    expect(actual).to.eql(expected);
  })
});
