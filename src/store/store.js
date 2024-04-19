import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10, imageUrl: 'images/images.png' },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 20, imageUrl: 'images/images.png' }
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
