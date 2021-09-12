<template>
    <header class="header">
        <div class="logo">
            <h2>ShopEasy</h2>
            <img class="cart-icon" src= "../assets/cartshop.png" alt="cart-icon">
        </div>

        <nav>
            <ul>
                <li><router-link to="/" :class="{active: $route.name === 'home'}">Home</router-link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><router-link to="/cart" :class="{active: $route.name === 'cart'}">Products</router-link></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>


        <nav>
            <router-link class="nav-item" to="/login">Login</router-link>
            <router-link to="/register" class="nav-item" >Sign Up</router-link>
        </nav>
    </header>

    
</template>


<script>
export default {
    data() {
        return {
        }
    },

   
}
</script>


<style scoped>
.header {
    background-color: #e795b6;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
.logo {
    display: flex;
}

.logo h1 {
    font-family: cursive;
}
.cart-icon {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
}

nav ul li {
    display: inline-block;
    margin-right: 2rem;
}

nav ul li a {
    color: black;
}

nav ul li a:hover{
    border-bottom: 1px solid #ca3f77;
    padding-bottom: .4rem;
}

nav .nav-item {
    background-color: #ca3f77;
    color: white;
    border: none;
    margin-left: 1rem;
    padding: .5rem;
    width: 7rem;
    cursor: pointer;
}

.active {
    color: white;
}
</style>