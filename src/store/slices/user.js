import { createSlice } from "@reduxjs/toolkit";
import UserService from '../services/user.service'

const getUserInfos = createAsyncThunk(
    "user/getInfos",
    async ({ first_name, email, password }, thunkAPI) => {
      try {
        const response = await UserService.getUserInfo(first_name, email, password);
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


const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfos: (state, action) => {
      state.user.username = state.
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions
export default reducer;