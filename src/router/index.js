import { createRouter,createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },{
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/projects',
        name:'projects',
        component:Projects
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;