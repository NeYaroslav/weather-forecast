import React, { useState, useMemo } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { DaylyForecastCardMemo, DaylyForecastInfoMemo, HourlyForecastListMemo } from "../../components";
import withHome, { WithHome } from "./withHome"


interface Props extends WithHome {
  num: number
}

const Home: React.FC<Props> = () => {
  const [slide, seSlide] = useState<number>(0)

  const slides = useMemo(()=> {
    return [1, 2, 3, 4].map(() => (
      <SwiperSlide className="slider-slide">
        <div>
          <DaylyForecastInfoMemo date={new Date} temperature={45} weatherCode={1}/>
          <DaylyForecastCardMemo humidity={45} precipitationProbability={8} pressure={45} wind={87}/>
        </div>
      </SwiperSlide>
    ))
  }, [])

  return (
    <main>
      <Swiper
        modules={[Autoplay]}
        className="slider"
        onSlideChange={(e) => seSlide(e.realIndex)}
        initialSlide={1}
        autoplay={{stopOnLastSlide: true, delay: 1000, reverseDirection: true, disableOnInteraction: true}}
      >
        {slides}
      </Swiper>
      <HourlyForecastListMemo date=""/>
    </main>
  )
}

export default withHome(Home)