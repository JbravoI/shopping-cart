import {createStore} from 'vuex'

const store =  createStore({

    state: {
        counter: 0,
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
                   productInCart.quantity = productInCart.quantity + quantity;  
                   return;
               }
            state.cart.push({
                product,
                quantity,
            });

        },

        removeItem(state, product) {
            const productIndex = state.cart.findIndex((item) => item === product);
            if (productIndex !== -1) {
            state.cart.splice(productIndex, 1)
            }      
        },

        cartTotal(state, payload) {
           for (let i = 0; i < state.cart.length; i++) {
               const price = parseFloat(state.cart[i].product.price)
               const quantity = state.cart[i].quantity
               const allSum = price * quantity
              payload.value = payload.value + ( allSum )
           }
        },
    }, 


    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },

        displayProductTotal(state){
            let sum = 0;
            for(let j=0; j<state.cart.length; j++){
                sum += state.cart[j].product.price * state.cart[j].quantity;
            }
            return sum;
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

        cartTotal(context, payload) {
            context.commit('cartTotal', payload)
        }
    },

    modules: {
        
    }
})

export default store;