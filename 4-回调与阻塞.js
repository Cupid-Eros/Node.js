var fs=require("fs");
fs.readFile('input.txt',function (err,data) {
    if(err) return console.log(err);
    console.log(data.toString());
})
console.log("over");//无i/o阻塞