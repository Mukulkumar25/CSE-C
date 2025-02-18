// const fspromise = require('fs').promises;
const fspromise = require('fs/promises');

const write = async() =>{
  await fspromise.writeFile("./data3.txt", "My name is MM", "utf-8");
}
write();

console.log("first");
console.log("second");
console.log("third");
console.log("fourth");