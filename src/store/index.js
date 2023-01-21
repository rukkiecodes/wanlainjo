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

import leftDrawer from './modules/admin/leftDrawer'
import countStudents from './modules/admin/countStudents'
import countCourses from './modules/admin/countCourses'
import getAllStudents from './modules/admin/getAllStudents'
import getAllDeletedStudents from './modules/admin/getAllDeletedStudents'
import reports from './modules/admin/reports'

export default createStore({
    strict: false,
    modules: {
        drawer,
        courses,
        coursesDummy,
        form,
        snackbar,
        events,
        leftDrawer,
        countStudents,
        countCourses,
        getAllStudents,
        getAllDeletedStudents,
        reports
    },
})