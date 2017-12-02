import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import artists from '@/components/artists.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
        ,
        {
            path: '/artists',
            name: 'artists',
            component: artists
        }

    ]
})
