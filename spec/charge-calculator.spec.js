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

});
