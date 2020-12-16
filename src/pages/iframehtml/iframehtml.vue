<style lang="less" scoped>
.iframehtml {
    width:100%;
    height: 100%;
    padding:15px;
    box-sizing: border-box;
}
</style>

<template>
  <div class="iframehtml" id="iframeBox">
    <iframe width="100%" height="100%" frameborder="0" :src="$root.iframeUrl" scrolling='auto' @load="deliverToken"></iframe>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            timer: null
        }
    },
    mounted(){
        console.log(this.$root.iframeUrl, '调用方法');
    },
    created(){
        if (this.$root.defaultActive != '') {
            let active = JSON.parse(this.$root.defaultActive);
            if (active.url) {
                this.$root.iframeUrl = active.url;
                this.$root.loadingHome = true;
                this.timer = setTimeout(this.loadingFailed, 7000);
            }
        }
    },
    methods:{
        loadingFailed() {
            this.$root.loadingHome = false;
            this.$root.iframeUrl = null;
            console.log('iframe已加载失败')
            this.$message.error('iframe已加载超时，请刷新');
        },
        deliverToken () {
            clearTimeout(this.timer);
            this.$root.loadingHome = false;
            console.log('iframe已加载完毕')
        }
    },
    updated() {
        this.timer = setTimeout(this.loadingFailed, 7000);
        console.log('updated/执行吗');
    }
}
</script>

<style>

</style>