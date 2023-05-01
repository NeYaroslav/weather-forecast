import React, { useEffect, useState} from "react"
import withHome, { WithHome } from "./withHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


interface Props extends WithHome {
  num: number
}

const Home: React.FC<Props> = () => {
  const [slide, seSlide] = useState<number>(0) 

  return (
    <main>
    <Swiper
      className="slider"
      onSlideChange={(e) => seSlide(e.realIndex)}
      // aria-orientation="vertical"
    >
      <SwiperSlide className="slider-slide">
        <div className="card-forecast">
          <div className="card-forecast__icon">
            <svg>
              <use href="/sprite.svg#sun-behind-small-cloud-svgrepo-com"></use>
            </svg>
          </div>
          <h4 className="card-forecast__title">Sunday | Nov 14</h4>
          <span className="card-forecast__temperature">20°</span>
          <div className="card-forecast__grid">
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#direction"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Wind
                  </h4>
                  <span className="card-forecast-prop__value">3.7 km/h</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#rain-alt"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Chanse of rain
                  </h4>
                  <span className="card-forecast-prop__value">74%</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#temperature"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Pressure
                  </h4>
                  <span className="card-forecast-prop__value">1010mbar</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#drop-fill"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Humidity
                  </h4>
                  <span className="card-forecast-prop__value">84%</span>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <div className="card-forecast">
          <div className="card-forecast__icon">
            <svg>
              <use href="/sprite.svg#sun-behind-small-cloud-svgrepo-com"></use>
            </svg>
          </div>
          <h4 className="card-forecast__title">Sunday | Nov 14</h4>
          <span className="card-forecast__temperature">20°</span>
          <div className="card-forecast__grid">
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#direction"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Wind
                  </h4>
                  <span className="card-forecast-prop__value">3.7 km/h</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#rain-alt"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Chanse of rain
                  </h4>
                  <span className="card-forecast-prop__value">74%</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#temperature"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Pressure
                  </h4>
                  <span className="card-forecast-prop__value">1010mbar</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#drop-fill"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Humidity
                  </h4>
                  <span className="card-forecast-prop__value">84%</span>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <div className="card-forecast">
          <div className="card-forecast__icon">
            <svg>
              <use href="/sprite.svg#sun-behind-small-cloud-svgrepo-com"></use>
            </svg>
          </div>
          <h4 className="card-forecast__title">Sunday | Nov 14</h4>
          <span className="card-forecast__temperature">20°</span>
          <div className="card-forecast__grid">
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#direction"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Wind
                  </h4>
                  <span className="card-forecast-prop__value">3.7 km/h</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#rain-alt"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Chanse of rain
                  </h4>
                  <span className="card-forecast-prop__value">74%</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#temperature"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Pressure
                  </h4>
                  <span className="card-forecast-prop__value">1010mbar</span>
                </div>
            </div>
            <div className="card-forecast__cell card-forecast-prop">
              <div className="card-forecast-prop__icon">
                <svg>
                  <use href="/sprite.svg#drop-fill"></use>
                </svg>
              </div>
                <div className="card-forecast-prop__info">
                  <h4 className="card-forecast-prop__title">
                    Humidity
                  </h4>
                  <span className="card-forecast-prop__value">84%</span>
                </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="block">
      {slide}
    </div>
    </main>
  )
}


      // <SwiperSlide className="slider-slide">
      //   <div className="card-forecast">
      //     <div className="card-forecast__icon">
      //       <svg>
      //         <use href="/sprite.svg#sun-behind-small-cloud-svgrepo-com"></use>
      //       </svg>
      //     </div>
      //     <h4 className="card-forecast__title">Sunday | Nov 14</h4>
      //     <span className="card-forecast__temperature">20°</span>
      //     <div className="card-forecast__grid">
      //       {/*  */}
      //       <div className="card-forecast__cell card-forecast-prop">
      //         <div className="card-forecast-prop__icon">
      //           <svg>
      //             <use href="/sprite.svg#direction"></use>
      //           </svg>
      //         </div>
      //           <div className="card-forecast-prop__info">
      //             <h4 className="card-forecast-prop__title">
      //               Wind
      //             </h4>
      //             <span className="card-forecast-prop__value">3.7 km/h</span>
      //           </div>
      //       </div>
      //       {/*  */}
      //       {/*  */}
      //       <div className="card-forecast__cell card-forecast-prop">
      //         <div className="card-forecast-prop__icon">
      //           <svg>
      //             <use href="/sprite.svg#rain-alt"></use>
      //           </svg>
      //         </div>
      //           <div className="card-forecast-prop__info">
      //             <h4 className="card-forecast-prop__title">
      //               Chanse of rain
      //             </h4>
      //             <span className="card-forecast-prop__value">74%</span>
      //           </div>
      //       </div>
      //       {/*  */}
      //       {/*  */}
      //       <div className="card-forecast__cell card-forecast-prop">
      //         <div className="card-forecast-prop__icon">
      //           <svg>
      //             <use href="/sprite.svg#temperature"></use>
      //           </svg>
      //         </div>
      //           <div className="card-forecast-prop__info">
      //             <h4 className="card-forecast-prop__title">
      //               Pressure
      //             </h4>
      //             <span className="card-forecast-prop__value">1010mbar</span>
      //           </div>
      //       </div>
      //       {/*  */}
      //       {/*  */}
      //       <div className="card-forecast__cell card-forecast-prop">
      //         <div className="card-forecast-prop__icon">
      //           <svg>
      //             <use href="/sprite.svg#drop-fill"></use>
      //           </svg>
      //         </div>
      //           <div className="card-forecast-prop__info">
      //             <h4 className="card-forecast-prop__title">
      //               Humidity
      //             </h4>
      //             <span className="card-forecast-prop__value">84%</span>
      //           </div>
      //       </div>
      //       {/*  */}
      //     </div>
      //   </div>
      // </SwiperSlide>

export default withHome(Home)
//  const [forecastTrigger, {data, isLoading, isFetching, isError, isSuccess}] = useLazyGetForecastQuery()

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords
//       forecastTrigger({latitude, longitude})
//     })
//   }, [forecastTrigger])

//   const date = useMemo(() => data?.map(item => (
//     <div key={item.date}>
//       <ul>
//         <li>{new Date(item.date).toLocaleString()}</li>
//         <li>Температура - {item.temperature}°C</li>
//         <li>Хмарність - {item.cloudcover}%</li>
//         <li>Швидкість вітру - {item.windspeed} Км/год</li>
//         <li>Вірогіднітсть опадів - {item.precipitationProbability}%</li>
//       </ul>
//     </div>
//   )), [data])

//   if(isLoading) return (
//     <h4>
//       fetching...
//     </h4>
//   )
//   if(!isFetching && (!isError && !isSuccess)) return (
//     <h4>
//       getting your position...
//     </h4>
//   )

//   return (
//     <div>{date}</div>
//   )