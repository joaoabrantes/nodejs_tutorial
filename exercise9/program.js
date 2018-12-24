const http = require('http');
const bl = require('bl')

let urls = [process.argv[2], process.argv[3], process.argv[4]];
let responses = [];
let count = 0;

for (let i = 0; i <= urls.length; i++) {
  http.get(process.argv[2 + i], (response) => {
    response.pipe(bl(function(err, data) {
      if (err)
        console.log(err);
      responses[i] = data.toString();
      count++;
      if (count === 3)
        printUrls();
    }));
  })
}


function printUrls() {
  for (let response of responses) {
    console.log(response);
  }
}
