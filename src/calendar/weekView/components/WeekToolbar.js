import { Row, Col, Button, Tooltip } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import moment from 'moment'

function WeekToolbar(props) {
  const formattedDate = moment(props.startDate).format('MMM YYYY')
  return (
    <Row type='flex' gutter={4} className='pb-4'>
      <Col span={6} offset={3} className='text-2xl font-bold'>
        SkillCrucial Calendar
      </Col>
      <Col span={3} offset={8}>
        <Tooltip placement='topLeft' title={moment().format('dddd, MMM D')}>
          <Button
            onClick={props.goToToday}
            className='font-semibold opacity-70'
          >
            Today
          </Button>
        </Tooltip>
      </Col>

      <Col span={2}>
        <Button
          onClick={props.goToPreviousWeek}
          className='p-0'
          icon={<LeftOutlined className='' />}
        />
        <Button onClick={props.goToNextWeek} icon={<RightOutlined />} />
      </Col>

      <Col span={2} className='text-2xl text-right opacity-50 font-semibold'>
        {formattedDate}
      </Col>
    </Row>
  )
}

export default WeekToolbar
