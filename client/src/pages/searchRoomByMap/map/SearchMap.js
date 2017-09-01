import React, { PureComponent } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'
import INPUT_STYLE from './inputStyle'
const google = window.google

class SearchMap extends PureComponent {
  render() {
    return withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        onClick={console.log}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
      >
        <SearchBox
          ref={props.onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={props.onPlacesChanged}
          inputPlaceholder="สถานที่ใกล้เคียงห้องพัก"
          inputStyle={INPUT_STYLE}
        />
        {props.markers.map((marker, index) => (
          <Marker position={marker.position} key={index} />
        ))}
      </GoogleMap>
    ))
  }
}

export default SearchMap
