import {Row, Col} from 'antd';
import {
  col,
  weekDays,
  weekDayName,
  weekDates,
  lightHighlighter,
} from '../styles';
import {isTodaysDate} from '../../utils';

function WeekHeader (props: any) {
  return (
    // @ts-expect-error ts-migrate(2749) FIXME: 'Row' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Row type="flex">
      // @ts-expect-error ts-migrate(2749) FIXME: 'Col' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Col span={3} />
      // @ts-expect-error ts-migrate(2749) FIXME: 'Col' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      {props.weekDays.map ((day: any) => <Col
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
        key={day.dateStamp}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        span={3}
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'style'.
        style={
          // @ts-expect-error ts-migrate(2693) FIXME: 'any' only refers to a type, but is being used as ... Remove this comment to see the full error message
          isTodaysDate (day: any.dateStamp)
            ? {...col, ...weekDays, ...lightHighlighter}
            : {...col, ...weekDays}
        }
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        <p style={weekDayName}>{day.weekDayName}</p>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        <p style={weekDates}>{day.date}</p>
      </Col>)}
    </Row>
  );
}

export default WeekHeader;
