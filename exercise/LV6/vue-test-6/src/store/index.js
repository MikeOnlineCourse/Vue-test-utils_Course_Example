import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isOpen: false,
      count: 0,
    };
  },
  actions: {
    handleOpenState(context) {
      const isOpen = !context.state.isOpen;
      context.commit("handleOpenState", isOpen);
    },
    addCount(context) {
      context.commit("addCount");
    },
  },
  mutations: {
    handleOpenState(state, payload) {
      state.isOpen = payload;
    },
    addCount(state) {
      state.count++;
    },
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    },
  },
});
