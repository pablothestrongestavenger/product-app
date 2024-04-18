<template>
  <div class="row">
    <transition-group name="fade">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card" :id="'product-' + product.id">
          <img :src="product.imageUrl" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
            
            <button @click="editProduct(product)" class="btn btn-primary stretched-link">Edit</button>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
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
    }
  }
}
</script>

<style>
.btn-danger {
  margin-left: 5px;
}
</style>
