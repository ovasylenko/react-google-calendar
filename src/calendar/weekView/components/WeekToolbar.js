import moment from 'moment';
import React from 'react'
import { ReactComponent as ArrowNext } from '../../../images/arrow-next.svg'
import { ReactComponent as ArrowPrev } from '../../../images/arrow-prev.svg'
import Dropdown from './DropdownButton';
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'

function WeekToolbar(props) {
  const formattedDate = moment(props.startDate).format('MMM YYYY')

  return (
    <div className='flex content-center justify-between w-full pb-4'>
      <div className='ml-16 text-4xl text-gray-600'>SkillCrucial Calendar</div>
      <div className='flex justify-end content-center items-center'>
        <div className='flex justify-center content-center mx-4'>
          <Dropdown />
          <button
            onClick={props.goToPreviousWeek}
            className='hover:bg-gray-100 w-9 p-1 h-9 rounded-full flex justify-center items-center'
            title='Previous week'
          >
            <ArrowPrev />
          </button>
          <button
            onClick={props.goToToday}
            className='hover:bg-gray-100 w-20 p-1 h-9 rounded-lg border-gray-200 border flex justify-center items-center mx-4 font-bold'
            title={(new Date()).toLocaleDateString()}
          >
            Today
          </button>
          <button
            onClick={props.goToNextWeek}
            className='hover:bg-gray-100 w-9 p-1 h-9 rounded-full flex justify-center items-center'
            title='Next week'
          >
            <ArrowNext />
          </button>
        </div>
        <div className='text-2xl font-semibold text-gray-500 w-32 flex justify-end py-4'>
          {formattedDate}
        </div>
      </div>
    </div>
  )
}

export const MemoizedWeekToolbar = React.memo(WeekToolbar)
