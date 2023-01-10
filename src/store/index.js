import {
    createStore
} from 'vuex'

// MODULES
import drawer from './modules/drawer'
import viewCourse from './modules/viewCourse'
import courses from './modules/courses'
import form from './modules/form'
import snackbar from './modules/snackbar'

export default createStore({
    strict: false,
    modules: {
        drawer,
        viewCourse,
        courses,
        form,
        snackbar
    },
})