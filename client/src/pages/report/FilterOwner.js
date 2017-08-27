import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import Select from 'react-select'

import * as actions from '../../actions'

class FilterOwner extends PureComponent {
  componentDidMount() {
    this.props.fetchOwners()
  }

  render() {
    const { owners, owner, fetchBookings } = this.props
    return (
      <div>
        กรุณาเลือกเจ้าของ :
        <Select
          options={owners}
          onChange={value => fetchBookings(value)}
          value={owner}
        />
      </div>
    )
  }
}

const mapStateToProps = ({
  report: { owners, visibilityFilter: { owner } }
}) => ({
  owners: map(owners, owner => ({ value: owner._id, label: owner.name })),
  owner
})

export default connect(mapStateToProps, actions)(FilterOwner)
