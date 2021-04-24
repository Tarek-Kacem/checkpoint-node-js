const fs = require("fs");
const path = require("path");
fs.readdir(process.argv[2], (err, files) => {
  let res = files.filter((el) => path.parse(el).ext === "." + process.argv[3]);
  res.map(el => console.log(el))
});
