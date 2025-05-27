/* Coding exercise */
function lifeInWeeks(age) {
    var targetAge = 90;
    var x = (targetAge - age) * 365;
    var y = (targetAge - age) * 52;
    var z = (targetAge - age) * 12;
    console.log("You have " + x + " days, or " + y + " weeks, or " + z + " months left." );
  }

  function howOldInDaysWeeksOrMonths(age) {
    var x = age * 365;
    var y = age * 52;
    var z = age * 12;
    console.log("You have been alive for a total of " + x + " days, or " + y + " weeks, or " + z + " months." );
  }