<template>

  <!-- Education-->
  <section class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>

      <div v-for="item in educations">
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">{{ item.title }}</h3>
            <div class="subheading mb-3">{{ item.place }}</div>
            <div v-if="item.thesis">Thesis: {{ item.thesis }}</div>
            <p v-if="item.vote">Vote: {{ item.vote }}</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">{{ item.period }}</span></div>
        </div>
      </div>

    </div>
  </section>
  <hr class="m-0"/>
</template>
<script setup>
import {ref} from 'vue';

const educations = ref([])

educations.value.push({
  title: "Master Degree in Computer Science - SeAS",
  place: "University of L'Aquila - L'Aquila, Italy",
  thesis: "Design of a system to prevent the spread of Covid 19 by temperature monitoring for companies",
  vote: "110/110 cum Lode",
  period: "2018 – 2021"
})

educations.value.push({
  title: "1° Level Master - Mobile and Web Technology",
  place: "University of L'Aquila - L'Aquila, Italy",
  vote: "70/70 cum Lode",
  period: "2019 – 2020"
})

educations.value.push({
  title: "Three-Year Degree in Computer Science",
  place: "University of L'Aquila - L'Aquila, Italy",
  thesis: "Developing of an application for SIP telephony system on iOS devices",
  vote: "95/110",
  period: "2012 – 2018"
})


educations.value.push({
  title: "Secondary School: Diploma di Liceo Scientifico",
  place: "Liceo Classico e Scientifico Publio Virgilio Marone - Vico del Gargano, Italy",
  period: "2007 – 2012"
})

</script>
<style></style>