import moment from 'moment';

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
          'icon': 'busstop',
        }, {
          'id': 1,
          'icon': 'trainstation',
          'prevStop': [
            {
              'stopId': 0,
              'transport': 'tram',
              'time': moment.duration(40, 'minutes'),
            }, {
              'stopId': 0,
              'transport': 'tram',
              'time': moment.duration(40, 'minutes'),
            },
          ],
        }, {
          'id': 2,
          'icon': 'trainstation',
          'prevStop': [
            {
              'stopId': 1,
              'transport': 'train',
              'icon': 'busstop',
              'time': moment.duration(40, 'minutes'),
            }
          ],
        }
      ],
  }
}

export function stops(state = initialState, action) {
  switch(action.type) {
    case 'ADD_STOP':
      console.log(state);
      
      const newState = {
      };

      const newStops = [
        ...state.stops
      ]

      console.log(newStops);
      
      console.log(newState);
      return state;
      
      
    //case 'DEL_STOP':

    //case 'EDIT_STOP':

    default:
      return state;
  }
};
