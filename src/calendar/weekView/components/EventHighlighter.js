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
        // className={`${generateWeekViewCoordinates(props.event, props.startDate)} absolute bg-blue-400 border border-solid border-blue-800 text-white cursor-pointer z-10`}
        style={{
          ...generateWeekViewCoordinates(
            props.event,
            props.startDate
          ),
          ...eventHighlighter,
        }}
      >
        {props.event.title} <br />
        <span className="text-xs">
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
