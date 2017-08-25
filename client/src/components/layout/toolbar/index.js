import React, { PureComponent } from 'react'

import LeftZone from './leftZone'

class Toolbar extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-transparent navbar-absolute">
        <div className="container-fluid">
          <LeftZone />
        </div>
      </nav>
    )
  }
}

export default Toolbar
