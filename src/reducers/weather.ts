import { createSlice } from '@reduxjs/toolkit';
import { getAllCityList, getAllCityListBuilder } from './getAllCityList';
import {
  getWeatherForecast,
  getWeatherForecastBuilder,
} from './getWeatherForecast';

interface WeatherState {
  city: object[];
  forecast: any;
  loading: boolean;
  error: boolean;
}

const { actions, reducer } = createSlice({
  name: 'weather',
  initialState: {} as WeatherState,
  reducers: {},
  extraReducers: (builder) => {
    getAllCityListBuilder(builder);
    getWeatherForecastBuilder(builder);
  },
});

const allActions = {
  ...actions,
  getAllCityList,
  getWeatherForecast,
};

export { allActions as weatherActions, reducer };
