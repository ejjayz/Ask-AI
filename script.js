// Function to get the current time in the Philippine Standard Time (PST) zone
function getPhilippineTime() {
  // Get the current time
  let now = new Date();

  // Convert the current time to PST (UTC+8)
  let options = { timeZone: 'Asia/Manila', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  let timeInPST = now.toLocaleTimeString('en-US', options);

  return timeInPST;
}

// Update the time every 1 second
let x = setInterval(function () {
  // Get the current time in PST
  let currentTime = getPhilippineTime();

  // Display the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = currentTime;
}, 1000);