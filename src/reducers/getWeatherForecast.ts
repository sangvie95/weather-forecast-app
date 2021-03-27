import { createAsyncThunk } from '@reduxjs/toolkit';
import { weatherAPI } from '../services/api/weather';

export const getWeatherForecast = createAsyncThunk(
  'weather/getWeatherForecast',
  async (location: string, thunkAPI) => {
    const response = await weatherAPI.getWeatherForecast(location);
    if (response.error) return thunkAPI.rejectWithValue('error');
    return response;
  }
);

export const getWeatherForecastBuilder = (builder: any) => {
  builder.addCase(getWeatherForecast.pending, (state: any, action: any) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(getWeatherForecast.fulfilled, (state: any, action: any) => {
    const data = action.payload;

    state.forecast = {
      ...data,
    };

    state.loading = false;
    state.error = false;
  });
  builder.addCase(getWeatherForecast.rejected, (state: any, action: any) => {
    state.forecast = null;
    state.loading = false;
    state.error = true;
  });
};
