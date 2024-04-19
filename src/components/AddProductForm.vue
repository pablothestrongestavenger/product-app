<!-- AddProductForm.vue -->
<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">

        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {

        productName: '',
        productDescription: '',
        productPrice: ''
      };
    },
    methods: {
      addProduct() {
        const product = {
          name: this.productName,
          description: this.productDescription,
          price: this.productPrice
        };

        this.$store.dispatch('addProduct', product);

        this.productName = '';
        this.productDescription = '';
        this.productPrice = '';
      }
    }
  };
  </script>
  

  <!-- End Here -->