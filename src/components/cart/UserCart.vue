<template>
    <div class="user-cart">
        
        <div class="the-cart" style="display:flex; justify-content:space-between" v-for="item in getProductToCart" :key="item" >
            <div class="cart-items">
                <h1>{{item.product.name}}</h1>
                <p>Price: ${{item.product.price}}</p>
                <div style="display:flex">
                    <button class="quantity-btn" @click="reduceQuantity(item)">-</button>
                    <p>Quantity: {{item.quantity}}</p>
                    <button class="quantity-btn" @click="increaseQuantity()">+</button>
                </div>
            </div>

            <div class="remove-btn">
                <button @click="removeItem(item)">X</button>
            </div>

            
        </div>

        <div v-if="getProductToCart.length > 0">
            <p  >Total : {{displayProductTotal}} </p>
            
        </div>

        <div v-if="getProductToCart.length > 0" class="check-out">
            <button>Check Out</button>
        </div> 
        
        
            
    </div>
    
</template>

<script>
// import { mapState } from 'vuex'
export default {
    props: ['item', 'active'],
    
    data() {
        return {
            title: 'MY CART',
        }
    },

    computed:{
        getProductToCart() {
            return this.$store.state.cart
        },

        displayProductTotal(){
            return this.$store.getters.displayProductTotal
        }
    },

    methods: {
        removeItem(item) {
            this.$store.commit('removeItem', item)
        },
        
        reduceQuantity(item) {
            console.log(item);
            // return this.$s   tore.commit('minusQuantity')
        },

        increaseQuantity() {
            return this.$store.commit('addQuantity')
        },
        
    }


}
</script>
<style scoped>
.user-cart {
    border: 1px solid grey;
    width: 20rem;
    margin-left: 3rem;
    margin-top: 1rem;
    height: 50vh;
    padding: 1rem;
}

.user-cart h2 {
    text-align: center;
}

.item-details {
    display: flex;
    justify-content: space-between;
}

.cart-items {
    margin-top: 1rem;
}

.the-cart {
    border-bottom: 1px solid grey; 
    padding-bottom: .5rem ;
}
.remove-btn {
    margin-top: 2rem;   
}

.remove-btn button {
    width: 2rem;
}

.check-out {
    margin-top: 2rem;
}

.check-out button {
    width: 100%;
    background-color: #ca3f77;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: .3rem;
    font-size: 1.1rem;
}

.quantity-btn {
    width: 1rem;
    margin-right: .5rem;
}
</style>