import axios from 'axios'
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error: any) => {
        return error?.response?.status === 429
    }
});

const HttpClient = axios.create({
    baseURL: '/api',
    timeout: 1000
});

HttpClient.interceptors.response.use(
    response => {
        return response.data;
    },
    async (error) => {
        if (error && error.response) {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
            }

            if (error.response.status === 404) {
                // Not Found
            }

            if (error.response.status === 400) {
                // Not Found
            }

            if (error.response.status === 504) {
                // Gateway Timeout
                return Promise.reject({
                    code: error?.code,
                    statusCode: error?.response?.status,
                    message: `Something weng wrong. Please check your internet connection or contact administrator.`
                })
            }
            return Promise.reject(error.response.data);
        } else {
            if (error?.code) {
                return Promise.reject({
                    code: error?.code,
                    statusCode: 408,
                    message: `Something weng wrong. Please check your internet connection or contact administrator.`
                })
            } 
            
            return Promise.reject({
                code: error?.code,
                statusCode: 500,
                message: `Something weng wrong. Please check your internet connection or contact administrator.`
            })
        }
    }
);


export default HttpClient