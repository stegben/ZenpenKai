/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

class ZenPenKai extends React.Component {
  render() {
    return (
      <h1 className="test">Hello Zen Pen</h1>
    );
  }
}

ReactDom.render(
  <ZenPenKai />,
  document.getElementById('root')
);
