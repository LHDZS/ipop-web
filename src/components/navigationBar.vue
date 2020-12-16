<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navigationBar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  .header {
    width: 100%;
    background: rgba(0, 0, 0, 0.36);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    li {
      list-style-type: none;
    }
    a {
      cursor: pointer;
      text-decoration: none;
    }
    .auto {
      margin: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        // width: 22.133%;
        padding: 15px 0px;
        cursor: pointer;
        img {
          display: inline-block;
          vertical-align: middle;
          // width: 100%;
        }
      }
      .mine {
        color: #fff;
      }
      .navitems {
          // width: 80%;
          float: left;
      }
      .navitem {
          float: left;
          padding: 0px 15px;
          text-align: center;
          cursor: pointer;
          font-size: 14px;
          position: relative;
      }
      .navitem-xiala {
          width: 150%;
          min-height: 60px;
          position: absolute;
          top: 50px;
          left: -40%;
          background-color: #1e1e28;
          color: #b5b5b5;
          z-index: 9999;
          border: 1px solid #eee;
          line-height: 40px;
          margin: 0px 10px;
          padding: 10px 0px;
      }
      .navitem-xiala::after{
          content:"";
          position:absolute;
          top:-10px;
          left:43.4%;
          border-bottom:10px solid #1e1e28;
          border-left:10px solid transparent;
          border-right:10px solid transparent;
      }
      .navitem-xiala:before{
          content:"";
          position:absolute;
          top:-12px;
          left:42%;
          border-bottom:12px solid #fff;
          border-left:12px solid transparent;
          border-right:12px solid transparent;
      }
      .navitem-xl-list {
          height: 40px;
      }
      .navitem-xl-list:hover {
          background-color: #696969;
      }
      .but {
        display: none;
        float: right;
        height: 86px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    @media (max-width: 1080px) {
      .auto {
        margin: 0 15px;
        .menu {
          display: none;
        }
        .but {
          display: flex;
        }
      }
    }
  }
  .clear {
    clear: both;
  }
}
.navDetails {
  position: static !important;
  .header {
    background: rgb(30, 30, 40) !important;
    .auto .menu .lists .list .am {
      color: #fff;
    }
    .mine {
      color: #fff !important;
    }
  }
}
</style>

<style>
.el-menu.el-menu--horizontal {
  border: none !important;
}
</style>

<template>
  <!-- 头部导航 -->
  <div :class="type ? 'navigationBar navDetails' : 'navigationBar'">
    <div class="header">
      <div class="auto">
        <div class="logo">
          <img :src="logo" alt="" />
          <!-- <img src="https://www.zcent.com/uploadfiles/2020/10/20201015152518020.png?56e75Yqo56uvX+eUu+advyAxLnBuZw==" alt=""> -->
        </div>
        <div v-if="type" class="navitems" ref="nav">
          <el-menu
            :default-active="$root.defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            @select="navRoute"
            background-color="#1e1e28"
            text-color="#b5b5b5"
            active-text-color="#ffd04b">
            <el-menu-item :index="JSON.stringify({name:'首页', path:'/'})">首页</el-menu-item>
            <el-menu-item v-for="(item,key) in navarr" :key="key" :index="JSON.stringify(item)">{{item.name}}</el-menu-item>
            <el-submenu v-if="menuObj.length != 0" index="menuObj">
              <template slot="title">更多</template>
              <el-menu-item v-for="(list,index) in menuObj" :key="index" :index="JSON.stringify(list)">{{list.name}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="mine">
          <el-button type="text" style="font-size: 0.14rem;" @click="onselect('login')">登录</el-button>
					<el-button type="text" style="font-size: 0.14rem;" @click="onselect('register')">注册</el-button>
        </div>
        <!-- <div class="but">
          <i
            class="el-icon-s-fold"
            @click="drawer = true"
            style="font-size: 30px; color: #fff"
          ></i>
        </div>
        <div class="clear"></div> -->
      </div>
    </div>
    <!-- 右侧导航栏 -->
    <!-- <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      direction="rtl"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer> -->
  </div>
  
</template>

<script>

export default {
  name: 'navigationBar',
  data () {
    return {
      navKey:null,
      navarr:this.$menuJson,
      type: false,
      drawer: false,
      // logo: require("../../public/imgs/biaoyan-logo-mini.png"),
      logo: require("../../public/imgs/home/logoimg.png"),
      menuObj: []
    }
  },
  watch: {
    $route(to, from) {
      console.log(to, from, '路由',this.$root.defaultActive)
      if (to.meta.type == 'det') {
        this.type = true
      }else {
        this.type = false
      }
    }
  },
  computed: {
  
  },
  props:{

  },
  methods: {
    navRoute(val, keyPath) {
      this.$root.defaultActive = val;
      // console.log(JSON.parse(val));
      sessionStorage.setItem('defaultActive', val)
      this.NavIndexRoute(JSON.parse(val))
    },
    NavIndexRoute(val){
      console.log(val);
      if (this.$route.path != val.path) {
        this.$router.push({path: val.path})
      }
      if (val.url && this.$root.iframeUrl != val.url) {
        this.$root.loadingHome = true;
        this.$root.iframeUrl = val.url;
      }
    },
    onselect:function(k){
      // console.log(k);
      var self=this;
      if(k=="home"){
        this.editableTabsValue2 = "/";
        this.$router.push("/");
      }
      if(k=="register"){
        this.$router.push({
          title:"注册",
          path:"/register"
        });
      }
      if(k=="login"){
        this.$router.push({
          title:"登录",
          path:"/login"
        });
      }
      if(k=="exit"){
        this.$get("/web/userCtl/exit",null).then(function(r){
          self.$store.state.currentUser=null;
          self.$nextTick(()=>{
            window.location.reload();
          });
        
        });
      }
    },
    jump(row) {
      if (this.$route.name == row.path) {
        return
      }
      let url = row.path;
      if (url) {
        this.$router.push({name: url,query:{name: row.name}})
      }
    },
    handleClose(done) {
      done();
    }
  },
  mounted() {
    
  },
  created() {
    if (this.$route.meta.type == 'det') {
      this.type = true
    }else {
      this.type = false
    }
    let navarr = this.$menuJson;
    var that = this;
    that.navarr = [];
    that.menuObj = []
    // console.log(navarr)
    let clientWidth = document.body.clientWidth - 560;
    for(let i=0; i<navarr.length; i++) {
        if ((i * 124) <= clientWidth) {
          that.navarr.push(navarr[i])
        } else {
          that.menuObj.push(navarr[i])
        }
    };
    this.$forceUpdate();
    // console.log(that.menuObj)
    $(window).resize(function(){
        that.navarr = [];
        that.menuObj = []
        let clientWidth = document.body.clientWidth - 560;
        for(let i=0; i<navarr.length; i++) {
            if ((i * 124) <= clientWidth) {
                that.navarr.push(navarr[i])
            }else {
                that.menuObj.push(navarr[i]) 
            }
        };
    })
  }
}
</script>
