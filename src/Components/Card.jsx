import React, { useEffect, useState } from 'react';
import '../App.css';
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from 'react-redux';
import windImage from '../assets/images/wind.png';
import humidity from '../assets/images/humidity.png';


function Card() {
  const CardData = useSelector((state) => state.weather.weatherData)
  const [updatedCardData, setUpdatedCardData] = useState({});

  useEffect(() => {
    setUpdatedCardData(CardData);
  }, [CardData]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };


  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  console.log(updatedCardData, "here")

  return (
    updatedCardData && updatedCardData.weather ? (
      <div className='card-container'>
        <div className='card'>
          <div className='Card-Location-div'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CiLocationOn className='location-Icon' />
            </div>
            <div>{updatedCardData.name}</div>
          </div>
          <div className='card-date-time-div'>
            {formatDate(updatedCardData.dt)}
          </div>

          <div className='card-img-div'>
            <img src={`https://openweathermap.org/img/wn/${updatedCardData.weather[0].icon}@2x.png`} alt="" />
            <h3>{updatedCardData.weather[0].main} </h3>

          </div>
          <div className='card-temp-div'>

            <h1>{(updatedCardData.main.temp - 273.15).toFixed(2)} °C</h1>
            <div className='temp-feellike-div'>Feel like {(updatedCardData.main.feels_like - 273.15).toFixed(2)}</div>
          </div>
          <div className='card-wind-div'>
            {/* <div>Sunrise {convertTimestampToTime(updatedCardData.sys.sunrise)}</div>
            <div>Sunrise {convertTimestampToTime(updatedCardData.sys.sunset)}</div> */}
            
              <div className='wind-div'>
                 <img src={windImage} alt="wind" />
                <div > Wind speed {updatedCardData.wind.speed}</div>
                </div>
              <div className='humidity-div'>
                 <img src={humidity} alt="wind" />
                <div> Humidity {updatedCardData.main.humidity}</div>
                </div>

          


          </div>
        </div>
      </div>

    ) : (
      <div className='card-error-meassage'>{updatedCardData.erroMessage}</div>
    )
  );
}

export default Card;
