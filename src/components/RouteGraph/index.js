import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import RouteNetwork from './chart.js';

export class RouteGraph extends Component {
  static propTypes = {
    stops: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let size = {
      width: 600,
      height: 400,
    }
    this.el = ReactDOM.findDOMNode(this);
    this.routenetwork = new RouteNetwork(this.el, size, this.props.stops);
  }

  componentWillUpdate(nextProps) {
    this.routenetwork.update(this.el, nextProps.stops);
  }

  render() {
    const { stops } = this.props;
    return (
      <div>
      <ul>
      {stops.map((stop, i) => {
        return(
          <li key={stop.id}>
          {stop.name}
          <ul>
          {stop.prevStop.map((pStop, i) => {
            return (
              <li key={i}>

              
              <FontAwesome
                name={pStop.transport}
              />
                Time: {pStop.time.format('hh:mm:ss')}
                From: {stops.map((stop) => {
                  if(stop.id === pStop.stopId) {
                    
                    return stop.name
                  }
                })}
              </li>
            );
          })}
          </ul>
          </li>
        )
      })}
      </ul>
      <div id='routeGraph'></div>
      </div>
    )
  }
}
