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
            subtext: "Become a Professional Graphic Designer",
            body: 'Understand your audience and business goals. Design delightful visuals and improve viewers’ engagement and conversion',
            outline: [
                {
                    title: 'Introduction to Graphic Design',
                    show: true,
                    breakdown: [
                        "Introduction & Welcome to the Course!",
                        "What is Graphic Design?",
                        "What is a Graphic Designer?",
                        "Get Up and Running With Adobe Creative Cloud"
                    ]
                },
                {
                    title: 'BASICS OF ADOBE ILLUSTRATOR',
                    show: false,
                    breakdown: [
                        "Introduction to the Project",
                        "Understanding the Workspace",
                        "Understanding the Tools",
                        "Understanding the Panels",
                        "Working With Text: Type Tools, Adobe Type kit, and Creating Outlines",
                        "Artboards and Creating Additional Designs",
                        "Exporting Your Files"
                    ]
                },
                {
                    title: 'LEARNING PHOTOSHOP (CREATING A POSTER)',
                    show: false,
                    breakdown: [
                        "Poster Introduction and file setup (revised)",
                        "Gathering Assets",
                        "Refining Selections Update: The New",
                        "Photoshop 2015.5 Selection and Masking Space",
                        "Refining Selections",
                        "IWorking With Text",
                        "Refining the Layout",
                        "Creating Additional Looks to Give Your Client Options",
                        "Exporting Your Artwork",
                    ]
                },
                {
                    title: 'CREATING A LOGO',
                    show: false,
                    breakdown: [
                        "Introduction to This Section",
                        "Research and Gathering Ideas",
                        "Creating a Mood board",
                        "Bring in Your Text and Picking Fonts",
                        "Basic Tool Overview",
                        "Creating Your First Looks",
                        "Refining Ideas",
                        "Designing Your Presentation For Your Clients",
                        "Exporting and Sending Comps to Clients",
                        "Finalize Your Logo, Part 1: Refining Color and Creating a 'Details' Page",
                        "Finalize Your Logo, Part 2: Artboard Setup for Quick Export and File Management",
                        "Finalize Your Logo, Part 3: Batch Export Files and Professional Client Delivery",
                    ]
                },
                {
                    title: 'LEARNING PHOTOSHOP (CREATING A COMPOSITE IMAGE)',
                    show: false,
                    breakdown: [
                        "Introduction to Photoshop Compositing",
                        "Getting assets for your first composite image",
                        "Compositing Continued & Color Levels",
                        "Refining Selections",
                        "Pushing Your Design Further",
                        "One More Idea & Exporting Your Image"
                    ]
                },
                {
                    title: 'CREATING A MAGAZINE AD',
                    show: false,
                    breakdown: [
                        "Project Introduction",
                        "Setting Up the File",
                        "Gathering Assets and How to Scrape Photos",
                        "Getting Things in Place",
                        "Design Continued.",
                        "Further Refinement, Adding Photos, and Masking with Shapes",
                        "Export the Final Ad for Press & Reviewing Design Decisions",
                        "How to Package Editable Photoshop Files to Share With Someone Else"
                    ]
                },
                {
                    title: 'BASICS OF INDESIGN (CREATING AN EBOOK)',
                    show: false,
                    breakdown: [
                        "Introduction and File Setup",
                        "Placing Assets and Basic Layout",
                        "Finalize the Design, Exporting, and Packaging Final Files"
                    ]
                },
                {
                    title: 'BASICS OF INDESIGN (CREATING A BROCHURE)',
                    show: false,
                    breakdown: [
                        "Project Introduction",
                        "Beginning With the End in Mind",
                        "File Setup",
                        "Outside Layout: Part 1",
                        "Outside Layout: Part 2",
                        "Inside Layout",
                        "Exporting Final Files, Part 1: Generic Export",
                        "Exporting Final Files, Part 2: Adding Printer Marks and Fold Guides in InDesign",
                        "Exporting Final Files, Part 3: Add Printer Marks and Fold Guides in Illustrator"
                    ]
                },
                {
                    title: 'CREATING CUSTOM BUSINESS CARDS',
                    show: false,
                    breakdown: [
                        "Project Introduction & File Setup",
                        "Business Card Design",
                        "Exporting Final Files and Custom Finishes"
                    ]
                },
                {
                    title: 'INTRODUCTION TO BEHANCE',
                    show: false,
                    breakdown: [
                        "Features overview of behance",
                        "Create a custom cover and full width portfolio image for behance"
                    ]
                },
            ]
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