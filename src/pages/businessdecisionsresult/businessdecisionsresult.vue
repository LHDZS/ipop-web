<style lang="less" scoped>
.businessdecisionsresult {
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
    .bus-title {
        width: 100%;
        height: 10%;
        background: url(/imgs/bgj1.png) no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .bus-title span {
        display: inline-block;
        width: 0;
        height: 113%;
        vertical-align: middle; 
    }
    .bus-left {
        font-size: 14px;
        padding-left: 20px;
        color: rgba(255,255,255,1);
        cursor: pointer;
    }
    .reg-block {
        float: right;
        width: 160px;
        height: 40px;
        margin-right: 20px;
        margin-top: 1%;
    }
    .reg-home .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%;
    }
    .reg-home .el-input__inner {
        background-color: transparent !important;
    }
    .reg-bj1 {
        float: left;
        width: 43.8%;
        height: 100%;
        margin: 0 2.77%;
        box-sizing: border-box;
    }
    .reg-bj1-title {
        width: 100%;
        height: 12.4%;
        line-height: 64px;
        font-size:18px;
        font-size: 0.18rem;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(247,247,248,1);
        text-align: center;
        position: relative;
    }
    .reg-bj1-button {
        position: absolute;
        top: 0px;
        right: 0px;
        width:140px;
        height:36px;
        line-height: 36px;
        text-align: center;
        background:rgba(31,144,230,1);
        border-radius:6px;
        font-size:16px;
        font-size: 0.16rem;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
        margin-top: 15px;
    }

    .reg-bj-echrts {
        width: 100%;
        height: 82%;
    }
    .reg-main1 {
        width: 100%;
        height: 57%;
        padding: 0px 9px;
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
    .reg-left-item1 {
        width: 100%;
        height: 46.88%;
        margin-top: 10px;
        background: url(/imgs/reg-div.png) no-repeat;
        background-size: 100% 100%;
    }
    .reg-right {
        float: right;
        width: 25.18%;
        height: 100%;
    }
    .reg-echart{
        width:100%;
        height:84%;
    }
    .reg-bottom {
        width: 100%;
        height: 33%;
        padding: 0px 9px;
        box-sizing: border-box;
    }
    .reg-bottom-left {
        float: left;
        width: 49.06%;
        height: 94%;
        background: url(/imgs/reg-div1.png) no-repeat;
        background-size: 100% 100%;
    }
    .reg-bottom-right {
        float: right;
        width: 49.06%;
        height: 94%;
        background: url(/imgs/reg-div1.png) no-repeat;
        background-size: 100% 100%;
    }
    .reg-home {
        width: 100%;
        height: 100%;
        /* background: url('/imgs/bejjjj.jpg') no-repeat;
        background-size: 100% 100%; */
        background-color: #0F0C3F;
        moz-user-select: -moz-none; 
        -moz-user-select: none; 
        -o-user-select:none; 
        -khtml-user-select:none; 
        -webkit-user-select:none; 
        -ms-user-select:none; 
        user-select:none;
    }
    .reg-title {
        width: 100%;
        height: 10.53%;
        background: url(/imgs/title.png) no-repeat center 0;
        background-size: 100%;
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
        background: url(/imgs/bjq.png) no-repeat center bottom;
        background-size: 88%;
        box-sizing: border-box;
    }
    .reg-bj-header {
        width: 100%;
        height: 10%;
        padding-top: 3%;
    }
    .reg-bj-header-item {
        float: left;
        width: 31.6%;
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
        height: 100%;
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
    .reg-left-item-name {
        width: 100%;
        height: 14%;
        padding: 0 22px;
        box-sizing: border-box;
    }
    .reg-item-nameleft {
        display: inline-block;
        width: 68%;
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
        width: 28%;
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
        height:84%;
    }
    .reg-left-item-name span {
        display: inline-block;
        width: 0;
        height: 113%;
        vertical-align: middle; 
    }
}
</style>

<template>
  <div class="businessdecisionsresult">
    <div class="loading" v-if="loading">
            <img class="loading-img" src="/imgs/loadingimg.gif" alt="">
    </div>
    <div class="bus-title">
        <div class="bus-left" @click="fanhui">
            返回上一级
            <span></span>
        </div>
        <div class="reg-block">
            <el-date-picker
                v-model="year"
                type="year"
                size="mini"
                format="yyyy 年"
                value-format="yyyy"
                placeholder="选择年份"
                @change="yearChange">
            </el-date-picker>
        </div>
    </div>
    <!-- <div class="reg-main-title"></div> -->
    <div class="reg-main1">
        <div class="reg-left">
            <div class="reg-left-item1">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">企业专利概况<span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="companyPatentRef" key="1" :data="companyPatentEchartdata"></gsb-echart>
                </div>
            </div>
            <div class="reg-left-item1">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">企业专利法律状态分布<span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="companyPatentStatusRef" key="2" :data="companyPatentStatusEchartdata"></gsb-echart>
                </div>
            </div>
        </div>
        <div class="reg-bj1">
            <div class="reg-bj1-title">
                - {{entName}} -
                <!-- <div class="reg-bj1-button">生成报告</div> -->
            </div>
            <div class="reg-bj-echrts">
                <gsb-echart ref="patentMainWordsRef" key="5" :data="patentMainWordsEchartdata"></gsb-echart>
            </div>
        </div>
        <div class="reg-right">
            <div class="reg-left-item1">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">企业专利类型<span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="enterprisePatentRef" key="3" :data="enterprisePatentEchartdata"></gsb-echart>
                </div>
            </div>
            <div class="reg-left-item1">
                <div class="reg-left-item-name">
                    <div class="reg-item-nameleft">专利产业布局<span></span></div>
                </div>
                <div class="reg-echart">
                    <gsb-echart ref="patentIndustryRef" key="3" :data="patentIndustryEchartdata"></gsb-echart>
                </div>
            </div>
        </div>
    </div>
    <div class="reg-bottom">
        <div class="reg-bottom-left">
            <div class="reg-left-item-name">
                <div class="reg-item-nameleft">企业技术构成分析<span></span></div>
            </div>
            <div class="reg-echart">
                <gsb-echart ref="patentTechnologyRef" key="4" :data="patentTechnologyEchartdata"></gsb-echart>
            </div>
        </div>
        <div class="reg-bottom-right">
            <div class="reg-left-item-name">
                <div class="reg-item-nameleft">企业专利趋势<span></span></div>
            </div>
            <div class="reg-echart">
                <gsb-echart ref="patentApplyRef" key="5" :data="patentApplyEchartdata"></gsb-echart>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import gsbEchart from '@/components/echart'
export default {
    data:function(){
        return {
            loading:false,
            data:{},
            year: null,
            entName:"",
            companyPatentEchartdata:{
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {      
                        type : 'shadow' 
                    }
                },
                grid: {
                    top:'8%',
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: {
                    data: [],
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    axisLine:{
                        show:false
                    }
                },
                yAxis: {
                    axisLine:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#303E8C',
                                barBorderRadius:[10, 10, 10, 10]
                            }
                        },
                        barGap:'-100%',
                        barCategoryGap:'80%',
                        data: [],
                        animation: false
                    },
                    {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                label:{
                                    show:false,
                                    position:'top',
                                    textStyle:{color:"#fff"}
                                },
                                barBorderRadius:[10, 10, 10, 10],
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#83bff6'},
                                        {offset: 0.5, color: '#188df0'},
                                        {offset: 1, color: '#188df0'}
                                    ]
                                )
                            },
                            emphasis: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#2378f7'},
                                        {offset: 0.7, color: '#2378f7'},
                                        {offset: 1, color: '#83bff6'}
                                    ]
                                )
                            }
                        },
                        data: []
                    }
                ]
            },
            companyPatentStatusEchartdata:{
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
            patentIndustryEchartdata:{
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                calculable : true,
                color:['#0ed145','#83e1f6','#dc9913','#ee1515','#ec1ea4','#28ec1e','#361eec','#e58b8b','#f1d6a0','#83f6a3',],
                series : [
                    {
                        name:'产业分布',
                        type:'pie',
                        minAngle: 0,
                        avoidLabelOverlap: true,
                        radius : [10, 65],
                        center : ['50%', '50%'],
                        roseType : 'radius',
                        data:[],
                        label:{
                            align: 'left',
                            normal:{
                                formatter(v) {
                                    let text = v.name;
                                    if(text.length <= 8)
                                    {
                                        return text;
                                    }else if(text.length > 8 && text.length <= 16){
                                        return text = `${text.slice(0,8)}\n${text.slice(8)}`
                                    }else if(text.length > 16 && text.length <= 24){
                                        return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16)}`
                                    }else if(text.length > 24 && text.length <= 30){
                                        return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16,24)}\n${text.slice(24)}`
                                    }else if(text.length > 30){
                                        return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16,24)}\n${text.slice(24,30)}\n${text.slice(30)}`
                                    }
                                },
                                textStyle : {
                                    fontSize : 14
                                }
                            }
                        }
                    }
                ]
            },
            patentTechnologyEchartdata:{
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
            patentApplyEchartdata:{
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
                        data : [
                            
                        ],
                        axisLabel: {
                            textStyle: {
                                color: '#9A9DB0'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine:{
                            lineStyle: { 
                                color: 'rgba(255,255,255,.2)'
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#9A9DB0'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                 color: 'rgba(255,255,255,.1)'
                            }
                        },
                        axisLine:{
                          show:false
                        }
                    },
                    {
                        type : 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#9A9DB0'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                 color: '#2A97EC'
                            }
                        },
                        axisLine:{
                          show:false
                        }
                    }
                ],
                series : [
                    {
                        name:'发明专利申请数量',
                        type:'line',
                        symbol: 'circle',
                        barWidth: '40%',
                        itemStyle: {
                            normal: {
                                color: "#BF86FB"
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(1, 132, 213, 0.4)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(1, 132, 213, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                            }
                        },
                        data:[]
                    },
                    {
                        name:'专利授权数量',
                        type:'line',
                        symbol: 'circle',
                        barWidth: '40%',
                        itemStyle: {
                            normal: {
                                color: "#2A97EC"
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(1, 132, 213, 0.4)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(1, 132, 213, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                            }
                        },
                        data:[]
                    }
                ]
            },
            patentMainWordsEchartdata:{
                tooltip: {
                    show: true
                },
                series: [{
                    name: '企业专利',
                    type: 'wordCloud',
                    size: ['100%', '100%'],
                    sizeRange: [12, 32],
                    textRotation : [-45, 0, 45, 90],
                    textPadding: 0,
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' +
                                        Math.round(Math.random() * 255) +
                                        ', ' + Math.round(Math.random() * 255) +
                                        ', ' + Math.round(Math.random() * 255) + ')'
                            }
                        }
                    },
                    data: []
                }]
            },
            /* */
            enterprisePatentEchartdata:{
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top:'5%',
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    containLabel: true
                },
                legend: {
                    orient: 'vertical',
                    default: '#fff',
                    x: 'left',
                    data:[{name:'发明专利',textStyle: {color: '#fff'}},{name:'实用新型专利',textStyle: {color: '#fff'}},{name:'外观专利',textStyle: {color: '#fff'}}]
                },
                color:['#A859FF','#FF9745','#34ABFF'],

                series: [
                    {
                        name:'专利类型',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '14',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                           
                        ]
                    }
                ]
            }

        }
    },
    created(){
        /** this.showLoading();*/
        this.entName=this.$route.query.entName || "";
        this.year=this.$route.query.year || "";
        console.log(this.entName);
        if(!this.entName){
            this.$router.push(
                { path:'/businessdecisions',title:"企业智慧管理"}
            );
        }else {
            this.aliBusinessDecision();
        }
    },
    mounted:function(){
        
        /** var d = window.localStorage.getItem("aliBusinessDecision");
        if(d){
            var dd = JSON.parse(d);
            this.data = dd.data;
            this.initParams();
        }else{
            this.$router.push(
                { name:'/businessdecisions',title:"企业智慧管理"}
            );
            return ;
        }*/
        
    },
    methods:{
        fanhui () {
            this.$router.push({
                path:"/businessdecisions"
            });
        },
        showLoading(){
            var that=this;
            this.loading = true;
            setTimeout(()=>{
                that.loading = false;
            },3000);
        },
        yearChange(){
            /** this.showLoading();*/
            console.log(this.year);
            this.aliBusinessDecision();
        },
        aliBusinessDecision(){
            var obj={entName:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.entName ){
                obj.entName=this.entName;
            }else{
                return ;
            }
            // this.$root.showMask();
            this.$get("/web/regionalpatentmonitoringCtl/aliBusinessDecision",obj).then(d=>{
                if(d && d.code==1){
                    this.data = d.data;
                    console.log(d.data,'222222222222');
                    this.initParams(d.data);
                }
                // this.$root.hideMask();
            }).catch(e=>{
                // this.$root.hideMask();
            })
        },
        initParams(data){
            var data = data;
            let this_ = this;
            console.log(data,'1111111111111');
            if(data){
                let cped = data.profile;
                console.log(data,'3333333333')
                if(cped){
                    let companyPatentEchartdata_x = ["总量","公开量","有效量","无效量"];
                    let companyPatentEchartdata_y = [cped.sum ,cped.pubnum,cped.validnum,cped.unvalidnum];
                    var echarts = this_.$refs.companyPatentRef.getEchartObj();
                    this_.companyPatentEchartdata.xAxis.data = companyPatentEchartdata_x;
                    this_.companyPatentEchartdata.series[1].data = companyPatentEchartdata_y;
                    echarts.setOption(this_.companyPatentEchartdata);
                    echarts.resize();
                    window.addEventListener("resize",function(){
                        echarts.resize();
                    });
                    this_.$forceUpdate();
                }
                console.log(data.title,'????')
                if(data.title){
                    
                    this_.patentMainWordsEchartdata.series[0].data=data.title;
                    var echarts2 = this_.$refs.patentMainWordsRef.getEchartObj();
                    echarts2.setOption(this_.patentMainWordsEchartdata);
                    echarts2.resize();
                    window.addEventListener("resize",function(){
                        echarts2.resize();
                    });
                    this_.$forceUpdate();
                    console.log(this_.patentMainWordsEchartdata,'hahah')
                }
                
                if(data.statestatistic && data.statestatistic.length>0){
                    var x=[];
                    var y=[];
                    for(var i=0;i<data.statestatistic.length;i++){
                        var o=data.statestatistic[i];
                        x.push(o.statename);
                        y.push(o.value);
                    }
                    var echarts3 = this.$refs.companyPatentStatusRef.getEchartObj();
                    this.companyPatentStatusEchartdata.xAxis[0].data=x;
                    this.companyPatentStatusEchartdata.series[0].data=y;
                    echarts3.setOption(this.companyPatentStatusEchartdata);
                    window.addEventListener("resize",function(){
                        echarts3.resize();
                    });
                    this.$forceUpdate();
                }
                if(data.applytrend){
                    var x=[];
                    var y1=[];
                    var y2=[];
                    for(var i=0;i<data.applytrend.apply.length;i++){
                        var o=data.applytrend.apply[i];
                        var o2 = data.applytrend.empower[i];
                        x.push(o.data);
                        y1.push(o.value);
                        y2.push(o2.value);
                    }
                    var echarts4 = this.$refs.patentApplyRef.getEchartObj();
                    this_.patentApplyEchartdata.xAxis[0].data=x;
                    this_.patentApplyEchartdata.series[0].data=y1;
                    this_.patentApplyEchartdata.series[1].data=y2;
                    echarts4.setOption(this.patentApplyEchartdata);
                    window.addEventListener("resize",function(){
                        echarts4.resize();
                    });
                    this_.$forceUpdate();
                }
                if(data.typestatistic && data.typestatistic.length>0){
                    var ddd=[];
                    for(var i=0;i<data.typestatistic.length;i++){
                        var o=data.typestatistic[i];
                        var obj={name:o.typename,value:o.value};
                        ddd.push(obj);
                    }
                    var echarts5 = this_.$refs.enterprisePatentRef.getEchartObj();
                    this_.enterprisePatentEchartdata.series[0].data=ddd;
                    
                    this_.enterprisePatentEchartdata.legend.data = [];
                    ddd.forEach(row =>{
                        var map = {};
                        map['name'] = row.name;
                        map['textStyle'] = {color: '#fff'};
                        this_.enterprisePatentEchartdata.legend.data.push(map);
                    });
                    echarts5.setOption(this.enterprisePatentEchartdata);
                    echarts5.resize();
                    window.addEventListener("resize",function(){
                        echarts5.resize();
                    });
                    this.$forceUpdate();
                }
                if(data.ipc && data.ipc.length>0){
                    var x=[];
                    var y=[];
                    for(var i=0;i<data.ipc.length;i++){
                        var o=data.ipc[i];
                        x.push(o.code);
                        y.push(o.num);
                    }
                    var echarts6 = this.$refs.patentTechnologyRef.getEchartObj();
                    this.patentTechnologyEchartdata.xAxis[0].data=x;
                    this.patentTechnologyEchartdata.series[0].data=y;
                    echarts6.setOption(this.patentTechnologyEchartdata);
                    echarts6.resize();
                    window.addEventListener("resize",function(){
                        echarts6.resize();
                    });
                    this.$forceUpdate();
                }

                if(data.distribution && data.distribution.length>0){
                    var patentIndustryEchartdata = [];
                    for(var i=0;i<data.distribution.length;i++){
                        var patentIndustryEchartObj={name:data.distribution[i].industryname,value:data.distribution[i].value};
                        patentIndustryEchartdata.push(patentIndustryEchartObj);
                    }
                    var echarts7 = this.$refs.patentIndustryRef.getEchartObj();
                    this.patentIndustryEchartdata.series[0].data=patentIndustryEchartdata;
                    echarts7.setOption(this.patentIndustryEchartdata);
                    window.addEventListener("resize",function(){
                        echarts7.resize();
                    });
                    this.$forceUpdate();
                }
                
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