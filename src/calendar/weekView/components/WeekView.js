import { useState } from 'react'
import moment from 'moment'
import AddEventModal from './AddEventModal'
import WeekToolbar from './WeekToolbar'
import WeekHeader from './WeekHeader'
import TimeSlotGroup from './TimeSlotGroup'
import EventHighlighter from './EventHighlighter'
import { times, getAllDaysInTheWeek } from '../../utils'

// Functional Component Start
function WeekView(props) {
  const [startDate, setStartDate] = useState(+moment())
  const [weekDays, setWeekDays] = useState(getAllDaysInTheWeek())
  const [showAddEventModal, setShowAddEventModal] = useState(false)
  const [eventStart, setEventStart] = useState(null)
  const [eventEnd, setEventEnd] = useState(null)

  /**
   * Sets next week days in the state
   **/

  const goToNextWeek = () => {
    const dateAfter7Days = moment(startDate).add(7, 'days')
    setStartDate(+dateAfter7Days)
    setWeekDays(getAllDaysInTheWeek(dateAfter7Days))
  }
  /**
   * Sets previous week days in the state
   */
  const goToPreviousWeek = () => {
    const dateBefore7Days = moment(startDate).subtract(7, 'days')
    setStartDate(+dateBefore7Days)
    setWeekDays(getAllDaysInTheWeek(dateBefore7Days))
  }
  /**
   * Brings today's date in the view
   */
  const goToToday = () => {
    setStartDate(+moment())
    setWeekDays(getAllDaysInTheWeek())
  }

  /**
   * Opens the add event modal and initialize the date from the cell
   * @param {timeStamp} dateStamp - DateStamp of the cell the user clicked
   * @param {number} time - Time of the cell the user clicked
   */
  const openAddEventModal = (dateStamp, time) => {
    const start = moment(dateStamp).set('hour', time)
    const end = start.clone().add(1, 'hour')

    setShowAddEventModal(true)
    setEventStart(+start)
    setEventEnd(+end)
  }

  /**
   * Closes the add event modal
   */
  const onCloseAddEventModal = () => {
    setShowAddEventModal(false)
  }

  /**
   * Adds the new event and closes the add event modal
   * @param {string} title - Title of the new event
   */
  const onOkAddEventModal = (title) => {
    props.onNewEvent({
      title,
      start: eventStart,
      end: eventEnd,
    })
    setShowAddEventModal(false)
  }

  /**
   * Saves the timeStamps of the new event in the state
   * @param {arr: moment, moment} - Array containing start and end date of the new event
   */
  const onCurrentEventTimeChange = (dates) => {
    this.setState({
      eventStart: +dates[0],
      eventEnd: +dates[1],
    })
  }

  const { events } = props
  return (
    <div className="pr-24 pl-1 py-10">
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
