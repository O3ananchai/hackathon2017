import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

import PopUp from './PopUp'
import INPUT_STYLE from './inputStyle'
const google = window.google

class SearchMap extends Component {
  state = {
    showCurrentInfo: false
  }

  render() {
    const {
      onMapMounted,
      center,
      onBoundsChanged,
      onSearchBoxMounted,
      bounds,
      onMarkerClick,
      onMarkerClose,
      onPlacesChanged,
      onMapClick,
      markers,
      current
    } = this.props

    return (
      <GoogleMap
        ref={onMapMounted}
        defaultZoom={17}
        onClick={onMapClick}
        center={center}
        onBoundsChanged={onBoundsChanged}
      >
        <SearchBox
          ref={onSearchBoxMounted}
          bounds={bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={onPlacesChanged}
          inputPlaceholder="สถานที่ใกล้เคียงห้องพัก"
          inputStyle={INPUT_STYLE}
        />
        {markers.map((marker, index) => (
          <Marker
            position={marker.position}
            onClick={() => onMarkerClick(marker)}
            key={index}
          >
            {marker.showInfo && (
              <PopUp marker={marker} onMarkerClose={onMarkerClose} />
            )}
          </Marker>
        ))}
        <Marker
          icon={{
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            strokeColor: 'blue',
            scale: 5
          }}
          onClick={() => this.setState({ showCurrentInfo: true })}
          position={current}
        >
          {this.state.showCurrentInfo && (
            <InfoWindow
              onCloseClick={() => this.setState({ showCurrentInfo: false })}
            >
              <div>คุณอยู่นี่</div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    )
  }
}

export default withGoogleMap(SearchMap)
