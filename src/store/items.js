
const state = () => ({
  cart: []
})

const getters = {}

const mutations = {
  pushItemToCart: (state, item) => {
    state.token.cart.push(item)
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
