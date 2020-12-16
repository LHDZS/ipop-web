<style lang="less" scoped>
.regs {
    width: 100%;
    // height: 100%;
    background-color: #0F0C3F;
    moz-user-select: -moz-none; 
    -moz-user-select: none; 
    -o-user-select:none; 
    -khtml-user-select:none; 
    -webkit-user-select:none; 
    -ms-user-select:none; 
    user-select:none;
}
.regs-body {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 20px 0px;
    box-sizing: border-box;
}
.regs-title {
    text-align: left;
    font-size:14px;
    font-size: 0.14rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color: #FFFFFF;
}
.regs-title-left {
    float: left;
}
.regs-right-radio {
    font-size: 14px;
    font-size: .14rem;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #FFF;
}
.right-radio-item {
    margin: 0px 5px;
    padding-bottom: 5px;
    display: inline-block;
    cursor: pointer;
}
.regs-textname {
    width: 100%;
    margin-top: 20px;
    line-height:63px;
    text-align: center;
}
.regs-textname > img {
    margin-top: -8px;
    vertical-align: middle;
}
.regs-name {
    display: inline-block;
    font-size:26px;
    font-size: 0.26rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:63px;
    background:linear-gradient(92deg,rgba(15,244,255,1) 0%, rgba(41,167,255,1) 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    margin: 0px 13px;
}
.regs-echart {
    width: 100%;
    /* height: 340px; */
    border-bottom: 1px solid rgba(255, 255, 255, 0.26);
}
.regs-table {
    width: 100%;
    margin-top: 20px;
}
.regs-radio {
    display: inline-block;
    width: 221px;
    height: 40px;
    text-align: center;
    overflow: hidden;
    line-height: 40px;
    border: 1px solid #1184E0;
    border-radius: 5px;
    font-size: 16px;
    font-size: 0.16rem;
}
.regs-radio-item {
    float: left;
    width: 110px;
    color: #fff;
    cursor: pointer;
}
.regs-radio-item:nth-child(1) {
    border-right: 1px solid #1184e0;
}

</style>

<style>
.regs .el-table,.regs .el-table__expanded-cell {
    background-color: transparent !important;
}
.regs .el-table th,.regs .el-table tr {
    background-color: transparent !important;
}
.regs .el-table thead {
    background-color: #1B256A !important;
    color: #37A6FF !important;
}
.regs .el-table {
    color: #fff !important;
}
.regs .el-table__body tr:hover>td{
    background-color: #2a32a0dc!important;
}
.regs .el-table__body tr.current-row>td{
    background-color: #2a32a0dc!important;
}
.regs .el-table--border::after,.regs .el-table--group::after,.regs .el-table::before {
    background-color: #1184E0 !important;
}
.regs .el-table--border,.regs .el-table--group {
    border: 1px solid #1184E0 !important;
}
.regs .el-table td,.regs .el-table th.is-leaf {
    border-bottom: 1px solid #1184E0 !important;
}
.regs .el-table--border td,.regs .el-table--border th,.regs .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
    border-right: 1px solid #1184E0 !important;
}
</style>

<template>
  <div class="regs">
    <div class="regs-body">
        <div class="regs-title">
            <div class="regs-title-left">
                <span style="color: #55B3FF;cursor: pointer;" @click="tomain(null)">区域专利监控首页 / </span>
                <span style="color: #55B3FF;cursor: pointer;" v-if="province"  @click="tomain(province)">{{province}}专利数据 / </span>
                <span>{{initializationConfiguration.title}}</span>
            </div>
            <div v-if="detailtype!=4" style="float: right;">
                <div class="regs-right-radio">
                    <div class="right-radio-item" :style="typeradio == '专利公开量' ? 'color: #1184e0;border-bottom: 1px solid #1184e0;' : ''" @click="qiehuan('专利公开量')">专利公开量</div>
                    <div class="right-radio-item" :style="typeradio == '专利授权量' ? 'color: #1184e0;border-bottom: 1px solid #1184e0;' : ''" @click="qiehuan('专利授权量')">专利授权量</div>
                </div>
            </div>
        </div>
        <div class="regs-textname">
            <img src="/imgs/imgleft.png" alt="">
            <div class="regs-name">
                <span v-if="province">{{province}}</span>
                <span v-else>各省、自治区、直辖市</span>
                {{initializationConfiguration.bartitle}}
            </div>
            <img src="/imgs/imgright.png" alt="">
        </div>
        <div class="regs-echart">
            <div style="height:500px">
                <gsb-echart ref="detailbar" key="1" :data="bardata"></gsb-echart>
            </div>
            <span style="padding:10px 40px;font-size:12px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1);line-height:30px;">
               {{analyse}}
            </span>
        </div>
        <div class="regs-textname">
            <img src="/imgs/imgleft.png" alt="">
            <div class="regs-name">
                <span v-if="province">{{province}}</span>
                <span v-else>各省、自治区、直辖市</span>
                {{initializationConfiguration.tabletitle}}
            </div>
            <img src="/imgs/imgright.png" alt="">
        </div>
        <div class="regs-table">
            <el-table
                :data="tableData"
                el-table__row
                border
                style="width: 100%">
                <el-table-column v-if="detailtype!=3"
                align="center"
                type="index"
                label="排名"
                width="50">
                </el-table-column>
                <el-table-column v-for="(col,key) in tableColumn" :key="key"
                  align="center"
                  :prop="col.code"
                  :label="col.name">
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
import gsbEchart from '@/components/echart'
export default {
    data:function(){
        return {
            typeradio:"专利公开量",
            data:{},
            analyse:"",
            year:'',
            province:'',
            detailtype:0,
            tableColumnList:[
              [{name:"地区",code:"areaname"},{name:"专利公开量",code:"y_applynum"},{name:"专利授权量",code:"y_registnum"}],
              [{name:"分类号",code:"code"},{name:"专利数量",code:"num"}],
              [{name:"申请人名称",code:"entname"},{name:"专利数量",code:"num"}],
              [{name:"年份",code:"year"},{name:"专利数量",code:"num"}],
              [{name:"类型",code:"statusname"},{name:"专利数量",code:"num"}],
              [{name:"代理机构名称",code:"agencyname"},{name:"专利数量",code:"num"}]
            ],
            tableColumn:[
              {name:"地区",code:"areaname"},
              {name:"专利公开量",code:"y_applynum"},{name:"专利授权量",code:"y_registnum"}
            ],
            tableData: [
              
            ],
            bardata:{
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            
                      type : 'shadow'       
                  }
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '8%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      data : [],
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLine:{
                        lineStyle:{
                          color:"#CACACA"
                        }
                      }
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
                      axisLine:{
                        lineStyle:{
                          color:"#FFFFFF"
                        }
                      },
                      splitLine:{
                        lineStyle:{
                          color:"#0F0C3F"
                        }
                      }
                  }
              ],
              series : [
                {
                  type: 'bar',
                  itemStyle:{
                    normal:{
                        color:'#3E83D3'
                    }
                  },
                  data: []
                }
              ]
            },
            /*initializationProvinceConfigurationList:[
              {"title":"专利地区分布详情","bartitle":"各省、自治区、直辖市专利分布柱状图","tabletitle":"各省、自治区、直辖市专利分布表"},
              {"title":"专利IPC分布详情","bartitle":"各省、自治区、直辖市IPC分布柱状图","tabletitle":"各省、自治区、直辖市IPC分布表"},
              {"title":"申请人分布详情","bartitle":"各省、自治区、直辖市申请人专利排名柱状图","tabletitle":"各省、自治区、直辖市申请人专利排名列表"},
              {"title":"申请趋势详情","bartitle":"各省、自治区、直辖市专利申请趋势柱状图","tabletitle":"各省、自治区、直辖市专利申请趋势列表"},
              {"title":"法律状态分布详情","bartitle":"各省、自治区、直辖市专利法律状态分布柱状图","tabletitle":"各省、自治区、直辖市专利法律状态分布表"},
              {"title":"代理机构排名详情","bartitle":"各省、自治区、直辖市代理机构排名柱状图","tabletitle":"各省、自治区、直辖市代理机构排名列表"},
            ],*/
            initializationConfigurationList:[
              {"title":"专利地区分布详情","bartitle":"专利分布柱状图","tabletitle":"专利分布表"},
              {"title":"专利IPC分布详情","bartitle":"IPC分布柱状图","tabletitle":"IPC分布表"},
              {"title":"申请人分布详情","bartitle":"申请人专利排名柱状图","tabletitle":"申请人专利排名列表"},
              {"title":"申请趋势详情","bartitle":"专利申请趋势柱状图","tabletitle":"专利申请趋势列表"},
              {"title":"法律状态分布详情","bartitle":"专利法律状态分布柱状图","tabletitle":"专利法律状态分布表"},
              {"title":"代理机构排名详情","bartitle":"代理机构排名柱状图","tabletitle":"代理机构排名列表"},
            ],
            initializationConfiguration:{"title":"专利地区分布详情","bartitle":"各省、自治区、直辖市专利分布柱状图","tabletitle":"各省、自治区、直辖市专利分布表"},
        }
    },
    mounted:function(){
      var detailtype = this.$route.query.detailtype;
      console.log(detailtype)
      /* 0:地区分布详情 1：IPC 2:申请人 3：趋势 4：法律状态 5：代理机构*/
      if(detailtype==null || detailtype==undefined){
        this.$router.push({
          path:"/regionalpatentmonitoring",
        });
      }else{
        this.detailtype=detailtype;
        this.tableColumn = this.tableColumnList[detailtype];
        this.initializationConfiguration=this.initializationConfigurationList[detailtype];
        this.initParams();
      }
    },
    methods:{
      initParams(){
        /** var flag=null;
        var detailtype=this.detailtype;*/
        /* 0:地区分布详情 1：IPC 2:申请人 3：趋势 4：法律状态 5：代理机构*/
        /**if(detailtype==0){
          flag="aliplace";
        }else if(detailtype==1){
          flag="aliIpc"
        }else if(detailtype==2){
          flag="aliApplicant"
        }else if(detailtype==3){
          flag="aliTrend"
        }else if(detailtype==4){
          flag="aliPubstatusnow"
        }else if(detailtype==5){
          flag="aliAgency"
        } */
        this.year=window.localStorage.getItem("year") || ""; 
        this.province=window.localStorage.getItem("provinceName") || ""; 
        
        var data = window.localStorage.getItem("regionalpatentmonitoringdetaildata"); 
        if(data){
          data = JSON.parse(data);
          this.data=data;
          this.tableData=this.data.data[0].data;
          this.analyse = data.data[0].analyse;
          var echarts = this.$refs.detailbar.getEchartObj();
          this.bardata.xAxis[0].data = data.data[0].xdata;
          this.bardata.series[0].data = data.data[0].ydata;
          echarts.setOption(this.bardata);
        }else{
          this.$router.push({
            path:"/regionalpatentmonitoring",
          });
        }
      },
      tomain(name){
        this.$router.push(
          { path:'/regionalpatentmonitoring',title:"区域专利监控",params:{name:name}}
        )
      },
      qiehuan(v){
        this.typeradio = v;
        if(v=="专利授权量"){
          this.tableData=this.data.data[1].data;
          this.analyse = this.data.data[1].analyse;
          var echarts = this.$refs.detailbar.getEchartObj();
          this.bardata.xAxis[0].data = this.data.data[1].xdata;
          this.bardata.series[0].data = this.data.data[1].ydata;
          echarts.setOption(this.bardata);
        }else if(v=="专利公开量"){
          this.tableData=this.data.data[0].data;
          this.analyse = this.data.data[0].analyse;
          var echarts = this.$refs.detailbar.getEchartObj();
          this.bardata.xAxis[0].data = this.data.data[0].xdata;
          this.bardata.series[0].data = this.data.data[0].ydata;
          echarts.setOption(this.bardata);
        }
      }
    },
    components:{
        gsbEchart:gsbEchart
    }
}
</script>

<style>

</style>