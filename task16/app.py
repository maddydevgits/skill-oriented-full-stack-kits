from pymongo import MongoClient

dbClient=MongoClient('localhost','27017')
db=dbClient['kits']
c=db['student']

result=c.find()
for i in result:
    print(i)