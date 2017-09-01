import React, { PureComponent } from 'react'
import { InfoWindow } from 'react-google-maps'
import { Link } from 'react-router-dom'

import { numberWithCommas } from '../../../helpers'

class PopUp extends PureComponent {
  render() {
    const { marker, onMarkerClose } = this.props
    const { obj } = marker.room

    return (
      <InfoWindow onCloseClick={() => onMarkerClose(marker)}>
        <ul>
          <li>
            <b>ที่อยู่: </b>
            <Link to={`/search-room/${obj._id}`}>{obj.address}</Link>
          </li>
          <li>
            <b>ราคา: </b>
            {numberWithCommas(obj.price)} บาท
          </li>
          <li>
            <b>มัดจำ: </b>
            {obj.pledge} เดือน
          </li>
        </ul>
      </InfoWindow>
    )
  }
}

export default PopUp
