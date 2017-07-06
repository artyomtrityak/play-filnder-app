import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse bg-inverse">
        <a className="navbar-brand" href="#/">PF</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#/dashboard">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#/">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
