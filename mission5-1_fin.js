var week = ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"];
var english_month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var today = new Date();
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

window.onload = function () {
    showCalendar(today, calendar);
};

function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showCalendar(showDate);
}
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showCalendar(showDate);
}

function showCalendar(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var engmonth =  english_month_name[month]
    var calendar = createCalendar(year, month);
    document.querySelector('#header_1').innerHTML = (month + 1) ;
    document.querySelector('#header_2').innerHTML = engmonth ;
    document.querySelector('#header_3').innerHTML = year ;
    document.querySelector('#calendar').innerHTML = calendar;
}

function createCalendar(year, month) {
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                calendar += "<td class='noDate'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                count++;
                calendar += "<td class='noDate'>" + (count - endDate) + "</td>";
            } else {
                count++;
                if(year == today.getFullYear()
                  && month == (today.getMonth())
                  && count == today.getDate()){
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    calendar += "<td>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}