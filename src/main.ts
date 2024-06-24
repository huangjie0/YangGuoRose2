import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import "./style.less"
import "./elementui.less"
import "lib-flexible-computer"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import '@/permission.ts'
import "nprogress/nprogress.css"
import 'element-plus/theme-chalk/dark/css-vars.css';
import permission from '@/directives/permission.ts';

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(permission)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
