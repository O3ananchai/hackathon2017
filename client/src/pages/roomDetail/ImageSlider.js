import React, { PureComponent } from 'react'
import Slider from 'react-slick'

class ImageSlider extends PureComponent {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerPadding: '60px'
    }
    return (
      <Slider {...settings}>
        <div>
          <img alt="room" src="http://lorempixel.com/640/480/city/" />
        </div>
        <div>
          <img alt="room" src="http://lorempixel.com/640/480/food/" />
        </div>
        <div>
          <img alt="room" src="http://lorempixel.com/640/480/nature/" />
        </div>
        <div>
          <img alt="room" src="http://lorempixel.com/640/480/animals/" />
        </div>
        <div>
          <img alt="room" src="http://lorempixel.com/640/480/sports/" />
        </div>
      </Slider>
    )
  }
}

export default ImageSlider
