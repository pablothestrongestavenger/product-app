<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct" class="needs-validation" novalidate>
      <div class="form-group" :class="{ 'was-validated': formSubmitted && !name }">
        <label for="productName">Name:</label>
        <input type="text" v-model="name" id="productName" class="form-control" placeholder="Name" required>
        <div class="invalid-feedback">
          Please provide a name.
        </div>
      </div>
      <div class="form-group" :class="{ 'was-validated': formSubmitted && !description }">
        <label for="productDescription">Description:</label>
        <input type="text" v-model="description" id="productDescription" class="form-control" placeholder="Description" required>
        <div class="invalid-feedback">
          Please provide a description.
        </div>
      </div>
      <div class="form-group" :class="{ 'was-validated': formSubmitted && !price }">
        <label for="productPrice">Price:</label>
        <input type="number" v-model="price" id="productPrice" class="form-control" placeholder="Price" required>
        <div class="invalid-feedback">
          Please provide a valid price.
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      formSubmitted: false
    };
  },
  methods: {
    addProduct() {
      this.formSubmitted = true;
      if (this.name && this.description && this.price) {
        const newProduct = {
          name: this.name,
          description: this.description,
          price: this.price
        }
        this.$emit('add', newProduct)
        this.clearForm()
      }
    },
    clearForm() {
      this.name = ''
      this.description = ''
      this.price = ''
      this.formSubmitted = false;
    }
  }
};
</script>
