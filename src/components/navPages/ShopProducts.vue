<template>
    <section>
        <product-card>
            <template v-slot:header>
                <h3>{{item.type}}</h3>
            </template>

            <img class="product-image" :src="item.image" alt="productImage">
            
            <div class="product-name">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
            </div>
            <div class="btn">
                <!-- <button  @click="$emit('view-product', item)" class="add-btn">Add to Cart</button> -->
                <button @click="addToCart(item)">Add to Cart</button>
                <button class="info-btn">More Info</button>
            </div>
            
        </product-card>

        
    </section>
</template>


<script>
import ProductCard from '../UI/ProductCard.vue'
export default {
  components: { ProductCard },
  props: ['item'],

  emit: ['view-product'],
 

  data() {
      return {
          
      }
  },

  methods: {
      selectedItems(index) {
          this.products.filter((name, i) => i !== index )
      },

      addToCart(item) {
        
        this.$store.commit('addToCart', {
            product: item,
            quantity: 1,
        })
    
      }
  }

  
  
    
}
</script>


<style scoped>
.product-image {
    width: 10rem;
    height: 10rem;
    margin: .5rem 1rem .5rem 1rem;
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