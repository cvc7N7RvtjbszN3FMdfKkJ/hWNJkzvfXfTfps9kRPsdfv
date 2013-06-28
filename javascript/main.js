/* javascript to be included on the view */

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
