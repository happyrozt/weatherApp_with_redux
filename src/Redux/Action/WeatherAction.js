import { ActionType } from "../Constant/ActionType"


export const setLocation = (location)=>{
    return {
        type:ActionType.SET_LOCATION,
        payload :location
    }
}


export const setWeatherData = (data)=>{
    return {
        type:ActionType.SET_WEATHER_DATA,
        payload:data
    }
}

export const setLoader = (action)=>{
    return {
        type:ActionType.SET_LOADER,
        payload:action,
    }
}