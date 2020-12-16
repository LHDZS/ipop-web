<template>
  <!-- <div id="app" v-if="navigationBarType">
    <navigationBar></navigationBar>
    <navigationBarLeft v-if="navigationBarLeftType" :activeIndex="activeIndex"></navigationBarLeft>
    <div :class="navigationBarLeftType ? 'main' : 'appMain'">
      <router-view/>
    </div>
  </div> -->
  <div id="app">
    <navigationBar></navigationBar>
    <div class="loading" v-if="$root.loadingHome">
      <div class="loading-img">
          <div class="loader-inner ball-pulse-rise">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
    </div>
    <div :class="type ? 'appMain appCalc' : 'appMain'">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar'
import navigationBarLeft from '@/components/navigationBarLeft'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/taskCenter/delivery',
      navWhiteList:['login','home','agreement'],
      navigationBarType: false,
      navigationBarLeftType: true,
      type: false,
    }
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0,0);
      // console.log('????????????',to,from)
      if (to.meta.type == 'det') {
        this.type = true
      }else {
        this.type = false
      }
      if (to.name == null) {
        this.$router.push({path: '/'})
      }
      
      if (this.navWhiteList.indexOf(to.name) >= 0) {
        
        this.navigationBarType = false;
      } else {
        this.navigationBarType = true;
      }
    },
  },
  created() {
    if (this.$route.meta.type == 'det') {
      this.type = true
    }else {
      this.type = false
    }
  },
  mounted() {
    this.activeIndex = sessionStorage.getItem("activeIndex") || "0-0";
  },
  methods: {

  },
  components: {
    navigationBar: navigationBar,
    navigationBarLeft: navigationBarLeft
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  min-width: 1200px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main {
    float: left;
    width: calc(100% - 182px);
    height: calc(100% - 60px);
    // background:rgba(121, 184, 255, 0.3);
    background-color: #f2f2f2;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .appCalc {
    height: calc(100% - 60px) !important;
  }
  .appMain {
    width: 100%;
    height: 100%;
    // scrollbar-width: none; /* firefox */
    // -ms-overflow-style: none; /* IE 10+ */
    // overflow-x: hidden;
    // overflow-y: auto;
  }
  // .appMain::-webkit-scrollbar {
  //   display: none; /* Chrome Safari */
  // }
  .loading {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: #080534;
		z-index: 9999;
	}
	.loading-img {
		box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 25%;
    max-width: 25%;
    height: 200px;
    align-items: center;
    justify-content: center;
    perspective: 500px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
  }
} 
</style>

<style>
.el-table th {
  background-color: rgba(242, 240, 240, 100);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 104px;
  height: 104px;
  line-height: 104px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
