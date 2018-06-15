<template>
  <div class="person-one">
   <h1>这是第一个</h1>
   <ul>
       <li v-for="(item,index) in salePro" :key="index">
           <span class="name">{{item.name}}</span>
           <span class="price">{{item.price}}</span>
       </li>
   </ul>
   <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'PersonOne',
  computed:{
      products(){
          console.log(this.$store)
          return this.$store.state.products
      },
    //   saleProduct(){
    //       return this.$store.getters.salePro
    //   }
    ...mapGetters([
        "salePro"
    ])
  },
  methods: {
    //   reducePrice(amount){
    //       this.$store.dispatch('reducePrice',amount)
    //   }
    ...mapActions([
        'reducePrice'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .person-one{
        background-color: azure;
    }
    .person-one ul li{
        display: inline-block;
        margin: 20px;
        background-color: #ff6600;
    }
</style>
