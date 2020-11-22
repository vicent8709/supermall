import Vue from "vue"
import  VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("@/views/home/Home")
const Category = () => import("@/views/category/Category")
const Cart = () => import("@/views/shopcart/Cart")
const Profile = () => import("@/views/profile/Profile")

const routes=[
    {
        path : "/",
        redirect : "/home",
    },
    {
        path : "/home",
        component : Home
    },
    {
        path : "/category",
        component : Category
    },
    {
        path : "/cart",
        component : Cart
    },
    {
        path : "/profile",
        component : Profile
    },
]

export  default new VueRouter({
    routes,
    mode : "history",
  //  base:process.env.RASE_URL,
})