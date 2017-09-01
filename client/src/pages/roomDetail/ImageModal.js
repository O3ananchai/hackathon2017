import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

class ImageModal extends PureComponent {
  render() {
    const { showImageModal, closeImageModal, imageId } = this.props
    return (
      <Modal show={showImageModal} onHide={closeImageModal} bsSize="lg">
        <Modal.Header closeButton>
          <Modal.Title>รูปตัวอย่างห้อง</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://images.unsplash.com/photo-${imageId}?w=800&h=600`}
            alt="room"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeImageModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ImageModal
