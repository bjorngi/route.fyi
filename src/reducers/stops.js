import moment from 'moment';
import 'moment-duration-format';

const initialState = {
  stops: {
      'id': 1,
      'name': 'Hello',
      'from': 'Sandra',
      'to': 'Jobb',
      'stops': [
        {
          'prevStop': {},
          'name': 'Sandra',
          'icon': 'busstop',
        },{
          'name': 'Brugata',
          'icon': 'tramstation',
          'prevStop': 
            {
              'transport': 'subway',
              'time': moment.duration(25, 'minutes'),
            },
        }, {
          'icon': 'trainstation',
          'name': 'Oslo S',
          'prevStop': 
            {
              'transport': 'subway',
              'time': moment.duration(5, 'minutes'),
            },
        }, {
          'icon': 'trainstation',
          'name': 'Oslo Lufthavn',
          'prevStop': 
            {
              'transport': 'train',
              'time': moment.duration(30, 'minutes'),
            }
        }
      ],
  }
}

export function stops(state = initialState, action) {
  switch(action.type) {
    case 'ADD_STOP':
      const newState = {
        ...state,
        stops: {
          ...state.stops,
          stops: [
            ...state.stops.stops,
            {
              id: newStopId,
              icon: action.fields.icon.value,
              name: action.fields.name.value,
              prevStop: {
                transport: action.fields.prevStop.transport.value,
                time: moment.duration(Number(action.fields.prevStop.time.value), 'minutes'),
              },
            }
          ]
        }
      };

      return newState;
      
    //case 'DEL_STOP':

    //case 'EDIT_STOP':

    default:
      return state;
  }
};
