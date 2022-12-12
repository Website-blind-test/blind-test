import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { LoginPage } from './components/pages/LoginPage/LoginPage';
function App() {
  return (
    <LoginPage />
  );
}

export default App;