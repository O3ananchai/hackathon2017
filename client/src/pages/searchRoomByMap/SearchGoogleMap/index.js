import React, { Component } from 'react'
import axios from 'axios'

import SearchMap from './SearchMap'

class SearchGoogleMap extends Component {
  state = {
    bounds: null,
    center: { lat: 13.8232971, lng: 100.3040178 },
    current: { lat: 13.8232971, lng: 100.3040178 },
    markers: []
  }

  componentDidMount = async () => {
    const { current } = this.state
    const { data } = await axios.get(
      `/api/rooms?lng=${current.lng}&lat=${current.lat}`
    )
    const markers = data.map(room => {
      return {
        showInfo: false,
        room,
        position: {
          lat: room.obj.geomtry.coordinates[1],
          lng: room.obj.geomtry.coordinates[0]
        }
      }
    })
    this.setState({
      markers
    })
  }

  handleMarkerClick = targetMarker => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          }
        }
        return marker
      })
    })
  }

  handleMapClick = async val => {
    const current = { lat: val.latLng.lat(), lng: val.latLng.lng() }
    const { data } = await axios.get(
      `/api/rooms?lng=${current.lng}&lat=${current.lat}`
    )
    const markers = data.map(room => {
      return {
        showInfo: false,
        room,
        position: {
          lat: room.obj.geomtry.coordinates[1],
          lng: room.obj.geomtry.coordinates[0]
        }
      }
    })
    this.setState({
      markers,
      current
    })
  }

  handleMarkerClose = targetMarker => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false
          }
        }
        return marker
      })
    })
  }

  handlePlacesChanged = async () => {
    const places = this._searchBox.getPlaces()
    const current = places[0].geometry.location
    const { data } = await axios.get(
      `/api/rooms?lng=${current.lng()}&lat=${current.lat()}`
    )
    const markers = data.map(room => {
      return {
        showInfo: false,
        room,
        position: {
          lat: room.obj.geomtry.coordinates[1],
          lng: room.obj.geomtry.coordinates[0]
        }
      }
    })

    // Set markers; set map center to first search result
    const mapCenter =
      places.length > 0 ? places[0].geometry.location : this.state.center

    this.setState({
      center: mapCenter,
      current,
      markers
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
        containerElement={<div style={{ height: 700 }} />}
        mapElement={<div style={{ height: 700 }} />}
        center={this.state.center}
        current={this.state.current}
        onMapClick={this.handleMapClick}
        onMapMounted={this.handleMapMounted}
        onBoundsChanged={this.handleBoundsChanged}
        onSearchBoxMounted={this.handleSearchBoxMounted}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        markers={this.state.markers}
      />
    )
  }
}

export default SearchGoogleMap
