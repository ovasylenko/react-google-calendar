import { useState } from 'react'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import CalendarPicker from '@material-ui/lab/CalendarPicker'

const Widget = () => {
  const [date, setDate] = useState(new Date())
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker date={date} onChange={setDate} />
    </LocalizationProvider>
  )
}

export default Widget
