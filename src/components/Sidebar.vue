<template>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0" id="sideNav">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
        class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse my-auto" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link js-scroll-trigger pr-4" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger pr-4" href="#experience">Experience</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger pr-4" href="#education">Education</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger pr-4" href="#publication">Publications</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger pr-4" href="#skill">Skills</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger pr-4" href="#interests">Interests</a></li>
      </ul>
    </div>


      <!--        {{ address }} · {{ phone }} ·-->
      <a class="sidebar-email p-3" v-bind:href="mailToEmail"><i class="fa-solid fa-envelope pr-2"></i>{{
        email
      }}</a>


  </nav>

</template>

<script setup>

import {ref} from "vue";

const email = ref("alede.derrico@gmail.com")
const mailToEmail = ref("mailto:")

if (email.value) mailToEmail.value += email.value
</script>

<style>

.sidebar-email{
  font-size: 1rem !important;
}
</style>