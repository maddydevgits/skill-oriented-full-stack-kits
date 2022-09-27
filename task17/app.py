from flask import Flask,render_template,request
from pymongo import MongoClient

dbClient=MongoClient('localhost','27017')
db=dbClient['kits']
c=db['student']

app=Flask(__name__)

@app.route('/')
def homePage():
    return render_template('index.html')

@app.route('/collect',methods=['post','get'])
def collect():
    name=request.form['name']
    rollno=request.form['rollno']
    k={}
    k['name']=name
    k['rollno']=rollno
    c.insert_one(k)
    return 'data stored'

if __name__=="__main__":
    app.run(debug=True)