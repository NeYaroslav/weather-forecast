import React, { memo } from 'react'
import classes from './daylyForecastCard.module.scss'

interface Props {
  wind: number
  precipitationProbability: number
  pressure: number
  humidity: number
}

export const DaylyForecastCard: React.FC<Props> = ({wind, precipitationProbability, pressure, humidity}) => {
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
              Wind
            </h4>
            <span>{wind}km/h</span>
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
              Pressure
            </h4>
            <span>{pressure}hPa</span>
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
              Humidity
            </h4>
            <span>{humidity}%</span>
          </div>
      </div>
    </div>
  )
}

export const DaylyForecastCardMemo = memo(DaylyForecastCard)
