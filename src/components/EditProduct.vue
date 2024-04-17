
<template>
    <div>
      <h2>Edit Product</h2>
      <form @submit.prevent="editProduct">
        <input type="text" v-model="editedProduct.name">
        <input type="text" v-model="editedProduct.description">
        <input type="number" v-model="editedProduct.price">
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
    data() {
      return {
        editedProduct: { ...this.product }
      }
    },
    methods: {
      editProduct() {
        this.$emit('edit', this.editedProduct)
      }
    }
  }
  </script>
  