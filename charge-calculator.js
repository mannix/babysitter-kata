var ChargeCalculator = function() {};

ChargeCalculator.prototype.calculate = function(startTime, endTime) {
  if (startTime.getHours() < 17) {
    throw new Error("Start time can be no earlier than 5:00 PM");
  }

  return (endTime.getHours() - startTime.getHours()) * 12;
};

module.exports = ChargeCalculator;
