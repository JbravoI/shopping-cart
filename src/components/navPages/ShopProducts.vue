<template>
    <section>
        <product-card>
            <template v-slot:header>
                <h3>{{product.category}}</h3>
            </template>
            <img class="product-image" :src="product.image" alt="product-image">
            <div class="product-name">
                <p>{{product.title}}</p>
                <p>Price - ${{product.price}} </p>
                <star-rating :v-model="star-rating" :star-size="10">{{product.rating.rate}}</star-rating>
                <p>Quantity: {{product.rating.count}}</p>
            </div>

            <div class="btn">
                <button @click="addToCart(product)">Add to Cart</button>
                <button class="info-btn">Description</button>
            </div>

            <!-- <div class="btn">
                <button @click="addToCart(item)">Add to Cart</button>
                <button class="info-btn">Description</button>
            </div>  -->

            <!-- <img class="product-image" :src="item.image" alt="productImage">
            
            <div class="product-name">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
            </div>
            <div class="btn">
                <button  @click="$emit('view-product', item)" class="add-btn">Add to Cart</button>
                <button @click="addToCart(item)">Add to Cart</button>
                <button class="info-btn">More Info</button>
            </div> -->
            
        </product-card>

        
    </section>
</template>


<script>
import ProductCard from '../UI/ProductCard.vue';
import StarRating from 'vue-star-rating'
export default {
  components: { ProductCard, StarRating},
  props: ['product'],

  emit: ['view-product'],
 

  data() {
      return {
      }
  },

  methods: {
      selectedItems(index) {
          this.products.filter((name, i) => i !== index )
      },

      addToCart(product) {   
        this.$store.commit('addToCart', {
            products: product,
            quantity: 1,
        })

        console.log(product)
    
      },

     
  }

  
  
    
}
</script>


<style scoped>
.product-image {
    width: 100%;
    height: 10rem;
    margin: .5rem 0rem .5rem 0rem;
    object-fit: cover;
    
}

.product-name {
    padding: 0rem 0rem 0rem 1rem;
}

.btn {
    text-align: right;
    margin-right: 1rem;
    margin-top: .5rem;
}

.btn .add-btn {
    padding: .4rem;
    border:1px solid rgb(194, 115, 128);
    margin-right: .4rem;
}

.btn .info-btn {
    padding: .4rem;
    background-color:rgb(194, 115, 128) ;
    color: white;
    border: none;

}
</style>