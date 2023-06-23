import { createRouter, createWebHistory } from 'vue-router';
import routes from 'routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     const authenticated = store.state.user.authenticated
//     const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
//     const isPublic = to.matched.some(record => record.meta.public)
//     if (!isPublic && !authenticated) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         return next({
//             path: '/login',
//             query: { redirect: to.fullPath }
//         })
//     }
//     if (authenticated && onlyLoggedOut) {
//         return next('/')
//     }
//     next()
// })

export default router;