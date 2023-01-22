const state = {
    coursesDummy: [
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280092/wanlainjo/courses/microsoft_blonkb.jpg",
            title: 'Microsoft Office Suite',
            body: 'MS Word, MS Excel, MS PowerPoint, MS Outlook, MS OneDrive, MS Teams',
            subtext: "Acquire the essential skills needed for producing professional work using Microsoft",
            whatYouWillLearn: [
                "Create and edit documents, spreadsheets, presentations, and emails",
                "Collaborate with others on documents, spreadsheets, and presentations",
                "Use the tools in Word, Excel, PowerPoint, Outlook, and OneDrive to create and edit documents, spreadsheets, presentations, and emails",
            ],
            price: 40000,
            duration: 5,
            outline: [
                {
                    title: 'Word',
                    show: true,
                    breakdown: [
                        "Word Basics",
                        "Working with Text",
                        "Layout and Printing",
                        "Working with Objects",
                        "Collaboration and Reviewing",
                        "Doing More with Word",
                        "Extras",
                        "Quiz",
                    ]
                },
                {
                    title: 'Excel',
                    show: false,
                    breakdown: [
                        "Excel Basics",
                        "Working with Formulas and Functions",
                        "Working with Data",
                        "Working with Charts",
                        "Collaboration and Reviewing",
                        "Doing More with Excel",
                        "Extras",
                    ]
                },
                {
                    title: 'Power Point',
                    show: false,
                    breakdown: [
                        "PowerPoint Basics",
                        "Working with Slides",
                        "Working with Objects",
                        "Working with Animations",
                        "Collaboration and Reviewing",
                        "Doing More with PowerPoint",
                        "Extras",
                    ]
                },
                {
                    title: 'Outlook',
                    show: false,
                    breakdown: [
                        "Outlook Basics",
                        "Working with Email",
                        "Working with Calendar",
                        "Working with Contacts",
                        "Working with Tasks",
                        "Collaboration and Reviewing",
                        "Doing More with Outlook",
                        "Extras",
                    ]
                },
                {
                    title: 'Access',
                    show: false,
                    breakdown: [
                        "Access Basics",
                        "Working with Tables",
                        "Working with Queries",
                        "Working with Forms",
                        "Working with Reports",
                        "Collaboration and Reviewing",
                        "Doing More with Access",
                        "Extras",
                    ]
                },
                {
                    title: 'OneDrive',
                    show: false,
                    breakdown: [
                        "OneDrive Basics",
                        "Working with Files",
                        "Working with Folders",
                        "Working with Sharing",
                        "Collaboration and Reviewing",
                        "Doing More with OneDrive",
                        "Extras",
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/graphic-design_axrnad.jpg",
            title: 'Graphic Design',
            body: 'Understand your audience and business goals. Design delightful visuals and improve viewers’ engagement and conversion',
            subtext: "Become a Professional Graphic Designer",
            whatYouWillLearn: [
                "Learn the basics of graphic design",
                "Learn how to use Adobe Illustrator and Photoshop",
                "Learn how to create a logo, poster, and composite image",
                "Learn how to create a mood board",
                "Learn how to create a presentation for your clients",
                "Learn how to export your files",
            ],
            price: 50000,
            duration: 8,
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
            whatYouWillLearn: [
                "Learn the basics of front-end web development",
                "Learn how to use HTML, CSS and Javascript",
                "Learn how to create a website from scratch",
                "Learn how to create a web application",
            ],
            price: 85000,
            duration: 13,
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
            whatYouWillLearn: [
                "Learn how to build a fullstack web application",
                "Learn how to build a fullstack mobile application",
                "Learn how to build a fullstack desktop application",
                "Learn how to build a fullstack chatbot application",
            ],
            price: 190000,
            duration: 26,
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
            subtext: "Back-end Web Development With PHP",
            whatYouWillLearn: [
                "Learn how to build a fullstack web application",
                "Learn how to build a fullstack mobile application",
                "Learn how to build a fullstack desktop application",
            ],
            price: 100000,
            duration: 17,
            outline: [
                {
                    title: 'Introduction to PHP',
                    show: true,
                    breakdown: [
                        "What is PHP?",
                        "Installing PHP",
                        "PHP Syntax",
                        "PHP Variables",
                        "PHP Echo/Print"
                    ]
                },
                {
                    title: 'PHP Data Types',
                    show: false,
                    breakdown: [
                        "PHP Strings",
                        "PHP Integers",
                        "PHP Floats",
                        "PHP Booleans",
                        "PHP Arrays",
                        "PHP Objects",
                        "PHP NULL Values",
                    ]
                },
                {
                    title: 'PHP Operators',
                    show: false,
                    breakdown: [
                        "PHP Arithmetic Operators",
                        "PHP Assignment Operators",
                        "PHP Comparison Operators",
                        "PHP Increment/Decrement Operators",
                        "PHP Logical Operators",
                        "PHP String Operators",
                        "PHP Array Operators",
                    ]
                },
                {
                    title: 'PHP Conditional Statements',
                    show: false,
                    breakdown: [
                        "PHP if Statement",
                        "PHP if...else Statement",
                        "PHP if...elseif...else Statement",
                        "PHP Switch Statement",
                    ]
                },
                {
                    title: 'PHP Loops',
                    show: false,
                    breakdown: [
                        "PHP while Loop",
                        "PHP do...while Loop",
                        "PHP for Loop",
                        "PHP foreach Loop",
                    ]
                },
                {
                    title: 'PHP Functions',
                    show: false,
                    breakdown: [
                        "What is a Function?",
                        "Creating a PHP Function",
                        "PHP Function Arguments",
                        "PHP Function - Returning Values",
                        "PHP Function - Variable Functions",
                        "PHP Function - Anonymous Functions",
                        "PHP Function - Recursion",
                    ]
                },
                {
                    title: 'PHP Forms',
                    show: false,
                    breakdown: [
                        "What is a Form?",
                        "PHP Forms - Handling Forms",
                        "PHP Forms - Form Validation",
                        "PHP Forms - Form Required",
                        "PHP Forms - Form Email",
                        "PHP Forms - Form URL",
                        "PHP Forms - Form Number",
                        "PHP Forms - Form Range",
                    ]
                },
                {
                    title: 'PHP Superglobals',
                    show: false,
                    breakdown: [
                        "PHP Superglobals - $_SERVER",
                        "PHP Superglobals - $_REQUEST",
                        "PHP Superglobals - $_POST",
                        "PHP Superglobals - $_GET",
                        "PHP Superglobals - $_FILES",
                        "PHP Superglobals - $_ENV",
                        "PHP Superglobals - $_COOKIE",
                        "PHP Superglobals - $_SESSION"
                    ]
                },
                {
                    title: 'PHP Date & Time',
                    show: false,
                    breakdown: [
                        "PHP Date",
                        "PHP Time",
                        "PHP Date and Time",
                        "PHP Create a Date",
                        "PHP Get a Date",
                        "PHP Get a Timestamp",
                        "PHP Format a Date/Time",
                        "PHP Timezone",
                        "PHP Timezone - List of Supported Timezones",
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280092/wanlainjo/courses/python_quyqro.jpg",
            title: 'Python Programming',
            body: 'HTML5, CSS3, JavaScript(Vanilla), Python, Django, Git/Github etc',
            subtext: "Python Programming",
            whatYouWillLearn: [
                "Learn how to build a fullstack web application",
                "Learn how to build a fullstack mobile application",
                "Learn how to build a fullstack desktop application",
            ],
            price: 100000,
            duration: 17,
            outline: [
                {
                    title: 'Introduction to Python',
                    show: true,
                    breakdown: [
                        "What is Python?",
                        "Installing Python",
                        "Python Syntax",
                        "Python Variables",
                        "Python Comments",
                        "Python Data Types",
                        "Python Numbers",
                        "Python Casting",
                        "Python Strings",
                        "Python Booleans",
                        "Python Operators",
                        "Python Lists",
                        "Python Tuples",
                        "Python Sets",
                        "Python Dictionaries",
                    ]
                },
                {
                    title: 'Python If...',
                    show: false,
                    breakdown: [
                        "Python If Statement",
                        "Python If...Else Statement",
                        "Python If...Elif...Else Statement",
                        "Python Nested If",
                        "Python Short Hand If",
                        "Python Short Hand If...Else",
                    ]
                },
                {
                    title: 'Python Loops',
                    show: false,
                    breakdown: [
                        "Python While Loops",
                        "Python For Loops",
                        "Python Nested Loops",
                        "Python Looping Through a String",
                        "Python The break Statement",
                        "Python The continue Statement",
                    ]
                },
                {
                    title: 'Python Functions',
                    show: false,
                    breakdown: [
                        "What is a Function?",
                        "Creating a Function",
                        "Calling a Function",
                        "Arguments",
                        "Arbitrary Arguments",
                        "Keyword Arguments",
                        "Arbitrary Keyword Arguments",
                        "Default Parameter Value",
                        "Passing a List as an Argument",
                        "Recursion",
                        "Lambda Functions",
                        "Anonymous Functions",
                    ]
                },
                {
                    title: 'Python Arrays',
                    show: false,
                    breakdown: [
                        "What is an Array?",
                        "Accessing Array Elements",
                        "Looping Through an Array",
                        "Multidimensional Arrays",
                    ]
                },
                {
                    title: 'Python Classes & Objects',
                    show: false,
                    breakdown: [
                        "What is a Class?",
                        "Creating a Class",
                        "The __init__() Function",
                        "Object Methods",
                        "The self Parameter",
                        "Modify Object Properties",
                        "Delete Object Properties",
                        "Delete Objects",
                        "The pass Statement",
                        "Inheritance",
                        "Python super() Function",
                        "Python Iterators",
                        "Python Modules",
                        "Python Dates",
                    ]
                },
                {
                    title: 'Python Files',
                    show: false,
                    breakdown: [
                        "What is a File?",
                        "Open a File",
                        "Read a File",
                        "Close a File",
                        "Write to an Existing File",
                        "Create a New File",
                        "Delete a File",
                        "Python Exceptions",
                        "Python Try Except",
                        "Python Raise an Exception",
                        "Python User Defined Exceptions",
                        "Python Iterators",
                        "Python Generators",
                        "Python Regular Expressions",
                    ]
                },
                {
                    title: 'Python JSON',
                    show: false,
                    breakdown: [
                        "What is JSON?",
                        "Parse JSON - Convert from JSON to Python",
                        "Convert from Python to JSON",
                    ]
                },
                {
                    title: 'Python PIP',
                    show: false,
                    breakdown: [
                        "What is PIP?",
                        "Install PIP",
                        "Uninstall PIP",
                        "List Packages",
                    ]
                },
                {
                    title: 'Python MySQL',
                    show: false,
                    breakdown: [
                        "What is MySQL?",
                        "Install MySQL",
                        "MySQL Syntax",
                        "MySQL Select",
                        "MySQL Where",
                        "MySQL Order By",
                        "MySQL Delete",
                        "MySQL Drop Table",
                        "MySQL Update",
                        "MySQL Limit",
                        "MySQL Join",
                    ]
                },
                {
                    title: 'Python MongoDB',
                    show: false,
                    breakdown: [
                        "What is MongoDB?",
                        "Install MongoDB",
                        "MongoDB Syntax",
                        "MongoDB Select",
                        "MongoDB Where",
                        "MongoDB Order By",
                        "MongoDB Delete",
                        "MongoDB Drop Collection",
                        "MongoDB Update",
                        "MongoDB Limit",
                        "MongoDB Join",
                    ]
                },
                {
                    title: 'Python NumPy',
                    show: false,
                    breakdown: [
                        "What is NumPy?",
                        "Install NumPy",
                        "NumPy Syntax",
                        "NumPy Arrays",
                        "NumPy Array Indexing",
                        "NumPy Datatypes",
                        "NumPy Array Math",
                        "NumPy Broadcasting",
                        "NumPy Array Manipulation",
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/node_bguoje.png",
            title: 'Back-end Development(NODE)',
            body: 'Express, MongoDB, MySQL, PostgreSQL',
            subtext: "Node.js Programming",
            whatYouWillLearn: [
                "Learn Node.js from scratch",
                "Learn Express.js",
                "Learn MongoDB",
                "Learn MySQL",
                "Learn PostgreSQL",
                "Learn how to build a RESTful API",
                "Learn how to build a CRUD application",
                "Learn how to build a real world application",
            ],
            price: 100000,
            duration: 17,
            outline: [
                {
                    title: 'Introduction to Node.js',
                    show: true,
                    breakdown: [
                        "What is Node.js?",
                        "Why Node.js?"
                    ]
                },
                {
                    title: 'Node.js Environment Setup',
                    show: false,
                    breakdown: [
                        "Node.js Installation",
                        "Node.js First Application",
                        "Node.js REPL",
                        "Node.js File System",
                        "Node.js HTTP Module",
                        "Node.js URL Module",
                        "Node.js Events Module",
                        "Node.js NPM",
                    ]
                },
                {
                    title: 'Node.js Express',
                    show: false,
                    breakdown: [
                        "What is Express?",
                        "Express Installation",
                        "Express Routing",
                        "Express Static Files",
                        "Express Body Parser",
                        "Express URL Encoded",
                        "Express GET",
                        "Express POST",
                        "Express DELETE",
                        "Express PUT",
                        "Express RESTful API",
                    ]
                },
                {
                    title: 'Node.js MongoDB',
                    show: false,
                    breakdown: [
                        "What is MongoDB?",
                        "MongoDB Installation",
                        "MongoDB Syntax",
                        "MongoDB Select",
                        "MongoDB Where",
                        "MongoDB Order By",
                        "MongoDB Delete",
                        "MongoDB Drop Collection",
                        "MongoDB Update",
                        "MongoDB Limit",
                        "MongoDB Join",
                    ]
                },
                {
                    title: 'Node.js MySQL',
                    show: false,
                    breakdown: [
                        "What is MySQL?",
                        "MySQL Installation",
                        "MySQL Syntax",
                        "MySQL Select",
                        "MySQL Where",
                        "MySQL Order By",
                        "MySQL Delete",
                        "MySQL Drop Table",
                        "MySQL Update",
                        "MySQL Limit",
                        "MySQL Join",
                    ]
                },
                {
                    title: 'Node.js PostgreSQL',
                    show: false,
                    breakdown: [
                        "What is PostgreSQL?",
                        "PostgreSQL Installation",
                        "PostgreSQL Syntax",
                        "PostgreSQL Select",
                        "PostgreSQL Where",
                        "PostgreSQL Order By",
                        "PostgreSQL Delete",
                        "PostgreSQL Drop Table",
                        "PostgreSQL Update",
                        "PostgreSQL Limit",
                        "PostgreSQL Join",
                    ]
                },
                {
                    title: 'Node.js Socket.io',
                    show: false,
                    breakdown: [
                        "What is Socket.io?",
                        "Socket.io Installation",
                        "Socket.io Syntax",
                        "Socket.io Events",
                        "Socket.io Namespaces",
                        "Socket.io Rooms",
                        "Socket.io Broadcast",
                        "Socket.io Web Chat Application",
                    ]
                },
                {
                    title: 'Node.js JWT',
                    show: false,
                    breakdown: [
                        "What is JWT?",
                        "JWT Installation",
                        "JWT Syntax",
                    ]
                },
                {
                    title: 'Node.js Multer',
                    show: false,
                    breakdown: [
                        "What is Multer?",
                        "Multer Installation",
                        "Multer Syntax",
                    ]
                },
                {
                    title: 'Node.js Nodemailer',
                    show: false,
                    breakdown: [
                        "What is Nodemailer?",
                        "Nodemailer Installation",
                        "Nodemailer Syntax",
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280093/wanlainjo/courses/teen_baqsfg.jpg",
            title: 'Teens Coding',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
            subtext: "Teens Coding",
            whatYouWillLearn: [],
            price: 100000,
            duration: 17,
            outline: [
                {
                    title: 'Introduction to Teens Coding',
                    show: true,
                    breakdown: [
                        "What is Teens Coding?",
                        "Why Teens Coding?"
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280090/wanlainjo/courses/animation_fvkr3m.jpg",
            title: '3D Cartoon Animation',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
            subtext: "3D Cartoon Animation",
            whatYouWillLearn: [
                "Learn 3D Cartoon Animation from scratch",
                "Learn 3D Cartoon Animation Tools",
                "Learn 3D Cartoon Animation Techniques",
                "Learn 3D Cartoon Animation Software",
            ],
            price: 100000,
            duration: 17,
            outline: [
                {
                    title: 'Introduction to 3D Cartoon Animation',
                    show: true,
                    breakdown: [
                        "What is 3D Cartoon Animation?",
                        "Why 3D Cartoon Animation?"
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/db_wjihar.jpg",
            title: 'Database Management',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
            subtext: "Database Management",
            whatYouWillLearn: [
                "Learn Database Management from scratch",
                "Learn Database Management Tools",
                "Learn Database Management Types",
                "Learn Database Management Models",
                "Learn Database Management Languages",
                "Learn Database Management System",
            ],
            price: 80000,
            duration: 13,
            outline: [
                {
                    title: 'Introduction to Database Management',
                    show: true,
                    breakdown: [
                        "What is Database Management?",
                        "Why Database Management?",
                        "Database Management Tools",
                        "Database Management Types",
                        "Database Management Models",
                        "Database Management Languages",
                        "Database Management System",
                        "Database Management System Architecture",
                        "Database Management System Components",
                        "Database Management System Functions",
                        "Database Management System Advantages",
                        "Database Management System Disadvantages",
                        "Database Management System Applications",
                    ]
                }
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280091/wanlainjo/courses/networking_k9ybdr.jpg",
            title: 'Networking',
            body: 'Morbi in libero blandit lectus cursus ullamcorper.',
            subtext: "Networking",
            whatYouWillLearn: [
                "Learn Networking from scratch",
                "Learn Networking Tools",
                "Learn Networking Types",
                "Learn Networking Models",
                "Learn Networking Languages",
                "Learn Networking System",
            ],
            price: 80000,
            duration: 13,
            outline: [
                {
                    title: 'Introduction to Networking',
                    show: true,
                    breakdown: [
                        "What is Networking?",
                        "Why Networking?",
                        "Networking Tools",
                        "Networking Types",
                        "Networking Models",
                        "Networking Languages",
                        "Networking System",
                        "Networking System Architecture",
                        "Networking System Components",
                        "Networking System Functions",
                        "Networking System Advantages",
                        "Networking System Disadvantages",
                        "Networking System Applications",
                    ]
                },
            ]
        },
        {
            image: "https://res.cloudinary.com/rukkiecodes/image/upload/v1673280090/wanlainjo/courses/digital-marketing_l6qwea.jpg",
            title: 'Digital Marketing',
            body: 'Learn modern digital trends & methods to develop key marketing strategies and spur growth for small to large scale businesses.',
            subtext: "Become a Certified Digital Marketer",
            whatYouWillLearn: [
                "Learn Digital Marketing from scratch",
                "Learn Digital Marketing Tools",
                "Learn Digital Marketing Types",
                "Learn Digital Marketing Models",
            ],
            price: 80000,
            duration: 8,
            outline: [
                {
                    title: 'Digital Marketing and SEO',
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
            subtext: "Robotics / AI",
            whatYouWillLearn: [
                "Learn Robotics / AI from scratch",
                "Learn Robotics / AI Tools",
                "Learn Robotics / AI Types",
                "Learn Robotics / AI Models",
            ],
            price: 120000,
            duration: 17,
            outline: [
                {
                    title: 'Introduction to Robotics / AI',
                    show: true,
                    breakdown: [
                        "What is Robotics / AI?",
                        "Why Robotics / AI?",
                        "Robotics / AI Tools",
                        "Robotics / AI Types",
                        "Robotics / AI Models",
                        "Robotics / AI Languages",
                        "Robotics / AI System",
                        "Robotics / AI System Architecture",
                        "Robotics / AI System Components",
                        "Robotics / AI System Functions",
                        "Robotics / AI System Advantages",
                        "Robotics / AI System Disadvantages",
                        "Robotics / AI System Applications",
                    ]
                }
            ]
        },
    ]
}

const getters = {
    coursesDummy: state => state.coursesDummy
}

export default { state, getters }