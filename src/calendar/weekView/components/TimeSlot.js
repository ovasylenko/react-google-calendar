import React, { useCallback } from 'react'
import { Col } from 'antd'
import { isTodaysDate } from '../../utils'

function TimeSlot(props) {

  const clickToOpenEventModal = useCallback(
    () => {
      props.openAddEventModal(props.dateStamp, props.time)
    },
    [props],
  )
  return (
    <Col
      key={props.dateStamp}
      className={
        isTodaysDate(props.dateStamp)
          ? 'bg-gray-100 border h-10 cursor-pointer'
          : ' border h-10 cursor-pointer'
      }
      span={3}
      onClick={clickToOpenEventModal}
    />
  )
}

export const MemoizedTimeSlot = React.memo(TimeSlot);
