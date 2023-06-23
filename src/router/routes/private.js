import Dashboard from 'views/Dashboard.vue'
import UserProfile from 'views/UserProfile.vue'
import Templates from 'views/Templates.vue'
import CurriculumVitae from 'views/CurriculumVitae.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/dashboard/user-profile',
        name: 'user-profile',
        component: UserProfile
    },
    {
        path: '/dashboard/templates',
        name: 'templates',
        component: Templates
    },
    {
        path: '/dashboard/curriculum-vitae',
        name: 'curriculum-vitae',
        component: CurriculumVitae
    },
    // children: [
    //     {
    //         path: 'user-profile',
    //         name: 'user-profile',
    //         component: UserProfile
    //     },
    //     {
    //         path: 'templates',
    //         name: 'templates',
    //         component: Templates
    //     },
    //     {
    //         path: 'curriculum-vitae',
    //         name: 'curriculum-vitae',
    //         component: CurriculumVitae
    //     },
    // ]
    // },
]

export default routes.map(route => {
    return { ...route, meta: { public: false } };
});