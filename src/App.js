import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { LoginPage } from './components/pages/LoginPage/LoginPage';
function App() {

  const darkmode = false;
  return (
    <ThemeProvider theme={getTheme(darkmode)}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;