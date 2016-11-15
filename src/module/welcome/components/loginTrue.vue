<template>
<div class="welcome">
  <h1>{{title}}</h1>
  <!-- <ul class="content">
    <li><a href="addList.html">AddList</a></li>
    <li><a href="router.html">Route</a></li>
    <li><a href="resource.html">Resource</a></li>
    <li><a href="date.html">Date</a></li>
    <li><a href="slider.html">Slider</a></li>
    <li><a href="vuex.html">Vuex</a></li>
    <li><a href="regionPicker.html">regionPicker</a></li>
    <li><a href="muse-ui.html">Muse-UI</a></li>
  </ul> -->
 <!--  <mu-list >
   <mu-list-item inset title="AddList" href="addList.html"/>
   <mu-list-item inset title="Route" href="router.html"/>
   <mu-list-item inset title="Resource" href="resource.html"/>
   <mu-list-item inset title="Date" href="date.html"/>
   <mu-list-item inset title="Slider" href="slider.html"/>
   <mu-list-item inset title="Vuex" href="vuex.html"/>
   <mu-list-item inset title="regionPicker" href="regionPicker.html"/>
 </mu-list> -->
  <mu-paper class="demo-menu" :zDepth="3">
    <mu-menu>
      <mu-menu-item title="TodoList" href="todoList.html"/>
      <mu-menu-item title="Route" href="router.html"/>
      <mu-menu-item title="Resource" href="resource.html"/>
      <mu-menu-item title="Date" href="date.html"/>
      <mu-menu-item title="Slider" href="slider.html"/>
      <mu-menu-item title="Shopping" href="shopping.html"/>
      <mu-menu-item title="RegionPicker" href="regionPicker.html"/>
    </mu-menu>
  </mu-paper>
</div>

</template>
<script >
export default {
    data() {
      return {
        title: 'Vue2.0 Examples',
        lstate:false
      }
    }
  }
</script>
<style scoped>
  .welcome{
    width: 600px;
    margin: 50px auto;
  }
  .welcome h1{
    text-align: center;
  }
  .content{
    padding: 20px;
  }
  .content li{
    padding-left: 120px;
    line-height: 30px;
    font-size: 20px;
  }
  .content li a:hover{  
    color: red;
    text-decoration: underline;
  }
  .demo-menu {
    display: inline-block;
    margin:30px 100px;
  }
</style>