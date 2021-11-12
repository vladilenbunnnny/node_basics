const EventEmitter = require("events");

const customEmitter = new EventEmitter();

///Listen goes first, then we emit smth
customEmitter.on("response", (name, id) => {
  console.log(`Data recieved ${name} with id ${id}`);
});

customEmitter.emit("response", "Vlad", 34);
