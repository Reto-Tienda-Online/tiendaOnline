import { createStore } from 'vuex'

const store = createStore({
  state: {
    juegoDetalle: null,
    categoryData: null,
    shopCart: [],
  },
  mutations: {
    setJuegoDetalle(state, datos) {
      state.juegoDetalle = datos;
    },
    setCategoryData(state, datos) {
      state.categoryData = datos;
    },
    setShopItems(state, data) {
      state.shopCart.push(data);
    },
  },
});

export default store