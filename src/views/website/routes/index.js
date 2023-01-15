export default {
    path: '/',
    name: 'website',
    component: () => import('@/views/website/layout/App.vue'),

    children: [
        {
            path: '',
            name: 'home',
            component: () => import('@/views/website/view/Home.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/website/view/About.vue'),
        },
        {
            path: '/community',
            name: 'community',
            component: () => import('@/views/website/view/Community.vue'),
        },
        {
            path: '/courses',
            name: 'courses',
            component: () => import('@/views/website/view/Courses.vue'),
        },
        {
            path: '/register/:title',
            name: 'courseRegister',
            component: () => import('@/views/website/view/courseRegister/Register.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/website/view/Contact.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/website/view/register/Register.vue'),
        },
        {
            path: '/course/:title',
            name: 'course',
            component: () => import('@/views/website/view/Course.vue'),
        },
        {
            path: '/events',
            name: 'events',
            component: () => import('@/views/website/view/Events.vue'),
        },
        {
            path: '/event/:title',
            name: 'event',
            component: () => import('@/views/website/view/Event.vue'),
        },
    ]
}