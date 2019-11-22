import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations/mutations";
import getters from "./mutations/getters";
import actions from "./actions/actions";

Vue.use(Vuex);

const initialState = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
};

export default new Vuex.Store({
    state: initialState,
    ...mutations,
    ...actions,
    ...getters
});
