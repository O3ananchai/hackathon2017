import React, { PureComponent } from 'react'
import { InfoWindow } from 'react-google-maps'

class PopUp extends PureComponent {
  render() {
    const { marker, onMarkerClose } = this.props

    return (
      <InfoWindow onCloseClick={() => onMarkerClose(marker)}>
        <div>{marker.room.address}</div>
      </InfoWindow>
    )
  }
}

export default PopUp
