const state = {
    courses: [
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280092/wanlainjo/courses/microsoft_blonkb.jpg",
            title: 'Microsoft Office Suite',
            body: 'MS Word, MS Excel, MS PowerPoint, MS Outlook, MS OneDrive, MS Teams',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/graphic-design_axrnad.jpg",
            title: 'Graphic Design',
            body: 'CorelDraw, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Canva',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280089/wanlainjo/courses/front-end_c9bulq.jpg",
            title: 'Front-end Development',
            body: 'HTML, CSS, Bootstrap, JavaScript(Vanilla), React.js, Vue.js, Firebase',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280092/wanlainjo/courses/php_mrwowz.jpg",
            title: 'Back-end Development(PHP)',
            body: 'PHP(vanilla), laravel, MySQL, PostgreSQL',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280092/wanlainjo/courses/python_quyqro.jpg",
            title: 'Python Programming',
            body: 'HTML5, CSS3, JavaScript(Vanilla), Python, Django, Git/Github etc',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/node_bguoje.png",
            title: 'Back-end Development(NODE)',
            body: 'Express, MongoDB, MySQL, PostgreSQL',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280093/wanlainjo/courses/teen_baqsfg.jpg",
            title: 'Teens Coding',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280090/wanlainjo/courses/animation_fvkr3m.jpg",
            title: '3D Cartoon Animation',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/db_wjihar.jpg",
            title: 'Database Management',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/networking_k9ybdr.jpg",
            title: 'Networking',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280090/wanlainjo/courses/digital-marketing_l6qwea.jpg",
            title: 'Digital Marketing',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280092/wanlainjo/courses/robotics_dc8vvx.jpg",
            title: 'Robotics / AI',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
        },
    ]
}

const getters = {
    courses: state => state.courses
}

export default { state, getters }