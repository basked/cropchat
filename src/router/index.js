import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BasComponent from '@/components/BasComponent'
import DevEditor from '@/components/DevEditor'
import DataGrid from '@/components/DataGrid'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/basket',
      name: 'bascomponent',
      component: BasComponent
    },
    {
      path: '/deveditor',
      name: 'deveditor',
      component: DevEditor
    },
    {
      path: '/datagrid',
      name: 'datagrid',
      component: DataGrid
    }

  ]
})
