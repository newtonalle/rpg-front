import Home from './pages/Home/Home.vue'
import Login from './pages/Login/Login.vue'
import Status from './pages/Status/Status.vue'
import CurrentBattle from './pages/CurrentBattle/CurrentBattle.vue'
import BattlesLog from './pages/BattlesLog/BattlesLog.vue'
import BattleRoundsLog from './pages/BattleRoundsLog/BattleRoundsLog.vue'

export default [{ path: '/home', alias: '/', component: Home, meta: { requiresLoggedPlayer: true }, name: 'home' },
{ path: '/login', component: Login, name: 'login' },
{ path: '/status', component: Status, meta: { requiresLoggedPlayer: true }, name: 'status' },
{ path: '/current-battle', component: CurrentBattle, meta: { requiresLoggedPlayer: true }, name: 'currentBattle' },
{ path: '/battles-log', component: BattlesLog, meta: { requiresLoggedPlayer: true }, name: 'battlesLog' },
{ path: '/battles-log/:battleId/rounds', component: BattleRoundsLog, meta: { requiresLoggedPlayer: true }, name: 'battleRoundsLog' }
]