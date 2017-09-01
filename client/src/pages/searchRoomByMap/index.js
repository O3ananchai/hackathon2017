import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'
import Map from './Map'
import * as actions from '../../actions'

class SearchRoomByMap extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="ค้นหาห้องพักด้วยแผนที่">
          <div className="row">
            <Map />
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(null, actions)(SearchRoomByMap)
