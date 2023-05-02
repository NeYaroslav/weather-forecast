export interface Location {
  latitude: number,
  longitude: number
}

export type NullableValue<T> = {[K in keyof T]: T[K] | null}

export interface LocationWithDate extends Location {
  date: string
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

export interface ReceivedDailyForecast {
  daily:{
    precipitation_probability_max: number[]
    sunrise: string[]
    sunset: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    time: string[]
    weathercode: number[]
    windspeed_10m_max: number[]
  }
}
export interface DailyForecast {
  sunrise: string
  sunset: string
  precipitationProbability: number
  temperatureMax: number
  temperatureMin: number
  time: string
  weatherCode: number
  windSpeed: number
}

export interface ReceivedHourlyForecast {
  hourly: {
    precipitation_probability: number[],
    temperature_2m: number[]
    time: string[]
    weathercode: number[]
  }
}

export interface HourlyForecast {
  precipitationProbability: number
  temperature: number
  time: string
  weatherCode: number
}


interface HourlyUnits {
 time: string,
 temperature_2m: string
}