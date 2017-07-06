import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'octicons/build/sprite.octicons.svg';

import configureStore from './configure-store';
import '../scss/index.scss';

import Header from './components/header';
import CommandPanel from './components/command-panel';
import EventsFeed from './components/events-feed';
import Map from './components/map';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <div className="pf-main-content-container">
            <div className="row">
              <CommandPanel />
              <Map />
              <EventsFeed />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.querySelector('#root'));
