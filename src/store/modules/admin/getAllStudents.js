import { db } from "@/plugins/firebase"
import { collection, getDocs } from "firebase/firestore"

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
        const querySnapshot = await getDocs(collection(db, "registration"))

        querySnapshot.forEach((doc) => {
            commit('setStudents', {
                id: doc.id,
                ...doc.data()
            })
            // console.log(doc.id, " => ", doc.data());
        });
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}