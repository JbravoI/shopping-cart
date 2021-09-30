<template>
  <div>
    <the-header></the-header>
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>


<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { 
    TheHeader,
    },
  
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

input {
  outline: none;
  text-indent: 1rem;
}
</style>