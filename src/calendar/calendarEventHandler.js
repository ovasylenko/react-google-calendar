// import moment from 'moment'
import { DateTime } from 'luxon'

const CalendarEventHandler = (function () {
  function addEvent(allEvents, newEvent) {
    console.log('newEvent', newEvent)

    const time = DateTime.fromMillis(newEvent.start).get('hour')
    // const time = moment(newEvent.start).hours()
    const eventWithMeetInfo = {
      ...newEvent,
      startWeek: DateTime.fromMillis(newEvent.start).weekNumber,
      endWeek: DateTime.fromMillis(newEvent.end).weekNumber,
      // startWeek: moment(newEvent.start).week(),
      // endWeek: moment(newEvent.end).week(),
    }
    console.log('eventWithMeetInfo', eventWithMeetInfo)
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
