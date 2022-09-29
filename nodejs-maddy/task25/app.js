var express=require('express')
var app=express()
var fs=require('fs')
var mysql=require('mysql')

var parseUrl = require('body-parser')
let encodeUrl = parseUrl.urlencoded({ extended: false })

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2022Root",
    database: "maddy"
  });

app.get('/',function(request,response){
    fs.readFile('index.html',function(err,data){
        response.end(data);
    })    
})

app.get('/madhu',function(request,response){
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "select * from fullstack";
        con.query(sql, function (err, result) {
          if (err) throw err;
          var a=[]
          for(let item of result) {
            a.push(JSON.stringify(item));
          }
          response.end(a.toString());
        });
      });
})


  
  
app.listen(2000)