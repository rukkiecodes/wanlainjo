import { db } from "@/plugins/firebase"
import { collection, getCountFromServer } from "firebase/firestore"

const state = {
    count: 0
}

const actions = {
    async countStudents() {
        const snapshot = await getCountFromServer(collection(db, 'registration'))
        this.state.countStudents.count = snapshot.data().count
    }
}

export default { state, actions }