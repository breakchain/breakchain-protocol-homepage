import axios from 'axios';
export const BASE_URL = "https://mjiu1x8zwb.execute-api.us-west-2.amazonaws.com/"
const Axios = axios.create();
Axios.defaults.baseURL = BASE_URL;


const handleError = (path, error) => {
  document.dispatchEvent(
    new CustomEvent('appError', {
      bubbles: true,
      detail: { error },
    })
  );
  throw error;
};

export const Api = {
  get: (url, path, queries) => {
    if (path) url += path;
    if(typeof(queries) === 'object') {
      Object.keys(queries).map((key, index) => {
        if(index === 0) {
          url += `?${key}=${queries[key]}`
        } else {
          url += `&${key}=${queries[key]}`
        }
      })
    } else {
      if(queries) {
        url += queries;
      }
    }
    return Axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => handleError(url, error))
  },
  post: (url, path, data) => {
    if(path) url+= path;
    return Axios
      .post(url, data)
      .then((response) => response.data)
      .catch((error) => handleError(url, error))
  }
}