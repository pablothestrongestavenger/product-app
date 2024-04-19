<template>
    <div class="products">
        <h1>PRODUCTS</h1>
        <div class="main-container">
            <transition-group name="fade">
                <div class="prod-con" v-for="product in products" :key="product.id">
                    <h2 class="prod-name">{{ product.name }}</h2>
                    <p class="prod-price">Price: ${{ product.price }}</p>
                    <p class="prod-desc">Description: {{ product.description }}</p>
                    <div class="button-container">
                        <button class="edit-button" @click="editProduct(product)">Edit</button>
                        <button class="delete-button" @click="deleteProduct(product)">Delete</button>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Product A', price: 10, description: 'This is product A' },
                { id: 2, name: 'Product B', price: 20, description: 'This is product B' },
                { id: 3, name: 'Product C', price: 30, description: 'This is product C' },
                { id: 4, name: 'Product D', price: 40, description: 'This is product D' },
                { id: 5, name: 'Product E', price: 10, description: 'This is product E' },
                { id: 6, name: 'Product F', price: 20, description: 'This is product F' },
                { id: 7, name: 'Product G', price: 30, description: 'This is product G' },
                { id: 8, name: 'Product H', price: 40, description: 'This is product H' }
            ]
        };
    },
    methods: {
        editProduct(product) {
            
            console.log("Editing product:", product);
        },
        deleteProduct(product) {

            const index = this.products.indexOf(product);
            if (index !== -1) {
                this.products.splice(index, 1);
            }
        }
    }
};
</script>

<style scoped>
    .products {
        width: 100%;
        height: 100%;
    }
    .main-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .prod-con {
        background: white;
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        width: 200px;
        height: 250px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
    }
    .edit-button,
    .delete-button {
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .edit-button {
        background-color: green;
        color: white;
    }
    .delete-button {
        background-color: #f44336;
        color: white;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
