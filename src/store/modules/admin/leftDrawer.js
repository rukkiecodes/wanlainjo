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
            to: '/students'
        },
        {
            title: 'Courses',
            icon: 'las la-school',
            to: '/courses'
        },
        {
            title: 'Instructors',
            icon: 'las la-chalkboard-teacher',
            to: '/instructors'
        },
    ]
}

const getters = {
    leftDrawerArray: state => state.leftDrawerArray
}

export default { state, getters }
