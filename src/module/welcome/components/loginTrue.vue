<template>
<div class="welcome">
  <h1>{{title}}</h1>
  <ul class="content">
    <li><a href="addList.html">AddList</a></li>
    <li><a href="router.html">Route</a></li>
    <li><a href="resource.html">Resource</a></li>
    <li><a href="date.html">Date</a></li>
    <li><a href="slider.html">Slider</a></li>
    <li><a href="vuex.html">Vuex</a></li>
  </ul>
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
</style>