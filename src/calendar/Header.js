import React from 'react'
import { ReactComponent as ArrowNext } from './../images/arrow-next.svg'
import { ReactComponent as ArrowPrev } from './../images/arrow-prev.svg'
import { DateTime } from 'luxon'
import Dropdown from './DropdownButton'



const Header = () => {

  const dateFull = `${DateTime.now().monthLong} ${DateTime.now().year}`
  console.log(`${dateFull.slice(0, 1).toUpperCase()}${dateFull.slice(1)}`)

  return (
    <div className='flex content-center justify-between w-full pb-4 pt-6'>
      <div>
        <div className='text-4xl text-gray-600 pt-2'>
          SkillCrucial Calendar
        </div>
      </div>
      <div className='flex justify-end content-center items-center'>
      <div>{dateFull}</div>
        <div className='flex justify-center content-center mx-4'>
          <Dropdown />
          <button
            className='hover:bg-gray-100 w-9 p-1 h-9 rounded-full flex justify-center items-center'
            title='Previous week'
          >
            <ArrowPrev />
          </button>
          <button
            className='hover:bg-gray-100 w-20 p-1 h-9 rounded-lg border-gray-200 border flex justify-center items-center mx-4 font-bold'
          >
            Today
          </button>
          <button
            className='hover:bg-gray-100 w-9 p-1 h-9 rounded-full flex justify-center items-center'
            title='Next week'
          >
            <ArrowNext />
          </button>
        </div>
        {/* <div className='text-2xl font-semibold text-gray-500 w-32 flex justify-end py-4'>
        </div> */}
      </div>
    </div>
  )
}

export default Header
