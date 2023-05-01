export interface Location {
  latitude: number,
  longitude: number
}
export interface forecastResponse {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  hourly_units: HourlyUnits,
  hourly: {
    time: string[]
    temperature_2m: number[]
    cloudcover: number[]
    windspeed_10m: number[],
    precipitation_probability: number[]
  }
}
export interface Forecast {
  date: string,
  temperature: number
  cloudcover: number
  windspeed: number
  precipitationProbability: number
}


interface HourlyUnits {
 time: string,
 temperature_2m: string
}