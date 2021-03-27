import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherAPI } from '../services/api/weather';

export const getAllCityList = createAsyncThunk(
  'weather/getAllCityList',
  async (location: string, thunkAPI) => {
    const response = await weatherAPI.getCityList(location);
    if (response.error) return thunkAPI.rejectWithValue('error');
    return response;
  }
);

export const getAllCityListBuilder = (builder: any) => {
  builder.addCase(getAllCityList.pending, (state: any, action: any) => {});
  builder.addCase(getAllCityList.fulfilled, (state: any, action: any) => {
    const data = action.payload;
    state.city = [...data];
  });
  builder.addCase(getAllCityList.rejected, (state: any, action: any) => {});
};
