import React, { Component } from 'react'

import SearchMap from './SearchMap'

class SearchGoogleMap extends Component {
  state = {
    bounds: null,
    center: { lat: 13.703, lng: 100.543 },
    markers: []
  }

  handleMapMounted = this.handleMapMounted.bind(this)
  handleBoundsChanged = this.handleBoundsChanged.bind(this)
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this)
  handlePlacesChanged = this.handlePlacesChanged.bind(this)

  handleMapMounted(map) {
    this._map = map
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter()
    })
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox
  }

  handlePlacesChanged() {
    const places = this._searchBox.getPlaces()
    console.log(places[0].geometry.location)

    // Add a marker for each place returned from search bar
    const markers = places.map(place => ({
      position: place.geometry.location,
      defaultAnimation: 2
    }))

    // Set markers; set map center to first search result
    const mapCenter =
      markers.length > 0 ? markers[0].position : this.state.center

    this.setState({
      center: mapCenter,
      markers
    })
  }

  render() {
    return (
      <SearchMap
        containerElement={<div style={{ height: 1000 }} />}
        mapElement={<div style={{ height: 1000 }} />}
        center={this.state.center}
        onMapMounted={this.handleMapMounted}
        onBoundsChanged={this.handleBoundsChanged}
        onSearchBoxMounted={this.handleSearchBoxMounted}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        markers={this.state.markers}
      />
    )
  }
}

export default SearchGoogleMap
