import React, { PureComponent } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'
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
      onPlacesChanged,
      onMapClick,
      markers
    } = this.props

    return (
      <GoogleMap
        ref={onMapMounted}
        defaultZoom={15}
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
          <Marker position={marker.position} key={index} />
        ))}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(SearchMap)
