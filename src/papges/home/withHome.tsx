import React, { useState, useEffect } from 'react'
import { useLazyGetDaylyForecastQuery, useLazyGetHourlyForecastQuery } from '../../redux/rootApi'
import { DailyForecast, HourlyForecast, Location, NullableValue } from '../../shared/types'
import { convertDateToRequestFormat } from '../../utils'

export interface WithHome {
  dailyForecast: DailyForecast[],
  setSlide: React.Dispatch<React.SetStateAction<number>>
  slide: number
  hourlyForecast: HourlyForecast[]
  isLoading: boolean
}



const withHome = <T extends WithHome>(Component: React.FC<T>) => {
  return (props: Omit<T, keyof WithHome>) => {
    const [getDaylyForecast, daylyForecast] = useLazyGetDaylyForecastQuery()
    const [getHourlyForecast, hourlyForecast] = useLazyGetHourlyForecastQuery()
    const [slide, setSlide] = useState<number>(1)
    const [location, setLocation] = useState<NullableValue<Location>>({latitude: null, longitude: null})

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation(position.coords)
      })
    }, [setLocation])

    useEffect(() => {
      if(!location.latitude || !location.longitude) return
      
      const signal = getDaylyForecast({
        latitude: location.latitude,
        longitude: location.longitude
      })
      return () => {
        signal.abort()
      }
    }, [location, getDaylyForecast])

    useEffect(() => {
      if(!daylyForecast.data || !location.latitude || !location.longitude) return

      const signal = getHourlyForecast({
        date: convertDateToRequestFormat(new Date(daylyForecast.data[slide].time)),
        latitude: location.latitude,
        longitude: location.longitude
      })

      return () => {
        signal.abort()
      }
    }, [daylyForecast.data, getHourlyForecast, location, slide])

    return (
      <Component
        {...(props as T)}
        dailyForecast={daylyForecast.data}
        hourlyForecast={hourlyForecast.data}
        slide={slide}
        setSlide={setSlide}
        data='123'
        isLoading={hourlyForecast.isUninitialized || hourlyForecast.isLoading}
      />
    )
  }
}

export default withHome