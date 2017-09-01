import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

class ImageModal extends PureComponent {
  render() {
    const { showModal, closeImageModal, imageUrl } = this.props
    return (
      <Modal show={showModal} onHide={closeImageModal} bsSize="lg">
        <Modal.Header closeButton>
          <Modal.Title>รูปตัวอย่างห้อง</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt="room" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeImageModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ImageModal
