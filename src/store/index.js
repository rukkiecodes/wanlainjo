import {
    createStore
} from 'vuex'

// MODULES
import drawer from './modules/drawer'
import viewCourse from './modules/viewCourse'

export default createStore({
    strict: false,
    modules: {
        drawer,
        viewCourse
    },
})