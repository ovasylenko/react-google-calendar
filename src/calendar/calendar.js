import { useCallback, useState } from 'react'
import MemoizedWeekView from './weekView/'
import CalendarEventHandler from './calendarEventHandler'
import React from 'react'

function SkillCrucialCalendar({ eventsFromProps }) {
  const [events, setEvents] = useState(eventsFromProps)
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('events', JSON.stringify(events))
  })
  const addNewEvent = useCallback((event) => {
    event = {
      ...event,
      id: CalendarEventHandler.generateId(event),
    }
    setEvents(CalendarEventHandler.add(events, event))
  }, [events]);

  const updateEvent = useCallback((eventId, updatedEvent) => {
    setEvents(CalendarEventHandler.delete(eventId, events))
    setEvents(CalendarEventHandler.add(events, updatedEvent))
  }, [events]);

  const deleteEvent = useCallback((eventId) => {
    setEvents(CalendarEventHandler.delete(eventId, events))
  }, [events]);


  return (
    <MemoizedWeekView
      className='flex-grow w-max'
      events={events}
      onNewEvent={addNewEvent}
      onEventUpdate={updateEvent}
      onEventDelete={deleteEvent}
    />
  )
}
export const MemoizedSkillCrucialCalendar = React.memo(SkillCrucialCalendar)
