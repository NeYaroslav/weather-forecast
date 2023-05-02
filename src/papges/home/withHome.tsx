import React, { useState, useEffect } from 'react'
import { useLazyGetDaylyForecastQuery, useLazyGetHourlyForecastQuery } from '../../redux/rootApi'
import { DailyForecast, HourlyForecast, Location, NullableValue } from '../../shared/types'

export interface WithHome {
  dailyForecast: DailyForecast[],
  setSlide: React.Dispatch<React.SetStateAction<number>>
  slide: number
  hourlyForecast: HourlyForecast[]
}

function convertDate(date: Date) {
  let month = `${date.getMonth()}`
  month = '0'.repeat(2 - month.length) + month
  let day = `${date.getDate()}`
  day = '0'.repeat(2 - day.length) + day 
  return `${date.getFullYear()}-${month}-${day}`
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
    }, [])

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
      if(!daylyForecast.isSuccess || !daylyForecast.data || !location.latitude || !location.longitude) return
      
      const signal = getHourlyForecast({
        date: convertDate(new Date(daylyForecast?.data[slide].time)),
        latitude: location.latitude,
        longitude: location.longitude
      })

      return () => {
        signal.abort()
      }
    }, [ daylyForecast, getHourlyForecast, location, slide])
    

    return (
      <Component {...(props as T)} dailyForecast={daylyForecast.data} hourlyForecast={hourlyForecast.data} slide={slide} setSlide={setSlide} data='123'/>
    )
  }
}

export default withHome