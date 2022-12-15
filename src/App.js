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
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<ThemeProvider theme={getTheme('login')}><LoginPage/></ThemeProvider>} />
            <Route path="sign-up"  element={<ThemeProvider theme={getTheme('signup')}><SignupPage/></ThemeProvider>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;