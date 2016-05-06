import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import Chart from './Chart';

export class RouteGraph extends Component {
  static propTypes = {
    stops: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUpdate(nextProps) {
  }

  render() {
    const { stops } = this.props;
    let size = {
      width: document.body.clientWidth,
      height: stops.length * 200,
    }
    return (
      //<div>
      //<ul>
      //{stops.map((stop, i) => {
      //  return(
      //    <li key={stop.id}>
      //    {stop.name}
      //    <ul>
      //    {stop.prevStop.map((pStop, i) => {
      //      return (
      //        <li key={i}>

      //        
      //        <FontAwesome
      //          name={pStop.transport}
      //        />
      //          Time: {pStop.time.format('hh:mm:ss')}
      //          From: {stops.map((stop) => {
      //            if(stop.id === pStop.stopId) {
      //              
      //              return stop.name
      //            }
      //          })}
      //        </li>
      //      );
      //    })}
          //</ul>
      //    </li>
      //  )
      //})}
      //</ul>
      <Chart
        height={size.height}
        width={size.width}
        stops={stops}
        />
      //</div>
    )
  }
}
