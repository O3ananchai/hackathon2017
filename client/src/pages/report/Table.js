import React, { PureComponent } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'
import map from 'lodash/map'
import flat from 'flat'
import moment from 'moment'

class Table extends PureComponent {
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
    if (!row.slip) {
      return <div>ไม่พบหลักฐานการชำระเงิน</div>
    }
    if (row.slip.substring(5, 10) === 'image') {
      return <img src={row.slip} alt="slip" />
    }
    return <div>รูปแบบไฟล์ไม่ถูกต้อง</div>
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
        <TableHeaderColumn dataField="slip" dataFormat={this.renderSlip}>
          หลักฐานการชำระเงิน
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

const mapStateToProps = ({ report: { bookings } }) => ({
  bookings: map(bookings, flat)
})

export default connect(mapStateToProps)(Table)
