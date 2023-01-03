import  Vue from  'vue'
import { RouterView } from 'vue-router'
import HomePage from '../components/views/HomePage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
]