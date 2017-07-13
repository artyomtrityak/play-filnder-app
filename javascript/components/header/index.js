import React, { Component } from 'react';
import Icon from '../../shared/icon';
// import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#/">PF</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item active">
              <a className="nav-link" href="#/play-finder">Play Finder</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#/">Playground</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#/organized-play">Organized Play</a>
            </li>
          </ul>

          <form className="form-inline">
            <button className="btn btn-primary align-middle mr-sm-2" type="button">Call for Players</button>
            <span className="navbar-text mr-sm-2">
              <Icon iconName="mail" title="Messages" width={26} height={26} color={'white'} />
              <sup><span className="badge badge-default badge-pill">1</span></sup>
            </span>
            <span className="navbar-text">
              <Icon iconName="person" title="Artyom Trityak" width={26} height={26} color={'white'} />
            </span>
            <span className="navbar-text">
              <span className="nav-item dropdown">
                <span className="dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Artyom Trytiak
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#/">Profile</a>
                  <a className="dropdown-item" href="#/">Mailbox</a>
                  <a className="dropdown-item" href="#/">Logout</a>
                </div>
              </span>
            </span>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
