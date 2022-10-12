import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import store from '@/store'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
