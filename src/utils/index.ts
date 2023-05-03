export function convertDateToLocalTime(date: Date) {
  const time = date.toLocaleTimeString().split(':')
  time.splice(time.lastIndexOf('00'), 1)
  return time.join(':')
}

export function convertDateToShortLocalDate(date: Date) {
  return date.toDateString().split(' ').slice(1, 3).join(' | ')
}

export function convertDateToRequestFormat(date: Date) {
  let month = `${date.getMonth() + 1}`
  month = '0'.repeat(2 - month.length) + month
  let day = `${date.getDate()}`
  day = '0'.repeat(2 - day.length) + day 
  return `${date.getFullYear()}-${month }-${day}`
}
export function isNow(date: Date,) {
  const currentTime = new Date().getTime()
  const receivedTime = date.getTime()
  const hourInMs = 3600000
  return currentTime > receivedTime && (currentTime - receivedTime) < hourInMs 
}

export function getSvgWeatherCode(code: number) {
  const codes = [
    [0],
    [1],
    [2],
    [3],
    [45, 48],
    [51, 53, 55, 56, 57],
    [61, 63, 65, 66, 67, 80, 81, 82],
    [71, 73, 75, 77],
    [85, 86],
    [95, 96, 99]
  ]
  const item = codes.find(codeSet => codeSet.includes(code))
  if(!item) return false
  return item.join('-')
}