initMap();
var lastlong, lastlati, route;
route = [];
navigator.geolocation.watchPosition(position, error, {enableHighAccuracy:true});

function position(x) {
if (!lastlati || !lastlong) {
console.log("Started Lat " + (x.coords.latitude) + " Lon " + (x.coords.longitude));
lastlati = x.coords.latitude;
lastlong = x.coords.longitude;
route.push(x);
var pos=new google.maps.LatLng(x.coords.latitude,x.coords.longitude);
	map.setCenter(pos);
	map.setZoom(16);
	
	var marker = new google.maps.Marker({
	    position: pos,
	    map: map,
	    title:"Start"
	});
	
	var polyOptions = {
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  }
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);
}
updateMapRoute();
if (x.coords.latitude != lastlati || x.coords.longitude != lastlong) {
console.log("Moved Lat " + (lastlati - x.coords.latitude) + " Lon " + (lastlong - x.coords.longitude));

route.push(x);
updateMapRoute();
var dp = "Estimated kilometres travelled so far " + getPathLength();
if (km_target) {
   dp += ", which is " + (getPathLength()/km_target)*100 + "% of your target!";
}
document.getElementById('dp').innerHTML = dp ;

lastlati = x.coords.latitude;
lastlong = x.coords.longitude;

}
}
function error(x) {
console.log(x);
}

function initMap() {
var myOptions = {
	      zoom: 4,
	      mapTypeControl: true,
	      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	      navigationControl: true,
	      navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	      mapTypeId: google.maps.MapTypeId.ROADMAP      
	    }	
 map = new google.maps.Map(document.getElementById("map"), myOptions);
}

function updateMapRoute() {
var path = poly.getPath();
var last = route[route.length-1];
gpos = new google.maps.LatLng(last.coords.latitude, last.coords.longitude);
path.push(gpos);
}

function moveSomewhere() {
var sp = new Object();
sp.coords = new Object();
var last = route[route.length-1];
if (last) {

sp.coords.latitude = last.coords.latitude + Math.cos( Math.PI * Math.random() )/1000;
sp.coords.longitude = last.coords.longitude + Math.cos( Math.PI * Math.random()  )/1000;

position(sp);
} else {
console.log("no route" + route);
}
}

function getPathLength() {
// we use harvensin here for convenience
var d = 0;
console.log(route);
for (var i=0;i<route.length-1; i++) {
var a = route[i];
var b = route[i+1];
var dLat = (b.coords.latitude - a.coords.latitude) * Math.PI/180;
var dLon = (b.coords.longitude - a.coords.longitude) * Math.PI/180;
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(a.coords.latitude*Math.PI/180) * Math.cos(b.coords.latitude*Math.PI/180) * Math.sin(dLon/2) * Math.sin(dLon/2);

d = d + 6371 * (Math.asin(Math.sqrt(a))*2);
}
return d;
}
