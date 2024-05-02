function dateTime() {
    var dateTime = new Date();
    var date = dateTime.toLocaleDateString();
    var time = dateTime.toLocaleTimeString();

    var dateTimeString = "Date: " + date + " Time: " + time;
    
    document.getElementById("dateTime").innerText = dateTimeString;
}
setInterval(dateTime, 1000);