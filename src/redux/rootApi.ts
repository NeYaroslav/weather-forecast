import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Location } from '../shared/types'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.open-meteo.com/v1'
})

const getEndpoint = ({latitude, longitude}: Location) => {
  return `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
} 

export const rootApi = createApi({
  baseQuery,
  reducerPath: 'api',
  endpoints: build => ({
    getForecast: build.query<unknown, Location>({
      query: (Location) => getEndpoint(Location)
    }),
  }),
})

export const { useGetForecastQuery } = rootApi