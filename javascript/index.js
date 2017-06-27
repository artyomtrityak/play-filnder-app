import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import configureStore from './configure-store';
import '../scss/index.scss';


const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Link to="/dashboard">Dashboard</Link>
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
