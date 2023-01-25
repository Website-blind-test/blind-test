import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import PlaylistService from "../services/playlist.service";

export const getPlaylists = createAsyncThunk(
    "playlist/getPlaylists",
    async (_, thunkAPI) => {
        try {
            const response = await PlaylistService.getPlaylists();
            return response.data; 
        } catch (error) {
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
    reducers: {},   
    extraReducers: {
        [getPlaylists.fulfilled]: (state, action) => {
            // console.log(action.payload.data);
            state.playlist = action.payload.data;
        },
        [getPlaylists.rejected]: (state, action) => {
            console.log("allo");
        },
    },  
});

const {reducer} = playlistSlice
export default reducer;

