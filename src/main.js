import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/iconfont/iconfont.css'


const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.use(store);
app.use(router);
app.mount("#app");