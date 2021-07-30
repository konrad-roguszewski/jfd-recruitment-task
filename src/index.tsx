import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { App } from './App';

const colorPalette = {
  black: "#000",
  white: "#fff",
  green: "#adbb0c",
  orange: "#ff801a",
  graphite: "#787878",
  darkGray: "#dbdbdb",
  mediumGray: "#eee",
  lightGray: "#f9f9f9"
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ colorPalette }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
