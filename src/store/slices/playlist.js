import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import PlaylistService from "../services/playlist.service";
import { create } from "yup/lib/Reference";
import { action } from "@storybook/addon-actions";

export const getPlaylists = createAsyncThunk(
    "playlist/getPlaylists",
    async (thunkAPI) => {
        try {
            const response = await PlaylistService.getPlaylists();
            console.log(response);
            return response.data; 
        } catch (error) {
            console.log("lama");
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          thunkAPI.dispatch(setMessage(message));
          
          return thunkAPI.rejectWithValue();
        }
    }
)

const initialState = {};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        getPlaylists: (state, action) => {
            console.log(getPlaylists());
            state.playlists = action.payload.playlists;
        },
    },   
});

const {reducer} = playlistSlice
export default reducer;

