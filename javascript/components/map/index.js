import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import * as PIXI from 'pixi.js';

class Map extends Component {
  componentDidMount() {
    const renderer = new PIXI.CanvasRenderer(this.mapRef.offsetWidth, this.mapRef.offsetHeight);
    const rootScene = new PIXI.Container();

    renderer.render(rootScene);
    this.mapRef.appendChild(renderer.view);
  }

  render() {
    return (
      <div ref={(r) => { this.mapRef = r; }} className="atl-map">
      </div>
    );
  }
}

export default Map;
