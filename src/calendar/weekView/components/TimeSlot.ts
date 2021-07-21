import {Col} from 'antd';
import {col, slot, lightHighlighter} from '../styles';
import {isTodaysDate} from '../../utils';

function TimeSlot (props: any) {
  return (
    // @ts-expect-error ts-migrate(2749) FIXME: 'Col' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Col
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'key'.
      key={props.dateStamp}
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'style'.
      style={
        // @ts-expect-error ts-migrate(2693) FIXME: 'any' only refers to a type, but is being used as ... Remove this comment to see the full error message
        isTodaysDate (props: any.dateStamp)
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          ? {...col, ...slot, ...lightHighlighter}
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          : {...col, ...slot}
      }
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      span={3}
      // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
      onClick={() => props.openAddEventModal (props.dateStamp, props.time)}
    />
  );
}

export default TimeSlot;
