import { useState } from 'react'
import moment from 'moment'
// @ts-expect-error ts-migrate(6142) FIXME: Module './AddEventModal' was resolved to '/Users/a... Remove this comment to see the full error message
import AddEventModal from './AddEventModal'
import WeekToolbar from './WeekToolbar'
import WeekHeader from './WeekHeader'
import TimeSlotGroup from './TimeSlotGroup'
// @ts-expect-error ts-migrate(6142) FIXME: Module './EventHighlighter' was resolved to '/User... Remove this comment to see the full error message
import EventHighlighter from './EventHighlighter'
import { times, getAllDaysInTheWeek } from '../../utils'
import { container } from '../styles'

// Functional Component Start
function WeekView(this: any, props: any) {
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
  const openAddEventModal = (dateStamp: any, time: any) => {
    const start = moment(dateStamp).set('hour', time)
    const end = start.clone().add(1, 'hour')

    setShowAddEventModal(true)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
    setEventStart(+start)
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
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
  const onOkAddEventModal = (title: any) => {
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
  const onCurrentEventTimeChange = (dates: any) => {
    this.setState({
      eventStart: +dates[0],
      eventEnd: +dates[1],
    })
  }

  const { events } = props
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div style={container}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <AddEventModal
        visible={showAddEventModal}
        onCancel={onCloseAddEventModal}
        onClose={onCloseAddEventModal}
        onOk={onOkAddEventModal}
        eventStart={eventStart}
        eventEnd={eventEnd}
        onTimeChange={onCurrentEventTimeChange}
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <WeekToolbar
        goToPreviousWeek={goToPreviousWeek}
        goToNextWeek={goToNextWeek}
        startDate={startDate}
        goToToday={goToToday}
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <WeekHeader weekDays={weekDays} />

      {times.map((time) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TimeSlotGroup
          key={time}
          time={time}
          weekDays={weekDays}
          events={events[time]}
          openAddEventModal={openAddEventModal}
        >
          {events[time] &&
            events[time].map(
              (event: any) => event.startWeek <= moment(startDate).week() &&
              event.endWeek >= moment(startDate).week() && (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
  );
}
export default WeekView
