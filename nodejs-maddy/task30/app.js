var MongoClient=require('mongodb').MongoClient
var express=require('express')
var url=require('url')

var mongo="mongodb://localhost:27017/"

app=express()

app.get('/insertData',function(request,response){
    urlData=url.parse(request.url,true);
    var name=urlData.query.name;
    var rollno=urlData.query.rollno;
    console.log(name,rollno);
    MongoClient.connect(mongo,function(err,db){
        if(err) throw err;
        var dbObject=db.db('kits')
        var feed={'name':name,'rollno':rollno}
        dbObject.collection('student').insertOne(feed,function(err,result){
            if(err) throw err;
            db.close();
        })
    })
    response.end('Data Inserted')
});

app.listen(2000);