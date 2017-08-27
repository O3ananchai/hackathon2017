import React, { PureComponent } from 'react'

class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <a
          href="/api/sign-out"
          className="simple-text"
          style={{ color: '#FF0000' }}
        >
          Hackathon 2017
        </a>
      </div>
    )
  }
}

export default Logo
