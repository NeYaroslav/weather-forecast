import React, { memo } from 'react'
import classes from './hourlyForecastItem.module.scss'
import { HourlyForecast } from '../../shared/types'
import { convertDateToLocalTime } from '../../utils'


export const HourlyForecastItem:React.FC<HourlyForecast> = ({ precipitationProbability, temperature, time }) => {
  return (
    <div className={classes.card}>
      <div className={classes['card__time']}>{convertDateToLocalTime(new Date(time))}</div>
      <div className={classes["card__icon"]}>
        <svg>
          <use href="./sprite.svg#rain-alt"></use>
        </svg>
      </div>
      <span className={classes['card__temperature']}>{temperature}°</span>
      <span className={classes["card__precipitation"]}>
        <svg>
          <use href="./sprite.svg#rain-alt"></use>
        </svg>
        {precipitationProbability}%
      </span>
    </div>
  )
}

export const HourlyForecastItemMemo = memo(HourlyForecastItem)
