const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const reqListener = (req, res) => {
  if (req.method == "GET" && req.url == "/") {
    return fs.readFile(path.join(__dirname, "test.json"),(err, data) => {
      if (err) {
        console.log(err);
      }

      fs.writeFileSync(path.join(__dirname,"data.txt"),data);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(data);
    });
  }

  // For other urls
  res.write("Other");
  res.end();
};

const server = http.createServer(reqListener);

server.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
