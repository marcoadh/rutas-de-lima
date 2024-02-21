(function () {
  this.Map || (this.Map = {})

  Map.init = function (element, options = {}) {
    let attribution = "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    let gmapsr = L.tileLayer("https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga", { attribution: attribution, maxZoom: 20 })
    let gmapss = L.tileLayer("https://mt0.google.com/vt/lyrs=s,h&hl=en&x={x}&y={y}&z={z}&s=Ga", { attribution: attribution, maxZoom: 20 })
    let streemapr = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", { attribution: attribution, maxZoom: 20 })
    let map, layers

    layers = {
      "Google Calles": gmapsr,
      "Google Satelite": gmapss,
      "OpenStreet Calles": streemapr
    }

    map = new L.Map(element, {
      zoomControl: false,
      layers: [gmapsr]
    }).setView([-12.0266383, -76.9877791], 11)

    L.control.layers(layers).addTo(map)

    L.control.zoom({
      position: options.zoomPosition || "topright"
    }).addTo(map)

    return { map }
  }
}).call(this);
