import React from 'react';
import { CiSearch } from "react-icons/ci";
import '../App.css';
import { getWeatherData } from '../Service/Service';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setLocation, setLoader } from '../Redux/Action/WeatherAction';

export default function Input() {
    const location = useSelector((state) => state.allWeatherState.location);
    const dispatch = useDispatch();

    const handleGetData = async () => {
        dispatch(setWeatherData([]));
        dispatch(setLoader(true));
        const weatherData = await getWeatherData(location);
        dispatch(setWeatherData(weatherData));
        dispatch(setLoader(false));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await handleGetData();
    };

    const handleOnChange = (e) => {
        let value = e.target.value;
        dispatch(setLocation(value));
    };

    return (
        <div className='input-container'>
            <form onSubmit={handleOnSubmit} className='form'>
                <input type="text" placeholder='Enter city Name' onChange={handleOnChange} value={location} />
                <button type="submit" className='search-icon'>
                    <CiSearch className='Icon' />
                </button>
            </form>
        </div>
    );
}
