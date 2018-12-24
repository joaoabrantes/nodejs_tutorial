let fs = require('fs');

fs.readdir(process.argv[2], function(err, files) {
  if (err)
    throw err;
  for (let file of files) {
    if (file.includes('.' + process.argv[3]))
      console.log(file);
    continue;
  }

})
