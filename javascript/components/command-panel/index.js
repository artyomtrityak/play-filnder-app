import React, { Component } from 'react';
import { TweenMax, Elastic } from 'gsap';
// import { Link } from 'react-router-dom';
import Icon from '../../shared/icon';

class CommandPanel extends Component {
  componentDidMount() {
    // TweenMax.to(this.badgeRef, 2, {
    //   paddingRight: 600,
    //   backgroundColor: '#f0f'
    // });
    // TweenMax.from(this.badgeRef, 7, {
    //   x: 100,
    //   rotation: 360,
    //   ease: Elastic.easeOut
    // });
    // TweenMax.from(this.badgeRef, 1, {
    //   opacity: 0.2
    // });
    TweenMax.staggerFrom(".badge", 1, {
      x: 50,
      delay: 0.2,
      onComplete: () => { console.log('done'); }
    }, 0.2);
  }

  render() {
    return (
      <div className="col pf-command-panel">
        <ul className="list-group">
          <li className="list-group-item justify-content-between">
            My Upcoming Plays
            <span ref={(ref) => { this.badgeRef = ref; }} className="badge badge-default badge-pill">14</span>
          </li>
          <li className="list-group-item justify-content-between">
            Quests
            <span className="badge badge-default badge-pill">2</span>
          </li>
          <li className="list-group-item justify-content-between">
            Recommendations
            <span className="badge badge-default badge-pill">1</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommandPanel;
