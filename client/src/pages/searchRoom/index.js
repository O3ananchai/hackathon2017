import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'
import Button from 'react-bootstrap/lib/Button'
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
          <div className="row" style={{ height: 110 }}>
            <PriceSearchForm onSubmit={this.onSubmit} />
            <Button style={{ marginTop: 23 }} bsStyle="info" type="submit">
              ค้นหาด้วยแผนที่
            </Button>
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
