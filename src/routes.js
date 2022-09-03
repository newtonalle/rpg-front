import Home from './pages/Home/Home.vue'
import Login from './pages/Login/Login.vue'
import Status from './pages/Status/Status.vue'

export default [{ path: '/', component: Home, meta: { requiresLoggedPlayer: true }, name: 'home' },
{ path: '/login', component: Login, name: 'login' },
{ path: '/status', component: Status, meta: { requiresLoggedPlayer: true }, name: 'status' }
]