<template>
  <div  v-for="(item, index) in items" :key="index" class="center">
      <Card/>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
   components: {
    Card
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
        items: [1,2]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center{
  text-align: center
}
</style>
