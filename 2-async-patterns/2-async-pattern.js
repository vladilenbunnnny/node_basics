const { readFile, writeFile } = require("fs").promises;

const util = require("util");

////USING UTIL to avoid promises
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//readFile(a - address, b -  encoding, c - callback(what to do)));
//./content/first.txt

//////WITH PURE PROMISES BLOCK STARTS
const pathFinal = "./content/final.txt";
const getText = path => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const writeText = (where, what) => {
  return new Promise((resolve, reject) => {
    writeFile(where, what, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
//////WITH PURE PROMISES BLOCK ENDS

const pathOne = "./content/first.txt";
const pathTwo = "./content/second.txt";
// getText(path)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// 1) const start = async () => {
//   const first = await getText(pathOne);
//   console.log(first);
// };

//2):

/// with util promises block starts
const start = async () => {
  try {
    const first = await readFilePromise(pathOne, "utf8");
    console.log(first);
    const second = await readFilePromise(pathTwo, "utf8");
    console.log(second);
    //const newFile = await writeText(pathFinal, `${first} ///// ${second}`);
    await writeFilePromise(pathFinal, `${first} **** ${second}`);
  } catch (error) {
    console.log(error);
  }
};
//start();
/// with util promises block ends

const startNew = async () => {
  try {
    const first = await readFile(pathOne, "utf8");
    console.log(first);
    const second = await readFile(pathTwo, "utf8");
    console.log(second);
    //const newFile = await writeText(pathFinal, `${first} ///// ${second}`);
    await writeFile(pathFinal, `${first} ****7777 ${second}`);
  } catch (error) {
    console.log(error);
  }
};

startNew();
