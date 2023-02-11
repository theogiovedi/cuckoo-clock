function showTime() {
    const date = new Date();
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();

    var hours = hours >= 10 ? hours : "0" + hours;
    var minutes = minutes >= 10 ? minutes : "0" + minutes;
    var seconds = seconds >= 10 ? seconds : "0" + seconds;
    
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(showTime, 1000);
}

showTime();