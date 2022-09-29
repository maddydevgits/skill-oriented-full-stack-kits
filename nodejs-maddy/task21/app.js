var express=require('express')

var app=express()

app.get('/',function(request,response){
    response.end('Maddy')
})

app.listen(2000);