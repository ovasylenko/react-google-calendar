import React from 'react';
import { Input, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function AddEvent(props) {
  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="Add Title"
        value={props.title}
        className="mt-6 mb-3"
        size="large"
        autoFocus={true}
        onChange={props.onTitleChange}
      />
      <RangePicker
        className="w-full"
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
