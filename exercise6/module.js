let fs = require('fs');

module.exports = function module(path, ext, callback) {
  let arr = [];

  fs.readdir(path, function(err, files) {
    if (err)
      return callback(err);
      
    for (let file of files) {
      if (file.includes('.' + ext))
        arr.push(file);
      continue;
    }
    return callback(null, arr);
  })
}
