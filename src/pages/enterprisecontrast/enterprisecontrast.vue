<style lang="less" scoped>
.enterprisecontrast {
    width: 100%;
    min-height: 100%;
    background-color: rgba(25, 19, 89, 1);
    text-align: center;
    font-size: 35px;
    color: #fff;
}
.header_lhd {
    width: 100%;
    height: 8.1%;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_5371597459421664202015104341664组308.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.left_button {
    position: absolute;
    left: 2%;
    top: 1.5vh;
    width: 4.5vh;
    height: 4.5vh;
    cursor: pointer;
}
.vs {
    width: 47.4vh;
    height: 100%;
}
.left_l {
    font-size:3.4vh;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(219,229,240,1);
    letter-spacing:1px;
    -webkit-text-stroke:1px rgba(14,62,112,1);
    text-stroke:1px rgba(14,62,112,1);
}
.right_h {
    font-size:3.4vh;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(255,246,246,1);
    letter-spacing:1px;
    -webkit-text-stroke:1px rgba(255,0,0,1);
    text-stroke:1px rgba(255,0,0,1);
}
.con_left {
    margin-top: 3vh;
    float: left;
    width: 46.8%;
    height: 76vh;
    border:1px solid rgba(10,67,188,1);
    margin-left: 2%;
}
.con_left_title {
    width:100%;
    height: 6.9%;
    background:linear-gradient(270deg,rgba(41,91,214,1) 0%,rgba(22,45,103,0) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}
.con_left_title span {
    flex: 1;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.cl_list {
    width: 100%;
    height: 18.9%;
    display: flex;
    align-items: center;
    padding-left: 19px;
    box-sizing: border-box;
}
.cl_list_title {
    width: 23.6%;
    height: 57.9%;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1471597461958288202015112558288编组10.png') no-repeat;
    background-size: 100% 100%;
    font-size:1.8vh;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    position: relative;
    text-align: left;
    padding-top: 3.6%;
    padding-left: 1.3%;
    box-sizing: border-box;
}
.cl_list_title .mark {
    position: absolute;
    top: 0px;
    right: 4.6%;
    width:24.4%;
    height: 77.3%;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_547159746286546720201511415467编组13.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cl_list_item {
    width: 20%;
    height: 100%;
    font-size:20px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.cl_text{
    width: 80%;
    text-align: left;
}
.cl_jdt {
    width: 80%;
    height: 15.1%;
    background:rgba(34,70,147,1);
    margin-top: 1vh;
    font-size: 14px;
    text-align: right;
    position: relative;
    z-index: 99;
}
.cl_zzt {
    position: absolute;
    top: 0px;
    left: 0px;
    width:60%;
    height:100%;
    background:linear-gradient(90deg,rgba(50,197,255,1) 0%,rgba(97,228,255,1) 100%);
    z-index: -1;
}
.con_right {
    margin-top: 3vh;
    float: right;
    width: 46.8%;
    height: 76vh;
    border:1px solid rgba(84,42,42,1);
    margin-right: 2%;
}
.con_right_title {
    width:100%;
    height: 6.9%;
    background:linear-gradient(270deg,rgba(201,112,102,0) 0%,rgba(219,78,67,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}
.con_right_title span {
    flex: 1;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.cr_list {
    width: 100%;
    height: 18.9%;
    display: flex;
    align-items: center;
    padding-left: 19px;
    box-sizing: border-box;
}
.cr_list_title {
    width: 23.6%;
    height: 57.9%;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_2067159746218207120201511294271编组12.png') no-repeat;
    background-size: 100% 100%;
    font-size:1.8vh;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    position: relative;
    text-align: left;
    padding-top: 3.6%;
    padding-left: 1.3%;
    box-sizing: border-box;
}
.cr_list_title .mark {
    position: absolute;
    top: 0px;
    right: 4.6%;
    width:24.4%;
    height: 77.3%;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_547159746286546720201511415467编组13.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cr_list_item {
    width: 20%;
    font-size:20px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.bar_lhd {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 21.3vh;
    background: url('https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4197159746069577320201511455773图层6 拷贝.png') no-repeat;
    background-size: 100% 100%;
}
.fenye_lhd {
    width: 150px;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 75px);
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 9999;
}
.fenye_lhd span {
    cursor: pointer;
}
</style>

<template>
  <div class="enterprisecontrast" v-loading="loading" element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.2)">
    <div class="header_lhd">
        <img class="left_button" src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_17771597459611381202015104651381编组11.png" @click="fanhui" alt="">
        <span class="left_l">{{name2}}</span>
        <img class="vs" src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_9771597459599608202015104639608编组9.png" alt="">
        <span class="right_h">{{name1}}</span>
    </div>
    <div class="con_left">
        <div class="con_left_title">
            <span></span>
            <span>专利总量</span>
            <span>专利质量得分</span>
            <span>专利成长率</span>
            <span>总评分</span>
        </div>
        <div class="cl_list" v-for="(item,key) in arr1" :key="key">
            <div class="cl_list_title">
                {{item.keyword}}
                <div class="mark">{{item.iconscore}}</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.patentnum}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + Math.ceil((item.patentnum/item.totalnum)*100) + '%;' + colorArr[0]"></div>{{Math.ceil((item.patentnum/item.totalnum)*100)}}%</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.patentquality}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + item.patentquality + '%;' + colorArr[1]"></div>{{item.patentquality}}%</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.patentrate}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + item.patentrate + ';' + colorArr[2]"></div>{{item.patentrate}}</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.totalscore}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + item.totalscore + '%;' + colorArr[3]"></div>{{item.totalscore}}%</div>
            </div>
        </div>
    </div>
    <div class="con_right">
        <div class="con_right_title">
            <span></span>
            <span>专利总量</span>
            <span>专利质量得分</span>
            <span>专利成长率</span>
            <span>总评分</span>
        </div>
        <div class="cr_list" v-for="(item,key) in arr2" :key="key">
            <div class="cr_list_title">
                {{item.keyword}}
                <div class="mark">{{item.iconscore}}</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.patentnum}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + Math.ceil((item.patentnum/item.totalnum)*100) + '%;' + colorArr[0]"></div>{{Math.ceil((item.patentnum/item.totalnum)*100)}}%</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.patentquality}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + item.patentquality + '%;' + colorArr[1]"></div>{{item.patentquality}}%</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.patentrate}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + item.patentrate + ';' + colorArr[2]"></div>{{item.patentrate}}</div>
            </div>
            <div class="cl_list_item">
                <div class="cl_text">{{item.totalscore}}</div>
                <div class="cl_jdt"><div class="cl_zzt" :style="'width:' + item.totalscore + '%;' + colorArr[3]"></div>{{item.totalscore}}%</div>
            </div>
        </div>
    </div>
    <div class="fenye_lhd">
        <span @click="shang">上一页</span>{{pageSize/5 + 1}}/{{Math.ceil(arrt1.length / 5)}}<span @click="xia">下一页</span>
    </div>
    <div class="bar_lhd"></div>
</div>
</template>

<script>
export default {
    data:function(){
        return {
            loading: false,
            name1: '',
            name2: '',
            text1: '',
            text2: '',
            colorArr:[
                'background:linear-gradient(90deg,rgba(50,197,255,1) 0%,rgba(97,228,255,1) 100%);','background:linear-gradient(270deg,rgba(155,102,255,1) 0%,rgba(98,54,255,1) 100%);',
                'background:linear-gradient(270deg,rgba(252,219,0,1) 0%,rgba(247,181,0,1) 100%);','background:linear-gradient(270deg,rgba(121,237,220,1) 0%,rgba(28,240,154,1) 100%);'
            ],
            arr1: [],
            arr2: [],
            pageSize: 0,
            arrLength: 0,
            arrt1: [],
            arrt2: []
        }
    },
    mounted:function(){

    },
    created:function(){
        this.name1=this.$router.history.current.query.name1 || "";
        this.name2=this.$router.history.current.query.name2 || "";
        this.text1=this.$router.history.current.query.text1 || "";
        this.text2=this.$router.history.current.query.text2 || "";
        console.log(this.name1, this.name2);
        this.analysisInfo()
    },
    methods:{
        fanhui() {
            this.$router.push({
                path:"/competitiveanalysis",
                query:{entName: this.name2}
            });
        },
        shang() {
            if (this.pageSize > 0) {
                this.pageSize = this.pageSize - 5;
                this.arr1 = this.arrt1.slice(this.pageSize, this.pageSize + 5);
                this.arr2 = this.arrt2.slice(this.pageSize, this.pageSize + 5);
            }else {
                console.log('没有了')
            }
        },
        xia() {
            if (this.arrLength > (this.pageSize + 5)) {
                this.pageSize = this.pageSize + 5;
                this.arr1 = this.arrt1.slice(this.pageSize, this.pageSize + 5);
                this.arr2 = this.arrt2.slice(this.pageSize, this.pageSize + 5);
            }else {
                console.log('没有了')
            }
        },
        analysisInfo(){
            this.loading = true;
            var obj={company1:"", company2: '', keyword1: '', keyword2: ''};
            if(this.name1 && this.name2 && this.text1 && this.text2){
                obj.company1 = this.name1;
                obj.company2 = this.name2;
                obj.keyword1 = this.text1;
                obj.keyword2 = this.text2;
            }else{
                return ;
            }
            // this.$root.showMask();
            this.$get("web/patentycCtl/competitionAnalysisContex",obj).then(d=>{
                console.log(d);
                this.loading = false;
                if(d && d.status==0){
                   this.arrLength = d.data.arrt1.length;
                   this.arrt1 = d.data.arrt1;
                   this.arrt2 = d.data.arrt2;
                   this.arr1 = d.data.arrt1.slice(this.pageSize, this.pageSize + 5);
                   this.arr2 = d.data.arrt2.slice(this.pageSize, this.pageSize + 5);
                    
                    
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