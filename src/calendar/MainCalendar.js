import { days, hours } from './utils'

const MainCalendar = () => {
  return (
    <div className='flex'>
      {days.map((it) => {
        // return <div key={it}>{it}</div>
      return <div
      className=''
      key={it}>{hours.map((it) => {
        return <div key={it} className='w-20'>{it}</div>
      })}</div>
      })}
    </div>
  )
}

export default MainCalendar
