import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class RightZone extends PureComponent {
  render() {
    const { auth } = this.props
    return (
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <h5>
              {auth ? `ยินดีต้อนรับคุณ ${auth.displayName}` : 'เข้าสู่ระบบ'}
            </h5>
          </li>
          <li>
            {auth
              ? <a href="/api/sign-out">
                  <i className="material-icons">exit_to_app</i>
                </a>
              : <Link to="/sign-in">
                  <i className="material-icons">account_circle</i>
                </Link>}
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(RightZone)
