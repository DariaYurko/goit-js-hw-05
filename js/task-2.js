"use strict";

/**
 * Returns the average daily value of the number of calories the athlete consumed during the week.
 * @param {Array} days
 * @returns {Number}
 */
function calcAverageCalories(days) {
  if (!days.length) {
    return 0;
  }

  let averageCalories = 0;

  for (const day of days) {
    averageCalories += day.calories;
  }

  return averageCalories / days.length;
}

// Tests ------------------------------------------------------------------------------------------
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
// ----------------------------------------------------------------------------------------- /Tests
