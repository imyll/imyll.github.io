import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mybooks:[]
  },
  mutations: {
    addMybooks:(state, book) => {
      state.mybooks.push(book);
    },
    removeMybooks:(state, id) => {
      state.mybooks = state.mybooks.filter((item) => item._id !== id);
    }
  },
  actions: {
  },
  modules: {
  }
})
