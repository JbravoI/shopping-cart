<template>

<div>
    <div>
        <button @click="setSelectedTab('user-cart')">View Cart</button>
        <button @click="setSelectedTab('check-out')">Check Out</button>
        <button @click="setSelectedTab('shop-products')">All Products</button>
    </div>

    <component :is="selectedTab"></component>
</div>
    
</template>


<script>
import CheckOut from './CheckOut.vue';
import UserCart from './UserCart.vue'
import ShopProducts from '../navPages/ShopProducts.vue'
export default {
    components: {ShopProducts,CheckOut, UserCart},

    data() {
        return {
            selectedTab: 'user-cart'
        };
    },

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        }
    }
}
</script>