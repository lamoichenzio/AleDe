<template>
  <hr class="m-0" />
  <!-- Experience-->
  <section class="resume-section" v-bind:id="sectionId">
    <div class="resume-section-content">
      <h2 class="mb-5">{{sectionTitle}}</h2>

      <slot></slot>

    </div>
  </section>
</template>

<script setup>
const pros = defineProps({
  sectionTitle: String,
  sectionId: String
})
</script>

<style scoped>

</style>