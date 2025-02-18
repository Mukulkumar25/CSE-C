const { error } = require('console');
const fscallback = require('fs');
const read = () => {
  fscallback.readFile("./data.txt", "utf-8", (error, data) => {
    if(error){
      console.log(error.message);
    }
    else{
      console.log(data)
    }
  })
}
read();
console.log("first");
console.log("second");
console.log("third");
console.log("fourth");