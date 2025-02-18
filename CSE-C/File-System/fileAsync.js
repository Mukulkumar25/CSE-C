// const fspromise = require('fs').promises;
const fspromise = require('fs/promises');

const read = async() =>{
  const data = await fspromise.readFile("./data.txt", "utf-8");
  console.log(data);
}
read();

console.log("first");
console.log("second");
console.log("third");
console.log("fourth");

module.exports = read;