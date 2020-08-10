import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patientname: '',
  },
  getters: {
    isSearching(state) {
      return state.patientname !== '';
    },
  },
  mutations: {
    setPatientname(state, patientname) {
      state.patientname = patientname;
    },
  },
  actions: {},
  modules: {},
});
