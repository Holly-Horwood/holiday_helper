// DOC API
const apiKey = "AGzltg49Lx3bVQJdJjToy20ssY8ep6iJ9ai504vK";

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.doc.govt.nz/v2/campsites", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  let json = JSON.parse(this.responseText);
  console.log(json); 
 }
};

xhr.send();

// LEAFLET MAP API
const L = window.L;

// Initialize the map on the "mapContainer" div with a given center and zoom
const mymap = L.map('mapContainer').setView([-40.9006, 174.8860], 6);

const Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 18
}).addTo(mymap);

//references to Icon marker
const tentIcon = L.icon({
    iconUrl: 'assets/images/tent.png',
    iconSize: [26, 26],
    iconAnchor: [13, 26]
});

const marker = L.marker([-41.2784, 174.7767], { icon: tentIcon} ).addTo(mymap)
.bindPopup('The Beehive Wellington, house of Parliament');

