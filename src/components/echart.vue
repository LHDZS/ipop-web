<style lang="less" scoped>

</style>

<template>
  <div id="pie" style="width:100%;height:100%"></div>
</template>

<script>
export default {
   name: 'echart',
   props:["piestyle","data"],
   data:function(){
     return {
       option:this.data,
       mainChart:null,
     };
   },
   methods:{
     getEchartObj(){
       if(!this.mainChart){
            return null;
       }
       return this.mainChart;
     },
     setSteps(msteps){
        this.steps=msteps;
     },
     buildEcharts(id){
         this.mainChart = echarts.init(document.getElementById(id));
         var options = this.option;
         this.mainChart.setOption(options);

     },
   },
   created:function(){

   },
   mounted:function(){
    var id=Math.round(Math.random()*500);
     $('#pie').attr('id','pie_'+id);
     this.buildEcharts("pie_"+id);
   }
}
</script>

<style>

</style>