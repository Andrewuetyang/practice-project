import storage from '@/assets/lib/storage-porxy.js';

const _global = {
  aboutUs: {}
};
const global = storage.get("global", "sessionStorage") || _global;

//state
const state = {
  global: global,
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  appGlobal(state, payload) {
    state.global = payload;
    storage.set("global", state.global, "sessionStorage");
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
