<template>
  <div class="addList">
    <h1>{{ $store.state.title }}</h1>
    <input class="addInput" v-model="$store.state.newText" v-on:keyup.enter="add" type="text"/>
    <ul class="ls">
      <transition-group name="list">
        <li v-for="(x, index) in $store.state.texts" v-bind:key="x" >{{x.text}}<button @click="remove(index)">删除</button></li>
      </transition-group>
    </ul>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    
  ]),
  methods: mapActions([
    'add',
    'remove'
  ])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addList{
  width:600px;
  margin:50px auto
}
.addInput{
  width:200px;
  line-height:30px;
  font-size:18px;
  padding:4px 8px;
  margin:20px 150px;

}
.addList h1{
  text-align: center;
}

.ls {
  list-style-type: none;
  padding: 0;
  margin:10px 150px;
  width: 400px;
}

.ls li {
  
  border:1px solid #ccc;
  line-height:30px;
  font-size:18px;
  padding:4px 8px;
  text-align:left
}
.ls li button{
  float:right;
  line-height:30px;
  border:0;
  background:#428bca;
  color:white;
  border-radius:4px;
  padding:0 10px
}
a {
  color: #42b983;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateX(100px);
}
</style>
