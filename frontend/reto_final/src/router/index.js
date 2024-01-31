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

  /* #region  ADMIN */
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAdmin = to.matched.some((record) => record.meta.isAdmin);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const usuarioData = JSON.parse(localStorage.getItem("usuario"));
  const isAdminUser = usuarioData ? usuarioData.admin : false;

  if (requiresAuth) {
    // This route requires authentication
    if (!isLoggedIn) {
      // Not logged in, redirect to login page 
      // which login depends on which user type 
     isAdmin ? next({ name: "adminLogin" }) : next({ name: "login" });

    } else {
      // Logged in
      if (isAdmin && !isAdminUser) {
        // Not an admin, redirect to home or unauthorized page
        next({ name: "/" });
      } else {
        // Authorized user, proceed
        next();
      }
    }
  } else {
    // Does not require authentication, proceed
    next();
  }
});

export default router;
