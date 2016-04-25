import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


/* application components */
import { RouteMap } from 'components/RouteMap';

/* actions */
import * as actionCreators from 'actions/stops';

const metaData = {
  title: 'Title',
  description: 'Description',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};


@connect(
  state => state.stops,
  dispatch => bindActionCreators(actionCreators, dispatch)
)

export class RouteView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className = "container">
          <div className = "row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <RouteMap {...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
