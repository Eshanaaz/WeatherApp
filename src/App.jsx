import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [weatherApi, setWeatherApi] = useState({})
  const [cityName, setcityName] = useState("istanbul")
  const [searchCityName, setSearchCityName] = useState("istanbul")




  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=96fcef1bd16b212136e5573f3e66f2ac&units=metrics`)

      .then((res) => res.json())
      .then((results) => {
        setWeatherApi(results)
      })


      .catch((error) => {
        console.log(error)
      })
  }, [searchCityName])



  const searchCity = () => {
    setSearchCityName(cityName)
    console.log(cityName)
  }



  return (

    <div className="App">

      <div className='mainDiv'>

        <div className='innerDiv'>

          <input className='input' type="text" placeholder='Enter City Name' value={cityName} onChange={(set) => setcityName(set.target.value)} />
          
          <button className='btn' onClick={searchCity}>ENTER</button>
          
          
          <li><b>CITY :</b> {weatherApi && weatherApi.name}</li> <br />
          <li><b>TEMPERATURE :</b>{weatherApi && weatherApi.main && weatherApi.main.temp}</li> <br />
          <li><b>MAIN :</b> {weatherApi && weatherApi.weather && weatherApi.weather[0] && weatherApi.weather[0].main}</li> <br />
          <li><b>COUNTRY :</b> {weatherApi && weatherApi.sys && weatherApi.sys.country}</li>
          <li><b>TIMEZONE :</b>{weatherApi && weatherApi.timezone} </li> <br />
          <li><b>SPEED :</b> {weatherApi && weatherApi.wind && weatherApi.wind.speed}</li>
          <li><b>DEGREE :</b> {weatherApi && weatherApi.wind && weatherApi.wind.deg}</li>


        </div>
      </div>
    </div>


  );
}

export default App;
