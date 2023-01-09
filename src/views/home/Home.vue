<template>
  <div class="v-header container">
    <div class="fullscreen-video-wrap">
      <video src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
        autoplay loop muted></video>
    </div>
    <div class="header-overlay"></div>
    <v-container class="header-content">
      <h1 class="font-weight-light text-white text-h4 text-sm-h3 space-1">Welcome to <span
          class="font-weight-bold">Wanlainjo
          Tech-Hub</span></h1>

      <v-card color="transparent" flat width="600" max-width="100%">
        <v-card-text class="text-white font-weight-light px-0 space-1 text-body-">
          Gain new skills in just a few months. Go from Newbie to Pro in a short
          time. Explore the most effective way
          to grow your skills, transform yourself and be market ready in a few months.
        </v-card-text>
      </v-card>
      <v-btn to="/community" color="indigo-darken-4" class="rounded-xl text-body-2" size="large" flat>
        Join Us Now!
      </v-btn>
    </v-container>
  </div>
</template>

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
</style>