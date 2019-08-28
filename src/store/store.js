import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     showContent: false,
  },
  mutations: {
  ['SHOW_CONTENT'](state, value){
    console.log(value)
     state.showContent = value
  }
  },
  actions: {

  }
})
