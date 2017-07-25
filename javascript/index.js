import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Load svg sprite
import 'octicons/build/sprite.octicons.svg';
// Load css
import '../assets/scss/index.scss';

import configureStore from './configure-store';
import App from './containers/application';

const store = configureStore();

render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.querySelector('#root'));
