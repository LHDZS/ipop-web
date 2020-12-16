<style lang="less" scoped>
.businessdecisions {
    width: 100%;
    height: 100%;
    background: url(/imgs/businessdecisions.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 13%;
    box-sizing: border-box;
    moz-user-select: -moz-none; 
    -moz-user-select: none; 
    -o-user-select:none; 
    -khtml-user-select:none; 
    -webkit-user-select:none; 
    -ms-user-select:none; 
    user-select:none;
}
.bd-title {
    width: 100%;
    text-align: center;
    font-size:48px;
    font-size: 0.48rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    letter-spacing: 3px;
}
.bd-title-name {
    width: 100%;
    text-align: center;
    font-size:18px;
    font-size: 0.18rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(97,152,194,1);
    margin-top: 27px;
    letter-spacing: 3px;
    margin-bottom: 59px;
}
.bd-main-input {
    width: 832px;
    height: 78px;
    border-radius: 6px;
    background-color: rgba(17,132,224,0.2);
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
}
.bd-main-radio {
    width: 832px;
    height: 38px;
    margin: 0 auto;
    text-align: left;
}
.bd-input {
    float: left;
    width:668px;
    height:58px;
    background:rgba(15,12,63,1);
    border:1px solid rgba(36,164,252,1);
    border-radius:3px;
    font-size:16px;
    font-size: 0.16rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color: #ADD8E6;
    box-sizing: border-box;
}

.bd-input::-webkit-input-placeholder{
    color:rgba(255,255,255,1);
}
.bd-button {
    float: left;
    width:134px;
    height:58px;
    line-height: 58px;
    text-align: center;
    background:rgba(31,144,230,1);
    border-radius:3px;
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
}

</style>

<style>
.businessdecisions .el-input {
    height: 100% !important;
}

.businessdecisions  .el-input__inner::-webkit-input-placeholder{
    color:rgba(255,255,255,1);
}
.businessdecisions .el-radio-button__inner {
    background: transparent;
    color: #fff;
    border: none;
}
.businessdecisions .el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
}
.businessdecisions .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #409EFF;
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: -1px 0 0 0 transparent;
    box-shadow: -1px 0 0 0 transparent;
}
.businessdecisions .el-radio-group {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  font-size: 0; 
  min-width: 300px;
}
.businessdecisions .el-input__inner {
    height: 100% !important;
    border: none !important;
    color: #ADD8E6 !important;
    background-color: transparent !important;
    font-size:16px !important;
    font-size: 0.16rem !important;
}
.businessdecisions .el-radio-button__inner {
    background: transparent;
    color: #fff;
    border: none;
}
.businessdecisions .el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
}
.businessdecisions .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #409EFF;
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: -1px 0 0 0 transparent;
    box-shadow: -1px 0 0 0 transparent;
}
</style>

<template>
<div class="businessdecisions">
    <div class="bd-title">企业智慧管理</div>
    <div class="bd-title-name">提供企业专利数据监测服务，方便企业主体专利分析</div>
    <div class="bd-main-radio">
        <el-radio-group v-model="radio1">
            <el-radio-button label="深度分析"></el-radio-button>
            <el-radio-button label="竞争分析"></el-radio-button>
        </el-radio-group>
    </div>
    <div class="bd-main-input">
        <!-- <input type="text" class="bd-input" v-model="entName" placeholder="请输入企业名称"> -->
        <div class="bd-input">
            <gsb-select size="medium" v-model="entName" 
                refMethod="getCompanyInfoByLikeName" :autoComplete="true" :isFilter="true" :isGrouped="true"
                refModel="regionalpatentmonitoring"  :labelField="entName" :valueField="entName" 
                style="position:relative;width:100%;" placeHolder="请输入选择企业名称" >
            </gsb-select>
        </div>
               
        <div class="bd-button" @click="chaxun">查企业</div>
        <!-- <div class="bd-button" @click="chaxun">竞争力分析</div> -->
    </div>
    <div id="wave-container" class="animate-wave-container" style="width: 1920px;">
        <div class="wave-svg-s1">
            <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient id="wave-gradient1" x1="0%" y1="0%" x2="100%" y2="0">
                        <stop offset="0%" style="stop-color:rgba(28,164,252, 0.5);stop-opacity:1"></stop>
                        <stop offset="50%" style="stop-color:rgba(28,164,252,1);stop-opacity:1"></stop>
                        <stop offset="100%" style="stop-color:rgba(28,164,252,0.5);stop-opacity:1"></stop>
                    </linearGradient>
                </defs>
                <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                    <g id="线条组合" transform="translate(0.000000, 22.000000)">
                        <path class="wave-path1" d="
                            M1920,0.047
                            C1707.9649659722222,0.047 1643.2576798611112,62.965 1448.2226458333332,62.965
                            C1253.1876118055557,62.965 1141.718065277778,24 946.6817097222223,24
                            C751.6466756944444,24 661.0506604166667,62.965 466.01562638888896,62.965
                            C270.9792708333334,62.965 195.03503402777778,0 0,0
                            L0,175.047
                            L1920,175.047
                            C1920,175.047 1920.1004361111113,0.047 1920,0.047" id="S3" opacity="0.100000001"></path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="wave-link-s1">
            <div class="wave-keywords-link animated fadeIn" style="top:55px;left:436.1041666666667px" @click="search1('华为技术有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">华为</span>
            </div><div class="wave-keywords-link animated fadeIn" style="top:55px;left:1427.25px" @click="search1('京东方科技集团股份有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">京东方</span>
            </div>
        </div>
        <div class="wave-svg-s2">
            <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
                <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                    <g id="线条组合" transform="translate(0.000000, 22.000000)">
                        <path class="wave-path1" d="
                            M1920,175
                            L0,175
                            L0,85
                            C158.58333333333334,85 272.93956434861116,50.0224241 431.5228976819444,50.0224241
                            C590.1062310152778,50.0224241 811.3264802881945,118.825457 969.9098136215279,118.825457
                            C1128.4931469548612,118.825457 1303.5866638055556,50.0224241 1462.1699971388891,50.0224241
                            C1620.7533304722224,50.0224241 1744.4166666666667,83 1920,85
                            L1920,175 Z" id="S2" opacity="0.200000003"></path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="wave-link-s2">
            <div class="wave-keywords-link animated fadeIn" style="top:110px;left:925.0694444444445px" @click="search1('百度在线网络技术(北京)有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">百度</span>
            </div>
        </div>
        <div class="wave-svg-s3">
            <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                    <g id="线条组合" transform="translate(0.000000, 22.000000)">
                        <path class="wave-path1" d="
                            M1920,175.132909
                            L0,175.132909
                            L0,112.132909
                            C158.58333333333334,112.132909 238.7215561576389,145.132909 397.30488949097224,145.132909
                            C555.8882228243056,145.132909 768.4249060125001,99 927.0082393458334,99
                            C1085.5915726791668,99 1310.6518499708334,139.47418 1469.2351885902779,139.47418
                            C1627.8185219236111,139.47418 1744.4166666666667,113.132909 1920,112.132909
                            L1920,175.132909 Z" id="S1" opacity="0.300000012"></path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="wave-link-s3">
            <div class="wave-keywords-link animated fadeIn" style="top:138px;left:363.4201388888889px" @click="search1('国家电网公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">国家电网</span>
            </div><div class="wave-keywords-link animated fadeIn" style="top:132px;left:1453.6805555555557px" @click="search1('中国石油天然气股份有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">中国石油</span>
            </div>
        </div>
        <div class="wave-svg-s4">
            <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                    <g id="线条组合" transform="translate(0.000000, 22.000000)">
                        <path class="wave-path1" d="
                            M1920,0.047
                            C1707.9649659722222,0.047 1643.2576798611112,62.965 1448.2226458333332,62.965
                            C1253.1876118055557,62.965 1141.718065277778,24 946.6817097222223,24
                            C751.6466756944444,24 661.0506604166667,62.965 466.01562638888896,62.965
                            C270.9792708333334,62.965 195.03503402777778,0 0,0
                            L0,175.047
                            L1920,175.047
                            C1920,175.047 1920.1004361111113,0.047 1920,0.047" id="S3" opacity="0.100000001"></path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="wave-link-s4">
            <div class="wave-keywords-link animated fadeIn" style="top:55px;left:436.1041666666667px" @click="search1('腾讯科技(深圳)有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">腾讯</span>
            </div><div class="wave-keywords-link animated fadeIn" style="top:55px;left:1427.25px" @click="search1('珠海格力电器股份有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">格力</span>
            </div>
        </div>
        <div class="wave-svg-s5">
            <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                    <g id="线条组合" transform="translate(0.000000, 22.000000)">
                        <path class="wave-path1" d="
                            M1920,175
                            L0,175
                            L0,85
                            C158.58333333333334,85 272.93956434861116,50.0224241 431.5228976819444,50.0224241
                            C590.1062310152778,50.0224241 811.3264802881945,118.825457 969.9098136215279,118.825457
                            C1128.4931469548612,118.825457 1303.5866638055556,50.0224241 1462.1699971388891,50.0224241
                            C1620.7533304722224,50.0224241 1744.4166666666667,83 1920,85
                            L1920,175 Z" id="S2" opacity="0.200000003"></path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="wave-link-s5">
            <div class="wave-keywords-link animated fadeIn" style="top:110px;left:925.0694444444445px" @click="search1('中兴通讯股份有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">中兴</span>
            </div>
        </div>
        <div class="wave-svg-s6">
            <svg id="wave-svg" width="1920" height="178px" viewBox="0 0 1920 178" preserveAspectRatio="xMinYMax" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="s1-copy" transform="translate(0.000000, -22.000000)">
                    <g id="线条组合" transform="translate(0.000000, 22.000000)">
                        <path class="wave-path1" d="
                            M1920,175.132909
                            L0,175.132909
                            L0,112.132909
                            C158.58333333333334,112.132909 238.7215561576389,145.132909 397.30488949097224,145.132909
                            C555.8882228243056,145.132909 768.4249060125001,99 927.0082393458334,99
                            C1085.5915726791668,99 1310.6518499708334,139.47418 1469.2351885902779,139.47418
                            C1627.8185219236111,139.47418 1744.4166666666667,113.132909 1920,112.132909
                            L1920,175.132909 Z" id="S1" opacity="0.300000012"></path>
                    </g>
                </g>
            </svg>
        </div>
        <div class="wave-link-s6">
            <div class="wave-keywords-link animated fadeIn" style="top:138px;left:363.4201388888889px" @click="search1('三星电子株式会社')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">三星</span>
            </div><div class="wave-keywords-link animated fadeIn" style="top:132px;left:1453.6805555555557px" @click="search1('鸿海精密工业股份有限公司')">
            <span class="wave-circle-icon animated fadeIn">
                <span class="wave-circle-icon-big"></span>
                <span class="wave-circle-icon-small"></span>
            </span>
                <span class="wave-keywords-text animated fadeIn">富士康</span>
            </div>
    </div>
</div>
</div>

</template>

<script>
import "../../../public/css/animated.css";
import gsbSelect from '../../components/select'

export default {
    data:function(){
        return {
            radio1: '深度分析',
            year:"全部年份",
            entName:"",
        }
    },
    mounted:function(){
        $('#wave-container').hover(function(){
            $("#wave-container").addClass("animate-wave-container-hover");
        },function(){
            $("#wave-container").removeClass("animate-wave-container-hover");
        });
    },
    methods:{
        search1(val){
            if (typeof val == 'string') {
              console.log(val, this.radio1);
              this.entName = val;
              this.chaxun();
            };
            /*this.total=0;
            this.currentpage=1;
            清楚勾选的痕迹
            this.checkAllAnalysis=false;
            this.checkListAnalysis=[];
            this.multipleSelection=[];
            this.search();*/
        },
        chaxun () {
            var obj={entName:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.entName ){
                obj.entName=this.entName;
            }else{
                this.$message.warning("请填写企业名称");
                return;
            }
            if (this.radio1 === '深度分析') {
                this.$router.push({
                    path:"/businessdecisionsresult",
                    query:obj
                });
            }else {
                this.$router.push({
                    path:"/competitiveanalysis",
                    query:obj
                });
            }
            
            
        },
        aliBusinessDecision(){
            var obj={entName:"",year:""};
            if(this.year && this.year!="全部年份" ){
                obj.year=this.year;
            }
            if(this.entName ){
                obj.entName=this.entName;
            }else{
                this.$message.warning("请填写企业名称");
                return;
            }
            var that=this;
            this.$root.showMask();
            this.$get("/web/regionalpatentmonitoringCtl/aliBusinessDecision",obj).then(d=>{
                if(d && d.code==1){
                    this.data = d.data;
                    console.log(d.data);
                    var datastring = JSON.stringify(d);
                    window.localStorage.setItem("aliBusinessDecision",datastring);
                    this.$router.push({
                        path:"/businessdecisionsresult",
                        query:{
                            year:that.year,
                            entName:that.entName
                        }
                    });
                }else{
                    this.$message.warning("查询失败，请刷新页面后重新操作"); 
                }
                this.$root.hideMask();
            }).catch(e=>{
                console.log(e);
                this.$message.warning("查询失败，请刷新页面后重新操作"); 
                this.$root.hideMask();
            })
        },
    },
    components:{
        gsbSelect:gsbSelect
    }
}
</script>

<style>

</style>