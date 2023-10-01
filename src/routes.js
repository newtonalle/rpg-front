import Home from './pages/Home/Home.vue'
import Login from './pages/Login/Login.vue'
import Status from './pages/Status/Status.vue'
import CurrentBattle from './pages/CurrentBattle/CurrentBattle.vue'
import BattlesLog from './pages/BattlesLog/BattlesLog.vue'
import BattleRoundsLog from './pages/BattleRoundsLog/BattleRoundsLog.vue'

export default [{ path: '/home', alias: '/', component: Home, meta: { requiresLoggedUser: true }, name: 'home' },
{ path: '/login', component: Login, name: 'login' },
{ path: '/status', component: Status, meta: { requiresLoggedUser: true }, name: 'status' },
{ path: '/current-battle', component: CurrentBattle, meta: { requiresLoggedUser: true }, name: 'currentBattle' },
{ path: '/battles-log', component: BattlesLog, meta: { requiresLoggedUser: true }, name: 'battlesLog' },
{ path: '/battles-log/:battleId/rounds', component: BattleRoundsLog, meta: { requiresLoggedUser: true }, name: 'battleRoundsLog' }
]