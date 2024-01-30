import { createStore } from 'vuex'

const store = createStore({
  state: {
    juegoDetalle: null,
    categoryData: null,
  },
  mutations: {
    setJuegoDetalle(state, datos) {
      state.juegoDetalle = datos;
    },
    setCategoryData(state, datos) {
      state.categoryData = datos;
    },
  },
});

export default store