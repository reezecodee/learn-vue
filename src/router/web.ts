import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import VueDasarView from "@/pages/vue-dasar/VueDasarView.vue";
import DirectiveView from "@/pages/vue-dasar/directive/DirectiveView.vue";
import ComputedView from "@/pages/vue-dasar/computed-property/ComputedView.vue";
import LifecycleView from "@/pages/vue-dasar/lifecycle-hooks/LifecycleView.vue";
import WatcherView from "@/pages/vue-dasar/watcher/WatcherView.vue";

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
      },
      {
        path: 'computed-property',
        component: ComputedView,
        meta: {
          title: 'Belajar Computed Property'
        }
      },
      {
        path: 'lifecycle-hooks',
        component: LifecycleView,
        meta: {
          title: 'Belajar Lifecycle Hooks'
        }
      },
      {
        path: 'watcher',
        component: WatcherView,
        meta: {
          title: 'Belajar Watcher'
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
