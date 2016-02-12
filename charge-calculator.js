var ChargeCalculator = function() {};

ChargeCalculator.prototype.calculate = function(hours) {
  return hours * 12;
};

module.exports = ChargeCalculator;
