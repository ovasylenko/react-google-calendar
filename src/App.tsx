import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Calendar from './calendar';

function App() {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Calendar />
}

export default App;
