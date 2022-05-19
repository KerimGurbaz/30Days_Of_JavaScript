const leapYear = function (year) {
    if (year % 400 == 0) {

        return console.log(year + " is a leap year");
    } else if (year % 100 != 0 & year % 4 == 0) {
        return console.log(year + " is a leap year");
    } else {
        return console.log(year + " is not a leap year");
    }
}

const year = prompt("Please, Enter a year : ")
leapYear(year)