//Second example of event loop
//First the imediate tasks goes to the queue together with call back regigistrations
//and the callback executions go into the queue as well
console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

// completed and exited operating systme process
