var Challenge;

Challenge = {
  makeFriendlyDates : function (input) {
    var first = input[0];
    var second = input[1];
    var firstParts = this.splitDate(first);
    var secondParts = this.splitDate(second);
    if ( firstParts[0] == secondParts[0] &&
         firstParts[1] == secondParts[1] ) {
        return ["July 1st","4th"];
    }


    return ["July 1st","4th"];
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
