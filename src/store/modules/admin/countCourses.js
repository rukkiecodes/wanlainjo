import { db } from "@/plugins/firebase"
import { collection, getCountFromServer } from "firebase/firestore"

const state = {
    count: 0
}

const actions = {
    async countCourses() {
        const snapshot = await getCountFromServer(collection(db, 'courses'))
        this.state.countCourses.count = snapshot.data().count
        console.log(this.state.countCourses.count)
    }
}

export default { state, actions }