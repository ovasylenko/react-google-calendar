import React, { useState } from 'react'
import moment from 'moment'
import AddEventModal from './AddEventModal'
import WeekToolbar from './WeekToolbar'
import WeekHeader from './WeekHeader'
import TimeSlotGroup from './TimeSlotGroup'
import EventHighlighter from './EventHighlighter'
import { times, getAllDaysInTheWeek } from '../../utils'
import { container } from '../styles'

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

  //const { weekDays, showAddEventModal, eventStart, eventEnd, startDate } = state
  const { events } = props
  return (
    <div style={container}>
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
//functional Component End

// class WeekView extends Component {
//   state = {
//     startDate: +moment(),
//     weekDays: getAllDaysInTheWeek(),
//     showAddEventModal: false,
//     eventStart: null,
//     eventEnd: null,
//   }

//   /**
//    * Sets next week days in the state
//    */
//   goToNextWeek = () => {
//     const dateAfter7Days = moment(this.state.startDate).add(7, 'days')
//     this.setState({
//       startDate: +dateAfter7Days,
//       weekDays: getAllDaysInTheWeek(dateAfter7Days),
//     })
//   }

//   /**
//    * Sets previous week days in the state
//    */
//   goToPreviousWeek = () => {
//     const dateBefore7Days = moment(this.state.startDate).subtract(7, 'days')
//     this.setState({
//       startDate: +dateBefore7Days,
//       weekDays: getAllDaysInTheWeek(dateBefore7Days),
//     })
//   }

//   /**
//    * Brings today's date in the view
//    */
//   goToToday = () => {
//     this.setState({
//       startDate: +moment(),
//       weekDays: getAllDaysInTheWeek(),
//     })
//   }

//   /**
//    * Opens the add event modal and initialize the date from the cell
//    * @param {timeStamp} dateStamp - DateStamp of the cell the user clicked
//    * @param {number} time - Time of the cell the user clicked
//    */
//   openAddEventModal = (dateStamp, time) => {
//     const start = moment(dateStamp).set('hour', time)
//     const end = start.clone().add(1, 'hour')

//     this.setState({
//       showAddEventModal: true,
//       eventStart: +start,
//       eventEnd: +end,
//     })
//   }

//   /**
//    * Closes the add event modal
//    */
//   onCloseAddEventModal = () => {
//     this.setState({
//       showAddEventModal: false,
//     })
//   }

//   /**
//    * Adds the new event and closes the add event modal
//    * @param {string} title - Title of the new event
//    */
//   onOkAddEventModal = (title) => {
//     this.props.onNewEvent({
//       title,
//       start: this.state.eventStart,
//       end: this.state.eventEnd,
//     })
//     this.setState({
//       showAddEventModal: false,
//     })
//   }

//   /**
//    * Saves the timeStamps of the new event in the state
//    * @param {arr: moment, moment} - Array containing start and end date of the new event
//    */
//   onCurrentEventTimeChange = (dates) => {
//     this.setState({
//       eventStart: +dates[0],
//       eventEnd: +dates[1],
//     })
//   }

//   render() {
//     const { weekDays, showAddEventModal, eventStart, eventEnd, startDate } =
//       this.state
//     const { events } = this.props
//     return (
//       <div style={container}>
//         <AddEventModal
//           visible={showAddEventModal}
//           onCancel={this.onCloseAddEventModal}
//           onClose={this.onCloseAddEventModal}
//           onOk={this.onOkAddEventModal}
//           eventStart={eventStart}
//           eventEnd={eventEnd}
//           onTimeChange={this.onCurrentEventTimeChange}
//         />

//         <WeekToolbar
//           goToPreviousWeek={this.goToPreviousWeek}
//           goToNextWeek={this.goToNextWeek}
//           startDate={startDate}
//           goToToday={this.goToToday}
//         />

//         <WeekHeader weekDays={weekDays} />

//         {times.map((time) => (
//           <TimeSlotGroup
//             key={time}
//             time={time}
//             weekDays={weekDays}
//             events={events[time]}
//             openAddEventModal={this.openAddEventModal}
//           >
//             {events[time] &&
//               events[time].map(
//                 (event) =>
//                   event.startWeek <= moment(startDate).week() &&
//                   event.endWeek >= moment(startDate).week() && (
//                     <EventHighlighter
//                       onEventDelete={this.props.onEventDelete}
//                       onEventUpdate={this.props.onEventUpdate}
//                       key={event.title + event.end + event.start}
//                       startDate={startDate}
//                       event={event}
//                     />
//                   )
//               )}
//           </TimeSlotGroup>
//         ))}
//       </div>
//     )
//   }
// }
