import React, { useMemo } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { DaylyForecastCardMemo, DaylyForecastInfoMemo, HourlyForecastListMemo, PreloaderMemo } from "../../components";
import withHome, { WithHome } from "./withHome"

const Home: React.FC<WithHome> = ({ setSlide, dailyForecast, slide, hourlyForecast, isLoading }) => {

  const slides = useMemo(()=> {
    return dailyForecast?.map((forecastItem) => (
      <SwiperSlide className="slider-slide" key={forecastItem.time}>
        <div>
          <DaylyForecastInfoMemo
            date={forecastItem.time}
            temperatureMax={forecastItem.temperatureMax}
            weatherCode={forecastItem.weatherCode}
            temperatureMin={forecastItem.temperatureMin}
          />
          <DaylyForecastCardMemo
            sunrise={forecastItem.sunrise}
            sunset={forecastItem.sunset}
            precipitationProbability={forecastItem.precipitationProbability}
            windSpeed={forecastItem.windSpeed}
          />
        </div>
      </SwiperSlide>
    ))
  }, [dailyForecast])

  if(isLoading) return (
    <PreloaderMemo/>
  )

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