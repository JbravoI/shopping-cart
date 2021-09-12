<template>
    <div>
        <h2>Proceed to Check Out</h2>

        <form @submit.prevent="checkOut(details)">

            <input type="text" name="firstname" id="firstname" placeholder="First Name" v-model="firstname">
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" v-model="lastname">
            <button>check out</button>
        </form>

        <p>{{details.firstname}}</p>
        <p>{{details.lastname}}</p>
        

    </div>

    
</template>

<script>
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            details : ''
        }
    },

    methods: {
        checkOut() {
            const firstname = this.firstname
            const lastname= this.lastname
            this.details = {
                firstname,
                lastname
            }

        }
    }
}
</script>