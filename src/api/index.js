import axios from 'axios';
import config from '../config';

// 设置全局请求url
axios.defaults.baseURL = config[config.env].host;
axios.defaults.timeout = 30 * 1000,
// 开启发送请求时设置cookie
// axios.defaults.withCredentials = true;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const URL = {
    login: '/sg/user/login',
    register:'/sg/user/register',
    getHotBook: '/sg/book/fetchBookByHot',
    getRecommendBook: '/sg/book/fetchBookByRecommend',
    verifyLogin: '/sg/verifyLogin'
}

export const POST_API = (url,parameter={}) => axios.post(url, parameter)

export const GET_API = (url,parameter={}) => axios.get(url, {params: parameter})

export const LOGIN_ACTION = (parameter) => POST_API(URL.login, parameter)

export const REGISTER_ACTION = (parameter) => POST_API(URL.register, parameter)

export const getHotBook = (parameter) => GET_API(URL.getHotBook,parameter)

export const getRecommendBook = (parameter) => GET_API(URL.getRecommendBook,parameter)

export const verifyLogin = () => GET_API(URL.verifyLogin)
