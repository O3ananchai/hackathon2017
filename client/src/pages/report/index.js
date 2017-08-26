import React, { PureComponent } from 'react'

import Card from '../../components/Card'

class Report extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <Card title="รายงาน">
          <div className="row">
            <div className="col-md-12">Report</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default Report
