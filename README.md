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
To run the project locally on any machine, the coding was done within repl.it. In order to run it, first visit: https://repl.it/@BenjaminDuval/CCLBAJAXJSON to ensure the server is running the project. Simply visit the site and press the run button located at the top of the page. Within a few seconds, the window in the bottom right section of the screen will show a message similar to ```172.18.0.1 - - [15/Oct/2020 14:07:01] "GET / HTTP/1.1" 200 -```. At this point the project is running.

Once it is verified running, the site can be utilized at https://cclbajaxjson.benjaminduval.repl.co/. 

The site repl.it features an IDE and server space to run projects. It appeared to best the best option for making sure the code would run without burdening users with any installation steps. 


