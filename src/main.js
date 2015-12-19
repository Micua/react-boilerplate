/*
 * @Author: iceStone
 * @Date:   2015-11-27 10:45:02
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-11-27 11:11:23
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Stylesheet from './styles/main.scss';
import App from './components/App.jsx';

ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div'))
);
