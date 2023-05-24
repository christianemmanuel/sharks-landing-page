// Set the date we're counting down to
var countDownDate = new Date("May 23, 2023 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
  
// Find the distance between now and the count down date
var distance = countDownDate - now;
  
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var countdown = document.getElementById("countdown")

if(countdown) {
  document.getElementById("countdown").innerHTML = `<ul>
    <li><div id="days">${days}</div><span>Days</span></li>
    <li><div id="hours">${hours}</div><span>Hours</span></li>
    <li><div id="minutes">${minutes}</div><span>Minutes</span></li>
    <li><div id="seconds">${seconds}</div><span>Seconds</span></li>
    </ul>`
}

// If the count down is over, write some msg
if (distance < 0) {
  clearInterval(x);
  var countDownEvent = document.querySelector('.countdown-event').remove();
  if(countDownEvent) {
    document.querySelector('.countdown-event').remove();
    document.getElementById("countdown").innerHTML = "";
  }
}
}, 1000);