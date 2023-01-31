import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

export const register = createAsyncThunk(
  "auth/register",
  async ({ first_name, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(first_name, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
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
);

export const checkToken = createAsyncThunk(
  "auth/refresh",
  async (thunkAPI) => {
    try {
      const data = await AuthService.checkToken(user);
      return { user: data };
} catch (error) {
        return thunkAPI.rejectWithValue();
    }
  }
);


export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      thunkAPI.dispatch(setMessage(data.data.message));
      return { user: data };
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
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user, userInfo }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.userInfo = userInfo;
      
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.userInfo = null
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.userInfo = null
    },
  },
});

const { reducer } = authSlice
export default reducer;