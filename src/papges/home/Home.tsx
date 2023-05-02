import React, { useMemo } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { DaylyForecastCardMemo, DaylyForecastInfoMemo, HourlyForecastListMemo } from "../../components";
import withHome, { WithHome } from "./withHome"
import { convertDateToLocalTime } from "../../utils";


const Home: React.FC<WithHome> = ({ setSlide, dailyForecast, slide, hourlyForecast }) => {

  const slides = useMemo(()=> {
    return dailyForecast?.map((forecastItem) => (
      <SwiperSlide className="slider-slide" key={forecastItem.time}>
        <div>
          <DaylyForecastInfoMemo
            date={new Date(forecastItem.time)}
            temperatureMax={Math.round(forecastItem.temperatureMax)}
            weatherCode={forecastItem.weatherCode}
            temperatureMin={Math.round(forecastItem.temperatureMin)}
          />
          <DaylyForecastCardMemo
            sunrise={convertDateToLocalTime(new Date(forecastItem.sunrise))}
            sunset={convertDateToLocalTime(new Date(forecastItem.sunset))}
            precipitationProbability={forecastItem.precipitationProbability}
            windSpeed={Math.round(forecastItem.windSpeed)}
          />
        </div>
      </SwiperSlide>
    ))
  }, [dailyForecast])

  return (
    <main>
      <Swiper
        modules={[Autoplay]}
        className="slider"
        onSlideChange={(swiper) => setSlide(swiper.realIndex)}
        initialSlide={slide}
        autoplay={{stopOnLastSlide: true, delay: 1000, reverseDirection: true, disableOnInteraction: true}}
      >
        {slides}
      </Swiper>
      <HourlyForecastListMemo forecast={hourlyForecast}/>
    </main>
  )
}

export default withHome(Home)