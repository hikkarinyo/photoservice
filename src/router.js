import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import PhotoUser from "./components/PhotoUser.vue";
import ViewPhoto from "./components/ViewPhoto";
import User from "./components/User";

Vue.use(Router)

export default new Router({

    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/signup', component: Register},
        {path: '/photo', component: PhotoUser,props: true},
        {path: '/photo/:id', component: ViewPhoto, props: true},
        {path: '/user', component: User},


    ]
})
