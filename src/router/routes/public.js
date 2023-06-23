import Home from 'views/Home.vue'

const routes = [
    {
        path: '/',
        redirect: { path: "/dashboard" },
        name: 'home',
        component: Home
    },
]

export default routes.map(route => {
    const meta = {
        public: true,
        onlyLoggedOut: true
    }
    return { ...route, meta };
});