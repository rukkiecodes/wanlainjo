import {
    createStore
} from 'vuex'

// MODULES
import drawer from './modules/website/drawer'
import courses from './modules/website/courses'
import coursesDummy from './modules/website/coursesDummy'
import form from './modules/website/form'
import snackbar from './modules/snackbar'
import events from './modules/website/events'

// admin
import leftDrawer from './modules/admin/leftDrawer'

// countStudents
import countStudents from './modules/admin/countStudents'

// countCourses
import countCourses from './modules/admin/countCourses'

// get students
import getAllStudents from './modules/admin/getAllStudents'
import getAllDeletedStudents from './modules/admin/getAllDeletedStudents'

export default createStore({
    strict: false,
    modules: {
        drawer,
        courses,
        coursesDummy,
        form,
        snackbar,
        events,

        // admin
        leftDrawer,

        // countStudents
        countStudents,

        // countCourses
        countCourses,

        // get students
        getAllStudents,
        getAllDeletedStudents
    },
})