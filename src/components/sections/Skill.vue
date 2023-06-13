<template>

  <!-- Skill-->
  <section class="resume-section" id="skill">
    <div class="resume-section-content">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3 text-primary">Programming Languages</div>
      Java / PHP / Javascript / Typescript / C / CSS / HTML / Swift / J
      SON / Smarty Template / SQL / Kotlin / Python / jQuery

      <div class="subheading mb-3 pt-4 text-primary">Frameworks</div>
      SwiftUI / Bootstrap / SpringBoot / Ionic 4 / React native / Agular
      / Node.js / Vue

      <div class="subheading mb-3 pt-4 text-primary">Database</div>
      Firestore (Firebase) / MongoDB / MySQL

      <div class="subheading mb-3 pt-4 text-primary">OS</div>
      Mac Os / Linux / Windows / Android / iOS

      <div class="subheading mb-3 pt-4 text-primary">Software</div>
      Android Studio / Microsoft Teams / IntelliJ IDEA / Skype / CLion / Eclipse /
      LogicProX / PostMan / VMWare / Git / Parallels / Indesig
      n / Coda / LightRoom / Microsoft Office / Photoshop / Visual
      studio Code / Illustrator / Xcode / DataGrip

    </div>
  </section>
  <hr class="m-0"/>
</template>
<script setup>
import {ref} from 'vue';

const experiences = ref([])

experiences.value.push({
  job: "Software developer",
  company: "Maggioli SPA - L'Aquila, Italy",
  description: "Development of Angular and Java applications",
  period: "01/09/2021 - CURRENT"
})

experiences.value.push({
  job: "Lecturer",
  company: "BiTE s.r.l. - L'Aquila, Italy",
  description: "Corporate training in Academy for Web Development: Web Front End in Angular JS, JSP and JavaServlet Web Back-End.\nDesign of mobile applications on the Android platform",
  period: "2021"
})

experiences.value.push({
  job: "Web Developer",
  company: "BiTE s.r.l. - L'Aquila, Italy",
  description: "Web design and development for the Abruzzo ICT hub",
  period: "2021 - CURRENT"
})

experiences.value.push({
  job: "Research scholarship",
  company: "University of L'Aquila - L'Aquila, Italy",
  description: "Research scholarship in 'Strumenti EDA (Electronic Design Automation) for Networked Embedded Systems'.\nDevelopment of mobile applications for Android platform, Java and Kotlin languages.\nWeb development in PHP and Smarty.",
  period: "2018 – 2021"
})

</script>

<style>
</style>