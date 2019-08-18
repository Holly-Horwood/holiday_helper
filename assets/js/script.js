/* jshint esversion: 6 */
const apiKey = "AGzltg49Lx3bVQJdJjToy20ssY8ep6iJ9ai504vK";
const xhr = new XMLHttpRequest();
const newZealand = { lat: -41.270673, lng: 173.284455 };
const putaruru = { lat: -38.0385, lng: 175.792754 };
const tekapo = { lat: -44.010373, lng: 170.48368 };
const narrowCenter = {lat: -41.01618961059204, lng: 172.85793877551018};
const mobileCenter = {lat: -41.343543978403275, lng: 172.5030500740408};

const markers = [];
const loader = document.getElementById("loader");
const infoTemplate = `
<div class="infoTemplate">
Name: NAME<br>
Region: REGION<br>
Dogs allowed: DOGS<br>
Facilities: FACILITIES<br>
Activities: ACTIVITIES<br>
<a href="STATICLINK"><u>Click here for more info!</u></a>
</div>
`;
var map, iconHut, iconTent, marker, infoWindow, markerCluster, isnViewPort, ismViewPort, islViewPort;  //These are all global scopes so can be refernced throughout the code.

//Confirmation for email sign up but will not send as form handling not implemented for this project
function clickAlert(event) {
  if (document.getElementById("email-form").reportValidity()) {
    alert("Thank you for signing up to our Newsletter!");
    document.getElementById("email-form").reset();
  }
  event.preventDefault();
  event.stopPropagation();
  return false;
}

document.getElementById("submit").onclick = clickAlert;

// Spinner for when map is loading
window.addEventListener("load", function() {
  loader.style.visibility = "hidden";
});

function startLoader() {
  loader.style.visibility = "visible";
}

function stopLoader() {
  loader.style.visibility = "hidden";
}

// Clears all markers from map then sets memory array back to 0
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
  if (markerCluster) markerCluster.clearMarkers();
}

// Sets all map properties
function resetMap(mapCentre) {
  clearMarkers();
  map.setZoom(isnViewPort ? 6.1 : ismViewPort ? 6.2 : 6.5);
  map.setCenter(mapCentre);
  map.setMapTypeId("terrain");
}

//loops through site json data and gets site information and adds to map
function setMarkers(json, icon, siteType) {
  for (let i = 0; i < json.length; i++) {
    let site = json[i];
    let latLong = convertToLatLong(site.x, site.y);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(latLong[0], latLong[1]),
      map: map,
      icon: icon
    });
    markers.push(marker);
    infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(
      marker,
      "click",
      (function(marker) {
        return function() {
          docSiteDetails(site.assetId, marker, infoWindow, siteType);
        };
      })(marker)
    );
  }
  markerCluster = new MarkerClusterer(map, markers, {
    imagePath: "assets/images/m"
  });
}

// Calls DOC API for the specified Island and site type
function docCall(siteType, mapCentre, icon) {
  startLoader();
  xhr.open("GET", "https://api.doc.govt.nz/v2/" + siteType, true);
  xhr.setRequestHeader("X-API-Key", apiKey);

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      resetMap(mapCentre);
      let json = JSON.parse(this.responseText);
      setMarkers(json, icon, siteType);
    }
    stopLoader();
  };
  xhr.send();
}

// Calls DOC API gets site details by id and adds to infowindow once marker is clicked
function docSiteDetails(id, marker, infoWindow, siteType) {
  startLoader();
  xhr.open(
    "GET",
    "https://api.doc.govt.nz/v2/" + siteType + "/" + id + "/detail",
    true
  );
  xhr.setRequestHeader("X-API-Key", apiKey);

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let site = JSON.parse(this.responseText);
      infoWindow.setContent(
        infoTemplate
          .replace("NAME", site.name)
          .replace("REGION", site.region)
          .replace("FACILITIES", site.facilities, [0, 1, 2])
          .replace("ACTIVITIES", site.activities, [0, 1, 2])
          .replace("DOGS", site.dogsAllowed)
          .replace("STATICLINK", site.staticLink)
      );
      infoWindow.open(map, marker);
    }
    stopLoader();
  };
  xhr.send();
}

// Handle window resizing for map
window.onresize = function(event) {
  isnViewPort = window.matchMedia("(max-width: 435px)").matches;
  ismViewPort = window.matchMedia("(max-width: 700px)").matches;
  islViewPort = window.matchMedia("(min-width: 701px)").matches;

    if (di.value == "ni" || di.value == "si") {
      map.setZoom(isnViewPort ? 6.1 : ismViewPort ? 6.2 : 6.5);
    } 
  else {
    map.setZoom(isnViewPort ? 5.2 : ismViewPort ? 5.5 : 6);
  }
};

// Initialize and add the map
function initMap() {

    isnViewPort = window.matchMedia("(max-width: 435px)").matches;
    ismViewPort = window.matchMedia("(max-width: 700px)").matches;
    islViewPort = window.matchMedia("(min-width: 701px)").matches;

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: isnViewPort ? 5.2 : ismViewPort ? 5.5 : 6, //Media queries for zoom level
      center: isnViewPort ? narrowCenter : ismViewPort ? mobileCenter : newZealand, //Media queries for map center
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              color: "#85df75"
            },
            {
              saturation: -5
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ]
    });
    iconTent = {
      url: "assets/images/tent.svg",
      scaledSize: new google.maps.Size(20, 20)
    };
    iconHut = {
      url: "assets/images/hut.svg",
      scaledSize: new google.maps.Size(20, 20)
    };
  }
  
  // Loops through json data relevant to search criteria selected, zooms in on Island and shows site markers
  const di = document.getElementById("dropdown-island");
  di.onclick = searchSelect;
  const rh = document.getElementById("radio-hut");
  rh.onclick = searchSelect;
  const rc = document.getElementById("radio-camp");
  rc.onclick = searchSelect;

  function searchSelect(e) {
    if (rc.checked) {
      if (di.value == "ni") {
        docCall("campsites", putaruru, iconTent);
      } else if (di.value == "si") {
        docCall("campsites", tekapo, iconTent);
      }
    } else if (rh.checked) {
      if (di.value == "ni") {
        docCall("huts", putaruru, iconHut);
      } else if (di.value == "si") {
        docCall("huts", tekapo, iconHut);
      }
    } 
  }

  

