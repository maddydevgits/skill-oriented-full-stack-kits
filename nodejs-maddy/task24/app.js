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

app.post('/madhu',encodeUrl,function(request,response){
    console.log(request.body.name);
    let name=request.body.name;
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO fullstack (name) VALUES ('"+name+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
    response.end('data submitted');
})


  
  
app.listen(2000)