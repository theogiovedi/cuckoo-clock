const date = new Date();
var hours = date.getHours().toString();
var minutes = date.getMinutes().toString();

var hours = hours >= 10 ? hours : "0" + hours;
var minutes = minutes >= 10 ? minutes : "0" + minutes;
document.getElementById("time").innerHTML = "It's " + hours + ":" + minutes;    
