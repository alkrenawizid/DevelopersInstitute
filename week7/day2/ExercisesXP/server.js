const http = require("http");
const { json } = require("node:stream/consumers");

// 1. HTTP
// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.end(`
//         <h2>This is my first response</h2>
//         <h2>This is my second</h2>
//         <p>This is my third response</p>
//         `);
//   }).listen(3000, () => console.log("i am listening"));
  
// 2. HTTP & JSON
const user = {
  firstname: 'John',
  lastname: 'Doe'
}

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));

  }).listen(3000, () => console.log("i am listening")); 