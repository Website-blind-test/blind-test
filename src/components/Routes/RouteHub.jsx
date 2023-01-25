import React from 'react';
import { ThemeProvider } from 'styled-components';
import {getTheme} from '../../themes/default.js'
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { SignupPage } from '../pages/SignupPage/SignupPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { HomePage } from '../pages/HomePage/HomePage.jsx';
import { ProfilPage } from '../pages/ProfilPage/ProfilPage.jsx';
import { AddMusicPage } from '../pages/AddMusicPage/AddMusicPage.jsx';
import { CreateGame, CreateGamePage } from '../pages/CreateGamePage/CreateGamePage.jsx';

export const RouteHub = () => {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
              <Route path="/">
                <Route index element={<ThemeProvider theme={getTheme('login')}><LoginPage/></ThemeProvider>} />
                <Route path="sign-up"  element={<ThemeProvider theme={getTheme('signup')}><SignupPage/></ThemeProvider>} />
                <Route path="home" element={<HomePage />} />
                <Route path="profil" element={<ProfilPage />} />
                <Route path="add-music" element={<AddMusicPage />} />
                <Route path="create-game" element={<CreateGamePage/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
}