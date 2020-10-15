# CCLB_AJAX_JSON
Converting AJAX Data to JSON for display within an HTML frontend utilizing Python and Flask

## METHODOLOGY
The first step was to access the data in AJAX form. A Python script was used to access the data from the webpages it resides on utilizing the ```requests``` library. 

Once the data is retrieved, it is transformed to JSON format using ```xmltodict``` along with ```json``` libraries. Then passed to an HTML page utilizing ```flask``` library. 

The data is viewable from the ```index.html``` file. This file utilizes:
```Bootstrap```
```PopperJS```
```JQuery```
```Google Maps API``` to display all the associated data and images corresponding to the selected property chosen from the drop-down at the top of the webpage.

## Running Locally
To run the project locally on any machine, the coding was done within repl.it. In order to run it, all that is needed is an internet connection and to visit: https://cclbajaxjson.benjaminduval.repl.co/. 

The site repl.it features an IDE and server space to run projects. It appeared to best the best option for making sure the code would run without burdening users with any installation steps. 

The code hosted on repl.it can be seen by visiting: https://repl.it/@BenjaminDuval/CCLBAJAXJSON
