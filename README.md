# Mapping_Earthquakes
## 1 Project Overview
Disaster Reporting Network is a non profit company that provides data driven storytelling on disasters. The purpose of the analysis is to build insightful data visualizations with interactive features on earthquakes from around the world. 

The following tasks will be performed in this analysis:
- Traverse and retrieve earthquake data from US Geological Survey Data using javascript,D3 and leaflet.
- Plot data on Mapbox map through API request
- Show Popup marker of the magnitude and location of each eartquake
- Create marker for each earthquake based on the magnitude of the earthquake with different size on color
- Illustrate relationship between the location and frequency of seismic activity and tectonic plates with lines
- Add new layer  for major earthquake to show all the earthquakes with a magnitude greater than 4.5 on the map.
- Add new layer for the base layer. 

## 2 Resources
Software: Javascript,HTML,CSS,Leaflet,Mapbox

Website source for data:
* Earthquake Data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
* Tectonic Plate: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json
* Major Earthquake Data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson

## 3 Result

<p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/142545426-46f9d0af-3b59-4890-b670-7d2567872cb8.png"/>
</p>

<p align="center">
  <sub> Figure 1 Map with All Layer Active and Street Basemap   </sub>
</p>

<br>
<br>

<p align="center">
    <img src="https://user-images.githubusercontent.com/88597187/142546677-91722d14-f8f7-4e78-81de-a99863f66b9e.png"/>
</p>

<p align="center">
  <sub> Figure 2 Map with Tectonic Plate and Major Earthquake Layer and Dark Basemap Layer   </sub>
</p>






