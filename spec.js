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
  it('for same year and month should return month name and days', function() {
    var input = ['2016-07-01', '2016-07-04'];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ["July 1st","4th"];
    expect(actual).to.eql(expected);
  })
});

describe('#splitDate', function(){
  it('should split the date', function() {
    var input = '2016-07-01';
    var actual = challenge.splitDate(input);
    var expected = [2016,7,1];
    expect(actual).to.eql(expected);
  })
});

describe('#monthName', function(){
  it('given 7 should return the July', function() {
    var input = 7;
    var actual = challenge.monthName(input);
    var expected = 'July';
    expect(actual).to.eql(expected);
  })
});

describe('#ordinal', function(){
  it('given 1 should return the 1st', function() {
    var input = 1;
    var actual = challenge.ordinal(input);
    var expected = '1st';
    expect(actual).to.eql(expected);
  })
});

describe('#ordinal', function(){
  it('given 22 should return the 2nd', function() {
    var input = 22;
    var actual = challenge.ordinal(input);
    var expected = '22nd';
    expect(actual).to.eql(expected);
  })
});

describe('#ordinal', function(){
  it('given 11 should return the 11th', function() {
    var input = 11;
    var actual = challenge.ordinal(input);
    var expected = '11th';
    expect(actual).to.eql(expected);
  })
});

describe('#ordinal', function(){
  it('given 20 should return the 20th', function() {
    var input = 20;
    var actual = challenge.ordinal(input);
    var expected = '20th';
    expect(actual).to.eql(expected);
  })
});

describe('#ordinal', function(){
  it('given 23 should return the 23rd', function() {
    var input = 23;
    var actual = challenge.ordinal(input);
    var expected = '23rd';
    expect(actual).to.eql(expected);
  })
});

describe('#makeFriendlyDates', function(){
  it('for close months return month name and day', function() {
    var input = ["2016-12-01", "2017-02-03"];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ["December 1st","February 3rd"];
    expect(actual).to.eql(expected);
  })
});

describe('#makeFriendlyDates', function(){
  it('for different month same year should return month and day', function() {
    var input = ["2017-03-01", "2017-05-05"];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ['March 1st, 2017',"May 5th"];
    expect(actual).to.eql(expected);
  })
});

describe('#makeFriendlyDates', function(){
  it('for difference more than 1 between years', function() {
    var input = ["2016-12-01", "2018-02-03"];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ['December 1st, 2016','February 3rd, 2018'];
    expect(actual).to.eql(expected);
  })
});

describe('#makeFriendlyDates', function(){
  it('for the same dates', function() {
    var input = ["2018-01-13", "2018-01-13"];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ["January 13th, 2018"];
    expect(actual).to.eql(expected);
  })
});

describe('#makeFriendlyDates', function(){
  it('for difference less than one year', function() {
    var input = ["2022-09-05", "2023-09-04"];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ["September 5th, 2022","September 4th"];
    expect(actual).to.eql(expected);
  })
});

describe('#makeFriendlyDates', function(){
  it('for different year same month and day', function() {
    var input = ["2022-09-05", "2023-09-05"];
    var actual = challenge.makeFriendlyDates(input);
    var expected = ["September 5th, 2022","September 5th, 2023"];
    expect(actual).to.eql(expected);
  })
});
