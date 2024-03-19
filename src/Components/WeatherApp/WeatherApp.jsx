import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humid_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'


const WeatherApp = () => {

  let api_key="your_api_key"

  const [Wicon,SetWicon]=useState(cloud_icon)

  const search= async () =>{
      const element=document.getElementsByClassName('cityinput')
      if(element[0].value==="")
      {
        return 0;
      }

      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

      let response= await fetch(url);
      let data=await response.json();

      const humidity = document.getElementsByClassName('humidity-percent');
      const temperature=document.getElementsByClassName('weather-temp');
      const wind = document.getElementsByClassName('wind-speed');
      const location= document.getElementsByClassName('weather-location');

      //updating the weather conditions

      humidity[0].innerHTML=data.main.humidity+"%";
      wind[0].innerHTML=data.wind.speed+"km/hr";
      temperature[0].innerHTML=data.main.temp+"°C";
      location[0].innerHTML=data.name;

      //to update the icons on the weather map
      if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n')
      {
        SetWicon(clear_icon);
      }

      else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n')
      {
        SetWicon(cloud_icon);
      }

      else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n')
      {
        SetWicon(drizzle_icon);
      }

      else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n')
      {
        SetWicon(drizzle_icon);
      }

      else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n')
      {
        SetWicon(rain_icon);
      }

      else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n')
      {
        SetWicon(rain_icon);
      }

      else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n')
      {
        SetWicon(snow_icon);
      }


  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityinput" placeholder='Search' />
          <div className="search-icon" onClick={() =>search()}>
            <img src={search_icon} alt="" />
          </div>
      </div>

      <div className="weather-image">
        <img src={Wicon} alt="" />
      </div>

      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humid_icon} alt="" />
          <div className="humidity-percent">64%</div>
          <div className="text">Humidty</div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" />
          <div className="wind-speed">10kmph</div>
          <br />
          <div className="text">Wind Speed</div>
        </div>

      </div>

      


    </div>
  )
}

export default WeatherApp
