import React, { useState, useCallback } from 'react'
import moment from 'moment'
import { MemoizedAddEventModal } from './AddEventModal'
import { MemoizedWeekToolbar } from './WeekToolbar'
import { MemoizedWeekHeader } from './WeekHeader'
import { MemoizedTimeSlotGroup } from './TimeSlotGroup'
import { MemoizedEventHighlighter } from './EventHighlighter'
import { times, getAllDaysInTheWeek } from '../../utils'
import Calendar from 'react-calendar'
import '../../../styles/Calendar.css'

function DayView({ events, onEventDelete, onEventUpdate, onNewEvent }) {
    const [startDate, setStartDate] = useState(+moment())
    const [weekDays, setWeekDays] = useState(getAllDaysInTheWeek())
    const [showAddEventModal, setShowAddEventModal] = useState(false)
    const [eventStart, setEventStart] = useState(null)
    const [eventEnd, setEventEnd] = useState(null)

    const goToNextWeek = useCallback(() => {
        const dateAfter7Days = moment(startDate).add(7, 'days')
        setStartDate(+dateAfter7Days)
        setWeekDays(getAllDaysInTheWeek(dateAfter7Days))
    }, [startDate]);

    const goToPreviousWeek = useCallback(() => {
        const dateBefore7Days = moment(startDate).subtract(7, 'days')
        setStartDate(+dateBefore7Days)
        setWeekDays(getAllDaysInTheWeek(dateBefore7Days))
    }, [startDate]); //why I cant put weekDays in the array of dependencies

    const goToToday = useCallback(() => {
        setStartDate(+moment())
        setWeekDays(getAllDaysInTheWeek())
    }, []);

    const openAddEventModal = useCallback((dateStamp, time) => {
        const start = moment(dateStamp).set('hour', time)
        const end = start.clone().add(1, 'hour')

        setShowAddEventModal(true)
        setEventStart(+start)
        setEventEnd(+end)
    }, []);

    const onCloseAddEventModal = useCallback(() => {
        setShowAddEventModal(false)
    }, []);

    const onOkAddEventModal = useCallback((title) => {
        onNewEvent({
            title,
            start: eventStart,
            end: eventEnd,
        })
        setShowAddEventModal(false)
    }, [eventStart, eventEnd, onNewEvent]);

    const onCurrentEventTimeChange = useCallback((dates) => {
        setEventStart(+dates[0])
        setEventEnd(+dates[1])
    }, []);
    return (
        <div className='px-4 py-12 w-full'>
            <MemoizedAddEventModal
                visible={showAddEventModal}
                onCancel={onCloseAddEventModal}
                onClose={onCloseAddEventModal}
                onOk={onOkAddEventModal}
                eventStart={eventStart}
                eventEnd={eventEnd}
                onTimeChange={onCurrentEventTimeChange}
            />

            <MemoizedWeekToolbar
                goToPreviousWeek={goToPreviousWeek}
                goToNextWeek={goToNextWeek}
                startDate={startDate}
                goToToday={goToToday}
            />
            <div className='flex justify-center content-around w-full'>
                <Calendar
                    value={new Date(startDate)}
                    locale='en-US'
                    onClickDay={(val) => {
                        setStartDate(moment(val))
                        setWeekDays(getAllDaysInTheWeek(moment(val)))
                    }}
                    className='react-calendar h-full ml-16 p-3 shadow-lg rounded-xl'
                />
                <div className='w-full'>
                    <MemoizedWeekHeader weekDays={weekDays} />

                    {times.map((time) => (
                        <MemoizedTimeSlotGroup
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
                                            <MemoizedEventHighlighter
                                                onEventDelete={onEventDelete}
                                                onEventUpdate={onEventUpdate}
                                                key={event.title + event.end + event.start}
                                                startDate={startDate}
                                                event={event}
                                            />
                                        )
                                )}
                        </MemoizedTimeSlotGroup>
                    ))}
                </div>
            </div>
        </div>
    )
}
export const MemoizedDayView = React.memo(DayView)
