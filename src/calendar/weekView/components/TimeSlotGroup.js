import { Row, Col } from 'antd'
import { MemoizedTimeSlot } from './TimeSlot'
import moment from 'moment'
import React from 'react'

function TimeSlotGroup(props) {
  const formattedTime = moment().set('hours', props.time).format('h a')
  return (
    <Row type="flex" key={props.time} className='relative'>
      <Col className='text-xs text-right text-gray-600' span={3}>
        <span className='absolute right-1 -top-2'>{formattedTime === '12 am' ? '' : formattedTime}</span>
      </Col>
      {props.weekDays.map((day) => (
        <MemoizedTimeSlot
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

export const MemoizedTimeSlotGroup = React.memo(TimeSlotGroup)
