import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import { HomePage } from './components/pages/HomePage/HomePage';
function App() {
  return (
    <HomePage />
  );
}

export default App;