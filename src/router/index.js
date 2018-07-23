import Vue from "vue";
import Router from "vue-router";

import MainPage from "@/views/MainPage";
import Home from "@/views/Home";
import BookDetail from "@/views/BookDetail";
import Category from "@/views/Category";
import Cart from "@/views/Cart";
import Me from "@/views/Me";
import NotFound from "@/views/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path: "/categories",
          name: "Categories",
          component: Category
        },
        {
          path: "/cart",
          name: "Cart",
          component: Cart
        },
        {
          path: "/me",
          name: "Me",
          component: Me
        }
      ]
    },
    {
      path: "/books/:id",
      name: "BookDetail",
      component: BookDetail
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
