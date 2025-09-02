import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import AuthPage from "../pages/AuthPage"
import Login from "../components/LoginForm.jsx"
import Register from "../components/RegisterForm.jsx"

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth',
    component: AuthPage,
  })


  export const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'login',
  component: Login,
})

export const registerRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'register',
  component: Register,
})

authRoute.addChildren([loginRoute, registerRoute])