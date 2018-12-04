const mutations = {
    pushProductToCart (state, { id }) {
      state.items.push({
        id,
        quantity: 1
      })
    },
  
    incrementItemQuantity (state, { id }) {
      const cartItem = state.items.find(item => item.id === id)
      cartItem.quantity++
    },
  
    setCartItems (state, { items }) {
      state.items = items
    },
  
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
}

export default mutations;