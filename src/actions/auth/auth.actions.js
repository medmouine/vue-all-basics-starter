import {AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS} from "../../mutations/auth/auth.mutations";
import {post, setDefaultHeader} from "../api/apiCalls";

const LOGIN_URL = '/login';

const login = async ({commit}, {username, password}) => {
    commit(AUTH_REQUEST);
    try {
        const { user } = await post(process.env('auth.base_url') + LOGIN_URL, {username, password});
        localStorage.setItem('token', user.token);
        setDefaultHeader('Authentication', user.token);
        commit(AUTH_SUCCESS, user.token, user);
    } catch (error) {
        commit(AUTH_FAILED, error);
    }
};

export default {login};