const blue = document.querySelector('#numberBlue');
const red = document.querySelector('#numberRed');
const result = document.querySelector('.result');

if (window.Worker) {
  const workerBlue = new Worker('workerBlue.js');
  const workerRed = new Worker('workerRed.js');

  blue.onchange = function() {
    workerBlue.postMessage([blue.value, red.value]);
    console.log(
      '%c➔ Message posted to blue worker',
      'color: #4285F4; font-size: 20px;'
    );
  };

  red.onchange = function() {
    workerRed.postMessage([blue.value, red.value]);
    console.log(
      '%c➔ Message posted to red worker',
      'color: #DB4437; font-size: 20px;'
    );
  };

  workerBlue.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
