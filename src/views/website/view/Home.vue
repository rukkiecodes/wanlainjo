<template>
  <div class="v-header container">
    <div class="fullscreen-video-wrap">
      <video
        src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
        autoplay
        loop
        muted
      ></video>
    </div>
    <div class="header-overlay"></div>
    <v-container class="header-content">
      <h1 class="font-weight-light text-white text-h4 text-sm-h3 space-1">
        Welcome to <span class="font-weight-bold">Wanlainjo Tech-Hub</span>
      </h1>

      <v-card color="transparent" flat width="600" max-width="100%">
        <v-card-text
          class="text-white font-weight-light px-0 space-1 text-body-"
        >
          Gain new skills in just a few months. Go from Newbie to Pro in a short
          time. Explore the most effective way to grow your skills, transform
          yourself and be market ready in a few months.
        </v-card-text>
      </v-card>

      <JoinCommunity />
    </v-container>
  </div>

  <v-container>
    <Heading text="OUR COURSES" />
    <Courses :slice="6" />
  </v-container>

  <div class="section2 mt-16 py-16">
    <v-container>
      <v-row justify="space-between" class="">
        <v-col cols="12" sm="6">
          <v-card flat>
            <v-card-title>FULL-STACK WEB DEVELOPMENT BOOTCAMP</v-card-title>
            <v-card-text>
              We have developed the course content based on the skills required
              in the software industry. We focus on getting our graduates
              job-ready with hard and soft skills, including communication,
              collaborative working, creativity, problem-solving and the ability
              to work to deadlines in an agile environment.
            </v-card-text>
            <v-card-text class="pt-0">
              <JoinCommunity />
            </v-card-text>
          </v-card>
          <v-card class="mt-6" flat>
            <v-card-title>JOIN OUR SLACK COMMUNITY</v-card-title>
            <v-card-text>
              Join our Slack today to partake in our on-going and upcoming
              bootcamps. On completion of the Bootcamp, students will receive a
              free 1-year Associate Membership to WTH.
            </v-card-text>
            <v-card-text class="pt-0">
              <JoinCommunity />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card
            v-for="(acordion, i) in acordions"
            :key="i"
            class="mx-auto"
            max-width="100%"
            flat
          >
            <v-list>
              <v-list-item :title="acordion.title">
                <template v-slot:append>
                  <v-btn
                    @click="acordion.show = !acordion.show"
                    color="grey-lighten-1"
                    :icon="
                      acordion.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                    "
                    variant="text"
                  ></v-btn>
                </template>
              </v-list-item>
            </v-list>

            <v-expand-transition>
              <div v-show="acordion.show">
                <v-divider />
                <v-card-text class="text-body-2" v-html="acordion.text" />
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="section3">
    <v-container>
      <Heading
        text="TRAINING & BOOTCAMPS"
        color="transparent"
        textColor="white"
      />

      <v-row justify="space-between">
        <v-col cols="12" sm="5" md="4">
          <v-card>
            <v-card-title class="text-h6">Our Courses</v-card-title>
            <v-divider class="my-5" />
            <v-card-text class="d-flex flex-column align-start justify-start">
              <router-link
                v-for="(route, i) in courseRoutes"
                :key="i"
                :to="route.to"
                class="mb-4 text-decoration-none text-grey-darken-4 text-body-2"
                >{{ route.title }}
              </router-link>
            </v-card-text>
            <v-divider class="my-5" />
            <v-card-actions>
              <v-btn block class="bg-indigo-darken-4">See More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7" md="8">
          <Bootcamp :slice="4" />
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="section4">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="12" sm="6" md="7" order="1" order-sm="0">
          <v-row dense>
            <v-col cols="12">
              <h1>Why Choose WTH?</h1>
              <span>Become a well-rounded Web Developer</span>
            </v-col>
            <v-col cols="12" sm="6" v-for="(card, i) in lastCards" :key="i">
              <v-card flat color="indigo-darken-4">
                <v-card-text class="text-center ma-4">
                  <h1 class="mb-4">{{ card.stat }}</h1>
                  <span>{{ card.text }}</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="5" class="d-flex align-end">
          <v-card
            class="overflow-hidden pa-0 ma-0 d-flex align-center"
            flat
            color="transparent"
            width="600"
            max-width="100%"
          >
            <video style="width: 100%" controls>
              <source
                src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container>
    <ContactUsForm />
  </v-container>
</template>

<script>
import Heading from "../components/Heading.vue";
import Courses from "../components/Courses.vue";
import JoinCommunity from "../components/JoinCommunity.vue";
import Bootcamp from "../components/Bootcamp.vue";
import ContactUsForm from "../components/ContactUsForm.vue";
export default {
  data: () => ({
    acordions: [
      {
        show: false,
        title: "Why Choose WTH?",
        text: `WTH is a top-rated tech academy in Port Harcourt. In the last 3 years, we've trained hundreds of
                      students - both online and physical - and helped them to navigate and forge their paths in the
                      tech industry.
                      We teach the important skills required to jumpstart your career as a web developer. With 16
                      intense weeks of on-campus training, you learn to think and build like software developers. You
                      move from understanding programming fundamentals to launching full-stack web apps.
                      <br><br>
                      You'll be taught to build smart, data-driven web applications using JavaScript and Python as it's
                      backend counterpart. Work with the famous SQL database MySQL to integrate data into your project;
                      connect with other third-party applications using API calls.
                      <br><br>
                      Check out more details why <a rel="nofollow" href="https://www.toocss.com/" target="_blank">you
                        should choose WTH.</a>`,
      },
      {
        show: false,
        title: "What can you expect from our courses?",
        text: `You do not need to have any knowledge or previous experience in IT. We start with the basics and
                      teach you everything.
                      You probably have your own daily duties, work, family or school, that is why we run our courses in
                      the most convenient and comfortable way, according to the evening mode.<br><br>
                      Whether you want to pursue a career as a Web Developer, a Freelancer, or an Entrepreneur, this
                      program prepares you adequately for that. This is an immersive, collaborative and intensive
                      program, prepared in a way to help you apply what you learn in real-time through project-based
                      work.
                      With our career guidance and thorough assistance, some of our students are working with top
                      organizations in the country and beyond. If you're looking to advance your career in the tech
                      industry, we'll help fulfill your dream.
                      <br><br>
                      Check out more details on what<a rel="nofollow" href="https://www.toocss.com/" target="_blank"> to
                        expect from our courses.</a>`,
      },
      {
        show: false,
        title: "Why enter the IT industry?",
        text: `According to reports examining employee satisfaction, the primary reason for job dissatisfaction
                      is low salaries. Since you’re thinking of changing your job, you’re probably familiar with this
                      problem. Fortunately, this issue does not apply to the IT industry. Why? The answer is simple.
                      When you work in IT, you have the competencies of the future, the demand for which is growing at a
                      tremendous speed. <br><br>
                      As a student of this program, you'll be provided with access to career readiness tools, resources
                      and trainings, connections to employers, and opportunities to sharpen your skills.`,
      },
      {
        show: true,
        title: "World-class learning facility",
        text: `Our learning studio is designed to inspire focused learning, creativity and collaboration. It is
                      equiped with state-of-the-art learning equipments with no more than 10 students per class.<br><br>
                      Learn in an environment that puts you in direct contact with professional web developers and
                      software engineer.
                      You'll be provided with constant power and internet supply to make you focus on the job at hand`,
      },
    ],

    courseRoutes: [
      { title: "Python Full Stack Web Development", to: "" },
      { title: "Web, Mobile & API Developments", to: "" },
      { title: "UI/UX Design", to: "" },
      { title: "Graphics & Brand Awareness Design", to: "" },
      { title: "Database Development & Administration", to: "" },
    ],

    lastCards: [
      { stat: 1700, text: "Total Graduates" },
      { stat: 210, text: "Students At A Time" },
      { stat: 85, text: "Qualified Instructors" },
      { stat: 7, text: "Years On The Market" },
    ],
  }),

  components: {
    Heading,
    Courses,
    JoinCommunity,
    Bootcamp,
    ContactUsForm,
  },
  
  mounted() {
    this.$router.push("/home");
  },
};
</script>

<style scoped>
.v-heade {
  height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
}

.container {
  width: 100%;
  height: 100vh;
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

.section2,
.section4 {
  background: #f5f5f5;
}

.section3 {
  background: url(https://res.cloudinary.com/rukkiecodes/image/upload/v1673293841/wanlainjo/meetings-bg_ofgipt.jpg);
  background-size: cover;
  background-position: center;
}
</style>