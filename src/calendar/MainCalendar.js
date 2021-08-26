import { days, hours } from "./utils";
import HeaderForMainCalendar from "./HeaderForMainCalendar";

const MainCalendar = () => {
  return (
    <div>
      <HeaderForMainCalendar />
      <div className="grid grid-cols-8">
        <div>
          {hours.map((hour, index) => {
              return (
                <div className="grid h-12 text-right pr-4 pt-9" key={index}>
                  {index + 1}
                </div>
              );
          })}
        </div>
        {days.map((it) => {
          return (
            <div>
              <div key={it}>
                {hours.map((it) => {
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
