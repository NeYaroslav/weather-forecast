import React, { memo } from 'react'
import classes from './daylyForecastCard.module.scss'
import { convertDateToLocalTime } from '../../utils'

interface Props {
  windSpeed: number
  precipitationProbability: number
  sunset: string
  sunrise: string
}

export const DaylyForecastCard: React.FC<Props> = ({windSpeed, precipitationProbability, sunrise, sunset}) => {
 return (
    <div className={classes["card"]}>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="/sprite.svg#wind"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              Max wind speed
            </h4>
            <span>{Math.round(windSpeed)}km/h</span>
          </div>
      </div>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="sprite.svg#precipitation"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              Chanse of precipitation
            </h4>
            <span>{precipitationProbability}%</span>
          </div>
      </div>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="/sprite.svg#sunrise"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              Sunrise
            </h4>
            <span>{convertDateToLocalTime(new Date(sunrise))}</span>
          </div>
      </div>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="/sprite.svg#sunset"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              Sunset
            </h4>
            <span>{convertDateToLocalTime(new Date(sunset))}</span>
          </div>
      </div>
    </div>
  )
}

export const DaylyForecastCardMemo = memo(DaylyForecastCard)
