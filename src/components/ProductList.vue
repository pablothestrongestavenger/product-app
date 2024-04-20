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
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    editProduct(product) {
      this.$emit('edit-product', product);
    },
    deleteProduct(id) { 
      this.$emit('delete-product', id);
      alert('Deleted successfully');
    }
  }
}
</script>

<style>
.product-card {
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

/* Transition styles */
.run-away-enter-active {
  transition: transform 0.5s;
}
.run-away-leave-active {
  animation: run-away 0.5s ease-out;
}

@keyframes run-away {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    animation: floatAnimation 1s infinite alternate; /* Animation */
}

h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

/* Animation keyframes */
@keyframes floatAnimation {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
}
</style>