<template>
  <div id="dota">
    <h2>{{text}}</h2>
    <ul>
      <li><router-link to="/dota/Ti1" replace>Ti1</router-link></li>
      <li><router-link to="/dota/Ti2" replace>Ti2</router-link></li>
      <li><router-link to="/dota/Ti3" replace>Ti3</router-link></li>
      <li><router-link to="/dota/Ti4" replace>Ti4</router-link></li>
      <li><router-link to="/dota/Ti5" replace>Ti5</router-link></li>
      <li><router-link to="/dota/Ti6" replace>Ti6</router-link></li>
    </ul>
    <transition name="slide-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Defense of the Ancients',
      time: ['Ti1', 'Ti2', 'Ti3', 'Ti4', 'Ti5', 'Ti6']
    }
  }
}
</script>

<style>
  .club{
    font-size:40px;
    font-weight:bold
  }
  ul,li{
    list-style:none;
  }
  #dota{
    height:135px;
  }
  #dota li{
    display:inline-block;
    padding:4px 15px;
  }
  #dota li a{
    text-decoration: none;
    color:black;
    cursor: pointer;
  }
  #dota li a:hover{
    text-decoration: none;
    color:black;
    color:red;
  }
.slide-fade-enter-active {
  transition: all .5s ease .5s;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>