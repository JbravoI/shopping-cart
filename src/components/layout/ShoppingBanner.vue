<template>
    <div class="left-section">
        <div >
            <h1>Welcome to ShopEasy </h1>
        <!-- <h1>ShopEasy</h1> -->
        </div>
        
        <div class="shop-products">
            <img src="../assets/sneakers.jpg" alt="shop">
            <img src="../assets/television.jpg" alt="shop"><br>
            <img src="../assets/download.jpg" alt="shop">
        </div>

        <p style="text-align:center; font-size:1.3rem">Shopping made easy for everyone</p>
        
        <div class="slogan">
            <ul>
                <li>Cart</li>
                <li>Cash</li>
                <li>Carry</li>
            </ul>
        </div>
    </div>
</template>



<style scoped>
.left-section h1 {
    font-family: cursive;
    text-align: center;
    color: #ca3f77;
    font-size: 40px;
}

.shop-products {
    width: fit-content;
    margin: auto;
    position: relative;
    margin-top: 2rem;
    height: 25rem;
}
.shop-products img{
    width: 15rem;
    height: 15rem;
    object-fit: cover;
}

.shop-products img:last-child {
    margin-left: 5rem;
    width: 20rem;
    height: 15rem;
    position: absolute;
    top: 8rem;
    right: 3rem;
    
}

.slogan {
    margin-top: 2rem;
    text-align: center;
}

.slogan ul li {
    display: inline-block;
    margin-right: 2rem;
}

</style>