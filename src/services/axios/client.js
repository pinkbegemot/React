// @flow weak

import axios from 'axios'
import auth from "../auth/auth"
import appConfig from "../../config/appConfig"

// axios call with authorization per request

const client = (token = null) => {
  const defaultOptions = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
       Authorization: token ? token: '',
    },
  };
  // console.log("request, token:" +token);
  return {

    get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    patch: (url, data, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
  };
};

export const request = client(auth.getToken());

