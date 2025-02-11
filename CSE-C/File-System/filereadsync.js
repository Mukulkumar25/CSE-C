const fs = require("fs");
// fs.writeFileSync("./data1.txt", "Hello ABES", "utf-8");
// fs.writeFileSync("./data1.txt", "Hello ABESEC", "utf-8");
// fs.appendFileSync("./data1.txt", " Student", "utf-8");
// // fs.renameSync("./data1.txt", "./data3.txt");
// fs.unlinkSync("./data3.txt");

const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
if(data.match("H")){
  console.log("file contains H");
  const newdata = data.replace("H", "ABES");
  fs.writeFileSync("./data.txt", newdata, "utf-8");
  
}

// console.log(data.toString());
