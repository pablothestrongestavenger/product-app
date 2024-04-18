<template>
  <div id="app">
    <button @click="toggleOffcanvas" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas" aria-controls="productOffcanvas">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="productOffcanvas" aria-labelledby="productOffcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="productOffcanvasLabel">Product Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <AddProduct @add="addProduct" />
      </div>
    </div>

    <ProductList @edit-product="editProduct" @delete-product="deleteProduct" />
    <transition name="bounce">
      <EditProduct v-if="editedProduct !== null" :product="editedProduct" @changes-saved="handleChangesSaved" @cancel-edit="cancelEdit" />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; 
import ProductList from './components/ProductList.vue';
import AddProduct from './components/AddProduct.vue';
import EditProduct from './components/EditProduct.vue';

export default {
  components: {
    ProductList,
    AddProduct,
    EditProduct
  },
  data() {
    return {
      editedProduct: null
    };
  },
  methods: {
    ...mapActions(['addProductAction', 'updateProductAction', 'deleteProductAction']),

    addProduct(newProduct) {
      this.addProductAction(newProduct);
    },
    editProduct(product) {
      this.editedProduct = { ...product };
    },
    handleChangesSaved() {
      this.editedProduct = null;
    },
    deleteProduct(id) {
      this.deleteProductAction(id);
    },
    cancelEdit() {
      this.editedProduct = null;
    },
    toggleOffcanvas() {
      // Implement offcanvas toggle logic
    }
  }
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>