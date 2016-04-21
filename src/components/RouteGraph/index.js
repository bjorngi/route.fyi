import React, { Component } from 'react';

export class RouteGraph extends Component {
  static propTypes = {
    stops: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { stops } = this.props;
    return (
      <div id="routeGraph">
      <ul>
      {stops.map((stop, i) => {
        return(
          <li key={stop.id}>
          {stop.icon}
          </li>
        )
      })}
      </ul>
      </div>
    )
  }
}
