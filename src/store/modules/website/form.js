import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    serverTimestamp
} from 'firebase/firestore'

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable
} from "firebase/storage"
import {
    db
} from '@/plugins/firebase'
import uuid from 'uuid-random'

const state = {
    step: 1,

    credentials: {
        studentsname: '',
        sex: 'Male',
        address: '',
        dob: '',
        state: '',
        phone: '',
        email: '',//
        sponsorName: '',
        sponsorAddress: '',
        sponsorPhone: '',
        course1: {
            course: '',
            duration: 1,
            price: 30000
        },
        course2: {
            course: '',
            duration: 1,
            price: 30000
        },
        course3: {
            course: '',
            duration: 1,
            price: 30000
        },
        campus: 'Dline - Port Harcourt',
        agrement: true,
        verified: false,
        activeCardOne: false,
        activeCardTwo: false,
        activeCardThree: false,
    },

    loading: false,
    image: null,
}

const mutations = {
    toggleActiveCardOne: state => state.activeCardOne = !state.activeCardOne,

    toggleActiveCardTwo: state => state.activeCardTwo = !state.activeCardTwo,

    toggleActiveCardThree: state => state.activeCardThree = !state.activeCardThree,

    setCourseOnePrice: (state) => {
        function percentage(percent, total) {
            return ((percent / 100) * total).toFixed(0);
        }

        switch (state.credentials.course1.duration) {
            case 1: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(5, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 2: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(10, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 3: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(15, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 4: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(20, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 5: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(25, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 6: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(30, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 7: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(35, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 8: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(40, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 9: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(45, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 10: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(50, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 11: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(65, 30000)) + parseInt(state.credentials.course1.price);
            }
                break;
            case 12: {
                state.credentials.course1.price = 30000
                state.credentials.course1.price = parseInt(percentage(70, 30000)) + parseInt(state.credentials.course1.price);
            }
        }

        console.log(state.credentials.course1.price)
    },

    setCourseTwoPrice: (state) => {
        function percentage(percent, total) {
            return ((percent / 100) * total).toFixed(0);
        }

        switch (state.credentials.course2.duration) {
            case 1: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(5, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 2: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(10, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 3: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(15, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 4: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(20, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 5: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(25, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 6: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(30, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 7: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(35, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 8: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(40, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 9: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(45, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 10: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(50, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 11: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(65, 30000)) + parseInt(state.credentials.course2.price);
            }
                break;
            case 12: {
                state.credentials.course2.price = 30000
                state.credentials.course2.price = parseInt(percentage(70, 30000)) + parseInt(state.credentials.course2.price);
            }
        }

        console.log(state.credentials.course2.price)
    },

    setCourseThreePrice: (state) => {
        function percentage(percent, total) {
            return ((percent / 100) * total).toFixed(0);
        }

        switch (state.credentials.course3.duration) {
            case 1: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(5, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 2: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(10, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 3: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(15, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 4: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(20, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 5: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(25, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 6: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(30, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 7: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(35, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 8: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(40, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 9: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(45, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 10: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(50, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 11: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(65, 30000)) + parseInt(state.credentials.course3.price);
            }
                break;
            case 12: {
                state.credentials.course3.price = 30000
                state.credentials.course3.price = parseInt(percentage(70, 30000)) + parseInt(state.credentials.course3.price);
            }
        }

        console.log(state.credentials.course3.price)
    },
}

const actions = {
    async submitForm() {
        let data = this.state.form

        if (!data.image && data.credentials.studentsname == '' && data.credentials.sex == '' && data.credentials.address == '' && data.credentials.dob == '' && data.credentials.state == '' && data.credentials.phone == '' && data.credentials.email == '' && data.credentials.sponsorName == '' && data.credentials.sponsorAddress == '' && data.credentials.sponsorPhone == '') {
            this.state.form.loading = false
            this.state.snackbar.active = true
            this.state.snackbar.color = 'red'
            this.state.snackbar.text = 'Please complete the form and try again'
        }

        if (!this.state.form.image) return

        this.state.form.loading = true

        const storage = getStorage()

        let link = `students/${uuid()}/${this.state.form.image.name}`

        const uploadTask = uploadBytesResumable(ref(storage, link), this.state.form.image)

        uploadTask.on('state_changed',
            snapshot => { },
            error => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async downloadURL => {
                        await addDoc(collection(db, 'registration'), {
                            ...this.state.form.credentials,
                            displayPicture: downloadURL,
                            timestamp: serverTimestamp()
                        })
                        this.state.form.loading = false
                        this.state.snackbar.active = true
                        this.state.snackbar.color = 'green'
                        this.state.snackbar.text = 'Registration completed'

                        this.state.form.credentials.studentsname = ''
                        this.state.form.credentials.swx = ''
                        this.state.form.credentials.address = ''
                        this.state.form.credentials.dob = ''
                        this.state.form.credentials.state = ''
                        this.state.form.credentials.phone = ''
                        this.state.form.credentials.email = ''
                        this.state.form.credentials.sponsorName = ''
                        this.state.form.credentials.sponsorAddress = ''
                        this.state.form.credentials.sponsorPhone = ''
                        this.state.form.image = null
                        this.state.form.step = 1
                    })
            }
        )
    },
}

export default { state, mutations, actions }