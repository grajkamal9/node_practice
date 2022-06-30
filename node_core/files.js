var fs = require("fs");
// fs.writeFile(
//   "abc.txt",
//   "1. This is kamal\n2. I am programmer",
//   function (err, data) {
//     if (err) throw err;
//   }
// );

// fs.appendFile(
//   "abc.txt",
//   "\n3. I have 9 years of experience\n4. I am programmer by passion",
//   function (err, data) {
//     if (err) throw err;
//     console.log("appended the data to abc.txt");
//   }
// );

// fs.readFile("abc.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   console.log("read the data");
//   console.log(data);
// });

// fs.readFile("abc.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   //console.log("read the data");
//   //console.log(data);
//   //console.log(data.split("\n").length);
//   console.log(data.split("\n").slice(data.split("\n").length - 2));
// });

fs.unlink("abc.txt", function (err) {
  if (err) throw err;
  console.log("deleted the file");
});
