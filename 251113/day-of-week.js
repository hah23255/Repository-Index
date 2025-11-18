// Write a function to return the day of week by day number use switch-case
function dayOfWeek(dayNumber) {
  let day;
  switch (dayNumber) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Error!";
  }
  return day;
}
// Example usage:
console.log(dayOfWeek(3)); // Wednesday
console.log(dayOfWeek(-1)); // Error!
