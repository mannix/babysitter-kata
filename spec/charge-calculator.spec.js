var ChargeCalculator = require('../charge-calculator');

describe('Charge Calculator', function() {
  var chargeCalculator = new ChargeCalculator();

  it('calculates total charge for 1 hour before bedtime', function() {
    expect(chargeCalculator.calculate()).toEqual(12.0);
  });

});
