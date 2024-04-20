<template>
  <div  class="container mb-4">
    <img src="images/header.png" class="img-fluid mx-auto d-block mb-4" alt="Your Image">
    <p class="text-center">your ultimate kpop botique destination</p>
  </div>
  <div class="row">
    <transition-group name="run-away">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card mb-4 product-card" :id="'product-' + product.id">
          <img :src="product.imageUrl" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
            
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
            &nbsp; <!-- Non-breaking space to add space between buttons -->
            <button @click="editProduct(product)" class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </transition-group>
    </div>
  </template>
  <script>
  export default {
    props: ['products']
  }
  </script>


<!-- End here ok -->
  
