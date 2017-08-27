import React, { PureComponent } from 'react'

import LeftZone from './leftZone'

class Toolbar extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-transparent navbar-absolute">
        <div className="container-fluid">
          <LeftZone />
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/api/logout">
                  <i className="material-icons">exit_to_app</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Toolbar
