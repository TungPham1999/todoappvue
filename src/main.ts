import { createApp } from 'vue'
import App from './App.vue'

// Vue router
import { router } from './router'

// Vuex 4
import { store } from 'src/store'

import registerGlobalComponents from './plugins/global-components'

// UI Framework
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


const app = createApp(App)
app.use(router)
app.use(store)

app.use(ElementPlus)

registerGlobalComponents(app)

app.mount('#app')
