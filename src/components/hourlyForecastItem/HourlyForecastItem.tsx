import React, { memo } from 'react'
import { HourlyForecast } from '../../shared/types'
import { convertDateToLocalTime, getSvgWeatherCode, isNow } from '../../utils'
import classes from './hourlyForecastItem.module.scss'


export const HourlyForecastItem:React.FC<HourlyForecast> = ({ precipitationProbability, temperature, time, weatherCode, isDay }) => {
  const date = new Date(time)
  console.log(isDay);

  return (
    <div className={classes[`${isNow(date)? 'card_current': 'card'}`]}>
      <div className={classes['card__time']}>{convertDateToLocalTime(date)}</div>
      <div className={classes["card__icon"]}>
        <svg>
          <use href={`sprite.svg#code-${getSvgWeatherCode(weatherCode)}${[0,1,2].includes(weatherCode) && !isDay ? '-moon': ''}`}></use>
        </svg>
      </div>
      <span className={classes['card__temperature']}>{Math.round(temperature)}°</span>
      <span className={classes["card__precipitation"]}>
        <svg>
          <use href="sprite.svg#precipitation"></use>
        </svg>
        {precipitationProbability}%
      </span>
    </div>
  )
}

export const HourlyForecastItemMemo = memo(HourlyForecastItem)
