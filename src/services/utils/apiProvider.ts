import axios from 'axios';
import { handleResponse, handleError } from './handleApiResponse';

const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'http://api.weatherapi.com/v1';

/** @param {string} resource */
const getAll = (resource: string) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {string} id */
const getSingle = (resource: string, id: string) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const post = (resource: string, model: object) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const put = (resource: string, model: object) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const patch = (resource: string, model: object) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {string} id */
const remove = (resource: string, id: any) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
};
