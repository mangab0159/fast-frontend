import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
    userid: '',
    patientName: '',
    patientAge: '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
    patientName(state) {
      return state.patientName;
    },
    patientAge(state) {
      return state.patientAge;
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    clearToken(state) {
      state.token = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    setUserid(state, userid) {
      state.userid = userid;
    },
    setPatientName(state, patientName) {
      state.patientName = patientName;
    },
    setPatientAge(state, patientAge) {
      state.patientAge = patientAge;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setToken', data.token);
      commit('setUsername', data.username);
      commit('setUserid', data.userid);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.username);
      return data;
    },
  },
  modules: {},
});
