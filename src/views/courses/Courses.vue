<template>
    <div class="v-header container">
        <div class="fullscreen-video-wrap">
            <video
                src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
                autoplay loop muted></video>
        </div>
        <div class="header-overlay"></div>
        <v-container class="header-content">
            <h1 class="font-weight-light text-white text-h4 text-sm-h3 space-1 text-capitalize">OUR <span
                    class="font-weight-bold">COURSES</span></h1>
        </v-container>
    </div>

    <v-container>
        <Heading text="OUR COURSES" />

        <Courses />

        <ContactUsForm class="mt-16" />
    </v-container>
</template>

<script>
import ContactUsForm from '@/components/ContactUsForm.vue'
import Heading from '@/components/Heading.vue'
import Courses from '@/components/Courses.vue'
export default {
    components: {
        ContactUsForm,
        Heading,
        Courses
    }
}
</script>

<style scoped>
.v-heade {
    height: 50vh;
    display: flex;
    align-items: center;
    color: #fff;
}

.container {
    width: 100%;
    height: 50vh;
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