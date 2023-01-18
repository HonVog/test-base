import { createApp } from 'vue'
import App from './App.vue'
import { UI } from '@/UI/index.js'

const app = createApp(App);

UI.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
