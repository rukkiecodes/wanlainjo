import {
    createStore
} from 'vuex'

// MODULES
import drawer from './modules/website/drawer'
import courses from './modules/website/courses'
import form from './modules/website/form'
import snackbar from './modules/snackbar'
import events from './modules/website/events'

// admin
import leftDrawer from './modules/admin/leftDrawer'

// countStudents
import countStudents from './modules/admin/countStudents'
import getAllStudents from './modules/admin/getAllStudents'

export default createStore({
    strict: false,
    modules: {
        drawer,
        courses,
        form,
        snackbar,
        events,

        // admin
        leftDrawer,

        // countStudents
        countStudents,
        getAllStudents
    },
})