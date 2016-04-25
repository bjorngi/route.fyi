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
          'id': 0,
          'prevStop': [],
          'name': 'Sandra',
          'icon': 'busstop',
        }, {
          'id': 1,
          'name': 'Torshov',
          'icon': 'tramstation',
          'prevStop': [
            {
              'stopId': 0,
              'transport': 'male',
              'time': moment.duration(3, 'minutes'),
            }
         ],
        }, {
          'id': 2,
          'name': 'Brugata',
          'icon': 'tramstation',
          'prevStop': [
            {
              'stopId': 1,
              'transport': 'subway',
              'time': moment.duration(25, 'minutes'),
            },
         ],
        }, {
          'id': 3,
          'icon': 'trainstation',
          'name': 'Oslo S',
          'prevStop': [
            {
              'stopId': 2,
              'transport': 'subway',
              'time': moment.duration(5, 'minutes'),
            },
            {
              'stopId': 1,
              'transport': 'taxi',
              'time': moment.duration(10, 'minutes'),
            },
          ],
        }, {
          'id': 4,
          'icon': 'trainstation',
          'name': 'Oslo Lufthavn',
          'prevStop': [
            {
              'stopId': 3,
              'transport': 'train',
              'time': moment.duration(30, 'minutes'),
            }
          ],
        }
      ],
  }
}

export function stops(state = initialState, action) {
  switch(action.type) {
    case 'ADD_STOP':
      let newStopId = Math.max.apply(Math, state.stops.stops.map((stop) => {
        return stop.id; 
      })) + 1;

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
              prevStop: [{
                stopId: Number(action.fields.prevStop.stopId.value),
                transport: action.fields.prevStop.transport.value,
                time: moment.duration(Number(action.fields.prevStop.time.value), 'minutes'),
              }],
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
