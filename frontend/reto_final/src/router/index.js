import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue';
// import AdminHomeView from '@views/Admin/HomeView.vue';
// import CestaView from '@views/CestaView.vue';
// import PagoView from '@views/PagoView.vue';
// import AdminUsuariosView from '@views/Admin/UsuariosView.vue';
// import AdminCategoriasView from '@views/Admin/CategoriasView.vue';
// import AdminProductosView from '@views/Admin/ProductosView.vue';
// import AdminComprasView from '@views/Admin/ComprasView.vue';

import store from './../store.js'; 

const routes = [
    { path: '/', component: HomeView },
    { path: '/home', component: HomeView },
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@views/RegisterView.vue')
    },
    { 
        path: '/cesta',
        // component: CestaView,  
        component: () => import('@views/CestaView.vue'),
        meta: {
            requiresAuth: true
        }
    },
    { 
        path: '/pago',
        component: () => import('@views/PagoView.vue'),
        meta: {
            requiresAuth: true
        }
      },
    // Admin
    { 
        path: '/admin',
        component: () => import('@views/Admin/HomeView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
    { 
        path: '/admin/home',
        component: () => import('@views/Admin/HomeView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
    { 
        path: '/admin/usuarios',
        component: () => import('@views/Admin/UsuariosView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
    { 
        path: '/admin/usuarios/:id',
        component: () => import('@views/Admin/UsuariosView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
    { 
        path: '/admin/categorias',
        component: () => import('@views/Admin/CategoriasView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
    { 
        path: '/admin/compras',
        component: () => import('@views/Admin/ComprasView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
    { 
        path: '/admin/productos',
        component: () => import('@views/Admin/ProductosView.vue'),
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
     },
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAdmin = to.matched.some(record => record.meta.isAdmin);

  if (requiresAuth) {
      // This route requires authentication
      if (!store.getters.isLoggedIn) {
          // Not logged in, redirect to login page
          next({ name: 'login' });
      } else {
          // Logged in
          if (isAdmin && !store.getters.isAdmin) {
              // Not an admin, redirect to home or unauthorized page
              next({ name: '/' }); // Or any unauthorized page
          } else {
              // Authorized user, proceed
              console.log(store);
              next();
              console.log(store);

          }
      }
  } else {
      // Does not require authentication, proceed
      next();
  }
});


export default router
