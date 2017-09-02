import React, { Component } from 'react'
import axios from 'axios'
import canUseDOM from 'can-use-dom'
import raf from 'raf'

import SearchMap from './SearchMap'

const geolocation =
  canUseDOM && navigator.geolocation
    ? navigator.geolocation
    : {
        getCurrentPosition(success, failure) {
          failure(`Your browser doesn't support geolocation.`)
        }
      }

class SearchGoogleMap extends Component {
  state = {
    bounds: null,
    center: { lat: 13.8232971, lng: 100.3040178 },
    current: { lat: 13.8232971, lng: 100.3040178 },
    markers: []
  }

  getMarkers = async (lng, lat) => {
    const { data } = await axios.get(`/api/rooms?lng=${lng}&lat=${lat}`)
    return data.map(room => ({
      showInfo: false,
      room,
      position: {
        lat: room.obj.geomtry.coordinates[1],
        lng: room.obj.geomtry.coordinates[0]
      }
    }))
  }

  componentDidMount = async () => {
    geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords
        const markers = await this.getMarkers(longitude, latitude)
        this.setState({
          markers,
          center: { lat: latitude, lng: longitude },
          current: { lat: latitude, lng: longitude }
        })
      },
      async () => {
        const { current } = this.state
        const markers = await this.getMarkers(current.lng, current.lat)
        this.setState({
          markers
        })
      }
    )
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
    const markers = await this.getMarkers(current.lng, current.lat)
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
    const markers = await this.getMarkers(current.lng(), current.lat())
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
