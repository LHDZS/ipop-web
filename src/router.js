import Vue from 'vue'	//引入vue
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/pages/home/index.vue'
// iframe
import Iframehtml from '@/pages/iframehtml/iframehtml.vue'
// iframe
import Businessdecisions from '@/pages/businessdecisions/businessdecisions.vue'
// iframe
import Cmpetitiveanalysis from '@/pages/competitiveanalysis/competitiveanalysis.vue'
// iframe
import Enterprisecontrast from '@/pages/enterprisecontrast/enterprisecontrast.vue'
// iframe
import Businessdecisionsresult from '@/pages/businessdecisionsresult/businessdecisionsresult.vue'
// iframe
import Regionalpatentmonitoring from '@/pages/regionalpatentmonitoring/regionalpatentmonitoring.vue'
// iframe
import Regionalpatentmonitoringdetails from '@/pages/regionalpatentmonitoringdetails/regionalpatentmonitoringdetails.vue'
// iframe
import Patentsimplesearch from '@/pages/patentsimplesearch/patentsimplesearch.vue'
// iframe
import Patentanalysis from '@/pages/patentanalysis/patentanalysis.vue'



export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/iframehtml', name: 'iframehtml', component: Iframehtml ,meta:{type: 'det'}},
    { path: '/businessdecisions', name: 'businessdecisions', component: Businessdecisions ,meta:{type: 'det'}},
    { path: '/businessdecisionsresult', name: 'businessdecisionsresult', component: Businessdecisionsresult ,meta:{type: 'det'}},
    { path: '/competitiveanalysis', name: 'competitiveanalysis', component: Cmpetitiveanalysis ,meta:{type: 'det'}},
    { path: '/enterprisecontrast', name: 'enterprisecontrast', component: Enterprisecontrast ,meta:{type: 'det'}},
    { path: '/regionalpatentmonitoring', name: 'regionalpatentmonitoring', component: Regionalpatentmonitoring ,meta:{type: 'det'}},
    { path: '/regionalpatentmonitoringdetails', name: 'regionalpatentmonitoringdetails', component: Regionalpatentmonitoringdetails ,meta:{type: 'det'}},
    { path: '/patentsimplesearch', name: 'patentsimplesearch', component: Patentsimplesearch ,meta:{type: 'det'}},
    { path: '/patentanalysis', name: 'patentanalysis', component: Patentanalysis ,meta:{type: 'det'}},
  ]
})