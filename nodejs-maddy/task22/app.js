var express=require('express')
var app=express()
var fs=require('fs')

app.get('/',function(request,response){
    fs.readFile('index.html',function(err,data){
        response.end(data);
    })
})
app.listen(2000);