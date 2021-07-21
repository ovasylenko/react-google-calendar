import { Row, Col, Button, Tooltip } from 'antd';
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons,
} from '../styles';
import moment from 'moment';

function WeekToolbar(props: any) {
  const formattedDate = moment(props.startDate).format('MMM YYYY');
  return (
    // @ts-expect-error ts-migrate(2749) FIXME: 'Row' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Row type="flex" gutter={4} style={toolbar}>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Col' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Col span={6} offset={3} style={appTitle}>
        {/* <Icon type="calendar" style={spacify} />Meeting Calendar */}
      </Col>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      <Col span={3} offset={8} style={alignRight}>
        // @ts-expect-error ts-migrate(2749) FIXME: 'Tooltip' refers to a value, but is being used as ... Remove this comment to see the full error message
        <Tooltip placement="topLeft" title={moment().format('dddd, MMM D')}>
          // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button onClick={props.goToToday}>Today</Button>
        </Tooltip>
      </Col>

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      <Col span={2} style={weekButtons}>
        // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button onClick={props.goToPreviousWeek} style={spacify} icon="left" />
        // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button onClick={props.goToNextWeek} icon="right" />
      </Col>

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      <Col span={2} style={toolbarDate}>
        {formattedDate}
      </Col>

    </Row>
  );
}

export default WeekToolbar;
