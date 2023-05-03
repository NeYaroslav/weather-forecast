import React, { memo } from 'react'
import { convertDateToShortLocalDate, getSvgWeatherCode } from '../../utils'
import classes from './daylyForecastInfo.module.scss'

interface Props {
  date: string,
  temperatureMax: number,
  temperatureMin: number,
  weatherCode: number
}

export const DaylyForecastInfo:React.FC<Props> = ({ date, temperatureMax, temperatureMin, weatherCode }) => {
  
  return (
    <>
      <div className={classes["info__icon"]}>
        <svg>
          <use href={`/sprite.svg#code-${getSvgWeatherCode(weatherCode)}-colorful`}></use>
        </svg>
      </div>
      <h4 className={classes["info__title"]}>{convertDateToShortLocalDate(new Date(date))}</h4>
      <div className={classes["info__temperature"]}>
        <div className={classes['info__temperature-extreme']}>
          <span>Min</span>
          {Math.round(temperatureMin)}°
        </div>
        <div className={classes['info__temperature-extreme']}>
          <span>Max</span>
          {Math.round(temperatureMax)}°
        </div>
      </div>
    </>
  )
}

export const DaylyForecastInfoMemo = memo(DaylyForecastInfo)