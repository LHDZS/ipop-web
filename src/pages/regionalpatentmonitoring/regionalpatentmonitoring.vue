<style lang="less" scoped>
.reg-home {
    width: 100%;
    height: 100%;
    /* background: url('/imgs/bejjjj.jpg') no-repeat;
    background-size: 100% 100%; */
    overflow-x: hidden;
    background-color: #0F0C3F;
    moz-user-select: -moz-none; 
    -moz-user-select: none; 
    -o-user-select:none; 
    -khtml-user-select:none; 
    -webkit-user-select:none; 
    -ms-user-select:none; 
    user-select:none;
}
.regionalpatentmonitoring {
    .reg-title {
        width: 100%;
        height: 11%;
        background: url(/imgs/title.png) no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .reg-block {
        margin-right: 20px;
    }
    .reg-home .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%;
    }
    .reg-home .el-input__inner {
        background-color: transparent !important;
    }
    .reg-bj {
        float: left;
        width: 43.8%;
        height: 92.3%;
        margin: 0 2.77%;
        background: url(/imgs/bjq.png) no-repeat center;
        background-size: 100%;
        box-sizing: border-box;
    }
    .reg-bj-header {
        width: 100%;
        height: 10%;
        padding-top: 3%;
        display: flex
    }
    .reg-bj-header-item {
        flex: 1;
        height: 99%;
        margin-right: 2%;
        background:rgba(23,20,76,0.8);
        border:1px solid rgba(26,161,230,1);
        border-radius:6px;
        position: relative;
    }
    .reg-bj-header-item-img {
        float: left;
        width: 23.62%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 17%;
        transform: translate(-50%,-50%);
    }
    .reg-bj-header-itemmain1 {
        float: right;
        width: 70%;
        height: 100%;
        padding: 5%;
        box-sizing: border-box;
        text-align: left;
    }
    .reg-bj-header-itemmain1 > .text1 {
        display: block;
        height: 0.25rem;
        font-size:14px;
        font-size: 0.14rem;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(85,179,255,1);
        overflow: hidden;
    }
    .reg-bj-header-itemmain1 > .text2 {
        width:70px;
        height:24px;
        font-size:26px;
        font-size: 0.26rem;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .reg-bj-header-item:nth-child(3) {
        margin-right: 0px;
    }
    .reg-bj-echrts {
        margin-top: 13px;
        width: 100%;
        height: 79%;
        position: relative;
    }
    .reg-bj-return {
        position: absolute;
        top: 20px;
        left: 0px;
        color: #fff;
        font-size: 14px;
        font-size: 0.14rem;
        cursor: pointer;
        z-index: 999;
    }
    .reg-bj-return > .span1:hover {
        color: #1AA1E6;
    }
    .reg-bj-return > i {
        margin: 0px 7px;
    }
    .reg-main {
        width: 100%;
        height: calc(89% - 16px);
        padding: 9px;
        box-sizing: border-box;
    }
    .reg-main-title {
        width:100%;
        font-size:14px;
        font-size: 0.14rem;
        text-align: center;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(31,144,230,1);
    }
    .reg-left {
        float: left;
        width: 25.48%;
        height: 100%;
    }
    .reg-left-item {
        width: 100%;
        height: 27.48%;
        margin-top: 10px;
        background: url(/imgs/reg-div.png) no-repeat;
        background-size: 100% 100%;
    }
    .reg-left-item-name {
        width: 100%;
        height: 14%;
        padding: 0 22px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .reg-item-nameleft {
        display: inline-block;
        // width: 68%;
        height: 100%;
        font-size:16px;
        font-size: 0.16rem;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
    .reg-item-nameright {
        display: inline-block;
        text-align: right;
        // width: 28%;
        min-width: 79px;;
        height: 100%;
        font-size:14px;
        font-size: 0.14rem;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(55,166,255,1);
        cursor: pointer;
    }
    .reg-right {
        float: right;
        width: 25.18%;
        height: 100%;
    }
    .reg-echart{
        width:100%;
        height:86%;
    }
    .reg-left-item-name span {
        display: inline-block;
        width: 0;
        height: 113%;
        vertical-align: middle; 
    }
    #containerGd {
        display: none;
    }
    #container {
        display: block;
    }
}
</style>

<style>
.reg-home .el-input__inner {
    background-color: transparent!important;
}
</style>

<template>
  <div class="reg-home regionalpatentmonitoring">
    <div class="reg-title">
        <div class="reg-block">
            <el-date-picker
                v-model="year"
                type="year"
                size="mini"
                format="yyyy 年"
                value-format="yyyy"
                placeholder="选择年份"
                @change="annual">
            </el-date-picker>
        </div>
    </div>
    <div class="reg-main-title">提供各区域专利数据监测服务，方便政府、企业、高校等社会主体专利分析</div>
    <div class="reg-main">
        <div class="reg-left">
            <div class="reg-left-item">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">专利地区分布<span></span></div>
                    <div class="reg-item-nameright" @click="CheckDetails(0)">查看详情>><span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentRegionRef" key="1" :data="patentRegionEchartdata"></gsb-echart>
                </div>
            </div>
            <div class="reg-left-item">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">专利IPC分布<span></span></div>
                    <div class="reg-item-nameright" @click="CheckDetails(1)">查看详情>><span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentIpcRef" key="2" :data="patentIpcEchartdata"></gsb-echart>
                </div>
            </div>
            <div class="reg-left-item">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">专利申请人分布<span></span></div>
                    <div class="reg-item-nameright" @click="CheckDetails(2)">查看详情>><span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentApplicantRef" key="3" :data="patentApplicantEchartdata"></gsb-echart>
                </div>
            </div>
        </div>
        <div class="reg-bj">
            <div class="reg-bj-header">
                <div class="reg-bj-header-item">
                    <img class="reg-bj-header-item-img" src="/imgs/icon.png" alt="">
                    <div class="reg-bj-header-itemmain1">
                        <span class="text1">发明专利</span>
                        <span class="text2">{{allsum}}</span>
                    </div>
                </div>
                <!-- <div class="reg-bj-header-item">
                    <img class="reg-bj-header-item-img" src="/imgs/icon1.png" alt="">
                    <div class="reg-bj-header-itemmain1">
                        <span class="text1">发明专利授权量</span>
                        <span class="text2">{{sqsumfm}}</span>
                    </div>
                </div> -->
                <div class="reg-bj-header-item">
                    <img class="reg-bj-header-item-img" src="/imgs/icon2.png" alt="">
                    <div class="reg-bj-header-itemmain1">
                        <span class="text1">实用新型</span>
                        <span class="text2">{{sqsumsy}}</span>
                    </div>
                </div>
                <div class="reg-bj-header-item">
                    <img class="reg-bj-header-item-img" src="/imgs/icon.png" alt="">
                    <div class="reg-bj-header-itemmain1">
                        <span class="text1">外观设计</span>
                        <span class="text2">{{sqsumwg}}</span>
                    </div>
                </div>
            </div>
            <div class="reg-bj-echrts">
                <div class="reg-bj-return"><span class="span1" @click="returnpage">中国</span>
                    <i v-if="provinceType" class="el-icon-arrow-right"></i><span v-if="provinceType" class="span1" @click="returnpage(1)">{{provinceNameOne}}</span>
                    <i v-if="cityType" class="el-icon-arrow-right"></i><span v-if="cityType">{{provinceName}}</span>
                </div>
                <div id="container" style="height:100%;width:100%"></div>
                <div id="containerGd" style="height:100%;width:100%"></div>
                <!-- <gsb-echart ref="regionRef" key="7" :data="regionEchartdata"></gsb-echart> -->
            </div>
        </div>
        <div class="reg-right">
            <div class="reg-left-item">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">专利申请趋势<span></span></div>
                    <div class="reg-item-nameright" @click="CheckDetails(3)">查看详情>><span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentApplyRef" key="4" :data="patentApplyEchartdata"></gsb-echart>
                </div>
            </div>
            <div class="reg-left-item">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">专利法律状态分布<span></span></div>
                    <div class="reg-item-nameright" @click="CheckDetails(4)">查看详情>><span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentStatusRef" key="5" :data="patentStatusEchartdata"></gsb-echart>
                </div>
            </div>
            <div class="reg-left-item">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">年度代理机构分布<span></span></div>
                    <div class="reg-item-nameright" @click="CheckDetails(5)">查看详情>><span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentAgentRef" key="6" :data="patentAgentEchartdata"></gsb-echart>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import gsbEchart from '@/components/echart'
export default {
    data(){
        return {
          sss:"background: url('/imgs/echarts/haidian.png') no-repeat center",
          aliIpcString:"",
          aliApplicantString:"",
          aliPubstatusnowString:"",
          aliTrendString:"",
          aliAgencyString:"",
          aliplaceString:"",
          loading: true,
          allsum:'',
          sqsum:'',
          sqsumfm:'',
          sqsumwg:'',
          sqsumsy:'',
          year:null,
          provinceName:'',
          provinceNameOne:'',
          provinceType:false,
          cityType: false,
          patentRegionEchartdata:{
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable : true,
            color:["#04ba19","#a682e6","#e15d68","#f29961","#00CCCD","#407FFF"],
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    radius : [10, 65],
                    center : ['50%', '60%'],
                    roseType : 'radius',
                    data:[
                        
                    ]
                }
            ]
          },
          patentIpcEchartdata:{
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'       
                }
            },
            /** legend:{
              data:["A01","B01","C01","D01","E01","F01"],
              textStyle: {
                color: '#FFFFFF'
              }
            },*/
            grid: {
                top:'5%',
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
                        color:"#708ACC"
                      }
                    },
                    axisLabel:{
                        show:false,
                        interval:0
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                      lineStyle:{
                        color:"#708ACC"
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
                barWidth:'50%',
                itemStyle:{
                  normal:{
                      color:'#249CF9'
                  }
                },
                data: []
              }
            ]
          },
          patentApplicantEchartdata:{
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'       
                }
            },
            /** legend:{
              data:["A01","B01","C01","D01","E01","F01"],
              textStyle: {
                color: '#FFFFFF'
              }
            },*/
            grid: {
                top:'5%',
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
                        color:"#708ACC"
                      }
                    },
                    axisLabel:{
                        show:false,
                        interval:0
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                      lineStyle:{
                        color:"#708ACC"
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
                barWidth:'50%',
                itemStyle:{
                  normal:{
                      color:'#249CF9'
                  }
                },
                data: []
              }
            ]
          },
          patentApplyEchartdata:{
            legend: {
                data:['专利公开量','专利授权量'],
                textStyle: {
                  color: '#FFFFFF'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
              top:'6%',
              left: '3%',
              right: '4%',
              bottom: '8%',
              containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine:{
                  lineStyle:{
                    color:"#708ACC"
                  }
                },
                axisLabel: {
                   textStyle: {
                       color: '#52FFFF'
                   }
                }
            },
            yAxis: {
                type: 'value',
                axisLine:{
                  lineStyle:{
                    color:"#708ACC"
                  }
                },
                splitLine:{
                  lineStyle:{
                    color:"#0F0C3F"
                  }
                },
                axisLabel: {
                   textStyle: {
                       color: '#52FFFF'
                   }
                }
            },
            series: [
                {
                    name:'专利公开量',
                    type: 'line',
                    itemStyle:{  
                        normal:{     
                            color:'#e15d68'
                        }  
                    },
                    smooth: true,
                    data: []
                },
                {
                    name:'专利授权量',
                    type: 'line',
                    itemStyle:{  
                        normal:{     
                            color:'#419FFF'  
                        }  
                    },
                    smooth: true,
                    data: []
                }
            ]
          },
          patentStatusEchartdata:{
            tooltip : {
                trigger: 'axis',
                axisPointer : {      
                    type : 'shadow' 
                }
            },
            grid: {
                top:'5%',
                left: '3%',
                right: '4%',
                bottom: '8%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : [],
                    axisLabel: {
                        show:false,
                        interval:0,
                        textStyle: {
                            color: '#52FFFF'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                      lineStyle:{
                        color:"#708ACC"
                      }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#52FFFF'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine:{
                        lineStyle:{
                            color:"#0F0C3F"
                        }
                    },
                    axisLine:{
                      lineStyle:{
                        color:"#708ACC"
                      }
                    }
                }
            ],
            series : [
                {
                    name:'专利数量',
                    type:'bar',
                    barWidth: '40%',
                     itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        }
                    },
                    data:[]
                }
            ]
          },
          patentAgentEchartdata:{
            tooltip : {
                trigger: 'axis',
                axisPointer : {      
                    type : 'shadow' 
                }
            },
            grid: {
                top:'5%',
                left: '3%',
                right: '4%',
                bottom: '8%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : [],
                    axisLabel: {
                        show:false,
                        interval:0,
                        textStyle: {
                            color: '#52FFFF'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                      lineStyle:{
                        color:"#708ACC"
                      }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#52FFFF'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine:{
                        lineStyle:{
                            color:"#0F0C3F"
                        }
                    },
                    axisLine:{
                      lineStyle:{
                        color:"#708ACC"
                      }
                    }
                }
            ],
            series : [
                {
                    name:'专利数量',
                    type:'bar',
                    barWidth: '40%',
                     itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        }
                    },
                    data:[]
                }
            ]
          },
          regionEchartdata:{
            tooltip : {
                trigger: 'item'
            },
            dataRange: {
                orient: 'vertical',
                min: 0,
                max: 550000,
                text: ['High', 'Low'],
                textStyle:{
                  color:"#ffffff"
                },
                splitNumber: 0,
                color: ['rgb(3,112,222)', 'rgb(100,175,236)', 'rgb(222,254,255)']
            },
            series: [{
                name: '专利数量',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    x: 'left'
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: { label: { show: true } },
                    emphasis: { 
                        label: { show: true },
                        areaStyle:{color:""}
                     }
                },
                data:[
                    
                ]
            }]
          },
          myChart:"",
          city:"",
          provinces:[
            'shanghai', 'hebei','shanxi','neimenggu','liaoning','jilin','heilongjiang','jiangsu','zhejiang','anhui','fujian',
            'jiangxi','shandong','henan','hubei','hunan','guangdong','guangxi','hainan','sichuan','guizhou','yunnan','xizang',
            'shanxi1','gansu','qinghai','ningxia','xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan'
          ],
          provincesText:[
            '上海', '河北', '山西', '内蒙古', '辽宁', '吉林','黑龙江',  '江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', 
            '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', 
            '重庆', '香港', '澳门', '台湾'
          ],
          Beijing:['密云区', '延庆区', '朝阳区', '丰台区', '石景山区', '海淀区' ,'门头沟区', '房山区' ,'通州区' ,'顺义区' ,'昌平区' ,'大兴区', '怀柔区' ,'平谷区' ,'东城区' ,'西城区'],
          cityMap : [
            {name:"安徽", value:"340000"},
            {name:"澳门", value:'820000'},
            {name:"北京", value:'110000'},
            {name:"重庆", value:'500000'},
            {name:"福建", value:'350000'},
            {name:"甘肃", value:'620000'},
            {name:"广东", value:'440000'},
            {name:"广西", value:"450000"},
            {name:"贵州", value:'520000'},
            {name:"海南", value:'460000'},
            {name:"河北", value:'130000'},
            {name:"黑龙江", value:'230000'},
            {name:"河南", value:'410000'},
            {name:"湖北", value:'420000'},
            {name:"湖南", value:'430000'},
            {name:"江苏", value:'320000'},
            {name:"江西", value:'360000'},
            {name:"吉林", value:'220000'},
            {name:"辽宁", value:'210000'},
            {name:"内蒙古", value:'150000'},
            {name:"宁夏", value:'640000'},
            {name:"青海", value:'630000'},
            {name:"山东", value:'370000'},
            {name:"上海", value:'310000'},
            {name:"山西", value:'140000'},
            {name:"四川", value:'510000'},
            {name:"台湾", value:'710000'},
            {name:"天津", value:'120000'},
            {name:"新疆", value:'650000'},
            {name:"陕西", value:'610000'},
            {name:"西藏", value:'540000'},
            {name:"云南", value:'530000'},
            {name:"浙江", value:'330000'},
            {name:"香港", value:'810000'},
            {name:"北京市", value:"110100"},
            {name:"天津市", value:"120100"},
            {name:"上海市", value:"310100"},
            {name:"重庆市", value:"500100"},
            {name:"崇明县", value:"310200"},
            {name:"湖北省直辖县市", value:"429000"},  
            {name:"铜仁市", value:"522200"},
            {name:"毕节市", value:"522400"},
            {name:"石家庄市", value:"130100"},
            {name:"唐山市", value:"130200"},
            {name:"秦皇岛市", value:"130300"},
            {name:"邯郸市", value:"130400"},
            {name:"邢台市", value:"130500"},
            {name:"保定市", value:"130600"},
            {name:"张家口市", value:"130700"},
            {name:"承德市", value:"130800"},
            {name:"沧州市", value:"130900"},
            {name:"廊坊市", value:"131000"},
            {name:"衡水市", value:"131100"},
            {name:"太原市", value:"140100"},
            {name:"大同市", value:"140200"},
            {name:"阳泉市", value:"140300"},
            {name:"长治市", value:"140400"},
            {name:"晋城市", value:"140500"},
            {name:"朔州市", value:"140600"},
            {name:"晋中市", value:"140700"},
            {name:"运城市", value:"140800"},
            {name:"忻州市", value:"140900"},
            {name:"临汾市", value:"141000"},
            {name:"吕梁市", value:"141100"},
            {name:"呼和浩特市", value:"150100"},
            {name:"包头市", value:"150200"},
            {name:"乌海市", value:"150300"},
            {name:"赤峰市", value:"150400"},
            {name:"通辽市", value:"150500"},
            {name:"鄂尔多斯市", value:"150600"},
            {name:"呼伦贝尔市", value:"150700"},
            {name:"巴彦淖尔市", value:"150800"},
            {name:"乌兰察布市", value:"150900"},
            {name:"兴安盟", value:"152200"},
            {name:"锡林郭勒盟", value:"152500"},
            {name:"阿拉善盟", value:"152900"},
            {name:"沈阳市", value:"210100"},
            {name:"大连市", value:"210200"},
            {name:"鞍山市", value:"210300"},
            {name:"抚顺市", value:"210400"},
            {name:"本溪市", value:"210500"},
            {name:"丹东市", value:"210600"},
            {name:"锦州市", value:"210700"},
            {name:"营口市", value:"210800"},
            {name:"阜新市", value:"210900"},
            {name:"辽阳市", value:"211000"},
            {name:"盘锦市", value:"211100"},
            {name:"铁岭市", value:"211200"},
            {name:"朝阳市", value:"211300"},
            {name:"葫芦岛市", value:"211400"},
            {name:"长春市", value:"220100"},
            {name:"吉林市", value:"220200"},
            {name:"四平市", value:"220300"},
            {name:"辽源市", value:"220400"},
            {name:"通化市", value:"220500"},
            {name:"白山市", value:"220600"},
            {name:"松原市", value:"220700"},
            {name:"白城市", value:"220800"},
            {name:"延边朝鲜族自治州", value:"222400"},
            {name:"哈尔滨市", value:"230100"},
            {name:"齐齐哈尔市", value:"230200"},
            {name:"鸡西市", value:"230300"},
            {name:"鹤岗市", value:"230400"},
            {name:"双鸭山市", value:"230500"},
            {name:"大庆市", value:"230600"},
            {name:"伊春市", value:"230700"},
            {name:"佳木斯市", value:"230800"},
            {name:"七台河市", value:"230900"},
            {name:"牡丹江市", value:"231000"},
            {name:"黑河市", value:"231100"},
            {name:"绥化市", value:"231200"},
            {name:"大兴安岭地区", value:"232700"},
            {name:"南京市", value:"320100"},
            {name:"无锡市", value:"320200"},
            {name:"徐州市", value:"320300"},
            {name:"常州市", value:"320400"},
            {name:"苏州市", value:"320500"},
            {name:"南通市", value:"320600"},
            {name:"连云港市", value:"320700"},
            {name:"淮安市", value:"320800"},
            {name:"盐城市", value:"320900"},
            {name:"扬州市", value:"321000"},
            {name:"镇江市", value:"321100"},
            {name:"泰州市", value:"321200"},
            {name:"宿迁市", value:"321300"},
            {name:"杭州市", value:"330100"},
            {name:"宁波市", value:"330200"},
            {name:"温州市", value:"330300"},
            {name:"嘉兴市", value:"330400"},
            {name:"湖州市", value:"330500"},
            {name:"绍兴市", value:"330600"},
            {name:"金华市", value:"330700"},
            {name:"衢州市", value:"330800"},
            {name:"舟山市", value:"330900"},
            {name:"台州市", value:"331000"},
            {name:"丽水市", value:"331100"},
            {name:"合肥市", value:"340100"},
            {name:"芜湖市", value:"340200"},
            {name:"蚌埠市", value:"340300"},
            {name:"淮南市", value:"340400"},
            {name:"马鞍山市", value:"340500"},
            {name:"淮北市", value:"340600"},
            {name:"铜陵市", value:"340700"},
            {name:"安庆市", value:"340800"},
            {name:"黄山市", value:"341000"},
            {name:"滁州市", value:"341100"},
            {name:"阜阳市", value:"341200"},
            {name:"宿州市", value:"341300"},
            {name:"六安市", value:"341500"},
            {name:"亳州市", value:"341600"},
            {name:"池州市", value:"341700"},
            {name:"宣城市", value:"341800"},
            {name:"福州市", value:"350100"},
            {name:"厦门市", value:"350200"},
            {name:"莆田市", value:"350300"},
            {name:"三明市", value:"350400"},
            {name:"泉州市", value:"350500"},
            {name:"漳州市", value:"350600"},
            {name:"南平市", value:"350700"},
            {name:"龙岩市", value:"350800"},
            {name:"宁德市", value:"350900"},
            {name:"南昌市", value:"360100"},
            {name:"景德镇市", value:"360200"},
            {name:"萍乡市", value:"360300"},
            {name:"九江市", value:"360400"},
            {name:"新余市", value:"360500"},
            {name:"鹰潭市", value:"360600"},
            {name:"赣州市", value:"360700"},
            {name:"吉安市", value:"360800"},
            {name:"宜春市", value:"360900"},
            {name:"抚州市", value:"361000"},
            {name:"上饶市", value:"361100"},
            {name:"济南市", value:"370100"},
            {name:"青岛市", value:"370200"},
            {name:"淄博市", value:"370300"},
            {name:"枣庄市", value:"370400"},
            {name:"东营市", value:"370500"},
            {name:"烟台市", value:"370600"},
            {name:"潍坊市", value:"370700"},
            {name:"济宁市", value:"370800"},
            {name:"泰安市", value:"370900"},
            {name:"威海市", value:"371000"},
            {name:"日照市", value:"371100"},
            {name:"莱芜市", value:"371200"},
            {name:"临沂市", value:"371300"},
            {name:"德州市", value:"371400"},
            {name:"聊城市", value:"371500"},
            {name:"滨州市", value:"371600"},
            {name:"菏泽市", value:"371700"},
            {name:"郑州市", value:"410100"},
            {name:"开封市", value:"410200"},
            {name:"洛阳市", value:"410300"},
            {name:"平顶山市", value:"410400"},
            {name:"安阳市", value:"410500"},
            {name:"鹤壁市", value:"410600"},
            {name:"新乡市", value:"410700"},
            {name:"焦作市", value:"410800"},
            {name:"濮阳市", value:"410900"},
            {name:"许昌市", value:"411000"},
            {name:"漯河市", value:"411100"},
            {name:"三门峡市", value:"411200"},
            {name:"南阳市", value:"411300"},
            {name:"商丘市", value:"411400"},
            {name:"信阳市", value:"411500"},
            {name:"周口市", value:"411600"},
            {name:"驻马店市", value:"411700"},
            {name:"省直辖县级行政区划", value:"469000"},
            {name:"武汉市", value:"420100"},
            {name:"黄石市", value:"420200"},
            {name:"十堰市", value:"420300"},
            {name:"宜昌市", value:"420500"},
            {name:"襄阳市", value:"420600"},
            {name:"鄂州市", value:"420700"},
            {name:"荆门市", value:"420800"},
            {name:"孝感市", value:"420900"},
            {name:"荆州市", value:"421000"},
            {name:"黄冈市", value:"421100"},
            {name:"咸宁市", value:"421200"},
            {name:"随州市", value:"421300"},
            {name:"恩施土家族苗族自治州", value:"422800"},
            {name:"长沙市", value:"430100"},
            {name:"株洲市", value:"430200"},
            {name:"湘潭市", value:"430300"},
            {name:"衡阳市", value:"430400"},
            {name:"邵阳市", value:"430500"},
            {name:"岳阳市", value:"430600"},
            {name:"常德市", value:"430700"},
            {name:"张家界市", value:"430800"},
            {name:"益阳市", value:"430900"},
            {name:"郴州市", value:"431000"},
            {name:"永州市", value:"431100"},
            {name:"怀化市", value:"431200"},
            {name:"娄底市", value:"431300"},
            {name:"湘西土家族苗族自治州", value:"433100"},
            {name:"广州市", value:"440100"},
            {name:"韶关市", value:"440200"},
            {name:"深圳市", value:"440300"},
            {name:"珠海市", value:"440400"},
            {name:"汕头市", value:"440500"},
            {name:"佛山市", value:"440600"},
            {name:"江门市", value:"440700"},
            {name:"湛江市", value:"440800"},
            {name:"茂名市", value:"440900"},
            {name:"肇庆市", value:"441200"},
            {name:"惠州市", value:"441300"},
            {name:"梅州市", value:"441400"},
            {name:"汕尾市", value:"441500"},
            {name:"河源市", value:"441600"},
            {name:"阳江市", value:"441700"},
            {name:"清远市", value:"441800"},
            {name:"东莞市", value:"441900"},
            {name:"中山市", value:"442000"},
            {name:"潮州市", value:"445100"},
            {name:"揭阳市", value:"445200"},
            {name:"云浮市", value:"445300"},
            {name:"南宁市", value:"450100"},
            {name:"柳州市", value:"450200"},
            {name:"桂林市", value:"450300"},
            {name:"梧州市", value:"450400"},
            {name:"北海市", value:"450500"},
            {name:"防城港市", value:"450600"},
            {name:"钦州市", value:"450700"},
            {name:"贵港市", value:"450800"},
            {name:"玉林市", value:"450900"},
            {name:"百色市", value:"451000"},
            {name:"贺州市", value:"451100"},
            {name:"河池市", value:"451200"},
            {name:"来宾市", value:"451300"},
            {name:"崇左市", value:"451400"},
            {name:"海口市", value:"460100"},
            {name:"三亚市", value:"460200"},
            {name:"三沙市", value:"460300"},
            {name:"成都市", value:"510100"},
            {name:"自贡市", value:"510300"},
            {name:"攀枝花市", value:"510400"},
            {name:"泸州市", value:"510500"},
            {name:"德阳市", value:"510600"},
            {name:"绵阳市", value:"510700"},
            {name:"广元市", value:"510800"},
            {name:"遂宁市", value:"510900"},
            {name:"内江市", value:"511000"},
            {name:"乐山市", value:"511100"},
            {name:"南充市", value:"511300"},
            {name:"眉山市", value:"511400"},
            {name:"宜宾市", value:"511500"},
            {name:"广安市", value:"511600"},
            {name:"达州市", value:"511700"},
            {name:"雅安市", value:"511800"},
            {name:"巴中市", value:"511900"},
            {name:"资阳市", value:"512000"},
            {name:"阿坝藏族羌族自治州", value:"513200"},
            {name:"甘孜藏族自治州", value:"513300"},
            {name:"凉山彝族自治州", value:"513400"},
            {name:"贵阳市", value:"520100"},
            {name:"六盘水市", value:"520200"},
            {name:"遵义市", value:"520300"},
            {name:"安顺市", value:"520400"},
            {name:"黔西南布依族苗族自治州", value:"522300"},
            {name:"黔东南苗族侗族自治州", value:"522600"},
            {name:"黔南布依族苗族自治州", value:"522700"},
            {name:"昆明市", value:"530100"},
            {name:"曲靖市", value:"530300"},
            {name:"玉溪市", value:"530400"},
            {name:"保山市", value:"530500"},
            {name:"昭通市", value:"530600"},
            {name:"丽江市", value:"530700"},
            {name:"普洱市", value:"530800"},
            {name:"临沧市", value:"530900"},
            {name:"楚雄彝族自治州", value:"532300"},
            {name:"红河哈尼族彝族自治州", value:"532500"},
            {name:"文山壮族苗族自治州", value:"532600"},
            {name:"西双版纳傣族自治州", value:"532800"},
            {name:"大理白族自治州", value:"532900"},
            {name:"德宏傣族景颇族自治州", value:"533100"},
            {name:"怒江傈僳族自治州", value:"533300"},
            {name:"迪庆藏族自治州", value:"533400"},
            {name:"拉萨市", value:"540100"},
            {name:"昌都地区", value:"542100"},
            {name:"山南地区", value:"542200"},
            {name:"日喀则地区", value:"542300"},
            {name:"那曲地区", value:"542400"},
            {name:"阿里地区", value:"542500"},
            {name:"林芝地区", value:"542600"},
            {name:"西安市", value:"610100"},
            {name:"铜川市", value:"610200"},
            {name:"宝鸡市", value:"610300"},
            {name:"咸阳市", value:"610400"},
            {name:"渭南市", value:"610500"},
            {name:"延安市", value:"610600"},
            {name:"汉中市", value:"610700"},
            {name:"榆林市", value:"610800"},
            {name:"安康市", value:"610900"},
            {name:"商洛市", value:"611000"},
            {name:"兰州市", value:"620100"},
            {name:"嘉峪关市", value:"620200"},
            {name:"金昌市", value:"620300"},
            {name:"白银市", value:"620400"},
            {name:"天水市", value:"620500"},
            {name:"武威市", value:"620600"},
            {name:"张掖市", value:"620700"},
            {name:"平凉市", value:"620800"},
            {name:"酒泉市", value:"620900"},
            {name:"庆阳市", value:"621000"},
            {name:"定西市", value:"621100"},
            {name:"陇南市", value:"621200"},
            {name:"临夏回族自治州", value:"622900"},
            {name:"甘南藏族自治州", value:"623000"},
            {name:"西宁市", value:"630100"},
            {name:"海东地区", value:"632100"},
            {name:"海北藏族自治州", value:"632200"},
            {name:"黄南藏族自治州", value:"632300"},
            {name:"海南藏族自治州", value:"632500"},
            {name:"果洛藏族自治州", value:"632600"},
            {name:"玉树藏族自治州", value:"632700"},
            {name:"海西蒙古族藏族自治州", value:"632800"},
            {name:"银川市", value:"640100"},
            {name:"石嘴山市", value:"640200"},
            {name:"吴忠市", value:"640300"},
            {name:"固原市", value:"640400"},
            {name:"中卫市", value:"640500"},
            {name:"乌鲁木齐市", value:"650100"},
            {name:"克拉玛依市", value:"650200"},
            {name:"吐鲁番地区", value:"652100"},
            {name:"哈密地区", value:"652200"},
            {name:"昌吉回族自治州", value:"652300"},
            {name:"博尔塔拉蒙古自治州", value:"652700"},
            {name:"巴音郭楞蒙古自治州", value:"652800"},
            {name:"阿克苏地区", value:"652900"},
            {name:"克孜勒苏柯尔克孜自治州", value:"653000"},
            {name:"喀什地区", value:"653100"},
            {name:"和田地区", value:"653200"},
            {name:"伊犁哈萨克自治州", value:"654000"},
            {name:"塔城地区", value:"654200"},
            {name:"阿勒泰地区", value:"654300"},
            {name:"自治区直辖县级行政区划", value:"659000"},
            {name:"台湾省", value:"710000"},
            {name:"香港特别行政区", value:"810100"},
            {name:"澳门特别行政区", value:"820000"} 
          ],
          cityEchartdata:{
            tooltip : {
                trigger: 'item'
            },
            dataRange: {
                orient: 'vertical',
                min: 0,
                max: 55000,
                text: ['High', 'Low'],
                textStyle:{
                  color:"#ffffff"
                },
                splitNumber: 0,
                color: ['rgb(3,112,222)', 'rgb(100,175,236)', 'rgb(222,254,255)']
            },
            series: [{
                name: '专利数量',
                type: 'map',
                mapType: '',
                mapLocation: {
                    x: 'left'
                },
                itemStyle: {
                    normal: { label: { show: true } },
                    emphasis: { label: { show: true }}
                },
                data:[

                ]
            }]
            
          }
        }
    },
    mounted(){
        window.localStorage.setItem("year",'全部年份');
        window.localStorage.setItem("provinceName",'');
        let that = this;
        this.myChart = echarts.init(document.getElementById('container'));
        var province=this.$router.history.current.query.name || "";
        if (province != '') {
            if (that.provincesText.indexOf(province) == -1) {
                for (let i = 0; i < that.cityMap.length; i++) {
                    if (province == that.cityMap[i].name) {
                        that.showCity(province,that.cityMap[i].value);
                        break ;
                    }
                }
            }else {
                for(var i= 0;i<that.provincesText.length;i++){
                    that.provinceNameOne = window.localStorage.getItem('provinceNameOne');
                    if(province == that.provincesText[i]){
                        that.showProvince(that.provinces[i],that.provincesText[i]);
                        break ;
                    }
                }
            }
        }else {
            this.myChart.setOption(this.regionEchartdata, true);
            this.aliIpc();
            this.aliApplicant();
            this.aliPubstatusnow();
            this.aliTrend();
            this.aliAgency();
            this.aliplace();
        };
        this.myChart.on('click', function (params) {
            console.log(params)
            that.city = params.name; 
            if (that.provincesText.indexOf(params.name) == -1) {
                if (that.Beijing.indexOf(that.city) != -1) {
                    that.showDistrict(params.name);
                }else {
                    for (let i = 0; i < that.cityMap.length; i++) {
                        if (params.name == that.cityMap[i].name) {
                            that.showCity(params.name,that.cityMap[i].value);
                            break ;
                        }
                    }
                }
            }else {
                
                that.provinceNameOne = params.name;
                console.log('1',that.provinceNameOne)
                for(var i= 0;i<that.provincesText.length;i++){
                    if(params.name == that.provincesText[i]){
                        that.showProvince(that.provinces[i],that.provincesText[i]);
                        break ;
                    }
                }
            }
            
        });
    },
    created(){

    },
    methods:{
        aliIpc(key){
            var obj={type: "1",areaname:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.provinceType && this.provinceName){
                if(key){
                    obj.type= key;
                    obj.areaname=this.provinceName;
                }else {
                    obj.type="2";
                    obj.areaname=this.provinceName;
                }
            }
            this.$get("/web/regionalpatentmonitoringCtl/aliIpc",obj).then(d=>{
                if(d && d.code==1){
                    
                    var datastring = JSON.stringify(d);
                    this.aliIpcString = datastring;
                    /** window.localStorage.setItem("aliIpc",datastring);*/
                    var data = d.data[0];
                    var echarts = this.$refs.patentIpcRef.getEchartObj();
                    this.patentIpcEchartdata.xAxis[0].data = data.xdata;
                    this.patentIpcEchartdata.series[0].data = data.ydata;
                    echarts.setOption(this.patentIpcEchartdata);
                    echarts.resize();
                    window.addEventListener("resize",function(){
                        echarts.resize();
                    });
                    this.$forceUpdate();
                }
            })
        },
        aliApplicant (key) {
            var obj={type:"1",areaname:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.provinceType && this.provinceName){
                if(key){
                    obj.type= key;
                    obj.areaname=this.provinceName;
                }else {
                    obj.type="2";
                    obj.areaname=this.provinceName;
                }
            }
            this.$get("/web/regionalpatentmonitoringCtl/aliApplicant",obj).then(d=>{
                console.log(d,'}}}}}}}}}}}}}}}}}}}');
                if(d && d.code==1){
                    var datastring = JSON.stringify(d);
                    this.aliApplicantString=datastring;
                    /** window.localStorage.setItem("aliApplicant",datastring);*/
                    var data = d.data[0];
                    var echarts = this.$refs.patentApplicantRef.getEchartObj();
                    this.patentApplicantEchartdata.xAxis[0].data = data.xdata;
                    this.patentApplicantEchartdata.series[0].data = data.ydata;
                    echarts.setOption(this.patentApplicantEchartdata);
                    echarts.resize();
                    window.addEventListener("resize",function(){
                        echarts.resize();
                    });
                    this.$forceUpdate();
                }
            })
        },
        aliPubstatusnow (key) {
            var obj={type:"1",areaname:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.provinceType && this.provinceName){
                if(key){
                    obj.type= key;
                    obj.areaname=this.provinceName;
                }else {
                    obj.type="2";
                    obj.areaname=this.provinceName;
                }
            }
            this.$get("/web/regionalpatentmonitoringCtl/aliPubstatusnow",obj).then(d=>{
                if(d && d.code==1){
                    var datastring = JSON.stringify(d);
                    this.aliPubstatusnowString=datastring;
                    /**window.localStorage.setItem("aliPubstatusnow",datastring); */
                    var data = d.data[0];
                    var echarts = this.$refs.patentStatusRef.getEchartObj();
                    this.patentStatusEchartdata.xAxis[0].data = data.xdata;
                    this.patentStatusEchartdata.series[0].data = data.ydata;
                    echarts.setOption(this.patentStatusEchartdata);
                    echarts.resize();
                    window.addEventListener("resize",function(){
                        echarts.resize();
                    });
                    this.$forceUpdate();
                }
            })
        },
        aliTrend (key) {
            var obj={type:"1",areaname:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.provinceType && this.provinceName){
                if(key){
                    obj.type= key;
                    obj.areaname=this.provinceName;
                }else {
                    obj.type="2";
                    obj.areaname=this.provinceName;
                }
            }
            this.$get("/web/regionalpatentmonitoringCtl/aliTrend",obj).then(d=>{
                if(d && d.code==1){
                    var datastring = JSON.stringify(d);
                    this.aliTrendString = datastring;
                    /**window.localStorage.setItem("aliTrend",datastring); */
                    var data = d.data[0];
                    var data1 = d.data[1];
                    var echarts = this.$refs.patentApplyRef.getEchartObj();
                    this.patentApplyEchartdata.xAxis.data = data.xdata;
                    this.patentApplyEchartdata.series[0].data = data.ydata;
                    this.patentApplyEchartdata.series[1].data = data1.ydata;
                    echarts.setOption(this.patentApplyEchartdata);
                    echarts.resize();
                    window.addEventListener("resize",function(){
                        echarts.resize();
                    });
                    this.$forceUpdate();
                }
            })
        },
        aliAgency (key) {
            var obj={type:"1",areaname:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.provinceType && this.provinceName){
                if(key){
                    obj.type= key;
                    obj.areaname=this.provinceName;
                }else {
                    obj.type="2";
                    obj.areaname=this.provinceName;
                }
            }
            this.$get("/web/regionalpatentmonitoringCtl/aliAgency",obj).then(d=>{
                if(d && d.code==1){
                    var datastring = JSON.stringify(d);
                    this.aliAgencyString = datastring;
                    /**window.localStorage.setItem("aliAgency",datastring); */
                    var data = d.data[0];
                    var echarts = this.$refs.patentAgentRef.getEchartObj();
                    this.patentAgentEchartdata.xAxis[0].data = data.xdata;
                    this.patentAgentEchartdata.series[0].data = data.ydata;
                    echarts.setOption(this.patentAgentEchartdata);
                    echarts.resize();
                    window.addEventListener("resize",function(){
                        echarts.resize();
                    });
                    this.$forceUpdate();
                }
            })
        },
        aliplace (key) {
            var obj={type:"1",areaname:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.provinceType && this.provinceName){
                if(key){
                    obj.type= key;
                    obj.areaname=this.provinceName;
                }else {
                    obj.type="2";
                    obj.areaname=this.provinceName;
                }
            }
            var typeObj = true;
            if (obj.type == 4) {
                typeObj = false;
            }
            this.$get("/web/regionalpatentmonitoringCtl/aliplace",obj).then(d=>{
                console.log(d,'sssssssssssssssssssddddddddddddddddddd');
                if(d && d.code==1){
                    var data = d.data;
                    var obj ={data:data.detail};
                    var datastring = JSON.stringify(obj);
                    this.aliplaceString = datastring;
                    this.allsum = data.allsum;
                    this.sqsum = data.sqsum;
                    this.sqsumfm = data.sqsumfm;
                    this.sqsumwg = data.sqsumwg;
                    this.sqsumsy = data.sqsumsy;
                    var echarts1 = this.$refs.patentRegionRef.getEchartObj();
                    var this_ = this;
                    if (!typeObj) {
                        this.$get("/web/regionalpatentmonitoringCtl/aliCategory",obj).then(b=>{
                            console.log(b,'我是第二套请求');
                            this_.patentRegionEchartdata.series[0].data = [];
                            this_.patentRegionEchartdata.series[0].label = {
                                normal:{
                                    formatter(v) {
                                        let text = v.name;
                                        return text.length < 4 
                                            ? text 
                                            : `${text.slice(0,4)}\n${text.slice(4)}`
                                    }
                                }  
                            };
                            b.data.tdata.forEach(row =>{
                                var map = {};
                                map['name'] = row.areaname;
                                map['value'] = row.y_percentnum;
                                this_.patentRegionEchartdata.series[0].data.push(map);
                            });
                            echarts1.setOption(this.patentRegionEchartdata);
                            echarts1.resize();
                            window.addEventListener("resize",function(){
                                echarts1.resize();
                            });
                            this.$forceUpdate();
                        })
                    }else {
                        this_.patentRegionEchartdata.series[0].data = [];
                        data.tdata.forEach(row =>{
                            var map = {};
                            map['name'] = row.areaname;
                            map['value'] = row.y_percentnum;
                            this_.patentRegionEchartdata.series[0].data.push(map);
                        });
                        echarts1.setOption(this.patentRegionEchartdata);
                        echarts1.resize();
                        window.addEventListener("resize",function(){
                            echarts1.resize();
                        });
                        this.$forceUpdate();
                    }
                    /* 2 */
                    this.myChart = echarts.init(document.getElementById('container'));
                    var this_ = this;
                    if (this.provinceName == '') {
                        this.regionEchartdata.series[0].data = data.mapdata_apply;
                        this.myChart.setOption(this.regionEchartdata,true);
                        this_.myChart.resize();
                        window.addEventListener("resize",function(){
                            this_.myChart.resize();
                        });
                        this.$forceUpdate();
                    }else {
                        this.cityEchartdata.dataRange.max = data.jdata[0].y_applynum;
                        this.cityEchartdata.series[0].mapType = this.provinceName;
                        this.cityEchartdata.series[0].data = data.mapdata_apply;
                        this.myChart.setOption(this.cityEchartdata, true);
                        this_.myChart.resize();
                        window.addEventListener("resize",function(){
                            this_.myChart.resize();
                        });
                        this.$forceUpdate();
                    }
                }
            })
        },
        annual(val) {
            window.localStorage.setItem("year",val);
            this.aliIpc();
            this.aliApplicant();
            this.aliPubstatusnow();
            this.aliTrend();
            this.aliAgency();
            this.aliplace();
        },
        CheckDetails (detailtype) {
            console.log(detailtype);
            if(detailtype==0){
                window.localStorage.setItem("regionalpatentmonitoringdetaildata",this.aliplaceString);
            }else if(detailtype==1){
                window.localStorage.setItem("regionalpatentmonitoringdetaildata",this.aliIpcString);
            }else if(detailtype==2){
                window.localStorage.setItem("regionalpatentmonitoringdetaildata",this.aliApplicantString);
            }else if(detailtype==3){
                window.localStorage.setItem("regionalpatentmonitoringdetaildata",this.aliTrendString);
            }else if(detailtype==4){
                window.localStorage.setItem("regionalpatentmonitoringdetaildata",this.aliPubstatusnowString);
            }else if(detailtype==5){
                window.localStorage.setItem("regionalpatentmonitoringdetaildata",this.aliAgencyString);
            }
            this.$router.push({
                path:"/regionalpatentmonitoringdetails",
                query:{detailtype:detailtype}
            });
        },
        returnpage (val) {
            $('#containerGd').hide();
            $('#container').show();
            if (val == 1) {
                window.localStorage.setItem("provinceName",this.provinceNameOne);
                var that = this;
                this.cityType = false;
                for(var i= 0;i<that.provincesText.length;i++){
                    if(this.provinceNameOne == that.provincesText[i]){
                        that.showProvince(that.provinces[i],that.provincesText[i]);
                        break ;
                    }
                }
            }else {
                this.myChart.setOption(this.regionEchartdata, true);
                this.provinceType = false;
                this.provinceName = '';
                window.localStorage.setItem("provinceNameOne",'');
                window.localStorage.setItem("provinceName",'');
                this.aliIpc();
                this.aliApplicant();
                this.aliPubstatusnow();
                this.aliTrend();
                this.aliAgency();
                this.aliplace();
            }
        },
        showDistrict(pName) {
            var that = this;
            that.myChart.clear();
            that.provinceName = pName;
            that.cityType = true;
            $('#containerGd').show();
            $('#container').hide();
            let map = new AMap.Map("containerGd", {
                resizeEnable: true,
                center: [116.397428, 39.90923],
                mapStyle: "amap://styles/darkblue",
                zooms:[9,15]
            });
            /* 地区标 */
            function markLocation(address) {
                AMap.plugin('AMap.Geocoder', function() {
                    var geocoder = new AMap.Geocoder();            
                    geocoder.getLocation(address, function(status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                                
                            var lng = result.geocodes[0].location.lng;
                            var lat = result.geocodes[0].location.lat;

                            var marker = new AMap.Marker({
                                map: map,
                                position: new AMap.LngLat(lng, lat),
                            });
                            
                        } else {
                            console.log('定位失败！');
                        }
                    });
                });
            }

            markLocation('北京市' + pName);
            /* */
            var logMapinfo = function (){
                var zoom = map.getZoom();
                console.log(zoom);
            };
            var bounds = map.getBounds();
            map.setLimitBounds(bounds);
            logMapinfo();
            function mapZoom(){
                logMapinfo();
            }
            map.on('zoomchange', mapZoom);

            var placeSearch = new AMap.PlaceSearch();
            var infoWindow=new AMap.AdvancedInfoWindow({});
            map.on('hotspotover', function(result) {
                placeSearch.getDetails(result.id, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        placeSearch_CallBack(result);
                    }
                });
            });
            /* 鼠标移动获取地址 */
            var infoWindow = new AMap.InfoWindow({
                content:""
            });
            function placeSearch_CallBack(data) {
                var poiArr = data.poiList.pois;
                var location = poiArr[0].location;
                
                
                console.log(typeof poiArr[0].location);
                var s = {
                    lat: poiArr[0].location.lat,
                    lng: poiArr[0].location.lng
                };
                var obj = {
                    name: poiArr[0].name,
                    location: s
                };
                console.log(obj);
                that.$root.getReq("/web/regionalpatentmonitoringCtl/aliGaode",obj).then(d=>{
                    console.log(d);
                    
                    infoWindow.setContent(createContent(d));
                    infoWindow.open(map,location);
                })
            };
            function createContent(poi) {
                var s = [];
                console.log(poi);
                var a = poi.data.nameinfo != null ? poi.data.nameinfo : poi.data.locationlist;
                console.log(a);
                if (poi.data.nameinfo == null) {
                    for (let i = 0; i < a.length; i++) {
                        s.push('<div class="info-title">'+a[i].name + "：" + a[i].num);
                    }
                }else {
                    s.push('<div class="info-title">'+a.name);
                    /*s.push("电话：" + poi.tel);*/
                    s.push("专利量：" + a.num);
                    s.push('<div>');
                }
                console.log(s);
                return s.join("<br>");
            };
            that.aliIpc(4);
            that.aliApplicant(4);
            that.aliPubstatusnow(4);
            that.aliTrend(4);
            that.aliAgency(4);
            that.aliplace(4);
            /*var district = null;
            var polygons=[];
            function drawBounds() {
                
                if(!district){
                    var opts = {
                        subdistrict: 0, 
                        extensions: 'all',  
                        level: 'district'
                    };
                    district = new AMap.DistrictSearch(opts);
                }
                district.setLevel(that.city);
                district.search(that.city, function(status, result) {
                    
                    map.remove(polygons);
                    polygons = [];
                    var bounds = result.districtList[0].boundaries;
                    if (bounds) {
                        for (var i = 0, l = bounds.length; i < l; i++) {
                
                            var polygon = new AMap.Polygon({
                                strokeWeight: 1,
                                path: bounds[i],
                                fillOpacity: 0.4,
                                fillColor: '#80d8ff',
                                strokeColor: '#0091ea'
                            });
                            polygons.push(polygon);
                        }
                    }
                    map.add(polygons);
                    map.setFitView(polygons);
                });
            }
            drawBounds();*/
        },
        showCity(pName,cityValue) {
            var that = this;
            that.provinceNameOne = window.localStorage.getItem('provinceNameOne');
            that.provinceName = pName;
            that.provinceType = true;
            that.cityType = true;
            window.localStorage.setItem("provinceName",pName);
            $.ajax({
                url: "js/echarts/geometryCouties/" + cityValue + '.json',
                type: "GET",
                dataType: "json",
                async: false,
                success: function (data) {
                    echarts.registerMap(pName,data);
                    var options={
                        dataRange: {
                            orient: 'vertical',
                            min: 0,
                            max: 55000,
                            text: ['High', 'Low'],
                            textStyle:{
                                color:"#ffffff"
                            },
                            splitNumber: 0,
                            color: ['rgb(3,112,222)', 'rgb(100,175,236)', 'rgb(222,254,255)']
                        },
                        series: [{
                            type: 'map',
                            zoom: 1,
                            roam: true,
                            map: pName,
                            label: {
                                normal: {
                                    position: 'right',
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ffeb7b'
                                }
                            },
                            data:[]
                        }]
                    };
                    that.myChart.clear();
                    that.myChart.setOption(options);
                    that.aliplace(3);
                    that.aliIpc(3);
                    that.aliApplicant(3);
                    that.aliPubstatusnow(3);
                    that.aliTrend(3);
                    that.aliAgency(3);
                }
            });
        },
        showProvince (pName, Chinese_){;
            this.cityEchartdata.series[0].mapType = '';
            window.localStorage.setItem("provinceName",Chinese_);
            window.localStorage.setItem("provinceNameOne",Chinese_);
            this.provinceName = Chinese_;
            this.provinceNameOne = Chinese_;
            this.provinceType = true;
            var that=this;
            this.loadBdScript('$'+pName+'JS','js/echarts/province/'+pName+'.js',function(){
               /**  that.myChart.setOption(that.cityEchartdata, true);*/
               that.aliplace();
            });
            this.aliIpc();
            this.aliApplicant();
            this.aliPubstatusnow();
            this.aliTrend();
            this.aliAgency();
            
        },
        loadBdScript (scriptId, url, callback){
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (script.readyState){ 
                script.onreadystatechange = function(){
                    if (script.readyState == "loaded" || script.readyState == "complete"){
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {  
                script.onload = function(){
                    callback();
                };
            }
            script.src = url;
            script.id = scriptId;
            document.getElementsByTagName("head")[0].appendChild(script);
        }

    },
    beforeDestroy () {
        
    },
    components:{
        gsbEchart:gsbEchart
    }
}
</script>

<style>

</style>