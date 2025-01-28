import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import VueDasarView from "@/pages/vue-dasar/VueDasarView.vue";
import DirectiveView from "@/pages/vue-dasar/directive/DirectiveView.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: 'Pilih Menu Belajar'
    }
  },
  {
    path: "/vue-dasar",
    component: VueDasarView,
    meta: {
      title: 'Belajar Vue Dasar'
    },
    children: [
      {
        path: 'directive',
        component: DirectiveView,
        meta: {
          title: 'Belajar Directive'
        }
      }
    ]
   
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();  
});
