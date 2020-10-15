//Initial variable declarations and data from flask
let j = 0;
let z = 0;
let k = 3;
let content = '';
let latitude = 41.4980552;
let longitude = -81.6881262;

//Creating map API with associated latitude and longitude coordinates
function initialize() {
  var myLatLng = new google.maps.LatLng(latitude, longitude),
    myOptions = {
      zoom: 15,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
    marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });

  marker.setMap(map);
  moveMarker(map, marker);

}

//Controlling marker placement on Maps API
function moveMarker(map, marker) {

  //delayed so you can see it move
  setTimeout(function() {

    marker.setPosition(new google.maps.LatLng(latitude, longitude));
    map.panTo(new google.maps.LatLng(latitude, longitude));

  }, 1500);

}

//Function called whenever a new property selected from the dropdown
function myFun(x) {
  //Accessing Property Image and assigning it to src attribute
  $("#prop-img").attr("src", imgList[x]);
  //Showing Property Selected and writing it to page
  $("#prop-desc").innerHTML = `You have selected Property  ${x+1}`;
  //Traversing Nested Object
  traverse(JSON.parse(myVar[x]), process);
  //Appends all data aggregated in content variable into the webpage, drawing the tables. 
  $('#prop-data').append(content);
  //Call Google Maps API once coordiates are found.
  initialize();
}
//Function to find latitude
function findLat(value){
  for (var prop in value) {
    if (prop == "value") {
      var lat = value[prop];
      return lat;
    }
  }
}  


//Function to find longitude
function findLong(value){
  for (var prop in value) {
    if (prop == "value") {
      var long = value[prop];
      return long;
    }
  }
}  


//called with every property and its value
function process(key,value) {
  if (typeof(value) == "object") {

    //Subroutines to obtain latitude and longitude coordinates for google maps api
    if (key == "LATITUDE") {
      latitude = findLat(value);
    }
    
    if (key == "LONGITUDE") {
      longitude = findLong(value);
    }

    //Code to create a new row once three tables inserted
    if (k == 3) {
      
      //z is flag for first case where closing </div> unnecessary
      if (z == 1) {
        content += "</table></div></div><div class='row'>";
        z=0;
      } else {
        content += "<div class='row' id='first'>";
      }
      k=0;
    }
    //Code to create new table. Z if flag for first case where closing tags unnecessary 
    if (z == 1) {
      content += `</table></div><div class='col-md-4 col-sm-6'><table class='table table-striped table-bordered table-hover table-compact'><h2>${key}</h2><thead><tr><th>Key</th><th>Value</th></tr></thead>`;

    } else {

      content += `<div class='col-md-4 col-sm-6'><table class='table table-striped table-bordered table-hover table-compact'><h2>${key}</h2><thead><tr><th>Key</th><th>Value</th></tr></thead>`;

    }
    j=0;
    k+=1;
    z=1;
    
  //For objects nested with values, this will display their data within the appropriate table. 
  } else {
  j+=1;
  content += `<tr><td>${key}</td><td>${value}</td></tr>`;
  }
}

function traverse(o,func) {
  for (var i in o) {
    func.apply(this,[i,o[i]]);  
    if (o[i] !== null && typeof(o[i])=="object") {
        //going one step down in the object tree!!
        traverse(o[i],func);
    }
  }
}

