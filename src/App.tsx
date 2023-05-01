import React, { useEffect, useMemo} from "react"
import { useLazyGetForecastQuery } from "./redux/rootApi"

const App: React.FC = () => {
  const [forecastTrigger, {data, isLoading, isFetching, isError, isSuccess}] = useLazyGetForecastQuery()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      forecastTrigger({latitude, longitude})
    })
  }, [forecastTrigger])

  const date = useMemo(() => data?.map(item => (
    <div key={item.date}>
      <ul>
        <li>{new Date(item.date).toLocaleString()}</li>
        <li>Температура - {item.temperature}°C</li>
        <li>Хмарність - {item.cloudcover}%</li>
        <li>Швидкість вітру - {item.windspeed} Км/год</li>
        <li>Вірогіднітсть опадів - {item.precipitationProbability}%</li>
      </ul>
    </div>
  )), [data])

  if(isLoading) return (
    <h4>
      fetching...
    </h4>
  )
  if(!isFetching && (!isError && !isSuccess)) return (
    <h4>
      getting your position...
    </h4>
  )

  return (
    <div>{date}</div>
  )
}

export default App