const state = {
    drawer: false,
    routes: [
        {
            title: 'Home',
            icon: 'mdi-home',
            to: '/'
        },
        {
            title: 'About Us',
            icon: 'mdi-account',
            to: '/about'
        },
        {
            title: 'Courses',
            icon: 'mdi-account-school',
            to: '/courses'
        },
        {
            title: 'Contact',
            icon: 'mdi-phone',
            to: '/contact'
        }
    ]
}

const getters = {
    routes: state => state.routes
}

export default { state, getters }