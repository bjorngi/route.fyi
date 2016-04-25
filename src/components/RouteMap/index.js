import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

/* app components */

import { RouteGraph } from '../RouteGraph';
import { AddStop } from '../AddStop';


export class RouteMap extends Component {
  static propTypes = {
    stops: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { stops } = this.props;
    
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
          <div>
            <div>
            From: {stops.from}
            </div>
            <div>
            To: {stops.to}
            </div>
          </div>
          <AddStop 
            {...this.props}
          />
           <RouteGraph
              stops={stops.stops}
            />
          </div>
        </div>
      </section>
    );
  }
}
