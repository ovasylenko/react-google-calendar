import { useState } from 'react'
import moment from 'moment'
import AddEventModal from './AddEventModal'
import WeekToolbar from './WeekToolbar'
import WeekHeader from './WeekHeader'
import TimeSlotGroup from './TimeSlotGroup'
import EventHighlighter from './EventHighlighter'
import { times, getAllDaysInTheWeek } from '../../utils'

function WeekView(props) {
  const [startDate, setStartDate] = useState(+moment())
  const [weekDays, setWeekDays] = useState(getAllDaysInTheWeek())
  const [showAddEventModal, setShowAddEventModal] = useState(false)
  const [eventStart, setEventStart] = useState(null)
  const [eventEnd, setEventEnd] = useState(null)

  const goToNextWeek = () => {
    const dateAfter7Days = moment(startDate).add(7, 'days')
    setStartDate(+dateAfter7Days)
    setWeekDays(getAllDaysInTheWeek(dateAfter7Days))
  }
  const goToPreviousWeek = () => {
    const dateBefore7Days = moment(startDate).subtract(7, 'days')
    setStartDate(+dateBefore7Days)
    setWeekDays(getAllDaysInTheWeek(dateBefore7Days))
  }
  const goToToday = () => {
    setStartDate(+moment())
    setWeekDays(getAllDaysInTheWeek())
  }

  const openAddEventModal = (dateStamp, time) => {
    const start = moment(dateStamp).set('hour', time)
    const end = start.clone().add(1, 'hour')

    setShowAddEventModal(true)
    setEventStart(+start)
    setEventEnd(+end)
  }

  const onCloseAddEventModal = () => {
    setShowAddEventModal(false)
  }

  const onOkAddEventModal = (title) => {
    props.onNewEvent({
      title,
      start: eventStart,
      end: eventEnd,
    })
    setShowAddEventModal(false)
  }

  const onCurrentEventTimeChange = (dates) => {
    setEventStart(+dates[0])
    setEventEnd(+dates[1])
  }

  const { events } = props
  return (
    <div className='pr-24 pl-1 py-10'>
      <AddEventModal
        visible={showAddEventModal}
        onCancel={onCloseAddEventModal}
        onClose={onCloseAddEventModal}
        onOk={onOkAddEventModal}
        eventStart={eventStart}
        eventEnd={eventEnd}
        onTimeChange={onCurrentEventTimeChange}
      />

      <WeekToolbar
        goToPreviousWeek={goToPreviousWeek}
        goToNextWeek={goToNextWeek}
        startDate={startDate}
        goToToday={goToToday}
      />

      <WeekHeader weekDays={weekDays} />

      {times.map((time) => (
        <TimeSlotGroup
          key={time}
          time={time}
          weekDays={weekDays}
          events={events[time]}
          openAddEventModal={openAddEventModal}
        >
          {events[time] &&
            events[time].map(
              (event) =>
                event.startWeek <= moment(startDate).week() &&
                event.endWeek >= moment(startDate).week() && (
                  <EventHighlighter
                    onEventDelete={props.onEventDelete}
                    onEventUpdate={props.onEventUpdate}
                    key={event.title + event.end + event.start}
                    startDate={startDate}
                    event={event}
                  />
                )
            )}
        </TimeSlotGroup>
      ))}
    </div>
  )
}
export default WeekView
