var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 30.412042469340307, lng: -91.17958456277847}
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson('data.json');
}
