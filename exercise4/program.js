const fs = require('fs');

fs.readFile(process.argv[2], function (err,data){
  if (err)
    throw err;
  let text = data.toString();
  console.log(text.split('\n').length - 1)
})
