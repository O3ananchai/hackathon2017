import React, { PureComponent } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import flat from 'flat'

import * as actions from '../../actions'
import { numberWithCommas } from '../../helpers'

class RoomDataTable extends PureComponent {
  renderPrice = (cell, row) => {
    return (
      <div>
        {numberWithCommas(row.price)}
      </div>
    )
  }

  renderAddress = (cell, row) => {
    return (
      <div>
        <Link to={`/search-room/${row._id}`}>
          {row['owner.name']}
        </Link>
        <div>
          {row.address}
        </div>
      </div>
    )
  }

  render() {
    const { rooms } = this.props
    return (
      <BootstrapTable
        data={Object.values(rooms)}
        height={400}
        striped
        hover
        condensed
        options={{ clearSearch: true }}
      >
        <TableHeaderColumn hidden dataField="_id" isKey>
          Room ID
        </TableHeaderColumn>
        <TableHeaderColumn hidden dataField="owner.name">
          ชื่อเจ้าของ
        </TableHeaderColumn>
        <TableHeaderColumn hidden dataField="address">
          ที่อยู่
        </TableHeaderColumn>
        <TableHeaderColumn dataFormat={this.renderAddress}>
          ผลการค้นหา
        </TableHeaderColumn>
        <TableHeaderColumn dataField="owner.phoneNumber" width="200">
          หมายเลขโทรศัพท์
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="right"
          dataAlign="right"
          dataSort
          dataFormat={this.renderPrice}
          dataField="price"
          width="100"
        >
          ราคา
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

const mapStateToProps = ({ searchRoom: { rooms } }) => ({
  rooms: map(rooms, flat)
})

export default connect(mapStateToProps, actions)(RoomDataTable)
