import { db } from "@/plugins/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const state = {
    students: []
}

const getters = {
    allStudents: state => state.students
}

const mutations = {
    setStudents: (state, students) => {
        state.students.push(students)
    }
}

const actions = {
    async fetchStudents({ commit }) {
        this.state.getAllStudents.students = []
        const querySnapshot = await getDocs(query(collection(db, "registration"), where("status", "!=", "deleted")))

        querySnapshot.forEach((doc) => {
            commit('setStudents', {
                id: doc.id,
                ...doc.data()
            })
        });
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}