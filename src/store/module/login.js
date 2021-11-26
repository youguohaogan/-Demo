import { getToken } from '@/utils/tools'
const state = { user: getToken(), route: [] }
const getters = {}
const actions = {}
const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_ROUTE (state, data) {
    state.route = data
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
