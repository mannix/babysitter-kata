var ChargeCalculator = function() {};

var validateTimeParameters = function(startTime, endTime) {
  if (endTime <= startTime) {
    throw new Error("Start time must be before end time");
  }

  if (startTime.getMinutes() !== 0 || endTime.getMinutes() !== 0) {
    throw new Error("Fractional hours are not permitted");
  }

  if (startTime.getHours() < 17 && startTime.getHours() > 4) {
    throw new Error("Start time can not be earlier than 5:00 PM");
  }

  if (endTime.getHours() > 4 && endTime.getHours() <= 17) {
    throw new Error("End time can not be after 4:00 AM");
  }
}

var totalTime = function(startTime, endTime) {
  return (endTime - startTime) / 1000 / 60 / 60;
}

ChargeCalculator.prototype.calculate = function(startTime, endTime) {
  validateTimeParameters(startTime, endTime);

  var total = 0;
  var length = totalTime(startTime, endTime);
  var startHour = startTime.getHours();

  startHour = startHour === 0 ? 24 : startHour;

  for (hour = startHour; hour < startHour + length; hour++) {
    if (hour >= 17 && hour < 20) {
      total += 12;
    } else if (hour >=20 && hour < 24) {
      total += 8;
    } else if (hour >= 24 && hour <= 28) {
      total += 16;
    }
  }

  return total;
};

module.exports = ChargeCalculator;
