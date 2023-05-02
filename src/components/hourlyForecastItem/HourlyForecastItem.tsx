import React, { memo } from 'react'
import classes from './hourlyForecastItem.module.scss'

interface Props {
  data?: boolean
}

export const HourlyForecastItem:React.FC<Props> = () => {
  return (
    <div className={classes.card}>
      <div className={classes['card__time']}>20:00</div>
      <div className={classes["card__icon"]}>
        <svg>
          <use href="./sprite.svg#rain-alt"></use>
        </svg>
      </div>
      <span className={classes['card__temperature']}>82°</span>
      <span className={classes["card__precipitation"]}>
        <svg>
          <use href="./sprite.svg#rain-alt"></use>
        </svg>
        15%
      </span>
    </div>
  )
}

export const HourlyForecastItemMemo = memo(HourlyForecastItem)
