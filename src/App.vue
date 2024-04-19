<template>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><router-link to="/">Product List</router-link></li>
      </ul>
      <!-- Add Product button -->
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas" aria-controls="productOffcanvas">
        Add Product
      </button>
    </div>

    <!-- Main content -->
    <div class="main-content">
      <!-- Offcanvas -->
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="productOffcanvas" aria-labelledby="productOffcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="productOffcanvasLabel">Add Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <AddProduct @add="addProduct" />
        </div>
      </div>

      <!-- Product List -->
      <ProductList @edit-product="editProduct" @delete-product="deleteProduct" />

      <!-- Edit Product -->
      <transition name="bounce">
        <EditProduct v-if="editedProduct !== null" :product="editedProduct" @changes-saved="handleChangesSaved" @cancel-edit="cancelEdit" />
      </transition>
    </div>
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
    }
  }
}
</script>

<style>
/* Sidebar styles */
.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidebar h3 {
  color: white;
  padding-left: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 8px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}

.sidebar ul li a:hover {
  background-color: #555;
}

/* Main content styles */
.main-content {
  margin-left: 200px; /* Same as the width of the sidebar */
  padding: 20px;
}
</style>
