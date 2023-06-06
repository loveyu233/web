import {App} from "vue";

import SvgIcon from "@/components/SvgIcon.vue";

const components: any[] = [SvgIcon];

export default {
    install(app: App) {
        components.forEach((item) => {
            app.component(item.__name, item);
        });
    }
};