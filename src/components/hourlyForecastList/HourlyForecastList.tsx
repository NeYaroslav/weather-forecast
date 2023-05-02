import React, { memo } from 'react'
import classes from './hourlyForecastList.module.scss'
import { HourlyForecastItemMemo } from '..'

interface Props {
  date: string
}

export const HourlyForecastList: React.FC<Props> = () => {
  const data:0[] = []
  data.length = 24
  data.fill(0)

  return (
    <div className={classes['list']}>
      {data.map(() => (
        <HourlyForecastItemMemo/>
      ))}
    </div>
  )
}

export const HourlyForecastListMemo = memo(HourlyForecastList)