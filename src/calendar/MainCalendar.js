import { days, hours } from "./utils";
import HeaderForMainCalendar from "./header-for-main-calendar";

const MainCalendar = () => {
  return (
    <div>
      <HeaderForMainCalendar />
      <div className="grid grid-cols-8">
        <div className="mt-9 pr-2">
          {hours.map((hour, index) => {
              return (
                <div className="grid h-12 text-right" key={hour}>
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
