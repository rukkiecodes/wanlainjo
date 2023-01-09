import {
    createStore
} from 'vuex'

// MODULES
import drawer from './modules/drawer.js'

export default createStore({
    strict: false,
    modules: {
        drawer
    },
})