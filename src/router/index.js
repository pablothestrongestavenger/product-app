import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduct from '../views/AddProduct.vue'
import ProductList from '../views/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductList
  },
  {
    path: '/addprod',
    name: 'addprod',
    component: AddProduct
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
