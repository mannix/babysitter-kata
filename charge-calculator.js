var ChargeCalculator = function() {};

var normalRate = 12;
var bedtimeRate = 8;
var overtimeRate = 16;

var earliestStart = 17;
var bedtime = 20;
var midnight = 24;
var latestEnd = 4;

var validateTimeParameters = function(startTime, endTime) {
  if (endTime <= startTime) {
    throw new Error("Start time must be before end time");
  }

  if (startTime.getMinutes() !== 0 || endTime.getMinutes() !== 0) {
    throw new Error("Fractional hours are not permitted");
  }

  if (startTime.getHours() < earliestStart && startTime.getHours() > latestEnd) {
    throw new Error("Start time can not be earlier than 5:00 PM");
  }

  if (endTime.getHours() > latestEnd && endTime.getHours() <= earliestStart) {
    throw new Error("End time can not be after 4:00 AM");
  }
}

var totalHours = function(startTime, endTime) {
  return (endTime - startTime) / 1000 / 60 / 60;
}

ChargeCalculator.prototype.calculate = function(startTime, endTime) {
  validateTimeParameters(startTime, endTime);

  var total = 0;
  var length = totalHours(startTime, endTime);
  var startHour = startTime.getHours();

  startHour = startHour === 0 ? midnight : startHour;

  for (hour = startHour; hour < startHour + length; hour++) {
    if (hour >= earliestStart && hour < bedtime) {
      total += normalRate;
    } else if (hour >= bedtime && hour < midnight) {
      total += bedtimeRate;
    } else if (hour >= midnight && hour <= midnight + latestEnd) {
      total += overtimeRate;
    }
  }

  return total;
};

module.exports = ChargeCalculator;
