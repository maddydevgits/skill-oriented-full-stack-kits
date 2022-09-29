var express=require('express')
var app=express()
var fs=require('fs')

var parseUrl = require('body-parser')
let encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/',function(request,response){
    fs.readFile('index.html',function(err,data){
        response.end(data);
    })    
})

app.post('/madhu',encodeUrl,function(request,response){
    console.log(request.body.name);
    response.end('data submitted')
})

app.listen(2000)