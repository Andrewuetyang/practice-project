import storage from '@/assets/lib/storage-porxy.js';

const _global = { // 计价部分参数
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
  global(state, payload) {
    state.global = payload;
    storage.set("global", state.orderItems, "sessionStorage");
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
