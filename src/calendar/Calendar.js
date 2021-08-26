import React from 'react'
import Header from './Header'
import Widget from './Widget'
import MainCalendar from './MainCalendar'



const Calendar = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid grid-flow-col">
        <Widget />
        <MainCalendar />
      </div>
    </div>
  );
}

export default Calendar
