import React, { memo } from 'react'
import classes from './daylyForecastCard.module.scss'

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
            <use href="./sprite.svg#direction"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              wind speed
            </h4>
            <span>{windSpeed}km/h</span>
          </div>
      </div>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="./sprite.svg#rain-alt"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              Chanse of rain
            </h4>
            <span>{precipitationProbability}%</span>
          </div>
      </div>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="./sprite.svg#temperature"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              sunrise
            </h4>
            <span>{sunrise}</span>
          </div>
      </div>
      <div className={classes["card__item"]}>
        <div className={classes["card__icon"]}>
          <svg>
            <use href="./sprite.svg#drop-fill"/>
          </svg>
        </div>
          <div>
            <h4 className={classes["card__title"]}>
              sunset
            </h4>
            <span>{sunset}</span>
          </div>
      </div>
    </div>
  )
}

export const DaylyForecastCardMemo = memo(DaylyForecastCard)
