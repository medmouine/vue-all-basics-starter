import axios from 'axios';

export const get = async (url) =>
    await axios.get(url);

export const post = async (url, body) =>
    await axios.post(url, body);

export const setDefaultHeader = (k, v) =>
    axios.defaults.headers.common[k] = v;