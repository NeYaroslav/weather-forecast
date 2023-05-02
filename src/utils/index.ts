export function convertDateToLocalTime(date: Date) {
  const time = date.toLocaleTimeString().split('')
  time.length = time.length - 3
  return time.join('')
}

export function convertDateToShortLocalDate(date: Date) {
  return date.toDateString().split(' ').slice(1, 3).join(' | ')
}

// export function convertDateToRequestFormat(date: Date) {
//   return ''
// }