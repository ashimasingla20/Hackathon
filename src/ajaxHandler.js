import environment from './environment';
import { SetLocalStorageObject } from './localStorageService.js';
import Auth from './AuthService';
export const axios = require('axios');
const CancelToken = axios.CancelToken;
let source = CancelToken.source();
export const GetApi = (url, data={}, isLoggedIn = true) => {

    let finalUrl = `${environment.apiUrl}${url}`;
    if(isLoggedIn) {
        setHeader();
    }
    // Make a request for a user with a given ID
    return axios({
        url: finalUrl,
        method: 'get',
        cancelToken: source.token,
        timeout: environment.timeout,
        data
    })
        .then((response) => {
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        })
        .finally(() => {
            // always executed
        });
}

export const PostApi = (url, data, isLoggedIn = true) => {

    let finalUrl = `${environment.apiUrl}${url}`;
    if(isLoggedIn) {
        setHeader();
    }
    // setHeader();
    return axios({
        url: finalUrl,
        method: 'post',
        cancelToken: source.token,
        timeout: environment.timeout,
        data
    })
        .then((response) => {
            // handle success
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error.response)
        })
        .finally(function () {
            // always executed
        });
}
export const PutApi = (url, data, isLoggedIn = true) => {

    let finalUrl = `${environment.apiUrl}${url}`;
    if(isLoggedIn) {
        setHeader();
    }
    // setHeader();
    return axios({
        url: finalUrl,
        method: 'post',
        cancelToken: source.token,
        timeout: environment.timeout,
        data
    })
        .then((response) => {
            // handle success
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error.response)
        })
        .finally(function () {
            // always executed
        });
}


export const DeleteApi = (url, data) => {

    let finalUrl = `${environment.apiUrl}${url}`;
    if (url.indexOf("http://") == 0) finalUrl = url;
    setHeader();
    return axios.delete(finalUrl,
        data,
    )
        .then((response) => {
            // handle success
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error.response)
        })
        .finally(function () {
            // always executed
        });
}

const setHeader = () => {
    // const isLoggedIn = Auth.isAuthenticated();
    // const token = Auth.getUserAccessToken();
    // console.log(token);
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
        axios.defaults.headers.common['user-token'] = localStorage.getItem("token");
    }

    const msie = window.navigator.userAgent.indexOf("MSIE");
    if (msie === -1) {
        axios.defaults.headers.common['Cache-Control'] = 'no-store';
    }

}

// axios.interceptors.response.use((response) => response, (error) => {
//     const originalRequest = error.config;

//     if (error && error.response && error.response.status === 401 && error.response.data.errors[0]['code'] === "INVALID_JWT") {
//         originalRequest._retry = true;

//         const refreshToken = Auth.getUserRefreshToken();
//         const email = Auth.getEmail();
//         const url = `${environment.apiUrl}auth/refresh-token`;

//         return axios.post(url,
//             {
//                 "refreshToken": refreshToken,
//                 email
//             })
//             .then(res => {
//                 if (res.status === 200) {
//                     // add token to LocalStorage
//                     SetLocalStorageObject(res.data.data[0].token);

//                     // add Authorization header
//                     const token = Auth.getUserAccessToken();
//                     originalRequest.headers['Authorization'] = token;

//                     return axios(originalRequest);
//                 }
//             })
//     }
//     return Promise.reject(error);
// });
