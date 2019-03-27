let arr = null;

onmessage = function({ data }) {
  arr = new Uint8Array(data);
  console.log(data);
  console.log(arr);
  arr[0] = 100;
  //   console.log(arr);
  postMessage('done');
};
