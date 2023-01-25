import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authentication';
import messageReducer from "./slices/message";  
import trackReducer from "./slices/track"

const reducer = {
  auth: authSlice,
  message: messageReducer,
  track: trackReducer,

}

const store = configureStore({
  reducer: reducer,
})

export default store;