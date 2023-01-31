import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import TrackService from "../services/track.service";

export const getTrack = createAsyncThunk(
  "track/getTrack",
  async (thunkAPI) => {
    try {
      const data = await TrackService.getTrack();
      return { track : data };
} catch (error) {
        return thunkAPI.rejectWithValue();
    }
  }
);

export const addTrack = createAsyncThunk(
  "track/addTrack",
  async({title, url}, thunkAPI) => {
    try{
      const data = await TrackService.addTrack(title, url)
      return true
    } catch(error) {
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
      state.trackList = localStorage.getItem("trackList")
    },
    [getTrack.rejected]: (state, action) => {
      state.trackList= false;
    },
  },
});

const { reducer } = trackReducer
export default reducer;