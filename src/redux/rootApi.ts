import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { DailyForecast, HourlyForecast, Location, LocationWithDate, ReceivedDailyForecast, ReceivedHourlyForecast } from '../shared/types'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.open-meteo.com/v1'
})

const getDaylyForecast = ({latitude, longitude}: Location) => {
  return `forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max,sunrise,sunset&timezone=auto`
}
const getHourlyForecast = ({date, latitude, longitude}: LocationWithDate) => {
  return `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode&start_date=${date}&end_date=${date}`
}



const transformDailyForecast = (response: ReceivedDailyForecast):DailyForecast[] => {
  console.log(response);
  
  return response.daily.time.reduce<DailyForecast[]>((acc, _i, index) => { 
    acc.push({
      precipitationProbability: response.daily.precipitation_probability_max[index],
      sunrise: response.daily.sunrise[index],
      sunset: response.daily.sunset[index],
      temperatureMax: response.daily.temperature_2m_max[index],
      temperatureMin: response.daily.temperature_2m_min[index],
      time: response.daily.time[index],
      weatherCode: response.daily.weathercode[index],
      windSpeed: response.daily.windspeed_10m_max[index]
    })
    return acc
  }, [])
}
const transformHourlyForecast = (response: ReceivedHourlyForecast):HourlyForecast[] => {
  console.log(response);
  
  return response.hourly.time.reduce<HourlyForecast[]>((acc, _i, index) => { 
    acc.push({
      precipitationProbability: response.hourly.precipitation_probability[index],
      temperature: response.hourly.temperature_2m[index],
      time: response.hourly.time[index],
      weatherCode: response.hourly.weathercode[index]
    })
    return acc
  }, [])
}

export const rootApi = createApi({
  baseQuery,
  reducerPath: 'api',
  endpoints: build => ({
    getDaylyForecast: build.query<DailyForecast[], Location>({
      query: getDaylyForecast,
      transformResponse: transformDailyForecast,
    }),
    getHourlyForecast: build.query<HourlyForecast[], LocationWithDate>({
      query: getHourlyForecast,
      transformResponse: transformHourlyForecast
    })
  }),
})

export const { useLazyGetDaylyForecastQuery, useLazyGetHourlyForecastQuery } = rootApi