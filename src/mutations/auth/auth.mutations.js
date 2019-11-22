const AuthStatus = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
};

export const AUTH_REQUEST = 'auth_request';
export const AUTH_SUCCESS = 'auth_success';
export const AUTH_FAILED = 'auth_failed';

const auth_request = (state) => state = {status: AuthStatus.LOADING, ...state};

const auth_success = (state, token, user) => state = {status: AuthStatus.SUCCESS, token: user, user: user, ...state};

const auth_failed = (state, error) => state = {status: AuthStatus.ERROR, message: error.message, ...state};

export default {request: auth_request, success: auth_success, failed: auth_failed};