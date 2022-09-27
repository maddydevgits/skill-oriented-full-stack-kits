from pymongo import MongoClient
from flask import Flask,request

dbClient=MongoClient('localhost',27017)
db=dbClient['kits']
c=db['student']

app=Flask(__name__)

@app.route('/getData',methods=['get','post'])
def getData():
    data=[]
    result=c.find()
    for i in result:
        data.append(i)
    return data


