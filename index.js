mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5ZG90IiwiYSI6ImNsYWljd2IzbTAxZXAzb21oc2kzbnRkZHMifQ.uEoG2XFWX3v6NRF-YaCNNQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [138.6485147, 35.5040526], // starting position [lng, lat]
  //https://www.google.com/maps/place/Tokyo/@35.5040526,138.6485147,8z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6761919!4d139.6503106
  zoom: 8,
  projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
  map.setFog({}); // Set the default atmosphere style
});

data = {
  "type": "FeatureCollection",
  "features": [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12, 139.76714968324362]
      },
      properties: {
        name: "東京駅"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [35.692116248282176, 139.70074295869597]
      },
      properties: {
        name: "新宿駅"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [35.71274825469525, 139.70381856183837]
      },
      properties: {
        name: "高田馬場駅"
      }
    }
  ]
}

map.on("load", (e) => {
  map.addSource("station-list", {
    type: "geojson",
    data: data
  })
  map.addLayer({
    "id": "station-list",
    "type": "circle",
    "source": "station-list",
    "paint": {
      "circle-radius": 10,
      "circle-color": "red"
    }

  })
})