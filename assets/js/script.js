const apiKey = "AGzltg49Lx3bVQJdJjToy20ssY8ep6iJ9ai504vK";
const xhr = new XMLHttpRequest();
const newZealand = { lat: -40.9006, lng: 174.886 };
const taupo = { lat: -38.840708, lng: 175.90338 };
var marker;
var map;

// Initialize and add the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: newZealand,
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
      console.log("north island + campsites");

      //Calls to DOC API and returns campsite data
      var iconTent = {
        url: "assets/images/tent.png",
        scaledSize: new google.maps.Size(20, 20)
      };
      var infoWindow = new google.maps.InfoWindow();

      xhr.open("GET", "https://api.doc.govt.nz/v2/campsites", true);
      xhr.setRequestHeader("X-API-Key", apiKey);

      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          let json = JSON.parse(this.responseText);
          //loops through campsite json data and returns campsite information and adds to map
          for (let i = 0; i < json.length; i++) {
            for (let i = 0; i < json.length; i++) {
              let campsite = json[i];
              console.log(campsite.name + "," + campsite.x + "," + campsite.y);
              let latLong = convertToLatLong(campsite.x, campsite.y);
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(latLong[0], latLong[1]),
                zoom: 6,
                map: taupo,
                center: taupo,
                icon: iconTent
              });
            }
          }
        }
      };

      xhr.send();
    } else if (di.value == "si") {
      console.log("south island + campsites");
    }
  } else if (rh.checked) {
    if (di.value == "ni") {
      console.log("north island + huts");
    } else if (di.value == "si") {
      console.log("south island + huts");
    }
  } else console.log("No action selected");
}
