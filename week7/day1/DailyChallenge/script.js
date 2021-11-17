const ln = require("./main")
const http = require("http")

const b = 5;

console.log(ln.largeNumber + b);

http
  .createServer((req, res) => {
    res.writeHead(200);

    res.end(
      `<p>My Module is:</p>
      <p>${ln.largeNumber + b}</p>
      <h1>Hi there at the frontend</h1>`
    );
  })
  .listen(3000);