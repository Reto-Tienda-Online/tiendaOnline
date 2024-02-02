import { createStore } from 'vuex'

const store = createStore({
  state: {
    juegoDetalle: null,
    categoryData: '',
    plataformData: '',
    shopCart: [],
  },
  mutations: {
    setJuegoDetalle(state, datos) {
      state.juegoDetalle = datos;
    },
    setCategoryData(state, datos) {
      state.categoryData = datos;
    },
    setPlataformData(state, data) {
      state.plataformData = data
    },
    setShopItems(state, data) {
      state.shopCart.push(data);
    },
    deleteItem(state, data) {
      console.log(data)
      state.shopCart = state.shopCart.filter((element) => {
        return element.id !== data
      })
    },

  },
});

export default store