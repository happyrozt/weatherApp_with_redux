
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: null,
    weatherData: [],
    loader: false,
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
        setLoaderSate: (state, action) => {
            state.loader = action.payload;
        }
    }
});

export const { addLocation, addWeatherData, setLoaderSate } = weatherSlice.actions;
export default weatherSlice.reducer;

