/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import ReactDom from 'react-dom';

import Title from './Components/title';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import './index.css';

class ZenPenKai extends React.Component {
  constructor() {

  }
  render() {
    return (
      <div>
        <Title />
        <h1 className="test">Hi Zen Pen</h1>
      </div>
    );
  }
}

ReactDom.render(
  <ZenPenKai />,
  document.getElementById('root')
);
