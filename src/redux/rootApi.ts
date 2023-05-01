import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Forecast, Location, forecastResponse } from '../shared/types'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.open-meteo.com/v1'
})

const getEndpoint = ({latitude, longitude}: Location) => {
  return `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,cloudcover,windspeed_10m,precipitation_probability`
} 

const transformForecastFormat = (response: forecastResponse) => {
  console.log(response);
  
  return response.hourly.time.reduce<Forecast[]>((acc, _i, index) => { 
    acc.push({
      date: response.hourly.time[index],
      temperature: response.hourly.temperature_2m[index],
      cloudcover: response.hourly.cloudcover[index],
      windspeed: response.hourly.windspeed_10m[index],
      precipitationProbability: response.hourly.precipitation_probability[index]
    })
    return acc
  }, [])
}

export const rootApi = createApi({
  baseQuery,
  reducerPath: 'api',
  endpoints: build => ({
    getForecast: build.query<Forecast[], Location>({
      query: (Location) => getEndpoint(Location),
      transformResponse: transformForecastFormat
    }),
  }),
})

export const { useGetForecastQuery, useLazyGetForecastQuery } = rootApi