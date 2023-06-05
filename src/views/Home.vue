<script setup>
import {onMounted, ref} from "vue";

const p = ref(null)

onMounted(() => {
  // component is now mounted.
  p.value.textContent = "mounted"
})

</script>

<template>
  <p ref="p">Hello</p>
</template>