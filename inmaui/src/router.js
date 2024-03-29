import { createRouter, createWebHistory } from 'vue-router';
import Admin from './views/AdminView.vue'
import Bodega from './views/BodegaView.vue'
import Caja from './views/CajaView.vue'
import Login from './views/LoginView.vue'
import Registro from './views/RegistrarView.vue'
import ModUsr from './views/ModUsrView.vue'
import ModPrd from './views/ModProdView.vue'
import ModContra from './views/ModPassView.vue'
import Boleta from './views/BoletaView.vue'
import Landing from './views/LandingPage.vue'


const routes = [
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/caja',
        name: 'Caja',
        component: Caja
    },
    {
        path: '/modusr/:id',
        name: 'ModUser',
        component: ModUsr
    },
    {
        path: '/modcontra/:id',
        name: 'ModContra',
        component: ModContra
    },
    {
        path: '/registrar',
        name: 'Registrar',
        component: Registro
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/modprod/:id',
        name: 'ModProd',
        component: ModPrd
    },
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/bodega',
        name: 'Bodega',
        component: Bodega
    },
    {
        path: '/boleta',
        name: 'Boleta',
        component: Boleta
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;