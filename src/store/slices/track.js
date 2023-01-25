import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import TrackService from "../services/track.service";

export const getTrack = createAsyncThunk(
  "track/getTrack",
  async ({ idTrack }, thunkAPI) => {
    try {
      const data = await TrackService.getTrack(idTrack);
      return { track : data };
} catch (error) {
        return thunkAPI.rejectWithValue();
    }
  }
);

export const playTrack = createAsyncThunk(
  "track/playTrack",
    async ({ uriTrack }, thunkAPI) => {
    try {
      const data = await TrackService.playTrack(uriTrack);
      return false
    }catch (error){
      console.log(error)
      return thunkAPI.rejectWithValue();
    }
  }
 )

const initialState = {}

const trackReducer = createSlice({
  name: "track",
  initialState,
  extraReducers: {
    [getTrack.fulfilled]: (state, action) => {
      state.currentTrack = {
        currentTrackName:  localStorage.getItem("currentTrackName"),
        currentTrackUri: localStorage.getItem("currentTrackUri")
      } 
    },
    [getTrack.rejected]: (state, action) => {
      state.currentTrack= false;
    },
  },
});

const { reducer } = trackReducer
export default reducer;