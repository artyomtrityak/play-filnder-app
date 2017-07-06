import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Icon from '../../shared/icon';

class CommandPanel extends Component {
  render() {
    return (
      <div className="col pf-command-panel">
        <Icon iconName="alert" title="Hello" />
        <ul className="list-group">
          <li className="list-group-item justify-content-between">
            Cras justo odio
            <span className="badge badge-default badge-pill">14</span>
          </li>
          <li className="list-group-item justify-content-between">
            Dapibus ac facilisis in
            <span className="badge badge-default badge-pill">2</span>
          </li>
          <li className="list-group-item justify-content-between">
            Morbi leo risus
            <span className="badge badge-default badge-pill">1</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommandPanel;
