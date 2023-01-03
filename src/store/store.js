import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authentication';
import messageReducer from "./slices/message";
import playlistSlice from "./slices/playlist.js";

const reducer = {
  auth: authSlice,
  message: messageReducer,
  playlist: playlistSlice
}

const store = configureStore({
  reducer: reducer,
})

export default store;