var Challenge;

Challenge = {
  makeFriendlyDates : function (input) {
    var first = input[0];
    var second = input[1];
    var firstParts = this.splitDate(first);
    var secondParts = this.splitDate(second);
    var monthName = this.monthName(firstParts[1]);
    var firstOrdinal = this.ordinal(firstParts[2]);
    var secondOrdinal = this.ordinal(secondParts[2]);
    var secondMonthName = this.monthName(secondParts[1]);
    // when the year is the same
    if ( firstParts[0] == secondParts[0] ) {
      // same month
      if (firstParts[1] == secondParts[1]) {
        // same day
        if (firstParts[2] == secondParts[2]) {
          return [monthName + ' ' + firstOrdinal + "," + " " + firstParts[0]];
        }
        // different day
        else {
          return [monthName + ' ' + firstOrdinal, secondOrdinal];
        }
      }
      // different month
      else {
        return [monthName + " " + firstOrdinal + "," + " " + firstParts[0], secondMonthName + " " + secondOrdinal];
      }
    }
    // when the year is different but month and day are the same
    if (firstParts[0] != secondParts[0]) {
      if (firstParts[1] == secondParts[1]) {
        if (firstParts[2] == secondParts[2]) {
          return [monthName + " " + firstOrdinal + "," + " " + firstParts[0],
           secondMonthName + " " + secondOrdinal + "," + " " +secondParts[0]];
        }
      }
    }
    // when the difference is less than one year
    if (secondParts[0] - firstParts[0] == 1) {
      if (firstParts[1] > secondParts[1]) {
        return [monthName + " " + firstOrdinal,
        secondMonthName + " " + secondOrdinal];
      }
      else if (firstParts[1] == secondParts[1] && firstParts[2] > secondParts[2]) {
        return [monthName + " " + firstOrdinal + "," + " " + firstParts[0],
         secondMonthName + " " + secondOrdinal];
      }
    }
    // when the difference is more than one year
    if (secondParts[0] - firstParts[0] > 1) {
      if (firstParts[1] != secondParts[1]) {
        return [monthName + " " + firstOrdinal + "," + " " + firstParts[0],
         secondMonthName + " " + secondOrdinal + "," + " " +secondParts[0]];
      }
    }
  },

  splitDate: function(date) {
    var parts = date.split('-');
    return parts.map(function(value){
      return parseInt(value, 10);
    });
  },

  monthName: function(monthNumber) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return monthNames[ monthNumber - 1 ];
  },

  ordinal: function(number) {

    if ( number == 1 ||
         number == 21 ||
         number == 31 ) {
        return number + "st";
    }

    if ( number == 2 ||
         number == 22 ) {
        return number + "nd";
    }

    if ( number == 3 ||
         number == 23 ) {
        return number + "rd";
    }

    return number + "th";
  },
};

module.exports = Challenge;
