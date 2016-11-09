<template>
<div class="regionPicke">
	<h1>RegionPicke</h1>
	<region-picker
	    auto
	    :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}"
	    :province="province"
	    :city="city"
	    :district="district"
	    @onchange="change"
	    class="picker">
  </region-picker>
</div>
</template>
<script>
export default {
  data () {
    return {
      province: '广东', // you can set initial value or not.
      city: 440100, // by code or name.
      district: ''
    }
  },
  methods:{
  	change:function(){
  		console.log("change")
  	}
  }
  
  
}
</script>

<style scoped>
	*{margin:0;padding:0;}
	ul,li{list-style: none}
	.regionPicke{
		width: 600px;
		margin:50px auto;
	}
	.picker{
		margin: 100px 0;
	}
</style>





