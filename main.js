const fs = require('fs');
const promisify = require('promisify-node');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

(async function(){
  let fileNames = await readdir('.');
  fileNames.forEach(async function(fName){
     var fStats = await stat(fName);
     console.log(fName + ": " + fStats.size);
  });
  console.log("done");
})();
