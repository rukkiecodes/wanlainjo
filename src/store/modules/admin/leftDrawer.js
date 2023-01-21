const state = {
    drawer: true,
    leftDrawerArray: [
        {
            title: 'Overview',
            icon: 'las la-chart-pie',
            to: '/admin/overview'
        },
        {
            title: 'Students',
            icon: 'las la-user-graduate',
            to: '/admin/students'
        },
        {
            title: 'Deleted Students',
            icon: 'las la-trash',
            to: '/admin/deletedStudents'
        },
        {
            title: 'Courses',
            icon: 'las la-school',
            to: '/admin/courses'
        },
        {
            title: 'Reports',
            icon: 'las la-newspaper',
            to: '/admin/reports'
        },
        {
            title: 'Instructors',
            icon: 'las la-chalkboard-teacher',
            to: '/admin/instructors'
        },
    ]
}

const getters = {
    leftDrawerArray: state => state.leftDrawerArray
}

export default { state, getters }
