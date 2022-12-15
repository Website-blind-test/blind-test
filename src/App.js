import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import { SignupPage } from './components/pages/SignupPage/SignupPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { HomePage } from './components/pages/HomePage/HomePage';
import { RouteHub } from './components/Routes/RouteHub';
import { ProfilPage } from './components/pages/ProfilPage/ProfilPage';
function App() {

  return (
    
    <ProfilPage />
    //<RouteHub />
  );
}

export default App;