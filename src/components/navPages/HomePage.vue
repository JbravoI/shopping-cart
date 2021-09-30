<template>
    <section>
        <div >
            <p class="flash-text">Welcome to ShopEasy. Get 20% discount on your first purchase. Cart, Cash and Carry. Serving you is our best interest</p>
        </div>

        <div class="ads">
            <p class="adTitle">{{adTitle}}</p>
            <div>
                <p class="adDetails">{{adDetails}}</p>
                <p class="adDate">{{adDate}}</p>
            </div>
            <div class="ad-image">
                <img src="../assets/tele.png" alt="sales">
                <img src="../assets/sc1.png" alt="sales">
                <img src="../assets/sc2.png" alt="sales">
                <img src="../assets/sneakers.jpg" alt="sales">
                <img src="../assets/download.jpg" alt="sales">
            </div>

        </div>

        <div class="products">
           <!-- <shop-products class="product-item" v-for="item in items"
            :key="item.id"
            :id="item.id"
            :item="item"
            @view-product="viewProduct($event)"
            >
           </shop-products> -->
           <shop-products class="product-item " v-for="product in products" 
           :key="product.id" 
           :id="product.id"
           :product="product"
           >
           </shop-products>
        </div>
    </section>
</template>

<script>
import ShopProducts from './ShopProducts.vue';
import items from '../js/items.js';
import axios from 'axios'

export default { 
    components: {
        ShopProducts
        },
    
    data() {
        return {
            adTitle: 'Flash Sales',
            adDetails: '50% Discount',
            adDate: 'September 5th - 9th',
            items : items,
            item: null,
            products: [],
            active: {
                view_item: false
            }
        }

        
    },

    mounted() {
        this.getProducts()
    },

    methods: {
        viewProduct(item) {
            this.item = item
            // this.active.view_item = true
            
        },

        closeItem() {
            this.active.view_item = false
        },

        removeItem(id) {
            this.item.$remove(id)
        },

        getProducts() {
            axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                this.products = response.data
                console.log(this.products)
            })
        }


    }


   
}
</script>

<style scoped>
.flash-text {
    background-color: rgb(194, 115, 128);
    text-align: center;
    color: white;
    padding: 1rem 0 1rem 0;
    font-size: 1.1rem;
}

.ads {
    display: flex;
    background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("../assets/sneakers.jpg");
    /* height: 10rem; */
    background-size: cover;
    color: white;
    /* height: 12rem; */
    padding: 2rem;
    font-family: cursive;
}

.adTitle {
    font-size: 2rem;
    margin-top: 3rem;
}

.adDetails {
    font-size: 1.3rem;
    margin-left: 5rem;
    margin-top: 3rem;
}

.adDate {
    margin-left: 4rem;
}

.ad-image {
    margin-left: 9rem;
}

.ads img {
    width: 10rem;
    height: 8rem;
    margin-left: 1rem;
    object-fit: cover;
}

.products {
    display: flex;
    flex-wrap: wrap;
    
}

.product-item{
    margin-top: 1rem;
    margin-left: 1rem;
}
</style>