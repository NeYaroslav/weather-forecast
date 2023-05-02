import React, { memo } from 'react'
import classes from './daylyForecastInfo.module.scss'
import { convertDateToShortLocalDate } from '../../utils'

interface Props {
  date: Date,
  temperatureMax: number,
  temperatureMin: number,
  weatherCode: number
}

export const DaylyForecastInfo:React.FC<Props> = ({ date, temperatureMax, temperatureMin }) => {
  
  return (
    <>
      <div className={classes["info__icon"]}>
        <svg>
          <use href="./sprite.svg#sun-behind-small-cloud-svgrepo-com"></use>
        </svg>
      </div>
      <h4 className={classes["info__title"]}>{convertDateToShortLocalDate(date)}</h4>
      <span className={classes["info__temperature"]}>{temperatureMax}°/{temperatureMin}°</span>
    </>
  )
}

export const DaylyForecastInfoMemo = memo(DaylyForecastInfo)