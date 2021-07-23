import React, { useState, useEffect } from 'react'
import WeekView from './weekView'
import CalendarEventHandler from './calendarEventHandler'

function Calendar(props: any) {
  const [events, setEvents] = useState({})
  useEffect(() => {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
    setEvents(JSON.parse(localStorage.getItem('events')) || {})
  }, [])
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('events', JSON.stringify(events))
  })
  //   addNewEvent = event => {
  //     event = {
  //       ...event,
  //       id: CalendarEventHandler.generateId(event),
  //     };
  //     setEvents(previousSate => ({
  //       events: CalendarEventHandler.add(previousSate.events, event),
  //     }));
  //   };
  const addNewEvent = (event: object) => {
    event = {
      ...event,
      id: CalendarEventHandler.generateId(event),
    }
    setEvents(CalendarEventHandler.add(events, event))
  }

  const updateEvent = (eventId: string, updatedEvent: any) => {
    setEvents(CalendarEventHandler.update(
      eventId,
      updatedEvent,
      events
    ),

    )
  }
  const deleteEvent = (eventId: any) => {
    setEvents(CalendarEventHandler.delete(eventId, events),
    )
  }

  return (
    <WeekView
      events={events}
      onNewEvent={addNewEvent}
      onEventUpdate={updateEvent}
      onEventDelete={deleteEvent}
    />
  )
}
export default Calendar
