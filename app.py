# https://medium.com/swlh/read-html-form-data-using-get-and-post-method-in-node-js-8d2c7880adbf
from flask import Flask,render_template,request

app=Flask(__name__)

@app.route('/')
def prabhasdarlz():
    return render_template('index.html')

@app.route('/subjects')
def subjectsPage():
    return render_template('subjects.html')

@app.route('/task5')
def task5Page():
    return render_template('task5.html')

@app.route('/submitmsg',methods=['POST'])
def submitmsg():
    return render_template('task5.html',name='Madhu')

@app.route('/resetmsg',methods=['POST'])
def resetmsg():
    return render_template('task5.html',name='')

@app.route('/collectData',methods=['POST'])
def collectData():
    name=request.form['name']
    rollno=request.form['rollno']
    print(name,rollno)
    return ('Data Collected')
if __name__=="__main__":
    app.run(debug=True)