// store.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false, // Example state, you can have more properties based on your needs
    // token: '',
    usuario: {
        id: null,
        nombre: '',
        apellido: '',
        correo: '',
        admin: false,
        token: '',
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    // setToken(state, value) {
    //     state.token = value;
    // },
    setUsuarioData(state, usuarioData) {
        state.usuario.id = usuarioData.id;
        state.usuario.nombre = usuarioData.nombre;
        state.usuario.apellido = usuarioData.apellido;
        state.usuario.correo = usuarioData.correo;
        state.usuario.admin = usuarioData.admin;
        state.usuario.token = usuarioData.token;
    },
    clearUsuarioData(state) {
        state.usuario.id = null;
        state.usuario.nombre = '';
        state.usuario.apellido = '';
        state.usuario.correo = '';
        state.usuario.admin = '';
        state.usuario.token = ''; // clear the token too
    }
  },
  actions: {
    login({ commit }, usuarioData) {
      // Perform login logic
      // For example, update the state to indicate the user is logged in
      commit('setUsuarioData', usuarioData);
    //   console.log(token);
    //   commit('setToken', token);
      commit('setLoggedIn', true);
    },
    logout({ commit }) {
      // Perform logout logic
      // For example, update the state to indicate the user is logged out
      
      // Perform login logic here
      // For example, you might make an API request to authenticate the user
      // If the authentication is successful, update the state to indicate the user is logged in
      // This is a simplified example, in a real app, you would likely have more complex logic
      // such as making an API request, handling tokens, etc.
      commit('clearUsuarioData');
      commit('setLoggedIn', false);
    },
  },
  getters: {
    usuarioData: (state) => state.usuario,
    // token: (state) => state.token,
    isLoggedIn: (state) => state.isLoggedIn,
    isAdmin: (state) => state.usuario.admin
  },
});

export default store;
