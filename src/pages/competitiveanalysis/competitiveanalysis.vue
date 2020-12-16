<style lang="less" scoped>
.competitiveanalysis {
    width: 100%;
    min-height: 100%;
    padding-bottom: 20px;
    background:rgba(15,12,63,1);
}
.competitiveanalysis .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.competitiveanalysis .title {
    width: 100%;
    height: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.title-div {
    display: inline-block;
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(0,160,234,1);
    line-height:63px;
}
.title-span {
    position: absolute;
    left: 0;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    cursor: pointer;
}
.title-span span {
    margin-right: 4px;
}
.lhd_header {
    width:100%;
    min-height:140px;
    background:rgba(15,12,63,1);
    border:1px solid rgba(17,132,224,1);
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    margin-top: 15px;
    overflow: hidden;
}
.lhd_header .left {
    float: left;
    width: 120px;
    height: 120px;
    text-align: center;
}
.lhd_header .right {
    float: left;
    /* width: calc(100% - 120px); */
    height: 100%;
    color: #fff;
    padding-left: 20px;
    box-sizing: border-box;
    line-height: 40px;
}
.lhd_header .right div {
    color: rgba(255, 255, 255, 1);
}
.lhd_header .right div span {
    color: rgba(174, 210, 255, 1);
    margin-right: 37px;
}
.lhd_h3 {
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(255,255,255,1);
}
.lhd_table {
    width: 100%;
}
.lhd_table_top {
    width:1200px;
    height:60px;
    background:rgba(27,37,106,0.8);
    border:1px solid rgba(17,132,224,1);
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(55,166,255,1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
.lhd_table_top span {
    flex: 1;
    text-align: center;
}
.lhd_table_list {
    width: 100%;
    height: 60px;
    border: 1px solid rgba(17,132,224,1);
    border-top: none;
    border-bottom: 1px solid rgba(68,76,148,1);
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
.lhd_table_list span {
    flex: 1;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding: 0px 10px;
    box-sizing: border-box;
}
.lhd_table_list .dj {
    cursor: pointer;
    color: rgba(17,132,224,1);
}

</style>

<template>
  <div class="competitiveanalysis">
    <div class="main">
        <div class="title">
            <span class="title-span" @click="fanhui"><span></span>返回上一级</span><div class="title-div">企业竞争分析</div>
        </div>
        <div class="lhd_header">
            <!-- <div class="left"><img src="/imgs/fire.png" alt=""></div> -->
            <div class="right">
                <div class="lhd_h3">{{obj.companyname}}</div>
                <div>专利总量&nbsp;：&nbsp;<span>{{obj.total}}</span>
                    行业&nbsp;：&nbsp;<span>{{obj.industryname}}</span>
                    专利关键词&nbsp;：&nbsp;<el-tooltip :content="obj.businessscope" placement="bottom" effect="light"><span>{{obj.keys}}</span></el-tooltip>
                    </div>
                <div>
                    主营业务&nbsp;：&nbsp;<span>{{obj.keyword}}</span>
                </div>
            </div>
        </div>
        <div class="title">
            <span class="title-span">专利竞争企业</span>
        </div>
        <div class="lhd_table" v-loading="loading" element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.5)">
            <div class="lhd_table_top">
                <span v-for="(item,key) in tableFrom" :key="key">{{item}}</span>
            </div>
            <div class="lhd_table_list" v-for="(list,index) in obj.competeinfo" :key="index">
                <span>{{index + 1}}</span>
                <span>{{list.companyname}}</span>
                <span>{{list.patentnum}}</span>
                <el-tooltip :content="list.keyword" placement="bottom" effect="light"><span>{{list.keys}}</span></el-tooltip>
                <span>{{list.industryname}}</span>
                <span>{{list.competeindex}}</span>
                <span class="dj" @click="contrast(list)">对比分析</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data:function(){
        return {
            loading: false,
            obj:{},
            tableFrom:[
                '序号','企业名称','专利总量','专利关键词','行业','竞争指数','操作'
            ],
            entName: '',
            year: ''
        }
    },
    mounted:function(){

    },
    created:function(){
        this.entName=this.$route.query.entName || "";
        this.year=this.$route.query.year || "";
        console.log(this.entName, this.year);
        if (this.entName) {
            this.analysisInfo();
        }
    },
    methods:{
        contrast(val) {
            this.$router.push({
                path:"/enterprisecontrast",
                query:{
                    name1: val.companyname,
                    text1: val.keyword,
                    name2: this.entName,
                    text2: this.obj.keyword
                }
            });
        },
        fanhui() {
            this.$router.push({
                path:"/businessdecisions",
                query:{}
            });
        },
        keyDealwith(value) {
            let array = value.split(',')[0].split('、');
            let arr1 = [];
            for (let i = 0; i < array.length; i++) {
                if ( i > 1 && i <= 5) {
                    arr1.push(array[i])
                }
            };
            return arr1.join(',')
        },
        keyDealwith2(value) {
            let array = value.split(',');
            let arr1 = [];
            for (let i = 0; i < array.length; i++) {
                if ( i <= 4) {
                    arr1.push(array[i])
                }
            };
            return arr1.join(',')
        },
        analysisInfo(){
            var obj={companyname:""};
            if(this.entName ){
                obj.companyname=this.entName;
            }else{
                return ;
            }
            // this.$root.showMask();
            this.loading = true;
            this.$get("web/patentycCtl/competitionAnalysisInfo",obj).then(d=>{
                console.log(d);
                this.loading = false;
                if(d && d.status==0){
                    for (let i = 0; i < d.data.competeinfo.length; i++) {
                        d.data.competeinfo[i]['keys'] = this.keyDealwith2(d.data.competeinfo[i].keyword)
                    }
                    this.obj = d.data;
                    this.obj['keys'] = this.keyDealwith(d.data.businessscope)
                }
                // this.$root.hideMask();
            }).catch(e=>{
                // this.$root.hideMask();
            })
        },
    },
    computed:{
 
    }
}
</script>

<style>

</style>