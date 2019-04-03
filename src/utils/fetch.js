import axios from 'axios';
import qs from 'qs';
import utils from '../utils/utils';
let fetch = axios.create({
    baseURL: process.env.REACT_APP_URL,
    timeout: 5000 // request timeout
})
fetch.interceptors.request.use(config => {
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        if (typeof(config.data) !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
            config.data = qs.stringify(config.data)
        }
    }
    let encryptObj = {
      requestTime: parseInt(new Date().getTime() / 1000),
      xcToken: ''
    };
    config.headers['XC-AUTH'] = utils.encrypt(JSON.stringify(encryptObj));
    return config
}, error => {
    Promise.reject(error)
})

fetch.interceptors.response.use(async res => {
    let { data } = res;
    return {...data}
}, error => {
    if (error.response) {
        if (error.response.status === 500) {
            console.log('服务器错误，请联系管理员处理')
        }
        return Promise.reject(error.response.data)
    } else {
        return Promise.reject(error)
    }
})

export default fetch;
