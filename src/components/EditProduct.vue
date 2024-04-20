<template>
  <transition name="bounce">
    <div v-if="product" class="edit-product">
      <div class="edit-form">
        <h2>Edit Product</h2>
        <form @submit.prevent="saveChanges" class="needs-validation" novalidate>
          <div class="form-group">
            <label for="productName">Name:</label>
            <input type="text" v-model="editedProduct.name" id="productName" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="productDescription">Description:</label>
            <input type="text" v-model="editedProduct.description" id="productDescription" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input type="number" v-model="editedProduct.price" id="productPrice" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="productImage">Image:</label>
            <input type="file" id="productImage" @change="handleImageUpload" class="form-control">
            <small class="text-muted">Select a new image for the product (optional).</small>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Save Changes</button>
            <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      editedProduct: { ...this.product },
      newImage: null
    };
  },
  methods: {
    saveChanges() {
      if (this.newImage !== null) {
        this.editedProduct.imageUrl = this.newImage;
      }

      this.$store.dispatch('updateProductAction', this.editedProduct)
        .then(() => {
          this.$emit('changes-saved');
          this.hide();
        })
        .catch(error => {
          console.error('Failed to update product:', error);
        });
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && this.isImage(file)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.newImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    isImage(file) {
      const fileType = file.type;
      return /^image\/(jpeg|png)$/.test(fileType);
    },
    cancelEdit() {
      this.hide();
    },
    hide() {
      this.$emit('cancel-edit');
    }
  }
};
</script>

<style scoped>
.edit-product {
  position: fixed;
  top: 20%;
  left: 40%;
  width: 400px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 9;
}

.btn-secondary {
  margin-left: 5px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
