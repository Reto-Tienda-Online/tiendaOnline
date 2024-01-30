// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cesta",
      name: "cesta",
      component: () => import("@views/CestaView.vue"),
    },
    {
      path: "/pago",
      name: "pago",
      component: () => import("@views/PagoView.vue"),
    },
    // Admin
    {
      path: "/admin",
      name: "admin_home",
      component: () => import("@views/Admin/HomeView.vue"),
    },
    {
      path: "/admin/usuarios",
      name: "admin_usuarios",
      component: () => import("@views/Admin/UsuariosView.vue"),
    },
    {
      path: "/admin/categorias",
      name: "admin_categorias",
      component: () => import("@views/Admin/CategoriasView.vue"),
    },
    {
      path: "/admin/compras",
      name: "admin_compras",
      component: () => import("@views/Admin/ComprasView.vue"),
    },
    {
      path: "/admin/productos",
      name: "admin_productos",
      component: () => import("@views/Admin/ProductosView.vue"),
    },
    {
      path: "/admin/productos/:name",
      name: "adminProductDetail",
      component: () => import("@views/Admin/ProductoDetalleView.vue"),
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
  ],
});

export default router;
