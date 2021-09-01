import React  from 'react';
import { currDurationArr } from './utils'

const TimePanel = () => {
  const hoursArray = currDurationArr('day', 'hour')

return (
  <div>
    {hoursArray.map((hour, index) => {
        return (
          <div className="grid h-12 text-right pr-4 pt-9" key={index}>
            {hour}
          </div>
        );
    })}
  </div>
  )
};

export default TimePanel;
