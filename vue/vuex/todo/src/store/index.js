import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 1,
      text: "html",
      completed: true,
    },
    {
      id: 2,
      text: "css",
      completed: false,
    },
    {
      id: 3,
      text: "JavaScript",
      completed: true,
    },
    {
      id: 4,
      text: "Vue",
      completed: false,
    }
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
