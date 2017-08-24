import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

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
        <Card title="Packages" description="Manage tour packages">
          <div className="row">
            <PriceSearchForm />
          </div>
          <div className="row">
            <div className="col-md-12">
              <RoomDataTable onSubmit={this.onSubmit} />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(null, actions)(SearchRoom)
