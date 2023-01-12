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
            body: 'Become an industry expert and create amazing web resources using front-end web technologies.',
            subtext: "Front-end Web Development",
            outline: [
                {
                    title: 'Introduction to Web Development and React',
                    show: true,
                    breakdown: [
                        "Intro to Html, CSS and Javascript",
                        "Creating your first web page with Html css and Javascript"
                    ]
                },
                {
                    title: 'Introduction to React',
                    show: false,
                    breakdown: [
                        "What is React?",
                        "Using the create-react-app",
                        "What are components"
                    ]
                },
                {
                    title: 'Introduction to React',
                    show: false,
                    breakdown: [
                        "What is React?",
                        "Using the create-react-app",
                        "What are components"
                    ]
                },
                {
                    title: 'State and Props',
                    show: false,
                    breakdown: [
                        "Learn about state which allows you to describe changes to your UI using data.",
                        "Learn about the fundamentals of the Hooks API that lets you incorporate state in a Function component.",
                        "Understand how to use props as conduits that allow you to pass data from a parent to a child component."
                    ]
                },
                {
                    title: 'React Router and Single Page Applications',
                    show: false,
                    breakdown: [
                        "You will learn about React router and its use in designing single page applications. You will also learn about single page applications and use React Router to design single page applications."
                    ]
                },
                {
                    title: 'React Forms, Flow Architecture and Introduction to Redux',
                    show: false,
                    breakdown: [
                        "In this module you will be introduced to uncontrolled and controlled forms and briefly examine form validation in React applications. You will get an overview of the Flux architecture and introduced to Redux as a way of realizing the flux architecture"
                    ]
                },
                {
                    title: 'Redux and Client-Server Communication',
                    show: false,
                    breakdown: [
                        "In this module you will explore Redux further including Redux action, combining reducers, and Redux thunk, client-server communication using Fetch and the REST API. You will get a brief introduction to animation in React.",
                        "You will also learn about testing, building and deploying React applications."
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673542033/wanlainjo/courses/fullstack_tgzftp.jpg",
            title: 'Fullstack Development',
            body: 'Become a Certified Fullstack Software Developer',
            subtext: "Build functional software’s and web applications to solve real problems.",
            outline: [
                {
                    title: 'COURSE INTRODUCTION',
                    show: true,
                    breakdown: [
                        "How the internet works",
                        "Setting up your Integrated Development Enviroment (IDE)",
                        "Technologies to use",
                        "The main tool that will be used is Visual Studio Code"
                    ]
                },
                {
                    title: 'DIVE INTO HTML',
                    show: false,
                    breakdown: [
                        "What is HTML?",
                        "The structure of an HTML document",
                        "Starting to fill the structure",
                        "Images & attributes",
                        "URLs, Links & iframing",
                        "Practice Exercise"
                    ]
                },
                {
                    title: 'INFORMATION ARCHITECTURE IN DESIGNING FOR MOBILE SCREEN',
                    show: false,
                    breakdown: [
                        "Getting started with CSS",
                        "Starting to make our webpage beautiful: text",
                        "Colors",
                        "Classes and ID’s",
                        "The CSS box model",
                        "Building a simple layout",
                        "Polishing our blog post",
                        "Relative vs Absolute",
                        "Practice Exercise"
                    ]
                },
                {
                    title: 'RESPONSIVE WEB DESIGN WITH MEDIA QUERIES & BOOTSRAP 4',
                    show: false,
                    breakdown: [
                        "Bootstrap Installation",
                        "Responsive Navbar & nav colours",
                        "Containers, media breakpoint & grid in Bootstrap 4",
                        "Styling your pages with Icons"
                    ]
                },
                {
                    title: 'MODERN JAVASCRIPT',
                    show: false,
                    breakdown: [
                        "A brief introduction to Javascript",
                        "Variables & Data Types",
                        "Basic Operators",
                        "DOM Manipulations & events",
                        "If/else Statements",
                        "Boolean Logic",
                        "Arrays",
                        "Functions (Arrow functions)",
                        "Practice Exercise"
                    ]
                },
                {
                    title: 'MONGO-DB WEB FRAME ENGINE',
                    show: false,
                    breakdown: [
                        "Store complex, relational data using Mongoose",
                        "Implement data validation",
                        "Implement authentication and authorization",
                        "Handle and log errors effectively",
                        "Build features using test driven development",
                        "Deploy your node app to heroku"
                    ]
                }
            ]
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
            body: 'Learn modern digital trends & methods to develop key marketing strategies and spur growth for small to large scale businesses.',
            subtext: "Become a Certified Digital Marketer",
            outline: [
                {
                    title: ' Digital Marketing and SEO',
                    show: true,
                    breakdown: [
                        "Explain what Digital Marketing entail",
                        "Define segments and the role segmentation plays in digital marketing",
                        "Identify the relevance of role for different channels for your business and customers",
                        "Explain how to use channels to market to the right customers at the right time.",
                        "Building a target persona",
                        "Define channels that will be used in campaigns and where your approach is paid, earned or owned",
                        "Content writing",
                        "Theoretical aspect on how SEO is done"
                    ]
                },
                {
                    title: 'Content Marketing and Social',
                    show: false,
                    breakdown: [
                        "Explain the impact local SEO has and how to set it up",
                        "Perform keyword research, analysing search volume and competition",
                        "Create your own Google Ads campaign",
                        "Evaluate results and optimize Adwords",
                        "Review key metrics and KPIs for SEM",
                        "How to take advantage of video marketing, using Youtube.",
                        "Learn Twitter marketing and how to leverage the Ads on it.",
                        "Learn Facebook marketing and how to leverage Ads on it.",
                        "Learn Instagram marketing and how to leverage the Ads on it."
                    ]
                },
                {
                    title: 'Marketing Acquisition & Conversion Rate Optimization',
                    show: false,
                    breakdown: [
                        "Landing pages & Lead Generation",
                        "Review best practices of digital marketing UX",
                        "Evaluate the design, functionality, and effectiveness of landing pages",
                        "Develop forms for your business"
                    ]
                },
                {
                    title: 'Customer Engagement & Retention (Via Email)',
                    show: false,
                    breakdown: [
                        "Plan and prepare lifecycle marketing strategies",
                        "Learn how to do email Marketing",
                        "Engage with your customers via email throughout their lifecycle.",
                        "Plan, execute, and measure email-marketing campaigns",
                        "Explaining how to create popup form to gain organic followers via email."
                    ]
                },
                {
                    title: 'Paid Social & Advertising (Paid Search, Adwords & SEM)',
                    show: false,
                    breakdown: [
                        "Outline the process for developing content campaigns.",
                        "Create a content plan with key messaging",
                        "Assess which content marketing tactics meet specific marketing and business goals.",
                        "Determine the key metrics for measuring and optimizing content marketing tactics.",
                        "Select appropriate influencers for your project and determine your influencer outreach strategy.",
                        "Curate and modify digital content across your social channels.",
                        "Determine the role of community management in social media marketing. Identify metrics and KPIs for measuring the impact of social media.",
                        "Use of CRM (Customer Relationship Management) & Marketing automation tool"
                    ]
                },
                {
                    title: 'Google Tools',
                    show: false,
                    breakdown: [
                        "Google Analytics",
                        "Clear understanding of how to leverage the detailed information on Google Analytics",
                        "Learn how to track a link using Google Analytics",
                        "Google Search Console",
                        "In depth tutorial on how to use Google Search Console",
                        "Google TagManager",
                        "Explain how to use Google TagManager to track links on your website",
                        "Structured Data Markup Helper",
                        "Explore how to use structured data markup helper to boost your local SEO"
                    ]
                }
            ]
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