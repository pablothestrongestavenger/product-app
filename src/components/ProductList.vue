<template>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.imageUrl" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
            <router-link :to="'/edit/' + product.id" class="btn btn-primary stretched-link">Edit</router-link>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ['products']
  }
  </script>


<!-- End here ok -->
  
