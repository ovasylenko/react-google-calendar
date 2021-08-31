import { DateTime, Duration } from 'luxon'

// export const days = Array.from(Array(7)).map((it, index) => index)
// export const hours = Array.from(Array(24)).map((it, index) => index)
// export const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

export const timeZone = DateTime.local().toLocaleString(DateTime.DATETIME_FULL).slice(-5)
// console.log('timeZone2', DateTime.local().offsetNameShort)

export const currentDayDate = DateTime.local().day
export const currentDayShort = DateTime.local().weekdayShort
export const currentHour = DateTime.local().startOf('hour').toLocaleString(DateTime.TIME_SIMPLE)

export function currDurationArr(durr, partOfDur) {
  const startOfDur = DateTime.local().startOf(durr)[partOfDur]
  const periodDur = Duration.fromObject({ [durr]: 1 }).as(partOfDur)
  const currDuration = Duration.fromObject({ [partOfDur]: 1 })
  let nextDur = DateTime.local().startOf(durr)
  let newArr = []
  for(let i = 0; i < periodDur; i += 1) {
    if(durr === 'day') {
      newArr = [ ...newArr, nextDur.toLocaleString(DateTime.TIME_SIMPLE) ]
    }
    if(durr === 'week') {
      newArr = [...newArr, [ nextDur.weekdayShort, nextDur[partOfDur] ]]
    }
    nextDur = nextDur.plus(currDuration)
  }
  return newArr
}

// events= {
//485456784658236ngg: { id: '485456784658236ngg'
//                      start: 78423767856378,
//                      end: 462736327632785687,
//                      title: 'sbkrgbkdf',
//                     },
//ghi594848t984uw9rug: { id: 'ghi594848t984uw9rug'
//                      start: 78423767856378,
//                      end: 462736327632785687,
//                      title: 'sbkrgbkdf',
//                     }
//}
