<template>
    <div class="floating-square">
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
          <div class="form-group">
            <label for="productImage">Image:</label>
            <input type="file" ref="imageInput" accept="image/jpeg, image/png" @change="handleImageUpload" id="productImage" class="form-control">
            <small class="text-muted">Accepts only JPG and PNG files.</small>
          </div>
          <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
        name: '',
        description: '',
        price: '',
        formSubmitted: false,
        imageData: null
        };
    },
    methods: {
      addProduct() {
        this.formSubmitted = true;
        if (this.name && this.description && this.price) {
          const newProduct = {
            name: this.name,
            description: this.description,
            price: this.price,
            imageUrl: this.imageData
          }
          this.$emit('add', newProduct)
          alert('Added successfully')
          this.clearForm()
        }
      },
      clearForm() {
        this.name = ''
        this.description = ''
        this.price = 0
        this.formSubmitted = false;
        this.$refs.imageInput.value = '';
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file && this.isImage(file)) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageData = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          this.$refs.imageInput.value = '';
          alert('Please select a valid JPG or PNG image.');
        }
      },
      isImage(file) {
        const fileType = file.type;
        return /^image\/(jpeg|png)$/.test(fileType);
      }
    }
  }
  </script>
    
<style>
.floating-square {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: skyblue;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
  
