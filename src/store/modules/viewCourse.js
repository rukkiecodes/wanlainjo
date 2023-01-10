const state = {
    currentCourse: null,
    dislog: false,
}

const mutations = {
    viewCurrentCourse(state, course) {
        state.currentCourse = course
        state.dialog = true
    }
}

export default { state, mutations }