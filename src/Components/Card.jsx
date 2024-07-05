import React, { useEffect, useState } from 'react';
import '../App.css';
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from 'react-redux';
import clearImage from '../assets/images/clear.png';
import cloudsImage from '../assets/images/clouds.png';
import  ShowersImage from '../assets/images/drizzle.png';


function Card() {
  const CardData = useSelector((state) => state.allWeatherState.weatherData);
  const [updatedCardData, setUpdatedCardData] = useState({});

  useEffect(() => {
    setUpdatedCardData(CardData);
  }, [CardData]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  // const imgFunction = (weather) => {
  //   if (weather === "Clear") {
  //     return <img src={clearImage} alt="cloud"/>;
  //   } else if (weather === "Cloudy") {
  //     return <img src={cloudsImage} alt="cloud"/>;
  //   }else if (weather === "Showers") {
  //     return <img src={ShowersImage} alt="rain"/>;
  //   }else if (weather === "Sunny"){
  //     return <img src={clearImage} alt="cloud"/>;
  //   }
  //   return null; 
  // };




  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  

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
            {/* <div className='img-div' > {imgFunction(updatedCardData.current_observation.condition.text)}</div> */}
            <img src={`https://openweathermap.org/img/wn/${updatedCardData.weather[0].icon}@2x.png`} alt="" />
            <h3>{updatedCardData.weather[0].main} </h3>
          </div>
          <div className='card-temp-div'>
            {/* <h1>{convertToCelsius(updatedCardData.main.temp).toFixed(2)} °C</h1> */}
            <h1>{(updatedCardData.main.temp-273.15).toFixed(2) } °C</h1>
          </div>
          <div className='card-wind-div'>
            <div>Sunrise {convertTimestampToTime(updatedCardData.sys.sunrise)}</div>
            <div>Sunrise {convertTimestampToTime(updatedCardData.sys.sunset)}</div>
            {/* <div>Sunset {updatedCardData.current_observa.sunset}</div> */}
          </div>
        </div>
      </div>

    ) : (
      <div className='card-error-meassage'>{updatedCardData.erroMessage}</div>
    )
  );
}

export default Card;
