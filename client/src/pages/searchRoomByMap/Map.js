import { default as React, Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.703, lng: 100.543 }} />
))

export default class SimpleMapExample extends Component {
  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={<div style={{ height: 1000 }} />}
        mapElement={<div style={{ height: 1000 }} />}
      />
    )
  }
}
