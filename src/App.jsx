import React, { useMemo } from 'react';
import './App.css';
import MemoizedSkillCrucialCalendar from './calendar';

function App() {
  let events = useMemo(() => {
    return ((JSON.parse(localStorage.getItem('events')) || {}))
  }, [])

  return <MemoizedSkillCrucialCalendar eventsFromProps={events} />
}

export default App;
