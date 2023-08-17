import { createApp } from "vue"; //引入创建vue函数

import App from "./App.vue"; //引入主组件

const app = createApp(App); //创建app实例

app.mount("#app"); //挂载容器
