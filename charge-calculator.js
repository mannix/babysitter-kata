var ChargeCalculator = function() {};

ChargeCalculator.prototype.calculate = function(startTime, endTime) {
  if (startTime.getHours() < 17) {
    throw new Error("Start time can be no earlier than 5:00 PM");
  }

  if (endTime.getHours() > 4 && endTime.getHours() <= 17) {
    throw new Error("End time can not be after 4am");
  }

  return (endTime.getHours() - startTime.getHours()) * 12;
};

module.exports = ChargeCalculator;
