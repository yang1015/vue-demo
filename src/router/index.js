import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// import Cat from "../pages/Cat.vue"
import Dog from "../pages/Dog.vue"

const routes = [
    {
        path: '/',
        redirect: '/dog', // 强制重定向，会到下面去找匹配该path的component
    },
    {
        path: '/dog',
        component: Dog
    },
    {
        path: '/cat',
        component: resolve => require(['../pages/Cat.vue'], resolve),
    }
]

export default new Router({
    routes
});


