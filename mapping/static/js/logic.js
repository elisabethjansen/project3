//If you have the airport names and want to get their coordinates using the Geoapify API, you can construct a request with the airport name as the query parameter and the API key provided by Geoapify. The API endpoint for geocoding requests usually looks something like this:
//https://api.geoapify.com/v1/geocode/search?text=AirportName&apiKey=YOUR_API_KEY
//Replace AirportName with the actual airport name you want to search for and YOUR_API_KEY with your Geoapify API key. This request will return the geolocation coordinates for the specified airport name.
//Remember to refer to the Geoapify API documentation for the specific endpoint details and query parameters.
//https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=3e0e1a2861fc4b8ea507816659537f4c
//var requestOptions = {
  //  method: 'GET',
 // };
 // 
 // fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=3e0e1a2861fc4b8ea507816659537f4c", requestOptions)
 //   .then(response => response.json())
//    .then(result => console.log(result))
//    .catch(error => console.log('error', error));

// Define the airport name you want to search for
const airportName = "Sydney Airport";

// Construct the URL with the airport name and API key
const url = `https://api.geoapify.com/v1/geocode/search?text=${airportName}&categories=airport&apiKey=3e0e1a2861fc4b8ea507816659537f4c`;

// Make a GET request to the Geoapify Geocoding API
fetch(url)
    .then(response => response.json())
    .then(result => {
        // Extract latitude and longitude from the JSON response
        const latitude = result.features[0].properties.lat;
        const longitude = result.features[0].properties.lon;
        
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    })
    .catch(error => console.log('Error:', error));


var url = 'data/all_week.geojson';
var queryUrl = 'https://api.geoapify.com/v1/geocode/search?text=AirportName&apiKey=YOUR_API_KEY';
 
var colors = ['Blue', 'Green', 'Salmon', 'Orange', 'yellow', 'red'];

function getFilled(Temp) {
    return Temp > 90 ? colors[5] :
           Temp > 70 ? colors[4] :
           Temp > 50 ? colors[3] :
           Temp > 30 ? colors[2] :
           Temp > 10 ? colors[1] :
           Temp > -10 ? colors[0] :
           colors[5]; // Use the last color for values outside the range
}

d3.json(queryUrl).then(function(data) {
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {
    console.log(earthquakeData);

    function doONEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p><ul><li>Earthquake Magnitude: ${feature.properties.mag}</li><li>Earthquake Depth: ${feature.geometry.coordinates[2]}</li></ul>`);
    }

    var earthquakes = L.geoJson(earthquakeData, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, {
                radius: feature.properties.mag * 3,
                fillColor: getFilled(feature.geometry.coordinates[2]),
                color: "black",
                weight: 0.2,
                opacity: 0.3
            });
        },
        onEachFeature: doONEachFeature
    });

    function createMap(earthquakes) {
        var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        });
        var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        });

        var baseMaps = {
            "Street Map": street,
            "Topographic Map": topo,
            "Dark Map": dark
        };

        var overlayMaps = {
            Earthquakes: earthquakes
        };

        var map = L.map("map", {
            center: [37.09, -95.71],
            zoom: 4,
            layers: [street, earthquakes]
        });

        var legend = L.control({ position: 'bottomright' });
        legend.onAdd = function() {
            var div = L.DomUtil.create('div', 'info legend');
            for (var i = 0; i < colors.length; i++) {
                var item = `<li style='background: ${colors[i]}'></li> ${i * 20} - ${i * 20 + 20}<br>`;
                div.innerHTML += item;
            }
            return div;
        };
        legend.addTo(map);

        // Calculate the average latitude and longitude of all earthquake locations
        var avgLat = 0;
        var avgLng = 0;
        earthquakeData.forEach(function(feature) {
            avgLat += feature.geometry.coordinates[1];
            avgLng += feature.geometry.coordinates[0];
        });
        avgLat /= earthquakeData.length;
        avgLng /= earthquakeData.length;

        // Draw a line representing the average position of all earthquake locations
        var avgLine = L.polyline([[avgLat, avgLng]], {color: 'red'}).addTo(map);

        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(map);
    }

    createMap(earthquakes);
}