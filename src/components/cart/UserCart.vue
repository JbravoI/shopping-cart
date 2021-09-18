<template>
    <div class="user-cart">
        <div :class="{show: active}" @click="$emit('close-item')" />

        <div><h2>{{title}}</h2></div>
        

        <div :class="{show : active}">
            <!-- <div class="close-item" @click="$emit('close-item')">X</div> -->

            <div v-if="item" class="item-details">
                <div>
                    <h3>{{item.name}}</h3>
                <p>{{item.price}}</p>
                </div>
                

                <!-- <div v-if="item_total">
                    <h3>IN CART</h3>
                    <h4>{{item_total}}</h4>
                </div> -->

                <div>
                    <button @click="$emit('remove-item', item)">X</button>
                    <!-- <button>Remove</button>
                    <button>Add</button> -->
                </div>
            </div>
        </div>

        <div style="display:flex; justify-content:space-between" v-for="item in getProductToCart" :key="item" >
            <div>
                <h1>{{item.product.name}}</h1>
                <p>{{item.product.price}}</p>
                <p>{{item.quantity}}</p>
            </div>

            <div>
                <button @click="removeItem(item)">X</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['item', 'active'],
    
    data() {
        return {
            title: 'MY CART'
        }
    },

    

    computed:{
        getProductToCart() {
            return this.$store.state.cart
        }
    },

    methods: {
        removeItem(item) {
            this.$store.commit('removeItem', item)
            console.log(item)
        }
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
</style>