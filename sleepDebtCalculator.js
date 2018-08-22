function getSleepHours(day) { // just replace the _ gaps with your sleep time
  if (day === "Monday") {
    return _;
  } else if (day === "Tuesday") {
    return _;
  } else if (day === "Wednesday") {
    return _;
  } else if (day === "Thursday") {
    return _;
  } else if (day === "Friday") {
    return _;
  } else if (day === "Saturday") {
    return _;
  } else if (day === "Sunday") {
    return _;
  }
}

function getActualSleepHours() {
  return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
}

function getIdealSleepHours() {
  var idealHours = _; // introduce here your ideal night sleep time
  return idealHours * 7;
}

// now let me do the rest!

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    var overTime = actualSleepHours - idealSleepHours;
    console.log("You got more sleep than needed.");
    console.log("This week you slept " + overTime + " hours more than your ideal time.");
  } else if (actualSleepHours < idealSleepHours) {
    var underTime = idealSleepHours - actualSleepHours;
    console.log("You should get some rest...");
    console.log("This week you slept " + underTime + " hours less than your ideal time.");
  }
}

calculateSleepDebt();
