import { getItems } from '../api/firebase'

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
  fetchItem: itemId => {
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
