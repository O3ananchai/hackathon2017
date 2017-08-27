import React, { PureComponent } from 'react'

import FilterOwner from './FilterOwner'
import Card from '../../components/Card'
import Table from './Table'
import PrintButton from './PrintButton'
import SlipModal from './SlipModal'

class Report extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="รายงาน">
          <div className="row">
            <div className="col-md-6">
              <FilterOwner />
            </div>
            <div className="col-md-6 col-sm-6">
              <PrintButton />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Table />
            </div>
          </div>
        </Card>
        <SlipModal />
      </div>
    )
  }
}

export default Report
