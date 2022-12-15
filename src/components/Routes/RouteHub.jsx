import React from 'react';
import { ThemeProvider } from 'styled-components';
import {getTheme} from '../../themes/default.js'
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { SignupPage } from '../pages/SignupPage/SignupPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { HomePage } from '../pages/HomePage/HomePage.jsx';

export const RouteHub = () => {
    return (
        <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<ThemeProvider theme={getTheme('login')}><LoginPage/></ThemeProvider>} />
            <Route path="sign-up"  element={<ThemeProvider theme={getTheme('signup')}><SignupPage/></ThemeProvider>} />
            <Route path="home" element={<HomePage />} />
          </Route>
      </Routes>
    </BrowserRouter>
    )
}