export function addStop(icon, prevStop=[]) {
  return {
    type: 'ADD_STOP',
    icon,
    prevStop,
  }
}
