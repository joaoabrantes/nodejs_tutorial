const net = require('net');
const strftime = require('strftime') // not required in browsers

const server = net.createServer(function (socket) {
  let date = new Date();
  socket.write(strftime('%F %H:%M', date))
  socket.end('\n');
})

server.listen(process.argv[2]);
