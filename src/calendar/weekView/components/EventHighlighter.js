import React, { useState, useCallback } from 'react'
import moment from 'moment'
import { MemoizedAddEventModal } from './AddEventModal'
import { generateWeekViewCoordinates } from '../../utils'
import { eventHighlighter } from './styles'

function EventHighlighter(props) {
  const [showEditEventModal, setShowEditEventModal] = useState(false)
  const [eventNewStart, setEventNewStart] = useState(null)
  const [eventNewEnd, setEventNewEnd] = useState(null)

  const deleteEvent = useCallback(() => {
    props.onEventDelete(props.event.id)
    setShowEditEventModal(false)
  }, [props])

  const updateEvent = useCallback((title) => {
    props.onEventUpdate(props.event.id, {
      title,
      start: eventNewStart,
      end: eventNewEnd,
    })
    setShowEditEventModal(false)
  }, [eventNewStart, eventNewEnd, props]);

  const openEditEventModal = useCallback(() => {
    setShowEditEventModal(true)
    setEventNewStart(props.event.start)
    setEventNewEnd(props.event.end)
  }, [props])

  const onCurrentEventTimeChange = useCallback((dates) => {
    if (dates) {
      setEventNewStart(+dates[0])
      setEventNewEnd(+dates[1])
    }
  }, []); //why sometimes it doesnt ask for dependencies?

  const closeModal = useCallback(() => {
    setShowEditEventModal(false)
  }, [])

  return (
    <React.Fragment>
      <MemoizedAddEventModal
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
          ...generateWeekViewCoordinates(props.event, props.startDate),
          ...eventHighlighter,
        }}
      >
        {props.event.title} <p />
        <span className='text-xs'>
          {moment(props.event.start).format('hh:mm a')} -{' '}
          {moment(props.event.end).format('hh:mm a')}
        </span>
      </div>
    </React.Fragment>
  )
}

export const MemoizedEventHighlighter = React.memo(EventHighlighter);
