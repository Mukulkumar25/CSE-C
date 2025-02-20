// node --watch http-plain.js


const http = require('http');
const fspromise = require('fs/promises');

const read = async() =>{
  const data = await fspromise.readFile("./home.html", "utf-8");
  const port = 4000;
  // const data = fs.readFileSync("./home.html", "utf-8");
  const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');

    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("Hello CSE-C students");
    res.end(data);
  });

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  }); 
}
read();

// const port = 4000;
// // const data = fs.readFileSync("./home.html", "utf-8");
// const server = http.createServer((req, res) => {
//   // res.statusCode = 200;
//   // res.setHeader('Content-Type', 'text/plain');

//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // res.write("Hello CSE-C students");
//   res.end(data);
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// });