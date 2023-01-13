const state = {
    events: [
        {
            title: 'Leveraging the Tch space',
            collection: 'evenRegistration',
            description: 'This event is for those who are interested in learning how to leverage the tech space to build a career in tech',
            image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1673565438/wanlainjo/events/leveraging_the_tech_space_afz954.jpg'
        }
    ]
}

const getters = {
    events: state => state.events
}

export default { state, getters }