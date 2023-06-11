import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { WeatherProvider } from './context/WeatherContext.jsx';
import { ErrorProvider } from './context/ErrorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorProvider>
      <WeatherProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </WeatherProvider>
    </ErrorProvider>
  </React.StrictMode>,
);
