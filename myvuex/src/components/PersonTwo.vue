<template>
  <div class="person-two">
   <h1>这是第一个</h1>
   <ul>
       <li v-for="(item,index) in saleProduct" :key="index">
           <span class="name">{{item.name}}</span>
           <span class="price">{{item.price}}</span>
       </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonTwo',
  computed:{
      products(){
          return this.$store.state.products
      },
      saleProduct(){
          return this.$store.getters.salePro
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .person-two ul li{
        background-color: #ff6600;
        list-style-type: none;
        font-size: 20px;
        margin: 20px;
        height: 100px;
    }
</style>
