import { Row, Col } from 'antd'
import { isTodaysDate } from '../../utils'

function WeekHeader(props) {
  return (
    <Row type='flex'>
      <Col span={3} />
      {props.weekDays.map((day) => (
        <Col
          key={day.dateStamp}
          span={3}
          className={
            isTodaysDate(day.dateStamp)
              ? 'bg-gray-100 border h-full'
              : ' border h-full'
          }
        >
          <div className='flex justify-between text-sm leading-8 px-2 text-gray-500'>
            <div>{day.weekDayName}</div>
            <div className='text-2xl'> {day.date}</div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default WeekHeader
