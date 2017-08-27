import React, { PureComponent } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'
import map from 'lodash/map'
import flat from 'flat'
import moment from 'moment'

import { numberWithCommas } from '../../helpers'
import * as actions from '../../actions'

class Table extends PureComponent {
  renderPrice = (cell, row) => {
    return (
      <div>
        {numberWithCommas(row['room.price'])}
      </div>
    )
  }

  renderSlipDate = (cell, row) => {
    if (!row.slipDate) {
      return <font color="red">ยังไม่ได้ชำระเงิน</font>
    }
    return (
      <div>
        {moment(row.slipDate).format('DD/MM/YYYY')}
      </div>
    )
  }

  renderSlip = (cell, row) => {
    if (!row.slipDate) {
      return null
    }
    return (
      <button
        className="btn btn-info btn-sm"
        style={{ margin: 0 }}
        onClick={() => this.props.fetchBooking(row._id)}
      >
        ดูหลักฐาน
      </button>
    )
  }

  render() {
    const { bookings } = this.props
    return (
      <BootstrapTable
        data={bookings}
        search
        striped
        hover
        condensed
        options={{ clearSearch: true }}
      >
        <TableHeaderColumn hidden dataField="_id" isKey>
          Booking Id
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField="customer.displayName">
          ชื่อผู้เช่า
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField="room.address">
          สถานที่
        </TableHeaderColumn>
        <TableHeaderColumn
          headerAlign="right"
          dataAlign="right"
          dataSort
          dataField="room.price"
          dataFormat={this.renderPrice}
        >
          ค่าเช่า
        </TableHeaderColumn>
        <TableHeaderColumn
          dataAlign="center"
          dataField="slipDate"
          dataFormat={this.renderSlipDate}
        >
          วันที่ชำระเงิน
        </TableHeaderColumn>
        <TableHeaderColumn dataAlign="center" dataFormat={this.renderSlip}>
          หลักฐานการชำระเงิน
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

const mapStateToProps = ({ report: { bookings } }) => ({
  bookings: map(bookings, flat)
})

export default connect(mapStateToProps, actions)(Table)
