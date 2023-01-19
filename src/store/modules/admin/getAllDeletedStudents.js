import { db } from "@/plugins/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const state = {
    students: []
}

const getters = {
    allDeletedStudents: state => state.students
}

const mutations = {
    setDeletedStudents: (state, students) => {
        state.students.push(students)
    }
}

const actions = {
    async fetchDeletedStudents({ commit }) {
        this.state.getAllDeletedStudents.students = []
        const querySnapshot = await getDocs(query(collection(db, "registration"), where("status", "==", "deleted")))

        querySnapshot.forEach((doc) => {
            commit('setDeletedStudents', {
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