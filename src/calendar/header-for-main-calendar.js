import { weekDays } from "./utils";

const HeaderForMainCalendar = () => {
  return (
    <div>
      <div className="grid grid-cols-8 justify-between text-center h-auto w-auto">
        <div className="grid justify-between text-right pr-2">time zone</div>
        {weekDays.map((weekDay) => {
          return (
            <div className="grid grid-cols-2 justify-between items-center border h-16">
              <div className="grid grid-cols-2 p-1">{weekDay}</div>
              <div>date</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderForMainCalendar;
