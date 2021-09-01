import React from 'react'
import Header from './Header'
import Widget from './Widget'
import MainCalendar from './MainCalendar'
import Events from './Events'

const events = '123456'

// events= {
//485456784658236ngg: { id: '485456784658236ngg'
//                      start: 78423767856378,
//                      end: 462736327632785687,
//                      title: 'sbkrgbkdf',
//                     },
//ghi594848t984uw9rug: { id: 'ghi594848t984uw9rug'
//                      start: 78423767856378,
//                      end: 462736327632785687,
//                      title: 'sbkrgbkdf',
//                     }
//}

const Calendar = ( ) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid grid-flow-col">
        <Widget />
        <MainCalendar />
        <Events events={events}/>
      </div>
    </div>
  );
}

export default Calendar
