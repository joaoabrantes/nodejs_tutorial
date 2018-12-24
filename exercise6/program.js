let modFunct = require('./module.js');

modFunct(process.argv[2], process.argv[3], function(err, files) {
  if (err)
    throw err;
  for (let file of files) {
    console.log(file);
  }
})
