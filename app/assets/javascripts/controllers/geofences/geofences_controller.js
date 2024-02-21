(function () {
  this.App || (this.App = {})

  App.Stimulus.register("geofences", class extends Stimulus.Controller {
    static targets = ["map"]

    connect() {
      this.initMap()
    }

    disconnect() { }

    initMap() {
      Object.assign(this, Map.init(this.mapTarget))
    }

    destroyMap() {
      if (this.map) {
        this.map.off()
        this.map.remove()
        this.map = null
        App.tracking.map = null
      }
    }
  })

}).call(this);
