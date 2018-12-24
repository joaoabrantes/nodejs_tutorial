const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const readable = fs.createReadStream(process.argv[3]);
  readable.on('data', (chunk) => {
    res.write(chunk.toString());
    res.end();
  })
})

server.listen(process.argv[2]);
