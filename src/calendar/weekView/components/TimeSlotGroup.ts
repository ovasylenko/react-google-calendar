import {Row, Col} from 'antd';
import TimeSlot from './TimeSlot';
import {row, timeCol, timeString} from '../styles';
import moment from 'moment';

function TimeSlotGroup (props: any) {
  const formattedTime = moment ().set ('hours', props.time).format ('h a');
  return (
    // @ts-expect-error ts-migrate(2749) FIXME: 'Row' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Row type="flex" key={props.time} style={row}>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Col' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Col style={timeCol} span={3}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span style={timeString}>
          {formattedTime}
        </span>
      </Col>
      // @ts-expect-error ts-migrate(2749) FIXME: 'TimeSlot' refers to a value, but is being used as... Remove this comment to see the full error message
      {props.weekDays.map ((day: any) => <TimeSlot
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
        key={day.dateStamp}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'dateStamp'.
        dateStamp={day.dateStamp}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'time'.
        time={props.time}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'openAddEventModal'.
        openAddEventModal={props.openAddEventModal}
      />)}
      {props.children}
    </Row>
  );
}

export default TimeSlotGroup;
