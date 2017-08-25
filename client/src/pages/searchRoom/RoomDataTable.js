import React, { PureComponent } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class RoomDataTable extends PureComponent {
  render() {
    const { rooms } = this.props
    return (
      <BootstrapTable
        data={Object.values(rooms)}
        height={400}
        search
        striped
        hover
        condensed
        options={{ clearSearch: true }}
      >
        <TableHeaderColumn hidden dataField="_id" isKey>
          Room ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="owner.name">
          ชื่อเจ้าของ
        </TableHeaderColumn>
        <TableHeaderColumn dataField="address">ที่อยู่</TableHeaderColumn>
        <TableHeaderColumn dataField="telephone">
          หมายเลขโทรศัพท์
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="right"
          dataAlign="right"
          dataSort
          dataField="price"
        >
          ราคา
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

const mapStateToProps = ({ searchRoom: { rooms } }) => ({ rooms })

export default connect(mapStateToProps, actions)(RoomDataTable)
