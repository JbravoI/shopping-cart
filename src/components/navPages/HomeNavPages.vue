<template>

<div>
    <div>
        <p><a @click="setSelectedTab('user-cart')">View Cart</a></p>
        <p><a @click="setSelectedTab('check-out')">Check Out</a></p>
        <a @click="setSelectedTab('product-type')">All products</a>
    </div>

    <component :is="selectedTab"></component>
    
</div>
    
</template>


<script>
import ProductType from './ProductType.vue'
import CheckOut from '../cart/CheckOut.vue'
import UserCart from '../cart/UserCart.vue'
import axios from 'axios'

export default {
    components: {ProductType, UserCart, CheckOut},

    data() {
        return {
            selectedTab: 'check-out',
            products: [],

        };
    },

     mounted() {
        this.getProducts()
    },


    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },

        getProducts() {
            axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                this.products = response.data
                console.log(this.products)
            })
            
        },
        
    },

    
    
    provide() {
        console.log(this.products)
        return {
            allProducts: this.products

    }
    },

    

    
}
</script>