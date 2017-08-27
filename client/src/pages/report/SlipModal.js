import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

import * as actions from '../../actions'

class SlipModal extends PureComponent {
  render() {
    const { showModal, closeSlipModal, slip } = this.props
    if (!slip) {
      return null
    }
    return (
      <Modal show={showModal} onHide={closeSlipModal} bsSize="lg">
        <Modal.Header closeButton>
          <Modal.Title>หลักฐานการชำระเงิน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {slip.substring(5, 10) === 'image'
            ? <img src={slip} alt="slip" />
            : <font color="red">รูปแบบไฟล์ไม่สามารถแสดงผลได้</font>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeSlipModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = ({ report: { showSlipModal, slip } }) => ({
  showModal: showSlipModal,
  slip
})

export default connect(mapStateToProps, actions)(SlipModal)
