function dateTime() {
    var dateTime = new Date();
    var date = dateTime.toLocaleDateString();
    

    var dateTimeString = date;
    
    document.getElementById("dateTime").innerText = dateTimeString;
}
setInterval(dateTime, 1000);

let lastUpdated = new Date(document.lastModified).toLocaleString();
document.getElementById("lastUpdated").innerHTML = lastUpdated;

let copyrightYear = new Date().getFullYear();
document.querySelector("#copyrightYear").innerHTML = copyrightYear;