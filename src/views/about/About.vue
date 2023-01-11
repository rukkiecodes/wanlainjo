<template>
    <div class="v-header container">
        <div class="fullscreen-video-wrap">
            <video
                src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
                autoplay loop muted></video>
        </div>
        <div class="header-overlay"></div>
        <v-container class="header-content">
            <h1 class="font-weight-light text-white text-h4 text-sm-h3 space-1 text-capitalize">About <span
                    class="font-weight-bold">Wanlainjo Tech Hub</span></h1>
        </v-container>
    </div>

    <v-container>
        <v-card flat>
            <v-tabs v-model="tab" bg-color="transparent" next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left"
                show-arrows>
                <v-tab value="one" class="text-capitalize font-weight-regular">About Us</v-tab>
                <v-tab value="two" class="text-capitalize font-weight-regular">Why WTH</v-tab>
                <v-tab value="three" class="text-capitalize font-weight-regular">Expetation</v-tab>
                <v-tab value="four" class="text-capitalize font-weight-regular">Facilities</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-card width="100%">
                            <v-card-text class="text-center text-h5 font-weight-bold" style="line-height: 1.5em;">
                                More than 75 skilled coordinators monitor the quality of our courses because your
                                feedback and satisfaction are important to us.</v-card-text>
                            <v-card-text class="text-center">
                                We believe that anyone can become part of the tech industry, as long as this is
                                something they’re curious about. To realize our mission, we created a solid setup where
                                our instructors share knowledge and experience gained through years of working in IT and
                                our HR advisors provide you with guidance in finding a job after the course.
                            </v-card-text>
                        </v-card>
                    </v-window-item>

                    <v-window-item value="two">
                        <v-card width="100%">
                            <v-card-text class="text-center text-h5 font-weight-bold" style="line-height: 1.5em;">
                                Explore the fastest, most effective way to instantly grow your skills, transform
                                yourself and get ready to be hired as a highly-paid web developer!</v-card-text>
                            <v-card-text>
                                We teach the important skills required to jumpstart your career as a web developer. With
                                16 intense weeks of on-campus training, you learn to think and build like software
                                developers. You move from understanding programming fundamentals to launching full-stack
                                web apps. You do all these while learning to solve everyday problems with constructive,
                                well-written programs.
                            </v-card-text>
                            <v-card-text>
                                You'll be taught to build smart, data-driven web applications using JavaScript and
                                Python as it's backend counterpart. Work with the famous SQL database MySQL to integrate
                                data into your project; connect with other third-party applications using API calls. And
                                finally, you'll learn the fundamentals of working as a team; collaborate with other
                                group members of the class to build, change, maintain, and secure an application. Track
                                your team development process using Version Control Systems.
                            </v-card-text>
                            <v-card-text>
                                Whether you want to pursue a career as a Web Developer, a Freelancer, or an
                                Entrepreneur, our courses prepares you adequately for that. This is an immersive,
                                collaborative and intensive program, prepared in a way to help you apply what you learn
                                in real-time through project-based work.
                            </v-card-text>
                            <v-card-text>
                                Get excellent career guidance from industries' best
                            </v-card-text>
                            <v-card-text>
                                Our support team provides students with guidance and tips on building a top-notch
                                portfolio that woos employers.
                            </v-card-text>
                            <v-card-text>
                                Wanlainjo Tech Hub is always reaching out to employers picking resumés and arranging
                                interviews for our students. You gain access to networking opportunities and foster
                                connections within the industry.
                            </v-card-text>
                            <v-card-text>
                                Through our partnerships, you'll meet and have access to Hiring Managers across
                                different companies.
                            </v-card-text>
                        </v-card>
                    </v-window-item>

                    <v-window-item value="three">
                        <v-card width="100%">
                            <v-card-text class="text-center text-h5 font-weight-bold" style="line-height: 1.5em;">
                                Become a market-ready Web Developer in no time!</v-card-text>
                            <v-card-text class="text-center">
                                You do not need to have any knowledge or previous experience in IT. We start with the
                                basics and teach you everything. You probably have your own daily duties, work, family
                                or school, that is why we run our courses in the most convenient and comfortable way,
                                according to the evening mode.
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">Fundamentals</v-card-title>
                                The first weeks of this bootcamp is to help you appreciate the fundamentals of web
                                development, understanding structure, design and getting comfortable coding in HTML and
                                CSS.
                            </v-card-text>
                            <v-card-text>
                                You'll also be introduced to the concepts of Responsive Design - targeting different
                                screen sizes and working with frameworks such as Bootstrap
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">Frontend Programming</v-card-title>
                                After mastering the fundamentals, the focus shifts towards frontend programming. You'll
                                learn to add motion and interactivity to your project with JavaScript & jQuery.
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">The React Library</v-card-title>
                                You'll learn to buid dynamic Single Page Applications using the famous React Library.
                                Render basic React components using JSX and the virtual Document Object Model (DOM).
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">Version Control</v-card-title>
                                You'll learn to use the Git version control system, collaborate with other team members
                                and push your projects to GitHub using Git
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">Backend Programming with Python</v-card-title>
                                You'll understand the client/server roles in handling HTTP requests and thereafter move
                                to advanced concepts used to populate dynamic data to projects.
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">Database</v-card-title>
                                Modern web applications need querying real-time data for interactivity. You'll spend
                                considerable time learning Python interaction with MySQL.
                                You'll be exposed to querying the database to perform the CRUD functions - Create, Read,
                                Update and Delete resources.
                            </v-card-text>
                            <v-card-text>
                                <v-card-title class="px-0">Python Framework - Django</v-card-title>
                                You'll learn to use the amazing Python framework - Django to create database-driven web
                                applications.
                                You'll learn to use Django's pre-built components like user authentication, contact
                                forms, content administration, file uploads and a lot more to create real-life web
                                applications.
                            </v-card-text>
                        </v-card>
                    </v-window-item>

                    <v-window-item value="four">
                        <v-card width="100%">
                            <v-card-text class="text-center text-h5 font-weight-bold" style="line-height: 1.5em;">
                                Learn At A World Class Facility</v-card-text>
                            <v-card-text>
                                Our learning studio is designed to inspire focused learning, creativity and
                                collaboration. It is equiped with state-of-the-art learning equipments with no more than
                                10 students per class.
                            </v-card-text>
                            <v-card-text>
                                Learn in an environment that puts you in direct contact with professional web developers
                                and software engineer.
                            </v-card-text>
                            <v-card-text>
                                You'll be provided with constant power and internet supply to make you focus on the job
                                at hand
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-container>

    <div class="section">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" order="1" order-sm="0">
                    <v-card>
                        <v-card-title class="">Who We Are</v-card-title>

                        <v-card-text>Become a well-rounded Web Developer in no time!</v-card-text>

                        <v-card-text>WTH is a top-rated tech academy in Port Harcourt. In the last 3 years, we've
                            trained hundreds of students - both online and physical - and helped them to navigate and
                            forge their paths in the tech industry. We teach the important skills required to jumpstart
                            your career as a web developer. With 16 intense weeks of on-campus training, you learn to
                            think and build like software developers. You move from understanding programming
                            fundamentals to launching full-stack web apps.</v-card-text>

                        <v-card-text>With our career guidance and thorough assistance, some of our students are working
                            with top organizations in the country and beyond. If you're looking to advance your career
                            in the tech industry, we'll help fulfill your dream. Though there's not enough reasons why
                            we're the best tech training school around, but here are a couple:</v-card-text>

                        <v-card-text>• We provide you with the best learning facility you can lay your eyes on. All our
                            classes are en-suite and equipped with the latest technologies for learning.:</v-card-text>

                        <v-card-text>• Our tutors are highly trained professionals that are choosen based on industry
                            experience and teaching ability.:</v-card-text>

                        <v-card-text>• We offer you the best support - either while you're learning or after you've
                            graduated. We provide career support to get you hired in no time.</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card class="overflow-hidden pa-0 ma-0 d-flex align-center" flat color="transparent" width="600"
                        max-width="100%">
                        <video style="width: 100%;" controls>
                            <source
                                src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
                                type="video/mp4">
                            Your browser does not support HTML video.
                        </video>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>

    <v-container>
        <ContactUsForm class="mt-16" />
    </v-container>
</template>

<script>
import ContactUsForm from '@/components/ContactUsForm.vue'
export default {
    data: () => ({
        tab: null,
    }),

    components: {
        ContactUsForm
    }
}
</script>

<style scoped>
.v-heade {
    height: 80vh;
    display: flex;
    align-items: center;
    color: #fff;
}

.container {
    width: 100%;
    height: 80vh;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    position: relative;
}

.fullscreen-video-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.fullscreen-video-wrap video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

.header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    height: auto;
    width: 100%;
}

.space-1 {
    letter-spacing: 1px;
    word-spacing: 1px;
}

.section {
    background: url(https://res.cloudinary.com/rukkiecodes/image/upload/v1673293841/wanlainjo/meetings-bg_ofgipt.jpg);
    background-size: cover;
    background-position: center;
}
</style>