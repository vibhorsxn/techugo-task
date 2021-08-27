import '../style/Weather.css';
import React, { useState,useEffect } from 'react';
import snow from "../assets/snow-fall.gif";
import warm from "../assets/sunny.gif";
const api = {
  key: "02218c16e7453e942bf02e723604866f",
  base: "https://api.openweathermap.org/data/2.5/"
  
}


function Weather() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const [location,setLocation]=useState('Delhi');

  
useEffect(()=>{
    const search = evt => {
       
          fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setSearch('');
              console.log(result);
            });
        
    }
    
      search()
},[location])
 
  

  const currDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  return (
    <div 
        className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? "app warm" : "app") : "app"}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            onKeyPress ={(e) => {if(e.key==="Enter") {setLocation(search) }} }
           
            
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            {/* <div className="location">{weather.name}, {weather.sys.country}</div> */}
            <div className="date">{currDate(new Date())}</div>
          </div>
         
          <div className="weather-box">

          <div className="weather">
            
        
            <img className="gif" alt='snow' src={snow}/>
            Min:{weather.main.temp_min}°C 
            <span style={{padding:"25px"}}>
            <img className="gif" alt='warm' src={warm}/>
            Max:{weather.main.temp_max}°C
            </span>
            </div>
           


            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].main}
            </div>
            <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            {/* <div className="date">{currDate(new Date())}</div> */}
            </div>
            
            
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default Weather;