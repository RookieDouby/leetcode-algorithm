function isLeapYear(year) {
    if(year%4 ==0 && year%100 != 0 || year % 400 === 0) {
        return true
    } else {
        return false;
    }
}

function getMonthDays(year, month) {
    var monthArr;
    if(isLeapYear(year)) {
        monthArr = [31, 29, 31, 30, 31, 30,31, 31, 30, 31, 30,31];
    } else {
        monthArr = [31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30,31];
    }
    return monthArr[month];
}

function getWeekNumber(dateStr) {
    var now = new Date(dateStr);
    var year = now.getFullYear();
    var month = now.getMonth();
    var curDate = now.getDate();
    var daysInYear = curDate; //当年第几天
    var getFirstDay = new Date(year + '01-01').getDay();
    var week;
    
    console.log(year)
    console.log(month)
    console.log(curDate)
    for(var i = 0; i < month; i ++) {
        daysInYear += getMonthDays(year, i);
    }

    console.log('当年第一天周',getFirstDay);

    //这个地方没调对...
    if(getFirstDay === 1) {
        week = Math.ceil(daysInYear/getFirstDay)
    } else {
        daysInYear = daysInYear - (7 - getFirstDay + 1);
        week = Math.ceil(daysInYear / 7) + 1; 
    }
    return week;
}

console.log(getWeekNumber('2019-02-08'));

// console.log(isLeapYear(2012));