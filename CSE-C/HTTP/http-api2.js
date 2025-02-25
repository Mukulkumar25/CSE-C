const http = require('http');
const axios=require('axios')
const port = 4000;
const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  // const response = await fetch("https://dummyjson.com/products");
  // const data = await response.json();
  const response = await axios.get("https://api.github.com/users");
  const alldata = response.data;
  let frontend = `<html><head></head><body>`
  alldata.forEach((user) => {
    frontend += `<div><h1>${user.login}</h1><img style="border: 2px solid red" src = ${user.avatar_url}><br/><br/><br/></div>`
  });
  frontend += `</body></html>`
  // res.write("HELLO, ")
  res.end(frontend)
});
server.listen(port, () => {
  console.log(`runninng on port: ${port}`)
});