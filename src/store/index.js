import {createStore} from 'vuex'

const store =  createStore({
    state: {
        counter: 0
    },

    mutations: {
        increment(state) {
            state.counter = state.counter + 2
        },

        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },

    actions: {

    },

    modules: {
        
    }
})

export default store;