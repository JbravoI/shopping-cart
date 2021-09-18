<template>
    <section class="user-form">
        <div class="left-section">
            <shopping-banner></shopping-banner>
            <i class="fa fa-instagram"></i>
        </div>

        <div class="right-section">
            <form @submit.prevent="firstNameStatus">
                <div>
                    <div class="sign-header">
                        <!-- <h2>SIGN UP</h2> -->
                        <h2>Sign up with Google </h2>
                        <img class="google-icon" src="../assets/google.png" alt="google-icon">
                        <p>OR</p>

                    </div>
                    <div>
                        <p style="text-align:center;margin-bottom:.4rem; margin-top:.8rem">Take these quick and easy steps to get started.</p>
                        <hr>
                    </div>

                    <div class="nameInput">
                        <div class="form-control" :class="{invalid: firstNameValidity === 'invalid'}">
                            <label for="First-Name">First Name</label><br>
                            <input type="text" name="firstName" id="firstName" v-model.trim="firstNameInput" >
                            <p v-if="firstNameValidity === 'invalid'">{{required}}</p>
                        </div>

                        <div class="form-control lastname" :class="{invalid: firstNameValidity === 'invalid'}">
                            <label for="Last-Name">Last Name</label><br>
                            <input type="text" name="lastName" id="lastName" v-model.trim="lastNameInput">
                            <p style="color:red; font-size:.8rem" v-if="lastNameValidity === 'invalid'">{{required}}</p>

                        </div>                      
                    </div>

                    <div class="form-items">
                        <label for="Email">Email Address</label><br>
                        <input type="email" name="Email" id="Email" v-model.trim="emailInput">
                        <p style="color: red; font-size:.8rem" v-if="emailValidity === 'invalid'">{{required}}</p>

                    </div>

                    <div class="form-control form-items" :class="{password: passwordValidity === 'too short'}">
                        <label for="password">Password</label><br>
                        <input type="password" name="password" id="password" v-model.trim="passwordInput">
                        <p v-if="passwordValidity === 'caps'">Must contain at least one capital letter</p>
                        <p style="color:red; font-size:.8rem" v-else-if="passwordValidity === 'too short'">Password must be greater than 8 characters</p>

                    </div> 

                    <div class="form-items">
                        <label for="confirm-password">Confirm Password</label><br>
                        <input type="password" name="confirm-password" id="confirm-password" v-model.trim="confirmInput">
                        <p style="color:red; font-size:.8rem" v-if="passwordMatch === 'password did not match'">Password did not match*</p>
                    </div> 

                    <button>SIGN UP</button>

                    <div style="text-align:center;margin:1rem 1rem; line-height:1.8rem">
                        <p>Already have an account?</p>
                        <router-link style="color: #ca3f77; " to="/login">Login</router-link>
                    </div>

                    <div>
                        <hr>
                        <nav class="terms">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Data Policy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Use of Cookies</a></li>
                                <li><a href="#">Explore</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import ShoppingBanner from '../layout/ShoppingBanner.vue';

export default {
  components: { ShoppingBanner },

    data() {
        return {
            firstNameInput : '',
            lastNameInput : '',
            emailInput : '',
            passwordInput : '',
            confirmInput: '',
            required: 'this field must not be empty*',
            firstNameValidity: 'pending',
            lastNameValidity: 'pending',
            emailValidity: 'pending',
            passwordValidity: 'checking',
            passwordMatch: 'checking',
            caps: ['A', 'B', 'C', 'D']
        }
    },

    methods: {
        firstNameStatus() {
            if(this.firstNameInput === ''  ) {
                this.firstNameValidity = 'invalid'
            }else {
                this.firstNameValidity = 'valid';
                console.log(this.firstNameInput)
                console.log(this.lastNameInput)
                console.log(this.emailInput)
                console.log(this.passwordInput)
                console.log(this.confirmInput)
            }

            if(this.lastNameInput === '') {
                this.lastNameValidity = 'invalid'
            } else {
                this.lastNameValidity = 'valid'
            }

            
            if(this.emailInput === '') {
                this.emailValidity = 'invalid'
            } else {
                this.emailValidity = 'valid'
            }

            if(this.passswordInput === '' ) {
                this.passwordValidity = 'empty'
            } else if(this.passwordInput.length <= 7 ) {
                this.passwordValidity = 'too short';
                this.passwordInput =  ''
            }else {
                this.passwordValidity = 'accepted'
            }

            
            

            if(this.passwordInput !== this.confirmInput) {
                this.passwordMatch = 'password did not match'
                this.confirmInput = ''
            } else {
                this.passwordMatch = 'password matched'
            }
        },

        
    }
    
}
</script>

<style scoped>

.left-section {
    width: 35rem;
    height: 40rem;
    /* border: 1px solid grey; */
    padding-top: 3rem;

}


.google-icon {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
}


.nameInput {
    display: flex;
    margin-top: 1rem;
}

.nameInput input {
    width: 13rem;
    height: 2rem;
    border: 1px solid #ca3f77;
    border-radius: .5rem;
}

.form-items{
    margin-top: 1rem;
}

.form-items input {
    width: 100%;
    height: 2rem;
    border-radius: .5rem;
    border: 1px solid #ca3f77;
}

.lastname {
    margin-left: 1rem;
}
.form-control.invalid input {
    border-color: red;
}

.form-control.invalid p {
    color: red;
    font-size: .8rem;
}

.form-control.password input {
    border-color: red;
}

.terms ul li {
    display: inline-block;
    margin-right: 1rem;
    font-size: .8rem;
}

.terms ul li a {
    color: black;
}

.user-form {
    display: flex;
    justify-content: space-around;  
}

.right-section {
    border: 1px solid #ca3f77;
    padding: 2rem;
    margin-top: 3rem;
    border-radius: .6rem;
}

.sign-header {
    text-align: center;
    padding: 0rem;
}

.sign-header h2, .sign-header p{
    color: #ca3f77;
}

button {
    width: 100%;
    margin-top: 2rem;
    background-color: #ca3f77;
    border: none;
    height: 2rem;
    border-radius: .5rem;
    color: white;
}
</style>