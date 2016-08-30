/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import ReactDom from 'react-dom';

import Title from './components/title';

import './index.css';

class ZenPenKai extends React.Component {
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
