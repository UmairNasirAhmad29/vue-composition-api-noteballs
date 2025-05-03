import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'

const router = createRouter({

    history: createWebHashHistory(),
    routes: [ // before creating the routes make sure that you have created the views for those routes

        {
            path: '/', // specifing by slash so this routes behaves as a root path, but in order to use custom route path we first need to set <RouterView /> in App.vuw file
            name: 'notes',
            component: ViewNotes
        },
        {
            path: '/stats',
            name: 'stats',
            component: ViewStats
        }

    ]
})

createApp(App)
    .use(router)
    .mount('#app')
