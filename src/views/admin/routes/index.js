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
            component: () => import("@/views/admin/views/student/View.vue"),

            children: [
                {
                    path: '',
                    component: () => import("@/views/admin/views/student/Students.vue"),
                },
                {
                    path: ':student',
                    component: () => import("@/views/admin/views/student/ViewStudent.vue"),
                }
            ]
        },
        {
            path: 'deletedStudents',
            name: 'admin.deletedStudents',
            component: () => import("@/views/admin/views/deletedStudents/View.vue"),

            children: [
                {
                    path: '',
                    component: () => import("@/views/admin/views/deletedStudents/Students.vue"),
                },
                {
                    path: ':student',
                    component: () => import("@/views/admin/views/deletedStudents/ViewStudent.vue"),
                }
            ]
        },
        {
            path: 'courses',
            name: 'admin.courses',
            component: () => import("@/views/admin/views/courses/View.vue"),

            children: [
                {
                    path: '',
                    component: () => import("@/views/admin/views/courses/Courses.vue"),
                },
                {
                    path: ':id',
                    component: () => import("@/views/admin/views/courses/ViewCourse.vue"),
                }
            ]
        },
        {
            path: 'instructors',
            name: 'admin.instructors',
            component: () => import("@/views/admin/views/Instructors.vue"),
        },
    ]
}