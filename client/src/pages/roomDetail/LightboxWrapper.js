import React, { Component } from 'react'

import Gallery from './Gallery'

function makeUnsplashSrc(id) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`
}
function makeUnsplashSrcSet(id, size) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`
}
function makeUnsplashThumbnail(id, orientation = 'landscape') {
  const dimensions = orientation === 'square' ? 'w=300&h=300' : 'w=240&h=159'

  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`
}

const THUMBNAIL_IMAGES = [
  {
    id: '1429729274510-0ca5300305d3',
    caption: 'Photo by Thomas Kelley',
    orientation: 'square',
    useForDemo: true
  }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
  {
    id: '1501876725168-00c445821c9e',
    caption: 'Photo by Teddy Kelley',
    orientation: 'landscape',
    useForDemo: true
  }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
  {
    id: '1499955085172-a104c9463ece',
    caption: 'Photo by Jay Ruzesky',
    orientation: 'landscape',
    useForDemo: true
  }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
  {
    id: '1497333684848-77a94ad20149',
    caption: 'Photo by Gwen Weustink',
    orientation: 'landscape',
    useForDemo: true
  }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
  {
    id: '1445510861639-5651173bc5d5',
    caption: 'Photo by Adam Willoughby-Knox',
    orientation: 'landscape',
    useForDemo: true
  }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
  {
    id: '1501876725168-00c445821c9e',
    caption: 'Photo by Boris Smokrovic',
    orientation: 'landscape'
  }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
  {
    id: '1444047427283-88a67f631b3e',
    caption: 'Photo by Gaetano Cessati',
    orientation: 'landscape'
  }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
  {
    id: '1472504929007-6d7cd0ef7d50',
    caption: 'Photo by Alan Emery',
    orientation: 'landscape'
  }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
  {
    id: '1424847262089-18a6858bd7e2',
    caption: 'Photo by Ján Jakub Naništa',
    orientation: 'landscape'
  }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
  {
    id: '1431102325666-4395d8bfac52',
    caption: 'Photo by Eric Knoll',
    orientation: 'landscape'
  } // https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
  // https://unsplash.com/photos/NUMlxTPsznM coyote?
]
class LightboxWrapper extends Component {
  render() {
    return (
      <Gallery
        images={THUMBNAIL_IMAGES.map(
          ({ caption, id, orientation, useForDemo }) => ({
            src: makeUnsplashSrc(id),
            thumbnail: makeUnsplashThumbnail(id, orientation),
            srcset: [
              makeUnsplashSrcSet(id, 1024),
              makeUnsplashSrcSet(id, 800),
              makeUnsplashSrcSet(id, 500),
              makeUnsplashSrcSet(id, 320)
            ],
            caption,
            orientation,
            useForDemo
          })
        )}
        showThumbnails
      />
    )
  }
}

export default LightboxWrapper
