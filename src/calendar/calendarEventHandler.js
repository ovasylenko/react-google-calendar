import { DateTime } from 'luxon'

const CalendarEventHandler = (function () {
  function addEvent(allEvents, newEvent) {

    const time = DateTime.fromMillis(newEvent.start).get('hour')
    const eventWithMeetInfo = {
      ...newEvent,
      startWeek: DateTime.fromMillis(newEvent.start).weekNumber+1,
      endWeek: DateTime.fromMillis(newEvent.end).weekNumber+1,
    }
    if (allEvents[time]) {
      allEvents[time].push(eventWithMeetInfo)
    } else {
      allEvents[time] = [eventWithMeetInfo]
    }
    return { ...allEvents }
  }

  function generateUniqueId({ start, title, end }) {
    return start + title + end
  }

  function deleteEvent(eventId, allEvents) {
    Object.keys(allEvents).forEach((time) => {
      allEvents[time] = allEvents[time].filter((event) => event.id !== eventId)
    })
    return { ...allEvents }
  }

  function updateEvent(eventId, updatedEvent, allEvents) {
    Object.keys(allEvents).forEach((time) => {
      allEvents[time] = allEvents[time].map((event) =>
        event.id === eventId ? { ...event, ...updatedEvent } : event
      )
    })
    return { ...allEvents }
  }

  return {
    add: addEvent,
    delete: deleteEvent,
    update: updateEvent,
    generateId: generateUniqueId,
  }
})()

export default CalendarEventHandler
