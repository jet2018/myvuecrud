import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Students from '../views/all_students.vue'
import ContactUs from '../views/contact_us.vue'
import updateStudent from '../views/updateStudent.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/update/:id',
        name: 'update',
        component: updateStudent
    },
    {
        path: '/contact-us',
        name: 'contact',
        component: ContactUs

    },
    {
        path: '/students',
        name: 'students',
        component: Students
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router