<template>
	<div id="resource">
	  <h1>{{$store.state.title}}</h1>
    <p @click="getList">{{$store.state.name}}</p>
	  <ul class="content">
      <li v-for="(article, index) in articles">
        {{count-9+index}}{{article.title}}
      </li>
    </ul>
    <button class="prev" @click="subCount" disabled>上一页</button>
    <button class="next" @click="addCount">下一页</button>
	 </div>

</template>
<script>
import $ from 'jquery'
import { mapActions } from 'vuex'
export default {
  data () {
  	return {
  		articles : '',
  		count: 10
  	}
  },
  mounted: function () {
  	console.log(this)
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {

      },
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以
    }, function (response) {
        // 这里是处理错误的回调
      console.log(response)
    })
  }, 
  methods: {
    addCount: function () {
      this.count += 10
      this.getList()
      console.log($)
      $('.prev').removeAttr('disabled')
    },
    subCount: function () {
      this.count -= 10
      if (this.count <= 10) {
        console.log('a')
        this.count = 10
        this.onOff = true
        console.log($('.prev'))
        $('.prev').attr('disabled', 'true')
      } else {
        this.getList()
      }
    },
    getList: function () {
      this.$http.jsonp(
        'https://api.douban.com/v2/movie/top250?count=' + this.count,
        {count: this.count},
        {
          headers: {

          },
          emulateJSON: true
        }
      )
      .then(function (response) {
        this.articles = response.body.subjects
        this.articles = this.articles.slice(-10)
        console.log(response)
          // this.articles = response.data["subjects"] 也可以
      }, function (response) {
          // 这里是处理错误的回调
        console.log(response)
      })
    }
  }
}
</script>
<style scoped>
  #resource h1{
  	text-align: center;
  }
  #resource p{
    font-size:24px;
    line-height:40px;
    background:#f2f9fc;
    width:300px;
    margin:20px auto;
    border:1px solid #c9e6f2;
    text-align: center;
  }
 #resource ul{
    list-style:none;
    padding:0;
    width:300px;
    margin:20px auto;
  }
  #resource li{
    line-height:26px;
  }
  .content{
  	min-height:260px ;
  }
</style>