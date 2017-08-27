import React, { PureComponent } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'
import map from 'lodash/map'
import flat from 'flat'

class Table extends PureComponent {
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
        height={400}
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
