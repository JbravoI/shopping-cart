<template>
    <section>
        <div>
            <shopping-banner></shopping-banner>
        </div>

        <div class="right-section">
            <h3>Log In</h3>
            <hr>
            <form @submit.prevent="loginAuth">
                <div>
                     <label for="Email">Email</label> <br>
                    <input type="email" name="email" id="email" v-model="emailAddress">
                    <p v-if="emailValidity === 'invalid'">this field must not be empty</p>
                </div>

                <div>
                     <label for="password">Password</label><br>
                    <input type="password" name="password" id="password" v-model="password">
                    <p v-if="passwordValidity === 'invalid'">enter your password</p>
                </div>
               
               <button>Log In</button>
               <div class="extra-note">
                   <p class="password"><router-link to="/forgotPassword">Forgot Password?</router-link></p>
                   <p class="account">Don't have an account yet? </p>
                   <p class="sign-up"><router-link to="/register">Sign Up</router-link></p>
               </div>

            </form>
        </div>
    </section>
</template>

<script>
import firebase from 'firebase/compat'
export default {
    data() {
        return {
            emailAddress: '',
            password: '',
            emailValidity: '',
            passwordValidity: ''
        }
    },

    methods: {
        loginAuth() {
            // if(this.emailAddress === '') {
            //     this.emailValidity = 'invalid'

            // }else{
            //     this.emailValidity = 'valid'
            //     console.log(this.emailAddress)
            //     return this.emailAddress = ""

            // }

            // if(this.password === '') {
            //     this.passwordValidity = 'invalid'
            // }else {
            //     this.passwordValidity = 'valid'
            //     return this.password = ""
            // }

            firebase.auth().signInWithEmailAndPassword(this.emailAddress, this.password)
            .then(user => {
                alert(`you are logged in ${user.emailAddress}`)
                this.$router.push('/')
            },
            err => {
                alert(err.message)
            })

        }
    }
}
</script>


<style scoped>
    section {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;
    }

    .right-section{
        width: 30rem;
        border: 1px solid #ca3f77;
        margin-top: 5rem;
        padding: 1rem;
        border-radius: 1rem;
        height: fit-content;
        padding-bottom: 2rem;
    }

    .right-section h3 {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: .5rem;
        font-size: 1.3rem;
    }

    form div {
        margin-top: 1rem;
    }

    label {
        font-size: 1.2rem;
    }

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: .5rem;
        border: none;
        border: 1px solid #ca3f77;
    }

    button {
        width: 100%;
        margin-top: 2rem;
        height: 2.5rem;
        border-radius: .5rem;
        background: #ca3f77;
        outline: none;
        border: none;
        color: white;
        font-size: 1.2rem;

    }

    .extra-note {
        text-align: center;
    }

    .account {
        margin-top: 1rem;
    }

    .sign-up {
        padding-top: .5rem;
    }

    .sign-up a {
        color: #ca3f77;
    }

    .password a {
        color: #ca3f77;
    }
</style>