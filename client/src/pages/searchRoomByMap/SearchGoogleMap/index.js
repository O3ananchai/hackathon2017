import React, { Component } from 'react'

import SearchMap from './SearchMap'
import mockRooms from './mockRooms'

class SearchGoogleMap extends Component {
  state = {
    bounds: null,
    center: { lat: 13.703, lng: 100.543 },
    current: { lat: 13.703, lng: 100.543 },
    markers: []
  }

  handleMarkerClick = val => {
    console.log(val)
  }

  handleMapClick = val => {
    const current = { lat: val.latLng.lat(), lng: val.latLng.lng() }
    const markers = mockRooms.map(room => ({
      position: room.loc
    }))
    this.setState({
      markers,
      current
    })
  }

  handlePlacesChanged = () => {
    const places = this._searchBox.getPlaces()

    // Add a marker for each place returned from search bar
    // const markers = places.map(place => ({
    //   position: place.geometry.location,
    //   defaultAnimation: 2
    // }))
    const current = places[0].geometry.location

    // Set markers; set map center to first search result
    const mapCenter =
      places.length > 0 ? places[0].geometry.location : this.state.center

    this.setState({
      center: mapCenter,
      current
    })
  }

  handleMapMounted = map => {
    this._map = map
  }

  handleBoundsChanged = () => {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter()
    })
  }

  handleSearchBoxMounted = searchBox => {
    this._searchBox = searchBox
  }

  render() {
    return (
      <SearchMap
        containerElement={<div style={{ height: 1000 }} />}
        mapElement={<div style={{ height: 1000 }} />}
        center={this.state.center}
        current={this.state.current}
        onMapClick={this.handleMapClick}
        onMapMounted={this.handleMapMounted}
        onBoundsChanged={this.handleBoundsChanged}
        onSearchBoxMounted={this.handleSearchBoxMounted}
        onMarkerClick={this.handleMarkerClick}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        markers={this.state.markers}
      />
    )
  }
}

export default SearchGoogleMap
