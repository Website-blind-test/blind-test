import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authentication';
import messageReducer from "./slices/message";  

const reducer = {
  auth: authSlice,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;