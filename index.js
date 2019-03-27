const blueEl = document.querySelector('#numberBlue');
const redEl = document.querySelector('#numberRed');
const result = document.querySelector('.result');

if (window.Worker) {
  const workerBlue = new Worker('workerBlue.js');
  const workerRed = new Worker('workerRed.js');

  blueEl.onchange = function() {
    // targetWindow.postMessage
    workerBlue.postMessage([blueEl.value, redEl.value]);
    console.log('[MAIN] → Message posted to %cblue worker', 'color: #4285F4;');
  };

  redEl.onchange = function() {
    // targetWindow.postMessage
    workerRed.postMessage([blueEl.value, redEl.value]);
    console.log('[MAIN] → Message posted to %cred worker', 'color: #DB4437;');
  };

  // When receiving a message from blue worker....
  workerBlue.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from %cblue worker', 'color: #4285F4;');
  };

  workerRed.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from %cred worker', 'color: #DB4437;');
  };

  ///////////

  const sharedArrayBuffer = new SharedArrayBuffer(8);
  const workerYellow = new Worker('workerYellow.js');
  workerYellow.postMessage(sharedArrayBuffer);

  workerYellow.onmessage = function(e) {
    // note that i'm not passing the data as an argument here!
    // the data is really shared
    console.log(sharedArrayBuffer);
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
