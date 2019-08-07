var fs = require("fs");
var StatMode = require("stat-mode");
var colors = require("colors");

//fs.readFile("./text.txt", "utf-8", function(err, data) {
//  console.log("Dane przed zapisem!".yellow);
//  console.log(data);
//  fs.appendFile("./text.txt", "\nA tak wyglądają po zapisie!", function(err) {
//    if (err) throw err;
//    console.log("Zapisano!".yellow);
//   fs.readFile("./text.txt", "utf-8", function(err, data) {
//      console.log("Dane po zapisie".yellow);
//      console.log(data);
//    });
//  });
//});

fs.readdir("../zad-17.7", "utf-8", function(err, data) {
  console.log("Dane przed zapisem!".yellow);
  console.log(data);
  data.forEach(function(el) {
    fs.appendFile("./text.txt", "\n" + el, function(err) {
      if (err) throw err;
      console.log(el.yellow);
    });
    //fs.writeFile("./text.txt", "\n" + data, function(err) {
    //if (err) throw err;
    //console.log("Zapisano!".yellow);
  });
});
