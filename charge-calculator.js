var ChargeCalculator = function() {};

var validateTimeParameters = function(startTime, endTime) {
  if (endTime <= startTime) {
    throw new Error("Start time must be before end time");
  }

  if (startTime.getMinutes() !== 0 || endTime.getMinutes() !== 0) {
    throw new Error("Fractional hours are not permitted");
  }

  if (startTime.getHours() < 17) {
    throw new Error("Start time can not be earlier than 5:00 PM");
  }

  if (endTime.getHours() > 4 && endTime.getHours() <= 17) {
    throw new Error("End time can not be after 4:00 AM");
  }
}

ChargeCalculator.prototype.calculate = function(startTime, endTime) {
  validateTimeParameters(startTime, endTime);
  return (endTime.getHours() - startTime.getHours()) * 12;
};

module.exports = ChargeCalculator;
