import { db } from "@/plugins/firebase"
import { collection, onSnapshot } from "firebase/firestore"

const state = {
    reports: []
}

const getters = {
    reports: state => state.reports
}

const mutations = {
    setReports(state, reports) {
        state.reports.push(reports)
    }
}

const actions = {
    getReports({ commit }) {
        const unsubscribe = onSnapshot(collection(db, 'reports'), querySnapshot => {
            this.state.reports.reports = []
            querySnapshot.forEach(doc => {
                commit('setReports', { id: doc.id, ...doc.data() })
            })
        })

        return unsubscribe
    }
}

export default { state, getters, actions, mutations }