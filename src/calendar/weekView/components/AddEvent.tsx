import React from 'react';
import { Input, DatePicker } from 'antd';
import moment from 'moment';
import { inputStyles } from '../styles';

const { RangePicker } = DatePicker;

function AddEvent(props: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <React.Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Input
        type="text"
        placeholder="Add Title"
        value={props.title}
        style={inputStyles}
        size="large"
        autoFocus={true}
        onChange={props.onTitleChange}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RangePicker
        style={{ width: '100%' }}
        value={[moment(props.start), moment(props.end)]}
        onChange={props.onTimeChange}
        showTime={{
          format: 'HH:mm',
          hourStep: 1,
          minuteStep: 30,
          defaultValue: [moment(props.start), moment(props.end)],
        }}
        format="MMM Do, YYYY hh:mm a"
      />
    </React.Fragment>
  );
}

export default AddEvent;
