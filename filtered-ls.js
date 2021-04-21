const fs = require('fs');
let buf = fs.readFileSync(process.argv[2])
console.log(process.argv)
console.log(buf)
