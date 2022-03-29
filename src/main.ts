import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import "./assets/css/style.css"

console.log(import.meta.env);

if(import.meta.env.VITE_APP_THEME){
    document.getElementById('app')?.classList.add(import.meta.env.VITE_APP_THEME)
}
createApp(App).mount('#app')
