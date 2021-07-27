import { Row, Col } from 'antd'
import TimeSlot from './TimeSlot'
import moment from 'moment'

function TimeSlotGroup(props) {
  const formattedTime = moment().set('hours', props.time).format('h a')
  return (
    <Row key={props.time} className='relative'>
      {/* removed "type=flex" */}
      <Col className='text-xs text-right text-gray-600' span={3}>
        <span className='absolute right-1 -top-2'>{formattedTime}</span>
      </Col>
      {props.weekDays.map((day) => (
        <TimeSlot
          key={day.dateStamp}
          dateStamp={day.dateStamp}
          time={props.time}
          openAddEventModal={props.openAddEventModal}
        />
      ))}
      {props.children}
    </Row>
  )
}

export default TimeSlotGroup
