<script setup>
import About from "./sections/About.vue";
import Education from "./sections/Education.vue";
import Experience from "./sections/Experience.vue";
import Publication from "./sections/Publication.vue";
import Skill from "@/components/sections/Skill.vue";
import Interest from "@/components/sections/Interest.vue";
</script>

<template>

  <div class="container-fluid p-0 bg-light">

    <About></About>

    <Experience></Experience>

    <Education></Education>

    <Publication></Publication>

    <Skill></Skill>

    <Interest></Interest>

  </div>
</template>


<style>
</style>