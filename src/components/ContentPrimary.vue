<template>
  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0">
        {{ surname }}
        <span class="text-primary">{{ name }}</span>
      </h1>
      <div class="subheading mb-5" v-if="address">
        · {{ address }}
      </div>
      <div class="subheading mb-5" v-if="phone">
        · {{phone}}
      </div>
      <div class="subheading mb-5 text-primary" v-if="email">
        {{email}}
      </div>
      <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
        value proposition.</p>
      <div class="social-icons">
        <a v-if="linkedin" class="social-icon" v-bind:href="linkedin"><i class="fab fa-linkedin-in"></i></a>
        <a v-if="github" class="social-icon" v-bind:href="github"><i class="fab fa-github"></i></a>
        <a v-if="twitter" class="social-icon" v-bind:href="twitter"><i class="fab fa-twitter"></i></a>
        <a v-if="facebook" class="social-icon" v-bind:href="facebook"><i class="fab fa-facebook-f"></i></a>
        <a v-if="instagram" class="social-icon" v-bind:href="instagram"><i class="fab fa-instagram-f"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  name: String,
  surname: String,
  email: String,
  address: String,
  phone: Number,
  birthday: String,
  description: String,
  linkedin: String,
  github: String,
  twitter: String,
  facebook: String,
  instagram: String,
})
</script>

<style scoped>

</style>