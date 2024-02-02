import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/home", component: HomeView },
  {
    path: "/login",
    name: "login",
    component: () => import("@views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@views/RegisterView.vue"),
  },
  {
    path: "/cesta",
    // component: CestaView,
    component: () => import("@views/CestaView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: false,
    },
  },
  {
    name: "favoritos",
    path: "/favoritos",
    // component: CestaView,
    component: () => import("@views/FavoritosView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: false,
    },
  },
  {
    name: "compras",
    path: "/compras",
    component: () => import("@views/ComprasUsuarioView.vue"),
    meta: {
      requiresAuth: false,
      isAdmin: false,
    },
  },
  {
    path: "/pago",
    component: () => import("@views/PagoView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: false,
    },
  },
  {
    path: "/juegoDetalle",
    name: "juegoDetalle",
    component: () => import("@views/JuegoDetalleView.vue"),
  },
  {
    path: "/categoriaDetalle",
    name: "CategoriaDetalleView",
    component: () => import("@views/CategoriaDetalleView.vue"),
  },

  // Admin
  {
    name: "adminLogin",
    path: "/adminLogin",
    component: () => import("@views/Admin/AdminLoginView.vue"),
  },
  {
    name: "admin",
    path: "/admin",
    component: () => import("@views/Admin/HomeView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/home",
    component: () => import("@views/Admin/HomeView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    name: "admin_usuarios",
    path: "/admin/usuarios",
    component: () => import("@views/Admin/UsuariosView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  // {
  //   name : 'admin_usuarios',
  //   path: "/admin/usuarios/:id",
  //   component: () => import("@views/Admin/UsuariosView.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     isAdmin: true,
  //   },
  // },
  {
    name: "admin_categorias",
    path: "/admin/categorias",
    component: () => import("@views/Admin/CategoriasView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    name: "admin_compras",
    path: "/admin/compras",
    component: () => import("@views/Admin/ComprasView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    name: "admin_productos",
    path: "/admin/productos",
    component: () => import("@views/Admin/ProductosView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    name: "admin_nuevo_producto",
    path: "/admin/nuevo_producto",
    component: () => import("@views/Admin/CreateProductoView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },
  {
    path: "/admin/productos/:name",
    name: "adminProductDetail",
    component: () => import("@views/Admin/ProductoDetalleView.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true,
    },
  },

  /* #endregion */
  { name: 'NotFound', path: "/:pathMatch(.*)*", component: () => import("@components/NotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isAdmin = to.meta.isAdmin;
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isUserAdmin = isAdminUser();

  // Check if the route requires authentication
  if (requiresAuth) {
    // If user is not logged in
    if (!isLoggedIn) {
      // Redirect to login page if requireAuth=true
      if (!isAdmin) {
        return next({ path: '/login' });
      }
      // Redirect to admin login page if requireAuth=true and isAdmin=true
      else {
        return next({ path: '/adminLogin' });
      }
    }
    // If user is logged in
    else {
      // Redirect to home page if trying to access login page and not an admin
console.log('to.path is: ', to.path);
      if (to.path === '/login' && !isUserAdmin) {
        return next({ path: '/home' });
      }
      // Redirect to admin home if trying to access admin login page and is an admin
      if (to.path === '/adminLogin' && isUserAdmin) {
        return next({ path: '/admin' });
      }
    }
  }

  // Check if the user is logged in and is an admin
  if (isLoggedIn && isUserAdmin) {
    // Redirect to admin home if trying to access non-admin page
    if (!isAdmin) {
      return next({ path: '/admin' });
    }
  }

  // Check if the user is logged in but not an admin
  if (isLoggedIn && !isUserAdmin) {
    // Redirect to home if trying to access admin page
    if (isAdmin) {
      return next({ path: '/home' });
    }
  }

  next();
});

function isAdminUser() {
  const usuarioData = JSON.parse(localStorage.getItem("usuario"));
  const isAdmin = usuarioData ? usuarioData.admin : false;
  return isAdmin;
}

export default router;
