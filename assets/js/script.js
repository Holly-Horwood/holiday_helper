// initialize the map on the "map" div with a given center and zoom
var mymap = L.map('mapContainer').setView([-40.9006, 174.8860], 6);

var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-41.2784, 174.7767]).addTo(mymap)
.bindPopup('The Beehive Wellington, house of Parliament')
