import Home from 'views/Home.vue'

const routes = [
    {
        path: '/',
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