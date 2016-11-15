<template>
  <div class="todoList">
    <h1>{{ $store.state.title }}</h1>
    <input class="addInput" v-model="$store.state.newText" v-on:keyup.enter="add" type="text"/>
    <ul class="ls">
      <transition-group name="list">
        <li v-for="(x, index) in $store.state.texts" v-bind:key="x" >{{x.text}}<button @click="remove(index)">删除</button></li>
      </transition-group>
    </ul>
    <mu-list :value="$store.state.value" @change="handleChange">
      <mu-sub-header class="listTitle">天启四骑士</mu-sub-header>
      <mu-divider inset/>
        <mu-list-item  :value="index+1" v-for="(list, index) in $store.state.lists" :title="list.title">
          <mu-avatar :src="list.src" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">{{list.playerID}}：</span>
            {{list.meme}}
          </span >
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作" >
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-list-item title="删除" @click="removeList(index)"/>
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
    </mu-list>
  </div>
</template>

<script>
import {  mapActions } from 'vuex'
export default {
  methods: mapActions([
    'add',
    'remove',
    'removeList',
    'handleChange'
  ])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoList{
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
.listTitle{
  font-size: 26px;
  color: black;
  font-weight: bold;
  padding: 20px 0;
}
.todoList h1{
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
