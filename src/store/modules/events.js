const state = {
    events: [
        {
            title: 'Leveraging the Tch space',
            collection: 'evenRegistration',
            open: false,
            dialog: false,
            description: 'This event is for those who are interested in learning how to leverage the tech space to build a career in tech',
            image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1673565438/wanlainjo/events/leveraging_the_tech_space_afz954.jpg',
            gallery: [
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1119_pjsrqr.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640664/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1100_s62gbv.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1099_gycctg.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640663/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0870_cyivi4.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640646/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1045_abo0wi.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640653/wanlainjo/events/leveraging%20the%20tech%20space/IMG_0852_vsftp6.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673640644/wanlainjo/events/leveraging%20the%20tech%20space/IMG_1021_tgyyhf.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_21.34.32_qafkl8.jpg",
                "https://res.cloudinary.com/rukkiecodes/image/upload/v1673642674/wanlainjo/events/leveraging%20the%20tech%20space/WhatsApp_Image_2023-01-13_at_12.16.58_gfxflz.jpg"
            ]
        }
    ]
}

const getters = {
    events: state => state.events
}

export default { state, getters }