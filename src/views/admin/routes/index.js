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
        {
            path: 'students',
            name: 'admin.students',
            component: () => import("@/views/admin/views/Students.vue"),
        },
        {
            path: 'courses',
            name: 'admin.courses',
            component: () => import("@/views/admin/views/Courses.vue"),
        },
        {
            path: 'instructors',
            name: 'admin.instructors',
            component: () => import("@/views/admin/views/Instructors.vue"),
        },
    ]
}