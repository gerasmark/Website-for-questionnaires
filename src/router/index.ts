// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Postuser from '../components/Postuser.vue'
import Admin from '../components/Admin.vue'

// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/adduser',
        name: 'Add',
        component: Postuser
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    //import.meta
    routes
})
export default router


// import Vue from  "vue";
// import Router from "vue-router";
// import Login from "../LoginPage.vue";
//
// Vue.use(Router);
//
// export default new Router({
//     routes:[
//         {path: '', component: Login},
//
//     ]
// });