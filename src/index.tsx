import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/Users/aika/react-... Remove this comment to see the full error message
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.generated.css'

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
