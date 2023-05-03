import React, { memo } from 'react'
import classes from './hourlyForecastList.module.scss'
import { HourlyForecastItemMemo } from '..'
import { HourlyForecast } from '../../shared/types'

interface Props {
  forecast: HourlyForecast[]
}

export const HourlyForecastList: React.FC<Props> = ({forecast}) => {
  return (
    <div className={classes['list']}>
      {forecast.map((forecasItem) => (
        <HourlyForecastItemMemo {...forecasItem}/>
      ))}
    </div>
  )
}

export const HourlyForecastListMemo = memo(HourlyForecastList)