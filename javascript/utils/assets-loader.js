import Promise from 'bluebird';
import * as PIXI from 'pixi.js';

// Assets to load
import hex from '../../assets/images/tiles/hex.png';

export default function loadAssets() {
  return new Promise((resolve, reject) => {
    PIXI.loader
      .add('hex', hex)
      .load(() => { resolve(); });
  });
}
