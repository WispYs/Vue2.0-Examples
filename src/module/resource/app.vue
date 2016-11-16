<template>
  <div id="resource">
    <h1>{{$store.state.title}}</h1>
    <p @click="getList">{{$store.state.name}}</p>
    <div class="list">
      <div class="mask" v-show="loading">
        Loading...
        <mu-linear-progress />
      </div>
      <!-- <ul class="content" v-show="!loading">
        <li v-for="(article, index) in articles">
          {{count-9+index}}{{article.title}}
        </li>
      </ul> -->
      <mu-list v-show="!loading">
        <mu-list-item class="item" v-for="(article, index) in articles" :title="(count-9+index)+article.title" :href="article.alt" inset>
          <mu-avatar :src="article.images.small" slot="leftAvatar"/>
        </mu-list-item>
      </mu-list>
    </div>
    <!-- <button class="prev" @click="subCount" disabled>上一页</button>
    <button class="next" @click="addCount">下一页</button> -->
    <div class="nav">
        <!-- <boot-page></boot-page> -->
              <ul class="pagination boot-page">
                  <li>
                      <a href="javascript:void(0)" aria-label="Previous" @click="onFirstClick()">
                          <span aria-hidden="true">&laquo;</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:void(0)" aria-label="Next" @click="onPrevClick()">
                          <span aria-hidden="true">‹</span>
                      </a>
                  </li>
                  <li v-for="(page, index) in pageTotal" :class="activeNum === index ? 'active' : ''">
                      <a href="javascript:void(0)" v-text="page" @click="onPageClick(index)"></a>
                  </li>
                  <li>
                      <a href="javascript:void(0)" aria-label="Next" @click="onNextClick()">
                          <span aria-hidden="true">›</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:void(0)" aria-label="Next" @click="onLastClick()">
                          <span aria-hidden="true">&raquo;</span>
                      </a>
                  </li>
              </ul>
               <span>共{{pageTotal}}页</span> 
    </div>
   </div>

</template>
<script>
import Vue from 'vue'
import $ from 'jquery'
  
export default {
  data () {
    return {
      articles : [],
      count: 10,
      activeNum: 0,
      cur: 1,
      pageTotal: 10,
      loading:true
    }
  },
  computed: {
    count: {
      get: function(){
        return (this.activeNum + 1) * 10
      }
    }
  },
  watch:{
    count: function(){
      console.log(this.count)
    },
    loading: function(){
      console.log(this.loading)
    }
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {

      },
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以
      this.loading = false
      console.log(response)
    }, function (response) {
        // 这里是处理错误的回调
      console.log(response)
    })
    //添加loading界面  这里不能使用箭头函数,this指向不一样
    Vue.http.interceptors.push(function(request, next){
      console.log(this)
      // 通过控制 组件的`v-show`值显示loading组件
      this.loading = true;
      next((response) => {
          this.loading = false
          return response
      });
    });
  }, 
  methods: {
    onPageClick: function(index){
      this.activeNum = index 
      this.getList()
    },
    onPrevClick: function() {
        if(this.activeNum <= 0){
            return false
        }else{
            this.activeNum --
        }
        this.getList()
    },
    // 下一页
    onNextClick: function() {
        if(this.activeNum >= this.pageTotal - 1){
            return false
        }else{
            this.activeNum ++
        }
        this.getList()
    },
    // 第一页
    onFirstClick: function() {
        this.activeNum = this.cur - 1
        this.getList()
    },
    // 最后一页
    onLastClick: function() {
        this.activeNum = this.pageTotal - 1
        this.getList()
    },
    getList: function () {
      this.$http.jsonp(
        'https://api.douban.com/v2/movie/top250?count=' + this.count,
        {
          params: {
            count: this.count
          },
          headers: {

          },
          emulateJSON: true
        }
      )
      .then(function (response) {
        console.log()
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
a{
  text-decoration: none;
  color: red;
}
.box {
    padding: 100px;
}
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
  .list{
    width:300px;
    min-height: 500px;
    margin:20px auto;
    position: relative;
  }
  .mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 260px;
    text-align: center;
    line-height: 150px;
    padding-top: 125px;
    font-size: 50px;
  }
 #resource .content{
    list-style:none;
    padding:0;
    width:300px;
  }
  .content li{
    line-height:26px;
  }
  .content{
    min-height:260px ;
  }
  #resource .nav{
    margin: 20px auto;
    width: 600px;
  }
  .boot-select {
    float: right;
    width: 80px;
  }

  .boot-nav {
      float: right;
  }

  .boot-page {
      display: inline-block;
      margin: 2px 10px 0 20px;
      vertical-align: middle;
  }

  .page-total {
      display: inline-block;
      vertical-align: middle;
  }
</style>