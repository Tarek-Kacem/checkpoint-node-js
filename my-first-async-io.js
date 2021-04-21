const fs = require('fs')
let buf = fs.readFile(process.argv[2], (err, data) => {
let str = data.toString();
let arr = str.split('\n');
console.log(arr.length-1)
})
