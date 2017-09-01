import React, { PureComponent } from 'react'
import Slider from 'react-slick'

class ImageSlider extends PureComponent {
  render() {
    const { openImageModal } = this.props
    const imageIds = [
      '1429729274510-0ca5300305d3',
      '1501876725168-00c445821c9e',
      '1499955085172-a104c9463ece',
      '1497333684848-77a94ad20149',
      '1445510861639-5651173bc5d5',
      '1501876725168-00c445821c9e',
      '1444047427283-88a67f631b3e',
      '1472504929007-6d7cd0ef7d50',
      '1424847262089-18a6858bd7e2',
      '1431102325666-4395d8bfac52'
    ]
    const settings = {
      className: 'center',
      speed: 500,
      slidesToShow: 3,
      centerPadding: '60px'
    }
    return (
      <Slider {...settings}>
        {imageIds.map((imageId, index) => (
          <div
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => openImageModal(imageId)}
          >
            <img
              alt="room"
              src={`https://images.unsplash.com/photo-${imageId}?dpr=2&auto=format&crop=faces&fit=crop&auto=format&w=300&h=300`}
            />
          </div>
        ))}
      </Slider>
    )
  }
}

export default ImageSlider
