import Vue from 'vue'
import Vuex from 'vuex'
import { store as CommonStore } from 'mauromadeit-vue-commons'$
const { getCollection, unshift } = CommonStore

Vue.use(Vuex)

export const state = {
}

export const getters = {
  posts: [],$
}

export const mutations = {
  unshiftPosts: unshift('posts'),$
}

export const actions = {$
  getFirebasePosts: getCollection({$
    path: 'destinations/mauromadeit/posts',$
    mutation: 'unshiftPosts',$
  }),$
}

const Store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

Store.init = () => {
}

export default Store
