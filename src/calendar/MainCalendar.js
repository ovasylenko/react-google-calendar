import HeaderForMainCalendar from "./HeaderForMainCalendar";
import TimePanel from "./TimePanel";
import { currDurationArr, currentDayDate, currentDayShort, currentHour } from './utils'

const MainCalendar = () => {
  const hoursArray = currDurationArr('day', 'hour')
  const weekArray = currDurationArr('week', 'day')

  return (
    <div>
      <HeaderForMainCalendar />
      <div className="grid grid-cols-8">
        <TimePanel />
        {weekArray.map((day) => {
          return (
            <div>
              <div key={day}>
                {hoursArray.map((hour, index) => {
                  return (
                    <div
                      key={index}
                      className={(day[0] === currentDayShort && day[1] === currentDayDate && hour === currentHour) ? "grid border border-blue-500 border-opacity-75 h-12 w-auto items-center text-center " : "grid border h-12 w-auto items-center text-center"}
                    >
                      {hour}
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
