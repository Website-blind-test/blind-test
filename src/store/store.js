import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authentication';
import messageReducer from "./slices/message";  
import trackReducer from "./slices/track"
import playlistSlice from "./slices/playlist.js";

const reducer = {
  auth: authSlice,
  message: messageReducer,
  track: trackReducer,
  playlist: playlistSlice
}

const store = configureStore({
  reducer: reducer,
})

export default store;