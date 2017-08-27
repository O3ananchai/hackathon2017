import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button'

import Card from '../../components/Card'
import DisplayItem from './DisplayItem'
import ImageSlider from './ImageSlider'
import * as actions from '../../actions'

class RoomDetail extends PureComponent {
  componentDidMount() {
    this.props.fetchRoom(this.props.match.params.id)
  }

  render() {
    const { room, auth } = this.props
    if (!room) {
      return null
    }
    return (
      <div className="container-fluid">
        <Card title="รายละเอียดห้องพัก">
          <form className="form-horizontal">
            <DisplayItem title="ชื่อ" text={room.owner.name} />
            <DisplayItem title="ที่อยู่" text={room.address} />
            <DisplayItem
              title="ขนาด"
              text={`${room.width}x${room.long} ตรม.`}
            />
            <DisplayItem title="ราคา" text={room.price} />
            <DisplayItem title="มัดจำ" text={`${room.pledge} เดือน`} />
            <DisplayItem title="โทรศัพท์" text={room.owner.phoneNumber} />
            <ImageSlider />
            <div className="form-group">
              <div className="col-sm-offset-2 col-som-10">
                {auth
                  ? <Button bsStyle="primary">จอง</Button>
                  : <Link className="btn btn-primary" to="/sign-in">
                      จอง
                    </Link>}
                <Link className="btn btn-info" to="/search-room">
                  กลับ
                </Link>
              </div>
            </div>
          </form>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ roomDetail: { room }, auth }) => ({ room, auth })

export default connect(mapStateToProps, actions)(RoomDetail)
