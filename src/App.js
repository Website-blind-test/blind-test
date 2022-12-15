import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import { SignupPage } from './components/pages/SignupPage/SignupPage';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <SignupPage changePageTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;