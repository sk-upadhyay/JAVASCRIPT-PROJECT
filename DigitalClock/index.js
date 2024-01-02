const digitalClock = document.querySelector(".digitalClock");
const Icon = document.querySelector('.Icon');
const body = document.body; // Corrected this line
const calendar = document.querySelector(".calendar");

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var t = date.getDate();
    var mo = date.getMonth()+1;
    var y = date.getFullYear();

    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    t = t<10?"0"+t:t;
    mo = mo<10?"0"+mo:mo;

    digitalClock.innerHTML = h + " :" + m + " : " + s + " " + session;
    calendar.innerHTML = t + "/" + mo +"/"+y;
    
    setTimeout(showTime, 1000);
}

showTime();

Icon.addEventListener("click", function () {
    body.style.background = body.style.background === "white" ? "black" : "white";
    body.style.color =body.style.color==="black"? "white":"black";
});
