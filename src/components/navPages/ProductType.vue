<template>
    <section>
        <shop-products class="product-item " v-for="product in allProducts" 
           :key="product.id" 
           :id="product.id"
           :product="product"
           >
           </shop-products>
    </section>
</template>

<script>
import ShopProducts from './ShopProducts.vue';

export default {
    inject: ['allProducts'],

    components: {ShopProducts}
    
}
</script>