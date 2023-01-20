import { db } from "@/plugins/firebase"
import { collection, onSnapshot } from "firebase/firestore"

const state = {
    courses: []
}

const getters = {
    courses: state => state.courses
}

const mutations = {
    setCourses(state, courses) {
        state.courses.push(courses)
    }
}

const actions = {
    getCourses({ commit }) {
        const unsubscribe = onSnapshot(collection(db, 'courses'), querySnapshot => {
            this.state.courses.courses = []
            querySnapshot.forEach(doc => {
                commit('setCourses', { id: doc.id, ...doc.data() })
            })
        })

        return unsubscribe
    }
}

export default { state, getters, actions, mutations }