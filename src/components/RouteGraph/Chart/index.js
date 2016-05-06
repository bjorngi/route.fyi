import React, { Component } from 'react';
import Stops from './stops.js';

export default class Chart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { width, height, stops } = this.props;
    return (
      <svg
        width={width}
        height={height}
        stops={stops}
      >
      <Stops
        stops={stops}
        height={height}
        width={width}
        />
      </svg>
    )
  };
};
