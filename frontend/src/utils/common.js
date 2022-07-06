import store from '../store/index'
import axios from 'axios';

const BASE_URL = "http://localhost:3000/"

export const authGaurd = (to, from, next) => {

    let defaultRoutes = ["login", "application"]

    let auth = store.state.isUserLoggedIn

    if (defaultRoutes.includes(to.name)) {

        if (auth) return next('/applications');
        return next()

    } else {

        if (!auth) return next('/');
        return next();

    }
}

export const apiCall = async (method, path, body, params, headers) => {

    let token = localStorage.getItem("auth")
  
    let req = {
      method: method,
      data: body,
      url: BASE_URL + path,
      params: params ? params : {},
    }
  
    if (headers) req.headers = headers;
  
    if (token) {
      req.headers = {
        "Authorization": token
      }
    }
    let response = await axios(req);
  
    return response.data || {};
  };
  