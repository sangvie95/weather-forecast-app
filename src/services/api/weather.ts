import { apiProvider } from '../utils/apiProvider';

const API_KY =
  process.env.REACT_APP_API_KY || '007cdf34bdd34edca3d144353212403';

export const weatherAPI = {
  getCityList(location: string) {
    const resource = `search.json?key=${API_KY}&q=${location}`;
    return apiProvider.getAll(resource);
  },
  getWeatherForecast(location: string) {
    const resource = `forecast.json?key=${API_KY}&q=${location}&days=5&aqi=no&alerts=no`;
    return apiProvider.getAll(resource);
  },
};
