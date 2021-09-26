import {createStore} from 'vuex'

const store =  createStore({

    state: {
        counter: 0,
        cart: [],
        allPrices : [],
       
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
            console.log(productIndex)
            if (productIndex !== -1) {
            state.cart.splice(productIndex, 1)
            }      
        },

        cartTotal(state) {
            let sum = 0
           for (let i = 0; i < state.cart.length; i++) {
               const price = state.cart[i].product.price
               const quantity = state.cart[i].quantity
               var interger = parseFloat(price)
               const allSum = interger * quantity
                sum += allSum    
           }
           console.log(sum) 
           
           return sum 
        },

        minusQuantity(state) {
            for(let i = 0; i < state.cart.length; i++) {
                const reduce = state.cart[i].quantity
                    if(reduce > 1) {
                    state.cart[i].quantity = state.cart[i].quantity - 1
                }
            }
        },

        addQuantity(state) {
            for(let i = 0; i < state.cart.length; i++) {
                state.cart[i].quantity = state.cart[i].quantity + 1
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
        },

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
        },

        cartTotal(context) {
            context.commit('cartTotal')
        }
    },

    modules: {
        
    }
})

export default store;