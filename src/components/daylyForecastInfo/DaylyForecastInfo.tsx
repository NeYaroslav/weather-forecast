import React, { memo } from 'react'
import classes from './daylyForecastInfo.module.scss'

interface Props {
  date: Date,
  temperature: number,
  weatherCode: number
}

export const DaylyForecastInfo:React.FC<Props> = ({ date, temperature, weatherCode }) => {
  const screenDate = date.toDateString().split(' ').slice(1, 3).join(' | ')

  return (
    <>
      <div className={classes["info__icon"]}>
        <svg>
          <use href="/sprite.svg#sun-behind-small-cloud-svgrepo-com"></use>
        </svg>
      </div>
      <h4 className={classes["info__title"]}>{screenDate}</h4>
      <span className={classes["info__temperature"]}>{temperature}°</span>
    </>
  )
}

export const DaylyForecastInfoMemo = memo(DaylyForecastInfo)