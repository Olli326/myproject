import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import NotFound from './../pages/NotFound';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
        },
    ]
});

export default router;