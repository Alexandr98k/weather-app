import { createContext, useContext, useReducer } from 'react';

export const ThemeContext = createContext({ theme: 'light' });
export const ThemeDispatchContext = createContext(null);

const themeReducer = function (state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export const ThemeProvider = function ({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = function () {
  return useContext(ThemeContext);
};

export const useThemeDispatch = function () {
  return useContext(ThemeDispatchContext);
};
