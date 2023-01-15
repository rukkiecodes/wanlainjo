export default {
    path: '/admin',
    name: 'admin',
    component: () => import("@/views/admin/layout/App.vue"),

    children: [
        {
            path: '',
            name: 'admin.dashboard',
            component: () => import("@/views/admin/views/Overview.vue"),
        },
    ]
}