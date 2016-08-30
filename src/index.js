/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import ReactDom from 'react-dom';

import Title from './components/title';

import style from './index.css';

class ZenPenKai extends React.Component {
  render() {
    return (
      <div className={style.paper}>
        <Title />
      </div>
    );
  }
}

ReactDom.render(
  <ZenPenKai />,
  document.getElementById('root')
);
