<template>

  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0">{{ surname }}
        <span class="text-primary">{{ name }}</span>
      </h1>
      <div class="subheading mb-5">
        {{address}} · {{ phone }} ·
        <a class="link-primary" v-bind:href="mailToEmail">{{ email }}</a>
      </div>
      <p class="lead mb-5">{{description}}</p>
      <div class="social-icons">
        <a class="social-icon" v-bind:href="linkedin" v-show="linkedin"><i class="fab fa-linkedin-in"></i></a>
        <a class="social-icon" v-bind:href="github" v-show="github"><i class="fab fa-github"></i></a>
        <a class="social-icon" v-bind:href="twitter" v-show="twitter"><i class="fab fa-twitter"></i></a>
        <a class="social-icon" v-bind:href="facebook" href="#!" v-show="facebook"><i class="fab fa-facebook-f"></i></a>
        <a class="social-icon" v-bind:href="instagram" v-show="instagram"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </section>
  <hr class="m-0" />

  
</template>

<script setup>
import { ref } from "vue";

const name = ref('Alessandro')
const surname = ref("D'Errico")
const address = ref("Via delle Nocelle 4B - L'Aquila - 67100 - AQ - Italy")
const birthday = ref("02/02/1993")
const phone = ref(3356434967)
const email = ref("alede.derrico@gmail.com")
const linkedin = ref("https://www.linkedin.com/in/alede/")
const instagram = ref("https://www.instagram.com/giasone.ale/")
const github = ref("https://github.com/lamoichenzio")
const facebook = ref("https://www.facebook.com/alessandro.derrico2")
const twitter = ref("https://twitter.com/AlesDerrico")
const description = ref("Hello! I'm Alessandro, a passionate developer that love mobile and web development. With a strong background in Computer Science, I possess a good understanding of the most common technologies and frameworks used in the industry. I take great pride in crafting innovative and user-friendly solutions that seamlessly blend functionality with aesthetics. Whether it's creating intuitive mobile apps or building responsive web applications, I am dedicated to delivering high-quality results that exceed client expectations.")


const mailToEmail = ref("mailto:")

if(email.value) mailToEmail.value += email.value

</script>

<style scoped>
</style>