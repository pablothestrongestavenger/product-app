<template>
  <div class="row">
    <transition-group name="run-away">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card" :id="'product-' + product.id">
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
</style>
