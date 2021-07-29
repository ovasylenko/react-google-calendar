import { useState, useEffect } from 'react'
import WeekView from './weekView'
import CalendarEventHandler from './calendarEventHandler'

function Calendar(props) {
  const [events, setEvents] = useState({})
  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem('events')) || {})
  }, [])
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('events', JSON.stringify(events))
  })

  const addNewEvent = (event) => {
    event = {
      ...event,
      id: CalendarEventHandler.generateId(event),
    }
    setEvents(CalendarEventHandler.add(events, event))
  }

  const updateEvent = (eventId, updatedEvent) => {
    setEvents(CalendarEventHandler.delete(eventId, events))
    setEvents(CalendarEventHandler.add(events, updatedEvent))
  }
  const deleteEvent = (eventId) => {
    setEvents(CalendarEventHandler.delete(eventId, events))
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
