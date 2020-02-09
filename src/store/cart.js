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
  removeItemFromCart: (state, item) => {
    state.cart.splice(item, 1)
  }
}

const actions = {
  async addItemToCart({ commit }, id) {
    const items = await getAllItems()

    const item = items.filter(elem => elem.id === id)
    console.log(item)

    try {
      commit('pushItemToCart', item)
    } catch (e) {
      return false
    }
  },
  async removeItemFromCart({ commit }, id) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
