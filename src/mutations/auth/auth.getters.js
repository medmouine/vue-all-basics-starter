export default {
    isLoggedIn: state => !!state.token && !!state.user,
    authStatus: state => state.status,
    user: state => state.user
};
