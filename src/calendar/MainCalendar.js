import HeaderForMainCalendar from "./HeaderForMainCalendar";
import { currDurationArr } from './utils'

const MainCalendar = () => {
  const hoursArray = currDurationArr('day', 'hour')
  const weekArray = currDurationArr('week', 'day')

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
        {weekArray.map((day) => {
          return (
            <div>
              <div key={day}>
                {hoursArray.map((hour, index) => {
                  return (
                    <div
                      key={index}
                      className="grid border h-12 w-auto items-center text-center"
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
