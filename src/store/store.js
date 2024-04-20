import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      { id: 1, name: 'The Album', description: 'Blackpink', price: 300, imageUrl: 'images/blackpink.jpg' },
      { id: 2, name: 'Squared Up', description: 'Blackpink', price: 250, imageUrl: 'images/square-up.jpg' },
      { id: 3, name: 'Golden', description: 'Jungkook BTS', price: 500, imageUrl: 'images/Golden.jpg' },
      { id: 4, name: 'I Never Die', description: 'G-idle', price: 600, imageUrl: 'images/idle.jpg' },
      { id: 5, name: 'I Feel', description: 'G-idle', price: 459, imageUrl: 'images/ifeel.jpg' },
      { id: 6, name: 'Fancy', description: 'TWICE', price: 799, imageUrl: 'images/fancy.jpg' }
    ]
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.products.push({ ...newProduct, id: state.products.length + 1 });
    },
    UPDATE_PRODUCT(state, editedProduct) {
      const index = state.products.findIndex(p => p.id === editedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, editedProduct);
        alert('Edited successfully');
      }
    },
    DELETE_PRODUCT(state, id) {
      state.products = state.products.filter(product => product.id !== id);
    }
  },
  actions: {
    addProductAction({ commit }, newProduct) {
      commit('ADD_PRODUCT', newProduct);
    },
    updateProductAction({ commit }, editedProduct) {
      commit('UPDATE_PRODUCT', editedProduct);
    },
    deleteProductAction({ commit }, id) {
      commit('DELETE_PRODUCT', id);
    }
  }
});

export default store;
