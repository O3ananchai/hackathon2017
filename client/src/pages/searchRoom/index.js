import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from '../../components/Card'
import RoomDataTable from './RoomDataTable'
import PriceSearchForm from './PriceSearchForm'
import * as actions from '../../actions'

class SearchRoom extends PureComponent {
  onSubmit = values => {
    this.props.fetchRooms(values)
  }

  render() {
    return (
      <div className="container-fluid">
        <Card title="ค้นหาห้องพัก">
          <div className="row">
            <PriceSearchForm onSubmit={this.onSubmit} />
            <div className="col-md-3">
              <Link to="/search-room/map" className="btn btn-info">
                ค้นหาด้วยแผนที่
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RoomDataTable />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(null, actions)(SearchRoom)
