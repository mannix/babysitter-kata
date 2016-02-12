var ChargeCalculator = require('../charge-calculator');

describe('Charge Calculator', function() {
  var chargeCalculator = new ChargeCalculator();

  it('calculates total charge for 1 hour before bedtime', function() {
    expect(chargeCalculator.calculate(1)).toEqual(12.0);
  });

  it('calculates total charge for 2 hours before bedtime', function() {
    expect(chargeCalculator.calculate(2)).toEqual(24.0);
  });

});
