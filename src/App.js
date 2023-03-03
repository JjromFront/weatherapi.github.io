import {useFetch}  from './Hooks/useFetch'
import {WeatherInterface} from './Components/WeatherInterface'

function App() {
  const {data, isLoading} = useFetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=bbba429e9f1cc3cd79fa16b38ea8b050')

  if(isLoading) return <>Loading</>
  return (
    <>
      {data?.base}
      <WeatherInterface weatherData={data}/>
    </>
  );
}

export default App;
