<template>
  <div id="app">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#productOffcanvas" aria-controls="productOffcanvas">
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
    <ProductList :products="products" />
    <EditProduct v-if="editedProduct" :product="editedProduct" @edit="saveEditedProduct" />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
import EditProduct from './components/EditProduct.vue'

export default {
  components: {
    ProductList,
    AddProduct,
    EditProduct
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20 }
      ],
      editedProduct: null
    }
  },
  methods: {
    addProduct(newProduct) {
      this.products.push({ ...newProduct, id: this.products.length + 1 })
      // Add animation logic here
    },
    editProduct(product) {
      this.editedProduct = product
    },
    saveEditedProduct(editedProduct) {
      const index = this.products.findIndex(p => p.id === editedProduct.id)
      if (index !== -1) {
        this.products.splice(index, 1, editedProduct)
        // Add animation logic here
        this.editedProduct = null
      }
    },
    deleteProduct(id) {
      const index = this.products.findIndex(p => p.id === id)
      if (index !== -1) {
        this.products.splice(index, 1)
        // Add animation logic here
      }
    }
  }
}
</script>
