from pymongo import MongoClient
from flask import Flask,request

dbClient=MongoClient('localhost',27017)
db=dbClient['kits']
c=db['student']

app=Flask(__name__)

@app.route('/postData',methods=['get','post'])
def postData():
    name=request.args.get('name')
    rollno=request.args.get('rollno')
    k={}
    k['name']=name
    k['rollno']=rollno
    c.insert_one(k)
    return 'data inserted'

if __name__=="__main__":
    app.run(debug=True)


