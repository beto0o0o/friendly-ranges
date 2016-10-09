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
    if ( firstParts[0] == secondParts[0] &&
         firstParts[1] == secondParts[1] ) {
           if (firstParts[2] == secondParts[2]) {
             return [monthName + ' ' + firstOrdinal + "," + " " + firstParts[0]];
           }
           else {
             return [monthName + ' ' + firstOrdinal, secondOrdinal];
           }
    }

    if (firstParts[0] != secondParts[0] && firstParts[1] != secondParts[1]) {
      if (secondParts[0] - firstParts[0] > 1) {
        return [monthName + " " + firstOrdinal + "," + " " + firstParts[0], secondMonthName + " " + secondOrdinal + "," + " " +secondParts[0]];
      }
      else {
        return [monthName + " " + firstOrdinal, secondMonthName + " " + secondOrdinal];
      }
    }

    if (firstParts[0] == secondParts[0] && firstParts[1] != secondParts[1]) {
      return [monthName + " " + firstOrdinal + "," + " " + firstParts[0], secondMonthName + " " + secondOrdinal];
    }

    if (secondParts[0] - firstParts[0] == 1 ) {
      if (firstParts[1] > secondParts[1]) {
        return [monthName + " " + firstOrdinal + "," + " " + firstParts[0], secondMonthName + " " + secondOrdinal];
      }
      else if (firstParts[1] == secondParts[1] && firstParts[2] > secondParts[2]) {
        return [monthName + " " + firstOrdinal + "," + " " + firstParts[0], secondMonthName + " " + secondOrdinal];
      }
    }

    if (firstParts[1] == secondParts[1] &&
        firstParts[2] == secondParts[2] &&
        firstParts[0] != secondParts[0]) {
          return [monthName + " " + firstOrdinal + "," + " " + firstParts[0], secondMonthName + " " + secondOrdinal + "," + " " +secondParts[0]];
        }
    // return ["July 1st","4th"];
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
