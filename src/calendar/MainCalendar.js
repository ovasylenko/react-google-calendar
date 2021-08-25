import { DateTime, Duration } from 'luxon'
import { days, hours } from "./utils";
import HeaderForMainCalendar from "./HeaderForMainCalendar";
import { currentWeek } from "./HeaderForMainCalendar"

const MainCalendar = () => {

  const weekArray = currentWeek()

  // console.log('m-y', DateTime.local().toFormat('LLLL yyyy'))
  // console.log('m-y', DateTime.local().toFormat('d'))

  // const dt = DateTime.local()
  // const currentHour = DateTime.local().setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE)
  // const currentHour = loc.toFormat('T')
  // console.log(currentHour)

  const currentHours = () => {

    const startOfDay = DateTime.local().startOf('day').hour
    const endOfDay = DateTime.local().endOf('day').hour
    const hourDuration = Duration.fromObject({hour: 1})
    console.log(startOfDay, endOfDay, 'dur', hourDuration)
    let nextHour = DateTime.local().startOf('day')
    let newArr = [nextHour.toLocaleString(DateTime.TIME_SIMPLE)]
    console.log('nextHour', nextHour)
    for(let i = startOfDay; i < endOfDay; i += 1) {
      console.log('i', i)
      console.log(typeof nextHour)
      nextHour = nextHour.plus(hourDuration)
      console.log('kkk', nextHour.plus(hourDuration))
      newArr = [...newArr, nextHour.toLocaleString(DateTime.TIME_SIMPLE)]
     }
     console.log('newArr', newArr)
     return newArr
  }

  const hoursArray = currentHours()
  console.log('hoursArray', hoursArray);

  return (
    <div>
      <HeaderForMainCalendar />
      <div className="grid grid-cols-8">
        <div>
          {hoursArray.map((hour, index) => {
              return (
                <div className="grid h-12 text-right pr-4 pt-9" key={index}>
                  {hour}
                </div>
              );
          })}
        </div>
        {weekArray.map((it) => {
          return (
            <div>
              <div key={it}>
                {hoursArray.map((it) => {
                  return (
                    <div
                      key={it}
                      className="grid border h-12 w-auto items-center text-center"
                    >
                      {it}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainCalendar
