<template>
	<div class="slider">
		<h1>{{title}}</h1>
		<slider width="400px"
	        animation="normal"
	        :interval="3000"
	        :speed="1000"
	        indicators="right">
		  <slider-item><img style="width:400px" src="../../assets/img/miku.jpg"></slider-item>
		  <slider-item><img style="width:400px" src="../../assets/img/logo.png"></slider-item>
		  <slider-item><img style="width:400px" src="../../assets/img/miku.jpg"></slider-item>
		</slider>
	</div>
	
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  data () {
    return {
	  title: 'Slider'
	}
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>
<style>
	.slider{
		width: 300px;
		margin: 20px auto;
	}

</style>