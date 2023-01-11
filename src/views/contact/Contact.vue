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
      <v-card width="700" max-width="100%" flat color="transparent">
        <v-card-text class="text-body-1 px-0 text-white font-weight-light">
          <h1
            class="
              font-weight-light
              text-white text-h4 text-sm-h3
              space-1
              text-capitalize
            "
          >
            We’re Here To Help Start Your Journey To The IT World
          </h1>
        </v-card-text>
      </v-card>
      <v-card width="600" max-width="100%" flat color="transparent">
        <v-card-text class="text-body-1 px-0 text-white font-weight-light">
          A job in the tech industry is something everyone can land, as long as
          they’re interested in the IT world. We believe that you don’t need a
          Computer Science degree to become a software developer.
        </v-card-text>
      </v-card>
    </v-container>
  </div>

  <v-container>
    <ContactUsForm class="mt-16" />
  </v-container>

  <div class="section">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" order="1" order-sm="0">
          <v-card>
            <v-card-title class="">Who We Are</v-card-title>

            <v-card-text
              >Become a well-rounded Web Developer in no time!</v-card-text
            >

            <v-card-text
              >WTH is a top-rated tech academy in Port Harcourt. In the last 3
              years, we've trained hundreds of students - both online and
              physical - and helped them to navigate and forge their paths in
              the tech industry. We teach the important skills required to
              jumpstart your career as a web developer. With 16 intense weeks of
              on-campus training, you learn to think and build like software
              developers. You move from understanding programming fundamentals
              to launching full-stack web apps.</v-card-text
            >

            <v-card-text
              >With our career guidance and thorough assistance, some of our
              students are working with top organizations in the country and
              beyond. If you're looking to advance your career in the tech
              industry, we'll help fulfill your dream. Though there's not enough
              reasons why we're the best tech training school around, but here
              are a couple:</v-card-text
            >

            <v-card-text
              >• We provide you with the best learning facility you can lay your
              eyes on. All our classes are en-suite and equipped with the latest
              technologies for learning.:</v-card-text
            >

            <v-card-text
              >• Our tutors are highly trained professionals that are choosen
              based on industry experience and teaching ability.:</v-card-text
            >

            <v-card-text
              >• We offer you the best support - either while you're learning or
              after you've graduated. We provide career support to get you hired
              in no time.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
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
</template>

<script>
import ContactUsForm from "@/components/ContactUsForm.vue";
export default {
  data: () => ({
    tab: null,
  }),

  components: {
    ContactUsForm,
  },
};
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