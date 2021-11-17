// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);




// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satteliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Sattelite Streets": satteliteStreets
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/nayowl/Mapping_Earthquakes/main/torontoNeighborhoods.json";



d3.json(torontoHoods).then(function(data) {
  console.log(data);
  L.geoJson(data).addTo(map);
  L.geoJson(data, {
          weight:1,
          fillColor:'#FFFF00',
          onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2> Neighborhood Name : " + feature.properties.AREA_NAME + "</h2> ");
           }
        }).addTo(map);

});



// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// L.geoJson(data, {
//       style:myStyle,
//       onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2> <hr> <h3> Destination:  "+feature.properties.dst+"</h3>");
//        }
//     }).addTo(map);



// });