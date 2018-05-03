import Vue from 'vue'
import Vuex from 'vuex'
import { Database, store } from 'mauromadeit-vue-commons'
const dbCfg = { ref: 'poster'  }
const { getCollection, set } = store.make({ dbCfg })

Vue.use(Vuex)

export const state = {
  posts: [],
}

export const getters = {
  getPublishedPosts(state) {
    return state.posts.filter(p => p.published)
  },
}

export const mutations = {
  setPosts: set('posts'),
}

export const actions = {
  getPosts: getCollection({
    path: 'destinations/marienbad-magazine/posts',
    mutation: 'setPosts',
  }),
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
