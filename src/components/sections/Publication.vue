<template>

  <!-- Publications-->
  <section class="resume-section" id="publication">
    <div class="resume-section-content">
      <h2 class="mb-5">Publications</h2>

      <div v-for="item in publications">
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">{{ item.title }}</h3>
            <div class="subheading mb-3">{{ item.place }}</div>
            <a class="link-primary" v-bind:href="item.link">{{ item.link }}</a>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">{{ item.year }}</span></div>
        </div>

      </div>

    </div>
  </section>
  <hr class="m-0"/>
</template>
<script setup>
import {ref} from 'vue';

const publications = ref([])

publications.value.push({
  title: "The CrazySquare solution: a gamified ICT tool to support the musical learning in pre-adolescents",
  place: "AVI2020",
  link: "https://dl.acm.org/doi/abs/10.1145/3399715.3399943",
  year: "2020"
})

publications.value.push({
  title: "The CrazySquare Project: A Technological Pedagogical Content Knowledge Solution",
  place: "Proceedings of the 12th International Conference on Computer Supported Education - Volume 1: CSME",
  link: "https://www.scitepress.org/PublicationsDetail.aspx?ID=JvXfECpoKmI=&t=1",
  year: "2020"
})

</script>

<style>
</style>