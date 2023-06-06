import {createApp} from "vue";
import ElementPlus from "element-plus";
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import App from "@/App.vue";
import "virtual:svg-icons-register";
import globalComponents from "@/plugins/globalComponents.ts";
import "@/style/index.scss";
import router from "@/router";
import {createPinia} from "pinia";
import {piniaPlugin} from "@/store/piniaPersistence.ts";

const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn
});

app.use(globalComponents);

app.use(router);

const store = createPinia();
// 持久化pinia数据到localStore,不需要注释即可
store.use(piniaPlugin({
    key: "pinia-"
}));
app.use(store);

app.mount("#app");
