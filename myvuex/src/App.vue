<template>
  <div id="app">
    <person-one ></person-one>
    <person-two ></person-two>
  </div>
</template>

<script>
import HellWorld from './components/HelloWorld'
import PersonOne from './components/PersonOne'
import PersonTwo from './components/PersonTwo'
export default {
  name: 'App',
  data(){
    return {
     
    }
  },
  components: {
    'hello':HellWorld,
    'person-one':PersonOne,
    'person-two':PersonTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
