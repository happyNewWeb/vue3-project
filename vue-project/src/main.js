import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
app.use(ElementPlus, {locale: zhCn})
import router from './router'
import './style.css'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia'
const pinia = createPinia()
app.use(router).use(pinia).mount('#app')
