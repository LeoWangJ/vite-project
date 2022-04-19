import { createApp } from 'vue'
import App from './App.vue'
import { ConfigProvider } from 'vant';
import { createRouter,createWebHashHistory } from 'vue-router'
import routes from './router'
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import "./assets/css/style.css"

if(import.meta.env.VITE_APP_THEME){
    document.getElementById('app')?.classList.add(import.meta.env.VITE_APP_THEME)
}

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
createApp(App).use(router).use(ConfigProvider).mount('#app')
