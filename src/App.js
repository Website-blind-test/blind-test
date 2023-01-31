import React from 'react';
import './App.css';
import { RouteHub } from './components/Routes/RouteHub';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
function App() {

  return (
    <Provider store={store} >
      <RouteHub />
    </Provider>
  );
}

export default App;