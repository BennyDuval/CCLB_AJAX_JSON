import requests
import xmltodict
import json
from flask import Flask
from flask import render_template


#creating an array to hold future JSON data
tojson = []

#Array of links to XML data to be transformed
url =['http://neocando.case.edu/cando/housingReport/lbxml.jsp?parcel=109-02-088', 'http://neocando.case.edu/cando/housingReport/lbxml.jsp?parcel=136-18-117', 'http://neocando.case.edu/cando/housingReport/lbxml.jsp?parcel=109-21-100', 'http://neocando.case.edu/cando/housingReport/lbxml.jsp?parcel=672-06-054', 'http://neocando.case.edu/cando/housingReport/lbxml.jsp?parcel=673-12-062'] 

#Create array of image files to diplay on html page
img = ["https://github.com/CCLRC/code-test/blob/master/images/109-02-088_main_pic.JPG?raw=true", "https://github.com/CCLRC/code-test/blob/master/images/109-21-100_main_pic.JPG?raw=true", "https://github.com/CCLRC/code-test/blob/master/images/136-18-117_main_pic.JPG?raw=true", "https://github.com/CCLRC/code-test/blob/master/images/672-06-054_main_pic.JPG?raw=true", "https://github.com/CCLRC/code-test/blob/master/images/673-12-062_main_pic.JPG?raw=true"]

#For loop to transform data found in XML links
for x in url:
  # Connect to the URL and downloading the data in XML form
  response = requests.get(x)

  #Removing the blank lines with strip and converting the text into a python dictionary
  o = xmltodict.parse(response.text.strip())

  #Converting the python dictionary into JSON format and adding to the array of JSON data.
  tojson.append(json.dumps(o))




app = Flask(__name__)
@app.route("/")
def index():

  #rendering the webpage to display the data transformed earlier. An array of the JSON data along with an array of the image links is passed into the html file 
  return render_template('index.html', data=tojson,img_links=img)

#Routine to run the flask application.
if __name__=='__main__':
  app.run(debug=True,host ='0.0.0.0',port = 8080)


