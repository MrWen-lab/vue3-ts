import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App)
  /* 
    在引入 Element Plus 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。
    size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
    .use(ElementPlus, { size: 'small', zIndex: 3000 }) 
  */

  .use(ElementPlus)
  .use(router)
  .mount("#app");
