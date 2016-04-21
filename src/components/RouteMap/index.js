import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

/* app components */

import { RouteGraph } from '../RouteGraph';


export class RouteMap extends Component {
  static propTypes = {
    stops: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  onAddStop = (event) => {
    event.preventDefault();
    this.props.addStop('trainstation');
    
  };

  render() {
    const { stops } = this.props;
    
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
            <button className={'btn'} onClick={this.onAddStop}>
              Add stop
            </button>
            <RouteGraph
              stops={stops.stops}
            />
          </div>
        </div>
      </section>
    );
  }
}
