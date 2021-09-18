import {createStore} from 'vuex'

const store =  createStore({
    state: {
        counter: 0,
        products: [],

        cart: []
    },

    mutations: {
        increment(state) {
            state.counter = state.counter + 2
        },

        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },

        // addToCart(state, payload) {
        //     for(let i = 0; i < state.cart.length; i++) {
        //         if(state.cart[i].product.id === payload.product.id){
        //             state.cart[i].quantity++;
        //             return;
        //         } 
        //     }
        //     state.cart.push(payload)
        // },

        addToCart(state, {product, quantity}) {
            let productInCart = state.cart.find(item =>{
                   return item.product.id === product.id; 
            });
               if (productInCart){
                   productInCart.quantity += quantity;
                   return;
               }
            state.cart.push({
                    product,
                    quantity
                });
           },

        removeItem(state, product) {
            const productIndex = state.cart.findIndex((item) => item === product);
            if (productIndex !== -1) {
            state.cart.splice(productIndex, 1)
            }      
        },


        updateCart(state, updatedItem) {
            state.cart = state.cart.map((cartItem) => {
                if(cartItem.id === updatedItem.id) {
                    return updatedItem
                }

                return cartItem;
            });
        },

        removeCartItem(state, item) {
            state.cart = state.cart.filter((cartItem) => {
                return cartItem.id != item.id
            })
        }
    }, 

    getters: {
        finalCounter(state) {
            return state.counter * 2;

        },

        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter;
            if(finalCounter < 0) {
                return 0;
            }
            if(finalCounter > 100) {
                return 100;
            }
            return finalCounter
        }
    },

    actions: {
        increment(context) {
            setTimeout(function() {
            context.commit('increment')
            },2000)
        },

        increase(context, payload) {
            context.commit('increase', payload)
        }
    },

    modules: {
        
    }
})

export default store;