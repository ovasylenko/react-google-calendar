import React, { useState } from 'react';
import moment from 'moment';
import AddEventModal from './AddEventModal';
import { generateWeekViewCoordinates } from '../../utils';
import { eventHighlighter } from '../styles';


//Functional Component Start

function EventHighlighter(props) {
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [eventNewStart, setEventNewStart] = useState(null);
  const [eventNewEnd, setEventNewEnd] = useState(null);

  /**
   * Deletes the event from the event list
  */
  const deleteEvent = () => {
    props.onEventDelete(props.event.id);
    setShowEditEventModal(false);
  }

  /**
   * Updates the event
   * @param {string} title - Updated title of the event
   */
  const updateEvent = (title) => {
    props.onEventUpdate(props.event.id, {
      title,
      start: eventNewStart,
      end: eventNewEnd,
    });
    setShowEditEventModal(false);
  }
  /**
     * Open the edit event modal and initializes the start and end time
     */
  const openEditEventModal = () => {
    console.log(props.event.title);
    setShowEditEventModal(true);
    setEventNewStart(props.event.start);
    setEventNewEnd(props.event.end);
  };

  /**
   * Set the updated start and end times the state of the event being edited
   * @param {arr: moment, moment} - Array containing start and end date of the event
   */
  const onCurrentEventTimeChange = (dates) => {
    console.log('called');
    setEventNewStart(+dates[0]);
    setEventNewEnd(+dates[1]);
  };
  /**
   * Closes modal and does nothing more!
   */
  const closeModal = () => {
    setShowEditEventModal(false);
  };

  return (
    <React.Fragment>
      <AddEventModal
        editMode={true}
        eventTitle={props.event.title}
        visible={showEditEventModal}
        onCancel={deleteEvent}
        onClose={closeModal}
        onOk={updateEvent}
        eventStart={eventNewStart}
        eventEnd={eventNewEnd}
        onTimeChange={onCurrentEventTimeChange}
      />
      <div
        onClick={openEditEventModal}
        style={{
          ...generateWeekViewCoordinates(
            props.event,
            props.startDate
          ),
          ...eventHighlighter,
        }}
      >
        {props.event.title} <br />
        <span style={{ fontSize: 10 }}>
          {moment(props.event.start).format('hh:mm a')}
          {' '}
            -
            {' '}
          {moment(props.event.end).format('hh:mm a')}
        </span>
      </div>
    </React.Fragment>
  );
}

export default EventHighlighter;
// class EventHighlighter extends Component {
//   state = {
//     showEditEventModal: false,
//     eventNewStart: null,
//     eventNewEnd: null,
//   };

//   /**
//    * Deletes the event from the event list
//   */
//   deleteEvent = () => {
//     this.props.onEventDelete (this.props.event.id);
//     this.setState ({
//       showEditEventModal: false,
//     });
//   };

//   /**
//    * Updates the event
//    * @param {string} title - Updated title of the event
//    */
//   updateEvent = title => {
//     this.props.onEventUpdate (this.props.event.id, {
//       title,
//       start: this.state.eventNewStart,
//       end: this.state.eventNewEnd,
//     });
//     this.setState ({
//       showEditEventModal: false,
//     });
//   };

//   /**
//    * Open the edit event modal and initializes the start and end time
//    */
//   openEditEventModal = () => {
//     console.log (this.props.event.title);
//     this.setState ({
//       showEditEventModal: true,
//       eventNewStart: this.props.event.start,
//       eventNewEnd: this.props.event.end,
//     });
//   };

//   /**
//    * Set the updated start and end times the state of the event being edited
//    * @param {arr: moment, moment} - Array containing start and end date of the event
//    */
//   onCurrentEventTimeChange = dates => {
//     console.log ('called');
//     this.setState ({
//       eventNewStart: +dates[0],
//       eventNewEnd: +dates[1],
//     });
//   };

//   /**
//    * Closes modal and does nothing more!
//    */
//   closeModal = () => {
//     this.setState ({
//       showEditEventModal: false,
//     });
//   };

//   render () {
//     const {showEditEventModal, eventNewStart, eventNewEnd} = this.state;
//     return (
//       <React.Fragment>
//         <AddEventModal
//           editMode={true}
//           eventTitle={this.props.event.title}
//           visible={showEditEventModal}
//           onCancel={this.deleteEvent}
//           onClose={this.closeModal}
//           onOk={this.updateEvent}
//           eventStart={eventNewStart}
//           eventEnd={eventNewEnd}
//           onTimeChange={this.onCurrentEventTimeChange}
//         />
//         <div
//           onClick={this.openEditEventModal}
//           style={{
//             ...generateWeekViewCoordinates (
//               this.props.event,
//               this.props.startDate
//             ),
//             ...eventHighlighter,
//           }}
//         >
//           {this.props.event.title} <br />
//           <span style={{fontSize: 10}}>
//             {moment (this.props.event.start).format ('hh:mm a')}
//             {' '}
//             -
//             {' '}
//             {moment (this.props.event.end).format ('hh:mm a')}
//           </span>
//         </div>
//       </React.Fragment>
//     );
//   }
// }


