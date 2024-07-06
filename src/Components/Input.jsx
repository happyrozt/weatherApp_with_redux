import React from 'react';
import { CiSearch } from "react-icons/ci";
import '../App.css';
import { getWeatherData } from '../Service/Service';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation, addWeatherData, setLoaderSate } from '../reduxToolkit/Slice';

export default function Input() {
    const location = useSelector((state) => state.weather.location);
    const dispatch = useDispatch();

    const handleGetData = async () => {
        dispatch(addWeatherData([]))
        dispatch(setLoaderSate(true))
        const weatherData = await getWeatherData(location);
        dispatch(addWeatherData(weatherData));
        dispatch(setLoaderSate(false))
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await handleGetData();
    };

    const handleOnChange = (e) => {
        let value = e.target.value;
        dispatch(addLocation(value))
    };

    return (
        <div className='input-container'>
            <form onSubmit={handleOnSubmit} className='form'>
                <input type="text" placeholder='Enter city name and zip code' onChange={handleOnChange} value={location} />
                <button type="submit" className='search-icon'>
                    <CiSearch className='Icon' />
                </button>
            </form>
        </div>
    );
}
