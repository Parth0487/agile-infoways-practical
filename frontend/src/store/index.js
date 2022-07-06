import { createStore } from "vuex";

export default createStore({
  state: {
    isUserLoggedIn: false,

    user: {},
  },

  mutations: {
    userLogin(state, payload) {
      state.isUserLoggedIn = payload;
    },

    setUserData(state, payload) {
      state.user = payload;
    },
  },
});
