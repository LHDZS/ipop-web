<style lang="less" scoped>

</style>

<template>
  <div style="width:100%;height:100%">
     <el-select style="width:100%;height:100%" :allow-create="true" :value="value" @change="onchange"  v-model="sels" clearable
       :placeholder="placeHolder"
       :default-first-option="isFirstDefault"
       :filterable="isFilter"
       :multiple="isMulti"
       :remote="autoComplete"
       :reserve-keyword="autoComplete"
       :remote-method="remoteMethod"
       :loading="loading">
       <template v-if="true">
           <el-option
            v-for="item in dataSouce"
            :key="item.domainEntName"
            :label="item.entName"
            :value="item.domainEntName">
           </el-option>
       </template>
       <template v-else>
           <el-option-group
             v-for="group in dataSouce"
             :key="group.entName"
             :label="group.entName">
             <el-option
               v-for="item in group.options"
               :key="valueFieldM(item)"
               :label="labelFieldM(item)"
               :value="valueFieldM(item)">
             </el-option>
           </el-option-group>
       </template>
     </el-select>
 </div>
</template>

<script>
export default {
    model:{
        prop: 'value',
        event: 'change'
    },
    props:["value","refMethod","dicKey","refModel","placeHolder","autoComplete","isGrouped","isFirstDefault","isFilter","isMulti","labelField","valueField"],
    data:function(){
        return {
        dataSouce:[],
        loading:false,
        sels:this.value,
        };
    },
    mounted:function(){

    },
    watch:{
        value:function(v){
        this.sels=v;
        }
    },
    created:function(){
        if(!this.autoComplete){
            this.fetchData();
        }
    },
    computed:{

    },
    methods:{
        labelFieldM:function(item){
            return item[this.labelField];
        },
        valueFieldM:function(item){
            return item[this.valueField];
        },
        buildQuery:function(){
            var qc={};
            qc.selects=[this.labelField,this.valueField];
            return qc;
        },
        fetchData:function(slike){
            if(this.dicKey){
                this.$post("/web/metaCtl/getDicConfig",{"dicKey":this.dicKey}).then(cfg=>{
                Object.keys(cfg.data).forEach(key=>{
                    console.log(key);
                    this.dataSouce.push({"label":cfg.data[key],"value":key});
                });
                });
                return;
            }else{
                var query={};
                query.fields=[this.labelField,this.valueField];
                query.likestr=slike;
                var method="refQuery";
                if(this.refMethod){
                method=this.refMethod;
                }
                var url='/web/regionalpatentmonitoringCtl/getCompanyInfoByLikeName';
                this.loading=true;
                this.$post(url,query).then(d=>{
                var entnames=[];
                var dataSouce = [];
                for(var i=0;i<d.data.length;i++){
                    // if(entnames && entnames.length>0 && entnames.indexOf(d.data[i].entName)>=0){

                    // }else{
                        entnames.push(d.data[i].entName);
                        dataSouce.push(d.data[i]);
                    // }
                }
                this.dataSouce=dataSouce;
                console.log(dataSouce);
                this.loading=false;
                });
            }
        },
        onchange:function(curval){
            this.$emit("change",curval);
        },
        remoteMethod(query) {
            if(query !== ''){
                this.fetchData(query);
            } else {
                this.options4 = [];
            }
        },
        oninput:function(e){
            console.log(e);
            this.$emit("input",e);
        }
    }
}
</script>

<style>

</style>