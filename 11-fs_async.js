const { readFile, writeFile } = require("fs");

//It also shows an example what CALLBACK HELL is:

console.log("Started");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFile("./content/result-async.txt", `Here is the async result: ${first}, -------, ${second}`, (wErr, wRes) => {
      if (wErr) {
        console.log(wErr);
        return;
      }
      console.log("Done with the job");
    });
  });
});

console.log("Finished");
