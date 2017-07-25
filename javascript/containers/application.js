import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/header';
import CommandPanel from '../components/command-panel';
import Map from '../components/map';

import loadAssets from '../utils/assets-loader';

class Application extends Component {
  componentDidMount() {
    loadAssets()
      .then(this.props.onLoad)
      .catch(this.props.onError);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="atl-main-content-container">
          <div className="row no-gutters">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

Application.displayName = "ApplicationContainer";

Application.propTypes = {
  onError: propTypes.func.isRequired,
  onLoad: propTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch({ action: 'APP_LOADED' });
    },
    onError: () => {
      dispatch({ action: 'APP_LOAD_ERROR' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
