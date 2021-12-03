import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Tabs from '../views/Tabs.vue';
import getorder from '../views/getOrder.vue';
import home from '../views/home.vue';
import me from '../views/me.vue';
import working from "../views/working.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: home
    },
    {
        path: '/working',
        component: working
    },

    {
        path: '/me',
        component: me
    },
    {
        path: '/getorder',
        component: getorder
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
