<template>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><router-link to="/">Product List</router-link></li>
        <li><router-link to="/add">Add Product</router-link></li>
      </ul>
    </div>

    <!-- Main content -->
    <div class="main-content">
      <router-view @add="addProduct" @edit-product="editProduct" @delete-product="deleteProduct" />
      
      <!-- Edit Product -->
      <transition name="bounce">
        <EditProduct v-if="editedProduct !== null" :product="editedProduct" @changes-saved="handleChangesSaved" @cancel-edit="cancelEdit" />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; 
import EditProduct from './components/EditProduct.vue';

export default {
  components: {
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
