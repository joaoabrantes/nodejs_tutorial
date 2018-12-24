const http = require('http');
const url = require('url');
const strftime = require('strftime') // not required in browsers

const server = http.createServer(function(req, res) {
  let date = url.parse(req.url, true);
  let result;
  let newDate = new Date(date.query.iso);

  if (date.pathname === '/api/parsetime') {
    let jsonDate = {
      hour: newDate.getHours(),
      minute: newDate.getMinutes(),
      second: newDate.getSeconds()
    }
    result = jsonDate;
  } else if (date.pathname === '/api/unixtime') {
    let unixDate = {
      unixtime: newDate.getTime()
    }
    result = unixDate;
  }

  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }
})

server.listen(process.argv[2]);
