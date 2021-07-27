import { Col } from 'antd'
import { isTodaysDate } from '../../utils'

function TimeSlot(props) {
  return (
    <Col
      key={props.dateStamp}
      className={
        isTodaysDate(props.dateStamp)
          ? 'bg-gray-100 border h-10 cursor-pointer'
          : ' border h-10 cursor-pointer'
      }
      span={3}
      onClick={() => props.openAddEventModal(props.dateStamp, props.time)}
    />
  )
}

export default TimeSlot
