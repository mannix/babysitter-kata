var ChargeCalculator = function() {};

ChargeCalculator.prototype.calculate = function(startTime, endTime) {
  return (endTime.getHours() - startTime.getHours()) * 12;
};

module.exports = ChargeCalculator;
