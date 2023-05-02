import React, { memo } from 'react'
import classes from './hourlyForecastList.module.scss'
import { HourlyForecastItemMemo } from '..'
import { HourlyForecast } from '../../shared/types'

interface Props {
  forecast?: HourlyForecast[]
}

export const HourlyForecastList: React.FC<Props> = ({forecast}) => {
  const data:0[] = []
  data.length = 24
  data.fill(0)

  return (
    <div className={classes['list']}>
      {forecast?.map((item) => (
        <HourlyForecastItemMemo
          precipitationProbability={item.precipitationProbability}
          temperature={item.temperature}
          time={item.time}
          weatherCode={item.weatherCode}
        />
      ))}
    </div>
  )
}

export const HourlyForecastListMemo = memo(HourlyForecastList)