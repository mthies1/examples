/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * Example code for the ArcGIS API for JavaScript  *
 * * * * * * * * * * * * * * * * * * * * * * * * * * 
 */
 
/*
 * Below is the basic code for creating a map.
 * example: http://developers.arcgis.com/javascript/samples/map_simple/
 */

var map;
require([
  "esri/map",
  "dojo/domReady!" // modules need to be added to this list, separated by a comma and enclosed in quotation marks
], function (
  Map // the names of functions corresponding to the modules need to be added to this list, separated by a comma
) {
  map = new Map("map", {
    basemap: "topo", // list of basemap names: https://developers.arcgis.com/javascript/jsapi/esri.basemaps-amd.html
    center: [-90, 30],
    zoom: 4
  });
  
  // code to add layers and map control goes here
  
});
 
/* 
 * function: ArcGISDynamicMapServiceLayer
 * module: "esri/layers/ArcGISDynamicMapServiceLayer"
 * documentation: https://developers.arcgis.com/javascript/jssamples/map_dynamic.html
 * example: http://developers.arcgis.com/javascript/samples/map_dynamic/
 *
 * Adds layer(s) from an ArcGIS web service
 */

// Create a layer object from an ArcGIS Server web service, with no options
var layer1 = new ArcGISDynamicMapServiceLayer( "http://example.com/arcgis/rest/services/Layer1/MapServer" );
map.addLayer(layer1);

// Create a layer object from an ArcGIS Server web service, setting the opacity option
var layer2 = new ArcGISDynamicMapServiceLayer( "http://example.com/arcgis/rest/services/Layer2/MapServer", {
  "opacity": 0.35
});
map.addLayer(layer2);

/* 
 * function: BasemapToggle
 * module: "esri/dijit/BasemapToggle"
 * documentation: https://developers.arcgis.com/javascript/jssamples/widget_toggle.html
 * example: http://developers.arcgis.com/javascript/samples/widget_toggle/
 *
 * Adds a map control to select a basemap. Requires a div with id="BasemapToggle" inside the map div.
 */
 
var toggle = new BasemapToggle({
  map: map,
  basemap: "hybrid"
}, "BasemapToggle");
toggle.startup();
  
  
/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * Example code for the Google Maps API            *
 * * * * * * * * * * * * * * * * * * * * * * * * * * 
 */
 
/*
 * Below is the basic code for creating a map.
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

var map;
function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ), {
    center: { lat: 30, lng: -90 },
    zoom: 4
  });

  // code to add layers goes here
  
}

/* 
 * function: google.maps.KmlLayer
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/layer-kml
 *
 * Adds layer(s) from an online KML or KMZ file
 */
 
var kml1 = new google.maps.KmlLayer({
  url: 'http://example.com/layer1.kmz',
  preserveViewport: true
});
kml1.setMap( map );
