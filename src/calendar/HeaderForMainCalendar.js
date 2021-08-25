import React  from 'react';
import { DateTime, Duration } from 'luxon'

const timeZone = DateTime.local().toLocaleString(DateTime.DATETIME_FULL).slice(-5)
console.log(timeZone)

const dateFull = `${DateTime.now().monthLong} ${DateTime.now().year}`
console.log(`${dateFull.slice(0,1).toUpperCase()}${dateFull.slice(1)}`)

const currentDay = DateTime.local().day

export const currentWeek = () => {
  const startOfWeek = DateTime.local().startOf('week').weekdayShort
  const dateStartOfWeek = DateTime.local().startOf('week').day
  console.log('date', dateStartOfWeek)
  const dayDuration = Duration.fromObject({days: 1})
  let newArr = [[ startOfWeek, dateStartOfWeek ]]
  let nextDay = DateTime.local().startOf('week')
  console.log(nextDay)
  for(let i = 1; i < 7; i += 1) {
    nextDay = nextDay.plus(dayDuration)
    newArr = [...newArr, [ nextDay.weekdayShort, nextDay.day ]]
   }
   console.log(newArr)
   return newArr
}

const weekArray = currentWeek()

const HeaderForMainCalendar = () => {


  return (
      <div className="grid grid-cols-8 justify-between align-center items-center text-center h-auto w-auto font-bold text-lg min-w-max">
        <div className="grid justify-end align-end text-m font-light mr-4 text-sm">{timeZone}</div>
        {weekArray.map((weekDay, index) => {
          return (
            <div key={index} className="grid grid-cols-2 justify-center items-center text-center border h-12 px-2">
              <div className="grid uppercase font-light" >{weekDay[0]}</div>
              <div className={(weekDay[1] === currentDay) && "bg-blue-500 text-white font-bold border-2 border-blue-600 rounded-full"}>{weekDay[1]}</div>
            </div>
          );
        })}
      </div>
  );
};

export default HeaderForMainCalendar;
