import { ActionType } from "./Constant/ActionType";

const initialState = {
    location: null,
    weatherData:[],
    loader:false,
  
}

export const WeatherAppReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_LOCATION:
            return {
                ...state,
                location: payload,
            };
            case ActionType.SET_WEATHER_DATA:
                return {
                    ...state,
                    weatherData:payload
                }
                case ActionType.SET_LOADER:
                    return {
                        ...state,
                        loader:payload
                    }
        default:
            return state;
    }
};