import { createContext, useContext, useReducer } from 'react';

export const ErrorContext = createContext({ isError: false, errorMessage: '' });
export const ErrorDispatchContext = createContext(null);

const errorReducer = function (state, action) {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        isError: true,
        errorMessage: action.value,
      };
    }
    case 'noError': {
      return {
        ...state,
        isError: false,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export const ErrorProvider = function ({ children }) {
  const [state, dispatch] = useReducer(errorReducer, { isError: false, errorMessage: '' });

  return (
    <ErrorContext.Provider value={state}>
      <ErrorDispatchContext.Provider value={dispatch}>{children}</ErrorDispatchContext.Provider>
    </ErrorContext.Provider>
  );
};

export const useError = function () {
  return useContext(ErrorContext);
};

export const useErrorDispatch = function () {
  return useContext(ErrorDispatchContext);
};
