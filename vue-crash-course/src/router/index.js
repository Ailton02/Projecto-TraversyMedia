import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobsView from '../views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJob from '@/views/AddView.vue';
import Editt from '@/views/EditView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
         {
            path: '/jobs',
            name: 'Jobs',
            component: JobsView,
        },
         {
            path: '/:catchAll(.*)*',
            name: 'NotFound',
            component: NotFoundView,
        },
        {
            path: '/jobs/:id',
            name: 'JobDetails',
            component: JobView,
        },
         {
            path: '/jobs/add',
            name: 'AddJob',
            component: AddJob,
        },
        {
            path: '/jobs/edit/:id',
            name: 'EditJob',
            component: Editt,
        },

    ],
});

export default router;