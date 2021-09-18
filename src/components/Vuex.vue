<template>
    <div>
        <h1>Vuex</h1>

        <h3>{{counter }}</h3>
        <h3>{{count}}</h3>

        <button @click="addOne">Add 2</button>
        <button @click='add10'>Add 10</button>
    </div>
</template>

<script>
export default {
    computed : {
        counter() {
            return this.$store.getters.finalCounter;
        },

        count() {
            return  this.$store.getters.normalizedCounter 
        }
    }, 

    methods: {
        addOne() {
            this.$store.dispatch('increment')
        },

        add10() {
            // this.$store.commit('increase', {value:10})

            //alternative way to this this vuex mutation
            
            this.$store.dispatch({
                type: 'increase',
                value: 10
            })
        }
    }
    
}
</script>