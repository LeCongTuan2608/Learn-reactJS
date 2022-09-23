import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from 'api/userAPI';

export const register = createAsyncThunk('user/register', async (payload) => {
   let data = '';
   await userAPI
      .register(payload)
      .then((success) => {
         data = success;
      })
      .catch((error) => {
         console.log(error);
         data = error.response.data;
      });
   localStorage.setItem('access_token', data.token);
   localStorage.setItem('access_token', data.tokenType);
   localStorage.setItem('user', JSON.stringify(data.user));
   return data;
});
const userSlice = createSlice({
   name: 'user',
   initialState: {
      current: {},
      setting: {},
   },
   reducers: {},
   extraReducers: {
      [register.fulfilled]: (state, action) => {
         state.current = action.payload;
      },
   },
});
const { reducer } = userSlice;
export default reducer;
