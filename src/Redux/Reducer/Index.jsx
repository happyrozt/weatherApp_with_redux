

import { combineReducers } from "redux";
import { WeatherAppReducer } from '../Reducer'


  const Reducers  = combineReducers({
    allWeatherState : WeatherAppReducer,
  })

  export default Reducers;