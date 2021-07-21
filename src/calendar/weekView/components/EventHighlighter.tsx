import React, { useState } from 'react';
import moment from 'moment';
// @ts-expect-error ts-migrate(6142) FIXME: Module './AddEventModal' was resolved to '/Users/a... Remove this comment to see the full error message
import AddEventModal from './AddEventModal';
import { generateWeekViewCoordinates } from '../../utils';
import { eventHighlighter } from '../styles';


//Functional Component Start

function EventHighlighter(props: any) {
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
  const updateEvent = (title: any) => {
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
  const onCurrentEventTimeChange = (dates: any) => {
    console.log('called');
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
    setEventNewStart(+dates[0]);
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
    setEventNewEnd(+dates[1]);
  };
  /**
   * Closes modal and does nothing more!
   */
  const closeModal = () => {
    setShowEditEventModal(false);
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <React.Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div
        onClick={openEditEventModal}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ position: string; backgroundColor: string;... Remove this comment to see the full error message
        style={{
          ...generateWeekViewCoordinates(
            props.event,
            props.startDate
          ),
          ...eventHighlighter,
        }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {props.event.title} <br />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
