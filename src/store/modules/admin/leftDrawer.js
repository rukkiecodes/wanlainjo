const state = {
    drawer: true,
    leftDrawerArray: [
        {
            title: 'Overview',
            icon: 'las la-chart-pie',
            to: '/admin'
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
