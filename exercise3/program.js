const fs = require('fs');

try {
  var text = fs.readFileSync(process.argv[2]).toString();
  var newlines = text.split('\n');
  console.log(newlines.length - 1);
}
catch (err) {
  console.log(err);
}
