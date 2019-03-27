// here onmessage means a message received from the main thread
onmessage = function(e) {
  console.log('Blue Worker: Message received from main script');
  let result = e.data[0] * e.data[1];
  // if (isNaN(result)) {
  //   postMessage('Please write two numbers');
  // } else {
  let workerResult = 'Result: ' + result;
  console.log(
    'Blue worker: OK, received data - posting message back to main script'
  );
  // api is targetWindow.postMessage
  postMessage(workerResult);
  // }
};
