import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Dashboard from "../views/Dashboard.vue";
import Env from "../views/Env.vue";
import Account from "../views/Account.vue";
import Cluster from "../views/Cluster.vue";
import Config from "../views/Config.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/env",
    name: "Env",
    component: Env,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/cluster",
    name: "Cluster",
    component: Cluster,
  },
  {
    path: "/config/index",
    name: "Config",
    component: Config,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
