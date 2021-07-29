import moment from 'moment'

export const getAllDaysInTheWeek = (currentDate = moment()) => {
  const weekStart = currentDate.clone().startOf('week')

  const days = Array.from(Array(7))
    .map((day, index) => index)
    .map((day) =>
      moment(weekStart).add(day, 'days').set('minutes', 0).set('seconds', 0)
    )
    .map((momentObj) => ({
      date: momentObj.date(),
      dateStamp: +momentObj,
      weekDayName: momentObj.format('ddd'),
    }))

  return days
}

export const times = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
]

export const generateWeekViewCoordinates = (event, startDate) => {
  const start = moment(event.start)
  const end = moment(event.end)
  const duration = moment.duration(end.diff(start))
  const weekStart = moment(startDate)

  const top = start.minutes() === 30 ? '1/2' : '0'

  const timeFactor = duration.hours() + duration.minutes() / 60
  const height = timeFactor * 100

  let left, width
  if (weekStart.week() === start.week()) {
    const weekDay = start.weekday()
    left = (weekDay + 1) * 12.5
  }

  if (weekStart.week() === start.week() && weekStart.week() === end.week()) {
    const daysDiff = duration.days()
    width = (daysDiff + 1) * 12.5 - 2
  }

  if (weekStart.week() > start.week() && weekStart.week() === end.week()) {
    const daysDiff = moment
      .duration(
        end.diff(
          weekStart
            .startOf('week')
            .set('hours', start.hours())
            .set('minutes', start.minutes())
        )
      )
      .days()
    width = (daysDiff + 1) * 12.5 - 2
  }

  if (weekStart.week() > start.week()) {
    left = 12.5
  }

  if (weekStart.week() < end.week()) {
    width = 100 - left
  }

  return {
    top: top + '%',
    left: left + '%',
    height: height + '%',
    width: width + '%',
  }
}

export const isTodaysDate = (dateStamp) => {
  const today = moment()
  dateStamp = moment(dateStamp)
  return (
    moment.duration(dateStamp.diff(today)).days() === 0 &&
    today.day() === dateStamp.day()
  )
}