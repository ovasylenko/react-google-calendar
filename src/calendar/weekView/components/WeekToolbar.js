import moment from 'moment'

function WeekToolbar(props) {
  const formattedDate = moment(props.startDate).format('MMM YYYY')

  return (
    <div className='flex content-center justify-between w-full pb-4'>
      <div className='ml-16 text-4xl text-gray-600'>SkillCrucial Calendar</div>
      <div className='flex justify-end content-center '>
        <div className='flex justify-center content-center mx-4'>
          <button onClick={props.goToPreviousWeek} className='mx-4'>
            Previous week
          </button>
          <button onClick={props.goToToday} className='mx-4 font-bold'>
            Today
          </button>
          <button onClick={props.goToNextWeek} className='mx-4'>
            Next week
          </button>
        </div>
        <div className='text-xl text-gray-600'>{formattedDate}</div>
      </div>
    </div>
  )
}

export default WeekToolbar
