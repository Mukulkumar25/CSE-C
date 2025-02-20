const http = require('http');
const users = [
  {id: 1, name:'Rahul', email: 'rahul@example.com'},
  {id: 2, name:'Raj', email: 'raj@example.com'},
  {id: 3, name:'Ramesh', email: 'ramesh@example.com'},
]
const nameData = users.map((user) => {
  return user.name
})

// const nameData = users.forEach((e) => {
//    return e.name
// })
const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(nameData))
});
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
}); 