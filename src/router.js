import { createRouter, createWebHistory } from 'vue-router';

import TutorDetail from './pages/tutors/TutorDetail.vue';
import TutorsList from './pages/tutors/TutorsList.vue';
import TutorRegistration from './pages/tutors/TutorRegistration.vue';
import ContactTutor from './pages/requests/ContactTutor.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/tutors' },
    { path: '/tutors', component: TutorsList },
    {
      path: '/tutors/:id',
      component: TutorDetail,
      props: true,
      children: [{ path: 'contact', component: ContactTutor }]
    },
    {
      path: '/register',
      component: TutorRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/tutors');
  } else {
    next();
  }
});

export default router;
