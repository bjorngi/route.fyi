import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import FontAwesome from 'react-fontawesome';

export class AddStop extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    fields: React.PropTypes.object.isRequired,
    stops: React.PropTypes.object,
    addItem: React.PropTypes.func,
  };


  constructor(props) {
    super(props);
  }

  onAdd = (event) => {
    console.log('HIT');
    if(this.props.fields.icon) {
      this.props.addStop(this.props.fields);
    }
    this.props.dispatch(reset('addStop'));

    event.preventDefault();
  };

  render() {
    const stops = this.props.stops.stops;
    const {
      fields: { icon, name, prevStop },
    } = this.props;
    
    return (

      <form onSubmit={this.addAdd}>

      <input
          type='text'
          className='form-control'
          placeholder='Enter location'
          {...name}
        />


        <div>
          <label>Previous Stop</label>

            <select
              {...prevStop.stopId}
              value={prevStop.stopId.value || ''}
              >

              <option></option>
              
              {stops.map((stop, i) => {
                return(
                  <option key={i} value={stop.id}>
                    {stop.name}
                  </option>
                )
              })};
            </select>
        </div>

        <div>
          <label>Transport</label>
            <select {...prevStop.transport} value={prevStop.transport.value || ''} >
              <option></option>
              <option value='train'>Train</option>
              <option value='buss'>Bus</option>
              <option value='subway'>Tram</option>
              <option value='subway'>Subway</option>
              <option value='male'>Walk</option>
              <option value='plane'>Flight</option>
            </select>
        </div>



        <input
            type='number'
            className='form-control'
            placeholder='Enter time in minutes'
            {...prevStop.time}
          />



        <button className={'btn'} type='submit'>
        Add stop
        </button>
 
      </form>
    );
  }
}

AddStop = reduxForm({
  form: 'addStop',
  fields: [
    'icon',
    'name',
    'prevStop.time',
    'prevStop.stopId',
    'prevStop.transport',
  ]
})(AddStop);
