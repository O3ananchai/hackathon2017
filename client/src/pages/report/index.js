import React, { PureComponent } from 'react'

import FilterOwner from './FilterOwner'
import Card from '../../components/Card'
import Table from './Table'
import { openReport } from '../../helpers'

class Report extends PureComponent {
  openReport = () => {
    openReport(`bookings`)
  }

  render() {
    return (
      <div className="container-fluid">
        <Card title="รายงาน">
          <div className="row">
            <div className="col-md-6">
              <FilterOwner />
            </div>
            <div className="col-md-6 col-sm-6">
              <button
                className="btn btn-primary pull-right"
                onClick={this.openReport}
              >
                พิมพ์รายงาน
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Table />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default Report
