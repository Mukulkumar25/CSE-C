const http = require('http');
const axios=require('axios')
const port = 4000;
const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  // const response = await fetch("https://dummyjson.com/products");
  // const data = await response.json();
  const response = await axios.get("https://dummyjson.com/products");
  const alldata = response.data.products;
  let frontend = `<html><head></head><body>`
  alldata.forEach((product) => {
    frontend += `<div><h1>${product.title}</h1><img style="border: 2px solid red" src = ${product.thumbnail}><h3>Price: $ ${product.price}</h3><br/><br/><br/></div>`
  });
  frontend += `</body></html>`
  // res.write("HELLO, ")
  res.end(frontend)
});
server.listen(port, () => {
  console.log(`runninng on port: ${port}`)
});