var ChargeCalculator = require('../charge-calculator');

describe('Charge Calculator', function() {
  var chargeCalculator = new ChargeCalculator();

  it('calculates total charge for 1 hour before bedtime', function() {
    var startTime = new Date(2016, 2, 13, 17, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 18, 0, 0, 0);
    expect(chargeCalculator.calculate(startTime, endTime)).toEqual(12);
  });

  it('calculates total charge for 2 hours before bedtime', function() {
    var startTime = new Date(2016, 2, 13, 17, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 19, 0, 0, 0);
    expect(chargeCalculator.calculate(startTime, endTime)).toEqual(24);
  });

  it('calculates total charge from 5pm to 8pm', function() {
    var startTime = new Date(2016, 2, 13, 17, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 20, 0, 0, 0);
    expect(chargeCalculator.calculate(startTime, endTime)).toEqual(36);
  });

  it('throws an error when start time is before 5pm', function() {
    var startTime = new Date(2016, 2, 13, 16, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 18, 0, 0, 0);
    expect(chargeCalculator.calculate.bind(null, startTime, endTime)).toThrow();
  });

  it('throws an error when end time is after 4am', function() {
    var startTime = new Date(2016, 2, 13, 17, 0, 0, 0);
    var endTime = new Date(2016, 2, 14, 5, 0, 0, 0);
    expect(chargeCalculator.calculate.bind(null, startTime, endTime)).toThrow();
  });

  it('throws an error when end time is before start time', function() {
    var startTime = new Date(2016, 2, 13, 19, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 18, 0, 0, 0);
    expect(chargeCalculator.calculate.bind(null, startTime, endTime)).toThrow();
  });

  it('throws an error when fractional start time is used', function() {
    var startTime = new Date(2016, 2, 13, 17, 30, 0, 0);
    var endTime = new Date(2016, 2, 13, 23, 0, 0, 0);
    expect(chargeCalculator.calculate.bind(null, startTime, endTime)).toThrow();
  });

  it('throws an error when fractional end time is used', function() {
    var startTime = new Date(2016, 2, 13, 17, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 23, 30, 0, 0);
    expect(chargeCalculator.calculate.bind(null, startTime, endTime)).toThrow();
  });

  it('calculates one hour of babysitting after midnight', function() {
    var startTime = new Date(2016, 2, 14, 0, 0, 0, 0);
    var endTime = new Date(2016, 2, 14, 1, 0, 0, 0);
    expect(chargeCalculator.calculate(startTime, endTime)).toEqual(16);
  });

  it('calculates one hour of babysitting between bedtime and midnight', function() {
    var startTime = new Date(2016, 2, 13, 20, 0, 0, 0);
    var endTime = new Date(2016, 2, 13, 21, 0, 0, 0);
    expect(chargeCalculator.calculate(startTime, endTime)).toEqual(8);
  });

  it('calculates the maximum charge for a full night', function() {
    var startTime = new Date(2016, 2, 13, 17, 0, 0, 0);
    var endTime = new Date(2016, 2, 14, 4, 0, 0, 0);
    expect(chargeCalculator.calculate(startTime, endTime)).toEqual(132);
  });

});
