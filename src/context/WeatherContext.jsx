import { createContext, useContext, useReducer } from 'react';

export const WeatherContext = createContext({});
export const WeatherDispatchContext = createContext(null);
//add first search state if it will be needed
const weatherReducer = function (weatherData, action) {
  switch (action.type) {
    case 'adding': {
      return {
        ...action.value,
      };
    }
    case 'removing': {
      return {};
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export function WeatherProvider({ children }) {
  const [weatherData, dispatch] = useReducer(weatherReducer, {});

  return (
    <WeatherContext.Provider value={weatherData}>
      <WeatherDispatchContext.Provider value={dispatch}>{children}</WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}

export function useWeatherDispatch() {
  return useContext(WeatherDispatchContext);
}
