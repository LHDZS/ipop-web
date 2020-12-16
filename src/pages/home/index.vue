<style lang="less" scoped>
.home {
    width: 100%;
    // height: 100%;
    margin: 0;
    padding: 0;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.home-main {
    width: 1200px;
    margin: 0 auto;
}
.home-banner {
    width: 100%;
    height: 100%;
    background-color: #09090B;
    position: relative;
}
#canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
}
.home-back {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: absolute;
    z-index: 10;
}
.home-img-name {
    width: 32.7%;
    display: block;
    margin: 2% auto 0;
}
.home-banner-tabs {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 145px;
    border-top: 1px solid #202029;
    padding: 22px;
    box-sizing: border-box;
    z-index: 9999;
}
.banner-tabs-name {
    float: left;
    width: 15%;
    max-width: 255px;
    text-align: center;
    padding: 15px 0px;
    box-sizing: border-box;
}
.banner-tabs-name .name1 {
    line-height: 38px;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.banner-tabs-name .name2 {
    line-height: 38px;
    font-size:16px;
    font-family:MicrosoftYaHeiLight;
    font-weight:300;
    color:rgba(255,255,255,1);
}
.banner-more {
    width: 8%;
    float: right;
    text-align: center;
    height: 100%;
    line-height: 100px;
    color: #fff;
    cursor: pointer;
}
.banner-more-pop-up {
    position: absolute;
    top: -120px;
    right: 1.3%;
    width: 150px;
    height: 140px;
    background: rgba(255,255,255,1);
    border: 1px solid rgba(255,255,255,1);
    border-radius: 2px;
    padding: 10px 20px;
    box-sizing: border-box;
}
.banner-more-pop-up:after, #demo:before {
    border: solid transparent;
    content: ' ';
    height: 0;
    top: 100%;
    position: absolute;
    width: 0;
}
.banner-more-pop-up:after {
    border-width: 10px;
    border-top-color: #fff;
    left: 67px;
}
.banner-more-pop-up-item {
    width: 100%;
    height: 33.33%;
    line-height: 33px;
    cursor: pointer;
}
.banner-more-pop-up-item:hover {
    color: #1AA1E6;
}
.banner-navs {
    float: left;
    width: 100%;
    display: flex;
}
.banner-navs-list {
    flex: 1;
    text-align: center;
    cursor: pointer;
}
.navs-list-img {
    display: inline-block;
    width: 70px;
    height: 70px;
}
.navs-list-img:hover {
    background: url('/imgs/home/hover.png') no-repeat;
    background-size: 100% 100%;
}
.navs-list-name {
    margin-top: 11px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:24px;
}
.home-content {
    width: 100%;
    height: 659px;
    padding-top: 60px;
    box-sizing: border-box;
}
.content-title {
    width: 100%;
    text-align: center;
    font-size:40px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-bottom: 22px;
}
.content-name {
    margin-bottom: 36px;
    width: 100%;
    text-align: center;
    font-size:16px;
    font-family:MicrosoftYaHeiLight;
    font-weight:300;
    color:rgba(153,153,153,1);
}
.content-items {
    width: 100%;
}
.content-item {
    display: inline-block;
    width: 370px;
    height: 386px;
    margin-right: 42px;
    box-shadow:0px 2px 13px 0px rgba(182,194,208,0.26);
    border: 1px solid #fff;
    cursor: pointer;
}
.content-item:hover {
    box-shadow:0px 2px 13px 0px rgba(182,194,208,0);
    border:1px solid rgba(26,161,230,1);
}
.content-item:nth-child(3){
    margin-right: 0px;
}
.content-item-img {
    width: 100%;
    height: 210px;
    background-size: 100% 100%;
    position: relative;
}
.content-item-tab {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 56px;
    line-height: 56px;
    background:rgba(0,0,0,0.6);
    text-align: center;
    font-size:28px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.content-item-article {
    width: 100%;
    height: 178px;
    padding: 20px;
    box-sizing: border-box;
}
.item-article-text {
    line-height: 36px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.item-article-text > span {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #373D41;
    margin-right: 12px;
    margin-bottom: 2px;
}
.item-article-text:hover {
    color: #1AA1E6;
}
.item-article-more {
    width: 100%;
    line-height: 36px;
    text-align: center;
    font-size:12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.item-article-more:hover {
    color: #1AA1E6;
}
.home-run {
    width: 100%;
    height: 782px;
    background-color: #F7FDFF;
    padding-top: 60px;
    box-sizing: border-box;
}
.home-run-tabs {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 30px;
}
.home-run-tabs-items {
    width: 100%;
    height: 73px;
    line-height: 73px;
    padding: 0px 200px;
    box-sizing: border-box;
    display: flex;
}
.home-run-tabs-item {
    flex: 1;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    text-align: center;
    cursor: pointer;
}
.run-items {
    width: 100%;
    height: 330px;
}
.run-item {
    float: left;
    width: 580px;
    height: 100%;
    box-shadow:0px 2px 13px 0px rgba(182,194,208,0.26);
}
.run-item-tite {
    width: 100%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size:24px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    background-size: 100% 100%;
    position: relative;
}
.run-item-tite > span {
    position: absolute;
    top: 42px;
    right: 19px;
    height:13px;
    line-height: 13px;
    font-size:12px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    cursor: pointer;
}
.run-item-article {
    width: 100%;
    height: 242px;
    padding: 30px;
    box-sizing: border-box;
}
.run-item-article-list {
    height: 40px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    text-decoration:underline;
    color:rgba(51,51,51,1);
    cursor: pointer;
}
.run-item-article-list > .text1 {
    float: left;
    max-width: 375px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.run-item-article-list > .text1:hover {
    border-bottom: 1px solid #333;
}
.run-item-article-list > .text2 {
    float: right;
}
.home-wisdom {
    width: 100%;
    height: 644px;
    padding-top: 60px;
    box-sizing: border-box;
    background-color: #F7FDFF;
}
.home-wisdom-items {
    width: 100%;
    display: flex;
}
.home-wisdom-item {
    flex: 1;
    text-align: center;
    padding: 0px 40px;
    box-sizing: border-box;
}
.home-wisdom-item-img {
    display: inline-block;
    width: 124px;
    height: 144px;
    line-height: 144px;
    text-align: center;
    background: url('/imgs/home/xuxian1.png') no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    transition: width 0.5s, height 0.5s, background 0.5s;
}
.home-wisdom-item-img:hover {
    background: url('/imgs/home/xuxian.png') no-repeat;
}
.home-wisdom-item-img > img {
    display: inline-block;
    vertical-align: middle;
}
.home-wisdom-item-img:hover > img {
    width: 90px;
    height: 74px;
}
.home-wisdom-item-text {
    margin-top: 33px;
    margin-bottom: 21px;
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.home-wisdom-item-name {
    font-size:14px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
}
.home-business {
    width: 100%;
    height: 645px;
    padding-top: 60px;
    box-sizing: border-box;
    background-color: #F7FDFF;
}
.home-business-items {
    width: 100%;
    height: 274px;
}
.home-business-item {
    float: left;
    width: 580px;
    height: 100%;
    background-size: 100% 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.home-business-item:hover .home-business-item-show {
    top: 0px
}
.home-business-item:hover .home-business-item-bgu {
    opacity: 0;
}
.home-business-item-bgu {
    margin-top: 55px;
    display: inline-block;
    opacity: 1;
    transition: opacity 0.5s;
}
.home-business-item-name {
    width: 100%;
    font-size:30px;
    font-family:MicrosoftYaHeiLight;
    font-weight:300;
    color:rgba(255,255,255,1);
}
.home-business-item-show {
    position: absolute;
    top: 275px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(81, 189, 243, 0.7);
    text-align: center;
    padding: 44px 82px;
    box-sizing: border-box;
    transition: top 0.5s;
    cursor: default;
}
.home-business-item-show > div {
    text-align: center;
}
.business-item-show-heng {
    margin: 35px auto;
    width:48px;
    height:4px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(255,255,255,1);
}
.business-item-show-text {
    width: 100%;
    font-size:16px;
    font-family:MicrosoftYaHeiLight;
    font-weight:300;
    color:rgba(255,255,255,0.8);
}
.home-partner {
    width: 100%;
    height: 669px;
    padding-top: 60px;
    box-sizing: border-box; 
    background-color: #F7FDFF;
}
.home-partner-logo {
    width: 1180px;
    height: 443px;
    margin: 0 auto;
    background: url('/imgs/home/LOGO.jpg') no-repeat;
    background-size: 100% 100%;
}
.home-share {
    width: 100%;
    height: 846px;
    padding-top: 60px;
    box-sizing: border-box;
}
.home-share-main {
    width: 100%;
    height: 501px;
    position: relative;
}
.home-share-main-left {
    float: left;
    width: 50%;
    height: 100%;
    text-align: right;
    padding-right: 158px;
    box-sizing: border-box;
}
.home-share-main-right {
    float: right;
    width: 50%;
    height: 100%;
    text-align: left;
    padding-left: 158px;
    box-sizing: border-box;
}
.share-main-left-lists {
    width: 100%;
    height: 100%;
    padding: 50px 0px;
    box-sizing: border-box;
    position: relative;
    z-index: 999;
}
.share-main-left-lists:hover div{
    color: #1AA1E6;
}

.share-main-right-lists:hover div{
    color: #1AA1E6;
}
.share-main-left-lists > .img-div {
    position: absolute;
    top: 50px;
    right: -6px;
    width: 70px;
    height: 70px;
    background: url('/imgs/home/xximg.png') no-repeat;
    background-size: 100% 100%;
    -webkit-animation:haha1 .8s linear infinite;
}
.share-main-left-lists > img {
    position: absolute;
    top: 55px;
    right: 0px;
    z-index: 999;
    background-color: #fff;
    border-radius: 30px;
}
.share-main-right-lists {
    width: 100%;
    height: 100%;
    padding: 50px 0px;
    box-sizing: border-box;
    position: relative;
    z-index: 999;
}
.share-main-right-lists > img {
    position: absolute;
    top: 55px;
    left: 0px;
    z-index: 999;
    background-color: #fff;
    border-radius: 30px;
}
.share-main-right-lists > .img-div {
    position: absolute;
    top: 50px;
    left: -6px;
    width: 70px;
    height: 70px;
    background: url('/imgs/home/xximg.png') no-repeat;
    background-size: 100% 100%;
    -webkit-animation:haha1 .8s linear infinite;
}
@-webkit-keyframes haha1{
 
    0%{-webkit-transform:rotate(0deg);}

    25%{-webkit-transform:rotate(90deg);}

    50%{-webkit-transform:rotate(180deg);}

    75%{-webkit-transform:rotate(270deg);}

    100%{-webkit-transform:rotate(360deg);}

}
.share-main-left-list {
    width: 100%;
    height: 33.33%;
}
.share-main-right-list {
    width: 100%;
    height: 33.33%;
}
.share-main-left-list:nth-child(2) {
    padding-right: 70px;
    box-sizing: border-box;
}
.share-main-right-list:nth-child(2) {
    padding-left: 70px;
    box-sizing: border-box;
}
.share-main-list-text1 {
    height: 35px;
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    cursor: pointer;
}
.share-main-list-text2 {
    height: 35px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(119,119,119,1);
    cursor: pointer;
}

.home-share-middle {
    width: 501px;
    height: 501px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.home-share-middle-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 501px;
    height: 357px;
    background: url('/imgs/home/bjx.png') no-repeat;
    background-size: 100% 100%;
}
.home-share-middle-img > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
/* jiansuo */
.home-searching {
    width: 100%;
    height: 645px;
    padding-top: 60px;
    box-sizing: border-box;
    background-color: #F7FDFF;
}
/* fenxi */
.home-analyze {
    width: 100%;
    height: 763px;
    padding-top: 60px;
    box-sizing: border-box;
}
.home-analyze-main {
    width: 100%;
    overflow: hidden;
}
.home-analyze-main > .left {
    float: left;
}
.home-analyze-main > .right {
    float: right;
}
.home-item {
    width: 100%;
    padding-top: 60px;
    box-sizing: border-box;
}
.home-item img {
    margin: 0 auto;
    display: block;
}
</style>

<template>
  <div class="home">
      <div class="home-banner" :style="'height:' + BannerHeight + 'px'">
        <!-- <el-carousel style="width:100%" :height="BannerHeight + 'px'" indicator-position="none">
          <el-carousel-item v-for="item in homeBackArr" :key="item">
              <div class="home-back" :style="item"></div>
          </el-carousel-item>
        </el-carousel> -->
        <div class="home-back" :style="homeBackArr[0]"></div>
        <canvas id="canvas"></canvas> 
        <div class="home-banner-tabs">
          <!-- <div class="banner-tabs-name">
            <div class="name1">智能产品</div>
            <div class="name2">Smart Products</div>
          </div> -->
          <div class="banner-navs">
            <div class="banner-navs-list" v-for="(item,key) in bannerTabsArr" :key="key" @click="navRoute(item)">
              <div class="navs-list-img">
                <img :src="item.img" alt="">
              </div>
              <div class="navs-list-name">{{item.name}}</div>
            </div>
          </div>
          <!-- <div @mouseenter="show2enter()" @mouseleave="show2leave()">
            <div class="banner-more">更多 <i class="el-icon-arrow-right"></i></div>
            <transition name="el-zoom-in-bottom">
              <div class="banner-more-pop-up" v-show="show2">
                <div class="banner-more-pop-up-item" @click="navRoute('智能翻译')">智能翻译 <i class="el-icon-arrow-right"></i></div>
                <div class="banner-more-pop-up-item" @click="navRoute('智能分类')"> 智能分类<i class="el-icon-arrow-right"></i></div>
                <div class="banner-more-pop-up-item" @click="navRoute('智能采集')">智能采集 <i class="el-icon-arrow-right"></i></div>
              </div>
            </transition>
          </div> -->
        </div>
      </div>
      <div class="home-content">
        <div class="home-main">
          <div class="content-title">智能推送</div>
          <div class="content-name">根据用户画像，定制化的推荐专利信息、科技新闻和论文文献等信息</div>
          <div class="content-items">
            <div class="content-item" v-for="(item,key) in contentArr" :key="key">
              <div class="content-item-img" :style="item.img">
                <div class="content-item-tab">{{item.name}}</div>
              </div>
              <div class="content-item-article">
                <div class="item-article-text" v-for="(list,key) in item.itemArr" :key="key" @click="details(list)"><span></span>{{list.title}}</div>
                <div class="item-article-more" @click="clickMore(item)">更多 >></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-searching">
        <div class="home-main">
          <div class="content-title">智能检索</div>
          <div class="content-name">智能检索系统包括专利、商标、地理标志信息等相关智能检索工具</div>
          <img src="/imgs/home/a1.png" alt="">
        </div>
      </div>
      <div class="home-analyze">
        <div class="home-main">
          <div class="content-title">智能分析</div>
          <div class="content-name" style="margin-bottom: 91px;">智能分析主要针对1.3亿+全球专利数据及3600万+商标数据的各个维度进行分析</div>
          <img src="/imgs/home/a2.png" alt="">
        </div>
      </div>
      <div class="home-wisdom">
        <div class="home-main">
          <div class="content-title">IP智慧城市</div>
          <div class="content-name" style="margin-bottom: 99px;">结合当地社会主体所在技术领域，帮助区域产业转型升级和增强城市创新活力</div>
          <div class="home-wisdom-items">
            <div class="home-wisdom-item" v-for="(item,key) in wisdomArr" :key="key">
              <div class="home-wisdom-item-img">
                <img :src="item.icon" alt="">
              </div>
              <div class="home-wisdom-item-text">{{item.name}}</div>
              <div class="home-wisdom-item-name">{{item.text}}</div>
            </div>
          </div>
        </div>  
      </div>
      <div class="home-item" style="height:665px">
        <div class="home-main">
          <div class="content-title">企业智慧管理</div>
          <div class="content-name" style="margin-bottom: 49px;">企业、高校、科研院所等创新主体的决策、管理功能</div>
          <img src="/imgs/home/a3.png" alt="">
        </div>
      </div>
      <div class="home-item" style="background-color: #F7FDFF;height: 645px;">
        <div class="home-main">
          <div class="content-title">产业创新监测 </div>
          <div class="content-name" style="margin-bottom: 21px;">通过对产业专利进行多方面、多角度的分析， 为区域重点产业专利提供必要的数据支撑和决策参考依据</div>
          <img src="/imgs/home/a4.png" alt="">
        </div>
      </div>
      <div class="home-item" style="height:655px">
        <div class="home-main">
          <div class="content-title">智能估价</div>
          <div class="content-name">以市场交易数据为基础数据，采用机器学习的方式对专利的多个纬度进行自动评估</div>
          <img src="/imgs/home/a5.png" alt="">
        </div>
      </div>
      <div class="home-business">
        <div class="home-main">
          <div class="content-title">创新人才发现</div>
          <div class="content-name" style="margin-bottom: 89px;">通过平台为区域、企业或行业 挖掘引进相关人才，从而增强行业创新活力</div>
          <div class="home-business-items">
            <div class="home-business-item" style="margin-right: 40px;background: url('/imgs/home/banner1.png') no-repeat">
              <div class="home-business-item-bgu">
                  <img src="/imgs/home/ren.png" alt="">
                  <div class="home-business-item-name">创新人才发现</div>
              </div>
              <div class="home-business-item-show">
                <div class="home-business-item-name">创新人才发现</div>
                <div class="business-item-show-heng"></div>
                <div class="business-item-show-text">通过平台衔接各项创新资源，减少产业升级研发费用，有效利用各企业的技术优势和竞争优势，利用各企业的技术优势和竞争优势利用各企业的技术优势和竞争优势</div>
              </div>
            </div>
            <div class="home-business-item" style="background: url('/imgs/home/banner2.jpg') no-repeat">
              <div class="home-business-item-bgu">
                  <img src="/imgs/home/renj.png" alt="">
                  <div class="home-business-item-name">人才引进</div>
              </div>
              <div class="home-business-item-show">
                <div class="home-business-item-name">人才引进</div>
                <div class="business-item-show-heng"></div>
                <div class="business-item-show-text">通过平台衔接各项创新资源，减少产业升级研发费用，有效利用各企业的技术优势和竞争优势，利用各企业的技术优势和竞争优势利用各企业的技术优势和竞争优势</div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="home-item" style="height:698px">
        <div class="home-main">
          <div class="content-title">智能翻译</div>
          <div class="content-name" style="margin-bottom: 93px;">通过平台为区域、企业或行业 挖掘引进相关人才，从而增强行业创新活力</div>
          <img src="/imgs/home/a6.png" alt="">
        </div>
      </div>
      <div class="home-run">
        <div class="home-main">
          <div class="content-title">知识产权运营</div>
          <div class="content-name" style="margin-bottom: 66px;">专利交易是以货币为媒介的产权，包含产权的产品和服务的价值交换</div>
          <div class="home-run-tabs">
            <div class="home-run-tabs-items">
                <div class="home-run-tabs-item" :style="runTabKey == 1 ? 'border-bottom: 2px solid #1AA1E6;color: #1AA1E6;' : ''" @click="runTabKey = 1">商标</div>
                <div class="home-run-tabs-item" :style="runTabKey == 2 ? 'border-bottom: 2px solid #1AA1E6;color: #1AA1E6;' : ''" @click="runTabKey = 2">专利</div>
                <div class="home-run-tabs-item" :style="runTabKey == 3 ? 'border-bottom: 2px solid #1AA1E6;color: #1AA1E6;' : ''" @click="runTabKey = 3">版权</div>
            </div>
          </div>
          <div class="run-items">
            <div class="run-item" style="margin-right: 40px">
                <div class="run-item-tite" style="background: url('/imgs/home/runhong.png') no-repeat">转让信息<span>更多 >></span></div>
                <div class="run-item-article">
                  <ul style="height:100%;overflow: hidden;">
                    <li class="run-item-article-list" v-for="(item,key) in runArr" :key="key">
                        <div class="text1">一种智能疏散应急指示系统以及指系统以及指示方法指示方</div><div class="text2">2019-07-13</div>
                    </li>
                  </ul>
                </div>
            </div>
            <div class="run-item">
                <div class="run-item-tite" style="background: url('/imgs/home/runlan.png') no-repeat">求购信息<span>更多 >></span></div>
                <div class="run-item-article">
                  <ul style="height:100%;overflow: hidden;">
                    <li class="run-item-article-list" v-for="(item,key) in runArr" :key="key">
                        <div class="text1">一种智能疏散应急指示系统以及指系统以及指示方法指示方</div><div class="text2">2019-07-13</div>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="home-share">
        <div class="home-main">
          <div class="content-title">创新资源共享</div>
          <div class="content-name" style="margin-bottom: 89px;">提供103个国家地区，1亿3千万条专利数据、深度挖掘和专利交易等信息</div>
          <div class="home-share-main">
            <div class="home-share-main-left">
              <div class="share-main-left-list" v-for="(item,key) in shareLeftArr" :key="key" @mouseenter="enter(key)" @mouseleave="leave()">
                <div class="share-main-left-lists" style="padding-right: 95px">
                    <div class="share-main-list-text1">{{item.name}}</div>
                    <div class="share-main-list-text2">{{item.desc}}</div>
                    <img v-if="keyIcon != key" :src="item.icon" alt="">
                    <img v-else :src="item.iconShow" alt=""/>
                    <div v-if="keyIcon == key" class="img-div"></div>
                </div>
              </div>
            </div>
            <div class="home-share-middle">
                <!-- <gsb-aperture></gsb-aperture> -->
                <div class="home-share-middle-img">
                    <img src="/imgs/home/qq.png" alt="">
                </div>
            </div>
            <div class="home-share-main-right">
                <div class="share-main-right-list" v-for="(item,key) in shareRightArr" :key="key" @mouseenter="entertwo(key)" @mouseleave="leavetwo()">
                  <div class="share-main-right-lists" style="padding-left: 95px">
                    <img v-if="keyIcon1 != key" :src="item.icon" alt="">
                    <img v-else :src="item.iconShow" alt="">
                    <div v-if="keyIcon1 == key" class="img-div"></div>
                    <div class="share-main-list-text1">{{item.name}}</div>
                    <div class="share-main-list-text2">{{item.desc}}</div>
                  </div>
                </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="home-item" style="background-color: #F7FDFF;height: 645px;">
        <div class="home-main">
          <div class="content-title">智能采集</div>
          <div class="content-name">通过建立更加开发、便捷的数据自动采集工具为知识产权运营活动提供坚实的数据保障</div>
          <img src="/imgs/home/a7.png" alt="">
        </div>
      </div>
      <div class="home-item" style="height:691px">
        <div class="home-main">
          <div class="content-title">智能分类</div>
          <div class="content-name" style="margin-bottom: 48px;">系统根据大量专利分类数据进行基于神经网络的机器学习，得到分类规则，对技术文本进行自动分类并推荐</div>
          <img src="/imgs/home/a8.png" alt="">
        </div>
      </div>
      <div class="home-partner">
        <div class="home-main">
          <div class="content-title" style="margin-bottom:55px;">合作伙伴</div>
          <div class="home-partner-logo"></div>
        </div>  
      </div>
      <footerbar></footerbar>
  </div>
</template>

<script>
import footerbar from '@/components/footerbar'
export default {
    data (){
        return {
            runTabKey: 1,
            show2: false,
            homeBackArr: [
                "background: url('/imgs/home/backgroundImg1.png') no-repeat;background-size: 100% 100%;",
            ],
            shareLeftArr: [
                {
                    icon:'/imgs/home/z1.png',
                    iconShow:'/imgs/home/z2.png',
                    name:'专利信息服务',
                    desc:'提供专利数据查询、API数据接口专利文献等信息'
                },{
                    icon:"/imgs/home/q1.png",
                    iconShow:'/imgs/home/q2.png',
                    name:'专利深度挖掘',
                    desc:'深度挖掘科技新闻、科技文献等信息'
                },{
                    icon:"/imgs/home/w11.png",
                    iconShow:'/imgs/home/w22.png',
                    name:'专利信息可视化',
                    desc:'各区域、产业、创新主体专利数据清晰查阅'
                }
            ],
            shareRightArr: [
                {
                    icon:"/imgs/home/b1.png",
                    iconShow:'/imgs/home/b2.png',
                    name:'全新在线分析报告',
                    desc:'提供多种分析报告、在线生成导出'
                },{
                    icon:"/imgs/home/v1.png",
                    iconShow:'/imgs/home/v2.png',
                    name:'专利交易信息',
                    desc:'专利转让、求购等信息一目了然'
                },{
                    icon:"/imgs/home/p1.png",
                    iconShow:'/imgs/home/p2.png',
                    name:'最新专利新闻推送',
                    desc:'根据用户浏览行为、推送最新专利新闻'
                }
            ],
            wisdomArr: [
                {
                    icon:'/imgs/home/w1.png',
                    name:'区域专利数据',
                    text:'有助于各级知识产权管理部门了解和掌握本地区专利情况'
                },{
                    icon:'/imgs/home/w2.png',
                    name:'产业专利数据',
                    text:'有助于提升区域专利的数量和质量、增强产业创新竞争力'
                },{
                    icon:'/imgs/home/w3.png',
                    name:'创新主体',
                    text:'有效利用各企业的技术优势和竞争优势，提高整个区域产业的发展创新能力'
                },{
                    icon:'/imgs/home/w4.png',
                    name:'专家信息',
                    text:'提供各发明人专利数据监测服务方便了解各发明人在行业内的贡献度'
                }
            ],
            runArr: [
                {},{},{},{},{},{},{}
            ],
            contentArr: [
                {
                    img:'background: url(/imgs/home/nav1.png) no-repeat;',
                    name:'热门专利',
                    url: 'https://patent.aminer.cn/#/push/patent',
                    itemArr:[
                        {
                            title: 'PrivNet: Safeguarding Private Attributes in Transfer Learning for Recommendation'
                        },{
                            title: 'PrivNet: Safeguarding Private Attributes in Transfer Learning for Recommendation'
                        },{
                            title: 'PrivNet: Safeguarding Private Attributes in Transfer Learning for Recommendation'
                        }
                    ]
                },{
                    img:'background: url(/imgs/home/nav2.jpg) no-repeat;',
                    name:'热门科技资讯',
                    url: 'https://patent.aminer.cn/#/push/news',
                    itemArr:[
                        {
                            title: ''
                        },{
                            title: ''
                        },{
                            title: ''
                        }
                    ]
                },{
                    img:'background: url(/imgs/home/nav3.jpg) no-repeat;',
                    name:'热门文献',
                    url:'https://patent.aminer.cn/#/push/paper',
                    itemArr:[
                        {
                            title: ''
                        },{
                            title: ''
                        },{
                            title: ''
                        }
                    ]
                },
            ],
            bannerTabsArr: this.$menuJson,
            tms:[],
            loopplays:[
            ],
            channels:[],
            keyIcon: null,
            keyIcon1: null,
            BannerHeight:'',
            orbitRadius: null,
            radius: null,
            orbitX: null,
            orbitY: null,
            timePassed: null,
            speed: null,
            alpha: null
        }
    },
    mounted(){
        //  this.fetchloopplay();
        //  this.fetchchannels();
        function autoScroll(obj){  
            $(obj).find("ul").animate({  
                marginTop : "-39px"  
            },500,function(){  
                $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
            })  
        }  
        $(function(){  
            setInterval( () => {
                autoScroll(".run-item-article")
            },3000);
        });
    
    
        this.xingkong();
        var that = this;
        
        $(window).resize(function(){
            if (that.$route.path == '/') {
                that.xingkong()
            }
            that.BannerHeight = window.innerHeight; 
        })
        /*$('.home-banner').starfield({
            starDensity: 2.0,
            mouseScale: 0.5,
            seedMovement: true
        });*/
    },
    created(){
        console.log(this.$router.push,"----------------------------------------------");
        var that = this;
        this.BannerHeight = window.innerHeight;
       
        this.$root.typeHome = true;
        // this.aminerpapers();
        // this.aminerarticle();
    },
    methods:{
        details(val) {
            var b1 = '';
            if (val.url) {
                b1 = val.url[0].replace("https://arxiv.org", "http://xxx.itp.ac.cn");
            }else {
                b1 = `https://www.aminer.cn/research_report/${val._id}?download=false`;
            }
            console.log(b1);
            this.$root.typeHome = false;
            this.$root.loadingHome = true;
            var url = encodeURIComponent(b1);
            this.$router.push({path:"/iframehtml",title:val.title,query:{url:url}});
            
            setTimeout(()=>{
              this.$root.loadingHome = false;
            },1500);
        },
        clickMore(val) {
            this.$root.typeHome = false;
            this.$root.loadingHome = true;
            var url = encodeURIComponent(val.url);
            this.$router.push({path:"/iframehtml",title:val.name,query:{url:url}});
            
            setTimeout(()=>{
              this.$root.loadingHome = false;
            },1500);
        },
        show2enter() {
            this.show2 = true;
        },
        show2leave() {
            this.show2 = false;
        },
        xingkong() {     
            var canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();
            let w = 0;
            let h = 0;
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            
            
            let hue = 217;
            let stars = [];
            let count = 0;
            let maxStars = 1300;
            console.log(maxStars);

            var canvas2 = document.createElement('canvas');
            let ctx2 = canvas2.getContext('2d');
            ctx2.clearRect(0,0,canvas2.width,canvas2.height);
            ctx2.beginPath();
            ctx2.fillStyle = null;
            canvas2.width = 100;
            canvas2.height = 100;
            var half = canvas2.width / 2;
            let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
            gradient2.addColorStop(0.025, '#CCC');
            gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
            gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
            gradient2.addColorStop(1, 'transparent');

            ctx2.fillStyle = gradient2;
            ctx2.beginPath();
            ctx2.arc(half, half, half, 0, Math.PI * 2);
            ctx2.fill();


            function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            };

            if (min > max) {
                var hold = max;
                max = min;
                min = hold;
            };

            return Math.floor(Math.random() * (max - min + 1)) + min;
            };

            function maxOrbit(x, y) {
            var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
            };
            console.log(w,h);
            var Star = function() {

                this.orbitRadius = random(maxOrbit(w, h));

                this.radius = random(60, this.orbitRadius) / 8; 

                this.orbitX = w / 2;
                this.orbitY = h / 2;
                this.timePassed = random(0, maxStars);
                this.speed = random(this.orbitRadius) / 50000; 
                this.alpha = random(2, 10) / 10;

                count++;
                stars[count] = this;
            };
            console.log(new Star());
            Star.prototype.draw = function() {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);

            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
            };

            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
            };

            for (var i = 0; i < maxStars; i++) {
                new Star();
            };

            function animation() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
            ctx.fillRect(0, 0, w, h);

            ctx.globalCompositeOperation = 'lighter';
            for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw();
            };

            window.requestAnimationFrame(animation);
            };
            animation();
        },
        enter (key) {
            this.keyIcon = key;
        },
        leave () {
            this.keyIcon = null;
        },
        entertwo (key) {
            this.keyIcon1 = key;
        },
        leavetwo () {
            this.keyIcon1 = null;
        },
        navRoute (val) {
            console.log(val);
            sessionStorage.setItem('defaultActive', JSON.stringify(val))
            this.$root.defaultActive = JSON.stringify(val);
            this.NavIndexRoute(val);
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
        /*热门文献*/
        aminerpapers(){
            var self=this;
            self.$root.postReq("/web/patentycCtl/aminerpapers",{}).then(function(d){
                if(d.status==0){
                    self.contentArr[2].itemArr = d.data.data;
                    console.log(d,'dddd')
                }
            });
        },
        /*热门科技*/
        aminerarticle(){
            var self=this;
            self.$root.postReq("/web/patentycCtl/aminerarticle",{}).then(function(d){
                if(d.status==0){
                    self.contentArr[1].itemArr = d.data.data;
                    console.log(d,'aaa')
                }
            });
        },
       fetchloopplay:function(){
           var self=this;
            self.$root.postReq("/web/loopplayCtl/findAll",{}).then(function(d){
                if(d.status==0){
                    self.loopplays=d.data;
                }
            });
       },
       fetchchannels(){
        var self=this;
        self.$root.postReq("/web/newschannelCtl/findPrev5",{}).then(function(d){
            if(d.status==0){
                self.channels=d.data;
            }
        });
       },
     moreclick(id){
        console.log("more............",id);
          /*修改路由条目*/
          Object.keys(this.$router.mapRouterEntry).map((k)=>{
            if(k.indexOf(":id")>0){
                var tmparray=k.split(":");
                var routerviewname=tmparray[0]+id;
                console.log("==============================");
                console.log(k,routerviewname);
                var entryValue=this.$router.mapRouterEntry[k];
                var curcom=entryValue.components[k];
                entryValue.components[routerviewname]=curcom;
                console.log("==============================");
            }
        });
        this.$router.push({
            title:"更多文章",
            path:"/channelquery/"+id
        });
      },
      rowclick(r){
        console.log("----------------------------------articledetail--------------------------------------");
        console.log(r);
        /*修改路由条目*/
        Object.keys(this.$router.mapRouterEntry).map((k)=>{
            if(k.indexOf(":id")>0){
                var tmparray=k.split(":");
                var routerviewname=tmparray[0]+r.id;
                console.log("==============================");
                console.log(k,routerviewname);
                var entryValue=this.$router.mapRouterEntry[k];
                var curcom=entryValue.components[k];
                entryValue.components[routerviewname]=curcom;
                console.log("==============================");
            }
        });
        this.$router.push({
            title:r.title,
            path:"/articledetail/"+r.id
        });
      },
    },
    components:{
        footerbar: footerbar
    }
}
</script>

<style>

</style>