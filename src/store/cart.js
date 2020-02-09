import { getAllItems } from '../api/firebase'

const state = () => ({
  cart: []
})

const getters = {
  getCart: state => state.cart
}

const mutations = {
  pushItemToCart: (state, item) => {
    state.cart.push(item)
  },
  removeItemFromCart: (state, id) => {
    state.cart = state.cart.filter(e => e.id != id)
  }
}

const actions = {
  async addItemToCart({ commit }, id) {
    const items = await getAllItems()

    const item = items.filter(elem => elem.id === id)

    try {
      commit('pushItemToCart', item[0])
    } catch (e) {
      return false
    }
  },
  async removeItemFromCart({ commit }, id) {
    try {
      commit('removeItemFromCart', id)
    } catch (e) {
      return false
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
