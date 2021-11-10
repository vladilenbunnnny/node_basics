//Modules
// Common JS - every file in NODE is a module
const { vlad, mom, dad } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(mom);
sayHi(vlad);
sayHi(mom);
sayHi(dad);

console.log(data);
