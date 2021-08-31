import React  from 'react';
import { currDurationArr, timeZone, currentDay } from './utils'

const HeaderForMainCalendar = () => {
  const weekArray = currDurationArr('week', 'day')

  return (
      <div className="grid grid-cols-8 justify-between align-center items-center text-center h-auto w-auto font-bold text-lg min-w-max">
        <div className="grid justify-end align-end text-m font-light mr-4 text-sm">{timeZone}</div>
        {weekArray.map((weekDay, index) => {
          return (
            <div key={index} className="grid grid-cols-2 justify-center items-center text-center border h-12 px-2">
              <div className="grid uppercase font-light" >{weekDay[0]}</div>
              <div className={(weekDay[1] === currentDay) && "bg-blue-500 text-white font-bold border-2 border-blue-600 rounded-full"}>{weekDay[1]}</div>
            </div>
          );
        })}
      </div>
  );
};

export default HeaderForMainCalendar;
