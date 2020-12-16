<style lang="less" scoped>
/* 专利分析页面样式 */
.patentanalysis {
  width:100%;
  height:100%;
  text-align:left;
}
.patentanalysis-wrap{
  /* border-top:1px solid #e6e6e6; */
  height: 100%;
}
.patentanalysis-leftpart::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.patentanalysis-leftpart{
  float:left;
  width:200px;
  height: 100%;
  background-color:#FFFFFF;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
.patentanalysis-rightpart{
  float: right;
  width: calc(100% - 200px);
  height:100%;
  position: relative;
  overflow: auto;
}
.patentanalysis-menu{
  height:70px;
  text-align:center;
}
.patentanalysis-menu:hover,
.patentanalysis-menu:focus{
  background-color:#ffffff;
}
.patentanalysis-menu.is-active{
  color:#ffffff;
  background-color:#00C1DE;
}
.patentanalysis-firstpage{
  height:100%;
  margin:15px 15px 15px 15px;
}
.patentanalysis-firstpage-content{
  border: solid 1px #E1E1E1;
  padding:30px 50px;
  background-color:#ffffff;
}
.patentanalysis-firstpage-cardword{
  font-size:15px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(47,47,47,1);
}
.patentanalysis-detail{
  height:auto;
  margin:15px 15px 15px 15px;
}
.patentanalysis-dimension{
  border: solid 1px #E1E1E1;
  padding:20px 30px;
  background-color:#ffffff;
  height:84px;
}
.patentanalysis-dimension-title{
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(130,130,130,1);
  width:10%;
  float:left;
  margin-top:6px;
  text-align:center;
}
.patentanalysis-dimension-other{
  float:left;
  width:85%

}
.patentanalysis-dimension-item{
  width:90%;
  margin-left:10%;
  margin-bottom:10px;
  border-radius:2px;
}
.patentanalysis-dimension-item:active{
  border-color:#00C1DE;
}
.patentanalysis-dimension-item:hover{
  border-color:#E1E1E1;
}
.patentanalysis-result{
  margin-top:10px;
  border: solid 1px #E1E1E1;
  padding:20px 30px;
  height:auto;
  background-color:#ffffff;
}
.patentanalysis-result-title{
  height:32px;
  line-height:16px;
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:500;
  color:#2F2F2F;
  border-bottom:1px solid #E1E1E1;
}
.patentanalysis-result-content{
  font-size:14px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(130,130,130,1);
  line-height:22px;
  margin-top:16px;
}
.patentanalysis-echartTab{
  border:1px solid #ffffff;
}
.patentanalysis-echartTab:focus,
.patentanalysis-echartTab:hover,
.patentanalysis-echartTab:active{
  border-color:#ffffff;
  background-color:#ffffff;
}
.patentanalysis-ipc{
  font-size:16px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(47,47,47,1);
}
.patentanalysis-exportechart{
  color:#00C1DE;
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  width:100%;
  text-align:right;
  margin-bottom:10px;
}
.patentanalysis-statisticaltable{
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(47,47,47,1);
  width:50%;
  text-align:left;
  float:left;
}
.patentanalysis-exporttable{
  color:#00C1DE;
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  width:50%;
  text-align:right;
  float:right;
}
.patentanalysis-table-row1 th{
   background-color:rgb(131,179,221);
   text-align:center;
}
.patentanalysis-table-row1 tr{
  text-align:center;
  color:rgba(130,130,130,1);
  font-size:14px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  height:50px;
}
.patentanalysis-echart-desc{
  font-size:14px;
  margin-top:20px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(130,130,130,1);
}
.patentanalysis-table-ipc{
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(47,47,47,1);
  text-align:left;
}
.patentanalysis-table-ipc-export{
  font-size:16px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(0,193,222,1);
  text-align:right;
}
.patentanalysis-table-row2 th{
  background-color:rgb(131,179,221);
  text-align:center;
}
.patentanalysis-table-row2 tr{
 text-align:center;
 color:rgba(130,130,130,1);
 font-size:14px;
 font-family:PingFangSC-Regular;
 font-weight:400;
 height:50px;
}
.patentanalysis-table-row2 tr td:first-child{
  background-color:rgb(131,179,221);
  color:#ffffff;
  font-weight:600;
}
.activeMenu8 {
    width: 100%;
    overflow: hidden;
}
.yuan {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 10px;
}
.activeMenu8-title {
    width: 100%;
    line-height: 60px;
    font-size: 18px;
    color: #333;
}
.activeMenu8-main {
    width: 78%;
    float: left;
    padding: 20px;
    padding-top: 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
.activeMenu8-main-right {
    min-height: 495px;
    float: left;
    margin-left: 30px;
    padding: 20px;
    padding-bottom: 50px;
    border: 1px solid #ccc;
    background-color: #f7f7f7;
    position: relative;
}
.activeMenu8-main-title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
}
.activeMenu8-main-title-left {
    float: left;
}
.activeMenu8-main-title-right {
    float: right;
}
.activeMenu8-main-items {
    width: 100%;
    overflow: hidden;
}
.activeMenu8-main-item {
    width: 25%;
    height: 250px;
    float: left;
}
.activeMenu8-main-item-title {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background-color: #eee;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 14px;
}
.activeMenu8-main-item-tar {
    width: 100%;
    box-sizing: border-box;
}
.activeMenu8-main-chosenitem {
    width: 100%;
    font-size: 14px;
    line-height: 36px;
    color: #000;
}
.reportgeneration {
    position: absolute;
    bottom: 10px;
    left: 0px;
    width: 100%;
    text-align: center;
    margin-top: 15px;
}
.reportgeneration .baogao {
    display: inline-block;
    width: 98px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    background-color: #ccc;
    cursor: pointer;
}
.activeMenu8-main-item-tree {
    width: 100%;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
}
.activeMenu8-main-item-tree > span{
    width: 10px;
    height: 10px;
    margin-right: 15px;
    display: inline-block;
    border: 1px solid #ccc;
}
.treeSpan {
    background-color: #409EFF;
}
.echarts-title {
    width: 800px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    font-size: 20px;
}
.returnsPage {
    width: 100%;
    color: #409EFF;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    padding: 0px 120px;
    box-sizing: border-box;
}
.returnsPage > span {
    cursor: pointer;
}
.no-result {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
}
.zipImg {
    display: inline-block;
    position: relative;
    width: 356px;
    height: 232px;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_39961594794942854202015143542854微信图片_20200715134452.png') no-repeat;
    background-size: 100% 100%;
}
.zipSpan {
    width: 77px;
    height: 26px;
    position: absolute;
    bottom: 28px;
    right: 21px;
    cursor: pointer;
}
</style>

<template>
  <div class="patentanalysis">
    <div class="patentanalysis-wrap">
        <div class="patentanalysis-leftpart">
            <!-- <el-menu :default-active="activeMenu" style="border-right: solid 1px #ffffff"  @select="handleSelect">
                <el-menu-item  v-for="(item,index) in dimensionList" :index="index" :key="index"  class="patentanalysis-menu" >
                    <i class="el-icon-menu"></i>
                    <span slot="title" >{{item.name}}</span>
                </el-menu-item>
            </el-menu> -->
            <el-menu
            default-active="activeMenu"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            background-color="#1e1e28"
            text-color="#fff"
            style="height: 100%;"
            active-text-color="#00C1DE">
                <el-menu-item index="0">
                        <i class="el-icon-news"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>智能统计</span>
                    </template>
                    <el-menu-item v-for="(item,index) in dimensionListObj" :index="(index + 1).toString()" :key="index + 1" ><i class="yuan"></i>{{item.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-for="(item,index) in dimensionList2" :index="(index + 8).toString()" :key="index + 8">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                <el-submenu index="9">
                    <template slot="title">
                        <i class="el-icon-view"></i>
                        <span>智能可视化</span>
                    </template>
                    <el-menu-item v-for="(item,index) in dimensionListObj1" :index="(index + 10).toString()" :key="index + 10" ><i class="yuan"></i>{{item.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

        <div class="patentanalysis-rightpart" v-loading="loading">
            <div v-if="search == ''" class="no-result" style="text-align:center">
                <div class="zipImg"><span class="zipSpan" @click="tiaozhan"></span></div>
                <!-- <div class="no-result-row1">暂无查出您想要的信息~</div> -->
                <!-- <div class="no-result-row1">请输入关键词或选择检索数据范围进行检索！</div> -->
            </div>
            <div v-if="activeMenu=='0'">
              <div class="patentanalysis-firstpage">
                <div class="patentanalysis-firstpage-content">
                  <el-row :gutter="50">
                    <el-col :span="8">
                      <el-card>
                        <div slot="header" class="clearfix" style="cursor:pointer" @click="picClick(1)">
                          <img style="width:100%;" src="imgs/patentStatus.png"/>
                        </div>
                        <div class="patentanalysis-firstpage-cardword">当前法律状态分布</div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card>
                        <div slot="header" class="clearfix" style="cursor:pointer" @click="picClick(2)">
                          <img style="width:100%;" src="imgs/applierApplyTrend.png"/>
                        </div>
                        <div class="patentanalysis-firstpage-cardword">申请人申请趋势分析</div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card>
                        <div slot="header" class="clearfix" style="cursor:pointer" @click="picClick(3)">
                          <img style="width:100%;" src="imgs/mainInventor.png"/>
                        </div>
                        <div class="patentanalysis-firstpage-cardword">主要发明人技术构成</div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="50" style="margin-top:30px;">
                    <el-col :span="8">
                      <el-card>
                        <div slot="header" class="clearfix" style="cursor:pointer" @click="picClick(4)">
                          <img style="width:100%;" src="imgs/patentIpc.png"/>
                        </div>
                        <div class="patentanalysis-firstpage-cardword">专利IPC分析</div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card>
                        <div slot="header" class="clearfix" style="cursor:pointer" @click="picClick(5)">
                          <img style="width:100%;" src="imgs/widecountryPatent.png"/>
                        </div>
                        <div class="patentanalysis-firstpage-cardword">全国专利分布</div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card>
                        <div slot="header" class="clearfix" style="cursor:pointer" @click="picClick(6)">
                          <img style="width:100%;" src="imgs/agencyRank.png"/>
                        </div>
                        <div class="patentanalysis-firstpage-cardword">代理机构排名</div>
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            <div v-else-if="activeMenu=='1'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[1].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item">
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">申请人排名分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了申请并公开专利数量最多的专利申请人的排名情况，每个数据点代表该申请人总共申请了多少专利申请。
                                通常来说，申请的专利数量较多的申请人的创新能力相对较强，或具备相当的技术优势；
                                专利申请数量较少的申请人则创新能力相对较弱，或不具备技术优势。
                                需要注意的是，若要达到较好的分析效果，此项分析适宜该申请人相关专利的发展趋势分析结合进行；
                                同时需关注使用不同名称申请，但实际为同一家单位的申请人。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%;height:100%;" v-if="applierRankShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="applierRankRef" key="1-1" :data="applierRankEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{applierRankEchartDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="applierRankTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="company" label="申请人名称" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">申请人归属国分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利申请人在不同国家/地区的分布情况，每个数据点代表该国/地区的申请人总共公开了多少专利申请。
                                通常来说，公开专利申请数量较多的国家/地区申请人的创新能力相对较强，或具备相当的技术优势；
                                公开专利申请数量较少的国家/地区则其申请人创新能力相对较弱，或不具备技术优势。
                                需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    地图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="applierCityShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="applierCityRef" key="1-2" :data="applierCityEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{applierCityDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;">
                                            <el-table :data="applierCityTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="country" label="申请人归属国" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">申请人IPC分布</div>
                            <div style="margin-top:16px;">
                               <span class="patentanalysis-ipc">IPC:</span>
                               <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                               <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                               <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                               <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                通过对专利申请量排名在前的申请人申请的专利中，不同技术分支内专利数量的分布情况进行分析，来发现这组专利申请中对申请人来说较为重要的技术分支。
                                通常来讲，相关专利数量较多的技术分支是较为重要的技术分支，申请人在该技术分支上技术创新相对较为活跃。
                                需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该申请人在该IPC共多少已公开的专利申请。
                                通常来说，公开专利申请数量较多的IPC，申请人在该技术分支中创新相对较为活跃，公开专利申请数量比较少的IPC，则该申请人在该技术分支中创新活力相对较弱。
                                需要注意的是，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:30px;" v-if="applierIpcShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="applierIpcRef" key="1-3" :data="applierIpcEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        <span v-if="ipcActive=='0'">大类表格</span>
                                        <span v-if="ipcActive=='1'">小类表格</span>
                                        <span v-if="ipcActive=='2'">大组表格</span>
                                        <span v-if="ipcActive=='3'">直属表格</span>
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="applierIpcTabledata.company.length>0">
                                    <el-table :data="applierIpcTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="120" ></el-table-column>
                                        <el-table-column prop="row0" v-if="applierIpcTabledata.company.length>0" :label="applierIpcTabledata.company[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="applierIpcTabledata.company.length>1" :label="applierIpcTabledata.company[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="applierIpcTabledata.company.length>2" :label="applierIpcTabledata.company[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="applierIpcTabledata.company.length>3" :label="applierIpcTabledata.company[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="applierIpcTabledata.company.length>4" :label="applierIpcTabledata.company[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="applierIpcTabledata.company.length>5" :label="applierIpcTabledata.company[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="applierIpcTabledata.company.length>6" :label="applierIpcTabledata.company[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="applierIpcTabledata.company.length>7" :label="applierIpcTabledata.company[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="applierIpcTabledata.company.length>8" :label="applierIpcTabledata.company[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="applierIpcTabledata.company.length>9" :label="applierIpcTabledata.company[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">申请人专利类型分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利申请量排名在前的申请人申请的专利中，专利类型分布情况，每个数据点代表的是该申请人在对应的专利类型中申请的专利数量，
                                由于受到各个受理机构审查制度的影响，普遍认为发明专利比实用新型和外观设计专利的技术含金量高，因此申请人申请的已公开的发明专利占比越大，
                                且达到一定的数量，说明该申请人该技术分支中具备技术优势，相反，如果申请人申请的发明专利占比较小，说明该申请人该技术分支中不具备技术优势。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="applierPatenttypeShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="applierPatenttypeRef" key="1-4" :data="applierPatenttypeEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">专利类型分布表格</el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="applierPatenttypeTabledata.company.length>0">
                                    <el-table :data="applierPatenttypeTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                        <el-table-column prop="row0" v-if="applierPatenttypeTabledata.company.length>0" :label="applierPatenttypeTabledata.company[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="applierPatenttypeTabledata.company.length>1" :label="applierPatenttypeTabledata.company[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="applierPatenttypeTabledata.company.length>2" :label="applierPatenttypeTabledata.company[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="applierPatenttypeTabledata.company.length>3" :label="applierPatenttypeTabledata.company[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="applierPatenttypeTabledata.company.length>4" :label="applierPatenttypeTabledata.company[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="applierPatenttypeTabledata.company.length>5" :label="applierPatenttypeTabledata.company[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="applierPatenttypeTabledata.company.length>6" :label="applierPatenttypeTabledata.company[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="applierPatenttypeTabledata.company.length>7" :label="applierPatenttypeTabledata.company[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="applierPatenttypeTabledata.company.length>8" :label="applierPatenttypeTabledata.company[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="applierPatenttypeTabledata.company.length>9" :label="applierPatenttypeTabledata.company[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-if="menuItem=='4'">
                            <div class="patentanalysis-result-title">申请人专利法律效力</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利申请量排名在前的申请人申请的专利中，当前法律效力的分布情况，每个数据点代表的是该法律效力下拥有的专利申请的数量，
                                申请人拥有的有效专利占比较大，且达到了一定的数量，则代表其在相关技术中研发实力较强，技术创新较为活跃，而如果申请人拥有的失效专利占比较大，
                                且达到了一定的数量，则代表其在相关技术中研发实力相对较弱，技术创新活力不足。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    汽泡图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="applierPatentStatusShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="applierPatentStatusRef" key="1-5" :data="applierPatentStatusEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">申请人专利法律效力统计表</el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="applierPatentStatusTabledata.company.length>0">
                                    <el-table :data="applierPatentStatusTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                        <el-table-column prop="row0" v-if="applierPatentStatusTabledata.company.length>0" :label="applierPatentStatusTabledata.company[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="applierPatentStatusTabledata.company.length>1" :label="applierPatentStatusTabledata.company[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="applierPatentStatusTabledata.company.length>2" :label="applierPatentStatusTabledata.company[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="applierPatentStatusTabledata.company.length>3" :label="applierPatentStatusTabledata.company[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="applierPatentStatusTabledata.company.length>4" :label="applierPatentStatusTabledata.company[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="applierPatentStatusTabledata.company.length>5" :label="applierPatentStatusTabledata.company[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="applierPatentStatusTabledata.company.length>6" :label="applierPatentStatusTabledata.company[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="applierPatentStatusTabledata.company.length>7" :label="applierPatentStatusTabledata.company[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="applierPatentStatusTabledata.company.length>8" :label="applierPatentStatusTabledata.company[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="applierPatentStatusTabledata.company.length>9" :label="applierPatentStatusTabledata.company[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-if="menuItem=='5'">
                            <div class="patentanalysis-result-title">申请人发明授权率分析</div>
                            <div class="patentanalysis-result-content">
                                本分析项分析了申请专利的数量排名在前的申请人所申请的发明专利的授权率，每个数据点代表了该申请人申请的发明专利的授权率。
                                受到各专利受理机构审查制度的影响，发明专利一般来说都需要经过实质审查才能授权，一般来说只有获得授权的专利才能真正体现其技术水平，
                                因此，通过对申请人申请的发明专利的授权率的研究，能够在一定程度上反应申请人的技术研发实力和自主创新能力，以及申请的发明专利的质量。
                                通常，发明专利授权率越高，申请人在相关技术领域的研发实力和自主创新能力越强，申请的发明专利的质量越高，
                                相反，发明专利授权率较低，申请人在相关领域的研发实力和自主创新能力也就相对较弱，申请的发明专利的质量相对较低。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="applierAuthRateShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="applierAuthRateRef" key="1-6" :data="applierAuthRateEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">授权率表格统计</el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" >
                                    <el-table :data="applierAuthRateTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                        <el-table-column prop="row0" v-if="applierAuthRateTabledata.company.length>0" :label="applierAuthRateTabledata.company[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="applierAuthRateTabledata.company.length>1" :label="applierAuthRateTabledata.company[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="applierAuthRateTabledata.company.length>2" :label="applierAuthRateTabledata.company[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="applierAuthRateTabledata.company.length>3" :label="applierAuthRateTabledata.company[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="applierAuthRateTabledata.company.length>4" :label="applierAuthRateTabledata.company[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="applierAuthRateTabledata.company.length>5" :label="applierAuthRateTabledata.company[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="applierAuthRateTabledata.company.length>6" :label="applierAuthRateTabledata.company[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="applierAuthRateTabledata.company.length>7" :label="applierAuthRateTabledata.company[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="applierAuthRateTabledata.company.length>8" :label="applierAuthRateTabledata.company[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="applierAuthRateTabledata.company.length>9" :label="applierAuthRateTabledata.company[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='6'">
                            <div class="patentanalysis-result-title">申请人申请趋势分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了申请的专利数量排名在前的申请人的专利的最早公开数量随时间的变化趋势，每个数据点代表的是该申请人在该年首次公开的专利申请的数量，
                                通常来说，首次公开的专利申请数量随时间的上升代表了该申请人在相关技术中创新趋向活跃，技术发展较为迅速；
                                首次公开的专利申请的持平和下降则代表该申请人在相关技术中技术创新趋向平淡，技术发展较为迟缓，或相关技术已经趋于落后，或者申请人已转向其他研究方向。
                                但需注意，专利公开通常不受专利从申请到公开延迟的影响，但因为受专利审查机构的工作机制限制，对技术创新变化趋势的反映不如专利申请量来得准确。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    汽泡图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="applierTrendShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="applierTrendRef" key="1-7" :data="applierTrendEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">申请人申请趋势</el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" >
                                    <el-table :data="applierTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="160" ></el-table-column>
                                        <el-table-column prop="row0" v-if="applierTrendTabledata.year.length>0" :label="applierTrendTabledata.year[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="applierTrendTabledata.year.length>1" :label="applierTrendTabledata.year[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="applierTrendTabledata.year.length>2" :label="applierTrendTabledata.year[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="applierTrendTabledata.year.length>3" :label="applierTrendTabledata.year[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="applierTrendTabledata.year.length>4" :label="applierTrendTabledata.year[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="applierTrendTabledata.year.length>5" :label="applierTrendTabledata.year[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="applierTrendTabledata.year.length>6" :label="applierTrendTabledata.year[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="applierTrendTabledata.year.length>7" :label="applierTrendTabledata.year[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="applierTrendTabledata.year.length>8" :label="applierTrendTabledata.year[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="applierTrendTabledata.year.length>9" :label="applierTrendTabledata.year[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='2'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[2].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item" >
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">发明人排名</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了发明专利数量最多的发明人排名情况，每个数据点代表该发明人总共发明了多少专利申请。
                                通常来说，公开专利申请数量较多的发明人在相关技术上的创新能力相对较强，或具备相当的技术优势；
                                公开专利申请数量较少的发明人在相关技术上则创新能力相对较弱，或不具备技术优势。需要注意的是，
                                若要达到较好的分析效果，可以与主要发明人专利类型、申请趋势等发明人相关项结合进行分析。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="inventorRankShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="inventorRankRef" key="2-1" :data="inventorRankEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{inventorRankEchartDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="inventorRankTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="inventor" label="发明人名称" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">主要发明人技术构成分析</div>
                            <div class="patentanalysis-result-content">
                                    通过对发明的专利申请数量排名在前的发明人发明的专利中，不同技术分支内专利数量的分布情况进行分析，
                                    来发现这组专利申请中，发明人具有优势的技术分支。通常来讲，相关专利数量较多的技术分支是发明人具有优势的技术分支，
                                    发明人在该技术分支上拥有较强的实力。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                    IPC分类号：本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该发明人在该IPC共拥有多少件已公开的专利申请。
                                    通常来说，发明的公开专利申请数量较多的IPC，发明人在该技术分支中具有技术优势，发明的公开专利申请数量比较少的IPC，则该发明人该技术分支中不具备技术优势。
                                    需要注意的是，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    气泡图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="mainInventorIpcShow">
                              <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                              <div style="height:500px;">
                                  <gsb-echart ref="mainInventorIpcRef" key="2-2" :data="mainInventorIpcEchartdata"></gsb-echart>
                              </div>
                              <el-row style="margin-top:10px;">
                                  <el-col :span="12" class="patentanalysis-table-ipc">统计表格</el-col>
                                  <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                              </el-row>
                              <div style="margin-top:10px;" >
                                  <el-table :data="mainInventorIpcTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                      <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                      <el-table-column prop="row0" v-if="mainInventorIpcTabledata.inventor.length>0" :label="mainInventorIpcTabledata.inventor[0]"></el-table-column>
                                      <el-table-column prop="row1" v-if="mainInventorIpcTabledata.inventor.length>1" :label="mainInventorIpcTabledata.inventor[1]"></el-table-column>
                                      <el-table-column prop="row2" v-if="mainInventorIpcTabledata.inventor.length>2" :label="mainInventorIpcTabledata.inventor[2]"></el-table-column>
                                      <el-table-column prop="row3" v-if="mainInventorIpcTabledata.inventor.length>3" :label="mainInventorIpcTabledata.inventor[3]"></el-table-column>
                                      <el-table-column prop="row4" v-if="mainInventorIpcTabledata.inventor.length>4" :label="mainInventorIpcTabledata.inventor[4]"></el-table-column>
                                      <el-table-column prop="row5" v-if="mainInventorIpcTabledata.inventor.length>5" :label="mainInventorIpcTabledata.inventor[5]"></el-table-column>
                                      <el-table-column prop="row6" v-if="mainInventorIpcTabledata.inventor.length>6" :label="mainInventorIpcTabledata.inventor[6]"></el-table-column>
                                      <el-table-column prop="row7" v-if="mainInventorIpcTabledata.inventor.length>7" :label="mainInventorIpcTabledata.inventor[7]"></el-table-column>
                                      <el-table-column prop="row8" v-if="mainInventorIpcTabledata.inventor.length>8" :label="mainInventorIpcTabledata.inventor[8]"></el-table-column>
                                      <el-table-column prop="row9" v-if="mainInventorIpcTabledata.inventor.length>9" :label="mainInventorIpcTabledata.inventor[9]"></el-table-column>
                                  </el-table>
                              </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">主要发明人专利类型分布</div>
                            <div class="patentanalysis-result-content">
                                    本项目分析了发明专利申请数量排名在前的发明人，其发明的专利申请中，专利类型的分布情况，每个数据点代表的是该发明人在对应的专利类型中发明的专利申请的数量，
                                    由于受到各个受理机构审查制度的影响，普遍认为发明专利比实用新型和外观设计专利的技术含金量高，因此发明人发明的发明专利申请占比越大，且达到一定的数量，说明该发明人在该技术分支中具备技术优势，
                                    相反，如果发明人发明的发明专利申请占比较小，说明该发明人在该技术分支中技术优势不明显。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="mainInventorPatenttypeShow">
                              <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                              <div style="height:500px;">
                                  <gsb-echart ref="mainInventorPatenttypeRef" key="2-3" :data="mainInventorPatenttypeEchartdata"></gsb-echart>
                              </div>
                              <el-row style="margin-top:10px;">
                                  <el-col :span="12" class="patentanalysis-table-ipc">统计表格</el-col>
                                  <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                              </el-row>
                              <div style="margin-top:10px;" >
                                  <el-table :data="mainInventorPatenttypeTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                      <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                      <el-table-column prop="row0" v-if="mainInventorPatenttypeTabledata.inventor.length>0" :label="mainInventorPatenttypeTabledata.inventor[0]"></el-table-column>
                                      <el-table-column prop="row1" v-if="mainInventorPatenttypeTabledata.inventor.length>1" :label="mainInventorPatenttypeTabledata.inventor[1]"></el-table-column>
                                      <el-table-column prop="row2" v-if="mainInventorPatenttypeTabledata.inventor.length>2" :label="mainInventorPatenttypeTabledata.inventor[2]"></el-table-column>
                                      <el-table-column prop="row3" v-if="mainInventorPatenttypeTabledata.inventor.length>3" :label="mainInventorPatenttypeTabledata.inventor[3]"></el-table-column>
                                      <el-table-column prop="row4" v-if="mainInventorPatenttypeTabledata.inventor.length>4" :label="mainInventorPatenttypeTabledata.inventor[4]"></el-table-column>
                                      <el-table-column prop="row5" v-if="mainInventorPatenttypeTabledata.inventor.length>5" :label="mainInventorPatenttypeTabledata.inventor[5]"></el-table-column>
                                      <el-table-column prop="row6" v-if="mainInventorPatenttypeTabledata.inventor.length>6" :label="mainInventorPatenttypeTabledata.inventor[6]"></el-table-column>
                                      <el-table-column prop="row7" v-if="mainInventorPatenttypeTabledata.inventor.length>7" :label="mainInventorPatenttypeTabledata.inventor[7]"></el-table-column>
                                      <el-table-column prop="row8" v-if="mainInventorPatenttypeTabledata.inventor.length>8" :label="mainInventorPatenttypeTabledata.inventor[8]"></el-table-column>
                                      <el-table-column prop="row9" v-if="mainInventorPatenttypeTabledata.inventor.length>9" :label="mainInventorPatenttypeTabledata.inventor[9]"></el-table-column>
                                  </el-table>
                              </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">发明人专利法律效力分析</div>
                            <div class="patentanalysis-result-content">
                                    本项目分析了发明的专利申请数量排名在前的发明人，其发明的专利申请中，当前法律效力的分布情况，每个数据点代表的是该法律效力下拥有的专利申请的数量，发明人发明的有效专利占比较大，
                                    且达到了一定的数量，则代表其在相关技术中实力较强，技术创新较为活跃，而如果发明人发明的失效专利占比较大，且达到了一定的数量，则代表其在相关技术中实力相对较弱，技术创新活力相对不足。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="mainInventorPatentstatusShow">
                              <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                              <div style="height:500px;">
                                  <gsb-echart ref="mainInventorPatentstatusRef" key="2-4" :data="mainInventorPatentstatusEchartdata"></gsb-echart>
                              </div>
                              <el-row style="margin-top:10px;">
                                  <el-col :span="12" class="patentanalysis-table-ipc">统计表格</el-col>
                                  <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                              </el-row>
                              <div style="margin-top:10px;" >
                                  <el-table :data="mainInventorPatentstatusTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                      <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                      <el-table-column prop="row0" v-if="mainInventorPatentstatusTabledata.inventor.length>0" :label="mainInventorPatentstatusTabledata.inventor[0]"></el-table-column>
                                      <el-table-column prop="row1" v-if="mainInventorPatentstatusTabledata.inventor.length>1" :label="mainInventorPatentstatusTabledata.inventor[1]"></el-table-column>
                                      <el-table-column prop="row2" v-if="mainInventorPatentstatusTabledata.inventor.length>2" :label="mainInventorPatentstatusTabledata.inventor[2]"></el-table-column>
                                      <el-table-column prop="row3" v-if="mainInventorPatentstatusTabledata.inventor.length>3" :label="mainInventorPatentstatusTabledata.inventor[3]"></el-table-column>
                                      <el-table-column prop="row4" v-if="mainInventorPatentstatusTabledata.inventor.length>4" :label="mainInventorPatentstatusTabledata.inventor[4]"></el-table-column>
                                      <el-table-column prop="row5" v-if="mainInventorPatentstatusTabledata.inventor.length>5" :label="mainInventorPatentstatusTabledata.inventor[5]"></el-table-column>
                                      <el-table-column prop="row6" v-if="mainInventorPatentstatusTabledata.inventor.length>6" :label="mainInventorPatentstatusTabledata.inventor[6]"></el-table-column>
                                      <el-table-column prop="row7" v-if="mainInventorPatentstatusTabledata.inventor.length>7" :label="mainInventorPatentstatusTabledata.inventor[7]"></el-table-column>
                                      <el-table-column prop="row8" v-if="mainInventorPatentstatusTabledata.inventor.length>8" :label="mainInventorPatentstatusTabledata.inventor[8]"></el-table-column>
                                      <el-table-column prop="row9" v-if="mainInventorPatentstatusTabledata.inventor.length>9" :label="mainInventorPatentstatusTabledata.inventor[9]"></el-table-column>
                                  </el-table>
                              </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='4'">
                            <div class="patentanalysis-result-title">主要发明人申请趋势分析</div>
                            <div class="patentanalysis-result-content">
                                    本项目分析了发明的专利申请的数量排名在前的发明人，其发明的专利申请的申请量随时间的变化趋势，每个数据点代表的是在该发明人发明的专利中，在该年申请的专利的数量，
                                    通常来说，专利申请量随时间的上升代表了该发明人在相关技术中创新趋向活跃；专利申请量的持平和下降则代表该发明人在相关技术中技术创新趋向平淡，或发明人已转向其他研究方向。
                                    但需注意，因为专利从申请到公开存在的延迟（通常有1～2年），近两年的专利申请数量一般不具参考价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="mainInventorApplyTrendShow">
                              <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                              <div style="height:500px;">
                                  <gsb-echart ref="mainInventorApplyTrendRef" key="2-5" :data="mainInventorApplyTrendEchartdata"></gsb-echart>
                              </div>
                              <el-row style="margin-top:10px;">
                                  <el-col :span="12" class="patentanalysis-table-ipc">统计表格</el-col>
                                  <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                              </el-row>
                              <div style="margin-top:10px;" >
                                  <el-table :data="mainInventorApplyTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                      <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                      <el-table-column prop="row0" v-if="mainInventorApplyTrendTabledata.year.length>0" :label="mainInventorApplyTrendTabledata.year[0]"></el-table-column>
                                      <el-table-column prop="row1" v-if="mainInventorApplyTrendTabledata.year.length>1" :label="mainInventorApplyTrendTabledata.year[1]"></el-table-column>
                                      <el-table-column prop="row2" v-if="mainInventorApplyTrendTabledata.year.length>2" :label="mainInventorApplyTrendTabledata.year[2]"></el-table-column>
                                      <el-table-column prop="row3" v-if="mainInventorApplyTrendTabledata.year.length>3" :label="mainInventorApplyTrendTabledata.year[3]"></el-table-column>
                                      <el-table-column prop="row4" v-if="mainInventorApplyTrendTabledata.year.length>4" :label="mainInventorApplyTrendTabledata.year[4]"></el-table-column>
                                      <el-table-column prop="row5" v-if="mainInventorApplyTrendTabledata.year.length>5" :label="mainInventorApplyTrendTabledata.year[5]"></el-table-column>
                                      <el-table-column prop="row6" v-if="mainInventorApplyTrendTabledata.year.length>6" :label="mainInventorApplyTrendTabledata.year[6]"></el-table-column>
                                      <el-table-column prop="row7" v-if="mainInventorApplyTrendTabledata.year.length>7" :label="mainInventorApplyTrendTabledata.year[7]"></el-table-column>
                                      <el-table-column prop="row8" v-if="mainInventorApplyTrendTabledata.year.length>8" :label="mainInventorApplyTrendTabledata.year[8]"></el-table-column>
                                      <el-table-column prop="row9" v-if="mainInventorApplyTrendTabledata.year.length>9" :label="mainInventorApplyTrendTabledata.year[9]"></el-table-column>
                                  </el-table>
                              </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='5'">
                            <div class="patentanalysis-result-title">主要发明人公开趋势分析</div>
                            <div class="patentanalysis-result-content">
                                    本项目分析了发明的专利申请数量排名在前的发明人，其发明的专利申请的公开数量随时间的变化趋势，每个数据点代表的是该发明人所发明的专利中，在该年公开的专利申请的数量，通常来说，公开的专利申请数量随时间的上升代表了该发明人在相关技术中创新趋向活跃；
                                    公开的专利申请的持平和下降则代表该发明人在相关技术中技术创新趋向平淡，或相关技术已经趋于落后，或者发明人已转向其他研究方向。但需注意，由于一件专利可能会存在多个公开阶段，因此会存在重复计数的现象，所以其对技术创新变化趋势的反映不如申请趋势和最早公开日趋势分析准确。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="mainInventorPublicTrendShow">
                              <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                              <div style="height:500px;">
                                  <gsb-echart ref="mainInventorPublicTrendRef" key="2-6" :data="mainInventorPublicTrendEchartdata"></gsb-echart>
                              </div>
                              <el-row style="margin-top:10px;">
                                  <el-col :span="12" class="patentanalysis-table-ipc">统计表格</el-col>
                                  <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                              </el-row>
                              <div style="margin-top:10px;" >
                                  <el-table :data="mainInventorPublicTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                      <el-table-column prop="lable" label="" width="140" ></el-table-column>
                                      <el-table-column prop="row0" v-if="mainInventorPublicTrendTabledata.year.length>0" :label="mainInventorPublicTrendTabledata.year[0]"></el-table-column>
                                      <el-table-column prop="row1" v-if="mainInventorPublicTrendTabledata.year.length>1" :label="mainInventorPublicTrendTabledata.year[1]"></el-table-column>
                                      <el-table-column prop="row2" v-if="mainInventorPublicTrendTabledata.year.length>2" :label="mainInventorPublicTrendTabledata.year[2]"></el-table-column>
                                      <el-table-column prop="row3" v-if="mainInventorPublicTrendTabledata.year.length>3" :label="mainInventorPublicTrendTabledata.year[3]"></el-table-column>
                                      <el-table-column prop="row4" v-if="mainInventorPublicTrendTabledata.year.length>4" :label="mainInventorPublicTrendTabledata.year[4]"></el-table-column>
                                      <el-table-column prop="row5" v-if="mainInventorPublicTrendTabledata.year.length>5" :label="mainInventorPublicTrendTabledata.year[5]"></el-table-column>
                                      <el-table-column prop="row6" v-if="mainInventorPublicTrendTabledata.year.length>6" :label="mainInventorPublicTrendTabledata.year[6]"></el-table-column>
                                      <el-table-column prop="row7" v-if="mainInventorPublicTrendTabledata.year.length>7" :label="mainInventorPublicTrendTabledata.year[7]"></el-table-column>
                                      <el-table-column prop="row8" v-if="mainInventorPublicTrendTabledata.year.length>8" :label="mainInventorPublicTrendTabledata.year[8]"></el-table-column>
                                      <el-table-column prop="row9" v-if="mainInventorPublicTrendTabledata.year.length>9" :label="mainInventorPublicTrendTabledata.year[9]"></el-table-column>
                                  </el-table>
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='3'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[3].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item" >
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">申请人归属国分布</div>
                            <div class="patentanalysis-result-content">
                                    本项目分析了专利申请人在不同国家/地区的分布情况，每个数据点代表该国/地区的申请人总共公开了多少专利申请。
                                    通常来说，公开专利申请数量较多的国家/地区申请人的创新能力相对较强，或具备相当的技术优势；
                                    公开专利申请数量较少的国家/地区则其申请人创新能力相对较弱，或不具备技术优势。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    地图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="applierCountryShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="applierCountryRef" key="3-1" :data="applierCountryEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                          {{applierCountryDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;">
                                            <el-table :data="applierCountryTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="country" label="申请人归属国" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">全国专利分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了中国专利的中国申请人在不同省市的分布情况，每个数据点代表该省市的申请人总共申请了多少件已公开的中国专利。通常来说，拥有的已公开的专利数量较多的省市在相关技术上的创新能力相对较强，
                                或具备相当的技术优势；拥有的已公开的专利数量较少的省市则在相关技术上创新能力相对较弱，或不具备技术优势。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    地图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="countrywidePatentShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="countrywidePatentRef" key="3-2" :data="countrywidePatentEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{countrywidePatentDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;">
                                            <el-table :data="countrywidePatentTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="city" label="申请人所在地区" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">各国专利分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了公开于不同国家/地区的专利的分布情况，每个数据点代表该国或地区总共公开了多少件相关专利。通常来说，有较多专利在某国家/地区公开，代表着该国/地区的市场受业内各类机构重视的程度较强；
                                若在某一国家/地区公开的专利数量较少，则代表该国/地区受业内各类机构重视的程度较弱。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    地图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="everyCountryPatentShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="everyCountryPatentRef" key="3-3" :data="everyCountryPatentEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{everyCountryPatentDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;">
                                            <el-table :data="everyCountryPatentTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="country" label="国家/地区" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">外国在华申请分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了其他国家/地区申请人在华申请的专利情况，每个数据点代表该国/地区申请人在华总共申请了多少件专利。通常来说，申请人只有重视这个国家/地区的市场，才会考虑在这个国家/地区进行专利布局，
                                因此在华申请专利数量较多的国家/地区，其对中国市场较为重视。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    地图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="foreignApplyInChinaShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="foreignApplyInChinaRef" key="3-4" :data="foreignApplyInChinaEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{foreignApplyInChinaDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;">
                                            <el-table :data="foreignApplyInChinaTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="country" label="国家/地区" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='4'">
                            <div class="patentanalysis-result-title">主要国家IPC分布</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                通过对专利申请量排名在前的国家/地区，其专利在不同技术分支内的分布情况进行分析，来发现这组专利申请中较为重要的技术分支。通常来讲，相关专利数量较多的技术分支是较为重要的技术分支，
                                申请人比较重视该技术分支在该国的市场。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                IPC分类号：本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该国家/地区在该IPC共多少件已公开的专利申请。通常来说，公开专利申请数量较多的IPC，
                                申请人比较重视该IPC所代表的技术分支在该国/地区的市场，公开专利申请数量比较少的IPC，则申请人对该IPC所代表的技术分支在这个国家/地区的市场重视程度较弱。需要注意的是，
                                此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="mainCountryIpcShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="mainCountryIpcRef" key="3-5" :data="mainCountryIpcEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        <span v-if="ipcActive=='0'">大类表格</span>
                                        <span v-if="ipcActive=='1'">小类表格</span>
                                        <span v-if="ipcActive=='2'">大组表格</span>
                                        <span v-if="ipcActive=='3'">直属表格</span>
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="mainCountryIpcTabledata.country.length>0">
                                    <el-table :data="mainCountryIpcTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="200" ></el-table-column>
                                        <el-table-column prop="row0" v-if="mainCountryIpcTabledata.country.length>0" :label="mainCountryIpcTabledata.country[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="mainCountryIpcTabledata.country.length>1" :label="mainCountryIpcTabledata.country[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="mainCountryIpcTabledata.country.length>2" :label="mainCountryIpcTabledata.country[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="mainCountryIpcTabledata.country.length>3" :label="mainCountryIpcTabledata.country[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="mainCountryIpcTabledata.country.length>4" :label="mainCountryIpcTabledata.country[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="mainCountryIpcTabledata.country.length>5" :label="mainCountryIpcTabledata.country[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="mainCountryIpcTabledata.country.length>6" :label="mainCountryIpcTabledata.country[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="mainCountryIpcTabledata.country.length>7" :label="mainCountryIpcTabledata.country[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="mainCountryIpcTabledata.country.length>8" :label="mainCountryIpcTabledata.country[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="mainCountryIpcTabledata.country.length>9" :label="mainCountryIpcTabledata.country[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='5'">
                            <div class="patentanalysis-result-title">主要国家申请趋势</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利申请数量排名在前的国家/地区，其专利申请数量随时间的变化情况。每个数据点代表了该年内在这个国家/地区申请了多少件专利。通过对主要国家/地区专利申请趋势的分析，
                                能够在一定程度上反映相关技术在不同地域的受关注程度，通常而言，只有技术较为密集或者市场开发潜力较大的区域，申请人/专利权人才会重视该国/地区的专利布局。对于某一国家/地区而言，
                                如果申请量随时间呈上升趋势，则说明申请人/专利权人对这个国家/地区较为重视，如果申请量随时间呈平缓或下降趋势，则说明申请人/专利权人对这个国家/地区的重视程度在逐渐降低，
                                这个国家/地区的市场正在被其他国家/地区取代。但是，由于专利从申请到公开有一定时间（通常为18个月）的延迟，因此，最近2年的专利申请趋势，通常不具有参考价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="mainCountryApplyTrendShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="mainCountryApplyTrendRef" key="3-6" :data="mainCountryApplyTrendEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="mainCountryApplyTrendTabledata.year.length>0">
                                    <el-table :data="mainCountryApplyTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="200" ></el-table-column>
                                        <el-table-column prop="row0" v-if="mainCountryApplyTrendTabledata.year.length>0" :label="mainCountryApplyTrendTabledata.year[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="mainCountryApplyTrendTabledata.year.length>1" :label="mainCountryApplyTrendTabledata.year[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="mainCountryApplyTrendTabledata.year.length>2" :label="mainCountryApplyTrendTabledata.year[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="mainCountryApplyTrendTabledata.year.length>3" :label="mainCountryApplyTrendTabledata.year[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="mainCountryApplyTrendTabledata.year.length>4" :label="mainCountryApplyTrendTabledata.year[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="mainCountryApplyTrendTabledata.year.length>5" :label="mainCountryApplyTrendTabledata.year[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="mainCountryApplyTrendTabledata.year.length>6" :label="mainCountryApplyTrendTabledata.year[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="mainCountryApplyTrendTabledata.year.length>7" :label="mainCountryApplyTrendTabledata.year[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="mainCountryApplyTrendTabledata.year.length>8" :label="mainCountryApplyTrendTabledata.year[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="mainCountryApplyTrendTabledata.year.length>9" :label="mainCountryApplyTrendTabledata.year[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='4'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[4].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item">
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">专利IPC分析</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                通过分析不同技术分支内专利数量的分布情况，来发现一组专利中较为重要的技术分支。通常来讲，相关专利数量较多，且在总专利数量中占比达到一定比例的技术分支是较为重要的技术分支。<br/>
                                IPC分类号：本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该IPC下共有多少件已公开的专利申请。通常来说，公开专利申请数量较多的IPC受更多申请人关注，技术创新相对活跃；
                                公开专利申请数量较少的IPC则仅有少数申请人从事技术创新工作，总体来讲活跃度较弱。需要注意的是，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="patentIpcShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="patentIpcRef" key="4-1" :data="patentIpcEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{patentIpcDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="patentIpcTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="classNum" label="分类号" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">外设计分类分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了所分析的专利中，外观设计专利在各个分类号下的分布情况，每个数据点代表了该外观设计分类号下面有多少件外观设计专利。通过分析不同技术分支内外观设计专利的数量的分布情况，来发现一组外观设计专利中较为重要的技术分支。
                                通常来讲，相关专利数量较多，且在总专利数量中占比达到一定比例的技术分支是较为重要的技术分支。需要注意的是，此项分析的效果和理解方向与外观设计分类和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="wgsjPatentShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="wgsjPatentRef" key="4-2" :data="wgsjPatentEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{wgsjPatentDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="wgsjPatentTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="classNum" label="分类号" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">外国在华专利IPC分布</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                通过分析其他国家/地区专利权人在华拥有的专利中，不同技术分支内专利数量的分布情况，来发现这组专利申请中较为重要的技术分支。通常来讲，相关专利数量较多，且在总专利数量中占比达到一定比例的技术分支是较为重要的技术分支。而且，一般来说，专利权人只有重视这个国家/地区的市场，才会考虑在这个国家/地区进行专利布局，
                                因此通过分析其他国家/地区专利权人在华拥有的专利的技术分布情况，能够从侧面了解专利权人关注哪些技术分支在中国的市场。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                IPC分类号：本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该国/地区专利权人在该IPC下共有多少件已公开的专利申请。通常来说，通常来说，公开专利申请数量较多的IPC，该国/地区有较多的专利权人重视该技术分支在中国的市场；
                                公开专利申请数量较少的IPC，该国/地区仅有少数专利权人重视该技术分支在中国的市场。需要注意的是，此项分析的结果需要与专利的IPC分析结合；另外，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="foreignInChinaPatentShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="foreignInChinaPatentRef" key="4-3" :data="foreignInChinaPatentEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        <span v-if="ipcActive=='0'">大类表格</span>
                                        <span v-if="ipcActive=='1'">小类表格</span>
                                        <span v-if="ipcActive=='2'">大组表格</span>
                                        <span v-if="ipcActive=='3'">直属表格</span>
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="foreignInChinaPatentTabledata.country.length>0">
                                    <el-table :data="foreignInChinaPatentTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="100" ></el-table-column>
                                        <el-table-column prop="row0" v-if="foreignInChinaPatentTabledata.country.length>0" :label="foreignInChinaPatentTabledata.country[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="foreignInChinaPatentTabledata.country.length>1" :label="foreignInChinaPatentTabledata.country[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="foreignInChinaPatentTabledata.country.length>2" :label="foreignInChinaPatentTabledata.country[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="foreignInChinaPatentTabledata.country.length>3" :label="foreignInChinaPatentTabledata.country[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="foreignInChinaPatentTabledata.country.length>4" :label="foreignInChinaPatentTabledata.country[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="foreignInChinaPatentTabledata.country.length>5" :label="foreignInChinaPatentTabledata.country[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="foreignInChinaPatentTabledata.country.length>6" :label="foreignInChinaPatentTabledata.country[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="foreignInChinaPatentTabledata.country.length>7" :label="foreignInChinaPatentTabledata.country[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="foreignInChinaPatentTabledata.country.length>8" :label="foreignInChinaPatentTabledata.country[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="foreignInChinaPatentTabledata.country.length>9" :label="foreignInChinaPatentTabledata.country[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">技术领先国家IPC分布</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                技术领先国家/地区是指申请专利数量排名在前的国家/地区，通过分析其申请的专利在不同技术分支内的分布情况，来发现这组专利申请中较为重要的技术分支。通常来讲，相关专利数量较多，且在总专利数量中占比达到一定比例的技术分支是较为重要的技术分支。
                                而且，一般来说，通过分析技术领先国家/地区申请的专利的技术分布情况，能够从侧面了解这个国家/地区在哪些技术分支上研发实力较强或者比较重视哪些技术分析。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该国/地区专利权人在该IPC共多少件已公开的专利申请。通常来说，公开专利申请数量较多的IPC，该国/地区在该技术分支上研发实力较强或者说比较重视该技术分支，公开专利申请数量比较少的IPC，
                                说明该国/地区在该技术分支上研发实力相对不是很强或者说不是特别重视该技术分支。需要注意的是，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。
                            </div>
                            <div style="margin-top:20px;" >
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="advancedCountryIpcShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="advancedCountryIpcRef" key="4-4" :data="advancedCountryIpcEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        <span v-if="ipcActive=='0'">大类表格</span>
                                        <span v-if="ipcActive=='1'">小类表格</span>
                                        <span v-if="ipcActive=='2'">大组表格</span>
                                        <span v-if="ipcActive=='3'">直属表格</span>
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="advancedCountryIpcTabledata.country.length>0">
                                    <el-table :data="advancedCountryIpcTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="100" ></el-table-column>
                                        <el-table-column prop="row0" v-if="advancedCountryIpcTabledata.country.length>0" :label="advancedCountryIpcTabledata.country[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="advancedCountryIpcTabledata.country.length>1" :label="advancedCountryIpcTabledata.country[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="advancedCountryIpcTabledata.country.length>2" :label="advancedCountryIpcTabledata.country[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="advancedCountryIpcTabledata.country.length>3" :label="advancedCountryIpcTabledata.country[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="advancedCountryIpcTabledata.country.length>4" :label="advancedCountryIpcTabledata.country[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="advancedCountryIpcTabledata.country.length>5" :label="advancedCountryIpcTabledata.country[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="advancedCountryIpcTabledata.country.length>6" :label="advancedCountryIpcTabledata.country[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="advancedCountryIpcTabledata.country.length>7" :label="advancedCountryIpcTabledata.country[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="advancedCountryIpcTabledata.country.length>8" :label="advancedCountryIpcTabledata.country[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="advancedCountryIpcTabledata.country.length>9" :label="advancedCountryIpcTabledata.country[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='4'">
                            <div class="patentanalysis-result-title">发明专利IPC分布</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                通过分析不同技术分支内发明专利申请数量的分布情况，来发现一组发明专利申请中较为重要的技术分支。通常来讲，相关发明专利申请数量较多，且在总发明专利申请数量中占比达到一定比例的技术分支是较为重要的技术分支。<br/>
                                IPC分类号：本项目分析了技术在专利审查时审查员赋予的IPC专利分类号内的分布情况，每个数据点代表该IPC下共有多少件已公开的发明专利申请。通常来说，公开的发明专利申请数量较多的IPC受更多申请人关注，技术创新相对活跃；
                                公开的发明专利申请数量较少的IPC则仅有少数申请人从事技术创新工作，总体来讲活跃度较弱。需要注意的是，此项分析的效果和理解方向与IPC和所分析的发明专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="fmPatentIpcShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="fmPatentIpcRef" key="4-5" :data="fmPatentIpcEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{fmPatentIpcDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="fmPatentIpcTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="classNum" label="分类号" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='5'">
                            <div class="patentanalysis-result-title">主要IPC趋势分析</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                本项目分析的是所分析的专利中，主要IPC下专利的申请趋势，每个数据点代表的是该IPC分类下在该时间段内一共申请了多少件专利。通常来说，专利申请量随时间的上升代表了相关技术创新趋向活跃，技术发展较为迅速；
                                专利申请量的持平和下降则代表技术创新趋向平淡，技术发展较为迟缓，或技术已经趋于落后并被其他技术取代，专利申请趋势能够在一定程度上反应出技术的发展历程、技术生命周期的具体阶段以及预测未来一段时间内的发展趋势。
                                需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                IPC：本项目分析了技术在专利审查时审查员赋予的分类号下专利申请量随时间的变化趋势，即IPC下专利的申请趋势，每个数据点代表IPC下在该时间段内申请了多少件专利。通常来说，专利申请数量随时间呈上升趋势，
                                说明该IPC所代表的相关技术创新趋向活跃，技术发展较为迅速。需要注意的是，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="mainIpcTrendShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="mainIpcTrendRef" key="4-6" :data="mainIpcTrendEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        <span v-if="ipcActive=='0'">大类表格</span>
                                        <span v-if="ipcActive=='1'">小类表格</span>
                                        <span v-if="ipcActive=='2'">大组表格</span>
                                        <span v-if="ipcActive=='3'">直属表格</span>
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="mainIpcTrendTabledata.year.length>0">
                                    <el-table :data="mainIpcTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="100" ></el-table-column>
                                        <el-table-column prop="row0" v-if="mainIpcTrendTabledata.year.length>0" :label="mainIpcTrendTabledata.year[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="mainIpcTrendTabledata.year.length>1" :label="mainIpcTrendTabledata.year[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="mainIpcTrendTabledata.year.length>2" :label="mainIpcTrendTabledata.year[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="mainIpcTrendTabledata.year.length>3" :label="mainIpcTrendTabledata.year[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="mainIpcTrendTabledata.year.length>4" :label="mainIpcTrendTabledata.year[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="mainIpcTrendTabledata.year.length>5" :label="mainIpcTrendTabledata.year[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="mainIpcTrendTabledata.year.length>6" :label="mainIpcTrendTabledata.year[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="mainIpcTrendTabledata.year.length>7" :label="mainIpcTrendTabledata.year[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="mainIpcTrendTabledata.year.length>8" :label="mainIpcTrendTabledata.year[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="mainIpcTrendTabledata.year.length>9" :label="mainIpcTrendTabledata.year[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='5'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[5].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item">
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">申请趋势分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利申请的数量随时间的变化情况，每个数据点代表该年内有多少专利申请。通常来说，专利申请量随时间的上升代表了相关技术创新趋向活跃，技术发展较为迅速；专利申请量的持平和下降则代表技术创新趋向平淡，技术发展较为迟缓，或技术已经趋于落后并被其他技术取代，专利申请趋势能够在一定程度上反应出技术的发展历程、技术生命周期的具体阶段以及预测未来一段时间内的发展趋势。
                                但需注意，因为专利从申请到公开存在的延迟（通常有1～2年），近两年的专利申请数量一般不具参考价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="applyTrendShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="applyTrendRef" key="5-1" :data="applyTrendEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{applyTrendDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="applyTrendTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="year" label="年份" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">公开趋势分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利公开的数量随时间的变化情况，每个数据点代表该年内公开了多少件专利。通常来说，专利公开量随时间的上升代表了相关技术创新趋向活跃，技术发展较为迅速；专利公开量的持平和下降则代表技术创新趋向平淡，技术发展较为迟缓，或技术已经趋于落后并被其他技术取代。但是，由于一件专利有可能会会存在多个公开阶段，会存在重复计数的现象，因此，
                                专利公开趋势分析对技术创新变化趋势的反映不如专利申请量和专利最早公开趋势分析准确。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="publicTrendShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="publicTrendRef" key="5-2" :data="publicTrendEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{publicTrendDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="publicTrendTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="year" label="年份" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">授权趋势分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利授权的数量随时间的变化情况，每个数据点代表该年内有多少件专利授权。通常来说，专利授权数量随时间的上升代表了相关技术创新趋向活跃，技术发展较为迅速；专利授权量的持平和下降则代表技术创新趋向平淡，技术发展较为迟缓，或技术已经趋于落后并被其他技术取代；但是由于受到各专利受理机构审查制度的影响，
                                专利从申请到授权需要一段时间，因此，专利授权趋势分析不如专利申请趋势对技术发展趋势的反映准确。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="authorizeTrendShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="authorizeTrendRef" key="5-3" :data="authorizeTrendEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{authorizeTrendDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="authorizeTrendTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="year" label="年份" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <!-- <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">失效趋势分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利失效的数量随时间的变化情况，每个数据点代表该年内有多少件专利失效。通常来说，专利失效并不等于失去价值，一些失效专利的市场价值依旧很高，专利失效数量较大且随时间
                                呈上升趋势，则代表相关技术已经趋于成熟，有大量专利失效，相关技术已经成为公知公用技术，可以考虑对这部分技术进行有效利用。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='6'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[6].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item" >
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">各专利类型分布</div>
                            <div class="patentanalysis-result-content">
                                本分析项分析了专利类型分布情况，每一个数据点代表的是该专利类型下有多少件专利。受到各专利受理机构审查制度的影响，发明专利一般来说都需要经过实质审查才能授权，一般来说发明专利的技术含金量和专利质量都比较高，
                                因此对于专利类型的研究能够从一个侧面反映专利的质量，相关技术的技术含金量和技术先进性。通常来讲，所分析的专利中，发明专利数量较多且达到一定占比，说明相关技术技术含金量高，而且专利质量较高。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="patenttypeStatusShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="patenttypeStatusRef" key="6-1" :data="patenttypeStatusEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{patenttypeStatusDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="patenttypeStatusTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="type" label="类型" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">法律效力分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了专利的当前法律效力的分布情况，每个数据点代表的是该法律效力下拥有的专利申请的数量。通过对专利当前法律效力的分布情况分析，能够从侧面反映出相关技术的技术创新程度，一般来说，如果所分析的专利中，
                                有效专利数量较多且达到一定的比例，相关技术的技术创新程度较高；如果失效专利数量较多，且达到一定的比例，相关技术的技术创新程度较低，或者已被其他技术取代。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    饼状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="statusEffectShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="statusEffectRef" key="6-2" :data="statusEffectEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{statusEffectDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="statusEffectTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="status" label="法律状态" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">当前法律状态分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了所分析的专利的当前状态的分布情况，每个数据点代表的是该状态下拥有的专利申请的数量。专利当前状态，能够从侧面反应出专利本身的价值和技术含金量，例如，通常来说处于有效状态的专利比处于无效状态的专利有价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="nowStatusShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="nowStatusRef" key="6-3" :data="nowStatusEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                          {{nowStatusDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="nowStatusTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="type" label="类型" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">专利授权状态分析</div>
                            <div class="patentanalysis-result-content">
                                本分析项目分析的是所分析的专利中专利的授权状态分布，每一个数据点代表的是有多少件专利曾经授权，有多少件专利并未授权。只有授权的专利才能体现出其真正的技术价值，因此通过分析专利的授权状态，能够从侧面反映出专利的价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    饼状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(2)" @click="echartTabChange(2)">
                                    折线图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="authStatusShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="authStatusRef" key="6-4" :data="authStatusEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{authStatusDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="authStatusTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="name" label="名称" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='4'">
                            <div class="patentanalysis-result-title">各专利类型申请趋势</div>
                            <div class="patentanalysis-result-content">
                                本项目分析的是发明专利、实用新型专利和外观设计专利各自的申请数量随时间的变化情况。受到各专利受理机构审查制度的影响，发明专利一般来说都需要经过实质审查才能授权，一般来说发明专利的技术含金量和专利质量都比较高，
                                因此对于专利类型的研究能够从一个侧面反映专利的质量，相关技术的技术含金量和技术先进性。通常来讲，所分析的专利中，如果发明专利数量较多且申请数量随时间呈上升趋势，则说明相关技术含金量较高，且创新趋向活跃，技术发展较为迅速；
                                如果发明专利数量较少且申请数量随时间趋于平缓或呈下降趋势，则说明相关技术创新趋向平淡，技术发展较为迟缓。但需注意，因为专利从申请到公开存在的延迟（通常有1～2年），近两年的专利申请数量一般不具参考价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="everyApplyTrendShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="everyApplyTrendRef" key="6-5" :data="everyApplyTrendEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="everyApplyTrendTabledata.year.length>0">
                                    <el-table :data="everyApplyTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="150" ></el-table-column>
                                        <el-table-column prop="row0" v-if="everyApplyTrendTabledata.year.length>0" :label="everyApplyTrendTabledata.year[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="everyApplyTrendTabledata.year.length>1" :label="everyApplyTrendTabledata.year[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="everyApplyTrendTabledata.year.length>2" :label="everyApplyTrendTabledata.year[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="everyApplyTrendTabledata.year.length>3" :label="everyApplyTrendTabledata.year[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="everyApplyTrendTabledata.year.length>4" :label="everyApplyTrendTabledata.year[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="everyApplyTrendTabledata.year.length>5" :label="everyApplyTrendTabledata.year[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="everyApplyTrendTabledata.year.length>6" :label="everyApplyTrendTabledata.year[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="everyApplyTrendTabledata.year.length>7" :label="everyApplyTrendTabledata.year[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="everyApplyTrendTabledata.year.length>8" :label="everyApplyTrendTabledata.year[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="everyApplyTrendTabledata.year.length>9" :label="everyApplyTrendTabledata.year[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='5'">
                            <div class="patentanalysis-result-title">各专利类型公开趋势</div>
                            <div class="patentanalysis-result-content">
                                本项目分析的是发明专利、实用新型专利和外观设计专利的首次公开数量随时间的变化情况。受到各专利受理机构审查制度的影响，发明专利一般来说都需要经过实质审查才能授权，一般来说发明专利的技术含金量和专利质量都比较高，
                                因此对于专利类型的研究能够从一个侧面反映专利的质量，相关技术的技术含金量和技术先进性。通常来讲，所分析的专利中，如果发明专利数量较多且首次公开数量随时间呈上升趋势，则说明相关技术含金量较高，且创新趋向活跃，技术发展较为迅速；
                                如果发明专利首次公开数量较少且数量随时间趋于平缓或呈下降趋势，则说明相关技术创新趋向平淡，技术发展较为迟缓。需要注意的是，虽然专利公开通常不受专利从申请到公开延迟的影响，但因为受专利审查机构的工作机制限制，对技术创新变化趋势的反映不如专利申请量准确。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="everyPublicTrendShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="everyPublicTrendRef" key="6-6" :data="everyPublicTrendEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="everyPublicTrendTabledata.year.length>0">
                                    <el-table :data="everyPublicTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="150" ></el-table-column>
                                        <el-table-column prop="row0" v-if="everyPublicTrendTabledata.year.length>0" :label="everyPublicTrendTabledata.year[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="everyPublicTrendTabledata.year.length>1" :label="everyPublicTrendTabledata.year[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="everyPublicTrendTabledata.year.length>2" :label="everyPublicTrendTabledata.year[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="everyPublicTrendTabledata.year.length>3" :label="everyPublicTrendTabledata.year[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="everyPublicTrendTabledata.year.length>4" :label="everyPublicTrendTabledata.year[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="everyPublicTrendTabledata.year.length>5" :label="everyPublicTrendTabledata.year[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="everyPublicTrendTabledata.year.length>6" :label="everyPublicTrendTabledata.year[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="everyPublicTrendTabledata.year.length>7" :label="everyPublicTrendTabledata.year[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="everyPublicTrendTabledata.year.length>8" :label="everyPublicTrendTabledata.year[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="everyPublicTrendTabledata.year.length>9" :label="everyPublicTrendTabledata.year[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='7'">
                <div class="patentanalysis-detail">
                    <div class="patentanalysis-dimension">
                        <div class="patentanalysis-dimension-title">分析维度：</div>
                        <div class="patentanalysis-dimension-other">
                            <el-row :gutter="20" style="width:100%">
                                <el-col :span="6" v-for="(item,index) in dimensionList[7].list" :key="index">
                                    <el-button :style="styleset(index)" @click="analysisclick(index)" size="medium"
                                    class="patentanalysis-dimension-item" >
                                        {{item.name}}
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="patentanalysis-result">
                        <div v-if="menuItem=='0'">
                            <div class="patentanalysis-result-title">代理机构排名分析</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了代理机构代理的专利数量的排名情况，每个数据点代表了该代理机构代理了多少件专利申请。通常来说，代理的专利申请数量较多的代理机构实力较强，或者说具有优势；
                                代理的专利数量较少的代理机构实力较弱，或者说不具备优势。需要注意的是，如要达到较好的分析效果，可以截取近几年的数据进行分析，还可以与代理机构代理专利的IPC分析相结合进行分析。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="agentRankShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="agentRankRef" key="7-1" :data="agentRankEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{agentRankDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="agentRankTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="agentName" label="代理机构名称" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div v-if="menuItem=='1'">
                            <div class="patentanalysis-result-title">代理机构专利申请趋势</div>
                            <div class="patentanalysis-result-content">
                                本分析项目分析的是代理专利申请数量排名在前的代理机构所代理的专利的申请量随时间的变化趋势，每一个数据点代表的是该代理机构代理的专利申请中，在该年提出申请的有多少件专利。
                                一般来说，代理机构代理的专利申请的申请趋势，也能从侧面反映出一家代理机构的技术活跃程度和实力。通常来说，专利申请量随时间的上升代表了代理机构在相关技术上代理人较多，
                                技术活跃程度较高，实力较强；专利申请量的持平和下降则代表技术创新趋向平淡，该代理机构在相关技术上代理人较少，技术活跃程度较高，或者技术实力较弱。但需注意，因为专利从申请到公开存在的延迟（通常有1～2年），
                                近两年的专利申请数量一般不具参考价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    折线图
                                </el-button>
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(1)" @click="echartTabChange(1)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="agentApplyTrendShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="agentApplyTrendRef" key="7-2" :data="agentApplyTrendEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="agentApplyTrendTabledata.year.length>0">
                                    <el-table :data="agentApplyTrendTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="250" ></el-table-column>
                                        <el-table-column prop="row0" v-if="agentApplyTrendTabledata.year.length>0" :label="agentApplyTrendTabledata.year[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="agentApplyTrendTabledata.year.length>1" :label="agentApplyTrendTabledata.year[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="agentApplyTrendTabledata.year.length>2" :label="agentApplyTrendTabledata.year[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="agentApplyTrendTabledata.year.length>3" :label="agentApplyTrendTabledata.year[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="agentApplyTrendTabledata.year.length>4" :label="agentApplyTrendTabledata.year[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="agentApplyTrendTabledata.year.length>5" :label="agentApplyTrendTabledata.year[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="agentApplyTrendTabledata.year.length>6" :label="agentApplyTrendTabledata.year[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="agentApplyTrendTabledata.year.length>7" :label="agentApplyTrendTabledata.year[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="agentApplyTrendTabledata.year.length>8" :label="agentApplyTrendTabledata.year[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="agentApplyTrendTabledata.year.length>9" :label="agentApplyTrendTabledata.year[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="menuItem=='2'">
                            <div class="patentanalysis-result-title">代理机构专利类型分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了代理专利申请数量排名在前的代理机构，其代理的专利申请中，专利类型的分布情况，每个数据点代表的是该代理机构在对应的专利类型中代理的专利申请的数量，
                                由于受到各个受理机构审查制度的影响，普遍认为发明专利比实用新型和外观设计专利的技术含金量高，因此代理机构代理的发明专利申请占比越大，且达到一定的数量，
                                说明该代理机构在该技术分支中具备优势，相反，如果代理人代理的发明专利申请占比较小，说明该代理机构在该技术分支中技术优势不明显。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="agentPatenttypeShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="agentPatenttypeRef" key="7-3" :data="agentPatenttypeEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="agentPatenttypeTabledata.agency.length>0">
                                    <el-table :data="agentPatenttypeTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="250" ></el-table-column>
                                        <el-table-column prop="row0" v-if="agentPatenttypeTabledata.agency.length>0" :label="agentPatenttypeTabledata.agency[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="agentPatenttypeTabledata.agency.length>1" :label="agentPatenttypeTabledata.agency[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="agentPatenttypeTabledata.agency.length>2" :label="agentPatenttypeTabledata.agency[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="agentPatenttypeTabledata.agency.length>3" :label="agentPatenttypeTabledata.agency[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="agentPatenttypeTabledata.agency.length>4" :label="agentPatenttypeTabledata.agency[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="agentPatenttypeTabledata.agency.length>5" :label="agentPatenttypeTabledata.agency[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="agentPatenttypeTabledata.agency.length>6" :label="agentPatenttypeTabledata.agency[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="agentPatenttypeTabledata.agency.length>7" :label="agentPatenttypeTabledata.agency[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="agentPatenttypeTabledata.agency.length>8" :label="agentPatenttypeTabledata.agency[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="agentPatenttypeTabledata.agency.length>9" :label="agentPatenttypeTabledata.agency[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-if="menuItem=='3'">
                            <div class="patentanalysis-result-title">代理机构发明授权率</div>
                            <div class="patentanalysis-result-content">
                                本分析项分析了代理量排名在前代理机构，所代理的专利申请中，发明专利申请的授权率随时间的变化趋势，每个数据点代表了在该年申请的该代理机构代理的发明专利的授权率。受到各专利受理机构
                                审查制度的影响，发明专利一般来说都需要经过实质审查才能授权，一般来说一般来说只有获得授权的专利才能真正体现其技术水平，因此，通过对代理机构代理的发明专利的授权率的研究，能够在一
                                定程度上反应代理机构的技术实力，以及其代理的发明专利的质量。通常，代理机构代理的发明专利的授权率随着时间呈上升趋势，则说明该代理机构在相关技术实力较强，发明授权率的持平和下降则
                                代表该代理机构在相关技术上的实力较弱。需要注意的是，由于专利审查制度，专利从申请到授权需要一段时间，因此最近3-4年内发明专利的授权率不具备参考价值。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="agentFmAuthorizeShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="agentFmAuthorizeRef" key="7-4" :data="agentFmAuthorizeEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="agentFmAuthorizeTabledata.agency.length>0">
                                    <el-table :data="agentFmAuthorizeTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="100" ></el-table-column>
                                        <el-table-column prop="row0" v-if="agentFmAuthorizeTabledata.agency.length>0" :label="agentFmAuthorizeTabledata.agency[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="agentFmAuthorizeTabledata.agency.length>1" :label="agentFmAuthorizeTabledata.agency[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="agentFmAuthorizeTabledata.agency.length>2" :label="agentFmAuthorizeTabledata.agency[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="agentFmAuthorizeTabledata.agency.length>3" :label="agentFmAuthorizeTabledata.agency[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="agentFmAuthorizeTabledata.agency.length>4" :label="agentFmAuthorizeTabledata.agency[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="agentFmAuthorizeTabledata.agency.length>5" :label="agentFmAuthorizeTabledata.agency[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="agentFmAuthorizeTabledata.agency.length>6" :label="agentFmAuthorizeTabledata.agency[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="agentFmAuthorizeTabledata.agency.length>7" :label="agentFmAuthorizeTabledata.agency[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="agentFmAuthorizeTabledata.agency.length>8" :label="agentFmAuthorizeTabledata.agency[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="agentFmAuthorizeTabledata.agency.length>9" :label="agentFmAuthorizeTabledata.agency[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-if="menuItem=='4'">
                            <div class="patentanalysis-result-title">代理机构IPC分布</div>
                            <div style="margin-top:16px;">
                                <span class="patentanalysis-ipc">IPC:</span>
                                <el-button size="medium" :style="ipcTabStyle(0)" @click="ipcTabChange(0)">大类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(1)" @click="ipcTabChange(1)">小类</el-button>
                                <el-button size="medium" :style="ipcTabStyle(2)" @click="ipcTabChange(2)">大组</el-button>
                                <el-button size="medium" :style="ipcTabStyle(3)" @click="ipcTabChange(3)">直属</el-button>
                            </div>
                            <div class="patentanalysis-result-content">
                                通过分析了代理专利申请数量排名在前的代理机构，不同技术分支内专利数量的分布情况进行分析，来发现这组专利申请中，代理机构具有优势的技术分支。通常来讲，相关专利数量较多的技术分支是代理机构具有优势的技术分支，
                                代理机构在该技术分支上拥有较强的实力。需要注意的是，若要达到较好的分析效果，此项分析适宜摘取近几年的专利进行。<br/>
                                IPC分类号：本项目分析了技术在专利审查时审查员赋予的分类号，即IPC分布情况，每个数据点代表该机构在该IPC共拥有多少件已公开的专利申请。通常来说，公开专利申请数量较多的IPC，机构在该技术分支中具有技术优势，
                                公开专利申请数量比较少的IPC，则该机构该技术分支中不具备技术优势。需要注意的是，此项分析的效果和理解方向与IPC和所分析专利的相关度有关，不能一概而论。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="agentIpcShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="agentIpcRef" key="7-5" :data="agentIpcEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="agentIpcTabledata.agency.length>0">
                                    <el-table :data="agentIpcTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="100" ></el-table-column>
                                        <el-table-column prop="row0" v-if="agentIpcTabledata.agency.length>0" :label="agentIpcTabledata.agency[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="agentIpcTabledata.agency.length>1" :label="agentIpcTabledata.agency[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="agentIpcTabledata.agency.length>2" :label="agentIpcTabledata.agency[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="agentIpcTabledata.agency.length>3" :label="agentIpcTabledata.agency[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="agentIpcTabledata.agency.length>4" :label="agentIpcTabledata.agency[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="agentIpcTabledata.agency.length>5" :label="agentIpcTabledata.agency[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="agentIpcTabledata.agency.length>6" :label="agentIpcTabledata.agency[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="agentIpcTabledata.agency.length>7" :label="agentIpcTabledata.agency[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="agentIpcTabledata.agency.length>8" :label="agentIpcTabledata.agency[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="agentIpcTabledata.agency.length>9" :label="agentIpcTabledata.agency[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                        <div v-if="menuItem=='5'">
                            <div class="patentanalysis-result-title">代理人排名</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了代理人代理的专利数量的排名情况，每个数据点代表了该代理人代理了多少件专利申请。通常来说，代理的专利申请数量较多的代理人实力较强；代理的专利数量较少的代理人实力较弱。
                                需要注意的是，如要达到较好的分析效果，可以截取近几年的数据进行分析，还可以与代理人代理专利的IPC分析相结合进行分析。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;width:100%" v-if="agentPersonRankShow">
                                <el-row :gutter="50">
                                    <el-col :span="15">
                                        <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                        <div style="height:500px;">
                                            <gsb-echart ref="agentPersonRankRef" key="7-6" :data="agentPersonRankEchartdata"></gsb-echart>
                                        </div>
                                        <div class="patentanalysis-echart-desc">
                                            {{agentPersonRankDesc}}
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div style="width:100%;height:21px;">
                                            <div class="patentanalysis-statisticaltable">统计表格</div>
                                            <!-- <div class="patentanalysis-exporttable">导出表格</div> -->
                                        </div>
                                        <div style="width:100%;margin-top:10px;" >
                                            <el-table :data="agentPersonRankTabledata" border  style="width: 100%" class="patentanalysis-table-row1">
                                                <el-table-column prop="rank" label="排名" min-width="20%"></el-table-column>
                                                <el-table-column prop="agent" label="代理人" min-width="50%"></el-table-column>
                                                <el-table-column prop="patent" label="专利数量" min-width="30%"></el-table-column>
                                            </el-table>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div v-if="menuItem=='6'">
                            <div class="patentanalysis-result-title">主要代理人专利类型分布</div>
                            <div class="patentanalysis-result-content">
                                本项目分析了代理专利申请数量排名在前的代理人，其代理的专利申请中，专利类型的分布情况，每个数据点代表的是该代理人在对应的专利类型中代理的专利申请的数量，由于受到各个受理机构审查制度的影响，
                                普遍认为发明专利比实用新型和外观设计专利的技术含金量高，因此代理人代理的发明专利申请占比越大，且达到一定的数量，说明该代理人在该技术分支中具备优势，相反，如果代理人代理的发明专利申请占比较小，说明该代理人在该技术分支中技术优势不明显。
                            </div>
                            <div style="margin-top:20px;">
                                <el-button  size="medium" class="patentanalysis-echartTab" :style="echartTabStyle(0)" @click="echartTabChange(0)">
                                    柱状图
                                </el-button>
                            </div>
                            <div style="margin-top:20px;" v-if="mainAgentPatenttypeShow">
                                <!-- <div class="patentanalysis-exportechart">导出分析图</div> -->
                                <div style="height:500px;">
                                    <gsb-echart ref="mainAgentPatenttypeRef" key="7-5" :data="mainAgentPatenttypeEchartdata"></gsb-echart>
                                </div>
                                <el-row style="margin-top:10px;">
                                    <el-col :span="12" class="patentanalysis-table-ipc">
                                        统计表格
                                    </el-col>
                                    <!-- <el-col :span="12"  class="patentanalysis-table-ipc-export">导出表格</el-col> -->
                                </el-row>
                                <div style="margin-top:10px;" v-if="mainAgentPatenttypeTabledata.agency.length>0">
                                    <el-table :data="mainAgentPatenttypeTabledata.data" style="width: 100%" border class="patentanalysis-table-row2">
                                        <el-table-column prop="lable" label="" width="250" ></el-table-column>
                                        <el-table-column prop="row0" v-if="mainAgentPatenttypeTabledata.agency.length>0" :label="mainAgentPatenttypeTabledata.agency[0]"></el-table-column>
                                        <el-table-column prop="row1" v-if="mainAgentPatenttypeTabledata.agency.length>1" :label="mainAgentPatenttypeTabledata.agency[1]"></el-table-column>
                                        <el-table-column prop="row2" v-if="mainAgentPatenttypeTabledata.agency.length>2" :label="mainAgentPatenttypeTabledata.agency[2]"></el-table-column>
                                        <el-table-column prop="row3" v-if="mainAgentPatenttypeTabledata.agency.length>3" :label="mainAgentPatenttypeTabledata.agency[3]"></el-table-column>
                                        <el-table-column prop="row4" v-if="mainAgentPatenttypeTabledata.agency.length>4" :label="mainAgentPatenttypeTabledata.agency[4]"></el-table-column>
                                        <el-table-column prop="row5" v-if="mainAgentPatenttypeTabledata.agency.length>5" :label="mainAgentPatenttypeTabledata.agency[5]"></el-table-column>
                                        <el-table-column prop="row6" v-if="mainAgentPatenttypeTabledata.agency.length>6" :label="mainAgentPatenttypeTabledata.agency[6]"></el-table-column>
                                        <el-table-column prop="row7" v-if="mainAgentPatenttypeTabledata.agency.length>7" :label="mainAgentPatenttypeTabledata.agency[7]"></el-table-column>
                                        <el-table-column prop="row8" v-if="mainAgentPatenttypeTabledata.agency.length>8" :label="mainAgentPatenttypeTabledata.agency[8]"></el-table-column>
                                        <el-table-column prop="row9" v-if="mainAgentPatenttypeTabledata.agency.length>9" :label="mainAgentPatenttypeTabledata.agency[9]"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="activeMenu=='8'" class="activeMenu8">
                <div v-if="search != ''">
                <div v-if="echarts" style="min-width: 1200px;">
                    <div class="activeMenu8-title"><i class="el-icon-setting"></i>分析报告设置</div>
                    <div class="activeMenu8-main">
                        <div class="activeMenu8-main-title">
                            <div class="activeMenu8-main-title-left">选择报告分析项(最多15项)</div>
                            <div class="activeMenu8-main-title-right">分析项目推荐:</div>
                        </div>
                        <div class="activeMenu8-main-items">
                            <div class="activeMenu8-main-item" v-for="(item,key) in activeMenu8Arr" :key="key">
                                <div class="activeMenu8-main-item-title">{{item.name}}</div>
                                <div class="activeMenu8-main-item-tar" v-if="item.data">
                                    <div class="activeMenu8-main-item-tree" v-for="(list,index) in item.data" :key="index" @click="changeChosenTwo(list)">
                                        <span :style="chosenItemArr.indexOf(list.label) != '-1' ? 'background-color: #409EFF' : ''"></span>{{list.label}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="activeMenu8-main-right" @mouseleave="mouseLeave">
                        <div class="activeMenu8-main-title">已选择分析项</div>
                        <div class="activeMenu8-main-chosenitem" v-for="(item,key) in chosenItemArr" :key="key" @mouseover="mouseOver(key)">
                            {{item}}
                            <i v-if="chooseKey == key" style="float:right;padding:11px 0px;cursor: pointer;" @click="DeleteChangeChosen(key)" class="el-icon-circle-close"></i>
                        </div>
                        <div class="reportgeneration">
                            <el-button v-if="chosenItemArr.length != 0" type="warning" @click="reportGeneration">生成报告</el-button>
                            <div v-else class="baogao">生成报告</div>
                        </div>
                    </div>
                </div>
                <div v-if="!echarts" id="ddd" style="height:100%;border: 1px solid #ccc;margin: 10px 100px;box-sizing: border-box;">
                    <div class="returnsPage">
                        <span style="float:left" @click="returnsPage">返回上一页</span>
                        <span style="float:right;" @click="btnPrintClick">导出</span>
                    </div>
                    <div v-for="(item,index) in echartsArr" :key="index" style="margin-bottom: 40px;">
                        <div class="echarts-title">{{item.name}}</div>
                        <div style="width:800px;height:300px;margin: 0 auto;">
                            <gsb-echart2 :ref="item.echartsRef" key="7-5" :data="item.echarts"></gsb-echart2>
                        </div>
                        <div style="width:680px;height:70px;margin: 0 auto;margin-top: 25px">
                            <textarea style="width:100%;height:100%;resize: none;" :value="item.desc"></textarea>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div v-else>
                <div v-if="search != ''">
                    <iframe id="bdIframe" :src="srcIframe" frameborder="0" width="100%" height="1000"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import gsbEchart from '../../components/echart'
export default {
        data: function() {
            return {
                loading: false,
                Reporttype: false,
                dataUid: '735f9cd0-c103-11ea-9ecd-1d1c3e85a974',
                timer: 0,
                srcIframe: '',
                echartsArr:[
                    {   
                        echartsRef: 'echarts0',
                        desc:'',
                        echarts:{}
                    },
                    {
                        echartsRef: 'echarts1',
                        desc:'',
                        echarts:{}
                    },
                    {
                        echartsRef: 'echarts2',
                        desc:'',
                        echarts:{}
                    },
                    {
                        echartsRef: 'echarts3',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts4',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts5',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts6',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts7',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts8',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts9',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts10',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts11',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts12',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts13',
                        desc:'',
                        echarts:{
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        }
                    },{
                        echartsRef: 'echarts14',
                        desc:'',
                        echarts:{
                            title : {
                                text: '某站点用户访问来源',
                                subtext: '纯属虚构',
                                x:'center'
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                            },
                            series : [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[
                                        {value:335, name:'直接访问'},
                                        {value:310, name:'邮件营销'},
                                        {value:234, name:'联盟广告'},
                                        {value:135, name:'视频广告'},
                                        {value:1548, name:'搜索引擎'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        }
                    },
                ],
                echarts:true,
                chooseKey:null,
                activeMenu8Arr:[
                    {name:"申请人分析",
                     code:'tree',
                     data: [{
                        id: 0,
                        label: '申请人排名',
                      }, {
                        id: 2,
                        label: '申请人归属国分布',
                      }, {
                        id: 0,
                        label: '申请人IPC分布',
                    }, {
                        id: 0,
                        label: '申请人专利类型分布',
                    }, {
                        id: 4,
                        label: '申请人专利法律效力',
                    }, {
                        id: 0,
                        label: '申请人发明授权率',
                    }, {
                        id: 3,
                        label: '申请人申请趋势分析',
                    }]},
                    {name:"发明人分析",
                    code:'tree1',
                     data: [{
                        id: 0,
                        label: '发明人排名',
                      }, {
                        id: 0,
                        label: '主要发明人技术构成',
                      }, {
                        id: 0,
                        label: '主要发明人专利类型分布',
                    }, {
                        id: 0,
                        label: '主要发明人专利法律效力',
                    }, {
                        id: 3,
                        label: '主要发明人申请趋势',
                    }, {
                        id: 3,
                        label: '主要发明人公开趋势',
                    }]},
                    {name:"区域分析",
                     code:'tree2',
                     data: [{
                        id: 2,
                        label: '全国专利分布',
                      }, {
                        id: 2,
                        label: '各国专利分布',
                    }, {
                        id: 2,
                        label: '外国在华申请分布',
                    }, {
                        id: 0,
                        label: '主要国家IPC分布',
                    }, {
                        id: 3,
                        label: '主要国家申请趋势',
                    }]},
                    {name:"技术结构分析",
                     code:'tree3',
                     data: [{
                        id: 0,
                        label: '专利IPC分析',
                      }, {
                        id: 0,
                        label: '外观设计分类分析',
                      }, {
                        id: 0,
                        label: '外国在华专利IPC分布',
                      }, {
                        id: 0,
                        label: '技术领先国家IPC分布',
                      }, {
                        id: 0,
                        label: '发明专利IPC分布',
                      }, {
                        id: 0,
                        label: '主要IPC趋势分析',
                      }]
                    },
                    {name:"趋势分析",
                     code:'tree4',
                     data: [{
                        id: 3,
                        label: '申请趋势',
                      }, {
                        id: 3,
                        label: '公开趋势',
                      }, {
                        id: 3,
                        label: '授权趋势',
                    }]},
                    {name:"法律状态分析",
                     code:'tree5',
                     data: [{
                        id: 1,
                        label: '各专利类型分布',
                      }, {
                        id: 1,
                        label: '法律效力分布',
                      }, {
                        id: 0,
                        label: '当前法律状态分布',
                    }, {
                        id: 1,
                        label: '授权状态分布',
                    }, {
                        id: 3,
                        label: '各专利类型申请趋势',
                    }, {
                        id: 3,
                        label: '各专利类型公开趋势',
                    }]},
                    {name:"代理人/机构分析",
                     code:'tree6',
                     data: [{
                        id: 0,
                        label: '代理机构排名',
                      }, {
                        id: 3,
                        label: '代理机构专利申请趋势',
                      }, {
                        id: 0,
                        label: '代理机构专利类型分布',
                    }, {
                        id: 0,
                        label: '代理机构发明授权率',
                    }, {
                        id: 0,
                        label: '代理机构IPC分布',
                    }, {
                        id: 0,
                        label: '代理人排名',
                    }, {
                        id: 0,
                        label: '主要代理人专利类型分布',
                    }]},{name:""}
                ],
                chosenItemArr:[],
                chosenData:[],
                echartColor:[
                  "rgb(33,150,243)","rgb(76,175,80)","rgb(205,220,57)","rgb(255,235,59)","rgb(255,193,7)",
                  "rgb(255,152,0)","rgb(255,87,34)","rgb(121,85,72)","rgb(158,158,158)","rgb(96,125,139)"
                ],
                dimensionListObj:[
                    {
                        name: "申请人分析",
                        list: [
                            { code: "", name: "申请人排名" },
                            { code: "", name: "申请人归属国分布" },
                            { code: "", name: "申请人IPC分布" },
                            { code: "", name: "申请人专利类型分布" },
                            { code: "", name: "申请人专利法律效力" },
                            { code: "", name: "申请人发明授权率" },
                            { code: "", name: "申请人申请趋势分析" }
                        ]
                    },
                    {
                        name: "发明人分析",
                        list: [
                            { code: "", name: "发明人排名" },
                            { code: "", name: "主要发明人技术构成" },
                            { code: "", name: "主要发明人专利类型分布" },
                            { code: "", name: "主要发明人专利法律效力" },
                            { code: "", name: "主要发明人申请趋势" },
                            { code: "", name: "主要发明人公开趋势" },
                        ]
                    },
                    {
                        name: "区域分析",
                        list: [
                            { code: "", name: "申请人归属国分布" },
                            { code: "", name: "全国专利分布" },
                            { code: "", name: "各国专利分布" },
                            { code: "", name: "外国在华申请分布" },
                            { code: "", name: "主要国家IPC分布" },
                            { code: "", name: "主要国家申请趋势" },
                        ]
                    },
                    {
                        name: "技术结构分析",
                        list: [
                            { code: "", name: "专利IPC分析" },
                            { code: "", name: "外观设计分类分析" },
                            { code: "", name: "外国在华专利IPC分布" },
                            { code: "", name: "技术领先国家IPC分布" },
                            { code: "", name: "发明专利IPC分布" },
                            { code: "", name: "主要IPC趋势分析" },
                        ]
                    },
                    {
                        name: "趋势分析",
                        list: [
                            { code: "", name: "申请趋势" },
                            { code: "", name: "公开趋势" },
                            { code: "", name: "授权趋势" },
                        ]
                    },
                    {
                        name: "法律状态分析",
                        list: [
                            { code: "", name: "各专利类型分布" },
                            { code: "", name: "法律效力分布" },
                            { code: "", name: "当前法律状态分布" },
                            { code: "", name: "授权状态分布" },
                            { code: "", name: "各专利类型申请趋势" },
                            { code: "", name: "各专利类型公开趋势" },
                        ]
                    },
                    {
                        name: "代理人/机构分析",
                        list: [
                            { code: "", name: "代理机构排名" },
                            { code: "", name: "代理机构专利申请趋势" },
                            { code: "", name: "代理机构专利类型分布" },
                            { code: "", name: "代理机构发明授权率" },
                            { code: "", name: "代理机构IPC分布" },
                            { code: "", name: "代理人排名" },
                            { code: "", name: "主要代理人专利类型分布" },
                        ]
                    },
                ],
                dimensionList2: [
                    {
                        name: "智能报告",
                        icon: 'el-icon-tickets'
                    },
                    {
                        name: "智能报表",
                        icon: 'el-icon-document'
                    }
                ],
                dimensionListObj1:[
                    {
                        name: "主题分析",
                        icon: 'el-icon-tickets'
                    },
                    {
                        name: "演化分析",
                        icon: 'el-icon-view'
                    },
                    {
                        name: "关联分析",
                        icon: 'el-icon-document'
                    },
                    {
                        name: "合著分析",
                        icon: 'el-icon-document'
                    }
                ],
                method: '',
                dimensionList:[
                    {
                        name: "首页",
                    },
                    {
                        name: "申请人分析",
                        list: [
                            { code: "", name: "申请人排名" },
                            { code: "", name: "申请人归属国分布" },
                            { code: "", name: "申请人IPC分布" },
                            { code: "", name: "申请人专利类型分布" },
                            { code: "", name: "申请人专利法律效力" },
                            { code: "", name: "申请人发明授权率" },
                            { code: "", name: "申请人申请趋势分析" }
                        ]
                    },
                    {
                        name: "发明人分析",
                        list: [
                            { code: "", name: "发明人排名" },
                            { code: "", name: "主要发明人技术构成" },
                            { code: "", name: "主要发明人专利类型分布" },
                            { code: "", name: "主要发明人专利法律效力" },
                            { code: "", name: "主要发明人申请趋势" },
                            { code: "", name: "主要发明人公开趋势" },
                        ]
                    },
                    {
                        name: "区域分析",
                        list: [
                            { code: "", name: "申请人归属国分布" },
                            { code: "", name: "全国专利分布" },
                            { code: "", name: "各国专利分布" },
                            { code: "", name: "外国在华申请分布" },
                            { code: "", name: "主要国家IPC分布" },
                            { code: "", name: "主要国家申请趋势" },
                        ]
                    },
                    {
                        name: "技术结构分析",
                        list: [
                            { code: "", name: "专利IPC分析" },
                            { code: "", name: "外观设计分类分析" },
                            { code: "", name: "外国在华专利IPC分布" },
                            { code: "", name: "技术领先国家IPC分布" },
                            { code: "", name: "发明专利IPC分布" },
                            { code: "", name: "主要IPC趋势分析" },
                        ]
                    },
                    {
                        name: "趋势分析",
                        list: [
                            { code: "", name: "申请趋势" },
                            { code: "", name: "公开趋势" },
                            { code: "", name: "授权趋势" },
                        ]
                    },
                    {
                        name: "法律状态分析",
                        list: [
                            { code: "", name: "各专利类型分布" },
                            { code: "", name: "法律效力分布" },
                            { code: "", name: "当前法律状态分布" },
                            { code: "", name: "授权状态分布" },
                            { code: "", name: "各专利类型申请趋势" },
                            { code: "", name: "各专利类型公开趋势" },
                        ]
                    },
                    {
                        name: "代理人/机构分析",
                        list: [
                            { code: "", name: "代理机构排名" },
                            { code: "", name: "代理机构专利申请趋势" },
                            { code: "", name: "代理机构专利类型分布" },
                            { code: "", name: "代理机构发明授权率" },
                            { code: "", name: "代理机构IPC分布" },
                            { code: "", name: "代理人排名" },
                            { code: "", name: "主要代理人专利类型分布" },
                        ]
                    },
                    {
                        name: "生成报告",
                    },
                    {
                        name: "分析可视化",
                    }
                ],
                activeMenu: '0',
                menuItem: "0",
                echartActive: "0",
                ipcActive: "3",
                search: "",
                obj: {},
                /*申请人分析-申请人排名*/
                applierRankShow: true,
                applierRankTabledata: [],
                applierRankEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            },
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            },
                        }
                    ],
                    series: []
                },
                applierRankEchartDesc: "",
                /*申请人分析-申请人归属国*/
                applierCityShow: true,
                applierCityDesc: "",
                applierCityEchart: {},
                applierCityEchartdata: {
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: []
                  },
                  grid: {
                      left: '6%',
                      right: '6%',
                      bottom: '3%',
                      containLabel: true
                  },
                  yAxis: {
                      type: 'value',
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  xAxis: {
                      type: 'category',
                      data: [],
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  series: []
                },
                applierCityTabledata: [],
                /*申请人分析-申请人IPC分布*/
                applierIpcShow: true,
                applierIpcEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: [{
                        type: 'category',
                        data: [],
                        axisLabel: {
                            interval: 0,
                            rotate: 60,
                        },
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    }],
                    series: []
                },
                applierIpcTabledata: { company: [], data: [] },
                /*申请人分析-申请人专利类型分布*/
                applierPatenttypeShow: true,
                applierPatenttypeEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLabel: {
                            interval: 0,
                            rotate: 60,
                        },
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                applierPatenttypeTabledata: { company: [], data: [] },
                /*申请人分析-申请人专利法律效力*/
                applierPatentStatusShow: true,
                applierPatentStatusEchart: {},
                applierPatentStatusEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: [{
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    }],
                    xAxis: [{
                        type: 'category',
                        data: [],
                        axisLabel: {
                            interval: 0,
                            rotate: 60,
                        },
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    }],
                    series: []
                },
                applierPatentStatusTabledata: { company: [], data: [] },
                /*申请人分析-申请人发明授权率*/
                applierAuthRateShow: true,
                applierAuthRateEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name: '专利数量',
                            axisLabel: {
                                formatter: '{value} '
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            },
                        },
                        {
                            type: 'value',
                            name: '授权率',
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            },
                        }
                    ],
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLabel: {
                            interval: 0,
                            rotate: 60,
                        },
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                applierAuthRateTabledata: { company: [], data: [] },
                /*申请人分析-申请人申请趋势分析*/
                applierTrendShow: true,
                applierTrendEchart: {},
                applierTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                applierTrendTabledata: { year: [], data: [] },
                /*发明人分析-发明人排名*/
                inventorRankShow:true,
                inventorRankEchartDesc: "",
                inventorRankTabledata: [],
                inventorRankEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            },
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            },
                        }
                    ],
                    series: []
                },
                /*发明人分析-主要发明人技术构成*/
                mainInventorIpcShow:true,
                mainInventorIpcEchart:{},
                mainInventorIpcEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                mainInventorIpcTabledata: {inventor: [],data: []},
                /*发明人分析-主要发明人专利类型分布*/
                mainInventorPatenttypeShow:true,
                mainInventorPatenttypeEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                mainInventorPatenttypeTabledata: {inventor: [],data: []},
                /*发明人分析-主要发明人专利法律效力*/
                mainInventorPatentstatusShow:true,
                mainInventorPatentstatusEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                mainInventorPatentstatusTabledata: {inventor: [],data: []},
                /*发明人分析-主要发明人申请趋势*/
                mainInventorApplyTrendShow:true,
                mainInventorApplyTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                mainInventorApplyTrendTabledata: {year: [],data: []},
                /*发明人分析-主要发明人公开趋势*/
                mainInventorPublicTrendShow:true,
                mainInventorPublicTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        },
                    },
                    series: []
                },
                mainInventorPublicTrendTabledata: {year: [],data: []},
                /*区域分析-申请人归属国分布*/
                applierCountryShow:true,
                applierCountryDesc:"",
                applierCountryEchart: {},
                applierCountryEchartdata: {
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: []
                  },
                  grid: {
                      left: '6%',
                      right: '6%',
                      bottom: '3%',
                      containLabel: true
                  },
                  yAxis: {
                      type: 'value',
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  xAxis: {
                      type: 'category',
                      data: [],
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  series: []
                },
                applierCountryTabledata: [],
                /*区域分析-全国专利分布*/
                countrywidePatentShow:true,
                countrywidePatentDesc:"",
                countrywidePatentEchart:{},
                countrywidePatentEchartdata: {
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: []
                  },
                  grid: {
                      left: '6%',
                      right: '6%',
                      bottom: '3%',
                      containLabel: true
                  },
                  yAxis: {
                      type: 'value',
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  xAxis: {
                      type: 'category',
                      data: [],
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  series: []
                },
                countrywidePatentTabledata: [],
                /*区域分析-各国专利分布*/
                everyCountryPatentShow:true,
                everyCountryPatentDesc:"",
                everyCountryPatentEchart:{},
                everyCountryPatentEchartdata: {
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: []
                  },
                  grid: {
                      left: '6%',
                      right: '6%',
                      bottom: '3%',
                      containLabel: true
                  },
                  yAxis: {
                      type: 'value',
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  xAxis: {
                      type: 'category',
                      data: [],
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  series: []
                },
                everyCountryPatentTabledata: [],
                /*区域分析-外国在华申请分布*/
                foreignApplyInChinaShow:true,
                foreignApplyInChinaDesc:"",
                foreignApplyInChinaEchart:{},
                foreignApplyInChinaEchartdata: {
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  legend: {
                      data: []
                  },
                  grid: {
                      left: '6%',
                      right: '6%',
                      bottom: '3%',
                      containLabel: true
                  },
                  yAxis: {
                      type: 'value',
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  xAxis: {
                      type: 'category',
                      data: [],
                      axisLine:{
                        lineStyle:{color:"#ffffff"}
                      },
                  },
                  series: []
                },
                foreignApplyInChinaTabledata: [],
                /*区域分析-主要国家IPC分布*/
                mainCountryIpcShow:true,
                mainCountryIpcEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                mainCountryIpcTabledata: {country: [],data: []},
                /*区域分析-主要国家申请趋势*/
                mainCountryApplyTrendShow:true,
                mainCountryApplyTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                mainCountryApplyTrendTabledata: {year: [],data: []},
                /*技术结构分析-专利IPC分析*/
                patentIpcShow:true,
                patentIpcDesc:"",
                patentIpcEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                patentIpcTabledata: [],
                /*技术结构分析-外观设计分类分析*/
                wgsjPatentShow:true,
                wgsjPatentDesc:"",
                wgsjPatentEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                wgsjPatentTabledata: [],
                /*技术结构分析-外国在华专利IPC分布*/
                foreignInChinaPatentShow:true,
                foreignInChinaPatentEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                foreignInChinaPatentTabledata: {country: [],data: []},
                /*技术结构分析-技术领先国家IPC分布*/
                advancedCountryIpcShow:true,
                advancedCountryIpcEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                advancedCountryIpcTabledata: {country: [],data: []},
                /*技术结构分析-发明专利IPC 分布*/
                fmPatentIpcShow:true,
                fmPatentIpcDesc:"",
                fmPatentIpcEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                fmPatentIpcTabledata: [],
                /*技术结构分析-主要IPC趋势分析*/
                mainIpcTrendShow:true,
                mainIpcTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                mainIpcTrendTabledata: {year: [],data: []},
                /*趋势分析-申请趋势*/
                applyTrendShow:true,
                applyTrendDesc:"",
                applyTrendEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                applyTrendTabledata: [],
                /*趋势分析-公开趋势*/
                publicTrendShow:true,
                publicTrendDesc:"",
                publicTrendEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                publicTrendTabledata: [],
                /*趋势分析-授权趋势*/
                authorizeTrendShow:true,
                authorizeTrendDesc:"",
                authorizeTrendEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                authorizeTrendTabledata: [],
                /*法律状态分析-各专利类型分布*/
                patenttypeStatusShow:true,
                patenttypeStatusDesc:"",
                patenttypeStatusEchart:{},
                patenttypeStatusEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                patenttypeStatusTabledata: [],
                /*法律状态分析-法律效力分布*/
                statusEffectShow:true,
                statusEffectDesc:"",
                statusEffectEchartdata: {
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: []
                    },
                    series: [
                        {
                            name: '专利数量',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                },
                statusEffectTabledata: [],
                /*法律状态分析-当前法律状态分布*/
                nowStatusShow:true,
                nowStatusDesc:"",
                nowStatusEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                nowStatusTabledata: [],
                /*法律状态分析-授权状态分布*/
                authStatusShow:true,
                authStatusDesc:"",
                authStatusEchart:{},
                authStatusEchartdata: {
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: []
                    },
                    series: [
                        {
                            name: '专利数量',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                },
                authStatusTabledata: [],
                /*法律状态分析-各专利类型申请趋势*/
                everyApplyTrendShow:true,
                everyApplyTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                everyApplyTrendTabledata: {year: [],data: []},
                /*法律状态分析-各专利类型公开趋势*/
                everyPublicTrendShow:true,
                everyPublicTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                everyPublicTrendTabledata: {year: [],data: []},
                /*代理人/机构分析-代理机构排名*/
                agentRankShow:true,
                agentRankDesc:"",
                agentRankEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                agentRankTabledata: [],
                /*代理人/机构分析-代理机构专利申请趋势*/
                agentApplyTrendShow:true,
                agentApplyTrendEchartdata: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                agentApplyTrendTabledata: {year: [],data: []},
                /*代理人/机构分析-代理机构专利类型分布*/
                agentPatenttypeShow:true,
                agentPatenttypeEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                agentPatenttypeTabledata: {agency: [],data: []},
                /*代理人/机构分析-代理机构发明授权率*/
                agentFmAuthorizeShow:true,
                agentFmAuthorizeEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name: '专利数量',
                            axisLabel: {
                                formatter: '{value} '
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        },
                        {
                            type: 'value',
                            name: '授权率',
                            min: 0,
                            max: 100,
                            interval: 20,
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLabel: {
                            interval: 0,
                            rotate: 60,
                        },
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                agentFmAuthorizeTabledata: {agency: [],data: []},
                /*代理人/机构分析-代理机构IPC分布*/
                agentIpcShow:true,
                agentIpcEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                agentIpcTabledata: {agency: [],data: []},
                /*代理人/机构分析-代理人排名*/
                agentPersonRankShow:true,
                agentPersonRankDesc:"",
                agentPersonRankEchartdata: {
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine:{
                              lineStyle:{color:"#ffffff"}
                            }
                        }
                    ],
                    series: []
                },
                agentPersonRankTabledata: [],
                /*代理人/机构分析-主要代理人专利类型分布*/
                mainAgentPatenttypeShow:true,
                mainAgentPatenttypeEchartdata: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        axisLine:{
                          lineStyle:{color:"#ffffff"}
                        }
                    },
                    series: []
                },
                mainAgentPatenttypeTabledata: {agency: [],data: []},



            }
        },
    mounted: function() {

    },
    created: function() {
        console.log('wslhd');
        this.echartsArr = [];
        console.log(localStorage.getItem("patentyc_patentanalysis"));
        var object=JSON.parse(localStorage.getItem("patentyc_patentanalysis")) || '';
        this.search = this.$router.history.current.query.search || '';
        this.obj=object;
        console.log(this.search,'检索数据');
        console.log(this.obj);
    },
    methods: {
        tiaozhan() {
            this.$router.push({
                path:"/patentsimplesearch",
                title:"专利检索"
            });
        },
        btnPrintClick () {
            $('.returnsPage').css('display','none');
            let targetDom = $("#ddd");

            let copyDom = $("<div/>");
            copyDom.addClass('super');
            copyDom.width(targetDom.width() + "px");
            copyDom.height(targetDom.height() + "px");
            $("#ddd").css({"background": "#fff"});
            $('body').append(copyDom);
            let cont=document.getElementById('ddd');

            console.log(targetDom);
            html2canvas(targetDom, {
                height:cont.offsetHeight - 60,
                onrendered: function(canvas) {
                    var contentWidth = canvas.width;
                    var contentHeight = canvas.height + 40;

                    /* 一页pdf显示html页面生成的canvas高度; */
                    var pageHeight = contentWidth / 575.28 * 841.89;
                    /* 未生成pdf的html页面高度 */
                    var leftHeight = contentHeight;
                    /* 页面偏移 */
                    var position = 0;
                    /* a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高 */
                    var imgWidth = 575.28;
                    var imgHeight = 575.28/contentWidth * contentHeight;

                    var pageData = canvas.toDataURL('image/jpeg', 1.0);

                    var doc = new jsPDF('', 'pt', 'a4');

                    /* 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89) */
                    /* 当内容未超过pdf一页显示的范围，无需分页 */
                    if (leftHeight < pageHeight) {
                        doc.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
                    } else {
                        while(leftHeight > 0) {
                            doc.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            /* 避免添加空白页 */
                            if(leftHeight > 0) {
                                doc.addPage();
                            }
                        }
                    };

                    doc.save('content.pdf');
                    $('.super').remove();
                    $('.returnsPage').css('display','block');
                }
            });
            
        },
        mouseLeave () {
            this.chooseKey = null;
        },
        mouseOver (key) {
            this.chooseKey = key;
        },
        returnsPage () {
            this.echarts = true;
            this.echartsArr = [];
            this.chosenData = [];
            this.chosenItemArr = []
        },
        reportGeneration () {
            var params = { search: this.search, obj: this.obj,chose: this.chosenData};
            console.log('生成报告',params,this.chosenData);
            this.loading = true;
            let that = this;
            this.$post("/web/patentycCtl/reportGeneration",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0) {
                    let echData = d.data;
                    for (let i = 0; i< echData.length; i++) {
                        if (echData[i].chose.id == 0) {
                            that.echartsArr[i].desc = echData[i].value.echart.desc || '可自定义编辑';
                            that.echartsArr[i].name = echData[i].chose.label;
                            that.$forceUpdate();
                            console.log(that.$refs['echarts'+i],i);
                            let data = that.$refs['echarts'+i][0].getEchartObj();
                            let option = data.getOption();
                            console.log(option);
                            if (echData[i].value.echart.legend || echData[i].value.echart.y.patenttype) {
                                option = {
                                    tooltip: {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                        data:echData[i].value.echart.legend || ''
                                    },
                                    grid: {
                                        top: '16%',
                                        left: '6%',
                                        right: '6%',
                                        bottom: '3%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'category',
                                        boundaryGap: true,
                                        data: echData[i].value.echart.x
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: []
                                };
                                let dataY = echData[i].value.echart.y || echData[i].value.echart.y1;
                                for(var j=0;j< dataY.length;j++){
                                    var item={
                                      name: dataY[j].lable || dataY[j].ipc || dataY[j].patenttype,
                                      type: 'bar',
                                      stack: '总量',
                                      barWidth: 50,
                                      itemStyle:{
                                        normal:{
                                          color:that.echartColor[j]
                                        }
                                      },
                                      data: dataY[j].data
                                    };
                                    option.series.push(item)
                                }; 
                            }else {
                                option.xAxis[0].data = echData[i].value.echart.x;
                                option.series[0].data = echData[i].value.echart.y;
                            }
                            console.log(option);
                            data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                        }else if (echData[i].chose.id == 1) {
                            that.echartsArr[i].desc = echData[i].value.echart.desc || '可自定义编辑';
                            that.echartsArr[i].name = echData[i].chose.label;
                            that.$forceUpdate();
                            console.log(that.$refs['echarts'+i],i);
                            let data = that.$refs['echarts'+i][0].getEchartObj();
                            let option = data.getOption();
                            console.log(option);
                            option.legend[0].data = echData[i].value.echart.legend;
                            option.series[0].data = echData[i].value.echart.y1;
                            console.log(option);
                            data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                        }else if (echData[i].chose.id == 2) {
                            that.echartsArr[i].desc = echData[i].value.echart.desc || '可自定义编辑';
                            that.echartsArr[i].name = echData[i].chose.label;
                            that.$forceUpdate();
                            console.log(that.$refs['echarts'+i],i);
                            let data = that.$refs['echarts'+i][0].getEchartObj();
                            let option = data.getOption();
                            console.log(option,'地图');
                            if ( echData[i].chose.label == '全国专利分布') {
                                option = {
                                    visualMap: {
                                        min: 0,
                                        max: echData[i].value.echart.max,
                                        text: ['High', 'Low'],
                                        realtime: true,
                                        calculable: true,
                                        color: ['orangered', 'yellow', 'lightskyblue']
                                    },
                                    series: [
                                        {
                                            name: '中国',
                                            type: 'map',
                                            mapType: 'china',
                                            mapLocation: {
                                                x: 'left'
                                            },
                                            selectedMode: 'multiple',
                                            itemStyle: {
                                                normal: { label: { show: true } },
                                                emphasis: { label: { show: true } }
                                            },
                                            data: echData[i].value.echart.y1 || echData[i].value.echart.pic1
                                        }
                                    ]
                                }
                            }else {
                                option = {
                                    visualMap: {
                                        min: 0,
                                        max: echData[i].value.echart.max,
                                        text: ['High', 'Low'],
                                        realtime: true,
                                        calculable: true,
                                        color: ['orangered', 'yellow', 'lightskyblue']
                                    },
                                    series: [
                                        {
                                            name: 'World Population (2010)',
                                            type: 'map',
                                            mapType: 'world',
                                            roam: true,
                                            itemStyle: {
                                                emphasis: { label: { show: true } }
                                            },
                                            data: echData[i].value.echart.y1 || echData[i].value.echart.pic1
                                        }
                                    ]
                                }
                            }
                            console.log(option);
                            data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                        }else if (echData[i].chose.id == 3) {
                            that.echartsArr[i].desc = echData[i].value.echart.desc || '可自定义编辑';
                            that.echartsArr[i].name = echData[i].chose.label;
                            that.$forceUpdate();
                            console.log(that.$refs['echarts'+i],i);
                            let data = that.$refs['echarts'+i][0].getEchartObj();
                            let option = data.getOption();
                            console.log(option,'线图');
                            if (echData[i].value.echart.legend) {
                                option = {
                                    tooltip: {
                                        trigger: 'axis'
                                    },
                                    legend: {
                                        data:echData[i].value.echart.legend
                                    },
                                    grid: {
                                        left: '3%',
                                        right: '4%',
                                        bottom: '3%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'category',
                                        boundaryGap: false,
                                        data: echData[i].value.echart.x
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: []
                                };
                                for(var j=0;j< echData[i].value.echart.y.length;j++){
                                    var item={
                                      name: echData[i].value.echart.y[j].lable,
                                      type: 'line',
                                      stack: echData[i].value.echart.y[j].lable,
                                      barWidth: 50,
                                      data: echData[i].value.echart.y[j].data
                                    };
                                    option.series.push(item)
                                };
                            }else {
                                option =  {
                                    xAxis: {
                                        type: 'category',
                                        data: echData[i].value.echart.x
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: echData[i].value.echart.data,
                                        type: 'line'
                                    }]
                                };
                            }
                            
                            data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                        }else if (echData[i].chose.id == 4) {
                            that.echartsArr[i].desc = echData[i].value.echart.desc || '可自定义编辑';
                            that.echartsArr[i].name = echData[i].chose.label;
                            that.$forceUpdate();
                            console.log(that.$refs['echarts'+i],i);
                            let data = that.$refs['echarts'+i][0].getEchartObj();
                            let option = data.getOption();
                            console.log(option,'泡泡图');
                            let max = echData[i].value.echart.max;
                            let lable = ['无效', '有效', '在审'];
                            option = {
                                title: {
                                    text: '',
                                    link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                                },
                                legend: {
                                    data: ['Punch Card'],
                                    left: 'right'
                                },
                                grid: {
                                    left: '6%',
                                    bottom: '3%',
                                    right: '6%',
                                    containLabel: true
                                },
                                tooltip: {
                                    position: 'top',
                                    formatter: function (params) {
                                        return lable[params.value[1]] + "专利数量:" + params.value[2];
                                    }
                                },
                                xAxis: {
                                    type: 'category',
                                    data: echData[i].value.echart.x,
                                    boundaryGap: false,
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: '#999',
                                            type: 'dashed'
                                        }
                                    },
                                    axisLabel: {
                                        interval: 0,
                                        rotate: 60,
                                    },
                                    axisLine: {
                                        show: false
                                    }
                                },
                                yAxis: {
                                    type: 'category',
                                    data: lable,
                                    axisLine: {
                                        show: false
                                    }
                                },
                                series: [{
                                    name: 'Punch Card',
                                    type: 'scatter',
                                    symbolSize: function (val) {
                                        if (max < 10) {
                                            return val[2] * 5;
                                        } else if (max < 30) {
                                            return val[2] * 2;
                                        } else if (max < 70) {
                                            return val[2];
                                        } else {
                                            var num = (max / 300) * 3;
                                            return val[2] / num;
                                        }
                                    },
                                    color: function (val) {
                                        var colorList = ['rgb(108,208,224)', "rgb(87,104,116)", 'rgb(241,103,112)', "rgb(247,187,202)", "rgb(50,197,233)", "rgb(235,163,138)", "rgb(165,208,188)", "rgb(142,176,154)", "rgb(157,150,245)", "rgb(255,219,92)"];
                                        return colorList[val.data[0]];
                                    },
                                    data: echData[i].value.echart.y2
                                }]
                            };
                            data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                        }
                       
                    }
                }
                
            });
            this.echarts = false
        },
        DeleteChangeChosen (key) {
            this.chosenItemArr.splice(key,1);
            this.chosenData.splice(key,1);
        },
        changeChosenTwo(list) {
            console.log(list);
            var index = this.chosenItemArr.indexOf(list.label);
            if (index == -1) {
                if (this.chosenItemArr.length == 15) {
                    return alert('最多选中15项');
                }
                if (list.id == 0) {
                    let obj = {   
                        echartsRef: 'echarts' + this.echartsArr.length,
                        desc:'',
                        name:'',
                        echarts:{
                            color: ['#3398DB'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {
                                    type : 'shadow'
                                }
                            },
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    data : [],
                                    axisTick: {
                                        alignWithLabel: true
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            series : [
                                {
                                    name:'直接访问',
                                    type:'bar',
                                    barWidth: '60%',
                                    data:[]
                                }
                            ]
                        }
                    };
                    this.echartsArr.push(obj)
                }else if (list.id == 1) {
                    let obj = {   
                        echartsRef: 'echarts' + this.echartsArr.length,
                        desc:'',
                        name:'',
                        echarts:{
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            grid: {
                                top: '5%',
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            legend: [{
                                orient: 'vertical',
                                left: 'left',
                                data: []
                            }],
                            series : [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        }
                    };
                    this.echartsArr.push(obj)
                }else if (list.id == 2) {
                    let obj = {
                        echartsRef: 'echarts' + this.echartsArr.length,
                        desc:'',
                        name:'',
                        echarts:{
                            tooltip : {
                                trigger: 'item'
                            },
                            dataRange: {
                                orient: 'vertical',
                                min: 0,
                                max: 500,
                                text: ['High', 'Low'],
                                splitNumber: 0,
                                color: ['orangered', 'yellow', 'lightskyblue']
                            },
                            series: []
                        }
                    };
                    this.echartsArr.push(obj)
                }else if (list.id == 3) {
                    let obj = {   
                        echartsRef: 'echarts' + this.echartsArr.length,
                        desc:'',
                        name:'',
                        echarts:{
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data:[]
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [{
                                type: 'category',
                                boundaryGap: false,
                                data: []
                            }],
                            yAxis: {
                                type: 'value'
                            },
                            series: []
                          }
                    };
                    this.echartsArr.push(obj)
                }else if (list.id == 4) {
                    let obj = {   
                        echartsRef: 'echarts' + this.echartsArr.length,
                        desc:'',
                        name:'',
                        echarts:{
                            title: {
                                text: '',
                                link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                            },
                            legend: {
                                data: ['Punch Card'],
                                left: 'right'
                            },
                            grid: {
                                left: '6%',
                                bottom: '3%',
                                right: '6%',
                                containLabel: true
                            },
                            tooltip: {
                                position: 'top',
                            },
                            xAxis: {
                                type: 'category',
                                data: [],
                                boundaryGap: false,
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#999',
                                        type: 'dashed'
                                    }
                                },
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: [],
                                axisLine: {
                                    show: false
                                }
                            },
                            series: [{
                                name: 'Punch Card',
                                type: 'scatter',
                                data: []
                            }]
                        }
                    };
                    this.echartsArr.push(obj)
                };
                this.chosenData.push(list);
                this.chosenItemArr.push(list.label)

            }else {
                this.echartsArr.splice(index,1);
                this.chosenData.splice(index,1);
                this.chosenItemArr.splice(index,1)
            }
                
            
        },
        picClick(index){
          if(index==1){
            this.activeMenu=6;
            this.menuItem='2';
            this.echartActive='0';
            this.ipcActive = "3";
            this.nowStatus();
          }else if(index==2){
            this.activeMenu=1;
            this.menuItem='6';
            this.ipcActive = "3";
            this.echartActive='0';
            this.applierTrend();
          }else if(index==3){
            this.activeMenu=2;
            this.menuItem='1';
            this.ipcActive = "3";
            this.echartActive='1';
            this.mainInventorIpc();
          }else if(index==4){
            this.activeMenu=4;
            this.menuItem='0';
            this.ipcActive = "3";
            this.echartActive='0';
            this.patentIpc();
          }else if(index==5){
            this.activeMenu=3;
            this.menuItem='1';
            this.ipcActive = "3";
            this.echartActive='0';
            this.countrywidePatent();
          }else if(index==6){
            this.activeMenu=7;
            this.menuItem='0';
            this.ipcActive = "3";
            this.echartActive='0';
            this.agentRank();
          }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.activeMenu = key.toString();
            this.menuItem = "0";
            this.echartActive = "0";
            this.ipcActive = "3";
            if (this.activeMenu == "1") {
                this.applierRank();
            } else if (this.activeMenu == "2") {
                this.inventorRank();
            } else if (this.activeMenu == "3") {
                this.applierCountry();
            } else if (this.activeMenu == "4") {
                this.patentIpc();
            } else if (this.activeMenu == "5") {
                this.applyTrend();
            } else if (this.activeMenu == "6") {
                this.patenttypeStatus();
            } else if (this.activeMenu == "7") {
                this.agentRank();
            }else if (this.activeMenu == "8") {
                this.returnsPage();
            }else if (this.activeMenu >= "10") {
                console.log(this.dimensionListObj1[key - 10].name);
                this.method = this.dimensionListObj1[key - 10].name;
                if (this.Reporttype) {
                    this.ezGetReport()
                }else {
                    this.ezReportUploadData();
                }
                
                setTimeout(()=> {this.reinitIframe()}, 3000);
            }
        },
        reinitIframe(){
            var iframe = document.getElementById("bdIframe");
            console.log(iframe);
            const deviceHeight = document.documentElement.clientHeight;
            iframe.style.height = (Number(deviceHeight)-70) + 'px';
            console.log(deviceHeight)
            
        },
        /*同一纬度下不同角度的分析切换 */
        styleset(index){
            if (this.menuItem == index) {
                return { color: "#00C1DE", background: "#ffffff", "border": "1px solid #00C1DE" }
            } else {
                return { color: "#828282", background: "#ffffff" }
            }
        },
        everyclick(){
            if (this.activeMenu == "1") {
                if (this.menuItem == "0") {
                    this.applierRank();
                } else if (this.menuItem == "1") {
                    this.applierCity();
                } else if (this.menuItem == "2") {
                    this.applierIpc();
                } else if (this.menuItem == "3") {
                    this.applierPatenttype();
                } else if (this.menuItem == "4") {
                    this.applierPatentStatus();
                } else if (this.menuItem == "5") {
                    this.applierAuthRate();
                } else if (this.menuItem == "6") {
                    this.applierTrend();
                }
            } else if (this.activeMenu == "2") {
                if (this.menuItem == "0") {
                    this.inventorRank();
                } else if (this.menuItem == "1") {
                    this.mainInventorIpc();
                } else if (this.menuItem == "2") {
                    this.mainInventorPatenttype();
                } else if (this.menuItem == "3") {
                    this.mainInventorPatentstatus();
                } else if (this.menuItem == "4") {
                    this.mainInventorApplyTrend();
                } else if (this.menuItem == "5") {
                    this.mainInventorPublicTrend();
                }
            } else if (this.activeMenu == "3") {
                if (this.menuItem == "0") {
                    this.applierCountry();
                } else if (this.menuItem == "1") {
                    this.countrywidePatent();
                } else if (this.menuItem == "2") {
                    this.everyCountryPatent();
                } else if (this.menuItem == "3") {
                    this.foreignApplyInChina();
                } else if (this.menuItem == "4") {
                    this.mainCountryIpc();
                } else if (this.menuItem == "5") {
                    this.mainCountryApplyTrend();
                }
            } else if (this.activeMenu == "4") {
                if (this.menuItem == "0") {
                    this.patentIpc();
                } else if (this.menuItem == "1") {
                    this.wgsjPatent();
                } else if (this.menuItem == "2") {
                    this.foreignInChinaPatent();
                } else if (this.menuItem == "3") {
                    this.advancedCountryIpc();
                } else if (this.menuItem == "4") {
                    this.fmPatentIpc();
                } else if (this.menuItem == "5") {
                    this.mainIpcTrend();
                }
            } else if (this.activeMenu == "5") {
                if (this.menuItem == "0") {
                    this.applyTrend();
                } else if (this.menuItem == "1") {
                    this.publicTrend();
                } else if (this.menuItem == "2") {
                    this.authorizeTrend();
                }
            } else if (this.activeMenu == "6") {
                if (this.menuItem == "0") {
                    this.patenttypeStatus();
                } else if (this.menuItem == "1") {
                    this.statusEffect();
                } else if (this.menuItem == "2") {
                    this.nowStatus();
                } else if (this.menuItem == "3") {
                    this.authStatus();
                } else if (this.menuItem == "4") {
                    this.everyApplyTrend();
                } else if (this.menuItem == "5") {
                    this.everyPublicTrend();
                }
            } else if (this.activeMenu == "7") {
                if (this.menuItem == "0") {
                    this.agentRank();
                } else if (this.menuItem == "1") {
                    this.agentApplyTrend();
                } else if (this.menuItem == "2") {
                    this.agentPatenttype();
                } else if (this.menuItem == "3") {
                    this.agentFmAuthorize();
                } else if (this.menuItem == "4") {
                    this.agentIpc();
                } else if (this.menuItem == "5") {
                    this.agentPersonRank();
                } else if (this.menuItem == "6") {
                    this.mainAgentPatenttype();
                }
            } else if (this.activeMenu == "8") {
                this.returnsPage();
            }
            this.ipcActive = "3";
            this.echartActive='0';
        },
        analysisclick(index){
            this.menuItem = index;
            this.styleset(index);
            this.echartActive = "0";
            this.ipcActive = "3";
            this.everyclick();
        },
        /*echart 不同图的切换*/
        echartTabStyle(index){
            if (this.echartActive == index) {
                return { color: "#00C1DE", 'border-bottom': "2px solid #00C1DE" }
            } else {
                return { color: "#828282" }
            }
        },
        echartTabChange(index){
            console.log(index);
            this.echartActive = index;
            this.echartTabStyle(index);
            if (this.activeMenu == "1") {
                if (this.menuItem == "0") {
                    /*申请人分析-申请人排名*/
                    var data = this.$refs.applierRankRef.getEchartObj();
                    var option = data.getOption();
                    data.clear();
                    if (this.echartActive == "0") {
                        option.series[0].type = "bar";
                    } else if (this.echartActive == "1") {
                        option.series[0].type = "line";
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                } else if (this.menuItem == "1") {
                    /*申请人分析-申请人归属国分布*/
                    var data = this.$refs.applierCityRef.getEchartObj();
                    var option = data.getOption();
                    data.clear();
                    if (this.echartActive == "0") {
                        option = {
                            visualMap: {
                                min: 0,
                                max: this.applierCityEchart.max,
                                text: ['High', 'Low'],
                                realtime: true,
                                calculable: true,
                                color: ['orangered', 'yellow', 'lightskyblue']
                            },
                            series: [
                                {
                                    name: 'World Population (2010)',
                                    type: 'map',
                                    mapType: 'world',
                                    roam: true,
                                    itemStyle: {
                                        emphasis: { label: { show: true } }
                                    },
                                    data: this.applierCityEchart.pic1
                                }
                            ]
                        };
                    } else if (this.echartActive == "1") {
                      var width=this.widthSet(this.applierCityEchart.pic2.xlist);
                        option = {
                            color:['rgb(0,153,204)'],
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: this.applierCityEchart.pic2.xlist,
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    axisLabel: {
                                        interval: 0,
                                        rotate: 60,
                                    },
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'
                                }
                            ],
                            series: [
                                {
                                    name: '专利数量',
                                    type: 'bar',
                                    barWidth: width,
                                    data: this.applierCityEchart.pic2.ylist
                                }
                            ]
                        };
                    } else if (this.echartActive == "2") {
                      var width=this.widthSet(this.applierCityEchart.pic2.xlist);
                        option = {
                            color:['rgb(0,153,204)'],
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: this.applierCityEchart.pic2.xlist,
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    axisLabel: {
                                        interval: 0,
                                        rotate: 60,
                                    },
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'
                                }
                            ],
                            series: [
                                {
                                    name: '专利数量',
                                    type: 'line',
                                    barWidth: width,
                                    data: this.applierCityEchart.pic2.ylist
                                }
                            ]
                        };
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                } else if (this.menuItem == "2") {
                    /*申请人分析-申请人IPC分布*/
                } else if (this.menuItem == "3") {
                    /*申请人分析-申请人专利类型分布*/
                    var data = this.$refs.applierPatenttypeRef.getEchartObj();
                    var option = data.getOption();
                    data.clear();
                    if (this.echartActive == "0") {
                        for (var i = 0; i < option.series.length; i++) {
                            option.series[i].type = "bar";
                            option.series[i].stack = "总量";
                        }
                    } else if (this.echartActive == "1") {
                        for (var i = 0; i < option.series.length; i++) {
                            option.series[i].type = "line";
                            option.series[i].stack = option.series[i].name;
                        }
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                } else if (this.menuItem == "4") {
                    /*申请人分析-申请人专利法律效力*/
                    var data = this.$refs.applierPatentStatusRef.getEchartObj();
                    var option = data.getOption();
                    data.clear();
                    if (this.echartActive == "0") {
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: ['无效', '有效', '在审']
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: [{
                                type: 'value',
                            }],
                            xAxis: [{
                                type: 'category',
                                data: this.applierPatentStatusEchart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                }
                            }],
                            series: []
                        };
                        for (var i = 0; i < this.applierPatentStatusEchart.y1.length; i++) {
                            var item = {
                                name: this.applierPatentStatusEchart.y1[i].patenttype,
                                type: 'bar',
                                stack: "总量",
                                barWidth: 50,
                                itemStyle:{
                                  normal:{
                                    color:this.echartColor[i]
                                  }
                                },
                                data: this.applierPatentStatusEchart.y1[i].data
                            };
                            option.series.push(item);
                        }
                    } else if (this.echartActive == "1") {
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: ['无效', '有效', '在审']
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: [{
                                type: 'value',
                            }],
                            xAxis: [{
                                type: 'category',
                                data: this.applierPatentStatusEchart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                }
                            }],
                            series: []
                        };
                        for (var i = 0; i < this.applierPatentStatusEchart.y1.length; i++) {
                            var item = {
                                name: this.applierPatentStatusEchart.y1[i].patenttype,
                                type: 'line',
                                stack: this.applierPatentStatusEchart.y1[i].patenttype,
                                barWidth: 50,
                                itemStyle:{
                                  normal:{
                                    color:this.echartColor[i]
                                  }
                                },
                                data: this.applierPatentStatusEchart.y1[i].data
                            };
                            option.series.push(item);
                        }
                    } else if (this.echartActive == "2") {
                        var max = this.applierPatentStatusEchart.max;
                        var lable = ['无效', '有效', '在审'];
                        option = {
                            title: {
                                text: '',
                                link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                            },
                            legend: {
                                data: ['Punch Card'],
                                left: 'right'
                            },
                            grid: {
                                left: '6%',
                                bottom: '3%',
                                right: '6%',
                                containLabel: true
                            },
                            tooltip: {
                                position: 'top',
                                formatter: function (params) {
                                    return lable[params.value[1]] + "专利数量:" + params.value[2];
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: this.applierPatentStatusEchart.x,
                                boundaryGap: false,
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#999',
                                        type: 'dashed'
                                    }
                                },
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: ['无效', '有效', '在审'],
                                axisLine: {
                                    show: false
                                }
                            },
                            series: [{
                                name: 'Punch Card',
                                type: 'scatter',
                                symbolSize: function (val) {
                                    if (max < 10) {
                                        return val[2] * 5;
                                    } else if (max < 30) {
                                        return val[2] * 2;
                                    } else if (max < 70) {
                                        return val[2];
                                    } else {
                                        var num = (max / 300) * 3;
                                        return val[2] / num;
                                    }
                                },
                                color: function (val) {
                                    var colorList = ['rgb(108,208,224)', "rgb(87,104,116)", 'rgb(241,103,112)', "rgb(247,187,202)", "rgb(50,197,233)", "rgb(235,163,138)", "rgb(165,208,188)", "rgb(142,176,154)", "rgb(157,150,245)", "rgb(255,219,92)"];
                                    return colorList[val.data[0]];
                                },
                                data: this.applierPatentStatusEchart.y2
                            }]
                        };
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                } else if (this.menuItem == "5") {
                    /*申请人分析-申请人发明授权率*/
                } else if (this.menuItem == "6") {
                    /*申请人分析-申请人申请趋势分析*/
                    var data = this.$refs.applierTrendRef.getEchartObj();
                    var option = data.getOption();
                    data.clear();
                    if (this.echartActive == "0") {
                        option = {
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: this.applierTrendEchart.legend
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: this.applierTrendEchart.x
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: []
                        };
                        for (var i = 0; i < this.applierTrendEchart.y1.length; i++) {
                            var item = {
                                name: this.applierTrendEchart.y1[i].company,
                                type: 'line',
                                barWidth:50,
                                stack:this.applierTrendEchart.y1[i].company,
                                itemStyle:{
                                  normal:{
                                    color:this.echartColor[i]
                                  }
                                },
                                data: this.applierTrendEchart.y1[i].data
                            };
                            option.series.push(item);
                        }
                    } else if (this.echartActive == "1") {
                        option = {
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: this.applierTrendEchart.legend
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: this.applierTrendEchart.x
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: []
                        };
                        for (var i = 0; i < this.applierTrendEchart.y1.length; i++) {
                            var item = {
                                name: this.applierTrendEchart.y1[i].company,
                                type: 'bar',
                                stack: '总量',
                                barWidth:50,
                                itemStyle:{
                                  normal:{
                                    color:this.echartColor[i]
                                  }
                                },
                                data: this.applierTrendEchart.y1[i].data
                            };
                            option.series.push(item);
                        }
                    } else if (this.echartActive == "2") {
                        var max = this.applierTrendEchart.max;
                        var lable = this.applierTrendEchart.legend;
                        option = {
                            title: {
                                text: '',
                                link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                            },
                            legend: {
                                data: ['Punch Card'],
                                left: 'right'
                            },
                            grid: {
                                left: '6%',
                                bottom: '3%',
                                right: '6%',
                                containLabel: true
                            },
                            tooltip: {
                                position: 'top',
                                formatter: function (params) {
                                    return lable[params.value[1]] + "专利数量:" + params.value[2];
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: this.applierTrendEchart.x,
                                boundaryGap: false,
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#999',
                                        type: 'dashed'
                                    }
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: this.applierTrendEchart.legend,
                                axisLine: {
                                    show: false
                                }
                            },
                            series: [{
                                name: 'Punch Card',
                                type: 'scatter',
                                symbolSize: function (val) {
                                    if (max < 10) {
                                        return val[2] * 5;
                                    } else if (max < 30) {
                                        return val[2] * 2;
                                    } else if (max < 70) {
                                        return val[2];
                                    } else {
                                        var num = (max / 300) * 3;
                                        return val[2] / num;
                                    }
                                },
                                color: function (val) {
                                    var colorList = ['rgb(108,208,224)', "rgb(87,104,116)", 'rgb(241,103,112)', "rgb(247,187,202)", "rgb(50,197,233)", "rgb(235,163,138)", "rgb(165,208,188)", "rgb(142,176,154)", "rgb(157,150,245)", "rgb(255,219,92)"];
                                    return colorList[val.data[0]];
                                },
                                data: this.applierTrendEchart.y2
                            }]
                        };
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                }
            } else if (this.activeMenu == "2") {
              if(this.menuItem == "0"){
                /*发明人分析-发明人排名*/
                var data = this.$refs.inventorRankRef.getEchartObj();
                var option = data.getOption();
                if(this.echartActive=="0"){
                  option.series[0].type = "bar";
                }else if(this.echartActive=="1"){
                  option.series[0].type = "line";
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem == "1"){
                /*发明人分析-主要发明人技术构成*/
                var data = this.$refs.mainInventorIpcRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option={
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: this.mainInventorIpcEchart.legend
                    },
                    grid: {
                        left: '6%',
                        right: '6%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.mainInventorIpcEchart.x
                    },
                    series: []
                  };
                  var num=this.mainInventorIpcEchart.y1.length;
                  for (var i=0; i<num ;i++){
                    var item={
                      name:this.mainInventorIpcEchart.y1[i].lable,
                      type: 'bar',
                      stack: '总量',
                      barWidth: 50,
                      itemStyle:{
                          normal:{
                            color:this.echartColor[i]
                          }
                      },
                      data: this.mainInventorIpcEchart.y1[i].data
                    };
                    option.series.push(item);
                  }
                }else if(this.echartActive=="1"){
                  var lable=this.mainInventorIpcEchart.x;
                  var max=this.mainInventorIpcEchart.max;
                  option = {
                      title: {
                          text: '',
                          link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                      },
                      legend: {
                          data: ['Punch Card'],
                          left: 'right'
                      },
                      grid: {
                          left: '6%',
                          bottom: '3%',
                          right: '6%',
                          containLabel: true
                      },
                      tooltip: {
                          position: 'top',
                          formatter: function (params) {
                              return lable[params.value[1]] + "专利数量:" + params.value[2];
                          }
                      },
                      xAxis: {
                          type: 'category',
                          data: this.mainInventorIpcEchart.x,
                          boundaryGap: false,
                          splitLine: {
                              show: true,
                              lineStyle: {
                                  color: '#999',
                                  type: 'dashed'
                              }
                          },
                          axisLabel: {
                              interval: 0,
                              rotate: 60,
                          },
                          axisLine: {
                              show: false
                          }
                      },
                      yAxis: {
                          type: 'category',
                          data: this.mainInventorIpcEchart.legend,
                          axisLine: {
                              show: false
                          }
                      },
                      series: [{
                          name: 'Punch Card',
                          type: 'scatter',
                          symbolSize: function (val) {
                              if (max < 10) {
                                  return val[2] * 5;
                              } else if (max < 30) {
                                  return val[2] * 2;
                              } else if (max < 70) {
                                  return val[2];
                              } else {
                                  var num = (max / 300) * 3;
                                  return val[2] / num;
                              }
                          },
                          color: function (val) {
                              var colorList = ['rgb(108,208,224)', "rgb(87,104,116)", 'rgb(241,103,112)', "rgb(247,187,202)", "rgb(50,197,233)", "rgb(235,163,138)", "rgb(165,208,188)", "rgb(142,176,154)", "rgb(157,150,245)", "rgb(255,219,92)"];
                              return colorList[val.data[0]];
                          },
                          data: this.mainInventorIpcEchart.y2
                      }]
                  };
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem == "2"){
                /*发明人分析-主要发明人专利类型分布*/
                var data = this.$refs.mainInventorPatenttypeRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem == "3"){
                /*发明人分析-主要发明人专利法律效力*/
                var data = this.$refs.mainInventorPatentstatusRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });

              }else if(this.menuItem == "4"){
                /*发明人分析-主要发明人申请趋势*/
                var data = this.$refs.mainInventorApplyTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem == "5"){
                /*发明人分析-主要发明人公开趋势*/
                var data = this.$refs.mainInventorPublicTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }

            }else if (this.activeMenu == "3") {
              if(this.menuItem == "0"){
                /*区域分析-申请人归属国分布*/
                var data = this.$refs.applierCountryRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if (this.echartActive == "0") {
                    option = {
                        visualMap: {
                            min: 0,
                            max: this.applierCountryEchart.max,
                            text: ['High', 'Low'],
                            realtime: true,
                            calculable: true,
                            color: ['orangered', 'yellow', 'lightskyblue']
                        },
                        series: [
                            {
                                name: 'World Population (2010)',
                                type: 'map',
                                mapType: 'world',
                                roam: true,
                                itemStyle: {
                                    emphasis: { label: { show: true } }
                                },
                                data: this.applierCountryEchart.pic1
                            }
                        ]
                    };
                } else if (this.echartActive == "1") {
                    option = {
                        color:['rgb(0,153,204)'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: this.applierCountryEchart.pic2.xlist,
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '专利数量',
                                type: 'bar',
                                barWidth: 30,
                                data: this.applierCountryEchart.pic2.ylist
                            }
                        ]
                    };
                    option.series[0].barWidth = this.widthSet(this.applierCountryEchart.pic2.xlist);
                } else if (this.echartActive == "2") {
                    option = {
                        color:['rgb(0,153,204)'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: this.applierCountryEchart.pic2.xlist,
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '专利数量',
                                type: 'line',
                                barWidth: 30,
                                data: this.applierCountryEchart.pic2.ylist
                            }
                        ]
                    };
                    option.series[0].barWidth = this.widthSet(this.applierCountryEchart.pic2.xlist);
                }
                data.setOption(option, true);
              }else if(this.menuItem == "1"){
                /*区域分析-全国专利分布*/
                var data = this.$refs.countrywidePatentRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  var max=this.countrywidePatentEchart.max;
                  option={
                    tooltip : {
                        trigger: 'item'
                    },
                    dataRange: {
                        orient: 'vertical',
                        min: 0,
                        max: max,
                        text: ['High', 'Low'],
                        splitNumber: 0,
                        color: ['orangered', 'yellow', 'lightskyblue']
                    },
                    series: [{
                        name: '中国',
                        type: 'map',
                        mapType: 'china',
                        mapLocation: {
                            x: 'left'
                        },
                        selectedMode: 'multiple',
                        itemStyle: {
                            normal: { label: { show: true } },
                            emphasis: { label: { show: true } }
                        },
                        data: this.countrywidePatentEchart.y1
                    }]
                  };
                }else if(this.echartActive=="1"){
                  var width=this.widthSet(this.countrywidePatentEchart.x);
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.countrywidePatentEchart.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'专利数量',
                            type:'bar',
                            barWidth: width,
                            data:this.countrywidePatentEchart.y2
                        }
                    ]
                  };
                }else if(this.echartActive=="2"){
                  var width=this.widthSet(this.countrywidePatentEchart.x);
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.countrywidePatentEchart.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'专利数量',
                            type:'line',
                            barWidth: width,
                            data:this.countrywidePatentEchart.y2
                        }
                    ]
                  };
                }
                data.setOption(option, true);
              }else if(this.menuItem == "2"){
                /*区域分析-各国专利分布*/
                var data = this.$refs.everyCountryPatentRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  var max=this.everyCountryPatentEchart.max;
                  option={
                    visualMap: {
                        min: 0,
                        max: max,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        color: ['orangered', 'yellow', 'lightskyblue']
                    },
                    series: [
                        {
                            name: 'World Population (2010)',
                            type: 'map',
                            mapType: 'world',
                            roam: true,
                            itemStyle: {
                                emphasis: { label: { show: true } }
                            },
                            data: this.everyCountryPatentEchart.y1
                        }
                    ]
                  };
                }else if(this.echartActive=="1"){
                  var width=this.widthSet(this.everyCountryPatentEchart.x);
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.everyCountryPatentEchart.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'专利数量',
                            type:'bar',
                            barWidth: width,
                            data:this.everyCountryPatentEchart.y2
                        }
                    ]
                  };
                }else if(this.echartActive=="2"){
                  var width=this.widthSet(this.everyCountryPatentEchart.x);
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.everyCountryPatentEchart.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'专利数量',
                            type:'line',
                            barWidth: width,
                            data:this.everyCountryPatentEchart.y2
                        }
                    ]
                  };
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="3"){
                /*区域分析-外国在华申请分布*/
                var data = this.$refs.foreignApplyInChinaRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  var max=this.foreignApplyInChinaEchart.max;
                  option={
                    visualMap: {
                        min: 0,
                        max: max,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        color: ['orangered', 'yellow', 'lightskyblue']
                    },
                    series: [
                        {
                            name: 'World Population (2010)',
                            type: 'map',
                            mapType: 'world',
                            roam: true,
                            itemStyle: {
                                emphasis: { label: { show: true } }
                            },
                            data: this.foreignApplyInChinaEchart.y1
                        }
                    ]
                  };
                }else if(this.echartActive=="1"){
                  var width=this.widthSet(this.foreignApplyInChinaEchart.x);
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.foreignApplyInChinaEchart.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'专利数量',
                            type:'bar',
                            barWidth: width,
                            data:this.foreignApplyInChinaEchart.y2
                        }
                    ]
                  };
                }else if(this.echartActive=="2"){
                  var width=this.widthSet(this.foreignApplyInChinaEchart.x);
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.foreignApplyInChinaEchart.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 60,
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'专利数量',
                            type:'line',
                            barWidth: width,
                            data:this.foreignApplyInChinaEchart.y2
                        }
                    ]
                  };
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="4"){
                /*区域分析-主要国家IPC分布*/
              }else if(this.menuItem=="5"){
                /*区域分析-主要国家申请趋势*/
                var data = this.$refs.mainCountryApplyTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });

              }
            }else if (this.activeMenu == "4"){

            }else if(this.activeMenu == "5"){
              if(this.menuItem=="0"){
                /*趋势分析-申请趋势*/
                var data = this.$refs.applyTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option.series[0].type="line";
                }else if(this.echartActive=="1"){
                  option.series[0].type="bar";
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="1"){
                /*趋势分析-公开趋势*/
                var data = this.$refs.publicTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option.series[0].type="line";
                }else if(this.echartActive=="1"){
                  option.series[0].type="bar";
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="2"){
                /*趋势分析-授权趋势*/
                var data = this.$refs.authorizeTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option.series[0].type="line";
                }else if(this.echartActive=="1"){
                  option.series[0].type="bar";
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }
            }else if(this.activeMenu == "6"){
              if(this.menuItem=="0"){
                /*法律状态分析-各专利类型分布*/
                var data = this.$refs.patenttypeStatusRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option.series[0].type="bar";
                }else if(this.echartActive=="1"){
                  option.series[0].type="line";
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="1"){
                /*法律状态分析-法律效力分布*/
                var data = this.$refs.statusEffectRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option={
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: this.patenttypeStatusEchart.legend
                    },
                    color:["rgb(33,150,243)","rgb(76,175,80)","rgb(205,220,57)"],
                    series: [
                        {
                            name: '专利数量',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: this.patenttypeStatusEchart.y1,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                  };
                }else if(this.echartActive=="1"){
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.patenttypeStatusEchart.legend,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '专利数量',
                            type: 'bar',
                            barWidth: 50,
                            data: this.patenttypeStatusEchart.y2
                        }
                    ]
                  };
                }else if(this.echartActive=="2"){
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.patenttypeStatusEchart.legend,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '专利数量',
                            type: 'line',
                            barWidth: 50,
                            data: this.patenttypeStatusEchart.y2
                        }
                    ]
                  };
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="2"){
                /*法律状态分析-当前法律状态分布*/
                var data = this.$refs.nowStatusRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option.series[0].type="bar";
                }else if(this.echartActive=="1"){
                  option.series[0].type="line";
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="3"){
                /*法律状态分析-授权状态分布*/
                var data = this.$refs.authStatusRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  option={
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: this.authStatusEchart.legend
                    },
                    color:["rgb(33,150,243)","rgb(76,175,80)","rgb(205,220,57)"],
                    series: [
                        {
                            name: '专利数量',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: this.authStatusEchart.y1,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                  };
                }else if(this.echartActive=="1"){
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.authStatusEchart.legend,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '专利数量',
                            type: 'bar',
                            barWidth: 50,
                            data: this.authStatusEchart.y2
                        }
                    ]
                  };
                }else if(this.echartActive=="2"){
                  option={
                    color: ['rgb(0,153,204)'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.authStatusEchart.legend,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '专利数量',
                            type: 'line',
                            barWidth: 50,
                            data: this.authStatusEchart.y2
                        }
                    ]
                  };
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="4"){
                /*法律状态分析-各专利类型申请趋势*/
                var data = this.$refs.everyApplyTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="5"){
                /*法律状态分析-各专利类型公开趋势*/
                var data = this.$refs.everyPublicTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }
            }else if(this.activeMenu == "7"){
              if(this.menuItem=="0"){
                /*代理人/机构分析-代理机构排名*/
              }else if(this.menuItem=="1"){
                /*代理人/机构分析-代理机构专利申请趋势*/
                var data = this.$refs.agentApplyTrendRef.getEchartObj();
                var option = data.getOption();
                data.clear();
                if(this.echartActive=="0"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="line";
                    option.series[i].stack=option.series[i].name;
                  }
                }else if(this.echartActive=="1"){
                  for(var i=0;i<option.series.length;i++){
                    option.series[i].type="bar";
                    option.series[i].stack="总量";
                  }
                }
                data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
              }else if(this.menuItem=="2"){

              }
            }else if (this.activeMenu == "8") {
                console.log('----------------88888888888888888--------------------');
                this.returnsPage()
            }
        },
        /*ipc切换*/
        ipcTabStyle(index){
            if (this.ipcActive == index) {
                return { color: "#ffffff", background: "#00C1DE" }
            } else {
                return { color: "#828282", background: "#ffffff" }
            }
        },
        ipcTabChange(index){
            this.ipcActive = index;
            this.ipcTabStyle(index);
            if (this.activeMenu == "1" && this.menuItem == "2") {
                /*申请人分析-申请人IPC分布*/
                this.applierIpc();
            }else if(this.activeMenu == "3" && this.menuItem == "4"){
              this.mainCountryIpc();
            }else if(this.activeMenu == "4" && this.menuItem == "0"){
              /*技术结构分析-专利IPC分析*/
              this.patentIpc();
            }else if(this.activeMenu == "4" && this.menuItem == "2"){
              /*技术结构分析-外国在华专利IPC分布*/
              this.foreignInChinaPatent();
            }else if(this.activeMenu == "4" && this.menuItem == "3"){
              /*技术结构分析-技术领先国家IPC分布*/
              this.advancedCountryIpc();
            }else if(this.activeMenu == "4" && this.menuItem == "4"){
              /*技术结构分析-发明专利IPC 分布*/
              this.fmPatentIpc();
            }else if(this.activeMenu == "4" && this.menuItem == "5"){
              /*技术结构分析-主要IPC趋势分析*/
              this.mainIpcTrend();
            }else if(this.activeMenu == "7" && this.menuItem == "4"){
              this.agentIpc();
            }
        },
        /*echart柱状图宽度设置*/
        widthSet(data){
            var width = "15px";
            if (data.length > 0 && data.length < 5) {
                width = "50px";
            } else if (data.length < 10) {
                width = "40px";
            } else if (data.length < 15) {
                width = "30px";
            } else {
                width = "15px";
            }
            return width;
        },
        /*申请人分析-申请人排名*/
        applierRank(){
            var that = this;
            console.log("---------申请人分析-申请人排名-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierRank", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierRankTabledata = d.data.table;
                    that.applierRankEchartDesc = d.data.echart.desc;
                    var data = that.$refs.applierRankRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        var width = that.widthSet(d.data.echart.x);
                        data.clear();
                        option={
                          color: ['rgb(0,153,204)'],
                          tooltip: {
                              trigger: 'axis',
                              axisPointer: {
                                  type: 'shadow'
                              }
                          },
                          grid: {
                              left: '3%',
                              right: '4%',
                              bottom: '3%',
                              containLabel: true
                          },
                          xAxis: [
                              {
                                  type: 'category',
                                  data: d.data.echart.x,
                                  axisLabel: {
                                      interval: 0,
                                      rotate: 60,
                                  },
                                  axisTick: {
                                      alignWithLabel: true
                                  }
                              }
                          ],
                          yAxis: [
                              {
                                  type: 'value'
                              }
                          ],
                          series: [
                              {
                                  name: '专利数量',
                                  type: 'bar',
                                  barWidth: width,
                                  data: d.data.echart.y
                              }
                          ]
                        };
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierRankShow = false;
                }
            });
        },
        /*申请人分析-申请人归属国分布*/
        applierCity(){
            var that = this;
            console.log("---------申请人分析-申请人归属国分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierCity", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierCityEchart = d.data.echart;
                    that.applierCityDesc = d.data.echart.desc;
                    that.applierCityTabledata = d.data.table;
                    var data = that.$refs.applierCityRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            visualMap: {
                                min: 0,
                                max: d.data.echart.max,
                                text: ['High', 'Low'],
                                realtime: true,
                                calculable: true,
                                color: ['orangered', 'yellow', 'lightskyblue']
                            },
                            series: [
                                {
                                    name: 'World Population (2010)',
                                    type: 'map',
                                    mapType: 'world',
                                    roam: true,
                                    itemStyle: {
                                        emphasis: { label: { show: true } }
                                    },
                                    data: d.data.echart.pic1
                                }
                            ]
                        };
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierCityShow = false;
                }
            })
        },
        /*申请人分析-申请人IPC分布*/
        applierIpc(){
            var that = this;
            console.log("---------申请人分析-申请人IPC分布-----------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            console.log(params);
            this.loading = true;
            this.$post("/web/patentycCtl/applierIpc", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierIpcTabledata = d.data.table;
                    var data = that.$refs.applierIpcRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: d.data.echart.legend
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: {
                                type: 'value'
                            },
                            xAxis: [{
                                type: 'category',
                                data: d.data.echart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                            }],
                            series: []
                        };
                        var num = d.data.echart.y.length;
                        for (var i = 0; i < num; i++) {
                            var item = {
                                name: d.data.echart.y[i].ipc,
                                type: 'bar',
                                barWidth: 50,
                                stack: '总量',
                                itemStyle:{
                                  normal:{
                                    color:that.echartColor[i]
                                  }
                                },
                                data: d.data.echart.y[i].data
                            };
                            option.series.push(item);
                        }
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierIpcShow = false;
                }
            })
        },
        /*申请人分析-申请人专利类型分布*/
        applierPatenttype(){
            var that = this;
            console.log("---------申请人分析-申请人专利类型分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierPatenttype", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierPatenttypeTabledata = d.data.table;
                    var num = d.data.echart.y.length;
                    var data = that.$refs.applierPatenttypeRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: ["外观设计专利", "发明申请专利", "实用新型专利"]
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: {
                                type: 'value'
                            },
                            xAxis: {
                                type: 'category',
                                data: d.data.echart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                            },
                            series: []
                        };
                        for (var i = 0; i < num; i++) {
                            var item = {
                                name: d.data.echart.y[i].patenttype,
                                type: 'bar',
                                stack: '总量',
                                barWidth: 50,
                                itemStyle:{
                                  normal:{
                                    color:that.echartColor[i]
                                  }
                                },
                                data: d.data.echart.y[i].data
                            };
                            option.series.push(item);
                        }
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierPatenttypeShow = false;
                }
            });

        },
        /*申请人分析-申请人专利法律效力*/
        applierPatentStatus(){
            var that = this;
            console.log("---------申请人分析-申请人专利法律效力-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierPatentStatus", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierPatentStatusTabledata = d.data.table;
                    that.applierPatentStatusEchart = d.data.echart;
                    var num = d.data.echart.y1.length;
                    var data = that.$refs.applierPatentStatusRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: ['无效', '有效', '在审']
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: [{
                                type: 'value',
                            }],
                            xAxis: [{
                                type: 'category',
                                data: d.data.echart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                }
                            }],
                            series: []
                        };
                        for (var i = 0; i < num; i++) {
                            var item = {
                                name: d.data.echart.y1[i].patenttype,
                                type: 'bar',
                                stack: '总量',
                                barWidth: 50,
                                itemStyle:{
                                  normal:{
                                    color:that.echartColor[i]
                                  }
                                },
                                data: d.data.echart.y1[i].data
                            };
                            option.series.push(item);
                        }
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierPatentStatusShow = false;
                }
            });
        },
        /*申请人分析-申请人发明授权率*/
        applierAuthRate(){
            var that = this;
            console.log("---------申请人分析-申请人发明授权率-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierAuthRate", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierAuthRateTabledata = d.data.table;
                    var data = that.$refs.applierAuthRateRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: ['未授权', '曾授权', '授权率']
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: [
                                {
                                    type: 'value',
                                    name: '专利数量',
                                    axisLabel: {
                                        formatter: '{value} '
                                    }
                                },
                                {
                                    type: 'value',
                                    name: '授权率',
                                    min: 0,
                                    max: 100,
                                    interval: 20,
                                    axisLabel: {
                                        formatter: '{value} %'
                                    }
                                }
                            ],
                            xAxis: {
                                type: 'category',
                                data: d.data.echart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                            },
                            series: [
                                {
                                    name: '未授权',
                                    type: 'bar',
                                    stack: '总量',
                                    itemStyle:{
                                      normal:{
                                        color:that.echartColor[0]
                                      }
                                    },
                                    data: d.data.echart.y[0].data
                                },
                                {
                                    name: '曾授权',
                                    type: 'bar',
                                    stack: '总量',
                                    barWidth: 60,
                                    itemStyle:{
                                      normal:{
                                        color:that.echartColor[1]
                                      }
                                    },
                                    data: d.data.echart.y[1].data
                                },
                                {
                                    name: '授权率',
                                    type: 'line',
                                    yAxisIndex: 1,
                                    itemStyle:{
                                      normal:{
                                        color:that.echartColor[2]
                                      }
                                    },
                                    data: d.data.echart.y[2].data
                                }
                            ]
                        };
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierAuthRateShow = false;
                }
            });
        },
        /*申请人分析-申请人申请趋势分析*/
        applierTrend(){
            var that = this;
            console.log("---------申请人分析-申请人申请趋势分析-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierTrend", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierTrendTabledata = d.data.table;
                    that.applierTrendEchart = d.data.echart;
                    var num = d.data.echart.y1.length;
                    var data = that.$refs.applierTrendRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: d.data.echart.legend
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: d.data.echart.x
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: []
                        };
                        for (var i = 0; i < num; i++) {
                            var item = {
                                name: d.data.echart.y1[i].company,
                                type: 'line',
                                barWidth:50,
                                itemStyle:{
                                  normal:{
                                    color:that.echartColor[i]
                                  }
                                },
                                data: d.data.echart.y1[i].data
                            };
                            option.series.push(item);
                        }
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierTrendShow = false;
                }
            });
        },
        /*发明人分析-发明人排名*/
        inventorRank(){
            var that=this;
            console.log("---------发明人分析-发明人排名-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/inventorRank", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.inventorRankTabledata = d.data.table;
                  that.inventorRankEchartDesc = d.data.echart.desc;
                  var data = that.$refs.inventorRankRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      var width=that.widthSet(d.data.echart.x);
                      option={
                        color: ['rgb(0,153,204)'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: d.data.echart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                                axisTick: {
                                    alignWithLabel: true
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '专利数量',
                                type: 'bar',
                                barWidth: width,
                                data: d.data.echart.y
                            }
                        ]
                      };
                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                }else{
                  that.inventorRankShow = false;
                }
            });

        },
        /*发明人分析-主要发明人技术构成*/
        mainInventorIpc(){
            var that=this;
            console.log("---------发明人分析-主要发明人技术构成-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainInventorIpc", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.mainInventorIpcTabledata = d.data.table;
                  that.mainInventorIpcEchart = d.data.echart;
                  var data = that.$refs.mainInventorIpcRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      if(that.echartActive=='0'){
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {
                                data: d.data.echart.legend
                            },
                            grid: {
                                left: '6%',
                                right: '6%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: {
                                type: 'value'
                            },
                            xAxis: [{
                                type: 'category',
                                data: d.data.echart.x,
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                                splitLine:{
                                  show:false,
                                }
                            }],
                            series: []
                        };
                        var num=d.data.echart.y1.length;
                        for (var i=0; i<num ;i++){
                          var item={
                            name: d.data.echart.y1[i].ipc,
                            type: 'bar',
                            stack: '总量',
                            barWidth: 50,
                            itemStyle:{
                                normal:{
                                  color:that.echartColor[i]
                                }
                            },
                            data: d.data.echart.y1[i].data
                          };
                          option.series.push(item);
                        }
                      }else if(that.echartActive=='1'){
                        var lable=d.data.echart.x;
                        var max=d.data.echart.max;
                        option = {
                            title: {
                                text: '',
                                link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                            },
                            legend: {
                                data: ['Punch Card'],
                                left: 'right'
                            },
                            grid: {
                                left: '6%',
                                bottom: '3%',
                                right: '6%',
                                containLabel: true
                            },
                            tooltip: {
                                position: 'top',
                                formatter: function (params) {
                                    return lable[params.value[1]] + "专利数量:" + params.value[2];
                                }
                            },
                            xAxis: {
                                type: 'category',
                                data: d.data.echart.x,
                                boundaryGap: false,
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#999',
                                        type: 'dashed'
                                    }
                                },
                                axisLabel: {
                                    interval: 0,
                                    rotate: 60,
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: d.data.echart.legend,
                                axisLine: {
                                    show: false
                                }
                            },
                            series: [{
                                name: 'Punch Card',
                                type: 'scatter',
                                symbolSize: function (val) {
                                    if (max < 10) {
                                        return val[2] * 5;
                                    } else if (max < 30) {
                                        return val[2] * 2;
                                    } else if (max < 70) {
                                        return val[2];
                                    } else {
                                        var num = (max / 300) * 3;
                                        return val[2] / num;
                                    }
                                },
                                color: function (val) {
                                    var colorList = ['rgb(108,208,224)', "rgb(87,104,116)", 'rgb(241,103,112)', "rgb(247,187,202)", "rgb(50,197,233)", "rgb(235,163,138)", "rgb(165,208,188)", "rgb(142,176,154)", "rgb(157,150,245)", "rgb(255,219,92)"];
                                    return colorList[val.data[0]];
                                },
                                data: d.data.echart.y2
                            }]
                        };
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainInventorIpcShow=false;
                }
            });
        },
        /*发明人分析-主要发明人专利类型分布*/
        mainInventorPatenttype(){
            var that=this;
            console.log("---------发明人分析-主要发明人专利类型分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainInventorPatenttype", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.mainInventorPatenttypeTabledata=d.data.table;
                  var data = that.$refs.mainInventorPatenttypeRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      option={
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            data: ['外观设计专利', '发明申请专利', '实用新型专利']
                        },
                        grid: {
                            left: '6%',
                            right: '6%',
                            bottom: '3%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value'
                        },
                        xAxis: {
                            type: 'category',
                            data: d.data.echart.x
                        },
                        series: []
                      };
                      for (var i=0;i<d.data.echart.y.length;i++){
                        var item={
                          name: d.data.echart.y[i].patenttype,
                          type: 'bar',
                          stack: '总量',
                          barWidth: 50,
                          itemStyle:{
                              normal:{
                                color:that.echartColor[i]
                              }
                          },
                          data: d.data.echart.y[i].data
                        };
                        option.series.push(item);
                      }
                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainInventorPatenttypeShow=false;
                }

            });
        },
        /*发明人分析-主要发明人专利法律效力*/
        mainInventorPatentstatus(){
            var that=this;
            console.log("---------发明人分析-主要发明人专利法律效力-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainInventorPatentstatus", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.mainInventorPatentstatusTabledata=d.data.table;
                  var data = that.$refs.mainInventorPatentstatusRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      option={
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            data: ['无效', '有效', '在审']
                        },
                        grid: {
                            left: '6%',
                            right: '6%',
                            bottom: '3%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value'
                        },
                        xAxis: {
                            type: 'category',
                            data: d.data.echart.x
                        },
                        series: []
                      };
                      for (var i=0;i<d.data.echart.y.length;i++){
                        var item={
                          name: d.data.echart.y[i].patenttype,
                          type: 'bar',
                          stack: '总量',
                          barWidth: 50,
                          itemStyle:{
                            normal:{
                              color:that.echartColor[i]
                            }
                          },
                          data: d.data.echart.y[i].data
                        };
                        option.series.push(item);
                      }

                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainInventorPatentstatusShow=false;
                }
            });
        },
        /*发明人分析-主要发明人申请趋势*/
        mainInventorApplyTrend(){
            var that=this;
            console.log("---------发明人分析-主要发明人申请趋势-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainInventorApplyTrend", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.mainInventorApplyTrendTabledata=d.data.table;
                  var data = that.$refs.mainInventorApplyTrendRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      option={
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            data: d.data.echart.legend
                        },
                        grid: {
                            left: '6%',
                            right: '6%',
                            bottom: '3%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value'
                        },
                        xAxis: {
                            type: 'category',
                            data:d.data.echart.x
                        },
                        series: []
                      };
                      for(var i=0;i<d.data.echart.y.length;i++){
                        var item={
                          name: d.data.echart.y[i].inventor,
                          type: 'line',
                          stack: d.data.echart.y[i].inventor,
                          barWidth: 50,
                          itemStyle:{
                            normal:{
                              color:that.echartColor[i]
                            }
                          },
                          data:d.data.echart.y[i].data
                        };
                        option.series.push(item);
                      }
                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainInventorApplyTrendShow=false;
                }
            });
        },
        /*发明人分析-主要发明人公开趋势*/
        mainInventorPublicTrend(){
            var that=this;
            console.log("--------发明人分析-主要发明人公开趋势------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainInventorPublicTrend", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.mainInventorPublicTrendTabledata=d.data.table;
                  var data = that.$refs.mainInventorPublicTrendRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      option={
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            data: d.data.echart.legend
                        },
                        grid: {
                            left: '6%',
                            right: '6%',
                            bottom: '3%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value'
                        },
                        xAxis: {
                            type: 'category',
                            data:d.data.echart.x
                        },
                        series: []
                      };
                      for(var i=0;i<d.data.echart.y.length;i++){
                        var item={
                          name: d.data.echart.y[i].inventor,
                          type: 'line',
                          stack: d.data.echart.y[i].inventor,
                          barWidth:50,
                          itemStyle:{
                            normal:{
                              color:that.echartColor[i]
                            }
                          },
                          data:d.data.echart.y[i].data
                        };
                        option.series.push(item);
                      }
                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainInventorPublicTrendShow=false;
                }
            });
        },
        /*区域分析-申请人归属国分布*/
        applierCountry(){
            var that=this;
            console.log("---------区域分析-申请人归属国分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applierCity", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                    that.applierCountryEchart = d.data.echart;
                    that.applierCountryDesc = d.data.echart.desc;
                    that.applierCountryTabledata = d.data.table;
                    var data = that.$refs.applierCountryRef.getEchartObj();
                    if (data) {
                        var option = data.getOption();
                        data.clear();
                        option = {
                            visualMap: {
                                min: 0,
                                max: d.data.echart.max,
                                text: ['High', 'Low'],
                                realtime: true,
                                calculable: true,
                                color: ['orangered', 'yellow', 'lightskyblue']
                            },
                            series: [
                                {
                                    name: 'World Population (2010)',
                                    type: 'map',
                                    mapType: 'world',
                                    roam: true,
                                    itemStyle: {
                                        emphasis: { label: { show: true } }
                                    },
                                    data: d.data.echart.pic1
                                }
                            ]
                        };
                        data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                    }
                } else {
                    that.applierCountryShow = false;
                }
            })
        },
        /*区域分析-全国专利分布*/
        countrywidePatent(){
            var that=this;
            console.log("---------区域分析-全国专利分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/countrywidePatnet", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.countrywidePatentTabledata=d.data.table;
                  that.countrywidePatentEchart=d.data.echart;
                  that.countrywidePatentDesc=d.data.echart.desc;
                  var data = that.$refs.countrywidePatentRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      var max=d.data.echart.max;
                      option={
                        tooltip : {
                            trigger: 'item'
                        },
                        dataRange: {
                            orient: 'vertical',
                            min: 0,
                            max: max,
                            text: ['High', 'Low'],
                            splitNumber: 0,
                            color: ['orangered', 'yellow', 'lightskyblue']
                        },
                        series: [{
                            name: '中国',
                            type: 'map',
                            mapType: 'china',
                            mapLocation: {
                                x: 'left'
                            },
                            selectedMode: 'multiple',
                            itemStyle: {
                                normal: { label: { show: true } },
                                emphasis: { label: { show: true } }
                            },
                            data: d.data.echart.y1
                        }]
                      };
                      console.log(d.data.echart.y1,'==================================');
                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });

                  }
                }else{
                  that.countrywidePatentShow=false;
                }
            });
        },
        /*区域分析-各国专利分布*/
        everyCountryPatent(){
            var that=this;
            console.log("---------区域分析-各国专利分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/everyCountryPatent", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.everyCountryPatentTabledata=d.data.table;
                  that.everyCountryPatentEchart=d.data.echart;
                  that.everyCountryPatentDesc=d.data.echart.desc;
                  var data = that.$refs.everyCountryPatentRef.getEchartObj();
                  if (data) {
                      var option = data.getOption();
                      data.clear();
                      var max=d.data.echart.max;
                      option={
                        visualMap: {
                            min: 0,
                            max: max,
                            text: ['High', 'Low'],
                            realtime: false,
                            calculable: true,
                            color: ['orangered', 'yellow', 'lightskyblue']
                        },
                        series: [
                            {
                                name: 'World Population (2010)',
                                type: 'map',
                                mapType: 'world',
                                roam: true,
                                itemStyle: {
                                    emphasis: { label: { show: true } }
                                },
                                data: d.data.echart.y1
                            }
                        ]
                      };
                      data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.everyCountryPatentShow=false;
                }
            });
        },
        /*区域分析-外国在华申请分布*/
        foreignApplyInChina(){
            var that=this;
            console.log("---------区域分析-外国在华申请分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/foreignApplyInChina",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.foreignApplyInChinaTabledata=d.data.table;
                  that.foreignApplyInChinaEchart=d.data.echart;
                  that.foreignApplyInChinaDesc=d.data.echart.desc;
                  var data = that.$refs.foreignApplyInChinaRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var max=d.data.echart.max;
                    option={
                      visualMap: {
                          min: 0,
                          max: max,
                          text: ['High', 'Low'],
                          realtime: false,
                          calculable: true,
                          color: ['orangered', 'yellow', 'lightskyblue']
                      },
                      series: [
                          {
                              name: 'World Population (2010)',
                              type: 'map',
                              mapType: 'world',
                              roam: true,
                              itemStyle: {
                                  emphasis: { label: { show: true } }
                              },
                              data: d.data.echart.y1
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.foreignApplyInChinaShow=false;
                }
            });
        },
        /*区域分析-主要国家IPC分布*/
        mainCountryIpc(){
            var that=this;
            console.log("---------区域分析-主要国家IPC分布-----------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainCountryIpc", params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.mainCountryIpcTabledata=d.data.table;
                  var data = that.$refs.mainCountryIpcRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth:50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data: d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainCountryIpcShow=false;
                }
            });
        },
        /*区域分析-主要国家申请趋势*/
        mainCountryApplyTrend(){
            var that=this;
            console.log("--------区域分析-主要国家申请趋势------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainCountryApplyTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.mainCountryApplyTrendTabledata=d.data.table;
                  var data = that.$refs.mainCountryApplyTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data:d.data.echart.x
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data: d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.mainCountryApplyTrendShow=false;
                }
            });
        },
        /*技术结构分析-专利IPC分析*/
        patentIpc(){
            var that=this;
            console.log("---------技术结构分析-专利IPC分析-----------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/patentIpc",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.patentIpcTabledata=d.data.table;
                  that.patentIpcDesc=d.data.echart.desc;
                  var data = that.$refs.patentIpcRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: width,
                              data: d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.patentIpcShow=false;
                }
            });
        },
        /*技术结构分析-外观设计分类分析*/
        wgsjPatent(){
            var that=this;
            console.log("---------技术结构分析-外观设计分类分析-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/wgsjPatent",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.wgsjPatentTabledata=d.data.table;
                  that.wgsjPatentDesc=d.data.echart.desc;
                  var data = that.$refs.wgsjPatentRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: width,
                              data: d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.wgsjPatentShow=false;
                }
            });
        },
        /*技术结构分析-外国在华专利IPC分布*/
        foreignInChinaPatent(){
            var that=this;
            console.log("----------技术结构分析-外国在华专利IPC分布----------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/foreignInChinaPatent",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.foreignInChinaPatentTabledata=d.data.table;
                  var data = that.$refs.foreignInChinaPatentRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data: d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.foreignInChinaPatentShow=false;
                }
            });
        },
        /*技术结构分析-技术领先国家IPC分布*/
        advancedCountryIpc(){
            var that=this;
            console.log("--------技术结构分析-技术领先国家IPC分布------------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainCountryIpc",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.advancedCountryIpcTabledata=d.data.table;
                  var data = that.$refs.advancedCountryIpcRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                            normal:{
                              color:that.echartColor[i]
                            }
                          },
                        data: d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.advancedCountryIpcShow=false;
                }
            });
        },
        /*技术结构分析-发明专利IPC 分布*/
        fmPatentIpc(){
            var that=this;
            console.log("--------技术结构分析-发明专利IPC 分布------------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/fmPatentIpc",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.fmPatentIpcTabledata=d.data.table;
                  that.fmPatentIpcDesc=d.data.echart.desc;
                  var data = that.$refs.fmPatentIpcRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: width,
                              data:d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.fmPatentIpcShow=false;
                }
            });
        },
        /*技术结构分析-主要IPC趋势分析*/
        mainIpcTrend(){
            var that=this;
            console.log("---------技术结构分析-主要IPC趋势分析-----------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainIpcTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if (d.status == 0 && d.data) {
                  that.mainIpcTrendTabledata=d.data.table;
                  var data = that.$refs.mainIpcTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data: d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else {
                  that.mainIpcTrendShow=false;
                }
            });
        },
        /*趋势分析-申请趋势*/
        applyTrend(){
            var that=this;
            console.log("--------趋势分析-申请趋势------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/applyTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.applyTrendDesc=d.data.echart.desc;
                  that.applyTrendTabledata=d.data.table;
                  var data = that.$refs.applyTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'line',
                              barWidth: width,
                              data: d.data.echart.data
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.applyTrendShow=false;
                }
            });
        },
        /*趋势分析-公开趋势*/
        publicTrend(){
            var that=this;
            console.log("----------趋势分析-公开趋势----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/publicTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.publicTrendDesc=d.data.echart.desc;
                  that.publicTrendTabledata=d.data.table;
                  var data = that.$refs.publicTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'line',
                              barWidth: width,
                              data: d.data.echart.data
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.publicTrendShow=false;
                }
            });
            /*返回的数据形式*/
            var result = {
                echart: {
                    desc: "",
                    x: ["2010", "2011", "2012"],
                    data: [10, 20, 30]
                },
                table: [
                    { rank: 1, year: "2010", patent: 200 }
                ]
            };
        },
        /*趋势分析-授权趋势*/
        authorizeTrend(){
            var that=this;
            console.log("-----------趋势分析-授权趋势---------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/authorizeTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.authorizeTrendDesc=d.data.echart.desc;
                  that.authorizeTrendTabledata=d.data.table;
                  var data = that.$refs.authorizeTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'line',
                              barWidth: width,
                              data: d.data.echart.data
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.authorizeTrendShow=false;
                }
            });
        },

        /*法律状态分析-各专利类型分布*/
        patenttypeStatus(){
            var that=this;
            console.log("---------法律状态分析-各专利类型分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/patenttypeStatus",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.patenttypeStatusDesc=d.data.echart.desc;
                  that.patenttypeStatusTabledata=d.data.table;
                  var data = that.$refs.patenttypeStatusRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: 50,
                              data: d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.patenttypeStatusShow=false;
                }
            });
        },
        /*法律状态分析-法律效力分布*/
        statusEffect(){
            var that=this;
            console.log("---------法律状态分析-法律效力分布-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/statusEffect",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.statusEffectDesc=d.data.echart.desc;
                  that.patenttypeStatusEchart=d.data.echart;
                  that.statusEffectTabledata=d.data.table;
                  var data = that.$refs.statusEffectRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      legend: {
                          orient: 'vertical',
                          left: 'left',
                          data: d.data.echart.legend
                      },
                      color:["rgb(33,150,243)","rgb(76,175,80)","rgb(205,220,57)"],
                      series: [
                          {
                              name: '专利数量',
                              type: 'pie',
                              radius: '55%',
                              center: ['50%', '60%'],
                              data: d.data.echart.y1,
                              itemStyle: {
                                  emphasis: {
                                      shadowBlur: 10,
                                      shadowOffsetX: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              }
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.statusEffectShow=false;
                }
            });
        },
        /*法律状态分析-当前法律状态分布*/
        nowStatus(){
            var that=this;
            console.log("--------法律状态分析-当前法律状态分布------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/nowStatus",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.nowStatusTabledata=d.data.table;
                  that.nowStatusDesc=d.data.echart.desc;
                  var data = that.$refs.nowStatusRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: width,
                              data: d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.nowStatusShow=false;
                }
            });
        },
        /*法律状态分析-授权状态分布*/
        authStatus(){
            var that=this;
            console.log("--------法律状态分析-授权状态分布------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/authStatus",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.authStatusEchart=d.data.echart;
                  that.authStatusDesc=d.data.echart.desc;
                  that.authStatusTabledata=d.data.table;
                  var data = that.$refs.authStatusRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      legend: {
                          orient: 'vertical',
                          left: 'left',
                          data: d.data.echart.legend
                      },
                      color:["rgb(33,150,243)","rgb(76,175,80)","rgb(205,220,57)"],
                      series: [
                          {
                              name: '专利数量',
                              type: 'pie',
                              radius: '55%',
                              center: ['50%', '60%'],
                              data: d.data.echart.y1,
                              itemStyle: {
                                  emphasis: {
                                      shadowBlur: 10,
                                      shadowOffsetX: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              }
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.authStatusShow=false;
                }
            });
        },

        /*法律状态分析-各专利类型申请趋势*/
        everyApplyTrend(){
            var that=this;
            console.log("---------法律状态分析-各专利类型申请趋势-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/everyApplyTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.everyApplyTrendTabledata=d.data.table;
                  var data = that.$refs.everyApplyTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data:d.data.echart.x,
                          boundaryGap: true,
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'line',
                        stack: d.data.echart.y[i].lable,
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data:d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.everyApplyTrendShow=false;
                }

            });
        },
        /*法律状态分析-各专利类型公开趋势*/
        everyPublicTrend(){
            var that=this;
            console.log("---------法律状态分析-各专利类型公开趋势-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/everyPublicTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.everyPublicTrendTabledata=d.data.table;
                  var data = that.$refs.everyPublicTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data:d.data.echart.x,
                          boundaryGap: true,
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'line',
                        stack: d.data.echart.y[i].lable,
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data:d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.everyPublicTrendShow=false;
                }
            });
        },
        /*代理人/机构分析-代理机构排名*/
        agentRank(){
            var that=this;
            console.log("--------代理人/机构分析-代理机构排名------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/agentRank",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.agentRankDesc=d.data.echart.desc;
                  that.agentRankTabledata=d.data.table;
                  var data = that.$refs.agentRankRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: width,
                              data: d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                                        window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.agentRankShow=false;
                }
            });
        },
        /*分析可视化*/
        ezReportUploadData(){
            var that=this;
            console.log("--------分析可视化前------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("web/patentycCtl/ezReportUploadData",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.dataUid=d.data.uid;
                  that.ReadyReport()
                  /*that.timer = setInterval(that.ReadyReport(), 1000);*/

                }else{
                  that.$message.error('分析失败,请重试!'); 
                  that.agentRankShow=false;
                }
            });
        },
        ReadyReport() {
            var that=this;
            console.log("--------分析可视化中------------");
            var params = { "uid": that.dataUid };
            this.loading = true;
            this.timer++;
            console.log(this.timer,'ssssssssssssssssssssss');
            this.$post("web/patentycCtl/ReadyReport",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0){
                    
                    that.Reporttype = true;
                    that.ezGetReport()
                }else{
                  if (that.timer == 20) {
                    that.loading = false;
                    return that.$message.error('分析失败,请重试!'); 
                  };
                  setTimeout(()=> {that.ReadyReport()}, 10000);
                  that.agentRankShow=false;
                }
            });
        },
        ezGetReport() {
            var that=this;
            console.log("--------分析可视化后------------");
            var params = { "uid": that.dataUid, "type": 'html', method: this.method };
            this.$post("web/patentycCtl/ezGetReport",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                if(d.status == 0){
                    that.srcIframe = d.data;

                }else{
                  that.agentRankShow=false;
                }
            });
        },
        /*代理人/机构分析-代理机构专利申请趋势*/
        agentApplyTrend(){
            var that=this;
            console.log("---------代理人/机构分析-代理机构专利申请趋势-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/agentApplyTrend",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.agentApplyTrendTabledata=d.data.table;
                  var data = that.$refs.agentApplyTrendRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data:d.data.echart.x,
                          boundaryGap: true,
                      },
                      series: []
                    };
                    for(var i=0;i<d.data.echart.y.length;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'line',
                        stack: d.data.echart.y[i].lable,
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data:d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                                        window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  thta.agentApplyTrendShow=false;
                }
            });
        },
        /*代理人/机构分析-代理机构专利类型分布*/
        agentPatenttype(){
            var that=this;
            console.log("--------------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/agentPatenttype",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.agentPatenttypeTabledata=d.data.table;
                  var data = that.$refs.agentPatenttypeRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data:d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    var num=d.data.echart.y.length;
                    for(var i=0;i<num;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data:d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.agentPatenttypeShow=false;
                }
            });
        },
        /*代理人/机构分析-代理机构发明授权率*/
        agentFmAuthorize(){
            var that=this;
            console.log("---------代理人/机构分析-代理机构发明授权率-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/agentFmAuthorize",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.agentFmAuthorizeTabledata=d.data.table;
                  var data = that.$refs.agentFmAuthorizeRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: [
                          {
                              type: 'value',
                              name: '专利数量',
                              axisLabel: {
                                  formatter: '{value} '
                              }
                          },
                          {
                              type: 'value',
                              name: '授权率',
                              min: 0,
                              max: 100,
                              interval: 20,
                              axisLabel: {
                                  formatter: '{value} %'
                              }
                          }
                      ],
                      xAxis: {
                          type: 'category',
                          data:d.data.echart.x,
                          axisLabel: {
                              interval: 0,
                              rotate: 60,
                          },
                      },
                      series: [
                          {
                              name: '未授权',
                              type: 'bar',
                              barWidth:50,
                              stack:"总量",
                              itemStyle:{
                                normal:{
                                  color:that.echartColor[0]
                                }
                              },
                              data: d.data.echart.y[0].data
                          },
                          {
                              name: '曾授权',
                              type: 'bar',
                              barWidth:50,
                              stack:"总量",
                              itemStyle:{
                                normal:{
                                  color:that.echartColor[1]
                                }
                              },
                              data: d.data.echart.y[1].data
                          },
                          {
                              name: '授权率',
                              type: 'line',
                              barWidth:50,
                              yAxisIndex: 1,
                              itemStyle:{
                                normal:{
                                  color:that.echartColor[2]
                                }
                              },
                              data: d.data.echart.y[2].data
                          }
                      ]
                    };

                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.agentFmAuthorizeShow=false;
                }
            });
        },
        /*代理人/机构分析-代理机构IPC分布*/
        agentIpc(){
            var that=this;
            console.log("---------代理人/机构分析-代理机构IPC分布-----------");
            var params = { search: this.search, ipcTab: this.ipcActive, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/agentIpc",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.agentIpcTabledata=d.data.table;
                  var data = that.$refs.agentIpcRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    var num=d.data.echart.y.length;
                    for(var i=0;i<num;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data: d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.agentIpcShow=false;
                }
            });
        },
        /*代理人/机构分析-代理人排名*/
        agentPersonRank(){
            var that=this;
            console.log("---------代理人/机构分析-代理人排名-----------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/agentPersonRank",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.agentPersonRankTabledata=d.data.table;
                  that.agentPersonRankDesc=d.data.echart.desc;
                  var data = that.$refs.agentPersonRankRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    var width=that.widthSet(d.data.echart.x);
                    option={
                      color: ['rgb(0,153,204)'],
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              data: d.data.echart.x,
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  interval: 0,
                                  rotate: 60,
                              }
                          }
                      ],
                      yAxis: [
                          {
                              type: 'value'
                          }
                      ],
                      series: [
                          {
                              name: '专利数量',
                              type: 'bar',
                              barWidth: width,
                              data: d.data.echart.y
                          }
                      ]
                    };
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else{
                  that.agentPersonRankShow=false;
                }
            });
        },
        /*代理人/机构分析-主要代理人专利类型分布*/
        mainAgentPatenttype(){
            var that=this;
            console.log("--------代理人/机构分析-主要代理人专利类型分布------------");
            var params = { search: this.search, obj: this.obj };
            this.loading = true;
            this.$post("/web/patentycCtl/mainAgentPatenttype",params).then(function (d) {
                console.log("---------------------------------------------");
                console.log(d);
                that.loading = false;
                if(d.status == 0 && d.data){
                  that.mainAgentPatenttypeTabledata=d.data.table;
                  var data = that.$refs.mainAgentPatenttypeRef.getEchartObj();
                  if(data){
                    var option = data.getOption();
                    data.clear();
                    option={
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: d.data.echart.legend
                      },
                      grid: {
                          left: '6%',
                          right: '6%',
                          bottom: '3%',
                          containLabel: true
                      },
                      yAxis: {
                          type: 'value'
                      },
                      xAxis: {
                          type: 'category',
                          data: d.data.echart.x
                      },
                      series: []
                    };
                    var num=d.data.echart.y.length;
                    for(var i=0;i<num;i++){
                      var item={
                        name: d.data.echart.y[i].lable,
                        type: 'bar',
                        stack: '总量',
                        barWidth: 50,
                        itemStyle:{
                          normal:{
                            color:that.echartColor[i]
                          }
                        },
                        data:d.data.echart.y[i].data
                      };
                      option.series.push(item);
                    }
                    data.setOption(option);data.resize();
                    window.addEventListener("resize",function(){
                        data.resize();
                    });
                  }
                }else {
                  that.mainAgentPatenttypeShow=false;
                }
            });
        },



    },
    components:{
        gsbEchart:gsbEchart
    }

}
</script>

<style>

</style>