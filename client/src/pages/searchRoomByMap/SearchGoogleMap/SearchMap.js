import React, { PureComponent } from 'react'
import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

import PopUp from './PopUp'
import INPUT_STYLE from './inputStyle'
const google = window.google

class SearchMap extends PureComponent {
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
        <Circle
          center={current}
          radius={20}
          options={{
            fillColor: `red`,
            fillOpacity: 0.2,
            strokeColor: `red`,
            strokeOpacity: 1,
            strokeWeight: 1
          }}
        />
      </GoogleMap>
    )
  }
}

export default withGoogleMap(SearchMap)
